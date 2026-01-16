'use strict';

/**
 * CompleteDocumenter - FINAL FIXED VERSION
 * Team11 - Schema Documentation Specialist
 * Date: January 16, 2026
 * 
 * FIXES APPLIED:
 * - ✅ Removed duplicate parsePgArray function
 * - ✅ Fixed from_table → fromTable variable name bug
 * - ✅ Actually using parsePgArray for array formatting
 * - ✅ Consistent property naming (fromTable/toTable)
 * - ✅ Proper SSL configuration without global override
 * - ✅ Better error handling and connection management
 */

require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const format = require('pg-format');
const crypto = require('crypto');

// =========================================================================
// HELPER FUNCTIONS
// =========================================================================

function parsePgArray(pgArray) {
  if (!pgArray) return [];
  if (Array.isArray(pgArray)) return pgArray;
  if (typeof pgArray === 'string') {
    if (pgArray.startsWith('{') && pgArray.endsWith('}')) {
      return pgArray.slice(1, -1).split(',').map(s => s.trim()).filter(s => s);
    }
    if (pgArray.includes(',')) {
      return pgArray.split(',').map(s => s.trim()).filter(s => s);
    }
    return [pgArray];
  }
  return [pgArray];
}

function redactConnectionString(connStr = '') {
  const REDACT_RE = /password=[^&]*/i;
  return connStr.replace(REDACT_RE, 'password=***');
}

// =========================================================================
// MAIN DOCUMENTER CLASS
// =========================================================================

class CompleteDocumenter {
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    console.log('🚀 Generating COMPLETE database documentation...');
    console.log('Database URL present:', !!connectionString);
    console.log('Node version:', process.version);
    console.log('Environment:', process.env.NODE_ENV || 'development');
    console.log('Redacted connection string:', redactConnectionString(connectionString));

    let sslConfig = false;
    if (process.env.DB_SSL === 'true' || process.env.CI === 'true') {
      if (process.env.ALLOW_INSECURE_TLS === 'true') {
        console.warn('⚠️  ALLOW_INSECURE_TLS=true — Using custom SSL config');
        sslConfig = { rejectUnauthorized: false };
      } else {
        sslConfig = true;
      }
    }

    this.pool = new Pool({
      connectionString,
      connectionTimeoutMillis: 30000,
      query_timeout: 60000,
      idleTimeoutMillis: 30000,
      max: 20,
      ...(sslConfig && typeof sslConfig === 'object' ? { ssl: sslConfig } : { ssl: sslConfig })
    });

    this.outputDir = path.resolve(process.env.OUTPUT_DIR || path.join(__dirname, '..', 'docs', 'database'));
    this.startTime = Date.now();
    this.stats = {
      tables: 0,
      views: 0,
      materialized_views: 0,
      columns: 0,
      constraints: 0,
      indexes: 0,
      relationships: 0,
      functions: 0,
      extensions: 0
    };

    this.pgVersion = null;
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['', 'cheatsheets', 'diagrams', 'migrations', 'exports'];
    for (const dir of dirs) {
      const fullPath = path.join(this.outputDir, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    }
  }

