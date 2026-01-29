# Schema Validation Report

Generated: 2026-01-29T07:00:40.989Z
Total Issues: 112
Warnings: 63
Recommendations: 49

## ⚠️ Warnings

| Severity | Table | Issue |
|----------|-------|-------|
| MEDIUM | `admin_chat` | Foreign key admin_chat_admin_id_fkey has no covering index |
| MEDIUM | `admin_leaves` | Foreign key admin_leaves_admin_id_fkey has no covering index |
| MEDIUM | `admin_leaves` | Foreign key admin_leaves_approved_by_id_fkey has no covering index |
| MEDIUM | `admin_leaves` | Foreign key admin_leaves_backup_admin_id_fkey has no covering index |
| MEDIUM | `admin_leaves` | Foreign key admin_leaves_leave_type_id_fkey has no covering index |
| MEDIUM | `admin_messages` | Foreign key admin_messages_receiver_id_fkey has no covering index |
| MEDIUM | `admin_messages` | Foreign key admin_messages_sender_id_fkey has no covering index |
| MEDIUM | `admin_regions` | Foreign key admin_regions_assigned_by_fkey has no covering index |
| MEDIUM | `admin_roles` | Foreign key admin_roles_admin_id_fkey has no covering index |
| MEDIUM | `admin_roles` | Foreign key admin_roles_role_id_fkey has no covering index |
| MEDIUM | `admins` | Foreign key admins_reporting_manager_id_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_buyer_id_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_cancelled_by_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_seller_id_fkey has no covering index |
| MEDIUM | `blog_posts` | Foreign key blog_posts_author_id_fkey has no covering index |
| MEDIUM | `campaign_participants` | Foreign key campaign_participants_region_id_fkey has no covering index |
| MEDIUM | `coupon_usage` | Foreign key coupon_usage_region_id_fkey has no covering index |
| MEDIUM | `leave_balances` | Foreign key leave_balances_admin_id_fkey has no covering index |
| MEDIUM | `leave_balances` | Foreign key leave_balances_leave_type_id_fkey has no covering index |
| MEDIUM | `loan_calculations` | Foreign key loan_calculations_property_id_fkey has no covering index |
| MEDIUM | `locality_amenities` | Foreign key locality_amenities_locality_id_fkey has no covering index |
| MEDIUM | `market_trends` | Foreign key market_trends_locality_id_fkey has no covering index |
| MEDIUM | `market_trends` | Foreign key market_trends_region_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_lead_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_parent_message_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_receiver_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_sender_id_fkey has no covering index |
| MEDIUM | `moderation_history` | Foreign key moderation_history_admin_id_fkey has no covering index |
| MEDIUM | `moderation_history` | Foreign key moderation_history_property_id_fkey has no covering index |
| MEDIUM | `notifications` | Foreign key notifications_user_id_fkey has no covering index |
| MEDIUM | `overtime_records` | Foreign key overtime_records_admin_id_fkey has no covering index |
| MEDIUM | `overtime_records` | Foreign key overtime_records_approved_by_fkey has no covering index |
| MEDIUM | `pricing_rules` | Foreign key pricing_rules_region_id_fkey has no covering index |
| MEDIUM | `properties` | Foreign key properties_last_viewed_by_fkey has no covering index |
| MEDIUM | `property_leads` | Foreign key property_leads_lead_user_id_fkey has no covering index |
| MEDIUM | `property_reports` | Foreign key property_reports_reported_by_fkey has no covering index |
| MEDIUM | `property_reports` | Foreign key property_reports_reviewed_by_fkey has no covering index |
| MEDIUM | `property_shares` | Foreign key property_shares_shared_by_fkey has no covering index |
| MEDIUM | `property_valuations` | Foreign key property_valuations_property_id_fkey has no covering index |
| MEDIUM | `property_valuations` | Foreign key property_valuations_validated_by_fkey has no covering index |
| MEDIUM | `property_verifications` | Foreign key property_verifications_verified_by_fkey has no covering index |
| MEDIUM | `property_views` | Foreign key property_views_user_id_fkey has no covering index |
| MEDIUM | `property_visits` | Foreign key property_visits_accompanied_by_fkey has no covering index |
| MEDIUM | `property_visits` | Foreign key property_visits_property_id_fkey has no covering index |
| MEDIUM | `referrals` | Foreign key referrals_referred_id_fkey has no covering index |
| MEDIUM | `repeat_customer_analytics` | Foreign key repeat_customer_analytics_most_viewed_property_id_fkey has no covering index |
| MEDIUM | `role_permissions` | Foreign key role_permissions_permission_id_fkey has no covering index |
| MEDIUM | `role_permissions` | Foreign key role_permissions_role_id_fkey has no covering index |
| MEDIUM | `saved_searches` | Foreign key saved_searches_user_id_fkey has no covering index |
| MEDIUM | `security_flags` | Foreign key security_flags_flagged_by_fkey has no covering index |
| MEDIUM | `security_flags` | Foreign key security_flags_resolved_by_fkey has no covering index |
| MEDIUM | `subscription_enrollments` | Foreign key subscription_enrollments_purchase_transaction_id_fkey has no covering index |
| MEDIUM | `subscription_enrollments` | Foreign key subscription_enrollments_user_id_fkey has no covering index |
| MEDIUM | `subscription_plans` | Foreign key subscription_plans_region_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_builder_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_coupon_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_lead_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_pricing_rule_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_project_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_region_id_fkey has no covering index |
| MEDIUM | `undervalued_properties` | Foreign key undervalued_properties_verified_by_fkey has no covering index |
| MEDIUM | `user_ratings` | Foreign key user_ratings_rating_user_id_fkey has no covering index |
| MEDIUM | `wallets` | Foreign key wallets_last_transaction_region_id_fkey has no covering index |

