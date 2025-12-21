// Debug script
const { Pool } = require('pg');

async function debugIndexes() {
  console.log('Debugging index structure...');
  
  const pool = new Pool({
    connectionString: 'postgresql://postgres.ryhdgpkvkcedplbwgnld:SaxjVJm2X5M2jgoX@aws-1-us-east-1.pooler.supabase.com:5432/postgres',
    ssl: { rejectUnauthorized: false }
  });
  
  const client = await pool.connect();
  
  try {
    // Simple query to check index structure
    const result = await client.query(`
      SELECT 
        indexname,
        indexdef,
        tablename
      FROM pg_indexes 
      WHERE schemaname = 'public' 
      LIMIT 3
    `);
    
    console.log('Found indexes:', result.rows.length);
    console.log('Sample:', result.rows[0]);
    
    // Also check the actual index query from our script
    const indexQuery = await client.query(`
      SELECT
        i.relname AS index_name,
        am.amname AS index_type,
        idx.indisunique AS is_unique,
        idx.indisprimary AS is_primary,
        ARRAY_AGG(a.attname ORDER BY a.attnum) AS columns
      FROM pg_index idx
      JOIN pg_class i ON i.oid = idx.indexrelid
      JOIN pg_class t ON t.oid = idx.indrelid
      JOIN pg_am am ON i.relam = am.oid
      JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY(idx.indkey)
      WHERE t.relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
        AND t.relname = 'properties'
      GROUP BY i.relname, am.amname, idx.indisunique, idx.indisprimary
      ORDER BY i.relname
      LIMIT 1
    `);
    
    if (indexQuery.rows.length > 0) {
      console.log('\nIndex query result:');
      console.log('Full object:', indexQuery.rows[0]);
      console.log('Columns value:', indexQuery.rows[0].columns);
      console.log('Type of columns:', typeof indexQuery.rows[0].columns);
      console.log('Is array?', Array.isArray(indexQuery.rows[0].columns));
      
      // Try to join it
      try {
        console.log('Join result:', indexQuery.rows[0].columns.join(', '));
      } catch (e) {
        console.log('Join failed:', e.message);
      }
    }
    
  } finally {
    client.release();
    await pool.end();
  }
}

debugIndexes().catch(console.error);
