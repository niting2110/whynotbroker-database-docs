// Simple debug to see index format
require("dotenv").config({ path: "../.env.test" });

const { Pool } = require("pg");

async function debugIndexes() {
  console.log("Checking database index format...");
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  
  const client = await pool.connect();
  
  try {
    // Simple query to get index data
    const query = `
      SELECT 
        i.relname AS index_name,
        ARRAY_AGG(a.attname ORDER BY a.attnum) AS columns
      FROM pg_index idx
      JOIN pg_class i ON i.oid = idx.indexrelid
      JOIN pg_class t ON t.oid = idx.indrelid
      JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY(idx.indkey)
      WHERE t.relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
        AND t.relname = 'properties'
      GROUP BY i.relname
      LIMIT 2
    `;
    
    const result = await client.query(query);
    
    console.log("\n=== INDEX DATA FROM POSTGRESQL ===");
    console.log("Found", result.rows.length, "indexes");
    
    if (result.rows.length > 0) {
      const idx = result.rows[0];
      console.log("\nFirst index:");
      console.log("- Name:", idx.index_name);
      console.log("- Columns raw value:", idx.columns);
      console.log("- Type:", typeof idx.columns);
      console.log("- Is Array?", Array.isArray(idx.columns));
      
      // Try different ways to handle it
      console.log("\nTrying to process columns:");
      
      // Method 1: Direct join
      try {
        console.log("1. Direct join:", idx.columns.join(", "));
      } catch (e) {
        console.log("1. Direct join FAILED:", e.message);
      }
      
      // Method 2: If it's a PostgreSQL array string {col1,col2}
      if (typeof idx.columns === "string" && idx.columns.startsWith("{") && idx.columns.endsWith("}")) {
        console.log("2. PostgreSQL array string detected");
        const arr = idx.columns.slice(1, -1).split(",").map(s => s.trim());
        console.log("   Parsed:", arr);
        console.log("   Join works:", arr.join(", "));
      }
      
      // Method 3: If it's a comma string
      else if (typeof idx.columns === "string" && idx.columns.includes(",")) {
        console.log("3. Comma-separated string");
        const arr = idx.columns.split(",").map(s => s.trim());
        console.log("   Parsed:", arr);
        console.log("   Join works:", arr.join(", "));
      }
    }
    
  } finally {
    client.release();
    await pool.end();
  }
}

debugIndexes().catch(console.error);
