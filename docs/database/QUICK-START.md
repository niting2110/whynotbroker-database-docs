# 🚀 Quick Start Guide - WHYNOTBROKER Database

## 1. Database Connection

### Using Supabase JavaScript Client
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const { data, error } = await supabase
  .from('properties')
  .select('*')
  .eq('status', 'published')
  .limit(10);
```

## 2. Common Queries

### Get Published Properties
```sql
SELECT * FROM properties 
WHERE status = 'published' 
  AND deleted_at IS NULL
ORDER BY created_at DESC
LIMIT 20;
```

## 3. Next Steps
- Read [FULL-SCHEMA.md](./FULL-SCHEMA.md)
- Check [validation-report.md](./validation-report.md)
- Review [indexes.md](./indexes.md)
