# 🏠 WHYNOTBROKER Database Documentation
> **Live, auto-updated database reference**  
> Generated: 2026-01-01T07:01:39.277Z  
> Schema Hash: `66bd94fac0a7beb906b76072e1caf201`

## 📊 Quick Stats
- **Total Tables:** 63
- **Total Views:** 14
- **Total Materialized Views:** 1
- **Total Columns:** 1058
- **Total Relationships:** 113
- **Total Size:** 26.35 MB
- **PostgreSQL Version:** 17.6
- **Last Updated:** 1/1/2026, 12:31:39 pm IST

## 🚀 Getting Started
1. **New Developer?** → Read [QUICK-START.md](./QUICK-START.md) (5 minutes)
2. **Need Full Details?** → Read [FULL-SCHEMA.md](./FULL-SCHEMA.md)
3. **Working with AI?** → Use [ai-prompt-template.md](./ai-prompt-template.md)
4. **Need Migration Template?** → Check [migrations/template.sql](./migrations/template.sql)
5. **Schema Issues?** → Check [validation-report.md](./validation-report.md)

## 📁 Documentation Structure
```
/docs/
├── 📄 README.md                    # This file
├── 📄 FULL-SCHEMA.md              # Complete schema details
├── 📄 QUICK-START.md              # 5-minute quickstart
├── 📄 schema.json                 # Machine-readable schema
├── 📄 relationships.md            # ER diagram (text)
├── 📄 indexes.md                  # Index performance report
├── 📄 validation-report.md        # Schema validation results
├── 📄 changelog.json              # Schema change history
├── 📄 ai-prompt-template.md       # AI assistant template
├── 📄 .schema-hash                # Change detection
├── 📁 cheatsheets/
├── 📁 exports/
│   ├── schema.sql                # SQL DDL export
│   ├── typescript-interfaces.ts  # TypeScript types
│   └── graphql-schema.graphql    # GraphQL schema
└── 📁 migrations/
    └── template.sql               # Migration template
```

## 🔄 Auto-Update Schedule
This documentation updates:
- ⏰ **Daily** at 6:00 AM UTC (11:30 AM IST) via GitHub Actions
- 🔄 **On-demand** via manual trigger
- 📝 **After schema changes** automatically

## 📋 Table Summary
| Table | Columns | Rows | Size | Comment |
|-------|---------|------|------|---------|
| `admin_audit_logs` | 8 | ~115 | 0.09 MB |  |
| `admin_chat` | 4 | ~0 | 0.02 MB |  |
| `admin_leaves` | 8 | ~0 | 0.02 MB |  |
| `admin_messages` | 6 | ~17 | 0.03 MB |  |
| `admin_notices` | 5 | ~1 | 0.03 MB |  |
| `admin_roles` | 2 | ~14 | 0.02 MB |  |
| `admin_users` | 7 | ~2 | 0.73 MB |  |
| `admins` | 12 | ~10 | 0.06 MB |  |
| `appointments` | 18 | ~0 | 0.03 MB |  |
| `blog_posts` | 17 | ~0 | 0.03 MB |  |
| `builders` | 26 | ~0 | 0.03 MB |  |
| `campaign_participants` | 9 | ~0 | 0.05 MB | "Track user participation in ca..." |
| `coupon_usage` | 9 | ~0 | 0.04 MB | "Track coupon redemptions by us..." |
| `coupons` | 23 | ~4 | 0.12 MB | "Discount coupons with regional..." |
| `credit_packages` | 17 | ~5 | 0.06 MB | "Pre-paid credit packages with ..." |
| `hot_properties` | 25 | ~0 | 0.05 MB | "Real-time tracking of trending..." |
| `loan_calculations` | 13 | ~0 | 0.02 MB |  |
| `localities` | 24 | ~0 | 0.04 MB |  |
| `locality_amenities` | 10 | ~0 | 0.03 MB |  |
| `market_trends` | 16 | ~0 | 0.04 MB |  |
| `messages` | 21 | ~0 | 0.03 MB |  |
| `moderation_history` | 10 | ~8,984 | 1.59 MB |  |
| `notification_preferences` | 13 | ~0 | 0.01 MB |  |
| `notifications` | 10 | ~3 | 0.05 MB |  |
| `permissions` | 5 | ~12 | 0.06 MB |  |
| `pricing_rules` | 14 | ~6 | 0.08 MB | "Dynamic pricing rules based on..." |
| `profiles` | 42 | ~21 | 0.06 MB |  |
| `projects` | 34 | ~0 | 0.05 MB |  |
| `promotional_campaigns` | 19 | ~2 | 0.09 MB | "Marketing campaigns with regio..." |
| `properties` | 115 | ~9,000 | 17.88 MB |  |
| `property_amenities` | 7 | ~0 | 0.05 MB |  |
| `property_assignments` | 8 | ~8,980 | 3.30 MB |  |
| `property_comparisons` | 6 | ~0 | 0.02 MB |  |
| `property_documents` | 12 | ~0 | 0.04 MB |  |
| `property_images` | 13 | ~3 | 0.11 MB |  |
| `property_intelligence_scores` | 41 | ~0 | 0.07 MB | "AI-powered property scoring sy..." |
| `property_leads` | 21 | ~0 | 0.04 MB |  |
| `property_price_history` | 7 | ~0 | 0.03 MB |  |
| `property_ranking_criteria` | 37 | ~0 | 0.06 MB |  |
| `property_repeat_views` | 21 | ~0 | 0.05 MB |  |
| `property_reports` | 11 | ~0 | 0.03 MB |  |
| `property_shares` | 6 | ~0 | 0.02 MB |  |
| `property_valuations` | 37 | ~0 | 0.05 MB | "Automated and manual property ..." |
| `property_verifications` | 13 | ~0 | 0.03 MB |  |
| `property_views` | 10 | ~21 | 0.09 MB |  |
| `property_visits` | 11 | ~0 | 0.03 MB |  |
| `referrals` | 12 | ~0 | 0.04 MB |  |
| `regions` | 15 | ~9 | 0.09 MB | "Master table for regional conf..." |
| `repeat_customer_analytics` | 31 | ~0 | 0.06 MB |  |
| `role_permissions` | 2 | ~14 | 0.02 MB |  |
| `roles` | 2 | ~6 | 0.05 MB |  |
| `saved_searches` | 11 | ~0 | 0.02 MB |  |
| `search_history` | 8 | ~0 | 0.02 MB |  |
| `security_flags` | 9 | ~0 | 0.04 MB | "Tracks flagged admin activitie..." |
| `subscription_enrollments` | 13 | ~0 | 0.04 MB |  |
| `subscription_plans` | 19 | ~4 | 0.09 MB | "Recurring subscription plans w..." |
| `transactions` | 31 | ~0 | 0.07 MB | "All financial transactions wit..." |
| `undervalued_properties` | 27 | ~0 | 0.05 MB | "Identifies properties with exc..." |
| `user_engagement_metrics` | 36 | ~0 | 0.05 MB | "Tracks detailed user behavior ..." |
| `user_favorites` | 4 | ~3 | 0.09 MB |  |
| `user_ratings` | 17 | ~0 | 0.04 MB |  |
| `user_regional_preferences` | 8 | ~0 | 0.04 MB |  |
| `wallets` | 10 | ~21 | 0.07 MB | "User credit wallets with regio..." |