  async generateAll() {
    let client;
    try {
      console.log('Attempting to connect to database...');
      client = await this.pool.connect();
      console.log('✅ Connected to database');

      const testQuery = await client.query('SELECT NOW() as current_time, version() as pg_version');
      this.pgVersion = testQuery.rows[0].pg_version;
      console.log('Database time:', testQuery.rows[0].current_time);
      console.log('PostgreSQL version:', this.pgVersion.split(' ')[1]);

      await this.checkPostgresVersion(client);

      console.log('\n📊 Gathering database metadata...');

      const [tables, views, materializedViews, sequences] = await Promise.all([
        this.getTables(client),
        this.getViews(client),
        this.getMaterializedViews(client),
        this.getSequences(client)
      ]);

      const [extensions, functions] = await Promise.all([
        this.getExtensions(client),
        this.getFunctions(client)
      ]);

      console.log(`   ✓ Found ${tables.length} tables`);
      console.log(`   ✓ Found ${views.length} views`);
      console.log(`   ✓ Found ${materializedViews.length} materialized views`);
      console.log(`   ✓ Found ${sequences.length} sequences`);
      console.log(`   ✓ Found ${extensions.length} extensions`);
      console.log(`   ✓ Found ${functions.length} functions`);

      if (tables.length === 0) {
        console.warn('⚠️  No tables found in public schema');
      }

      const tableDetails = {};
      const relationships = [];
      const allIndexes = [];

      console.log('\n📝 Processing tables...');
      const batchSize = 5;
      for (let i = 0; i < tables.length; i += batchSize) {
        const batch = tables.slice(i, i + batchSize);
        const batchPromises = batch.map(t => this.processTable(t.table_name));
        const batchResults = await Promise.all(batchPromises);

        batchResults.forEach((result, index) => {
          const tableName = batch[index].table_name;
          tableDetails[tableName] = result;

          this.stats.columns += result.columns.length;
          this.stats.constraints += result.constraints.length;
          this.stats.indexes += result.indexes.length;
          this.stats.relationships += result.foreign_keys.length;

          // FIXED: Consistent property naming
          relationships.push(...result.foreign_keys.map(fk => ({
            fromTable: tableName,
            toTable: fk.foreign_table_name,
            constraint_name: fk.constraint_name,
            columns: fk.columns
          })));

          allIndexes.push(...result.indexes.map(idx => ({
            table: tableName,
            ...idx
          })));
        });

        console.log(`   Processed ${Math.min(i + batchSize, tables.length)}/${tables.length} tables`);
      }

      this.stats.tables = tables.length;
      this.stats.views = views.length;
      this.stats.materialized_views = materializedViews.length;
      this.stats.extensions = extensions.length;
      this.stats.functions = functions.length;

      const schemaHash = await this.calculateSchemaHash(tableDetails);
      const hasChanges = await this.checkForChanges(schemaHash);

      if (!hasChanges && !process.env.FORCE_UPDATE) {
        console.log('\n✅ No schema changes detected. Skipping documentation generation.');
        console.log('   (Use FORCE_UPDATE=true to force regeneration)');
        return;
      }

      console.log('\n🔍 Running schema validation...');
      const validationResults = await this.validateSchema(tableDetails, allIndexes);

      console.log('\n📝 Generating documentation files...');

      await Promise.all([
        this.generateReadme(tables, views, materializedViews, tableDetails, relationships, extensions, functions),
        this.generateFullSchema(tables, tableDetails),
        this.generateSchemaJson(tables, views, materializedViews, tableDetails, relationships, sequences, extensions, functions),
        this.generateRelationshipsDiagram(relationships),
        this.generateIndexReport(allIndexes),
        this.generateQuickStart(),
        this.generateValidationReport(validationResults),
        this.generateExports(tableDetails, relationships, extensions)
      ]);

      await this.generateCheatsheets(tableDetails);
      await this.generateAiPromptTemplate(tables, tableDetails);
      await this.generateMigrationTemplate();
      await this.generateChangeLog(schemaHash);
      await this.saveSchemaHash(schemaHash);

      const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
      await this.printSummary(duration);

    } catch (error) {
      console.error('\n❌ Error:', error.message);
      console.error('Error stack:', error.stack);
      if (error.code) console.error('Error code:', error.code);
      throw error;
    } finally {
      if (client) {
        try {
          client.release();
        } catch (e) {
          console.warn('⚠️  Error releasing client:', e.message);
        }
      }

      try {
        await this.pool.end();
      } catch (e) {
        console.warn('⚠️  Error closing pool:', e.message);
      }
    }
  }

