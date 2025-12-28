# Schema Validation Report

Generated: 2025-12-28T06:59:12.167Z
Total Issues: 91
Warnings: 66
Recommendations: 25

## ⚠️ Warnings

| Severity | Table | Issue |
|----------|-------|-------|
| MEDIUM | `admin_audit_logs` | Foreign key admin_audit_logs_admin_id_fkey has no covering index |
| MEDIUM | `admin_chat` | Foreign key admin_chat_admin_id_fkey has no covering index |
| MEDIUM | `admin_leaves` | Foreign key admin_leaves_admin_id_fkey has no covering index |
| MEDIUM | `admin_leaves` | Foreign key admin_leaves_backup_admin_id_fkey has no covering index |
| MEDIUM | `admin_messages` | Foreign key admin_messages_receiver_id_fkey has no covering index |
| MEDIUM | `admin_messages` | Foreign key admin_messages_sender_id_fkey has no covering index |
| MEDIUM | `admin_roles` | Foreign key admin_roles_admin_id_fkey has no covering index |
| MEDIUM | `admin_roles` | Foreign key admin_roles_role_id_fkey has no covering index |
| MEDIUM | `admin_users` | Foreign key admin_users_id_fkey has no covering index |
| MEDIUM | `admins` | Foreign key admins_user_id_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_buyer_id_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_cancelled_by_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_property_id_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_seller_id_fkey has no covering index |
| MEDIUM | `blog_posts` | Foreign key blog_posts_author_id_fkey has no covering index |
| MEDIUM | `campaign_participants` | Foreign key campaign_participants_campaign_id_fkey has no covering index |
| MEDIUM | `campaign_participants` | Foreign key campaign_participants_region_id_fkey has no covering index |
| MEDIUM | `coupon_usage` | Foreign key coupon_usage_coupon_id_fkey has no covering index |
| MEDIUM | `coupon_usage` | Foreign key coupon_usage_region_id_fkey has no covering index |
| MEDIUM | `coupons` | Foreign key coupons_campaign_id_fkey has no covering index |
| MEDIUM | `credit_packages` | Foreign key credit_packages_region_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_property_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_receiver_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_sender_id_fkey has no covering index |
| MEDIUM | `moderation_history` | Foreign key moderation_history_admin_id_fkey has no covering index |
| MEDIUM | `moderation_history` | Foreign key moderation_history_property_id_fkey has no covering index |
| MEDIUM | `notifications` | Foreign key notifications_user_id_fkey has no covering index |
| MEDIUM | `pricing_rules` | Foreign key pricing_rules_region_id_fkey has no covering index |
| MEDIUM | `properties` | Foreign key properties_agency_id_fkey has no covering index |
| MEDIUM | `properties` | Foreign key properties_agent_id_fkey has no covering index |
| MEDIUM | `properties` | Foreign key properties_user_id_fkey has no covering index |
| MEDIUM | `property_amenities` | Foreign key property_amenities_property_id_fkey has no covering index |
| MEDIUM | `property_assignments` | Foreign key property_assignments_admin_id_fkey has no covering index |
| MEDIUM | `property_assignments` | Foreign key property_assignments_property_id_fkey has no covering index |
| MEDIUM | `property_documents` | Foreign key property_documents_property_id_fkey has no covering index |
| MEDIUM | `property_documents` | Foreign key property_documents_uploaded_by_fkey has no covering index |
| MEDIUM | `property_documents` | Foreign key property_documents_verified_by_fkey has no covering index |
| MEDIUM | `property_images` | Foreign key property_images_property_id_fkey has no covering index |
| MEDIUM | `property_images` | Foreign key property_images_uploaded_by_fkey has no covering index |
| MEDIUM | `property_price_history` | Foreign key property_price_history_changed_by_fkey has no covering index |
| MEDIUM | `property_price_history` | Foreign key property_price_history_property_id_fkey has no covering index |
| MEDIUM | `property_views` | Foreign key property_views_property_id_fkey has no covering index |
| MEDIUM | `property_views` | Foreign key property_views_user_id_fkey has no covering index |
| MEDIUM | `regions` | Foreign key regions_parent_region_id_fkey has no covering index |
| MEDIUM | `role_permissions` | Foreign key role_permissions_permission_id_fkey has no covering index |
| MEDIUM | `role_permissions` | Foreign key role_permissions_role_id_fkey has no covering index |
| MEDIUM | `search_history` | Foreign key search_history_user_id_fkey has no covering index |
| MEDIUM | `security_flags` | Foreign key security_flags_flagged_by_fkey has no covering index |
| MEDIUM | `security_flags` | Foreign key security_flags_resolved_by_fkey has no covering index |
| MEDIUM | `subscription_enrollments` | Foreign key subscription_enrollments_plan_id_fkey has no covering index |
| MEDIUM | `subscription_enrollments` | Foreign key subscription_enrollments_purchase_transaction_id_fkey has no covering index |
| MEDIUM | `subscription_enrollments` | Foreign key subscription_enrollments_user_id_fkey has no covering index |
| MEDIUM | `subscription_plans` | Foreign key subscription_plans_region_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_coupon_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_pricing_rule_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_region_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_user_id_fkey has no covering index |
| MEDIUM | `user_favorites` | Foreign key user_favorites_property_id_fkey has no covering index |
| MEDIUM | `user_favorites` | Foreign key user_favorites_user_id_fkey has no covering index |
| MEDIUM | `user_ratings` | Foreign key user_ratings_rated_property_id_fkey has no covering index |
| MEDIUM | `user_ratings` | Foreign key user_ratings_rated_user_id_fkey has no covering index |
| MEDIUM | `user_ratings` | Foreign key user_ratings_rating_user_id_fkey has no covering index |
| MEDIUM | `user_regional_preferences` | Foreign key user_regional_preferences_primary_region_id_fkey has no covering index |
| MEDIUM | `user_regional_preferences` | Foreign key user_regional_preferences_user_id_fkey has no covering index |
| MEDIUM | `wallets` | Foreign key wallets_last_transaction_region_id_fkey has no covering index |
| MEDIUM | `wallets` | Foreign key wallets_user_id_fkey has no covering index |

