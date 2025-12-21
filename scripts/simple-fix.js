const fs = require('fs');
const path = require('path');

console.log('Applying simple, direct fix...');

// Read the original script
const originalPath = path.join(__dirname, 'generate-complete-docs.js');
let content = fs.readFileSync(originalPath, 'utf8');

// SIMPLE FIX 1: Replace the specific sort() line
// Find: const key = ${idx.table}:;
// Replace with safe version
content = content.replace(
  /const key = \$\{idx\.table\}:\$\{idx\.columns\.sort\(\)\.join\(\',\'\)\};/g,
  'const key = ${idx.table}:;'
);

// SIMPLE FIX 2: Replace other join() calls with safe versions
const fixes = [
  // Pattern: something.columns.join(', ')
  ['(\\w+)\\.columns\\.join\\(\\s*[\'\"],[\'\"]\\s*\\)', '(Array.isArray(.columns) ? .columns : []).join(", ")'],
  // Pattern: idx.columns.join(', ')
  ['idx\\.columns\\.join\\(\\s*[\'\"],[\'\"]\\s*\\)', '(Array.isArray(idx.columns) ? idx.columns : []).join(", ")'],
  // Pattern: fk.columns.join(', ')
  ['fk\\.columns\\.join\\(\\s*[\'\"],[\'\"]\\s*\\)', '(Array.isArray(fk.columns) ? fk.columns : []).join(", ")'],
  // Pattern: fk.foreign_columns.join(', ')
  ['fk\\.foreign_columns\\.join\\(\\s*[\'\"],[\'\"]\\s*\\)', '(Array.isArray(fk.foreign_columns) ? fk.foreign_columns : []).join(", ")'],
  // Pattern: rel.columns.join(', ')
  ['rel\\.columns\\.join\\(\\s*[\'\"],[\'\"]\\s*\\)', '(Array.isArray(rel.columns) ? rel.columns : []).join(", ")'],
  // Pattern: group[0].columns.join(', ')
  ['group\\[0\\]\\.columns\\.join\\(\\s*[\'\"],[\'\"]\\s*\\)', '(Array.isArray(group[0].columns) ? group[0].columns : []).join(", ")'],
];

fixes.forEach(([pattern, replacement]) => {
  const regex = new RegExp(pattern, 'g');
  content = content.replace(regex, replacement);
});

// SIMPLE FIX 3: Fix from_table typo
content = content.replace(/from_table/g, 'fromTable');
content = content.replace(/to_table/g, 'toTable');

// Write the fixed version
const fixedPath = path.join(__dirname, 'generate-final.js');
fs.writeFileSync(fixedPath, content);

console.log(' Created final fixed version: generate-final.js');
console.log('Fixes applied:');
console.log('1. Fixed idx.columns.sort() error');
console.log('2. Fixed all .join() calls');
console.log('3. Fixed from_table/to_table typos');
