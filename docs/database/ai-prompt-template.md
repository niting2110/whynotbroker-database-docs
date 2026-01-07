# AI Prompt Template for WHYNOTBROKER Database

## Context
You are an expert PostgreSQL and Supabase developer working with the WHYNOTBROKER database. Use this schema information to answer questions and write queries.

## Database Schema Summary
**Total Tables:** 79
**PostgreSQL Version:** 17.6

## Available Tables
- properties (135 columns)
- profiles (46 columns)
- property_intelligence_scores (41 columns)
- mdm_curation_requests (40 columns)
- projects (39 columns)
- property_valuations (37 columns)
- property_ranking_criteria (37 columns)
- user_engagement_metrics (36 columns)
- transactions (31 columns)
- repeat_customer_analytics (31 columns)
- localities (28 columns)
- builders (28 columns)
- undervalued_properties (27 columns)
- hot_properties (25 columns)
- coupons (23 columns)
- property_leads (21 columns)
- messages (21 columns)
- property_repeat_views (21 columns)
- admins (20 columns)
- subscription_plans (19 columns)
- promotional_campaigns (19 columns)
- mdm_aliases (19 columns)
- appointments (18 columns)
- blog_posts (17 columns)
- credit_packages (17 columns)
- user_ratings (17 columns)
- admin_leaves (17 columns)
- market_trends (16 columns)
- regions (15 columns)
- property_images (15 columns)
- cities (14 columns)
- pricing_rules (14 columns)
- mdm_audit_logs (13 columns)
- subscription_enrollments (13 columns)
- property_verifications (13 columns)
- loan_calculations (13 columns)
- notification_preferences (13 columns)
- property_documents (12 columns)
- referrals (12 columns)
- mdm_merge_history (12 columns)
- property_reports (11 columns)
- property_visits (11 columns)
- saved_searches (11 columns)
- locality_amenities (10 columns)
- moderation_history (10 columns)
- location_canonical_map (10 columns)
- property_views (10 columns)
- wallets (10 columns)
- location_boundaries (10 columns)
- notifications (10 columns)
- pincodes (10 columns)
- campaign_participants (9 columns)
- coupon_usage (9 columns)
- security_flags (9 columns)
- property_assignments (8 columns)
- admin_audit_logs (8 columns)
- user_regional_preferences (8 columns)
- search_history (8 columns)
- overtime_records (8 columns)
- admin_users (7 columns)
- states (7 columns)
- property_amenities (7 columns)
- districts (7 columns)
- property_price_history (7 columns)
- sub_districts (7 columns)
- system_health_metrics (6 columns)
- admin_messages (6 columns)
- leave_types (6 columns)
- property_comparisons (6 columns)
- property_shares (6 columns)
- leave_balances (6 columns)
- spatial_ref_sys (5 columns)
- permissions (5 columns)
- admin_notices (5 columns)
- user_favorites (4 columns)
- admin_chat (4 columns)
- roles (2 columns)
- admin_roles (2 columns)
- role_permissions (2 columns)

## Common Query Patterns

### 1. Basic SELECT with JOIN
```sql
-- Format: Select with explicit columns and proper joins
SELECT 
  t1.column1,
  t1.column2,
  t2.related_column
FROM table1 t1
LEFT JOIN table2 t2 ON t1.foreign_key = t2.id
WHERE t1.condition = 'value'
ORDER BY t1.created_at DESC
LIMIT 10;
```

### 2. INSERT with RETURNING
```sql
INSERT INTO table_name (col1, col2, created_at, updated_at)
VALUES ($1, $2, NOW(), NOW())
RETURNING *;
```

### 3. UPDATE with Versioning
```sql
UPDATE table_name 
SET 
  column = $1,
  updated_at = NOW(),
  version = version + 1
WHERE id = $2 AND version = $3
RETURNING *;
```

### 4. Soft DELETE Pattern
```sql
UPDATE table_name 
SET deleted_at = NOW()
WHERE id = $1 AND deleted_at IS NULL;
```

## Guidelines for AI Responses
1. Always use parameterized queries (`$1, $2`) to prevent SQL injection
2. Include proper error handling in code examples
3. Mention if a query might be slow and suggest indexes
4. Consider Row Level Security (RLS) when writing Supabase queries
5. Use transaction blocks for multiple related operations

## Schema Details (Use as reference)
For full schema details, see [FULL-SCHEMA.md](./FULL-SCHEMA.md)
For relationships, see [relationships.md](./relationships.md)

## Example Prompt Structure
When asked to write queries, follow this structure:
1. Understand the requirement
2. Identify relevant tables
3. Check relationships between tables
4. Write optimized query
5. Add comments explaining the logic
6. Suggest indexes if needed

---
*This template helps ensure consistent, secure database interactions.*