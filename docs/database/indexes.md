# Index Performance Report

Generated: 2026-05-05T08:22:17.110Z
Total Indexes: 539

## All Indexes

| Table | Index | Type | Columns | Unique |
|-------|-------|------|---------|--------|
| `admin_audit_logs` | `admin_audit_logs_pkey` | btree | id | ✓ |
| `admin_audit_logs` | `idx_admin_audit_logs_action` | btree | action | — |
| `admin_audit_logs` | `idx_admin_audit_logs_admin_created` | btree | admin_id, created_at | — |
| `admin_audit_logs` | `idx_admin_audit_logs_admin_id` | btree | admin_id | — |
| `admin_audit_logs` | `idx_admin_audit_logs_created_at` | btree | created_at | — |
| `admin_audit_logs` | `idx_admin_audit_logs_region_id` | btree | region_id | — |
| `admin_audit_logs` | `idx_audit_admin_id` | btree | admin_id | — |
| `admin_audit_logs` | `idx_audit_created_at` | btree | created_at | — |
| `admin_chat` | `admin_chat_pkey` | btree | id | ✓ |
| `admin_chat` | `idx_admin_chat_admin_id` | btree | admin_id | — |
| `admin_leaves` | `admin_leaves_pkey` | btree | id | ✓ |
| `admin_leaves` | `idx_admin_leaves_admin_id` | btree | admin_id | — |
| `admin_leaves` | `idx_admin_leaves_approved_by_id` | btree | approved_by_id | — |
| `admin_leaves` | `idx_admin_leaves_backup_admin_id` | btree | backup_admin_id | — |
| `admin_leaves` | `idx_admin_leaves_leave_type_id` | btree | leave_type_id | — |
| `admin_messages` | `admin_messages_pkey` | btree | id | ✓ |
| `admin_messages` | `idx_admin_messages_receiver_id` | btree | receiver_id | — |
| `admin_messages` | `idx_admin_messages_sender_id` | btree | sender_id | — |
| `admin_notices` | `admin_notices_pkey` | btree | id | ✓ |
| `admin_notices` | `idx_admin_notices_active_created` | btree | is_active, created_at | — |
| `admin_notices` | `idx_admin_notices_admin_active` | btree | created_at | — |
| `admin_regions` | `admin_regions_admin_id_region_id_key` | btree | admin_id, region_id | ✓ |
| `admin_regions` | `admin_regions_pkey` | btree | id | ✓ |
| `admin_regions` | `idx_admin_regions_admin` | btree | admin_id | — |
| `admin_regions` | `idx_admin_regions_assigned_by` | btree | assigned_by | — |
| `admin_regions` | `idx_admin_regions_region` | btree | region_id | — |
| `admin_roles` | `admin_roles_pkey` | btree | admin_id, role_id | ✓ |
| `admin_users` | `admin_users_pkey` | btree | id | ✓ |
| `admins` | `admins_email_key` | btree | email | ✓ |
| `admins` | `admins_pkey` | btree | id | ✓ |
| `admins` | `admins_user_id_key` | btree | user_id | ✓ |
| `admins` | `idx_admins_reporting_manager_id` | btree | reporting_manager_id | — |
| `appointments` | `appointments_pkey` | btree | id | ✓ |
| `appointments` | `idx_appointments_buyer_id` | btree | buyer_id | — |
| `appointments` | `idx_appointments_cancelled_by` | btree | cancelled_by | — |
| `appointments` | `idx_appointments_date_status` | btree | appointment_date, status | — |
| `appointments` | `idx_appointments_property` | btree | property_id | — |
| `appointments` | `idx_appointments_seller_id` | btree | seller_id | — |
| `blog_posts` | `blog_posts_pid_key` | btree | pid | ✓ |
| `blog_posts` | `blog_posts_pkey` | btree | id | ✓ |
| `blog_posts` | `blog_posts_slug_key` | btree | slug | ✓ |
| `blog_posts` | `idx_blog_posts_author_id` | btree | author_id | — |
| `broker_aadhaar_verifications` | `broker_aadhaar_verifications_pkey` | btree | id | ✓ |
| `broker_aadhaar_verifications` | `idx_aadhaar_user_id` | btree | user_id | — |
| `broker_gps_tracking` | `broker_gps_tracking_pkey` | btree | id | ✓ |
| `broker_gps_tracking` | `idx_gps_property_id` | btree | property_id | — |
| `broker_gps_tracking` | `idx_gps_recorded_at` | btree | recorded_at | — |
| `broker_gps_tracking` | `idx_gps_user_id` | btree | user_id | — |
| `broker_gst_verifications` | `broker_gst_verifications_pkey` | btree | id | ✓ |
| `broker_gst_verifications` | `idx_gst_user_id` | btree | user_id | — |
| `broker_kyc_documents` | `broker_kyc_documents_pkey` | btree | id | ✓ |
| `broker_kyc_documents` | `idx_kyc_docs_user_id` | btree | user_id | — |
| `broker_kyc_documents` | `idx_kyc_docs_verification_id` | btree | verification_id | — |
| `broker_kyc_verifications` | `broker_kyc_verifications_pkey` | btree | id | ✓ |
| `broker_kyc_verifications` | `idx_kyc_status` | btree | status | — |
| `broker_kyc_verifications` | `idx_kyc_user_id` | btree | user_id | — |
| `broker_pan_verifications` | `broker_pan_verifications_pkey` | btree | id | ✓ |
| `broker_pan_verifications` | `idx_pan_user_id` | btree | user_id | — |
| `builders` | `builders_pkey` | btree | id | ✓ |
| `builders` | `idx_builders_dedup_group` | btree | dedup_group_id | — |
| `builders` | `idx_builders_name` | btree | name | — |
| `builders` | `idx_builders_normalized` | btree | normalized_name | — |
| `builders` | `idx_builders_verified` | btree | is_verified | — |
| `campaign_participants` | `campaign_participants_campaign_id_user_id_key` | btree | campaign_id, user_id | ✓ |
| `campaign_participants` | `campaign_participants_pkey` | btree | id | ✓ |
| `campaign_participants` | `idx_campaign_participants_campaign` | btree | campaign_id | — |
| `campaign_participants` | `idx_campaign_participants_completed` | btree | is_completed | — |
| `campaign_participants` | `idx_campaign_participants_region_id` | btree | region_id | — |
| `campaign_participants` | `idx_campaign_participants_user` | btree | user_id | — |
| `cities` | `cities_pkey` | btree | id | ✓ |
| `cities` | `idx_cities_district` | btree | district_id | — |
| `cities` | `idx_cities_geo` | gist | geo_point | — |
| `cities` | `idx_cities_metro` | btree | is_metro | — |
| `cities` | `idx_cities_name_trgm` | gin | name | — |
| `cities` | `idx_cities_normalized_name` | btree | normalized_name | — |
| `cities` | `idx_cities_state` | btree | state_id | — |
| `cities` | `idx_cities_unique_name_state` | btree | normalized_name, state_id | ✓ |
| `comm_deferred` | `comm_deferred_pkey` | btree | id | ✓ |
| `comm_deferred` | `comm_deferred_retry_idx` | btree | retry_at | — |
| `commission_events` | `commission_events_partner_idx` | btree | partner_id | — |
| `commission_events` | `commission_events_pkey` | btree | id | ✓ |
| `commission_events` | `commission_events_transaction_idx` | btree | transaction_id | — |
| `commission_events` | `idx_commission_events_loan_application_id` | btree | loan_application_id | ✓ |
| `commission_events` | `idx_commission_events_reviewed_by` | btree | reviewed_by | — |
| `commission_events` | `idx_commission_events_status` | btree | status | — |
| `coupon_usage` | `coupon_usage_coupon_id_user_id_transaction_id_key` | btree | coupon_id, user_id, transaction_id | ✓ |
| `coupon_usage` | `coupon_usage_pkey` | btree | id | ✓ |
| `coupon_usage` | `idx_coupon_usage_coupon` | btree | coupon_id | — |
| `coupon_usage` | `idx_coupon_usage_region_id` | btree | region_id | — |
| `coupon_usage` | `idx_coupon_usage_transaction` | btree | transaction_id | — |
| `coupon_usage` | `idx_coupon_usage_user` | btree | user_id | — |
| `coupons` | `coupons_code_key` | btree | code | ✓ |
| `coupons` | `coupons_pkey` | btree | id | ✓ |
| `coupons` | `idx_coupons_campaign` | btree | campaign_id | — |
| `coupons` | `idx_coupons_code` | btree | code | — |
| `coupons` | `idx_coupons_regions` | gin | region_ids | — |
| `coupons` | `idx_coupons_valid` | btree | valid_from, valid_until | — |
| `coupons` | `idx_coupons_valid_until` | btree | valid_until | — |
| `credit_packages` | `credit_packages_pkey` | btree | id | ✓ |
| `credit_packages` | `idx_credit_packages_active` | btree | display_order, is_active | — |
| `credit_packages` | `idx_credit_packages_region` | btree | region_id | — |
| `districts` | `districts_lgd_code_key` | btree | lgd_code | ✓ |
| `districts` | `districts_pkey` | btree | id | ✓ |
| `districts` | `idx_districts_lgd` | btree | lgd_code | — |
| `districts` | `idx_districts_name` | btree | state_id, name | — |
| `districts` | `idx_districts_name_trgm` | gin | name | — |
| `districts` | `idx_districts_state` | btree | state_id | — |
| `enquiries` | `enquiries_pkey` | btree | id | ✓ |
| `enquiries` | `enquiries_posting_idx` | btree | pg_posting_id | — |
| `enquiries` | `enquiries_seeker_idx` | btree | seeker_profile_id | — |
| `enquiries` | `enquiries_status_idx` | btree | status, created_at | — |
| `home_loan_consent_log` | `home_loan_consent_log_pkey` | btree | id | ✓ |
| `home_loan_consent_log` | `idx_hlcl_bank_id_given` | btree | bank_id, consent_given_at | — |
| `home_loan_consent_log` | `idx_hlcl_user_id` | btree | user_id, consent_given_at | — |
| `hot_properties` | `hot_properties_pkey` | btree | id | ✓ |
| `hot_properties` | `idx_hot_properties_active` | btree | heat_score, is_currently_hot | — |
| `hot_properties` | `idx_hot_properties_property` | btree | property_id | — |
| `hot_properties` | `idx_hot_properties_score` | btree | heat_score | — |
| `hot_properties` | `idx_hot_properties_trend` | btree | heat_trend | — |
| `leave_balances` | `leave_balances_admin_id_leave_type_id_year_key` | btree | admin_id, leave_type_id, year | ✓ |
| `leave_balances` | `leave_balances_pkey` | btree | id | ✓ |
| `leave_types` | `leave_types_pkey` | btree | id | ✓ |
| `lending_partners` | `lending_partners_pkey` | btree | id | ✓ |
| `listing_boosts` | `idx_listing_boosts_listing_id` | btree | listing_id | — |
| `listing_boosts` | `idx_listing_boosts_status` | btree | status | — |
| `listing_boosts` | `listing_boosts_pkey` | btree | id | ✓ |
| `loan_calculations` | `idx_loan_calculations_property_id` | btree | property_id | — |
| `loan_calculations` | `idx_loan_calculations_user` | btree | user_id | — |
| `loan_calculations` | `loan_calculations_pkey` | btree | id | ✓ |
| `localities` | `idx_localities_city_new` | btree | city_id | — |
| `localities` | `idx_localities_district` | btree | district_id | — |
| `localities` | `idx_localities_name_trgm` | gin | name | — |
| `localities` | `idx_localities_normalized` | btree | normalized_name | — |
| `localities` | `idx_localities_pincode` | btree | pincode | — |
| `localities` | `idx_localities_popularity` | btree | popularity_score | — |
| `localities` | `idx_localities_region` | btree | region_id | — |
| `localities` | `idx_localities_state_new` | btree | state_id | — |
| `localities` | `idx_localities_unique_name_city` | btree | city_id, normalized_name | ✓ |
| `localities` | `localities_pkey` | btree | id | ✓ |
| `locality_amenities` | `idx_locality_amenities_distance` | btree | locality_id, distance_km | — |
| `locality_amenities` | `idx_locality_amenities_locality` | btree | locality_id, category | — |
| `locality_amenities` | `locality_amenities_pkey` | btree | id | ✓ |
| `location_boundaries` | `idx_location_boundaries_active` | btree | is_active | — |
| `location_boundaries` | `idx_location_boundaries_entity` | btree | entity_type, entity_id | — |
| `location_boundaries` | `idx_location_boundaries_geo` | gist | boundary | — |
| `location_boundaries` | `idx_location_boundaries_unique` | btree | entity_type, entity_id, source | ✓ |
| `location_boundaries` | `idx_location_boundaries_zoom` | btree | min_zoom | — |
| `location_boundaries` | `location_boundaries_pkey` | btree | id | ✓ |
| `location_canonical_map` | `idx_location_canonical_city` | btree | city_id | — |
| `location_canonical_map` | `idx_location_canonical_confidence` | btree | confidence_score | — |
| `location_canonical_map` | `idx_location_canonical_locality` | btree | locality_id | — |
| `location_canonical_map` | `idx_location_canonical_normalized` | btree | normalized_name | — |
| `location_canonical_map` | `idx_location_canonical_raw` | btree | raw_name | — |
| `location_canonical_map` | `idx_location_canonical_raw_trgm` | gin | raw_name | — |
| `location_canonical_map` | `idx_location_canonical_usage` | btree | usage_count | — |
| `location_canonical_map` | `location_canonical_map_pkey` | btree | id | ✓ |
| `market_trends` | `idx_market_trends_locality` | btree | locality_id, month_year | — |
| `market_trends` | `idx_market_trends_region` | btree | region_id, month_year | — |
| `market_trends` | `market_trends_pkey` | btree | id | ✓ |
| `market_trends` | `market_trends_region_id_locality_id_property_type_bhk_type__key` | btree | region_id, locality_id, property_type, bhk_type, month_year | ✓ |
| `mdm_aliases` | `idx_mdm_aliases_canonical` | btree | canonical_entity_id, canonical_entity_type | — |
| `mdm_aliases` | `idx_mdm_aliases_status` | btree | status | — |
| `mdm_aliases` | `idx_mdm_aliases_usage` | btree | canonical_resolution_count | — |
| `mdm_aliases` | `idx_mdm_aliases_value` | btree | alias_value | — |
| `mdm_aliases` | `idx_mdm_aliases_value_trgm` | gin | alias_value | — |
| `mdm_aliases` | `mdm_aliases_city_unique` | btree | canonical_entity_type, alias_value, alias_language, city_id | ✓ |
| `mdm_aliases` | `mdm_aliases_national_unique` | btree | canonical_entity_type, alias_value, alias_language | ✓ |
| `mdm_aliases` | `mdm_aliases_pkey` | btree | id | ✓ |
| `mdm_audit_logs` | `idx_mdm_audit_action` | btree | action, created_at | — |
| `mdm_audit_logs` | `idx_mdm_audit_admin` | btree | admin_id, created_at | — |
| `mdm_audit_logs` | `idx_mdm_audit_created` | btree | created_at | — |
| `mdm_audit_logs` | `mdm_audit_logs_pkey` | btree | id | ✓ |
| `mdm_curation_requests` | `idx_mdm_requests_entity` | btree | entity_type, status | — |
| `mdm_curation_requests` | `idx_mdm_requests_priority` | btree | priority, sla_deadline | — |
| `mdm_curation_requests` | `idx_mdm_requests_sla` | btree | sla_deadline | — |
| `mdm_curation_requests` | `idx_mdm_requests_status` | btree | status | — |
| `mdm_curation_requests` | `idx_mdm_requests_submitted` | btree | submitted_value | — |
| `mdm_curation_requests` | `mdm_curation_requests_pkey` | btree | id | ✓ |
| `mdm_merge_history` | `idx_mdm_merge_executed` | btree | executed_at | — |
| `mdm_merge_history` | `idx_mdm_merge_source` | btree | source_entity_id, entity_type | — |
| `mdm_merge_history` | `mdm_merge_history_pkey` | btree | id | ✓ |
| `messages` | `idx_messages_lead_id` | btree | lead_id | — |
| `messages` | `idx_messages_parent_message_id` | btree | parent_message_id | — |
| `messages` | `idx_messages_property` | btree | property_id | — |
| `messages` | `idx_messages_sender_receiver` | btree | sender_id, receiver_id | — |
| `messages` | `messages_pkey` | btree | id | ✓ |
| `moderation_history` | `idx_moderation_history_action` | btree | action | — |
| `moderation_history` | `idx_moderation_history_admin_created_at` | btree | admin_id, created_at | — |
| `moderation_history` | `idx_moderation_history_admin_id` | btree | admin_id | — |
| `moderation_history` | `idx_moderation_history_created_at_desc` | btree | created_at | — |
| `moderation_history` | `idx_moderation_history_property_id` | btree | property_id | — |
| `moderation_history` | `moderation_history_pkey` | btree | id | ✓ |
| `notification_preferences` | `notification_preferences_pkey` | btree | user_id | ✓ |
| `notifications` | `idx_notifications_user_unread` | btree | user_id, is_read | — |
| `notifications` | `notifications_pkey` | btree | id | ✓ |
| `overtime_records` | `idx_overtime_records_admin_id` | btree | admin_id | — |
| `overtime_records` | `idx_overtime_records_approved_by` | btree | approved_by | — |
| `overtime_records` | `overtime_records_pkey` | btree | id | ✓ |
| `permissions` | `permission_unique` | btree | domain, action, scope | ✓ |
| `permissions` | `permissions_id_key` | btree | id | ✓ |
| `permissions` | `permissions_name_key` | btree | name | ✓ |
| `permissions` | `permissions_pkey` | btree | id | ✓ |
| `pg_bed` | `idx_pg_bed_pg_room_id` | btree | pg_room_id | — |
| `pg_bed` | `pg_bed_pkey` | btree | id | ✓ |
| `pg_occupancy` | `idx_pg_occupancy_pg_bed_id` | btree | pg_bed_id | — |
| `pg_occupancy` | `idx_pg_occupancy_pg_property_id` | btree | pg_property_id | — |
| `pg_occupancy` | `idx_pg_occupancy_pg_tenant_id` | btree | pg_tenant_id | — |
| `pg_occupancy` | `pg_occupancy_pkey` | btree | id | ✓ |
| `pg_occupancy_snapshot` | `pg_occupancy_snapshot_pkey` | btree | id | ✓ |
| `pg_occupancy_snapshot` | `pg_occupancy_snapshot_unique_date` | btree | pg_property_id, snapshot_date | ✓ |
| `pg_owner_pnl` | `pg_owner_pnl_pkey` | btree | id | ✓ |
| `pg_owner_pnl` | `pg_owner_pnl_unique_month` | btree | pg_property_id, snapshot_month | ✓ |
| `pg_payment_record` | `idx_pg_payment_record_pg_tenant_id` | btree | pg_tenant_id | — |
| `pg_payment_record` | `idx_pg_payment_record_property` | btree | pg_property_id, payment_date | — |
| `pg_payment_record` | `pg_payment_record_pkey` | btree | id | ✓ |
| `pg_police_verification` | `idx_pg_police_verification_pg_property_id` | btree | pg_property_id | — |
| `pg_police_verification` | `idx_pg_police_verification_pg_tenant_id` | btree | pg_tenant_id | — |
| `pg_police_verification` | `pg_police_verification_pkey` | btree | id | ✓ |
| `pg_posting` | `idx_pg_posting_property` | btree | pg_property_id, status | — |
| `pg_posting` | `idx_pg_posting_status` | btree | available_from, status | — |
| `pg_posting` | `pg_posting_pkey` | btree | id | ✓ |
| `pg_posting_packs` | `pg_posting_packs_pkey` | btree | id | ✓ |
| `pg_posting_packs` | `pg_posting_packs_profile_unique` | btree | profile_id | ✓ |
| `pg_property` | `idx_pg_property_locality` | btree | locality, city | — |
| `pg_property` | `idx_pg_property_owner` | btree | owner_id | — |
| `pg_property` | `idx_pg_property_status` | btree | listing_status | — |
| `pg_property` | `pg_property_pkey` | btree | id | ✓ |
| `pg_receipt` | `idx_pg_receipt_pg_payment_record_id` | btree | pg_payment_record_id | — |
| `pg_receipt` | `pg_receipt_pkey` | btree | id | ✓ |
| `pg_receipt` | `pg_receipt_receipt_number_key` | btree | receipt_number | ✓ |
| `pg_rent_agreement` | `idx_pg_rent_agreement_pg_property_id` | btree | pg_property_id | — |
| `pg_rent_agreement` | `idx_pg_rent_agreement_pg_tenant_id` | btree | pg_tenant_id | — |
| `pg_rent_agreement` | `pg_rent_agreement_pkey` | btree | id | ✓ |
| `pg_room` | `idx_pg_room_pg_property_id` | btree | pg_property_id | — |
| `pg_room` | `pg_room_pkey` | btree | id | ✓ |
| `pg_seeker_preferences` | `pg_seeker_preferences_pkey` | btree | profile_id | ✓ |
| `pg_tenant` | `idx_pg_tenant_pg_bed_id` | btree | pg_bed_id | — |
| `pg_tenant` | `idx_pg_tenant_property` | btree | pg_property_id, status | — |
| `pg_tenant` | `idx_pg_tenant_user_id` | btree | user_id | — |
| `pg_tenant` | `pg_tenant_pkey` | btree | id | ✓ |
| `pg_vacancy_event` | `idx_pg_vacancy_event_pg_bed_id` | btree | pg_bed_id | — |
| `pg_vacancy_event` | `idx_pg_vacancy_event_property` | btree | pg_property_id, created_at | — |
| `pg_vacancy_event` | `pg_vacancy_event_pkey` | btree | id | ✓ |
| `pincodes` | `idx_pincodes_city` | btree | city_id | — |
| `pincodes` | `idx_pincodes_district` | btree | district_id | — |
| `pincodes` | `idx_pincodes_geo` | gist | geo_point | — |
| `pincodes` | `idx_pincodes_state` | btree | state_id | — |
| `pincodes` | `pincodes_pkey` | btree | pincode | ✓ |
| `pricing_rules` | `idx_pricing_rules_action` | btree | action | — |
| `pricing_rules` | `idx_pricing_rules_effective` | btree | effective_from, effective_until | — |
| `pricing_rules` | `idx_pricing_rules_region_action` | btree | action, region_id, is_active | — |
| `pricing_rules` | `pricing_rules_pkey` | btree | id | ✓ |
| `profiles` | `idx_profiles_account_status` | btree | account_status | — |
| `profiles` | `idx_profiles_created_at_desc` | btree | created_at | — |
| `profiles` | `idx_profiles_id_role` | btree | id, role | — |
| `profiles` | `idx_profiles_is_verified` | btree | is_verified | — |
| `profiles` | `idx_profiles_kyc_status` | btree | kyc_status | — |
| `profiles` | `idx_profiles_rera` | btree | rera_registration_number | — |
| `profiles` | `idx_profiles_role` | btree | role | — |
| `profiles` | `idx_profiles_type_verified` | btree | user_type, is_verified | — |
| `profiles` | `idx_profiles_user_type` | btree | user_type | — |
| `profiles` | `profiles_email_key` | btree | email | ✓ |
| `profiles` | `profiles_pkey` | btree | id | ✓ |
| `profiles` | `profiles_username_key` | btree | username | ✓ |
| `projects` | `idx_projects_builder` | btree | builder_id | — |
| `projects` | `idx_projects_city` | btree | status, city | — |
| `projects` | `idx_projects_city_new` | btree | city_id | — |
| `projects` | `idx_projects_district` | btree | district_id | — |
| `projects` | `idx_projects_geo_point` | gist | geo_point | — |
| `projects` | `idx_projects_locality` | btree | locality_id | — |
| `projects` | `idx_projects_state` | btree | state_id | — |
| `projects` | `projects_pkey` | btree | id | ✓ |
| `projects` | `projects_slug_key` | btree | slug | ✓ |
| `promotional_campaigns` | `idx_campaigns_active` | btree | valid_until, is_active | — |
| `promotional_campaigns` | `idx_campaigns_regions` | gin | region_ids | — |
| `promotional_campaigns` | `idx_campaigns_type` | btree | campaign_type | — |
| `promotional_campaigns` | `promotional_campaigns_pkey` | btree | id | ✓ |
| `properties` | `idx_properties_active_published` | btree | status, is_active | — |
| `properties` | `idx_properties_agency_id` | btree | agency_id | — |
| `properties` | `idx_properties_agent_id` | btree | agent_id | — |
| `properties` | `idx_properties_area` | btree | built_up_area | — |
| `properties` | `idx_properties_bedrooms` | btree | bedrooms | — |
| `properties` | `idx_properties_boost_active` | btree | boost_active | — |
| `properties` | `idx_properties_builder` | btree | builder_id | — |
| `properties` | `idx_properties_city_active_created` | btree | created_at, city_id | — |
| `properties` | `idx_properties_city_locality` | btree | city, locality | — |
| `properties` | `idx_properties_city_new` | btree | city_id | — |
| `properties` | `idx_properties_city_price_filter` | btree | price, city, status, is_active | — |
| `properties` | `idx_properties_city_price_status` | btree | price, status, city_id | — |
| `properties` | `idx_properties_city_status_active` | btree | city, status, is_active | — |
| `properties` | `idx_properties_created_at` | btree | created_at | — |
| `properties` | `idx_properties_district` | btree | district_id | — |
| `properties` | `idx_properties_featured` | btree | is_featured | — |
| `properties` | `idx_properties_featured_smart` | btree | status, is_active, is_featured, created_at, featured_until | — |
| `properties` | `idx_properties_freshness` | btree | data_freshness_score | — |
| `properties` | `idx_properties_geo_point` | gist | geo_point | — |
| `properties` | `idx_properties_geo_quality` | btree | geo_quality_score | — |
| `properties` | `idx_properties_khata` | btree | khata_type | — |
| `properties` | `idx_properties_last_verified` | btree | last_verified_at | — |
| `properties` | `idx_properties_last_viewed_by` | btree | last_viewed_by | — |
| `properties` | `idx_properties_listing_type` | btree | listing_type | — |
| `properties` | `idx_properties_locality` | btree | locality_id | — |
| `properties` | `idx_properties_locality_status` | btree | status, locality_id | — |
| `properties` | `idx_properties_location_accuracy` | btree | location_accuracy_level | — |
| `properties` | `idx_properties_moderation_state` | btree | moderation_state | — |
| `properties` | `idx_properties_pid` | btree | pid | — |
| `properties` | `idx_properties_pincode_fk` | btree | pincode_fk | — |
| `properties` | `idx_properties_price` | btree | price | — |
| `properties` | `idx_properties_price_status_active` | btree | price, status, is_active | — |
| `properties` | `idx_properties_project` | btree | project_id | — |
| `properties` | `idx_properties_property_type` | btree | property_type | — |
| `properties` | `idx_properties_search` | btree | property_type, price, city, bedrooms, status | — |
| `properties` | `idx_properties_search_composite` | btree | property_type, price, status, city_id | — |
| `properties` | `idx_properties_state_new` | btree | state_id | — |
| `properties` | `idx_properties_status` | btree | status | — |
| `properties` | `idx_properties_status_created_at` | btree | status, created_at | — |
| `properties` | `idx_properties_updated_at` | btree | updated_at | — |
| `properties` | `idx_properties_user_id` | btree | user_id | — |
| `properties` | `idx_properties_user_status` | btree | user_id, status, created_at | — |
| `properties` | `idx_properties_visibility` | btree | visibility_status | — |
| `properties` | `properties_pid_key` | btree | pid | ✓ |
| `properties` | `properties_pkey` | btree | id | ✓ |
| `properties` | `properties_property_code_key` | btree | property_code | ✓ |
| `properties` | `properties_slug_key` | btree | slug | ✓ |
| `property_amenities` | `idx_property_amenities_category` | btree | amenity_category | — |
| `property_amenities` | `idx_property_amenities_property` | btree | property_id | — |
| `property_amenities` | `idx_property_amenities_property_id` | btree | property_id | — |
| `property_amenities` | `property_amenities_pkey` | btree | id | ✓ |
| `property_amenities` | `property_amenities_property_id_amenity_name_key` | btree | property_id, amenity_name | ✓ |
| `property_assignments` | `idx_assignments_admin_active` | btree | admin_id | — |
| `property_assignments` | `idx_assignments_due` | btree | due_at | — |
| `property_assignments` | `property_assignments_pkey` | btree | id | ✓ |
| `property_assignments` | `property_assignments_property_id_key` | btree | property_id | ✓ |
| `property_comparisons` | `idx_property_comparisons_user` | btree | user_id | — |
| `property_comparisons` | `property_comparisons_pkey` | btree | id | ✓ |
| `property_documents` | `idx_property_documents_property_id` | btree | property_id | — |
| `property_documents` | `idx_property_documents_uploaded_by` | btree | uploaded_by | — |
| `property_documents` | `idx_property_documents_verified_by` | btree | verified_by | — |
| `property_documents` | `property_documents_pkey` | btree | id | ✓ |
| `property_images` | `idx_property_images_primary` | btree | property_id | — |
| `property_images` | `idx_property_images_property` | btree | property_id | — |
| `property_images` | `idx_property_images_property_id` | btree | property_id | — |
| `property_images` | `idx_property_images_uploaded_by` | btree | uploaded_by | — |
| `property_images` | `property_images_pkey` | btree | id | ✓ |
| `property_images` | `property_images_property_id_image_url_key` | btree | property_id, image_url | ✓ |
| `property_intelligence_scores` | `idx_property_intel_demand` | btree | demand_score | — |
| `property_intelligence_scores` | `idx_property_intel_hot` | btree | is_hot_property | — |
| `property_intelligence_scores` | `idx_property_intel_overall` | btree | overall_score | — |
| `property_intelligence_scores` | `idx_property_intel_property` | btree | property_id | — |
| `property_intelligence_scores` | `idx_property_intel_trend` | btree | price_trend | — |
| `property_intelligence_scores` | `idx_property_intel_value` | btree | value_score | — |
| `property_intelligence_scores` | `property_intelligence_scores_pkey` | btree | id | ✓ |
| `property_intelligence_scores` | `property_intelligence_scores_property_id_key` | btree | property_id | ✓ |
| `property_leads` | `idx_property_leads_assigned` | btree | assigned_to | — |
| `property_leads` | `idx_property_leads_lead_user_id` | btree | lead_user_id | — |
| `property_leads` | `idx_property_leads_property` | btree | property_id | — |
| `property_leads` | `idx_property_leads_status` | btree | status, priority | — |
| `property_leads` | `property_leads_pkey` | btree | id | ✓ |
| `property_price_history` | `idx_property_price_history_changed_by` | btree | changed_by | — |
| `property_price_history` | `idx_property_price_history_property` | btree | property_id | — |
| `property_price_history` | `property_price_history_pkey` | btree | id | ✓ |
| `property_ranking_criteria` | `idx_ranking_deal_quality` | btree | deal_quality, deal_score | — |
| `property_ranking_criteria` | `idx_ranking_investment` | btree | investment_rank | — |
| `property_ranking_criteria` | `idx_ranking_locality` | btree | overall_rank_in_locality | — |
| `property_ranking_criteria` | `idx_ranking_property` | btree | property_id | — |
| `property_ranking_criteria` | `idx_ranking_value_percentile` | btree | value_percentile | — |
| `property_ranking_criteria` | `property_ranking_criteria_pkey` | btree | id | ✓ |
| `property_ranking_criteria` | `property_ranking_criteria_property_id_key` | btree | property_id | ✓ |
| `property_reports` | `idx_property_reports_property` | btree | property_id | — |
| `property_reports` | `idx_property_reports_reported_by` | btree | reported_by | — |
| `property_reports` | `idx_property_reports_reviewed_by` | btree | reviewed_by | — |
| `property_reports` | `idx_property_reports_status` | btree | status | — |
| `property_reports` | `property_reports_pkey` | btree | id | ✓ |
| `property_shares` | `idx_property_shares_property` | btree | property_id | — |
| `property_shares` | `idx_property_shares_shared_by` | btree | shared_by | — |
| `property_shares` | `property_shares_pkey` | btree | id | ✓ |
| `property_valuations` | `idx_property_valuations_validated_by` | btree | validated_by | — |
| `property_valuations` | `idx_valuations_confidence` | btree | confidence_score | — |
| `property_valuations` | `idx_valuations_date` | btree | valuation_date | — |
| `property_valuations` | `idx_valuations_method` | btree | valuation_method | — |
| `property_valuations` | `idx_valuations_property` | btree | property_id, valuation_date | — |
| `property_valuations` | `property_valuations_pkey` | btree | id | ✓ |
| `property_verifications` | `idx_property_verifications_property` | btree | property_id | — |
| `property_verifications` | `idx_property_verifications_status` | btree | verification_type, status | — |
| `property_verifications` | `idx_property_verifications_verified_by` | btree | verified_by | — |
| `property_verifications` | `property_verifications_pkey` | btree | id | ✓ |
| `property_views` | `idx_property_views_analytics` | btree | property_id, viewed_at | — |
| `property_views` | `idx_property_views_daily` | btree | property_id, viewed_at | — |
| `property_views` | `idx_property_views_date` | btree | viewed_at | — |
| `property_views` | `idx_property_views_property` | btree | property_id | — |
| `property_views` | `idx_property_views_property_session` | btree | property_id, session_id | — |
| `property_views` | `idx_property_views_user_id_not_null` | btree | user_id | — |
| `property_views` | `property_views_pkey` | btree | id | ✓ |
| `property_views` | `unique_property_session` | btree | property_id, session_id | ✓ |
| `property_visits` | `idx_property_visits_accompanied_by` | btree | accompanied_by | — |
| `property_visits` | `idx_property_visits_property` | btree | property_id, visit_date | — |
| `property_visits` | `idx_property_visits_visitor` | btree | visitor_id | — |
| `property_visits` | `property_visits_pkey` | btree | id | ✓ |
| `referrals` | `idx_referrals_code` | btree | referral_code | — |
| `referrals` | `idx_referrals_referred_id` | btree | referred_id | — |
| `referrals` | `idx_referrals_referrer` | btree | referrer_id | — |
| `referrals` | `referrals_pkey` | btree | id | ✓ |
| `referrals` | `referrals_referral_code_key` | btree | referral_code | ✓ |
| `refund_request` | `refund_request_pkey` | btree | id | ✓ |
| `refund_request` | `refund_request_transaction_idx` | btree | transaction_id | — |
| `regions` | `idx_regions_code` | btree | code | — |
| `regions` | `idx_regions_parent` | btree | parent_region_id | — |
| `regions` | `idx_regions_type` | btree | type | — |
| `regions` | `regions_code_key` | btree | code | ✓ |
| `regions` | `regions_pkey` | btree | id | ✓ |
| `registration_consent_log` | `registration_consent_log_pkey` | btree | id | ✓ |
| `role_permissions` | `role_permissions_pkey` | btree | role_id, permission_id | ✓ |
| `role_platform_access` | `idx_rpa_role_key_active` | btree | role_key, is_active | — |
| `role_platform_access` | `role_platform_access_pkey` | btree | id | ✓ |
| `role_platform_access` | `role_platform_access_role_key_platform_key` | btree | role_key, platform | ✓ |
| `roles` | `roles_name_key` | btree | name | ✓ |
| `roles` | `roles_pkey` | btree | id | ✓ |
| `roles` | `roles_slug_key` | btree | slug | ✓ |
| `saved_listings` | `saved_listings_pkey` | btree | id | ✓ |
| `saved_listings` | `saved_listings_profile_idx` | btree | profile_id | — |
| `saved_listings` | `saved_listings_property_idx` | btree | property_id | — |
| `saved_listings` | `saved_listings_unique` | btree | profile_id, property_id | ✓ |
| `saved_searches` | `idx_saved_searches_user` | btree | user_id, is_active | — |
| `saved_searches` | `saved_searches_pkey` | btree | id | ✓ |
| `search_history` | `idx_search_history_user` | btree | user_id | — |
| `search_history` | `search_history_pkey` | btree | id | ✓ |
| `security_flags` | `idx_security_flags_admin_email` | btree | admin_email | — |
| `security_flags` | `idx_security_flags_created_at` | btree | created_at | — |
| `security_flags` | `idx_security_flags_flagged_by` | btree | flagged_by | — |
| `security_flags` | `idx_security_flags_resolved_by` | btree | resolved_by | — |
| `security_flags` | `idx_security_flags_status` | btree | status | — |
| `security_flags` | `security_flags_pkey` | btree | id | ✓ |
| `spatial_ref_sys` | `spatial_ref_sys_pkey` | btree | srid | ✓ |
| `states` | `idx_states_active` | btree | is_active | — |
| `states` | `idx_states_lgd` | btree | lgd_code | — |
| `states` | `idx_states_name` | btree | name | — |
| `states` | `states_iso_code_key` | btree | iso_code | ✓ |
| `states` | `states_lgd_code_key` | btree | lgd_code | ✓ |
| `states` | `states_pkey` | btree | id | ✓ |
| `sub_districts` | `idx_sub_districts_district` | btree | district_id | — |
| `sub_districts` | `idx_sub_districts_name` | btree | district_id, name | — |
| `sub_districts` | `idx_sub_districts_name_trgm` | gin | name | — |
| `sub_districts` | `sub_districts_lgd_code_key` | btree | lgd_code | ✓ |
| `sub_districts` | `sub_districts_pkey` | btree | id | ✓ |
| `subscription_enrollments` | `idx_subscription_enrollments_purchase_transaction_id` | btree | purchase_transaction_id | — |
| `subscription_enrollments` | `idx_subscriptions_expires` | btree | expires_at | — |
| `subscription_enrollments` | `idx_subscriptions_plan` | btree | plan_id | — |
| `subscription_enrollments` | `idx_subscriptions_user` | btree | user_id, status | — |
| `subscription_enrollments` | `subscription_enrollments_pkey` | btree | id | ✓ |
| `subscription_plans` | `idx_subscription_plans_active` | btree | is_active, display_order | — |
| `subscription_plans` | `idx_subscription_plans_code` | btree | plan_code | — |
| `subscription_plans` | `idx_subscription_plans_region_id` | btree | region_id | — |
| `subscription_plans` | `idx_subscription_plans_user_type` | btree | user_type | — |
| `subscription_plans` | `subscription_plans_pkey` | btree | id | ✓ |
| `subscription_plans` | `subscription_plans_plan_code_key` | btree | plan_code | ✓ |
| `support_tickets` | `idx_support_tickets_assigned_to` | btree | assigned_to | — |
| `support_tickets` | `idx_support_tickets_created_at` | btree | created_at | — |
| `support_tickets` | `idx_support_tickets_created_by` | btree | created_by | — |
| `support_tickets` | `idx_support_tickets_priority` | btree | priority | — |
| `support_tickets` | `idx_support_tickets_status` | btree | status | — |
| `support_tickets` | `support_tickets_pkey` | btree | id | ✓ |
| `support_tickets` | `support_tickets_ticket_ref_key` | btree | ticket_ref | ✓ |
| `system_health_metrics` | `idx_health_metrics_name` | btree | metric_name, recorded_at | — |
| `system_health_metrics` | `system_health_metrics_pkey` | btree | id | ✓ |
| `system_settings` | `system_settings_key_key` | btree | key | ✓ |
| `system_settings` | `system_settings_pkey` | btree | id | ✓ |
| `team_broadcasts` | `idx_broadcasts_created` | btree | created_at | — |
| `team_broadcasts` | `idx_broadcasts_priority` | btree | priority, created_at | — |
| `team_broadcasts` | `team_broadcasts_pkey` | btree | id | ✓ |
| `team_messages` | `idx_team_messages_from_team` | btree | from_team, created_at | — |
| `team_messages` | `idx_team_messages_status` | btree | status | — |
| `team_messages` | `idx_team_messages_to_status` | btree | to_team, status | — |
| `team_messages` | `idx_team_messages_to_team` | btree | to_team, created_at | — |
| `team_messages` | `team_messages_pkey` | btree | id | ✓ |
| `team_registry` | `idx_team_registry_status` | btree | status | — |
| `team_registry` | `team_registry_pkey` | btree | id | ✓ |
| `team_registry` | `team_registry_team_id_key` | btree | team_id | ✓ |
| `transactions` | `idx_transactions_approved_by` | btree | approved_by | — |
| `transactions` | `idx_transactions_builder_id` | btree | builder_id | — |
| `transactions` | `idx_transactions_coupon_id` | btree | coupon_id | — |
| `transactions` | `idx_transactions_created_at` | btree | created_at | — |
| `transactions` | `idx_transactions_gateway` | btree | gateway_transaction_id | — |
| `transactions` | `idx_transactions_initiated_by` | btree | initiated_by | — |
| `transactions` | `idx_transactions_invoice` | btree | invoice_number | — |
| `transactions` | `idx_transactions_lead_id` | btree | lead_id | — |
| `transactions` | `idx_transactions_pricing_rule_id` | btree | pricing_rule_id | — |
| `transactions` | `idx_transactions_project_id` | btree | project_id | — |
| `transactions` | `idx_transactions_region` | btree | region_id, created_at | — |
| `transactions` | `idx_transactions_status` | btree | status, created_at | — |
| `transactions` | `idx_transactions_type` | btree | type, created_at | — |
| `transactions` | `idx_transactions_user` | btree | user_id, created_at | — |
| `transactions` | `idx_transactions_user_id` | btree | user_id | — |
| `transactions` | `idx_transactions_user_region` | btree | user_id, region_id, created_at | — |
| `transactions` | `idx_transactions_user_status` | btree | user_id, status, created_at | — |
| `transactions` | `idx_transactions_user_status_created` | btree | user_id, status, created_at | — |
| `transactions` | `transactions_pkey` | btree | id | ✓ |
| `undervalued_properties` | `idx_undervalued_expires_at` | btree | expires_at | — |
| `undervalued_properties` | `idx_undervalued_opportunity` | btree | investment_opportunity_score | — |
| `undervalued_properties` | `idx_undervalued_percentage` | btree | undervaluation_percentage | — |
| `undervalued_properties` | `idx_undervalued_properties_verified_by` | btree | verified_by | — |
| `undervalued_properties` | `idx_undervalued_property` | btree | property_id | — |
| `undervalued_properties` | `idx_undervalued_rating` | btree | deal_rating | — |
| `undervalued_properties` | `undervalued_properties_pkey` | btree | id | ✓ |
| `user_favorites` | `idx_user_favorites_property` | btree | property_id | — |
| `user_favorites` | `idx_user_favorites_property_user` | btree | user_id, property_id | — |
| `user_favorites` | `idx_user_favorites_user` | btree | user_id | — |
| `user_favorites` | `user_favorites_pkey` | btree | id | ✓ |
| `user_favorites` | `user_favorites_user_id_property_id_key` | btree | user_id, property_id | ✓ |
| `user_ratings` | `idx_user_ratings_property` | btree | rated_property_id | — |
| `user_ratings` | `idx_user_ratings_rated_user` | btree | rated_user_id | — |
| `user_ratings` | `user_ratings_pkey` | btree | id | ✓ |
| `user_ratings` | `user_ratings_rating_user_id_rated_user_id_rated_property_id_key` | btree | rated_user_id, rated_property_id, rating_user_id | ✓ |
| `user_regional_preferences` | `idx_user_prefs_active_regions` | gin | active_regions | — |
| `user_regional_preferences` | `idx_user_prefs_region` | btree | primary_region_id | — |
| `user_regional_preferences` | `user_regional_preferences_pkey` | btree | user_id | ✓ |
| `verification_documents` | `idx_verification_documents_document_type` | btree | document_type | — |
| `verification_documents` | `idx_verification_documents_kyc_id` | btree | kyc_id | — |
| `verification_documents` | `idx_verification_documents_moderated_by` | btree | moderated_by | — |
| `verification_documents` | `idx_verification_documents_status` | btree | status | — |
| `verification_documents` | `idx_verification_documents_user_id` | btree | user_id | — |
| `verification_documents` | `verification_documents_pkey` | btree | id | ✓ |
| `verification_gps_tracking` | `idx_verification_gps_tracking_location_context` | btree | location_context | — |
| `verification_gps_tracking` | `idx_verification_gps_tracking_session_id` | btree | session_id | — |
| `verification_gps_tracking` | `idx_verification_gps_tracking_timestamp` | btree | timestamp | — |
| `verification_gps_tracking` | `idx_verification_gps_tracking_user_id` | btree | user_id | — |
| `verification_gps_tracking` | `verification_gps_tracking_pkey` | btree | id | ✓ |
| `verification_kyc` | `idx_verification_kyc_status` | btree | status | — |
| `verification_kyc` | `idx_verification_kyc_user_id` | btree | user_id | — |
| `verification_kyc` | `idx_verification_kyc_verified_at` | btree | verified_at | — |
| `verification_kyc` | `idx_verification_kyc_verified_by` | btree | verified_by | — |
| `verification_kyc` | `verification_kyc_pkey` | btree | id | ✓ |
| `waitlist_entries` | `idx_waitlist_entries_tool_slug` | btree | tool_slug, created_at | — |
| `waitlist_entries` | `waitlist_entries_email_tool_unique` | btree | email, tool_slug | ✓ |
| `waitlist_entries` | `waitlist_entries_pkey` | btree | id | ✓ |
| `wallets` | `idx_wallets_balance` | btree | balance | — |
| `wallets` | `idx_wallets_last_transaction_region_id` | btree | last_transaction_region_id | — |
| `wallets` | `idx_wallets_user_id` | btree | user_id | — |
| `wallets` | `wallets_pkey` | btree | id | ✓ |
| `wallets` | `wallets_user_id_key` | btree | user_id | ✓ |

