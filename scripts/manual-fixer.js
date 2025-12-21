// ============================================
// MANUAL FIX VERSION
// This fixes ALL array operations in the script
// ============================================

const fs = require('fs');
const path = require('path');

console.log('Creating manually fixed version...');

// Read the original (clean) script
const originalContent = fs.readFileSync(path.join(__dirname, 'generate-complete-docs.js'), 'utf8');

// Helper function to safely handle arrays
const helperFunction = 

// Helper to safely convert any value to an array
function safeArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    // Handle PostgreSQL array format: {col1,col2,col3}
    if (value.startsWith('{') && value.endsWith('}')) {
      return value.slice(1, -1).split(',').map(s => s.trim()).filter(s => s);
    }
    // Handle comma-separated string
    if (value.includes(',')) {
      return value.split(',').map(s => s.trim()).filter(s => s);
    }
    // Single value
    return [value];
  }
  // Try to convert to array
  try {
    return Array.from(value);
  } catch {
    return [value];
  }
}
;

// Add the helper at the beginning
let fixedContent = originalContent.replace(/'use strict';/, "'use strict';" + helperFunction);

// Now replace ALL problematic array operations

// 1. Replace idx.columns.join(', ')
fixedContent = fixedContent.replace(/\$\{idx\.columns\.join\(['\"], ['\"]\)\}/g, '\');

// 2. Replace fk.columns.join(', ')
fixedContent = fixedContent.replace(/\$\{fk\.columns\.join\(['\"], ['\"]\)\}/g, '\');

// 3. Replace fk.foreign_columns.join(', ')
fixedContent = fixedContent.replace(/\$\{fk\.foreign_columns\.join\(['\"], ['\"]\)\}/g, '\');

// 4. Replace rel.columns.join(', ')
fixedContent = fixedContent.replace(/\$\{rel\.columns\.join\(['\"], ['\"]\)\}/g, '\');

// 5. Replace group[0].columns.join(', ')
fixedContent = fixedContent.replace(/\$\{group\[0\]\.columns\.join\(['\"], ['\"]\)\}/g, '\');

// 6. Fix the sort() line (line ~930)
fixedContent = fixedContent.replace(/\$\{idx\.columns\.sort\(\)\.join\(['\"],['\"]\)\}/g, '\');

// 7. Fix from_table typo
fixedContent = fixedContent.replace(/from_table/g, 'fromTable');
fixedContent = fixedContent.replace(/to_table/g, 'toTable');

// Write the fixed version
const fixedPath = path.join(__dirname, 'generate-manually-fixed.js');
fs.writeFileSync(fixedPath, fixedContent);

console.log(' Created manually fixed version: generate-manually-fixed.js');
console.log('All array operations now use safeArray() helper.');
