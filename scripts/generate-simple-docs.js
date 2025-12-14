require('dotenv').config();

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

console.log("🚀 Starting SIMPLIFIED database documentation generation...");

// Add connection timeout
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000, // 10 second timeout
    query_timeout: 30000, // 30 second query timeout
    statement_timeout: 30000 // 30 second statement timeout
});

async function generateDocs() {
    const client = await pool.connect();
    
    try {
        console.log("✅ Connected to Supabase!");
        
        // 1. Get basic table info (ONE query at a time)
        console.log("📊 Fetching table information...");
        const tables = await client.query(`
            SELECT t.table_name,
                   COUNT(c.column_name) as column_count
            FROM information_schema.tables t
            LEFT JOIN information_schema.columns c 
                ON t.table_schema = c.table_schema 
                AND t.table_name = c.table_name
            WHERE t.table_schema = 'public'
                AND t.table_type = 'BASE TABLE'
            GROUP BY t.table_name
            ORDER BY t.table_name;
        `);
        
        console.log(`📋 Found ${tables.rows.length} tables`);
        
        // 2. Get column info for properties table only (most important)
        console.log("📝 Fetching properties table columns...");
        const columns = await client.query(`
            SELECT column_name, data_type, is_nullable, column_default
            FROM information_schema.columns
            WHERE table_schema = 'public' 
                AND table_name = 'properties'
            ORDER BY ordinal_position;
        `);
        
        // 3. Get constraints for properties table
        console.log("🔒 Fetching constraints...");
        const constraints = await client.query(`
            SELECT constraint_name, constraint_type
            FROM information_schema.table_constraints
            WHERE table_schema = 'public' 
                AND table_name = 'properties';
        `);
        
        // 4. Count rows in properties
        const countResult = await client.query('SELECT COUNT(*) as count FROM properties');
        const propertyCount = countResult.rows[0].count;
        
        // Create output directory
        const outputDir = path.join(__dirname, '..');
        
        // Generate README.md
        const readmeContent = `# WHYNOTBROKER Database Documentation
> Auto-generated on ${new Date().toISOString()}

## 📊 Database Overview
- **Total Tables:** ${tables.rows.length}
- **Properties Table Rows:** ${propertyCount}
- **Properties Table Columns:** ${columns.rows.length}
- **Connection:** ✅ Live connection established

## 📋 Tables
${tables.rows.map(t => `- **${t.table_name}** (${t.column_count} columns)`).join('\n')}

## 🏠 Properties Table Structure (${columns.rows.length} columns)
| Column | Type | Nullable | Default |
|--------|------|----------|---------|
${columns.rows.map(col => `| ${col.column_name} | ${col.data_type} | ${col.is_nullable} | ${col.column_default || '—'} |`).join('\n')}

## 🔒 Constraints
${constraints.rows.map(c => `- **${c.constraint_name}**: ${c.constraint_type}`).join('\n')}

---
*This documentation updates automatically. Manual edits will be overwritten.*`;

        fs.writeFileSync(path.join(outputDir, 'README.md'), readmeContent);
        console.log("✅ Created README.md");
        
        // Save schema as JSON
        const schema = {
            generated_at: new Date().toISOString(),
            tables: tables.rows,
            properties_columns: columns.rows,
            constraints: constraints.rows,
            property_count: propertyCount
        };
        
        fs.writeFileSync(path.join(outputDir, 'schema.json'), JSON.stringify(schema, null, 2));
        console.log("✅ Created schema.json");
        
        console.log(`\n🎉 Documentation generated successfully!`);
        console.log(`📁 Location: ${outputDir}`);
        
    } catch (error) {
        console.error("❌ Error:", error.message);
        console.log("\n💡 Try Direct Connection instead:");
        console.log('DATABASE_URL=postgresql://postgres:0nW8D9Qm6gmxgLhb@db.ryhdgpkvkcedplbwgnld.supabase.co:5432/postgres');
    } finally {
        client.release();
        await pool.end();
    }
}

generateDocs();