  async processTable(tableName) {
    let client;
    try {
      client = await this.pool.connect();
      console.log(`   └─ Processing table: ${tableName}`);

      const [columns, constraints, indexes, foreignKeys, triggers, rowCount] = await Promise.all([
        this.getColumns(client, tableName),
        this.getConstraints(client, tableName),
        this.getIndexes(client, tableName),
        this.getForeignKeys(client, tableName),
        this.getTriggers(client, tableName),
        this.getRowCount(client, tableName)
      ]);

      return {
        columns,
        constraints,
        indexes,
        foreign_keys: foreignKeys,
        triggers,
        row_count: rowCount,
        column_count: columns.length
      };
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  // =========================================================================
  // DATABASE QUERIES
  // =========================================================================

  async getTables(client) {
    const query = `
      SELECT
        t.table_name,
        pg_total_relation_size(quote_ident(t.table_name)::regclass) as total_size,
        (SELECT COUNT(*)::int FROM information_schema.columns c
         WHERE c.table_schema = 'public' AND c.table_name = t.table_name) as column_count,
        obj_description(quote_ident(t.table_name)::regclass, 'pg_class') as table_comment
      FROM information_schema.tables t
      WHERE t.table_schema = 'public'
        AND t.table_type = 'BASE TABLE'
      ORDER BY t.table_name;
    `;
    const result = await client.query(query);
    return result.rows;
  }

  async getViews(client) {
    const query = `
      SELECT
        table_name as view_name,
        obj_description(quote_ident(table_name)::regclass, 'pg_class') as view_comment
      FROM information_schema.views
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `;
    const result = await client.query(query);
    return result.rows;
  }

  async getMaterializedViews(client) {
    try {
      const query = `
        SELECT
          matviewname as view_name,
          obj_description(quote_ident(matviewname)::regclass, 'pg_class') as view_comment
        FROM pg_matviews
        WHERE schemaname = 'public'
        ORDER BY matviewname;
      `;
      const result = await client.query(query);
      return result.rows;
    } catch (error) {
      console.warn('⚠️  Could not fetch materialized views:', error.message);
      return [];
    }
  }

  async getSequences(client) {
    const query = `
      SELECT sequence_name
      FROM information_schema.sequences
      WHERE sequence_schema = 'public'
      ORDER BY sequence_name;
    `;
    const result = await client.query(query);
    return result.rows;
  }

  async getExtensions(client) {
    const query = `
      SELECT extname, extversion
      FROM pg_extension
      ORDER BY extname;
    `;
    const result = await client.query(query);
    return result.rows;
  }

  async getFunctions(client) {
    const query = `
      SELECT
        p.proname as function_name,
        pg_get_function_arguments(p.oid) as arguments,
        pg_get_function_result(p.oid) as return_type,
        obj_description(p.oid, 'pg_proc') as function_comment
      FROM pg_proc p
      JOIN pg_namespace n ON p.pronamespace = n.oid
      WHERE n.nspname = 'public'
        AND p.prokind = 'f'
      ORDER BY p.proname;
    `;
    const result = await client.query(query);
    return result.rows;
  }

  async getColumns(client, tableName) {
    const query = `
      SELECT
        c.column_name,
        c.data_type,
        c.is_nullable,
        c.column_default,
        c.ordinal_position,
        c.character_maximum_length,
        c.numeric_precision,
        c.numeric_scale,
        pg_catalog.col_description(
          (SELECT oid FROM pg_catalog.pg_class WHERE relname = $1 AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = 'public')),
          c.ordinal_position
        ) as column_comment
      FROM information_schema.columns c
      WHERE c.table_schema = 'public' AND c.table_name = $1
      ORDER BY c.ordinal_position;
    `;
    const result = await client.query(query, [tableName]);
    return result.rows;
  }

  async getConstraints(client, tableName) {
    const query = `
      SELECT
        tc.constraint_name,
        tc.constraint_type,
        kcu.column_name,
        pg_get_constraintdef(pc.oid) AS definition,
        obj_description(pc.oid, 'pg_constraint') as constraint_comment
      FROM information_schema.table_constraints tc
      LEFT JOIN information_schema.key_column_usage kcu
        ON tc.constraint_name = kcu.constraint_name
        AND tc.table_name = kcu.table_name
        AND tc.table_schema = kcu.table_schema
      LEFT JOIN pg_catalog.pg_constraint pc
        ON pc.conname = tc.constraint_name
        AND pc.conrelid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = $1 AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = 'public'))
      WHERE tc.table_schema = 'public' AND tc.table_name = $1
      ORDER BY tc.constraint_type, tc.constraint_name;
    `;
    const result = await client.query(query, [tableName]);
    return result.rows;
  }

  async getIndexes(client, tableName) {
    const query = `
      SELECT
        i.relname AS index_name,
        am.amname AS index_type,
        idx.indisunique AS is_unique,
        idx.indisprimary AS is_primary,
        idx.indisexclusion AS is_exclusion,
        idx.indimmediate AS is_immediate,
        ARRAY_AGG(a.attname ORDER BY a.attnum) AS columns,
        pg_get_indexdef(idx.indexrelid) as index_definition
      FROM pg_index idx
      JOIN pg_class i ON i.oid = idx.indexrelid
      JOIN pg_class t ON t.oid = idx.indrelid
      JOIN pg_am am ON i.relam = am.oid
      JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY(idx.indkey)
      WHERE t.relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
        AND t.relname = $1
      GROUP BY i.relname, am.amname, idx.indisunique, idx.indisprimary,
               idx.indisexclusion, idx.indimmediate, idx.indexrelid
      ORDER BY i.relname;
    `;
    const result = await client.query(query, [tableName]);
    return result.rows;
  }

  async getForeignKeys(client, tableName) {
    const query = `
      SELECT
        tc.constraint_name,
        kcu.column_name,
        ccu.table_name AS foreign_table_name,
        ccu.column_name AS foreign_column_name,
        rc.update_rule,
        rc.delete_rule,
        obj_description(pc.oid, 'pg_constraint') as fk_comment
      FROM information_schema.table_constraints AS tc
      JOIN information_schema.key_column_usage AS kcu
        ON tc.constraint_name = kcu.constraint_name
        AND tc.table_schema = kcu.table_schema
      JOIN information_schema.constraint_column_usage AS ccu
        ON ccu.constraint_name = tc.constraint_name
        AND ccu.table_schema = tc.table_schema
      JOIN information_schema.referential_constraints AS rc
        ON rc.constraint_name = tc.constraint_name
      LEFT JOIN pg_catalog.pg_constraint pc
        ON pc.conname = tc.constraint_name
        AND pc.conrelid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = $1 AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = 'public'))
      WHERE tc.constraint_type = 'FOREIGN KEY'
        AND tc.table_schema = 'public'
        AND tc.table_name = $1;
    `;
    const result = await client.query(query, [tableName]);

    const grouped = {};
    result.rows.forEach(row => {
      if (!grouped[row.constraint_name]) {
        grouped[row.constraint_name] = {
          constraint_name: row.constraint_name,
          foreign_table_name: row.foreign_table_name,
          columns: [],
          foreign_columns: [],
          update_rule: row.update_rule,
          delete_rule: row.delete_rule,
          comment: row.fk_comment
        };
      }
      grouped[row.constraint_name].columns.push(row.column_name);
      grouped[row.constraint_name].foreign_columns.push(row.foreign_column_name);
    });

    return Object.values(grouped);
  }

  async getTriggers(client, tableName) {
    const query = `
      SELECT
        trigger_name,
        event_manipulation,
        action_timing,
        action_statement,
        obj_description(t.oid, 'pg_trigger') as trigger_comment
      FROM information_schema.triggers
      LEFT JOIN pg_catalog.pg_trigger t ON t.tgname = trigger_name
      WHERE event_object_schema = 'public'
        AND event_object_table = $1
      ORDER BY trigger_name;
    `;
    const result = await client.query(query, [tableName]);
    return result.rows;
  }

  async getRowCount(client, tableName) {
    try {
      const countSql = format('SELECT COUNT(*)::int AS cnt FROM %I.%I', 'public', tableName);
      const result = await client.query(countSql);
      return parseInt(result.rows[0].cnt, 10);
    } catch (err) {
      console.warn(`   ⚠️  Could not get row count for ${tableName}: ${err.message}`);
      return 0;
    }
  }
// PART 2 - Validation, File Generation, and Documentation Methods

  // =========================================================================
  // VALIDATION & CHECKS
  // =========================================================================

  async checkPostgresVersion(client) {
    const result = await client.query('SHOW server_version_num');
    const version = parseInt(result.rows[0].server_version_num, 10);

    if (version < 110000) {
      console.warn(`⚠️  PostgreSQL version ${version/10000} detected. Some features may not work correctly.`);
      console.warn('   Minimum recommended: PostgreSQL 12+');
    }
  }

  async validateSchema(tableDetails, allIndexes) {
    const issues = [];

    for (const [tableName, details] of Object.entries(tableDetails)) {
      const hasPrimaryKey = details.constraints.some(c => c.constraint_type === 'PRIMARY KEY');
      if (!hasPrimaryKey) {
        issues.push({
          type: 'WARNING',
          table: tableName,
          message: 'Table has no primary key',
          severity: 'medium'
        });
      }

      const hasCreatedAt = details.columns.some(c => c.column_name.toLowerCase() === 'created_at');
      const hasUpdatedAt = details.columns.some(c => c.column_name.toLowerCase() === 'updated_at');
      if (!hasCreatedAt || !hasUpdatedAt) {
        issues.push({
          type: 'RECOMMENDATION',
          table: tableName,
          message: 'Table missing timestamp columns (created_at, updated_at)',
          severity: 'low'
        });
      }

      details.foreign_keys.forEach(fk => {
        const hasIndex = allIndexes.some(idx =>
          idx.table === tableName &&
          parsePgArray(idx.columns).length === fk.columns.length &&
          parsePgArray(idx.columns).every(col => fk.columns.includes(col))
        );

        if (!hasIndex) {
          issues.push({
            type: 'PERFORMANCE',
            table: tableName,
            message: `Foreign key ${fk.constraint_name} has no covering index`,
            severity: 'medium'
          });
        }
      });
    }

    return issues;
  }

  // =========================================================================
  // CHANGE DETECTION
  // =========================================================================

  calculateSchemaHash(tableDetails) {
    const schemaString = JSON.stringify(tableDetails, null, 0);
    return crypto.createHash('md5').update(schemaString).digest('hex');
  }

  async checkForChanges(currentHash) {
    const hashFile = path.join(this.outputDir, '.schema-hash');
    try {
      const previousHash = await fsp.readFile(hashFile, 'utf8');
      return previousHash.trim() !== currentHash;
    } catch (err) {
      return true;
    }
  }

  async saveSchemaHash(hash) {
    const hashFile = path.join(this.outputDir, '.schema-hash');
    await fsp.writeFile(hashFile, hash, 'utf8');
  }

  async safeWrite(filename, content) {
    const filePath = path.join(this.outputDir, filename);
    try {
      await fsp.writeFile(filePath, content, 'utf8');
      console.log(`   ✅ Created ${filename}`);
      return true;
    } catch (err) {
      console.error(`   ❌ Failed to write ${filename}:`, err.message);
      throw err;
    }
  }

  async printSummary(duration) {
    console.log('\n' + '='.repeat(60));
    console.log('🎉 COMPLETE documentation generated successfully!');
    console.log('='.repeat(60));
    console.log(`📁 Location: ${this.outputDir}`);
    console.log(`⏱️  Duration: ${duration}s`);
    console.log(`📊 PostgreSQL: ${this.pgVersion}`);
    console.log('\n📈 Statistics:');
    console.log(`   • Tables: ${this.stats.tables}`);
    console.log(`   • Views: ${this.stats.views}`);
    console.log(`   • Materialized Views: ${this.stats.materialized_views}`);
    console.log(`   • Columns: ${this.stats.columns}`);
    console.log(`   • Constraints: ${this.stats.constraints}`);
    console.log(`   • Indexes: ${this.stats.indexes}`);
    console.log(`   • Relationships: ${this.stats.relationships}`);
    console.log(`   • Extensions: ${this.stats.extensions}`);
    console.log(`   • Functions: ${this.stats.functions}`);
    console.log('='.repeat(60));
  }

  async generateReadme(tables, views, materializedViews, tableDetails, relationships, extensions, functions) {
    const totalColumns = tables.reduce((sum, t) => sum + (Number(t.column_count) || 0), 0);
    const totalSize = tables.reduce((sum, t) => sum + (Number(t.total_size) || 0), 0);
    const sizeInMB = (totalSize / 1024 / 1024).toFixed(2);

    const tableRows = tables.map(t => {
      const details = tableDetails[t.table_name] || {};
      const rows = details.row_count ? `~${details.row_count.toLocaleString()}` : '~0';
      const size = t.total_size ? `${(t.total_size / 1024 / 1024).toFixed(2)} MB` : '—';
      const comment = t.table_comment ? `"${t.table_comment.substring(0, 30)}${t.table_comment.length > 30 ? '...' : ''}"` : '';
      return `| \`${t.table_name}\` | ${t.column_count} | ${rows} | ${size} | ${comment} |`;
    }).join('\n');

    const extList = extensions.map(e => `- \`${e.extname}\` (v${e.extversion})`).join('\n');
    const funcList = functions.map(f => `- \`${f.function_name}(${f.arguments})\` → ${f.return_type}`).join('\n');

    const content = `# 🏠 WHYNOTBROKER Database Documentation
> **Live, auto-updated database reference**
> Generated: ${new Date().toISOString()}
> Schema Hash: \`${await this.calculateSchemaHash(tableDetails)}\`

## 📊 Quick Stats
- **Total Tables:** ${tables.length}
- **Total Views:** ${views.length}
- **Total Materialized Views:** ${materializedViews.length}
- **Total Columns:** ${totalColumns}
- **Total Relationships:** ${relationships.length}
- **Total Size:** ${sizeInMB} MB
- **PostgreSQL Version:** ${this.pgVersion.split(' ')[1]}
- **Last Updated:** ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

## 🚀 Getting Started
1. **New Developer?** → Read [QUICK-START.md](./QUICK-START.md)
2. **Need Full Details?** → Read [FULL-SCHEMA.md](./FULL-SCHEMA.md)
3. **Working with AI?** → Use [ai-prompt-template.md](./ai-prompt-template.md)
4. **Schema Issues?** → Check [validation-report.md](./validation-report.md)

## 📋 Table Summary
| Table | Columns | Rows | Size | Comment |
|-------|---------|------|------|---------|
${tableRows}

## 🔌 Extensions
${extensions.length > 0 ? extList : '*No extensions installed*'}

## ⚙️ Functions
${functions.length > 0 ? funcList : '*No functions defined*'}

## 🔗 Key Relationships
${relationships.slice(0, 10).map(r =>
  `- \`${r.fromTable}\` → \`${r.toTable}\` (\`${r.constraint_name}\`)`
).join('\n')}
${relationships.length > 10 ? `\n*...and ${relationships.length - 10} more (see [relationships.md](./relationships.md))*` : ''}

---
*Auto-generated by Team11 Schema Documentation System*`;

    await this.safeWrite('README.md', content);
  }

  async generateFullSchema(tables, tableDetails) {
    let content = `# WHYNOTBROKER - Full Database Schema
> Auto-generated: ${new Date().toISOString()}
> Total Tables: ${tables.length}
> PostgreSQL: ${this.pgVersion.split(' ')[1]}

---

`;

    for (const t of tables) {
      const name = t.table_name;
      const details = tableDetails[name] || {};

      content += `## \`${name}\`\n\n`;
      if (t.table_comment) {
        content += `> ${t.table_comment}\n\n`;
      }

      content += `**Statistics:**\n`;
      content += `- Rows: ~${(details.row_count || 0).toLocaleString()}\n`;
      content += `- Columns: ${details.column_count}\n`;
      content += `- Indexes: ${details.indexes?.length || 0}\n`;
      content += `- Foreign Keys: ${details.foreign_keys?.length || 0}\n\n`;

      if (details.columns && details.columns.length > 0) {
        content += `### Columns\n\n`;
        content += `| Column | Type | Nullable | Default |\n`;
        content += `|--------|------|----------|--------|\n`;

        details.columns.forEach(col => {
          let typeInfo = col.data_type;
          if (col.character_maximum_length) {
            typeInfo += `(${col.character_maximum_length})`;
          }
          content += `| \`${col.column_name}\` | \`${typeInfo}\` | ${col.is_nullable} | \`${col.column_default || '—'}\` |\n`;
        });
        content += '\n';
      }

      if (details.indexes && details.indexes.length > 0) {
        content += `### Indexes\n\n`;
        content += `| Name | Type | Columns | Unique |\n`;
        content += `|------|------|---------|--------|\n`;
        details.indexes.forEach(idx => {
          // FIXED: Using parsePgArray helper
          const cols = parsePgArray(idx.columns).join(', ');
          content += `| \`${idx.index_name}\` | ${idx.index_type} | ${cols} | ${idx.is_unique ? '✓' : '—'} |\n`;
        });
        content += '\n';
      }

      if (details.foreign_keys && details.foreign_keys.length > 0) {
        content += `### Foreign Keys\n\n`;
        details.foreign_keys.forEach(fk => {
          content += `- \`${fk.constraint_name}\`:\n`;
          content += `  - Columns: \`${fk.columns.join(', ')}\` → \`${fk.foreign_table_name}(${fk.foreign_columns.join(', ')})\`\n`;
          content += `  - ON UPDATE: ${fk.update_rule}\n`;
          content += `  - ON DELETE: ${fk.delete_rule}\n`;
        });
        content += '\n';
      }

      content += '---\n\n';
    }

