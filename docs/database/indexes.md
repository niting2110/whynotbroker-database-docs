# Index Performance Report

Generated: 2026-01-16T07:28:03.204Z
Total Indexes: 369

## All Indexes

| Table | Index | Type | Columns | Unique |
|-------|-------|------|---------|--------|
| `admin_audit_logs` | `admin_audit_logs_pkey` | btree | id | ✓ |
| `admin_audit_logs` | `idx_admin_audit_logs_action` | btree | action | — |
| `admin_audit_logs` | `idx_admin_audit_logs_admin_created` | btree | admin_id, created_at | — |
| `admin_audit_logs` | `idx_admin_audit_logs_admin_id` | btree | admin_id | — |
| `admin_audit_logs` | `idx_admin_audit_logs_created_at` | btree | created_at | — |
| `admin_audit_logs` | `idx_audit_admin_id` | btree | admin_id | — |
| `admin_audit_logs` | `idx_audit_created_at` | btree | created_at | — |
| `admin_chat` | `admin_chat_pkey` | btree | id | ✓ |
| `admin_leaves` | `admin_leaves_pkey` | btree | id | ✓ |
| `admin_messages` | `admin_messages_pkey` | btree | id | ✓ |
| `admin_notices` | `admin_notices_pkey` | btree | id | ✓ |
| `admin_regions` | `admin_regions_admin_id_region_id_key` | btree | admin_id, region_id | ✓ |
| `admin_regions` | `admin_regions_pkey` | btree | id | ✓ |
| `admin_regions` | `idx_admin_regions_admin` | btree | admin_id | — |
| `admin_regions` | `idx_admin_regions_region` | btree | region_id | — |
| `admin_roles` | `admin_roles_pkey` | btree | admin_id, role_id | ✓ |
| `admin_users` | `admin_users_pkey` | btree | id | ✓ |
| `admins` | `admins_email_key` | btree | email | ✓ |
| `admins` | `admins_pkey` | btree | id | ✓ |
| `admins` | `admins_user_id_key` | btree | user_id | ✓ |
| `appointments` | `appointments_pkey` | btree | id | ✓ |
| `appointments` | `idx_appointments_date_status` | btree | appointment_date, status | — |
| `appointments` | `idx_appointments_property` | btree | property_id | — |
| `blog_posts` | `blog_posts_pid_key` | btree | pid | ✓ |
| `blog_posts` | `blog_posts_pkey` | btree | id | ✓ |
| `blog_posts` | `blog_posts_slug_key` | btree | slug | ✓ |
| `builders` | `builders_pkey` | btree | id | ✓ |
| `builders` | `idx_builders_dedup_group` | btree | dedup_group_id | — |
| `builders` | `idx_builders_name` | btree | name | — |
| `builders` | `idx_builders_normalized` | btree | normalized_name | — |
| `builders` | `idx_builders_verified` | btree | is_verified | — |
| `campaign_participants` | `campaign_participants_campaign_id_user_id_key` | btree | campaign_id, user_id | ✓ |
| `campaign_participants` | `campaign_participants_pkey` | btree | id | ✓ |
| `campaign_participants` | `idx_campaign_participants_campaign` | btree | campaign_id | — |
| `campaign_participants` | `idx_campaign_participants_completed` | btree | is_completed | — |
| `campaign_participants` | `idx_campaign_participants_user` | btree | user_id | — |
| `cities` | `cities_pkey` | btree | id | ✓ |
| `cities` | `idx_cities_district` | btree | district_id | — |
| `cities` | `idx_cities_geo` | gist | geo_point | — |
| `cities` | `idx_cities_metro` | btree | is_metro | — |
| `cities` | `idx_cities_name_trgm` | gin | name | — |
| `cities` | `idx_cities_normalized_name` | btree | normalized_name | — |
| `cities` | `idx_cities_state` | btree | state_id | — |
| `cities` | `idx_cities_unique_name_state` | btree | normalized_name, state_id | ✓ |
| `coupon_usage` | `coupon_usage_coupon_id_user_id_transaction_id_key` | btree | coupon_id, user_id, transaction_id | ✓ |
| `coupon_usage` | `coupon_usage_pkey` | btree | id | ✓ |
| `coupon_usage` | `idx_coupon_usage_coupon` | btree | coupon_id | — |
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
| `hot_properties` | `hot_properties_pkey` | btree | id | ✓ |
| `hot_properties` | `idx_hot_properties_active` | btree | heat_score, is_currently_hot | — |
| `hot_properties` | `idx_hot_properties_property` | btree | property_id | — |
| `hot_properties` | `idx_hot_properties_score` | btree | heat_score | — |
| `hot_properties` | `idx_hot_properties_trend` | btree | heat_trend | — |
| `leave_balances` | `leave_balances_admin_id_leave_type_id_year_key` | btree | admin_id, leave_type_id, year | ✓ |
| `leave_balances` | `leave_balances_pkey` | btree | id | ✓ |
| `leave_types` | `leave_types_pkey` | btree | id | ✓ |
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
| `messages` | `idx_messages_property` | btree | property_id | — |
| `messages` | `idx_messages_sender_receiver` | btree | sender_id, receiver_id | — |
| `messages` | `messages_pkey` | btree | id | ✓ |
| `moderation_history` | `moderation_history_pkey` | btree | id | ✓ |
| `notification_preferences` | `notification_preferences_pkey` | btree | user_id | ✓ |
| `notifications` | `idx_notifications_user_unread` | btree | user_id, is_read | — |
| `notifications` | `notifications_pkey` | btree | id | ✓ |
| `overtime_records` | `overtime_records_pkey` | btree | id | ✓ |
| `permissions` | `permission_unique` | btree | domain, action, scope | ✓ |
| `permissions` | `permissions_id_key` | btree | id | ✓ |
| `permissions` | `permissions_name_key` | btree | name | ✓ |
| `permissions` | `permissions_pkey` | btree | id | ✓ |
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
| `profiles` | `idx_profiles_is_verified` | btree | is_verified | — |
| `profiles` | `idx_profiles_rera` | btree | rera_registration_number | — |
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
| `properties` | `idx_properties_listing_type` | btree | listing_type | — |
| `properties` | `idx_properties_locality` | btree | locality_id | — |
| `properties` | `idx_properties_locality_status` | btree | status, locality_id | — |
| `properties` | `idx_properties_location_accuracy` | btree | location_accuracy_level | — |
| `properties` | `idx_properties_pid` | btree | pid | — |
| `properties` | `idx_properties_pincode_fk` | btree | pincode_fk | — |
| `properties` | `idx_properties_price` | btree | price | — |
| `properties` | `idx_properties_price_status_active` | btree | price, status, is_active | — |
| `properties` | `idx_properties_project` | btree | project_id | — |
| `properties` | `idx_properties_property_type` | btree | property_type | — |
| `properties` | `idx_properties_search` | btree | property_type, price, city, bedrooms, status | — |
| `properties` | `idx_properties_state_new` | btree | state_id | — |
| `properties` | `idx_properties_status` | btree | status | — |
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
| `property_repeat_views` | `idx_property_repeat_actions` | btree | property_id | — |
| `property_repeat_views` | `idx_property_repeat_number` | btree | property_id, user_id, view_number | — |
| `property_repeat_views` | `idx_property_repeat_property` | btree | property_id | — |
| `property_repeat_views` | `idx_property_repeat_user` | btree | user_id | — |
| `property_repeat_views` | `property_repeat_views_pkey` | btree | id | ✓ |
| `property_reports` | `idx_property_reports_property` | btree | property_id | — |
| `property_reports` | `idx_property_reports_status` | btree | status | — |
| `property_reports` | `property_reports_pkey` | btree | id | ✓ |
| `property_shares` | `idx_property_shares_property` | btree | property_id | — |
| `property_shares` | `property_shares_pkey` | btree | id | ✓ |
| `property_valuations` | `idx_valuations_confidence` | btree | confidence_score | — |
| `property_valuations` | `idx_valuations_date` | btree | valuation_date | — |
| `property_valuations` | `idx_valuations_method` | btree | valuation_method | — |
| `property_valuations` | `idx_valuations_property` | btree | property_id, valuation_date | — |
| `property_valuations` | `property_valuations_pkey` | btree | id | ✓ |
| `property_verifications` | `idx_property_verifications_property` | btree | property_id | — |
| `property_verifications` | `idx_property_verifications_status` | btree | verification_type, status | — |
| `property_verifications` | `property_verifications_pkey` | btree | id | ✓ |
| `property_views` | `idx_property_views_date` | btree | viewed_at | — |
| `property_views` | `idx_property_views_property` | btree | property_id | — |
| `property_views` | `idx_property_views_property_session` | btree | property_id, session_id | — |
| `property_views` | `property_views_pkey` | btree | id | ✓ |
| `property_views` | `unique_property_session` | btree | property_id, session_id | ✓ |
| `property_visits` | `idx_property_visits_property` | btree | property_id, visit_date | — |
| `property_visits` | `idx_property_visits_visitor` | btree | visitor_id | — |
| `property_visits` | `property_visits_pkey` | btree | id | ✓ |
| `referrals` | `idx_referrals_code` | btree | referral_code | — |
| `referrals` | `idx_referrals_referrer` | btree | referrer_id | — |
| `referrals` | `referrals_pkey` | btree | id | ✓ |
| `referrals` | `referrals_referral_code_key` | btree | referral_code | ✓ |
| `regions` | `idx_regions_code` | btree | code | — |
| `regions` | `idx_regions_parent` | btree | parent_region_id | — |
| `regions` | `idx_regions_type` | btree | type | — |
| `regions` | `regions_code_key` | btree | code | ✓ |
| `regions` | `regions_pkey` | btree | id | ✓ |
| `repeat_customer_analytics` | `idx_repeat_churn` | btree | churn_risk_score | — |
| `repeat_customer_analytics` | `idx_repeat_customer_user` | btree | user_id | — |
| `repeat_customer_analytics` | `idx_repeat_frequency` | btree | visit_frequency_trend | — |
| `repeat_customer_analytics` | `idx_repeat_stage` | btree | conversion_funnel_stage | — |
| `repeat_customer_analytics` | `idx_repeat_visits` | btree | visits_last_30_days | — |
| `repeat_customer_analytics` | `repeat_customer_analytics_pkey` | btree | id | ✓ |
| `repeat_customer_analytics` | `repeat_customer_analytics_user_id_key` | btree | user_id | ✓ |
| `role_permissions` | `role_permissions_pkey` | btree | role_id, permission_id | ✓ |
| `roles` | `roles_name_key` | btree | name | ✓ |
| `roles` | `roles_pkey` | btree | id | ✓ |
| `saved_searches` | `idx_saved_searches_user` | btree | user_id, is_active | — |
| `saved_searches` | `saved_searches_pkey` | btree | id | ✓ |
| `search_history` | `idx_search_history_user` | btree | user_id | — |
| `search_history` | `search_history_pkey` | btree | id | ✓ |
| `security_flags` | `idx_security_flags_admin_email` | btree | admin_email | — |
| `security_flags` | `idx_security_flags_created_at` | btree | created_at | — |
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
| `subscription_enrollments` | `idx_subscriptions_expires` | btree | expires_at | — |
| `subscription_enrollments` | `idx_subscriptions_plan` | btree | plan_id | — |
| `subscription_enrollments` | `idx_subscriptions_user` | btree | user_id, status | — |
| `subscription_enrollments` | `subscription_enrollments_pkey` | btree | id | ✓ |
| `subscription_plans` | `idx_subscription_plans_active` | btree | is_active, display_order | — |
| `subscription_plans` | `idx_subscription_plans_code` | btree | plan_code | — |
| `subscription_plans` | `idx_subscription_plans_user_type` | btree | user_type | — |
| `subscription_plans` | `subscription_plans_pkey` | btree | id | ✓ |
| `subscription_plans` | `subscription_plans_plan_code_key` | btree | plan_code | ✓ |
| `system_health_metrics` | `idx_health_metrics_name` | btree | metric_name, recorded_at | — |
| `system_health_metrics` | `system_health_metrics_pkey` | btree | id | ✓ |
| `transactions` | `idx_transactions_created_at` | btree | created_at | — |
| `transactions` | `idx_transactions_gateway` | btree | gateway_transaction_id | — |
| `transactions` | `idx_transactions_invoice` | btree | invoice_number | — |
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
| `undervalued_properties` | `idx_undervalued_property` | btree | property_id | — |
| `undervalued_properties` | `idx_undervalued_rating` | btree | deal_rating | — |
| `undervalued_properties` | `undervalued_properties_pkey` | btree | id | ✓ |
| `user_engagement_metrics` | `idx_user_engagement_intent` | btree | buying_intent, selling_intent | — |
| `user_engagement_metrics` | `idx_user_engagement_last_active` | btree | last_activity_at | — |
| `user_engagement_metrics` | `idx_user_engagement_score` | btree | engagement_score, intent_score | — |
| `user_engagement_metrics` | `idx_user_engagement_segment` | btree | user_segment | — |
| `user_engagement_metrics` | `idx_user_engagement_user` | btree | user_id | — |
| `user_engagement_metrics` | `user_engagement_metrics_pkey` | btree | id | ✓ |
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
| `wallets` | `idx_wallets_balance` | btree | balance | — |
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

**Table: `property_repeat_views`, Columns: property_id**
- `idx_property_repeat_actions` (btree)
- `idx_property_repeat_property` (btree)

**Table: `property_views`, Columns: property_id, session_id**
- `idx_property_views_property_session` (btree)
- `unique_property_session` (btree, unique)

**Table: `referrals`, Columns: referral_code**
- `idx_referrals_code` (btree)
- `referrals_referral_code_key` (btree, unique)

**Table: `regions`, Columns: code**
- `idx_regions_code` (btree)
- `regions_code_key` (btree, unique)

**Table: `repeat_customer_analytics`, Columns: user_id**
- `idx_repeat_customer_user` (btree)
- `repeat_customer_analytics_user_id_key` (btree, unique)

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

