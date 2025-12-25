# 🏠 WHYNOTBROKER Database Documentation
> **Live, auto-updated database reference**  
> Generated: 2025-12-25T07:00:22.102Z  
> Schema Hash: `243ec6973abc34f5fd6270f282bd26f0`

## 📊 Quick Stats
- **Total Tables:** 27
- **Total Views:** 6
- **Total Materialized Views:** 0
- **Total Columns:** 338
- **Total Relationships:** 42
- **Total Size:** 24.29 MB
- **PostgreSQL Version:** 17.6
- **Last Updated:** 25/12/2025, 12:30:22 pm IST

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
| `admin_audit_logs` | 8 | ~18 | 0.06 MB |  |
| `admin_chat` | 4 | ~0 | 0.02 MB |  |
| `admin_leaves` | 8 | ~0 | 0.02 MB |  |
| `admin_messages` | 6 | ~0 | 0.02 MB |  |
| `admin_notices` | 5 | ~1 | 0.03 MB |  |
| `admin_roles` | 2 | ~7 | 0.02 MB |  |
| `admin_users` | 7 | ~2 | 0.73 MB |  |
| `admins` | 6 | ~7 | 0.06 MB |  |
| `appointments` | 18 | ~0 | 0.03 MB |  |
| `blog_posts` | 17 | ~0 | 0.03 MB |  |
| `messages` | 18 | ~0 | 0.03 MB |  |
| `moderation_history` | 10 | ~8,984 | 1.59 MB |  |
| `notifications` | 10 | ~3 | 0.05 MB |  |
| `permissions` | 5 | ~9 | 0.06 MB |  |
| `profiles` | 31 | ~17 | 0.06 MB |  |
| `properties` | 93 | ~9,000 | 17.64 MB |  |
| `property_amenities` | 7 | ~0 | 0.05 MB |  |
| `property_assignments` | 8 | ~8,980 | 3.30 MB |  |
| `property_documents` | 12 | ~0 | 0.04 MB |  |
| `property_images` | 13 | ~3 | 0.11 MB |  |
| `property_price_history` | 7 | ~0 | 0.03 MB |  |
| `property_views` | 10 | ~21 | 0.09 MB |  |
| `role_permissions` | 2 | ~9 | 0.02 MB |  |
| `roles` | 2 | ~6 | 0.05 MB |  |
| `search_history` | 8 | ~0 | 0.02 MB |  |
| `user_favorites` | 4 | ~3 | 0.09 MB |  |
| `user_ratings` | 17 | ~0 | 0.04 MB |  |

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
- `admin_has_permission(p_permission text)` → boolean
- `assign_property_to_admin(p_property_id uuid)` → uuid
- `audit_admin_role_changes()` → trigger
- `audit_admin_status_change()` → trigger
- `auto_assign_on_pending()` → trigger
- `bulk_moderation_decision(p_property_ids uuid[], p_action text, p_reason text, p_notes text, p_checklist jsonb)` → void
- `calculate_price_per_unit()` → trigger
- `create_admin_by_email(p_email text)` → uuid
- `deactivate_admin(p_admin_email text)` → void
- `format_area_display(area numeric, unit text)` → text
- `format_price_display(amount numeric)` → text
- `format_property_location(city text, locality text)` → text
- `generate_pid()` → trigger
- `generate_property_description(prop_num integer)` → text
- `generate_property_title(prop_num integer)` → text
- `get_admin_context()` → TABLE(admin_id uuid, email text, roles text[], permissions text[], permissions_version integer)
- `get_current_admin_id()` → uuid
- `get_pincode(city text, prop_num integer)` → text
- `get_property_city(prop_num integer)` → text
- `get_property_stats(p_property_pid text)` → TABLE(total_views bigint, unique_session_views bigint, total_favorites bigint, unique_user_favorites bigint, last_viewed timestamp with time zone, first_listed timestamp with time zone)
- `get_property_type(prop_num integer)` → text
- `grant_role_to_admin(p_admin_email text, p_role_name text)` → void
- `handle_new_user()` → trigger
- `increment_favorite_count(p_property_id uuid, p_user_id uuid)` → void
- `increment_view_count(p_property_id uuid, p_session_id text DEFAULT NULL::text)` → void
- `increment_view_count_simple(property_id uuid, session_id text)` → void
- `is_admin()` → boolean
- `is_sql_editor()` → boolean
- `log_admin_creation()` → trigger
- `log_admin_events()` → trigger
- `log_price_change()` → trigger
- `reactivate_admin(p_admin_email text)` → void
- `reassign_overdue_properties()` → void
- `remove_favorite_count(p_property_id uuid, p_user_id uuid)` → void
- `revoke_role_from_admin(p_admin_email text, p_role_name text)` → void
- `submit_moderation_decision(p_property_id uuid, p_action text, p_reason text, p_notes text, p_checklist jsonb)` → void
- `update_updated_at_column()` → trigger


## 👁️ Views
- `admin_moderation_history`
- `admin_review_queue`
- `property_listings_view`
- `public_featured_properties`
- `public_property_details` - "Public view for property detail pages.
Includes full description and all details.
Base table RLS controls access."
- `public_property_listings` - "Public read-only view for property listings. 
Shows only published and active properties.
Description trimmed to 200 chars for performance.
Base table RLS controls access."



## 🔗 Key Relationships
- `admin_audit_logs` → `admins` (`admin_audit_logs_admin_id_fkey`)
- `admin_chat` → `admins` (`admin_chat_admin_id_fkey`)
- `admin_leaves` → `admins` (`admin_leaves_admin_id_fkey`)
- `admin_leaves` → `admins` (`admin_leaves_backup_admin_id_fkey`)
- `admin_roles` → `admins` (`admin_roles_admin_id_fkey`)
- `admin_roles` → `roles` (`admin_roles_role_id_fkey`)
- `admin_users` → `profiles` (`admin_users_id_fkey`)
- `admins` → `profiles` (`admins_user_id_fkey`)
- `appointments` → `profiles` (`appointments_buyer_id_fkey`)
- `appointments` → `profiles` (`appointments_cancelled_by_fkey`)

*...and 32 more (see [relationships.md](./relationships.md))*

## 📈 Performance Insights
- **Largest Table:** `properties`
- **Most Columns:** `properties` (93 columns)
- **Total Indexes:** 95
- **Total Constraints:** 243

## 🛠️ Useful Links
- [Supabase Dashboard](https://app.supabase.com)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Project Repository](https://github.com/your-org/whynotbroker)

---
*This documentation is auto-generated. Manual edits will be overwritten.*  
*Report issues: [GitHub Issues](https://github.com/your-org/whynotbroker/issues)*