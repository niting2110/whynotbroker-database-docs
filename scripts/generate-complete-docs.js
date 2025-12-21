require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Set Node.js to ignore SSL certificate errors globally
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

console.log("🚀 Generating COMPLETE database documentation...");
console.log("Database URL present:", !!process.env.DATABASE_URL);
console.log("Node version:", process.version);
console.log("NODE_TLS_REJECT_UNAUTHORIZED:", process.env.NODE_TLS_REJECT_UNAUTHORIZED);

class CompleteDocumenter {
    constructor() {
        const connectionString = process.env.DATABASE_URL;
        
        if (!connectionString) {
            throw new Error("DATABASE_URL environment variable is not set");
        }
        
        console.log("Connecting to database...");
        
        // Parse the connection string to handle SSL properly
        const parsedUrl = new URL(connectionString.replace(/^postgresql:/, 'http:'));
        
        // For Supabase, we need to append SSL parameters to the connection string
        let modifiedConnectionString = connectionString;
        
        // Check if SSL parameters are already in the connection string
        if (!connectionString.includes('sslmode=')) {
            modifiedConnectionString += '?sslmode=require&ssl=1';
        }
        
        console.log("Modified connection string (without password):", 
            modifiedConnectionString.replace(/password=[^&]*/, 'password=***'));
        
        this.pool = new Pool({
            connectionString: modifiedConnectionString,
            connectionTimeoutMillis: 30000,
            query_timeout: 60000,
            // Force SSL mode for Supabase
            ssl: {
                rejectUnauthorized: false,
                require: true
            }
        });
        
        this.outputDir = path.join(__dirname, '..');
        this.ensureDirectories();
    }
    
    ensureDirectories() {
        const dirs = ['', 'cheatsheets'];
        dirs.forEach(dir => {
            const fullPath = path.join(this.outputDir, dir);
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath, { recursive: true });
            }
        });
    }
    
    async generateAll() {
        let client;
        
        try {
            console.log("Attempting to connect to database...");
            client = await this.pool.connect();
            console.log("✅ Connected to database");
            
            // Test connection with a simple query
            const testQuery = await client.query('SELECT NOW() as current_time');
            console.log("Database time:", testQuery.rows[0].current_time);
            
            // 1. Get ALL tables with detailed info
            console.log("📊 Fetching complete schema...");
            const tablesQuery = await client.query(`
                SELECT t.table_name,
                       (SELECT COUNT(*) FROM information_schema.columns c 
                        WHERE c.table_schema = 'public' 
                          AND c.table_name = t.table_name) as column_count,
                       (xpath('/row/cnt/text()', 
                           query_to_xml(format('SELECT COUNT(*) as cnt FROM public.%I', t.table_name), 
                           false, true, '')))[1]::text::int as row_count
                FROM information_schema.tables t
                WHERE t.table_schema = 'public'
                  AND t.table_type = 'BASE TABLE'
                ORDER BY t.table_name;
            `);
            
            const tables = tablesQuery.rows;
            console.log(`📋 Found ${tables.length} tables`);
            
            if (tables.length === 0) {
                console.log("⚠️ No tables found in public schema");
            }
            
            // 2. Get detailed info for each table
            const tableDetails = {};
            for (const table of tables) {
                console.log(`   📝 Processing: ${table.table_name}`);
                
                // Get columns
                const columns = await client.query(`
                    SELECT column_name, data_type, is_nullable, 
                           column_default, ordinal_position
                    FROM information_schema.columns
                    WHERE table_schema = 'public' 
                      AND table_name = $1
                    ORDER BY ordinal_position;
                `, [table.table_name]);
                
                // Get constraints
                const constraints = await client.query(`
                    SELECT tc.constraint_name, tc.constraint_type,
                           kcu.column_name, pg_get_constraintdef(pc.oid) as definition
                    FROM information_schema.table_constraints tc
                    LEFT JOIN information_schema.key_column_usage kcu
                        ON tc.constraint_name = kcu.constraint_name
                    LEFT JOIN pg_constraint pc
                        ON pc.conname = tc.constraint_name
                    WHERE tc.table_schema = 'public' 
                      AND tc.table_name = $1;
                `, [table.table_name]);
                
                tableDetails[table.table_name] = {
                    columns: columns.rows,
                    constraints: constraints.rows,
                    row_count: table.row_count,
                    column_count: table.column_count
                };
            }
            
            // 3. Generate all documentation files
            await this.generateReadme(tables, tableDetails);
            await this.generateFullSchema(tables, tableDetails);
            await this.generateSchemaJson(tables, tableDetails);
            await this.generateQuickStart();
            await this.generateCheatsheets(tableDetails.properties);
            await this.generateAiPromptTemplate(tables, tableDetails);
            
            console.log("\n🎉 COMPLETE documentation generated!");
            console.log("📁 Location: " + this.outputDir);
            
        } catch (error) {
            console.error("❌ Error:", error.message);
            console.error("Error stack:", error.stack);
            if (error.code) console.error("Error code:", error.code);
            if (error.host) console.error("Host:", error.host);
            if (error.port) console.error("Port:", error.port);
            process.exit(1);
        } finally {
            if (client) {
                client.release();
            }
            await this.pool.end();
        }
    }
    
    async generateReadme(tables, tableDetails) {
        const totalColumns = tables.reduce((sum, t) => sum + t.column_count, 0);
        const props = tableDetails.properties || {};
        
        const content = `# 🏠 WHYNOTBROKER Database Documentation
> **Live, auto-updated database reference**  
> Generated: ${new Date().toISOString()}

## 📊 Quick Stats
- **Total Tables:** ${tables.length}
- **Total Columns:** ${totalColumns}
- **Main Table:** \`properties\` (${props.column_count || 0} columns, ~${props.row_count || 0} rows)

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
- **Daily** at 6:00 AM UTC via GitHub Actions
- **On-demand** via manual trigger
- **After schema changes** via webhook

## 📋 Table Summary
| Table | Columns | Rows |
|-------|---------|------|
${tables.map(t => `| \`${t.table_name}\` | ${t.column_count} | ~${t.row_count.toLocaleString()} |`).join('\n')}