    await this.safeWrite('FULL-SCHEMA.md', content);
  }

  async generateSchemaJson(tables, views, materializedViews, tableDetails, relationships, sequences, extensions, functions) {
    const schema = {
      generated_at: new Date().toISOString(),
      database: 'WHYNOTBROKER',
      postgresql_version: this.pgVersion,
      version: '1.0',
      statistics: this.stats,
      tables: tables.map(t => ({
        name: t.table_name,
        comment: t.table_comment,
        columns: Number(t.column_count) || 0,
        rows: tableDetails[t.table_name]?.row_count || 0,
        size_bytes: Number(t.total_size) || 0,
        details: tableDetails[t.table_name] || {}
      })),
      views: views,
      materialized_views: materializedViews,
      sequences: sequences,
      extensions: extensions,
      functions: functions,
      relationships: relationships
    };

    await this.safeWrite('schema.json', JSON.stringify(schema, null, 2));
  }

  async generateRelationshipsDiagram(relationships) {
    let content = `# Database Relationships (ER Diagram - Text)\n\n`;
    content += `Total Relationships: ${relationships.length}\n`;
    content += `Generated: ${new Date().toISOString()}\n\n`;
    content += `\`\`\`\n`;

    // FIXED: Using fromTable instead of from_table
    const grouped = {};
    relationships.forEach(rel => {
      if (!grouped[rel.fromTable]) grouped[rel.fromTable] = [];
      grouped[rel.fromTable].push(rel);
    });

    Object.entries(grouped).forEach(([fromTable, rels]) => {
      // FIXED: Using fromTable variable correctly
      content += `${fromTable}:\n`;
      rels.forEach(rel => {
        content += `  └─→ ${rel.toTable} (via: ${rel.constraint_name})\n`;
        // FIXED: Using parsePgArray helper
        const cols = parsePgArray(rel.columns).join(', ');
        content += `      columns: ${cols}\n`;
      });
      content += '\n';
    });

    content += `\`\`\`\n`;
    await this.safeWrite('relationships.md', content);
  }

  async generateIndexReport(allIndexes) {
    let content = `# Index Performance Report\n\n`;
    content += `Generated: ${new Date().toISOString()}\n`;
    content += `Total Indexes: ${allIndexes.length}\n\n`;

    content += `## All Indexes\n\n`;
    content += `| Table | Index | Type | Columns | Unique |\n`;
    content += `|-------|-------|------|---------|--------|\n`;

    allIndexes.forEach(idx => {
      // FIXED: Using parsePgArray helper
      const cols = parsePgArray(idx.columns).join(', ');
      content += `| \`${idx.table}\` | \`${idx.index_name}\` | ${idx.index_type} | ${cols} | ${idx.is_unique ? '✓' : '—'} |\n`;
    });

    content += `\n## Performance Recommendations\n\n`;

    const indexGroups = {};
    allIndexes.forEach(idx => {
      const cols = parsePgArray(idx.columns);
      const key = `${idx.table}:${cols.sort().join(',')}`;
      if (!indexGroups[key]) indexGroups[key] = [];
      indexGroups[key].push(idx);
    });

    const duplicates = Object.values(indexGroups).filter(group => group.length > 1);
    if (duplicates.length > 0) {
      content += `### ⚠️ Potential Duplicate Indexes\n\n`;
      duplicates.forEach(group => {
        const cols = parsePgArray(group[0].columns).join(', ');
        content += `**Table: \`${group[0].table}\`, Columns: ${cols}**\n`;
        group.forEach(idx => {
          content += `- \`${idx.index_name}\` (${idx.index_type}${idx.is_unique ? ', unique' : ''})\n`;
        });
        content += '\n';
      });
    }

    await this.safeWrite('indexes.md', content);
  }

  async generateValidationReport(issues) {
    const warnings = issues.filter(i => i.severity === 'high' || i.severity === 'medium');
    const recommendations = issues.filter(i => i.severity === 'low');

    let content = `# Schema Validation Report\n\n`;
    content += `Generated: ${new Date().toISOString()}\n`;
    content += `Total Issues: ${issues.length}\n`;
    content += `Warnings: ${warnings.length}\n`;
    content += `Recommendations: ${recommendations.length}\n\n`;

    if (warnings.length > 0) {
      content += `## ⚠️ Warnings\n\n`;
      content += `| Severity | Table | Issue |\n`;
      content += `|----------|-------|-------|\n`;
      warnings.forEach(issue => {
        content += `| ${issue.severity.toUpperCase()} | \`${issue.table}\` | ${issue.message} |\n`;
      });
      content += '\n';
    }

    if (recommendations.length > 0) {
      content += `## 💡 Recommendations\n\n`;
      content += `| Table | Recommendation |\n`;
      content += `|-------|----------------|\n`;
      recommendations.forEach(issue => {
        content += `| \`${issue.table}\` | ${issue.message} |\n`;
      });
    }

    if (issues.length === 0) {
      content += `## ✅ No Issues Found\n\n`;
      content += `Your schema looks good!\n`;
    }

    await this.safeWrite('validation-report.md', content);
  }

  async generateQuickStart() {
    const content = `# 🚀 Quick Start Guide - WHYNOTBROKER Database

## 1. Database Connection

### Using Supabase JavaScript Client
\`\`\`javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const { data, error } = await supabase
  .from('properties')
  .select('*')
  .eq('status', 'published')
  .limit(10);
\`\`\`

## 2. Common Queries

### Get Published Properties
\`\`\`sql
SELECT * FROM properties 
WHERE status = 'published' 
  AND deleted_at IS NULL
ORDER BY created_at DESC
LIMIT 20;
\`\`\`

## 3. Next Steps
- Read [FULL-SCHEMA.md](./FULL-SCHEMA.md)
- Check [validation-report.md](./validation-report.md)
- Review [indexes.md](./indexes.md)
`;

    await this.safeWrite('QUICK-START.md', content);
  }

  async generateCheatsheets(tableDetails) {
    const properties = tableDetails['properties'];
    if (properties) {
      const content = `# Properties Table Cheatsheet

## Insert
\`\`\`sql
INSERT INTO properties (
  title, description, price, user_id, 
  status, created_at, updated_at
) VALUES (
  'Sample Property', 'Description', 1000000, 'user-uuid',
  'draft', NOW(), NOW()
) RETURNING *;
\`\`\`

## Query
\`\`\`sql
SELECT * FROM properties WHERE status = 'published';
\`\`\`

## Update
\`\`\`sql
UPDATE properties
SET price = 1100000, updated_at = NOW()
WHERE id = 'property-uuid'
RETURNING *;
\`\`\`

## Indexes Available
${properties.indexes.map(idx => {
  const cols = parsePgArray(idx.columns).join(', ');
  return `- \`${idx.index_name}\`: ${cols}`;
}).join('\n')}
`;
      await this.safeWrite('cheatsheets/properties.md', content);
    }
  }

  async generateExports(tableDetails, relationships, extensions) {
    let sqlContent = `-- WHYNOTBROKER Database Schema\n`;
    sqlContent += `-- Generated: ${new Date().toISOString()}\n`;
    sqlContent += `-- PostgreSQL: ${this.pgVersion.split(' ')[1]}\n\n`;

    Object.entries(tableDetails).forEach(([tableName, details]) => {
      sqlContent += `-- Table: ${tableName}\n`;
      sqlContent += `CREATE TABLE IF NOT EXISTS ${tableName} (\n`;

      details.columns.forEach((col, index) => {
        let colDef = `  ${col.column_name} ${col.data_type}`;
        if (col.character_maximum_length) {
          colDef += `(${col.character_maximum_length})`;
        }
        colDef += col.is_nullable === 'NO' ? ' NOT NULL' : '';
        if (col.column_default) {
          colDef += ` DEFAULT ${col.column_default}`;
        }
        if (index < details.columns.length - 1) colDef += ',';
        sqlContent += colDef + '\n';
      });

      const primaryKey = details.constraints.find(c => c.constraint_type === 'PRIMARY KEY');
      if (primaryKey) {
        sqlContent += `  ,PRIMARY KEY (${primaryKey.column_name})\n`;
      }

      sqlContent += `);\n\n`;
    });

    await this.safeWrite('exports/schema.sql', sqlContent);

    let tsContent = `// WHYNOTBROKER Database Types\n`;
    tsContent += `// Generated: ${new Date().toISOString()}\n\n`;
    tsContent += `export interface Database {\n`;

    Object.entries(tableDetails).forEach(([tableName, details]) => {
      tsContent += `  ${tableName}: {\n`;
      tsContent += `    Row: {\n`;
      details.columns.forEach(col => {
        let tsType = 'any';
        if (col.data_type.includes('int') || col.data_type.includes('numeric')) {
          tsType = 'number';
        } else if (col.data_type.includes('text') || col.data_type.includes('char') || col.data_type.includes('uuid')) {
          tsType = 'string';
        } else if (col.data_type.includes('bool')) {
          tsType = 'boolean';
        } else if (col.data_type.includes('timestamp') || col.data_type.includes('date')) {
          tsType = 'string | Date';
        }

        const optional = col.is_nullable === 'YES' ? '?' : '';
        tsContent += `      ${col.column_name}${optional}: ${tsType};\n`;
      });
      tsContent += `    };\n`;
      tsContent += `  };\n\n`;
    });

    tsContent += `}\n`;
    await this.safeWrite('exports/typescript-interfaces.ts', tsContent);
  }

  async generateAiPromptTemplate(tables, tableDetails) {
    const tableList = tables.map(t => `- ${t.table_name} (${t.column_count} columns)`).join('\n');

    const content = `# AI Prompt Template for WHYNOTBROKER Database

## Context
Expert PostgreSQL/Supabase developer working with WHYNOTBROKER database.

## Database Schema Summary
**Total Tables:** ${tables.length}
**PostgreSQL Version:** ${this.pgVersion.split(' ')[1]}

## Available Tables
${tableList}

## Query Patterns

### SELECT with JOIN
\`\`\`sql
SELECT t1.*, t2.related_column
FROM table1 t1
LEFT JOIN table2 t2 ON t1.fk = t2.id
WHERE t1.condition = 'value'
ORDER BY t1.created_at DESC
LIMIT 10;
\`\`\`

### INSERT with RETURNING
\`\`\`sql
INSERT INTO table_name (col1, col2, created_at, updated_at)
VALUES ($1, $2, NOW(), NOW())
RETURNING *;
\`\`\`

### UPDATE with Versioning
\`\`\`sql
UPDATE table_name
SET column = $1, updated_at = NOW()
WHERE id = $2
RETURNING *;
\`\`\`

## Guidelines
1. Use parameterized queries ($1, $2)
2. Include error handling
3. Consider Row Level Security (RLS)
4. Use transactions for multiple operations

---
*For full schema: see FULL-SCHEMA.md*`;

    await this.safeWrite('ai-prompt-template.md', content);
  }

  async generateMigrationTemplate() {
    const content = `-- Database Migration Template
-- File: migrations/YYYYMMDD_description.sql
-- Generated: ${new Date().toISOString()}

BEGIN;

-- 1. CREATE TABLE
CREATE TABLE IF NOT EXISTS new_table (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  column1 VARCHAR(255) NOT NULL,
  column2 INTEGER
);

-- 2. ADD COLUMN
ALTER TABLE existing_table
ADD COLUMN IF NOT EXISTS new_column VARCHAR(100);

-- 3. CREATE INDEX
CREATE INDEX IF NOT EXISTS idx_table_column
ON table_name(column_name);

-- 4. ADD FOREIGN KEY
ALTER TABLE new_table
ADD CONSTRAINT fk_new_existing
FOREIGN KEY (existing_id)
REFERENCES existing_table(id)
ON DELETE CASCADE;

-- 5. CREATE TRIGGER
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_table_updated_at
  BEFORE UPDATE ON new_table
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

COMMIT;

-- Verification
SELECT COUNT(*) FROM new_table;
`;

    await this.safeWrite('migrations/template.sql', content);
  }

  async generateChangeLog(schemaHash) {
    const changelogFile = path.join(this.outputDir, 'changelog.json');
    let changelog = [];

    try {
      const existing = await fsp.readFile(changelogFile, 'utf8');
      changelog = JSON.parse(existing);
    } catch (err) {
      // File doesn't exist
    }

    changelog.push({
      timestamp: new Date().toISOString(),
      schema_hash: schemaHash,
      statistics: this.stats
    });

    if (changelog.length > 50) {
      changelog = changelog.slice(-50);
    }

    await fsp.writeFile(changelogFile, JSON.stringify(changelog, null, 2), 'utf8');
    console.log('   ✅ Updated changelog.json');
  }
}

// =========================================================================
// MAIN EXECUTION
// =========================================================================

async function main() {
  try {
    const documenter = new CompleteDocumenter();
    await documenter.generateAll();

    console.log('\n✨ Documentation generation complete!');
    process.exit(0);
  } catch (error) {
    console.error('\n💥 Fatal error:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM. Shutting down gracefully...');
  process.exit(0);
});

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = CompleteDocumenter;