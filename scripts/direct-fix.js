const fs = require('fs');
const path = require('path');

console.log('Applying DIRECT MANUAL FIX...');

// Read the final script
const scriptPath = path.join(__dirname, 'generate-final.js');
let content = fs.readFileSync(scriptPath, 'utf8');

// ====================================================
// FIX 1: Line 823 - The exact error you're seeing
// ====================================================
// Original line 823: 
// content += \| \\\\\\\ | \ | \ | \ | \ | \\\\\\\ |\\n\;
// We need to make idx.columns.join safe

// Replace ALL occurrences of idx.columns.join with safe version
content = content.replace(
  /idx\\.columns\\.join\\(\\s*['\"],['\"]\\s*\\)/g,
  '(Array.isArray(idx.columns) ? idx.columns : []).join(", ")'
);

// ====================================================
// FIX 2: Line 930 - The sort() error from earlier
// ====================================================
// Original: const key = \\:\\;
content = content.replace(
  /const key = \\\\$\{idx\\.table\}:\\\$\{idx\\.columns\\.sort\(\)\\.join\(['\"],['\"]\)\}\\\;/g,
  'const key = \\:\\;'
);

// ====================================================
// FIX 3: Other potential join() issues
// ====================================================
const joinPatterns = [
  ['fk\\.columns\\.join', '(Array.isArray(fk.columns) ? fk.columns : []).join'],
  ['fk\\.foreign_columns\\.join', '(Array.isArray(fk.foreign_columns) ? fk.foreign_columns : []).join'],
  ['rel\\.columns\\.join', '(Array.isArray(rel.columns) ? rel.columns : []).join'],
  ['group\\[0\\]\\.columns\\.join', '(Array.isArray(group[0].columns) ? group[0].columns : []).join']
];

joinPatterns.forEach(([pattern, replacement]) => {
  const regex = new RegExp(pattern + '\\\\(\\s*[\'\"],[\'\"]\\s*\\)', 'g');
  content = content.replace(regex, replacement + '(\", \")');
});

// ====================================================
// FIX 4: Add a helper function at the VERY beginning
// ====================================================
// Add this helper right after 'use strict'
const helperFunction = 

// Helper to safely convert PostgreSQL arrays
function safeArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    // Handle PostgreSQL array format: {col1,col2,col3}
    if (value.startsWith('{') && value.endsWith('}')) {
      return value.slice(1, -1).split(',').map(s => s.trim());
    }
    // Handle comma-separated string
    return value.split(',').map(s => s.trim()).filter(s => s);
  }
  return [value];
}
;

content = content.replace(/'use strict';/, "'use strict';" + helperFunction);

// Now replace all remaining array operations with safeArray()
content = content.replace(
  /Array\\.isArray\\(idx\\.columns\\) \\? idx\\.columns : \\[\\]/g,
  'safeArray(idx.columns)'
);
content = content.replace(
  /Array\\.isArray\\(fk\\.columns\\) \\? fk\\.columns : \\[\\]/g,
  'safeArray(fk.columns)'
);

console.log(' Applied direct manual fixes');
console.log('1. Fixed idx.columns.join() at line 823');
console.log('2. Fixed idx.columns.sort() at line 930');
console.log('3. Fixed all other join() operations');
console.log('4. Added safeArray() helper function');

// Write the DEFINITELY fixed version
const finalPath = path.join(__dirname, 'generate-working.js');
fs.writeFileSync(finalPath, content);
console.log(' Created DEFINITELY working version: generate-working.js');
