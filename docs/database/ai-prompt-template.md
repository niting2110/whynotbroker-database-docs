# AI Prompt Template for WHYNOTBROKER Database

## Context
Expert PostgreSQL/Supabase developer working with WHYNOTBROKER database.

## Database Schema Summary
**Total Tables:** 110
**PostgreSQL Version:** 17.6

## Available Tables
- admin_audit_logs (9 columns)
- admin_chat (4 columns)
- admin_leaves (17 columns)
- admin_messages (6 columns)
- admin_notices (5 columns)
- admin_regions (6 columns)
- admin_roles (3 columns)
- admin_users (7 columns)
- admins (20 columns)
- appointments (18 columns)
- blog_posts (17 columns)
- broker_aadhaar_verifications (13 columns)
- broker_gps_tracking (15 columns)
- broker_gst_verifications (16 columns)
- broker_kyc_documents (18 columns)
- broker_kyc_verifications (14 columns)
- broker_pan_verifications (11 columns)
- builders (28 columns)
- campaign_participants (9 columns)
- cities (14 columns)
- comm_deferred (11 columns)
- commission_events (13 columns)
- coupon_usage (9 columns)
- coupons (23 columns)
- credit_packages (17 columns)
- districts (7 columns)
- enquiries (12 columns)
- home_loan_consent_log (10 columns)
- hot_properties (25 columns)
- leave_balances (6 columns)
- leave_types (6 columns)
- lending_partners (13 columns)
- loan_calculations (13 columns)
- localities (28 columns)
- locality_amenities (10 columns)
- location_boundaries (10 columns)
- location_canonical_map (10 columns)
- market_trends (16 columns)
- mdm_aliases (19 columns)
- mdm_audit_logs (13 columns)
- mdm_curation_requests (40 columns)
- mdm_merge_history (12 columns)
- messages (21 columns)
- moderation_history (11 columns)
- notification_preferences (13 columns)
- notifications (10 columns)
- overtime_records (8 columns)
- permissions (6 columns)
- pg_bed (8 columns)
- pg_occupancy (8 columns)
- pg_occupancy_snapshot (7 columns)
- pg_owner_pnl (10 columns)
- pg_payment_record (16 columns)
- pg_police_verification (8 columns)
- pg_posting (19 columns)
- pg_posting_packs (8 columns)
- pg_property (18 columns)
- pg_receipt (11 columns)
- pg_rent_agreement (13 columns)
- pg_room (9 columns)
- pg_seeker_preferences (8 columns)
- pg_tenant (20 columns)
- pg_vacancy_event (9 columns)
- pincodes (10 columns)
- pricing_rules (14 columns)
- profiles (46 columns)
- projects (39 columns)
- promotional_campaigns (19 columns)
- properties (135 columns)
- property_amenities (7 columns)
- property_assignments (8 columns)
- property_comparisons (6 columns)
- property_documents (12 columns)
- property_images (15 columns)
- property_intelligence_scores (41 columns)
- property_leads (22 columns)
- property_price_history (7 columns)
- property_ranking_criteria (37 columns)
- property_reports (11 columns)
- property_shares (6 columns)
- property_valuations (37 columns)
- property_verifications (14 columns)
- property_views (10 columns)
- property_visits (11 columns)
- referrals (12 columns)
- refund_request (12 columns)
- regions (15 columns)
- role_permissions (2 columns)
- role_platform_access (16 columns)
- roles (7 columns)
- saved_listings (4 columns)
- saved_searches (11 columns)
- search_history (8 columns)
- security_flags (9 columns)
- spatial_ref_sys (5 columns)
- states (7 columns)
- sub_districts (7 columns)
- subscription_enrollments (14 columns)
- subscription_plans (19 columns)
- system_health_metrics (6 columns)
- transactions (35 columns)
- undervalued_properties (27 columns)
- user_favorites (4 columns)
- user_ratings (17 columns)
- user_regional_preferences (8 columns)
- verification_documents (15 columns)
- verification_gps_tracking (13 columns)
- verification_kyc (15 columns)
- waitlist_entries (4 columns)
- wallets (11 columns)

## Query Patterns

### SELECT with JOIN
```sql
SELECT t1.*, t2.related_column
FROM table1 t1
LEFT JOIN table2 t2 ON t1.fk = t2.id
WHERE t1.condition = 'value'
ORDER BY t1.created_at DESC
LIMIT 10;
```

### INSERT with RETURNING
```sql
INSERT INTO table_name (col1, col2, created_at, updated_at)
VALUES ($1, $2, NOW(), NOW())
RETURNING *;
```

### UPDATE with Versioning
```sql
UPDATE table_name
SET column = $1, updated_at = NOW()
WHERE id = $2
RETURNING *;
```

## Guidelines
1. Use parameterized queries ($1, $2)
2. Include error handling
3. Consider Row Level Security (RLS)
4. Use transactions for multiple operations

---
*For full schema: see FULL-SCHEMA.md*