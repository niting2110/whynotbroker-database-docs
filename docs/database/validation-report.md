# Schema Validation Report

Generated: 2026-04-09T07:50:42.385Z
Total Issues: 100
Warnings: 33
Recommendations: 67

## ⚠️ Warnings

| Severity | Table | Issue |
|----------|-------|-------|
| MEDIUM | `admin_roles` | Foreign key admin_roles_admin_id_fkey has no covering index |
| MEDIUM | `admin_roles` | Foreign key admin_roles_role_id_fkey has no covering index |
| MEDIUM | `commission_events` | Foreign key commission_events_property_id_fkey has no covering index |
| MEDIUM | `commission_events` | Foreign key commission_events_user_id_fkey has no covering index |
| MEDIUM | `enquiries` | Foreign key enquiries_status_updated_by_fk has no covering index |
| MEDIUM | `home_loan_consent_log` | Foreign key hlcl_partner_id_fk has no covering index |
| MEDIUM | `home_loan_consent_log` | Foreign key home_loan_consent_log_user_id_fkey has no covering index |
| MEDIUM | `leave_balances` | Foreign key leave_balances_admin_id_fkey has no covering index |
| MEDIUM | `leave_balances` | Foreign key leave_balances_leave_type_id_fkey has no covering index |
| MEDIUM | `locality_amenities` | Foreign key locality_amenities_locality_id_fkey has no covering index |
| MEDIUM | `market_trends` | Foreign key market_trends_locality_id_fkey has no covering index |
| MEDIUM | `market_trends` | Foreign key market_trends_region_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_receiver_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_sender_id_fkey has no covering index |
| MEDIUM | `notifications` | Foreign key notifications_user_id_fkey has no covering index |
| MEDIUM | `pg_occupancy_snapshot` | Foreign key pg_occupancy_snapshot_pg_property_id_fkey has no covering index |
| MEDIUM | `pg_owner_pnl` | Foreign key pg_owner_pnl_pg_property_id_fkey has no covering index |
| MEDIUM | `pg_payment_record` | Foreign key pg_payment_record_pg_property_id_fkey has no covering index |
| MEDIUM | `pg_posting` | Foreign key pg_posting_pg_property_id_fkey has no covering index |
| MEDIUM | `pg_tenant` | Foreign key pg_tenant_pg_property_id_fkey has no covering index |
| MEDIUM | `pg_vacancy_event` | Foreign key pg_vacancy_event_pg_property_id_fkey has no covering index |
| MEDIUM | `pg_vacancy_event` | Foreign key pgve_created_pg_posting_id_fk has no covering index |
| MEDIUM | `pricing_rules` | Foreign key pricing_rules_region_id_fkey has no covering index |
| MEDIUM | `property_valuations` | Foreign key property_valuations_property_id_fkey has no covering index |
| MEDIUM | `property_visits` | Foreign key property_visits_property_id_fkey has no covering index |
| MEDIUM | `refund_request` | Foreign key refund_request_requested_by_fkey has no covering index |
| MEDIUM | `refund_request` | Foreign key refund_request_reviewed_by_fkey has no covering index |
| MEDIUM | `role_permissions` | Foreign key role_permissions_permission_id_fkey has no covering index |
| MEDIUM | `role_permissions` | Foreign key role_permissions_role_id_fkey has no covering index |
| MEDIUM | `saved_searches` | Foreign key saved_searches_user_id_fkey has no covering index |
| MEDIUM | `subscription_enrollments` | Foreign key subscription_enrollments_user_id_fkey has no covering index |
| MEDIUM | `transactions` | Foreign key transactions_region_id_fkey has no covering index |
| MEDIUM | `user_ratings` | Foreign key user_ratings_rating_user_id_fkey has no covering index |

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
| `broker_aadhaar_verifications` | Table missing timestamp columns (created_at, updated_at) |
| `broker_gps_tracking` | Table missing timestamp columns (created_at, updated_at) |
| `broker_gst_verifications` | Table missing timestamp columns (created_at, updated_at) |
| `broker_pan_verifications` | Table missing timestamp columns (created_at, updated_at) |
| `campaign_participants` | Table missing timestamp columns (created_at, updated_at) |
| `coupon_usage` | Table missing timestamp columns (created_at, updated_at) |
| `home_loan_consent_log` | Table missing timestamp columns (created_at, updated_at) |
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
| `pg_bed` | Table missing timestamp columns (created_at, updated_at) |
| `pg_occupancy` | Table missing timestamp columns (created_at, updated_at) |
| `pg_occupancy_snapshot` | Table missing timestamp columns (created_at, updated_at) |
| `pg_owner_pnl` | Table missing timestamp columns (created_at, updated_at) |
| `pg_payment_record` | Table missing timestamp columns (created_at, updated_at) |
| `pg_police_verification` | Table missing timestamp columns (created_at, updated_at) |
| `pg_receipt` | Table missing timestamp columns (created_at, updated_at) |
| `pg_rent_agreement` | Table missing timestamp columns (created_at, updated_at) |
| `pg_room` | Table missing timestamp columns (created_at, updated_at) |
| `pg_seeker_preferences` | Table missing timestamp columns (created_at, updated_at) |
| `pg_tenant` | Table missing timestamp columns (created_at, updated_at) |
| `pg_vacancy_event` | Table missing timestamp columns (created_at, updated_at) |
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
| `property_reports` | Table missing timestamp columns (created_at, updated_at) |
| `property_shares` | Table missing timestamp columns (created_at, updated_at) |
| `property_valuations` | Table missing timestamp columns (created_at, updated_at) |
| `property_verifications` | Table missing timestamp columns (created_at, updated_at) |
| `property_views` | Table missing timestamp columns (created_at, updated_at) |
| `property_visits` | Table missing timestamp columns (created_at, updated_at) |
| `referrals` | Table missing timestamp columns (created_at, updated_at) |
| `role_permissions` | Table missing timestamp columns (created_at, updated_at) |
| `saved_listings` | Table missing timestamp columns (created_at, updated_at) |
| `search_history` | Table missing timestamp columns (created_at, updated_at) |
| `security_flags` | Table missing timestamp columns (created_at, updated_at) |
| `spatial_ref_sys` | Table missing timestamp columns (created_at, updated_at) |
| `system_health_metrics` | Table missing timestamp columns (created_at, updated_at) |
| `undervalued_properties` | Table missing timestamp columns (created_at, updated_at) |
| `user_favorites` | Table missing timestamp columns (created_at, updated_at) |
| `user_regional_preferences` | Table missing timestamp columns (created_at, updated_at) |
| `verification_gps_tracking` | Table missing timestamp columns (created_at, updated_at) |
| `waitlist_entries` | Table missing timestamp columns (created_at, updated_at) |