## 💡 Recommendations

| Table | Recommendation |
|-------|----------------|
| `admin_audit_logs` | Table missing timestamp columns (created_at, updated_at) |
| `admin_chat` | Table missing timestamp columns (created_at, updated_at) |
| `admin_leaves` | Table missing timestamp columns (created_at, updated_at) |
| `admin_messages` | Table missing timestamp columns (created_at, updated_at) |
| `admin_notices` | Table missing timestamp columns (created_at, updated_at) |
| `admin_roles` | Table missing timestamp columns (created_at, updated_at) |
| `admins` | Table missing timestamp columns (created_at, updated_at) |
| `campaign_participants` | Table missing timestamp columns (created_at, updated_at) |
| `coupon_usage` | Table missing timestamp columns (created_at, updated_at) |
| `moderation_history` | Table missing timestamp columns (created_at, updated_at) |
| `notifications` | Table missing timestamp columns (created_at, updated_at) |
| `permissions` | Table missing timestamp columns (created_at, updated_at) |
| `pricing_rules` | Table missing timestamp columns (created_at, updated_at) |
| `property_amenities` | Table missing timestamp columns (created_at, updated_at) |
| `property_assignments` | Table missing timestamp columns (created_at, updated_at) |
| `property_documents` | Table missing timestamp columns (created_at, updated_at) |
| `property_images` | Table missing timestamp columns (created_at, updated_at) |
| `property_price_history` | Table missing timestamp columns (created_at, updated_at) |
| `property_views` | Table missing timestamp columns (created_at, updated_at) |
| `role_permissions` | Table missing timestamp columns (created_at, updated_at) |
| `roles` | Table missing timestamp columns (created_at, updated_at) |
| `search_history` | Table missing timestamp columns (created_at, updated_at) |
| `security_flags` | Table missing timestamp columns (created_at, updated_at) |
| `user_favorites` | Table missing timestamp columns (created_at, updated_at) |
| `user_regional_preferences` | Table missing timestamp columns (created_at, updated_at) |
