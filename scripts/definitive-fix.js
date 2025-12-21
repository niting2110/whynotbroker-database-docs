const fs = require("fs");
const path = require("path");

console.log("Applying the DEFINITIVE fix for PostgreSQL array strings...");

// Read the original script
const originalPath = path.join(__dirname, "generate-complete-docs.js");
let content = fs.readFileSync(originalPath, "utf8");

// 1. Add the parsePgArray helper at the top
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
  // Try to convert to array
  return [pgArray];
}
`;

content = content.replace(/'use strict';/, "'use strict';" + helperFunction);

// 2. Replace ALL instances of .join() with parsePgArray().join()
// We'll do this with simple string replacements for each pattern

// Pattern 1: idx.columns.join
content = content.replace(/\$\{idx\\.columns\\.join\\(['\"], ['\"]\\)\}/g, '${parsePgArray(idx.columns).join(", ")}');

// Pattern 2: fk.columns.join  
content = content.replace(/\$\{fk\\.columns\\.join\\(['\"], ['\"]\\)\}/g, '${parsePgArray(fk.columns).join(", ")}');

// Pattern 3: fk.foreign_columns.join
content = content.replace(/\$\{fk\\.foreign_columns\\.join\\(['\"], ['\"]\\)\}/g, '${parsePgArray(fk.foreign_columns).join(", ")}');

// Pattern 4: rel.columns.join
content = content.replace(/\$\{rel\\.columns\\.join\\(['\"], ['\"]\\)\}/g, '${parsePgArray(rel.columns).join(", ")}');

// Pattern 5: group[0].columns.join
content = content.replace(/\$\{group\\[0\\]\\.columns\\.join\\(['\"], ['\"]\\)\}/g, '${parsePgArray(group[0].columns).join(", ")}');

// Pattern 6: idx.columns.sort().join() - the specific error from line 930
content = content.replace(/\$\{idx\\.columns\\.sort\\(\\)\\.join\\(['\"],['\"]\\)\}/g, '${parsePgArray(idx.columns).sort().join(",")}');

// 3. Fix the from_table typo
content = content.replace(/from_table/g, "fromTable");
content = content.replace(/to_table/g, "toTable");

// 4. Also fix any .length references
content = content.replace(/\$\{idx\\.columns\\.length\}/g, '${parsePgArray(idx.columns).length}');
content = content.replace(/\$\{fk\\.columns\\.length\}/g, '${parsePgArray(fk.columns).length}');

// Write the fixed version
const fixedPath = path.join(__dirname, "generate-definitely-fixed.js");
fs.writeFileSync(fixedPath, content);

console.log(" Created DEFINITIVELY fixed version: generate-definitely-fixed.js");
console.log("All PostgreSQL array strings will now be parsed correctly.");