## 🔌 Extensions
- `pg_cron` (v1.6.4)
- `pg_graphql` (v1.5.11)
- `pg_net` (v0.19.5)
- `pg_stat_statements` (v1.11)
- `pgcrypto` (v1.3)
- `plpgsql` (v1.0)
- `supabase_vault` (v0.3.1)
- `uuid-ossp` (v1.1)
- `wrappers` (v0.5.6)

## ⚙️ Functions
- `add_credits_to_wallet(p_user_id uuid, p_credits integer, p_transaction_id uuid DEFAULT NULL::uuid)` → boolean
- `admin_has_permission(p_permission text)` → boolean
- `admin_has_permission(p_permission text, p_user_id uuid DEFAULT NULL::uuid)` → boolean
- `assign_property_to_admin(p_property_id uuid)` → uuid
- `audit_admin_role_changes()` → trigger
- `audit_admin_status_change()` → trigger
- `auto_assign_on_pending()` → trigger
- `bulk_moderation_decision(p_property_ids uuid[], p_action text, p_reason text, p_notes text, p_checklist jsonb)` → void
- `calculate_distance_km(lat1 numeric, lon1 numeric, lat2 numeric, lon2 numeric)` → numeric
- `calculate_gst(p_amount numeric, p_region_id uuid)` → TABLE(gst_rate numeric, gst_amount numeric, total_amount numeric)
- `calculate_price_per_unit()` → trigger
- `calculate_property_intelligence_score(p_property_id uuid)` → numeric
- `calculate_user_engagement_score(p_user_id uuid)` → numeric
- `create_admin_by_email(p_email text)` → uuid
- `create_wallet_for_new_user()` → trigger
- `deactivate_admin(p_admin_email text)` → void
- `deduct_credits_from_wallet(p_user_id uuid, p_credits integer, p_transaction_id uuid DEFAULT NULL::uuid)` → boolean
- `format_area_display(area numeric, unit text)` → text
- `format_price_display(amount numeric)` → text
- `format_property_location(city text, locality text)` → text
- `generate_pid()` → trigger
- `generate_property_description(prop_num integer)` → text
- `generate_property_title(prop_num integer)` → text
- `get_admin_context(p_user_id uuid)` → TABLE(admin_id uuid, email text, roles text[], permissions text[], permissions_version integer)
- `get_admin_context()` → TABLE(admin_id uuid, email text, roles text[], permissions text[], permissions_version integer)
- `get_applicable_coupons(p_user_id uuid, p_region_id uuid)` → TABLE(code text, discount_type text, discount_value numeric, description text, max_discount_amount numeric, min_purchase_amount numeric)
- `get_current_admin_id()` → uuid
- `get_effective_pricing(p_action text, p_region_id uuid, p_user_type text)` → TABLE(credit_cost integer, cash_price numeric, rule_id uuid, description text)
- `get_my_permissions()` → TABLE(permission_name text)
- `get_pincode(city text, prop_num integer)` → text
- `get_property_city(prop_num integer)` → text
- `get_property_stats(p_property_pid text)` → TABLE(total_views bigint, unique_session_views bigint, total_favorites bigint, unique_user_favorites bigint, last_viewed timestamp with time zone, first_listed timestamp with time zone)
- `get_property_type(prop_num integer)` → text
- `grant_role_to_admin(p_admin_email text, p_role_name text)` → void
- `handle_new_admin_signup()` → trigger
- `handle_new_user()` → trigger
- `has_permission(p_user_id uuid, p_permission text)` → boolean
- `increment_campaign_participants()` → trigger
- `increment_coupon_usage()` → trigger
- `increment_favorite_count(p_property_id uuid, p_user_id uuid)` → void
- `increment_view_count(p_property_id uuid, p_session_id text DEFAULT NULL::text)` → void
- `increment_view_count_simple(property_id uuid, session_id text)` → void
- `is_admin()` → boolean
- `is_sql_editor()` → boolean
- `log_admin_creation()` → trigger
- `log_admin_events()` → trigger
- `log_payment_admin_action()` → trigger
- `log_price_change()` → trigger
- `process_credit_purchase(p_user_id uuid, p_package_id uuid, p_region_id uuid, p_coupon_code text DEFAULT NULL::text, p_gateway text DEFAULT 'razorpay'::text, p_gateway_transaction_id text DEFAULT NULL::text)` → uuid
- `reactivate_admin(p_admin_email text)` → void
- `reassign_overdue_properties()` → void
- `remove_favorite_count(p_property_id uuid, p_user_id uuid)` → void
- `revoke_role_from_admin(p_admin_email text, p_role_name text)` → void
- `spend_credits_for_action(p_user_id uuid, p_action text, p_region_id uuid, p_reference_id uuid DEFAULT NULL::uuid, p_reference_type text DEFAULT NULL::text)` → uuid
- `submit_moderation_decision(p_property_id uuid, p_action text, p_reason text, p_notes text, p_checklist jsonb)` → void
- `update_builder_project_counts()` → trigger
- `update_locality_property_counts()` → trigger
- `update_updated_at_column()` → trigger
- `update_wallet_timestamp()` → trigger
- `validate_coupon(p_coupon_code text, p_user_id uuid, p_region_id uuid, p_purchase_amount numeric)` → TABLE(is_valid boolean, discount_amount numeric, message text, coupon_id uuid)


