# 🚀 Quick Start Guide - WHYNOTBROKER Database
> Time: 5 minutes | For: New developers

## 1. Database Connection
```javascript
// Using Supabase JavaScript client
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Or direct PostgreSQL connection
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
```

## 2. Common Queries

### Get all published properties
```sql
SELECT * FROM properties 
WHERE status = 'published' 
  AND is_active = true
ORDER BY created_at DESC
LIMIT 20;
```

### Get properties by city
```sql
SELECT id, pid, title, price, city, bedrooms, property_type
FROM properties
WHERE city = 'Bangalore'
  AND status = 'published'
ORDER BY price DESC;
```

## 3. Important Rules
- **bhk_type** must be lowercase: `'3bhk'` NOT `'3 BHK'`
- **status** must be: draft/pending/published/sold/rented
- **price** is in INR (Indian Rupees)

## 4. Next Steps
1. Review `FULL-SCHEMA.md` for complete table structures
2. Check `cheatsheets/` for common operations
3. Use `ai-prompt-template.md` when working with AI

---
*Last updated: 2025-12-13T23:54:17.110Z*