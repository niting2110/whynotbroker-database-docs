// simple-test.js
require("dotenv").config({ path: "../.env.test" });

console.log(" Testing ULTIMATELY FIXED version...");

try {
  const CompleteDocumenter = require("./generate-ultimately-fixed.js");
  const doc = new CompleteDocumenter();
  
  console.log(" Documenter created. Starting generation...");
  
  // Test with a shorter timeout
  const timeout = setTimeout(() => {
    console.log("  Timeout - taking too long");
    process.exit(1);
  }, 90000);
  
  doc.generateAll().then(() => {
    clearTimeout(timeout);
    console.log("\n COMPLETE SUCCESS! ");
    console.log("All documentation generated successfully!");
    
    const fs = require("fs");
    if (fs.existsSync("../docs")) {
      const files = fs.readdirSync("../docs");
      console.log(`\n Generated ${files.length} files in /docs directory`);
    }
    
  }).catch(err => {
    clearTimeout(timeout);
    console.log("\n Error:", err.message);
    console.log("\nFirst 3 lines of stack:");
    const lines = err.stack.split("\n");
    lines.slice(0, 3).forEach(line => console.log("  " + line));
  });
  
} catch(err) {
  console.log(" Failed to load/run:", err.message);
}