---
*This documentation is auto-generated. Manual edits will be overwritten.*`;
        
        fs.writeFileSync(path.join(this.outputDir, 'README.md'), content);
        console.log("✅ Created README.md");
    }
    
    async generateFullSchema(tables, tableDetails) {
        let content = `# WHYNOTBROKER - Full Database Schema
> Auto-generated on: ${new Date().toISOString()}
> **Total Tables:** ${tables.length}

## Overview
This document details the live schema of the production Supabase database. All API backend code must align with the structures and rules defined here.

---

## Core Tables\n\n`;
        
        // Generate documentation for each table
        for (const table of tables) {
            const details = tableDetails[table.table_name];
            
            content += `### \`${table.table_name}\`\n`;
            content += `**Rows:** ~${table.row_count.toLocaleString()}  \n`;
            content += `**Columns:** ${table.column_count}\n\n`;
            
            if (details.columns.length > 0) {
                content += `| Column | Type | Nullable | Default |\n`;
                content += `|--------|------|----------|---------|\n`;
                
                details.columns.forEach(col => {
                    content += `| \`${col.column_name}\` | \`${col.data_type}\` | ${col.is_nullable} | \`${col.column_default || '—'}\` |\n`;
                });
            }
            
            if (details.constraints.length > 0) {
                content += `\n**Constraints:**\n`;
                details.constraints.forEach(con => {
                    if (con.definition) {
                        content += `- \`${con.constraint_name}\`: ${con.definition}\n`;
                    }
                });
            }
            
            content += '\n---\n\n';
        }
        
        fs.writeFileSync(path.join(this.outputDir, 'FULL-SCHEMA.md'), content);
        console.log("✅ Created FULL-SCHEMA.md");
    }
    
    async generateSchemaJson(tables, tableDetails) {
        const schema = {
            generated_at: new Date().toISOString(),
            database: 'WHYNOTBROKER',
            tables: tables.map(t => ({
                name: t.table_name,
                columns: t.column_count,
                rows: t.row_count,
                details: tableDetails[t.table_name]
            }))
        };
        
        fs.writeFileSync(
            path.join(this.outputDir, 'schema.json'),
            JSON.stringify(schema, null, 2)
        );
        console.log("✅ Created schema.json");
    }
    
    async generateQuickStart() {
        const content = `# 🚀 Quick Start Guide - WHYNOTBROKER Database
> Time: 5 minutes | For: New developers

## 1. Database Connection
\`\`\`javascript
// Using Supabase JavaScript client
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Or direct PostgreSQL connection
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
\`\`\`

## 2. Common Queries

### Get all published properties
\`\`\`sql
SELECT * FROM properties 
WHERE status = 'published' 
  AND is_active = true
ORDER BY created_at DESC
LIMIT 20;
\`\`\`

### Get properties by city
\`\`\`sql
SELECT id, pid, title, price, city, bedrooms, property_type
FROM properties
WHERE city = 'Bangalore'
  AND status = 'published'
ORDER BY price DESC;
\`\`\`

## 3. Important Rules
- **bhk_type** must be lowercase: \`'3bhk'\` NOT \`'3 BHK'\`
- **status** must be: draft/pending/published/sold/rented
- **price** is in INR (Indian Rupees)

## 4. Next Steps
1. Review \`FULL-SCHEMA.md\` for complete table structures
2. Check \`cheatsheets/\` for common operations
3. Use \`ai-prompt-template.md\` when working with AI

---
*Last updated: ${new Date().toISOString()}*`;
        
        fs.writeFileSync(path.join(this.outputDir, 'QUICK-START.md'), content);
        console.log("✅ Created QUICK-START.md");
    }
    
    async generateCheatsheets(propertiesTable) {
        const cheatsheetsDir = path.join(this.outputDir, 'cheatsheets');
        
        // Insert Property Cheatsheet
        const insertContent = `# Insert Property - Cheatsheet

## Basic Insert
\`\`\`sql
INSERT INTO properties (
    pid, title, price, city, property_type,
    listing_type, bhk_type, contact_phone,
    user_id, status
) VALUES (
    'PROP' || LPAD(nextval('property_seq')::text, 6, '0'),
    '3 BHK Luxury Apartment in Bangalore',
    10900000,
    'Bangalore',
    'apartment',
    'sale',
    '3bhk',  -- MUST be lowercase
    '9876543210',
    '11111111-1111-1111-1111-111111111111', -- user_id from auth.users
    'draft'
);
\`\`\`

## Required Fields
- \`pid\`: Auto-generated format 'PROP000001'
- \`title\`: Property title (max 200 chars)
- \`price\`: Numeric, in INR
- \`city\`: Text
- \`property_type\`: apartment/house/villa/commercial/land
- \`listing_type\`: sale/rent/lease
- \`contact_phone\`: 10-digit Indian number
- \`user_id\': Must exist in auth.users

## Common Mistakes
❌ \`bhk_type='3 BHK'\` → ✅ \`bhk_type='3bhk'\`
❌ \`price='1 crore'\` → ✅ \`price=10000000\`
❌ Missing \`user_id\` → Must link to auth.users`;
        
        fs.writeFileSync(path.join(cheatsheetsDir, 'insert-property.md'), insertContent);
        console.log("✅ Created cheatsheets/insert-property.md");
        
        // Add more cheatsheets as needed...
    }
    
    async generateAiPromptTemplate(tables, tableDetails) {
        const content = `# AI Prompt Template - WHYNOTBROKER Database
> Use this template when asking AI (ChatGPT, Claude, etc.) about the database

## 📋 Copy & Paste This Template
\`\`\`
I need help with the WHYNOTBROKER real estate database. Here's the schema:

## Database Overview
- Total tables: ${tables.length}
- Main table: \`properties\` (${tableDetails.properties?.columns?.length || 0} columns)
- Technology: Supabase (PostgreSQL) + Next.js

## Key Tables
${tables.map(t => `- \`${t.table_name}\`: ${t.column_count} columns, ~${t.row_count} rows`).join('\n')}