## 👁️ Views
- `active_regional_coupons`
- `active_subscriptions_summary` - "All active subscriptions with expiry tracking"
- `admin_moderation_history`
- `admin_review_queue`
- `coupon_performance` - "Coupon usage statistics and effectiveness"
- `my_accessible_transactions` - "Transactions filtered by user permissions"
- `pending_staff_view`
- `property_listings_view`
- `public_featured_properties`
- `public_property_details` - "Public view for property detail pages.
Includes full description and all details.
Base table RLS controls access."
- `public_property_listings` - "Public read-only view for property listings. 
Shows only published and active properties.
Description trimmed to 200 chars for performance.
Base table RLS controls access."
- `regional_revenue_summary` - "Monthly revenue breakdown by region"
- `transaction_type_summary` - "Transaction volume and value by type"
- `user_wallet_summary` - "Complete user wallet information with regional preferences"


## 📊 Materialized Views
- `mv_best_value_properties`

## 🔗 Key Relationships
- `admin_audit_logs` → `admins` (`admin_audit_logs_admin_id_fkey`)
- `admin_chat` → `admins` (`admin_chat_admin_id_fkey`)
- `admin_leaves` → `admins` (`admin_leaves_admin_id_fkey`)
- `admin_leaves` → `admins` (`admin_leaves_backup_admin_id_fkey`)
- `admin_messages` → `admins` (`admin_messages_receiver_id_fkey`)
- `admin_messages` → `admins` (`admin_messages_sender_id_fkey`)
- `admin_roles` → `admins` (`admin_roles_admin_id_fkey`)
- `admin_roles` → `roles` (`admin_roles_role_id_fkey`)
- `admin_users` → `profiles` (`admin_users_id_fkey`)
- `admins` → `profiles` (`admins_user_id_fkey`)

*...and 103 more (see [relationships.md](./relationships.md))*

## 📈 Performance Insights
- **Largest Table:** `properties`
- **Most Columns:** `properties` (115 columns)
- **Total Indexes:** 252
- **Total Constraints:** 558

## 🛠️ Useful Links
- [Supabase Dashboard](https://app.supabase.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Project Repository](https://github.com/your-org/whynotbroker)

---
*This documentation is auto-generated. Manual edits will be overwritten.*  
*Report issues: [GitHub Issues](https://github.com/your-org/whynotbroker/issues)*