## 💡 Recommendations

| Table | Recommendation |
|-------|----------------|
| `admin_audit_logs` | Table missing timestamp columns (created_at, updated_at) |
| `admin_chat` | Table missing timestamp columns (created_at, updated_at) |
| `admin_leaves` | Table missing timestamp columns (created_at, updated_at) |
| `admin_messages` | Table missing timestamp columns (created_at, updated_at) |
| `admin_notices` | Table missing timestamp columns (created_at, updated_at) |
| `admin_regions` | Table missing timestamp columns (created_at, updated_at) |
| `admin_roles` | Table missing timestamp columns (created_at, updated_at) |
| `admins` | Table missing timestamp columns (created_at, updated_at) |
| `campaign_participants` | Table missing timestamp columns (created_at, updated_at) |
| `coupon_usage` | Table missing timestamp columns (created_at, updated_at) |
| `hot_properties` | Table missing timestamp columns (created_at, updated_at) |
| `leave_balances` | Table missing timestamp columns (created_at, updated_at) |
| `leave_types` | Table missing timestamp columns (created_at, updated_at) |
| `loan_calculations` | Table missing timestamp columns (created_at, updated_at) |
| `locality_amenities` | Table missing timestamp columns (created_at, updated_at) |
| `market_trends` | Table missing timestamp columns (created_at, updated_at) |
| `mdm_audit_logs` | Table missing timestamp columns (created_at, updated_at) |
| `mdm_merge_history` | Table missing timestamp columns (created_at, updated_at) |
| `moderation_history` | Table missing timestamp columns (created_at, updated_at) |
| `notifications` | Table missing timestamp columns (created_at, updated_at) |
| `overtime_records` | Table missing timestamp columns (created_at, updated_at) |
| `permissions` | Table missing timestamp columns (created_at, updated_at) |
| `pricing_rules` | Table missing timestamp columns (created_at, updated_at) |
| `property_amenities` | Table missing timestamp columns (created_at, updated_at) |
| `property_assignments` | Table missing timestamp columns (created_at, updated_at) |
| `property_comparisons` | Table missing timestamp columns (created_at, updated_at) |
| `property_documents` | Table missing timestamp columns (created_at, updated_at) |
| `property_images` | Table missing timestamp columns (created_at, updated_at) |
| `property_intelligence_scores` | Table missing timestamp columns (created_at, updated_at) |
| `property_leads` | Table missing timestamp columns (created_at, updated_at) |
| `property_price_history` | Table missing timestamp columns (created_at, updated_at) |
| `property_ranking_criteria` | Table missing timestamp columns (created_at, updated_at) |
| `property_repeat_views` | Table missing timestamp columns (created_at, updated_at) |
| `property_reports` | Table missing timestamp columns (created_at, updated_at) |
| `property_shares` | Table missing timestamp columns (created_at, updated_at) |
| `property_valuations` | Table missing timestamp columns (created_at, updated_at) |
| `property_verifications` | Table missing timestamp columns (created_at, updated_at) |
| `property_views` | Table missing timestamp columns (created_at, updated_at) |
| `property_visits` | Table missing timestamp columns (created_at, updated_at) |
| `referrals` | Table missing timestamp columns (created_at, updated_at) |
| `role_permissions` | Table missing timestamp columns (created_at, updated_at) |
| `roles` | Table missing timestamp columns (created_at, updated_at) |
| `search_history` | Table missing timestamp columns (created_at, updated_at) |
| `security_flags` | Table missing timestamp columns (created_at, updated_at) |
| `spatial_ref_sys` | Table missing timestamp columns (created_at, updated_at) |
| `system_health_metrics` | Table missing timestamp columns (created_at, updated_at) |
| `undervalued_properties` | Table missing timestamp columns (created_at, updated_at) |
| `user_favorites` | Table missing timestamp columns (created_at, updated_at) |
| `user_regional_preferences` | Table missing timestamp columns (created_at, updated_at) |
