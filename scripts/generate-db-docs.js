require('dotenv').config();


// This is the main documentation generator
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DatabaseDocumenter {
    constructor() {
        this.pool = new Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        });
        
        this.outputDir = path.join(__dirname, '../whynotbroker-database-docs');
        this.ensureDirectory();
    }
    
    ensureDirectory() {
        const dirs = ['', 'cheatsheets'];
        dirs.forEach(dir => {
            const fullPath = path.join(this.outputDir, dir);
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath, { recursive: true });
            }
        });
    }
    
    async generateAllDocs() {
        console.log('🚀 Starting database documentation generation...');
        
        try {
            // 1. Get current schema
            const schema = await this.fetchSchema();
            
            // 2. Load previous schema to detect changes
            const previousSchema = this.loadPreviousSchema();
            
            // 3. Generate changelog
            const changes = this.detectChanges(previousSchema, schema);
            
            // 4. Generate all documentation files
            await this.generateReadme(schema);
            await this.generateFullSchema(schema);
            await this.generateQuickStart(schema);
            await this.generateSchemaJson(schema);
            await this.generateExamples(schema);
            await this.generateConstraints(schema);
            await this.generateRelationships(schema);
            await this.generateChangelog(changes, schema);
            await this.generateCheatsheets(schema);
            await this.generateAiPromptTemplate(schema);
            
            // 5. Save current schema for next comparison
            this.saveCurrentSchema(schema);
            
            // 6. Generate ERD
            await this.generateERD(schema);
            
            console.log('✅ Documentation generated successfully!');
            console.log(`📁 Output directory: ${this.outputDir}`);
            
            // 7. Return changes for GitHub Actions summary
            return changes;
            
        } catch (error) {
            console.error('❌ Error generating documentation:', error);
            throw error;
        } finally {
            await this.pool.end();
        }
    }
    
    async fetchSchema() {
        console.log('📊 Fetching current database schema...');
        
        const client = await this.pool.connect();
        
        try {
            // Execute all the queries from Step 1
            const [
                tablesResult,
                columnsResult,
                constraintsResult,
                rlsResult,
                foreignKeysResult,
                indexesResult
            ] = await Promise.all([
                client.query(`
                    SELECT t.table_name,
                           COUNT(c.column_name) as column_count,
                           (xpath('/row/cnt/text()', 
                                  query_to_xml(format('SELECT COUNT(*) as cnt FROM public.%I', t.table_name), 
                                  false, true, '')))[1]::text::int AS row_count
                    FROM information_schema.tables t
                    LEFT JOIN information_schema.columns c 
                        ON t.table_schema = c.table_schema 
                        AND t.table_name = c.table_name
                    WHERE t.table_schema = 'public'
                        AND t.table_type = 'BASE TABLE'
                    GROUP BY t.table_name
                    ORDER BY t.table_name;
                `),
                client.query(`
                    SELECT table_name, column_name, data_type, 
                           is_nullable, column_default, ordinal_position
                    FROM information_schema.columns
                    WHERE table_schema = 'public'
                    ORDER BY table_name, ordinal_position;
                `),
                client.query(`
                    SELECT tc.table_name, tc.constraint_name, 
                           tc.constraint_type, kcu.column_name,
                           pg_get_constraintdef(pc.oid) AS definition
                    FROM information_schema.table_constraints tc
                    LEFT JOIN information_schema.key_column_usage kcu
                        ON tc.constraint_name = kcu.constraint_name
                    LEFT JOIN pg_constraint pc
                        ON pc.conname = tc.constraint_name
                    WHERE tc.table_schema = 'public'
                        AND tc.constraint_type IN ('PRIMARY KEY', 'FOREIGN KEY', 'UNIQUE', 'CHECK')
                    ORDER BY tc.table_name, tc.constraint_type;
                `),
                client.query(`
                    SELECT tablename, policyname, roles, cmd, qual
                    FROM pg_policies
                    WHERE schemaname = 'public'
                    ORDER BY tablename, policyname;
                `),
                client.query(`
                    SELECT tc.table_name AS source_table,
                           kcu.column_name AS source_column,
                           ccu.table_name AS target_table,
                           ccu.column_name AS target_column
                    FROM information_schema.table_constraints tc
                    JOIN information_schema.key_column_usage kcu
                        ON tc.constraint_name = kcu.constraint_name
                    JOIN information_schema.constraint_column_usage ccu
                        ON ccu.constraint_name = tc.constraint_name
                    WHERE tc.constraint_type = 'FOREIGN KEY'
                        AND tc.table_schema = 'public'
                    ORDER BY tc.table_name;
                `),
                client.query(`
                    SELECT tablename, indexname, indexdef
                    FROM pg_indexes
                    WHERE schemaname = 'public'
                        AND tablename NOT LIKE 'pg_%'
                    ORDER BY tablename, indexname;
                `)
            ]);
            
            // Organize the data
            const schema = {
                generated_at: new Date().toISOString(),
                tables: {},
                total_tables: tablesResult.rows.length,
                total_columns: columnsResult.rows.length
            };
            
            // Organize tables
            tablesResult.rows.forEach(table => {
                schema.tables[table.table_name] = {
                    column_count: table.column_count,
                    row_count: table.row_count,
                    columns: [],
                    constraints: [],
                    indexes: [],
                    rls_policies: [],
                    foreign_keys: []
                };
            });
            
            // Add columns to each table
            columnsResult.rows.forEach(column => {
                if (schema.tables[column.table_name]) {
                    schema.tables[column.table_name].columns.push({
                        name: column.column_name,
                        type: column.data_type,
                        nullable: column.is_nullable === 'YES',
                        default: column.column_default,
                        position: column.ordinal_position
                    });
                }
            });
            
            // Add constraints
            constraintsResult.rows.forEach(constraint => {
                if (schema.tables[constraint.table_name]) {
                    schema.tables[constraint.table_name].constraints.push({
                        name: constraint.constraint_name,
                        type: constraint.constraint_type,
                        column: constraint.column_name,
                        definition: constraint.definition
                    });
                }
            });
            
            // Add RLS policies
            rlsResult.rows.forEach(policy => {
                if (schema.tables[policy.tablename]) {
                    schema.tables[policy.tablename].rls_policies.push({
                        name: policy.policyname,
                        roles: policy.roles,
                        command: policy.cmd,
                        condition: policy.qual
                    });
                }
            });
            
            // Add foreign keys
            foreignKeysResult.rows.forEach(fk => {
                if (schema.tables[fk.source_table]) {
                    schema.tables[fk.source_table].foreign_keys.push({
                        source_column: fk.source_column,
                        target_table: fk.target_table,
                        target_column: fk.target_column
                    });
                }
            });
            
            // Add indexes
            indexesResult.rows.forEach(index => {
                if (schema.tables[index.tablename]) {
                    schema.tables[index.tablename].indexes.push({
                        name: index.indexname,
                        definition: index.indexdef
                    });
                }
            });
            
            return schema;
            
        } finally {
            client.release();
        }
    }
    
    detectChanges(previousSchema, currentSchema) {
        const changes = {
            added_tables: [],
            removed_tables: [],
            added_columns: {},
            removed_columns: {},
            modified_columns: {}
        };
        
        if (!previousSchema) {
            console.log('📝 No previous schema found - first time generation');
            return changes;
        }
        
        // Compare tables
        const previousTables = Object.keys(previousSchema.tables || {});
        const currentTables = Object.keys(currentSchema.tables);
        
        changes.added_tables = currentTables.filter(t => !previousTables.includes(t));
        changes.removed_tables = previousTables.filter(t => !currentTables.includes(t));
        
        // Compare columns for each table
        currentTables.forEach(table => {
            if (previousSchema.tables[table]) {
                const prevColumns = previousSchema.tables[table].columns.map(c => c.name);
                const currColumns = currentSchema.tables[table].columns.map(c => c.name);
                
                const added = currColumns.filter(c => !prevColumns.includes(c));
                const removed = prevColumns.filter(c => !currColumns.includes(c));
                
                if (added.length > 0) changes.added_columns[table] = added;
                if (removed.length > 0) changes.removed_columns[table] = removed;
            }
        });
        
        return changes;
    }
    
    async generateReadme(schema) {
        const content = `# 🏠 WHYNOTBROKER Database Documentation
> **Live, auto-updated database reference**  
> Last Updated: ${new Date(schema.generated_at).toLocaleString()}

## 📊 Quick Stats
- **Total Tables:** ${schema.total_tables}
- **Total Columns:** ${schema.total_columns}
- **Main Table:** \`properties\` (${schema.tables.properties?.column_count || 'N/A'} columns, ~${schema.tables.properties?.row_count || 'N/A'} rows)

## 🚀 Getting Started
1. **New Developer?** → Read [QUICK-START.md](./QUICK-START.md) (5 minutes)
2. **Need Full Details?** → Read [FULL-SCHEMA.md](./FULL-SCHEMA.md)
3. **Stuck with Errors?** → Check [COMMON-ERRORS.md](./COMMON-ERRORS.md)
4. **Working with AI?** → Use [ai-prompt-template.md](./ai-prompt-template.md)

## 📁 Documentation Structure
\`\`\`
/whynotbroker-database-docs/
├── 📄 README.md                    # You are here
├── 📄 FULL-SCHEMA.md               # Complete schema details
├── 📄 QUICK-START.md               # 5-min guide for new devs
├── 📄 COMMON-ERRORS.md             # Team's learned mistakes
├── 📄 schema.json                  # Machine-readable schema
├── 📄 examples.json                # Real data samples
├── 📄 constraints.json             # Rules and limits
├── 📄 relationships.json           # Foreign keys
├── 📄 changelog.json               # Recent changes
├── 📄 ai-prompt-template.md        # How to brief AI about your DB
├── 📊 schema-diagram.svg           # Visual ERD
└── 📁 cheatsheets/
    ├── insert-property.md
    ├── query-properties.md
    └── update-property.md
\`\`\`

## 🔄 Auto-Update Schedule
This documentation updates:
- **Daily** at 6:00 AM UTC
- **On-demand** via GitHub Actions
- **After schema changes** via webhook

## 📞 Need Help?
1. Check the cheatsheets in \`/cheatsheets/\`
2. Look at real examples in \`examples.json\`
3. Review recent changes in \`changelog.json\`

---
*This documentation is auto-generated. Manual edits will be overwritten.*
`;
        
        fs.writeFileSync(path.join(this.outputDir, 'README.md'), content);
    }
    
    async generateFullSchema(schema) {
        let content = `# WHYNOTBROKER - Full Database Schema
> Auto-generated on: ${new Date(schema.generated_at).toLocaleString()}
> **Total Tables:** ${schema.total_tables}

## Overview
This document details the live schema of the production Supabase database. All API backend code must align with the structures and rules defined here.

---

## 1. Core Tables\n\n`;
        
        // Generate table documentation
        Object.entries(schema.tables).forEach(([tableName, tableData]) => {
            content += `### \`${tableName}\`\n`;
            content += `**Description:** ${this.getTableDescription(tableName)}\n`;
            content += `**Rows:** ~${tableData.row_count.toLocaleString()}  \n`;
            content += `**Columns:** ${tableData.column_count}\n\n`;
            
            // Column table
            content += `| Column | Type | Nullable | Default | Notes |\n`;
            content += `|--------|------|----------|---------|-------|\n`;
            
            tableData.columns.forEach(col => {
                const notes = [];
                
                // Check for constraints
                tableData.constraints
                    .filter(c => c.column === col.name)
                    .forEach(c => {
                        if (c.type === 'CHECK') notes.push(`Check: ${c.definition}`);
                        if (c.type === 'UNIQUE') notes.push('Unique');
                        if (c.type === 'PRIMARY KEY') notes.push('Primary Key');
                    });
                
                // Check for foreign keys
                tableData.foreign_keys
                    .filter(fk => fk.source_column === col.name)
                    .forEach(fk => {
                        notes.push(`FK → ${fk.target_table}.${fk.target_column}`);
                    });
                
                content += `| \`${col.name}\` | \`${col.type}\` | ${col.nullable ? 'YES' : 'NO'} | \`${col.default || '—'}\` | ${notes.join('<br>')} |\n`;
            });
            
            content += '\n';
            
            // Indexes
            if (tableData.indexes.length > 0) {
                content += `**Indexes:**\n`;
                tableData.indexes.forEach(idx => {
                    content += `- \`${idx.name}\`: ${idx.definition}\n`;
                });
                content += '\n';
            }
            
            // RLS Policies
            if (tableData.rls_policies.length > 0) {
                content += `**RLS Policies:**\n`;
                tableData.rls_policies.forEach(policy => {
                    content += `- \`${policy.name}\`: ${policy.command} for ${policy.roles} ${policy.condition ? `where ${policy.condition}` : ''}\n`;
                });
                content += '\n';
            }
            
            content += '---\n\n';
        });
        
        fs.writeFileSync(path.join(this.outputDir, 'FULL-SCHEMA.md'), content);
    }
    
    getTableDescription(tableName) {
        const descriptions = {
            'properties': 'Main property listings - all property details',
            'profiles': 'User profiles linked to auth.users',
            'property_images': 'Images associated with properties',
            'property_amenities': 'Amenities and features for properties',
            'appointments': 'Property viewing appointments',
            'messages': 'User-to-user messages',
            'user_ratings': 'Ratings and reviews',
            'search_history': 'User search queries and filters',
            'notifications': 'System notifications for users',
            'blog_posts': 'Blog articles and content'
        };
        
        return descriptions[tableName] || 'No description available';
    }
    
    async generateSchemaJson(schema) {
        fs.writeFileSync(
            path.join(this.outputDir, 'schema.json'),
            JSON.stringify(schema, null, 2)
        );
    }
    
    async generateChangelog(changes, schema) {
        const changelogPath = path.join(this.outputDir, 'changelog.json');
        let existingLog = [];
        
        if (fs.existsSync(changelogPath)) {
            existingLog = JSON.parse(fs.readFileSync(changelogPath, 'utf8'));
        }
        
        const newEntry = {
            date: schema.generated_at,
            changes: changes,
            summary: this.generateChangeSummary(changes)
        };
        
        // Keep only last 30 days of changes
        existingLog.unshift(newEntry);
        if (existingLog.length > 30) {
            existingLog = existingLog.slice(0, 30);
        }
        
        fs.writeFileSync(changelogPath, JSON.stringify(existingLog, null, 2));
        
        // Also generate a human-readable markdown changelog
        const markdownChangelog = this.generateMarkdownChangelog(existingLog);
        fs.writeFileSync(path.join(this.outputDir, 'CHANGELOG.md'), markdownChangelog);
    }
    
    generateChangeSummary(changes) {
        let summary = [];
        
        if (changes.added_tables.length > 0) {
            summary.push(`Added tables: ${changes.added_tables.join(', ')}`);
        }
        
        if (changes.removed_tables.length > 0) {
            summary.push(`Removed tables: ${changes.removed_tables.join(', ')}`);
        }
        
        Object.entries(changes.added_columns).forEach(([table, cols]) => {
            summary.push(`${table}: +${cols.join(', +')}`);
        });
        
        Object.entries(changes.removed_columns).forEach(([table, cols]) => {
            summary.push(`${table}: -${cols.join(', -')}`);
        });
        
        return summary.length > 0 ? summary.join(' | ') : 'No structural changes';
    }
    
    generateMarkdownChangelog(entries) {
        let content = '# Database Schema Changelog\n\n';
        
        entries.forEach(entry => {
            const date = new Date(entry.date).toLocaleDateString();
            content += `## ${date}\n`;
            content += `*${entry.summary}*\n\n`;
            
            if (entry.changes.added_tables.length > 0) {
                content += `### 🆕 Tables Added\n`;
                entry.changes.added_tables.forEach(table => {
                    content += `- \`${table}\`\n`;
                });
                content += '\n';
            }
            
            Object.entries(entry.changes.added_columns).forEach(([table, cols]) => {
                content += `### 📝 ${table} Changes\n`;
                cols.forEach(col => {
                    content += `- **Added:** \`${col}\`\n`;
                });
            });
            
            content += '---\n\n';
        });
        
        return content;
    }
    
    async generateERD(schema) {
        console.log('🔄 Generating ERD diagram...');
        
        // Generate dbml (Database Markup Language) for dbdiagram.io
        let dbml = '// WHYNOTBROKER Database ERD\n// Auto-generated on ' + new Date().toISOString() + '\n\n';
        
        Object.entries(schema.tables).forEach(([tableName, tableData]) => {
            dbml += `Table ${tableName} {\n`;
            
            tableData.columns.forEach(col => {
                let line = `  ${col.name} ${this.convertToDBMLType(col.type)}`;
                
                if (!col.nullable) line += ' [not null]';
                if (col.default) line += ` [default: ${col.default}]`;
                
                // Check if this is a primary key
                const isPK = tableData.constraints.some(c => 
                    c.type === 'PRIMARY KEY' && c.column === col.name
                );
                if (isPK) line += ' [pk]';
                
                dbml += line + '\n';
            });
            
            dbml += '}\n\n';
        });
        
        // Add relationships
        Object.entries(schema.tables).forEach(([tableName, tableData]) => {
            tableData.foreign_keys.forEach(fk => {
                dbml += `Ref: ${tableName}.${fk.source_column} > ${fk.target_table}.${fk.target_column}\n`;
            });
        });
        
        const dbmlPath = path.join(this.outputDir, 'schema.dbml');
        fs.writeFileSync(dbmlPath, dbml);
        
        console.log('✅ ERD definition saved as schema.dbml');
        console.log('💡 Upload this file to https://dbdiagram.io/ for visualization');
    }
    
    convertToDBMLType(postgresType) {
        const typeMap = {
            'uuid': 'uuid',
            'text': 'text',
            'integer': 'int',
            'bigint': 'bigint',
            'numeric': 'decimal',
            'boolean': 'boolean',
            'timestamp with time zone': 'timestamp',
            'date': 'date',
            'time without time zone': 'time',
            'jsonb': 'json',
            'inet': 'text',
            'ARRAY': 'text[]'
        };
        
        return typeMap[postgresType] || postgresType;
    }
    
    // Other generation methods (quickStart, examples, constraints, etc.)
    // ... [Additional methods would go here]
    
    loadPreviousSchema() {
        const schemaPath = path.join(this.outputDir, 'schema.json');
        if (fs.existsSync(schemaPath)) {
            return JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
        }
        return null;
    }
    
    saveCurrentSchema(schema) {
        const schemaPath = path.join(this.outputDir, 'schema.json');
        fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2));
    }
}

// Run if called directly
if (require.main === module) {
    const documenter = new DatabaseDocumenter();
    documenter.generateAllDocs().catch(console.error);
}

module.exports = DatabaseDocumenter;


