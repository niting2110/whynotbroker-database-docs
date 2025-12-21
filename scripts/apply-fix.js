// Quick fix for the index columns issue
const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate-complete-docs.js');
let content = fs.readFileSync(scriptPath, 'utf8');

// Fix the problematic line (and similar ones)
const fixes = [
  ['idx\\.columns\\.join\\(', '(Array.isArray(idx.columns) ? idx.columns : []).join('],
  ['fk\\.columns\\.join\\(', '(Array.isArray(fk.columns) ? fk.columns : []).join('],
  ['fk\\.foreign_columns\\.join\\(', '(Array.isArray(fk.foreign_columns) ? fk.foreign_columns : []).join('],
  ['rel\\.columns\\.join\\(', '(Array.isArray(rel.columns) ? rel.columns : []).join(']
];

fixes.forEach(([pattern, replacement]) => {
  content = content.replace(new RegExp(pattern, 'g'), replacement);
});

// Write a patched version
const patchedPath = path.join(__dirname, 'generate-patched.js');
fs.writeFileSync(patchedPath, content);
console.log(' Created patched version: generate-patched.js');
