// Comprehensive fix for all identified bugs
const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate-complete-docs.js');
let content = fs.readFileSync(scriptPath, 'utf8');

// Fix 1: The 'idx.columns.join' and similar array issues
const arrayFixes = [
  ['idx\\.columns\\.join\\(', '(Array.isArray(idx.columns) ? idx.columns : []).join('],
  ['fk\\.columns\\.join\\(', '(Array.isArray(fk.columns) ? fk.columns : []).join('],
  ['fk\\.foreign_columns\\.join\\(', '(Array.isArray(fk.foreign_columns) ? fk.foreign_columns : []).join('],
  ['rel\\.columns\\.join\\(', '(Array.isArray(rel.columns) ? rel.columns : []).join(']
];

arrayFixes.forEach(([pattern, replacement]) => {
  content = content.replace(new RegExp(pattern, 'g'), replacement);
});

// Fix 2: The 'from_table' typo in generateRelationshipsDiagram
// Line 899 has: content += \\:\\n\;
// Should be: content += \\:\\n\;
content = content.replace(/from_table/g, 'fromTable');

// Fix 3: Also fix 'to_table' if it exists
content = content.replace(/to_table/g, 'toTable');

console.log('Applied fixes:');
console.log('1. Fixed array.join() issues');
console.log('2. Fixed from_table typo');
console.log('3. Fixed to_table typo');

// Write the fully fixed version
const fixedPath = path.join(__dirname, 'generate-fixed.js');
fs.writeFileSync(fixedPath, content);
console.log(' Created fully fixed version: generate-fixed.js');
