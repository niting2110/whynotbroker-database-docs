// Debug script to see what PostgreSQL actually returns
require('dotenv').config({ path: '../.env.test' });

const { Pool } = require('pg');

async function debugDatabase() {
  console.log('Debugging database index format...');
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  
  const client = await pool.connect();
  
  try {
    // Run the EXACT query from your script
    const query = \
      SELECT
        i.relname AS index_name,
        am.amname AS index_type,
        idx.indisunique AS is_unique,
        idx.indisprimary AS is_primary,
        ARRAY_AGG(a.attname ORDER BY a.attnum) AS columns,
        pg_get_indexdef(idx.indexrelid) as index_definition
      FROM pg_index idx
      JOIN pg_class i ON i.oid = idx.indexrelid
      JOIN pg_class t ON t.oid = idx.indrelid
      JOIN pg_am am ON i.relam = am.oid
      JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY(idx.indkey)
      WHERE t.relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
        AND t.relname = 'properties'
      GROUP BY i.relname, am.amname, idx.indisunique, idx.indisprimary, idx.indexrelid
      ORDER BY i.relname
      LIMIT 2
    \;
    
    const result = await client.query(query);
    
    console.log('\\n=== DATABASE INDEX FORMAT ===');
    console.log('Number of indexes found:', result.rows.length);
    
    if (result.rows.length > 0) {
      console.log('\\nFirst index object:');
      console.log(JSON.stringify(result.rows[0], null, 2));
      
      console.log('\\nDetailed analysis:');
      const idx = result.rows[0];
      console.log('1. columns value:', idx.columns);
      console.log('2. Type of columns:', typeof idx.columns);
      console.log('3. Is array?', Array.isArray(idx.columns));
      console.log('4. Constructor:', idx.columns?.constructor?.name);
      
      // Try to join it
      try {
        console.log('5. Can join?', idx.columns.join(', '));
      } catch (e) {
        console.log('5. Join fails:', e.message);
      }
      
      // Try to sort it
      try {
        console.log('6. Can sort?', idx.columns.sort().join(','));
      } catch (e) {
        console.log('6. Sort fails:', e.message);
      }
    }
    
  } finally {
    client.release();
    await pool.end();
  }
}

debugDatabase().catch(console.error);
