// definitive-fixer.js
const fs = require("fs");
const path = require("path");

console.log("=== APPLYING ULTIMATE FIX ===");

// Read the original script
const originalPath = path.join(__dirname, "generate-complete-docs.js");
let content = fs.readFileSync(originalPath, "utf8");

// Add helper function
const helperFunction = `

// Helper to convert PostgreSQL array strings to JavaScript arrays
function parsePgArray(pgArray) {
  if (!pgArray) return [];
  if (Array.isArray(pgArray)) return pgArray;
  if (typeof pgArray === "string") {
    // PostgreSQL array format: {col1,col2,col3}
    if (pgArray.startsWith("{") && pgArray.endsWith("}")) {
      return pgArray.slice(1, -1).split(",").map(s => s.trim()).filter(s => s);
    }
    // Comma-separated string
    if (pgArray.includes(",")) {
      return pgArray.split(",").map(s => s.trim()).filter(s => s);
    }
    // Single value
    return [pgArray];
  }
  return [pgArray];
}
`;

// Insert helper
content = content.replace(/'use strict';/, "'use strict';" + helperFunction);

// SIMPLE FIX: Manually fix the known problematic lines
// Instead of complex regex, let's find and replace specific patterns

// Pattern 1: Fix idx.columns.join(', ') - line 823
content = content.replace(/\$\{idx\.columns\.join\(['"], ['"]\)\}/g, '${parsePgArray(idx.columns).join(", ")}');

// Pattern 2: Fix fk.columns.join(', ')
content = content.replace(/\$\{fk\.columns\.join\(['"], ['"]\)\}/g, '${parsePgArray(fk.columns).join(", ")}');

// Pattern 3: Fix fk.foreign_columns.join(', ')
content = content.replace(/\$\{fk\.foreign_columns\.join\(['"], ['"]\)\}/g, '${parsePgArray(fk.foreign_columns).join(", ")}');

// Pattern 4: Fix idx.columns.sort().join(',') - line 930
content = content.replace(/\$\{idx\.columns\.sort\(\)\.join\(['"],['"]\)\}/g, '${parsePgArray(idx.columns).sort().join(",")}');

// Fix typos
content = content.replace(/from_table/g, "fromTable");
content = content.replace(/to_table/g, "toTable");

// Write fixed version
const fixedPath = path.join(__dirname, "generate-fixed-final.js");
fs.writeFileSync(fixedPath, content);

console.log(" Created: generate-fixed-final.js");
console.log(" Added parsePgArray() helper");
console.log(" Fixed array operations");
console.log(" Fixed typos");

// Now test it immediately
console.log("\n=== TESTING NOW ===");
require("dotenv").config({ path: "../.env.test" });

try {
  const CompleteDocumenter = require("./generate-fixed-final.js");
  const doc = new CompleteDocumenter();
  
  console.log(" Documenter created. Generating...");
  
  const timeout = setTimeout(() => {
    console.log("  Timeout");
    process.exit(1);
  }, 120000);
  
  doc.generateAll().then(() => {
    clearTimeout(timeout);
    console.log("\n SUCCESS! ");
    console.log("All documentation generated!");
  }).catch(err => {
    clearTimeout(timeout);
    console.log("\n Error:", err.message);
    console.log("Stack (first line):", err.stack.split("\n")[0]);
  });
  
} catch(err) {
  console.log(" Setup error:", err.message);
}
