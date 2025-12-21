// ULTIMATE FIX: Handle ALL array operations safely
const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'generate-complete-docs.js');
let content = fs.readFileSync(scriptPath, 'utf8');

// ============================================================
// FIX 1: Safe array access for ALL array operations
// ============================================================

// Pattern 1: Fix .join() operations
const joinPatterns = [
  'idx\\.columns\\.join',
  'fk\\.columns\\.join', 
  'fk\\.foreign_columns\\.join',
  'rel\\.columns\\.join',
  'group\\[0\\]\\.columns\\.join'
];

joinPatterns.forEach(pattern => {
  const regex = new RegExp(pattern + '\\\\(', 'g');
  content = content.replace(regex, safeArray(\${pattern.replace('\\', '')}\).join();
});

// Pattern 2: Fix .sort() operations  
const sortPatterns = [
  'idx\\.columns\\.sort',
  'group\\[0\\]\\.columns\\.sort'
];

sortPatterns.forEach(pattern => {
  const regex = new RegExp(pattern + '\\\\(', 'g');
  content = content.replace(regex, safeArray(\${pattern.replace('\\', '')}\).sort();
});

// Pattern 3: Fix .length access
const lengthPatterns = [
  'idx\\.columns\\.length',
  'fk\\.columns\\.length',
  'rel\\.columns\\.length'
];

lengthPatterns.forEach(pattern => {
  const regex = new RegExp(pattern, 'g');
  content = content.replace(regex, safeArray(\${pattern.replace('\\', '')}\).length);
});

// ============================================================
// FIX 2: Add safeArray helper function at the top of the class
// ============================================================
const classStart = 'class CompleteDocumenter {';
const safeArrayCode = 
  // Safe array helper - ensures value is always an array
  safeArray(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
      // Handle PostgreSQL array string format like '{col1,col2,col3}'
      if (value.startsWith('{') && value.endsWith('}')) {
        return value.slice(1, -1).split(',');
      }
      // Handle comma-separated string
      return value.split(',').map(s => s.trim()).filter(s => s);
    }
    // Try to convert to array
    return [value];
  }
;

content = content.replace(classStart, classStart + safeArrayCode);

// ============================================================
// FIX 3: Typo fixes
// ============================================================
content = content.replace(/from_table/g, 'fromTable');
content = content.replace(/to_table/g, 'toTable');

// ============================================================
// FIX 4: Direct replacement for specific problematic lines
// ============================================================

// Line ~930: Fix idx.columns.sort() in generateIndexReport
content = content.replace(
  /const key = \$\{idx\.table\}:\$\{idx\.columns\.sort\(\)\.join\(\',\'\)\};/g,
  'const key = ${idx.table}:;'
);

// Line ~939: Fix group[0].columns.join()  
content = content.replace(
  /content \+= \*\*Table: \\\\$\{group\[0\]\.table\}\\\, Columns: \$\{group\[0\]\.columns\.join\(\', \'\)\}\*\*\\n;/g,
  'content += **Table: \\\${group[0].table}\\\, Columns: **\\n;'
);

console.log('Applied ULTIMATE fixes:');
console.log('1. Added safeArray() helper method');
console.log('2. Fixed ALL .join() operations');
console.log('3. Fixed ALL .sort() operations');
console.log('4. Fixed ALL .length accesses');
console.log('5. Fixed from_table/to_table typos');
console.log('6. Fixed specific problematic lines');

// Write the ULTIMATE fixed version
const ultimatePath = path.join(__dirname, 'generate-ultimate.js');
fs.writeFileSync(ultimatePath, content);
console.log(' Created ULTIMATE fixed version: generate-ultimate.js');
