# 🚀 Quick Start Guide - WHYNOTBROKER Database
> Time: 5 minutes | For: New developers

## 1. Database Connection

### Using Supabase JavaScript Client (Recommended)
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true
    }
  }
);

// Query example
const { data, error } = await supabase
  .from('properties')
  .select(`
    id,
    title,
    price,
    status,
    created_at,
    user:users(id, email, full_name)
  `)
  .eq('status', 'published')
  .order('created_at', { ascending: false })
  .limit(10);
```

### Using Direct PostgreSQL Connection
```javascript
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' 
    ? { rejectUnauthorized: false } 
    : false
});

// Query with parameterization
const result = await pool.query(
  'SELECT * FROM properties WHERE status = $1 LIMIT $2',
  ['published', 10]
);
```

## 2. Common Queries

### Get Published Properties
```sql
SELECT 
  p.*,
  u.email as owner_email,
  u.full_name as owner_name
FROM properties p
LEFT JOIN users u ON p.user_id = u.id
WHERE p.status = 'published'
  AND p.deleted_at IS NULL
ORDER BY p.created_at DESC
LIMIT 20;
```

### Insert with Timestamps
```sql
INSERT INTO properties (
  title,
  description,
  price,
  user_id,
  created_at,
  updated_at
) VALUES (
  'Modern Apartment',
  'Beautiful 2BHK apartment...',
  2500000,
  'user-uuid-here',
  NOW(),
  NOW()
) RETURNING *;
```

### Update with Versioning
```sql
UPDATE properties 
SET 
  title = $1,
  price = $2,
  updated_at = NOW(),
  version = version + 1
WHERE id = $3 
  AND version = $4
RETURNING *;
```

## 3. Best Practices

### ✅ DO
- Use parameterized queries to prevent SQL injection
- Add indexes on frequently queried columns
- Use transactions for multiple related operations
- Set up Row Level Security (RLS) in Supabase
- Use soft deletes (`deleted_at` column)

### ❌ DON'T
- Don't use `SELECT *` in production code
- Don't disable foreign key constraints
- Don't modify production schema without migration
- Don't store sensitive data unencrypted

## 4. Troubleshooting

### Common Errors
1. **Connection refused**: Check DATABASE_URL and network
2. **Permission denied**: Verify RLS policies
3. **Timeout**: Increase connection timeout or check query performance
4. **SSL error**: Set DB_SSL=true in production

### Debugging Queries
```sql
-- Explain a query plan
EXPLAIN ANALYZE 
SELECT * FROM properties WHERE price > 1000000;

-- Check table statistics
SELECT * FROM pg_stat_user_tables WHERE relname = 'properties';
```

## 5. Next Steps
1. Read the [Full Schema](./FULL-SCHEMA.md)
2. Check [Validation Report](./validation-report.md) for schema issues
3. Use [Cheatsheets](./cheatsheets/) for common operations
4. Review [Index Report](./indexes.md) for performance insights

---
*Need help? Check the main [README.md](./README.md) or open an issue.*