## Important Constraints
1. \`bhk_type\` MUST be lowercase: '1bhk', '2bhk', '3bhk' (NOT '3 BHK')
2. \`property_type\`: apartment/house/villa/commercial/land
3. \`listing_type\`: sale/rent/lease
4. \`status\`: draft/pending/published/sold/rented
5. Prices are in INR (Indian Rupees)

## Sample Data Structure
\`\`\`json
{
  "pid": "PROP000001",
  "title": "3 BHK Luxury Apartment",
  "price": 10900000,
  "city": "Bangalore",
  "property_type": "apartment",
  "bhk_type": "3bhk",
  "status": "published"
}
\`\`\`

Now, help me with: [YOUR QUESTION HERE]
\`\`\`

## 🎯 How to Use
1. Copy the entire template above
2. Paste into your AI chat
3. Replace "[YOUR QUESTION HERE]" with your actual question
4. The AI now understands your database structure and rules

## 💡 Example Questions
- "Write a SQL query to find all properties in Bangalore priced under ₹1 crore"
- "Create a Next.js API endpoint to fetch featured properties"
- "How do I properly insert a new property with all constraints?"
- "Write a migration to add a new column to the properties table"

---
*Template version: ${new Date().toISOString()}*`;
        
        fs.writeFileSync(path.join(this.outputDir, 'ai-prompt-template.md'), content);
        console.log("✅ Created ai-prompt-template.md");
    }
}

// Run the generator
const documenter = new CompleteDocumenter();
documenter.generateAll().catch(error => {
    console.error("Fatal error:", error);
    process.exit(1);
});