// Simple connection test
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

async function testConnection() {
    console.log('🔌 Testing database connection...');
    
    // Read from .env.test
    const envPath = path.join(__dirname, '..', '.env.test');
    if (!fs.existsSync(envPath)) {
        console.log('❌ .env.test not found');
        return;
    }
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    let connectionString = '';
    let useSsl = false;
    
    envContent.split('\n').forEach(line => {
        if (line.startsWith('DATABASE_URL=')) {
            connectionString = line.split('=')[1].trim().replace(/^"(.*)"$/, '$1');
        }
        if (line.startsWith('DB_SSL=')) {
            useSsl = line.split('=')[1].trim().replace(/^"(.*)"$/, '$1') === 'true';
        }
    });
    
    if (!connectionString) {
        console.log('❌ DATABASE_URL not found in .env.test');
        return;
    }
    
    console.log(`Connecting to: ${connectionString.replace(/:[^:@]+@/, ':****@')}`);
    console.log(`SSL: ${useSsl}`);
    
    const pool = new Pool({
        connectionString,
        ssl: useSsl ? { rejectUnauthorized: false } : false,
        connectionTimeoutMillis: 5000
    });
    
    try {
        console.log('Attempting connection...');
        const client = await pool.connect();
        console.log('✅ Connected successfully!');
        
        // Simple query
        const result = await client.query('SELECT NOW() as current_time, version() as pg_version');
        console.log(`Database time: ${result.rows[0].current_time}`);
        console.log(`PostgreSQL: ${result.rows[0].pg_version}`);
        
        client.release();
        await pool.end();
        console.log('✅ Connection test passed!');
        
    } catch (error) {
        console.log(`❌ Connection failed: ${error.message}`);
        
        if (error.code === 'ECONNREFUSED') {
            console.log('\n🔧 Troubleshooting:');
            console.log('1. Is PostgreSQL running on localhost:5432?');
            console.log('2. Try: netstat -an | findstr :5432');
            console.log('3. For Supabase: Use port 6543 with SSL=true');
        } else if (error.code === '28P01') {
            console.log('\n🔧 Invalid username/password');
        } else if (error.code === '3D000') {
            console.log('\n🔧 Database does not exist');
        }
        
        console.log(`Error code: ${error.code}`);
    }
}

testConnection();
