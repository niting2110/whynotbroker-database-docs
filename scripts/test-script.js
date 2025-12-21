console.log('🟢 Starting test...');
console.log('Directory:', __dirname);

// Test 1: Load your main script
try {
    const script = require('./generate-complete-docs.js');
    console.log('✅ generate-complete-docs.js can be loaded');
} catch (error) {
    console.log('❌ Error loading script:', error.message);
    console.log('Error stack:', error.stack);
}

// Test 2: Check if it's a class
try {
    const { CompleteDocumenter } = require('./generate-complete-docs.js');
    console.log('✅ CompleteDocumenter class available');
} catch (error) {
    console.log('❌ Not exported as class:', error.message);
}

// Test 3: Try to create instance without DB connection
console.log('\n🟡 Testing without database connection...');
try {
    // Temporarily override process.env to avoid connection
    const originalEnv = process.env.DATABASE_URL;
    delete process.env.DATABASE_URL;
    
    try {
        new (require('./generate-complete-docs.js'));
        console.log('❌ Should have thrown error for missing DATABASE_URL');
    } catch (error) {
        console.log('✅ Correctly threw error:', error.message.includes('DATABASE_URL') ? 'Yes' : 'No');
    }
    
    process.env.DATABASE_URL = originalEnv;
} catch (error) {
    console.log('Test error:', error.message);
}

console.log('\n✅ All basic tests completed');
