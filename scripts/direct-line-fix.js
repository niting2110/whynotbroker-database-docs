// direct-line-fix.js
const fs = require("fs");
const path = require("path");

console.log("Fixing the last remaining issue...");

// Read the current fixed file
const filePath = path.join(__dirname, "generate-fixed-final.js");
let content = fs.readFileSync(filePath, "utf8");

// Find and fix the exact line (around line 977)
// The line looks like: content += `**Table: \`${group[0].table}\`, Columns: ${group[0].columns.join(', ')}**\n`;
// We need to change it to: content += `**Table: \`${group[0].table}\`, Columns: ${parsePgArray(group[0].columns).join(', ')}**\n`;

// Method 1: Try to find and replace the exact pattern
const pattern = /content \+= \`\\*\\*Table: \\\\\`\\\$\{group\\\[0\\\]\\.table\}\\\\\`, Columns: \\\$\{group\\\[0\\\]\\.columns\\.join\(['\"], ['\"]\)\}\\\*\\*\\n\`;/g;
const replacement = 'content += `**Table: \\\`${group[0].table}\\\`, Columns: ${parsePgArray(group[0].columns).join(\', \')}**\\n`;';

if (content.match(pattern)) {
  content = content.replace(pattern, replacement);
  console.log(" Fixed using regex pattern");
} else {
  // Method 2: Do a simpler string replacement
  console.log("Regex didn't match, trying simpler approach...");
  
  // Find the line containing "group[0].columns.join"
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("group[0].columns.join")) {
      console.log(`Found at line ${i + 1}: ${lines[i].substring(0, 80)}...`);
      
      // Replace .join with parsePgArray().join
      lines[i] = lines[i].replace("group[0].columns.join(", "parsePgArray(group[0].columns).join(");
      console.log("Fixed the line");
      break;
    }
  }
  content = lines.join("\n");
}

// Also, let's add a global replacement as backup
content = content.replace(/group\[0\]\.columns\.join\(['\"], ['\"]\)/g, "parsePgArray(group[0].columns).join(', ')");

// Write the fully fixed version
const finalPath = path.join(__dirname, "generate-fully-fixed.js");
fs.writeFileSync(finalPath, content);

console.log(" Created: generate-fully-fixed.js");

// Quick test
console.log("\n=== QUICK TEST ===");
require("dotenv").config({ path: "../.env.test" });

try {
  const CompleteDocumenter = require("./generate-fully-fixed.js");
  const doc = new CompleteDocumenter();
  
  console.log("Testing... (will run full generation)");
  
  const timeout = setTimeout(() => {
    console.log("Timeout");
    process.exit(1);
  }, 90000);
  
  doc.generateAll().then(() => {
    clearTimeout(timeout);
    console.log("\n TOTAL SUCCESS! ");
  }).catch(err => {
    clearTimeout(timeout);
    console.log("\n Error:", err.message);
    
    // If it's STILL a join error, we need to find all remaining instances
    if (err.message.includes("join")) {
      console.log("\nSearching for remaining .join() issues...");
      const code = fs.readFileSync(finalPath, "utf8");
      const joinMatches = code.match(/\.join\(/g);
      console.log(`Found ${joinMatches ? joinMatches.length : 0} .join() calls in code`);
      
      // Find lines with .join() that don't have parsePgArray
      const allLines = code.split("\n");
      allLines.forEach((line, i) => {
        if (line.includes(".join(") && !line.includes("parsePgArray")) {
          console.log(`Line ${i + 1}: ${line.trim().substring(0, 100)}...`);
        }
      });
    }
  });
  
} catch(err) {
  console.log("Setup error:", err.message);
}