## Performance Recommendations

### ⚠️ Potential Duplicate Indexes

**Table: `admin_audit_logs`, Columns: admin_id**
- `idx_admin_audit_logs_admin_id` (btree)
- `idx_audit_admin_id` (btree)

**Table: `admin_audit_logs`, Columns: created_at**
- `idx_admin_audit_logs_created_at` (btree)
- `idx_audit_created_at` (btree)

**Table: `coupons`, Columns: code**
- `coupons_code_key` (btree, unique)
- `idx_coupons_code` (btree)

**Table: `districts`, Columns: lgd_code**
- `districts_lgd_code_key` (btree, unique)
- `idx_districts_lgd` (btree)

**Table: `location_canonical_map`, Columns: raw_name**
- `idx_location_canonical_raw` (btree)
- `idx_location_canonical_raw_trgm` (gin)

**Table: `mdm_aliases`, Columns: alias_value**
- `idx_mdm_aliases_value` (btree)
- `idx_mdm_aliases_value_trgm` (gin)

**Table: `permissions`, Columns: id**
- `permissions_id_key` (btree, unique)
- `permissions_pkey` (btree, unique)

**Table: `properties`, Columns: pid**
- `idx_properties_pid` (btree)
- `properties_pid_key` (btree, unique)

**Table: `property_amenities`, Columns: property_id**
- `idx_property_amenities_property` (btree)
- `idx_property_amenities_property_id` (btree)

**Table: `property_images`, Columns: property_id**
- `idx_property_images_primary` (btree)
- `idx_property_images_property` (btree)
- `idx_property_images_property_id` (btree)

**Table: `property_intelligence_scores`, Columns: property_id**
- `idx_property_intel_property` (btree)
- `property_intelligence_scores_property_id_key` (btree, unique)

**Table: `property_ranking_criteria`, Columns: property_id**
- `idx_ranking_property` (btree)
- `property_ranking_criteria_property_id_key` (btree, unique)

**Table: `property_views`, Columns: property_id, viewed_at**
- `idx_property_views_analytics` (btree)
- `idx_property_views_daily` (btree)

**Table: `property_views`, Columns: property_id, session_id**
- `idx_property_views_property_session` (btree)
- `unique_property_session` (btree, unique)

**Table: `referrals`, Columns: referral_code**
- `idx_referrals_code` (btree)
- `referrals_referral_code_key` (btree, unique)

**Table: `regions`, Columns: code**
- `idx_regions_code` (btree)
- `regions_code_key` (btree, unique)

**Table: `states`, Columns: lgd_code**
- `idx_states_lgd` (btree)
- `states_lgd_code_key` (btree, unique)

**Table: `subscription_plans`, Columns: plan_code**
- `idx_subscription_plans_code` (btree)
- `subscription_plans_plan_code_key` (btree, unique)

**Table: `transactions`, Columns: user_id, status, created_at**
- `idx_transactions_user_status` (btree)
- `idx_transactions_user_status_created` (btree)

**Table: `user_favorites`, Columns: user_id, property_id**
- `idx_user_favorites_property_user` (btree)
- `user_favorites_user_id_property_id_key` (btree, unique)

**Table: `wallets`, Columns: user_id**
- `idx_wallets_user_id` (btree)
- `wallets_user_id_key` (btree, unique)

