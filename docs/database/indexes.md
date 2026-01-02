# Index Performance Report

Generated: 2026-01-02T07:02:38.845Z
Total Indexes: 252

## All Indexes

| Table | Index | Type | Columns | Unique | Definition |
|-------|-------|------|---------|--------|------------|
| `admin_audit_logs` | `admin_audit_logs_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX admin_audit_logs_pkey ON public.admin_audit_logs USING btree (id)` |
| `admin_audit_logs` | `idx_audit_admin_id` | btree | admin_id | — | `CREATE INDEX idx_audit_admin_id ON public.admin_audit_logs USING btree (admin_id)` |
| `admin_audit_logs` | `idx_audit_created_at` | btree | created_at | — | `CREATE INDEX idx_audit_created_at ON public.admin_audit_logs USING btree (created_at DESC)` |
| `admin_chat` | `admin_chat_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX admin_chat_pkey ON public.admin_chat USING btree (id)` |
| `admin_leaves` | `admin_leaves_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX admin_leaves_pkey ON public.admin_leaves USING btree (id)` |
| `admin_messages` | `admin_messages_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX admin_messages_pkey ON public.admin_messages USING btree (id)` |
| `admin_notices` | `admin_notices_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX admin_notices_pkey ON public.admin_notices USING btree (id)` |
| `admin_roles` | `admin_roles_pkey` | btree | admin_id, role_id | ✓ | `CREATE UNIQUE INDEX admin_roles_pkey ON public.admin_roles USING btree (admin_id, role_id)` |
| `admin_users` | `admin_users_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX admin_users_pkey ON public.admin_users USING btree (id)` |
| `admins` | `admins_email_key` | btree | email | ✓ | `CREATE UNIQUE INDEX admins_email_key ON public.admins USING btree (email)` |
| `admins` | `admins_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX admins_pkey ON public.admins USING btree (id)` |
| `admins` | `admins_user_id_key` | btree | user_id | ✓ | `CREATE UNIQUE INDEX admins_user_id_key ON public.admins USING btree (user_id)` |
| `appointments` | `appointments_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX appointments_pkey ON public.appointments USING btree (id)` |
| `appointments` | `idx_appointments_date_status` | btree | appointment_date, status | — | `CREATE INDEX idx_appointments_date_status ON public.appointments USING btree (appointment_date, status)` |
| `appointments` | `idx_appointments_property` | btree | property_id | — | `CREATE INDEX idx_appointments_property ON public.appointments USING btree (property_id)` |
| `blog_posts` | `blog_posts_pid_key` | btree | pid | ✓ | `CREATE UNIQUE INDEX blog_posts_pid_key ON public.blog_posts USING btree (pid)` |
| `blog_posts` | `blog_posts_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX blog_posts_pkey ON public.blog_posts USING btree (id)` |
| `blog_posts` | `blog_posts_slug_key` | btree | slug | ✓ | `CREATE UNIQUE INDEX blog_posts_slug_key ON public.blog_posts USING btree (slug)` |
| `builders` | `builders_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX builders_pkey ON public.builders USING btree (id)` |
| `builders` | `idx_builders_name` | btree | name | — | `CREATE INDEX idx_builders_name ON public.builders USING btree (name)` |
| `builders` | `idx_builders_verified` | btree | is_verified | — | `CREATE INDEX idx_builders_verified ON public.builders USING btree (is_verified)` |
| `campaign_participants` | `campaign_participants_campaign_id_user_id_key` | btree | campaign_id, user_id | ✓ | `CREATE UNIQUE INDEX campaign_participants_campaign_id_user_id_key ON public.campaign_participants USING btree (campaign_id, user_id)` |
| `campaign_participants` | `campaign_participants_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX campaign_participants_pkey ON public.campaign_participants USING btree (id)` |
| `campaign_participants` | `idx_campaign_participants_campaign` | btree | campaign_id | — | `CREATE INDEX idx_campaign_participants_campaign ON public.campaign_participants USING btree (campaign_id)` |
| `campaign_participants` | `idx_campaign_participants_completed` | btree | is_completed | — | `CREATE INDEX idx_campaign_participants_completed ON public.campaign_participants USING btree (is_completed)` |
| `campaign_participants` | `idx_campaign_participants_user` | btree | user_id | — | `CREATE INDEX idx_campaign_participants_user ON public.campaign_participants USING btree (user_id)` |
| `coupon_usage` | `coupon_usage_coupon_id_user_id_transaction_id_key` | btree | coupon_id, user_id, transaction_id | ✓ | `CREATE UNIQUE INDEX coupon_usage_coupon_id_user_id_transaction_id_key ON public.coupon_usage USING btree (coupon_id, user_id, transaction_id)` |
| `coupon_usage` | `coupon_usage_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX coupon_usage_pkey ON public.coupon_usage USING btree (id)` |
| `coupon_usage` | `idx_coupon_usage_coupon` | btree | coupon_id | — | `CREATE INDEX idx_coupon_usage_coupon ON public.coupon_usage USING btree (coupon_id)` |
| `coupon_usage` | `idx_coupon_usage_transaction` | btree | transaction_id | — | `CREATE INDEX idx_coupon_usage_transaction ON public.coupon_usage USING btree (transaction_id)` |
| `coupon_usage` | `idx_coupon_usage_user` | btree | user_id | — | `CREATE INDEX idx_coupon_usage_user ON public.coupon_usage USING btree (user_id)` |
| `coupons` | `coupons_code_key` | btree | code | ✓ | `CREATE UNIQUE INDEX coupons_code_key ON public.coupons USING btree (code)` |
| `coupons` | `coupons_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX coupons_pkey ON public.coupons USING btree (id)` |
| `coupons` | `idx_coupons_campaign` | btree | campaign_id | — | `CREATE INDEX idx_coupons_campaign ON public.coupons USING btree (campaign_id)` |
| `coupons` | `idx_coupons_code` | btree | code | — | `CREATE INDEX idx_coupons_code ON public.coupons USING btree (code) WHERE (is_active = true)` |
| `coupons` | `idx_coupons_regions` | gin | region_ids | — | `CREATE INDEX idx_coupons_regions ON public.coupons USING gin (region_ids)` |
| `coupons` | `idx_coupons_valid` | btree | valid_from, valid_until | — | `CREATE INDEX idx_coupons_valid ON public.coupons USING btree (valid_from, valid_until) WHERE (is_active = true)` |
| `credit_packages` | `credit_packages_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX credit_packages_pkey ON public.credit_packages USING btree (id)` |
| `credit_packages` | `idx_credit_packages_active` | btree | display_order, is_active | — | `CREATE INDEX idx_credit_packages_active ON public.credit_packages USING btree (is_active, display_order)` |
| `credit_packages` | `idx_credit_packages_region` | btree | region_id | — | `CREATE INDEX idx_credit_packages_region ON public.credit_packages USING btree (region_id) WHERE (is_active = true)` |
| `hot_properties` | `hot_properties_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX hot_properties_pkey ON public.hot_properties USING btree (id)` |
| `hot_properties` | `idx_hot_properties_active` | btree | heat_score, is_currently_hot | — | `CREATE INDEX idx_hot_properties_active ON public.hot_properties USING btree (is_currently_hot, heat_score DESC)` |
| `hot_properties` | `idx_hot_properties_property` | btree | property_id | — | `CREATE INDEX idx_hot_properties_property ON public.hot_properties USING btree (property_id)` |
| `hot_properties` | `idx_hot_properties_score` | btree | heat_score | — | `CREATE INDEX idx_hot_properties_score ON public.hot_properties USING btree (heat_score DESC) WHERE (is_currently_hot = true)` |
| `hot_properties` | `idx_hot_properties_trend` | btree | heat_trend | — | `CREATE INDEX idx_hot_properties_trend ON public.hot_properties USING btree (heat_trend)` |
| `loan_calculations` | `idx_loan_calculations_user` | btree | user_id | — | `CREATE INDEX idx_loan_calculations_user ON public.loan_calculations USING btree (user_id)` |
| `loan_calculations` | `loan_calculations_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX loan_calculations_pkey ON public.loan_calculations USING btree (id)` |
| `localities` | `idx_localities_city` | btree | city, state | — | `CREATE INDEX idx_localities_city ON public.localities USING btree (city, state)` |
| `localities` | `idx_localities_pincode` | btree | pincode | — | `CREATE INDEX idx_localities_pincode ON public.localities USING btree (pincode)` |
| `localities` | `idx_localities_region` | btree | region_id | — | `CREATE INDEX idx_localities_region ON public.localities USING btree (region_id)` |
| `localities` | `localities_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX localities_pkey ON public.localities USING btree (id)` |
| `locality_amenities` | `idx_locality_amenities_distance` | btree | locality_id, distance_km | — | `CREATE INDEX idx_locality_amenities_distance ON public.locality_amenities USING btree (locality_id, distance_km)` |
| `locality_amenities` | `idx_locality_amenities_locality` | btree | locality_id, category | — | `CREATE INDEX idx_locality_amenities_locality ON public.locality_amenities USING btree (locality_id, category)` |
| `locality_amenities` | `locality_amenities_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX locality_amenities_pkey ON public.locality_amenities USING btree (id)` |
| `market_trends` | `idx_market_trends_locality` | btree | locality_id, month_year | — | `CREATE INDEX idx_market_trends_locality ON public.market_trends USING btree (locality_id, month_year)` |
| `market_trends` | `idx_market_trends_region` | btree | region_id, month_year | — | `CREATE INDEX idx_market_trends_region ON public.market_trends USING btree (region_id, month_year)` |
| `market_trends` | `market_trends_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX market_trends_pkey ON public.market_trends USING btree (id)` |
| `market_trends` | `market_trends_region_id_locality_id_property_type_bhk_type__key` | btree | region_id, locality_id, property_type, bhk_type, month_year | ✓ | `CREATE UNIQUE INDEX market_trends_region_id_locality_id_property_type_bhk_type__key ON public.market_trends USING btree (region_id, locality_id, property_type, bhk_type, month_year)` |
| `messages` | `idx_messages_property` | btree | property_id | — | `CREATE INDEX idx_messages_property ON public.messages USING btree (property_id)` |
| `messages` | `idx_messages_sender_receiver` | btree | sender_id, receiver_id | — | `CREATE INDEX idx_messages_sender_receiver ON public.messages USING btree (sender_id, receiver_id)` |
| `messages` | `messages_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX messages_pkey ON public.messages USING btree (id)` |
| `moderation_history` | `moderation_history_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX moderation_history_pkey ON public.moderation_history USING btree (id)` |
| `notification_preferences` | `notification_preferences_pkey` | btree | user_id | ✓ | `CREATE UNIQUE INDEX notification_preferences_pkey ON public.notification_preferences USING btree (user_id)` |
| `notifications` | `idx_notifications_user_unread` | btree | user_id, is_read | — | `CREATE INDEX idx_notifications_user_unread ON public.notifications USING btree (user_id, is_read) WHERE (is_read = false)` |
| `notifications` | `notifications_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX notifications_pkey ON public.notifications USING btree (id)` |
| `permissions` | `permission_unique` | btree | domain, action, scope | ✓ | `CREATE UNIQUE INDEX permission_unique ON public.permissions USING btree (domain, action, scope)` |
| `permissions` | `permissions_name_key` | btree | name | ✓ | `CREATE UNIQUE INDEX permissions_name_key ON public.permissions USING btree (name)` |
| `permissions` | `permissions_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX permissions_pkey ON public.permissions USING btree (id)` |
| `pricing_rules` | `idx_pricing_rules_action` | btree | action | — | `CREATE INDEX idx_pricing_rules_action ON public.pricing_rules USING btree (action) WHERE (is_active = true)` |
| `pricing_rules` | `idx_pricing_rules_effective` | btree | effective_from, effective_until | — | `CREATE INDEX idx_pricing_rules_effective ON public.pricing_rules USING btree (effective_from, effective_until)` |
| `pricing_rules` | `idx_pricing_rules_region_action` | btree | action, region_id, is_active | — | `CREATE INDEX idx_pricing_rules_region_action ON public.pricing_rules USING btree (region_id, action, is_active)` |
| `pricing_rules` | `pricing_rules_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX pricing_rules_pkey ON public.pricing_rules USING btree (id)` |
| `profiles` | `profiles_email_key` | btree | email | ✓ | `CREATE UNIQUE INDEX profiles_email_key ON public.profiles USING btree (email)` |
| `profiles` | `profiles_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id)` |
| `profiles` | `profiles_username_key` | btree | username | ✓ | `CREATE UNIQUE INDEX profiles_username_key ON public.profiles USING btree (username)` |
| `projects` | `idx_projects_builder` | btree | builder_id | — | `CREATE INDEX idx_projects_builder ON public.projects USING btree (builder_id)` |
| `projects` | `idx_projects_city` | btree | status, city | — | `CREATE INDEX idx_projects_city ON public.projects USING btree (city, status)` |
| `projects` | `idx_projects_locality` | btree | locality_id | — | `CREATE INDEX idx_projects_locality ON public.projects USING btree (locality_id)` |
| `projects` | `projects_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX projects_pkey ON public.projects USING btree (id)` |
| `projects` | `projects_slug_key` | btree | slug | ✓ | `CREATE UNIQUE INDEX projects_slug_key ON public.projects USING btree (slug)` |
| `promotional_campaigns` | `idx_campaigns_active` | btree | valid_until, is_active | — | `CREATE INDEX idx_campaigns_active ON public.promotional_campaigns USING btree (is_active, valid_until)` |
| `promotional_campaigns` | `idx_campaigns_regions` | gin | region_ids | — | `CREATE INDEX idx_campaigns_regions ON public.promotional_campaigns USING gin (region_ids)` |
| `promotional_campaigns` | `idx_campaigns_type` | btree | campaign_type | — | `CREATE INDEX idx_campaigns_type ON public.promotional_campaigns USING btree (campaign_type) WHERE (is_active = true)` |
| `promotional_campaigns` | `promotional_campaigns_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX promotional_campaigns_pkey ON public.promotional_campaigns USING btree (id)` |
| `properties` | `idx_properties_active_published` | btree | status, is_active | — | `CREATE INDEX idx_properties_active_published ON public.properties USING btree (is_active, status) WHERE ((is_active = true) AND (status = 'published'::text))` |
| `properties` | `idx_properties_agency_id` | btree | agency_id | — | `CREATE INDEX idx_properties_agency_id ON public.properties USING btree (agency_id)` |
| `properties` | `idx_properties_agent_id` | btree | agent_id | — | `CREATE INDEX idx_properties_agent_id ON public.properties USING btree (agent_id)` |
| `properties` | `idx_properties_area` | btree | built_up_area | — | `CREATE INDEX idx_properties_area ON public.properties USING btree (built_up_area)` |
| `properties` | `idx_properties_bedrooms` | btree | bedrooms | — | `CREATE INDEX idx_properties_bedrooms ON public.properties USING btree (bedrooms)` |
| `properties` | `idx_properties_builder` | btree | builder_id | — | `CREATE INDEX idx_properties_builder ON public.properties USING btree (builder_id)` |
| `properties` | `idx_properties_city_locality` | btree | city, locality | — | `CREATE INDEX idx_properties_city_locality ON public.properties USING btree (city, locality)` |
| `properties` | `idx_properties_city_price_filter` | btree | price, city, status, is_active | — | `CREATE INDEX idx_properties_city_price_filter ON public.properties USING btree (city, price, status, is_active)` |
| `properties` | `idx_properties_city_status_active` | btree | city, status, is_active | — | `CREATE INDEX idx_properties_city_status_active ON public.properties USING btree (city, status, is_active)` |
| `properties` | `idx_properties_created_at` | btree | created_at | — | `CREATE INDEX idx_properties_created_at ON public.properties USING btree (created_at DESC)` |
| `properties` | `idx_properties_featured` | btree | is_featured | — | `CREATE INDEX idx_properties_featured ON public.properties USING btree (is_featured) WHERE (is_featured = true)` |
| `properties` | `idx_properties_featured_smart` | btree | status, is_active, is_featured, created_at, featured_until | — | `CREATE INDEX idx_properties_featured_smart ON public.properties USING btree (is_featured, featured_until DESC NULLS LAST, created_at DESC, status, is_active)` |
| `properties` | `idx_properties_listing_type` | btree | listing_type | — | `CREATE INDEX idx_properties_listing_type ON public.properties USING btree (listing_type)` |
| `properties` | `idx_properties_locality` | btree | locality_id | — | `CREATE INDEX idx_properties_locality ON public.properties USING btree (locality_id)` |
| `properties` | `idx_properties_pid` | btree | pid | — | `CREATE INDEX idx_properties_pid ON public.properties USING btree (pid)` |
| `properties` | `idx_properties_price` | btree | price | — | `CREATE INDEX idx_properties_price ON public.properties USING btree (price)` |
| `properties` | `idx_properties_price_status_active` | btree | price, status, is_active | — | `CREATE INDEX idx_properties_price_status_active ON public.properties USING btree (price, status, is_active)` |
| `properties` | `idx_properties_project` | btree | project_id | — | `CREATE INDEX idx_properties_project ON public.properties USING btree (project_id)` |
| `properties` | `idx_properties_property_type` | btree | property_type | — | `CREATE INDEX idx_properties_property_type ON public.properties USING btree (property_type)` |
| `properties` | `idx_properties_search` | btree | property_type, price, city, bedrooms, status | — | `CREATE INDEX idx_properties_search ON public.properties USING btree (city, price, bedrooms, property_type, status) WHERE ((status = 'published'::text) AND (is_active = true))` |
| `properties` | `idx_properties_status` | btree | status | — | `CREATE INDEX idx_properties_status ON public.properties USING btree (status)` |
| `properties` | `idx_properties_user_id` | btree | user_id | — | `CREATE INDEX idx_properties_user_id ON public.properties USING btree (user_id)` |
| `properties` | `idx_properties_user_status` | btree | user_id, status, created_at | — | `CREATE INDEX idx_properties_user_status ON public.properties USING btree (user_id, status, created_at DESC)` |
| `properties` | `properties_pid_key` | btree | pid | ✓ | `CREATE UNIQUE INDEX properties_pid_key ON public.properties USING btree (pid)` |
| `properties` | `properties_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX properties_pkey ON public.properties USING btree (id)` |
| `properties` | `properties_property_code_key` | btree | property_code | ✓ | `CREATE UNIQUE INDEX properties_property_code_key ON public.properties USING btree (property_code)` |
| `properties` | `properties_slug_key` | btree | slug | ✓ | `CREATE UNIQUE INDEX properties_slug_key ON public.properties USING btree (slug)` |
| `property_amenities` | `idx_property_amenities_category` | btree | amenity_category | — | `CREATE INDEX idx_property_amenities_category ON public.property_amenities USING btree (amenity_category)` |
| `property_amenities` | `idx_property_amenities_property` | btree | property_id | — | `CREATE INDEX idx_property_amenities_property ON public.property_amenities USING btree (property_id)` |
| `property_amenities` | `idx_property_amenities_property_id` | btree | property_id | — | `CREATE INDEX idx_property_amenities_property_id ON public.property_amenities USING btree (property_id)` |
| `property_amenities` | `property_amenities_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_amenities_pkey ON public.property_amenities USING btree (id)` |
| `property_amenities` | `property_amenities_property_id_amenity_name_key` | btree | property_id, amenity_name | ✓ | `CREATE UNIQUE INDEX property_amenities_property_id_amenity_name_key ON public.property_amenities USING btree (property_id, amenity_name)` |
| `property_assignments` | `idx_assignments_admin_active` | btree | admin_id | — | `CREATE INDEX idx_assignments_admin_active ON public.property_assignments USING btree (admin_id) WHERE (is_active = true)` |
| `property_assignments` | `idx_assignments_due` | btree | due_at | — | `CREATE INDEX idx_assignments_due ON public.property_assignments USING btree (due_at)` |
| `property_assignments` | `property_assignments_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_assignments_pkey ON public.property_assignments USING btree (id)` |
| `property_assignments` | `property_assignments_property_id_key` | btree | property_id | ✓ | `CREATE UNIQUE INDEX property_assignments_property_id_key ON public.property_assignments USING btree (property_id)` |
| `property_comparisons` | `idx_property_comparisons_user` | btree | user_id | — | `CREATE INDEX idx_property_comparisons_user ON public.property_comparisons USING btree (user_id)` |
| `property_comparisons` | `property_comparisons_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_comparisons_pkey ON public.property_comparisons USING btree (id)` |
| `property_documents` | `idx_property_documents_property_id` | btree | property_id | — | `CREATE INDEX idx_property_documents_property_id ON public.property_documents USING btree (property_id)` |
| `property_documents` | `idx_property_documents_uploaded_by` | btree | uploaded_by | — | `CREATE INDEX idx_property_documents_uploaded_by ON public.property_documents USING btree (uploaded_by)` |
| `property_documents` | `idx_property_documents_verified_by` | btree | verified_by | — | `CREATE INDEX idx_property_documents_verified_by ON public.property_documents USING btree (verified_by)` |
| `property_documents` | `property_documents_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_documents_pkey ON public.property_documents USING btree (id)` |
| `property_images` | `idx_property_images_primary` | btree | property_id | — | `CREATE INDEX idx_property_images_primary ON public.property_images USING btree (property_id) WHERE (is_primary = true)` |
| `property_images` | `idx_property_images_property` | btree | property_id | — | `CREATE INDEX idx_property_images_property ON public.property_images USING btree (property_id)` |
| `property_images` | `idx_property_images_property_id` | btree | property_id | — | `CREATE INDEX idx_property_images_property_id ON public.property_images USING btree (property_id)` |
| `property_images` | `idx_property_images_uploaded_by` | btree | uploaded_by | — | `CREATE INDEX idx_property_images_uploaded_by ON public.property_images USING btree (uploaded_by)` |
| `property_images` | `property_images_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_images_pkey ON public.property_images USING btree (id)` |
| `property_images` | `property_images_property_id_image_url_key` | btree | property_id, image_url | ✓ | `CREATE UNIQUE INDEX property_images_property_id_image_url_key ON public.property_images USING btree (property_id, image_url)` |
| `property_intelligence_scores` | `idx_property_intel_demand` | btree | demand_score | — | `CREATE INDEX idx_property_intel_demand ON public.property_intelligence_scores USING btree (demand_score DESC)` |
| `property_intelligence_scores` | `idx_property_intel_hot` | btree | is_hot_property | — | `CREATE INDEX idx_property_intel_hot ON public.property_intelligence_scores USING btree (is_hot_property) WHERE (is_hot_property = true)` |
| `property_intelligence_scores` | `idx_property_intel_overall` | btree | overall_score | — | `CREATE INDEX idx_property_intel_overall ON public.property_intelligence_scores USING btree (overall_score DESC)` |
| `property_intelligence_scores` | `idx_property_intel_property` | btree | property_id | — | `CREATE INDEX idx_property_intel_property ON public.property_intelligence_scores USING btree (property_id)` |
| `property_intelligence_scores` | `idx_property_intel_trend` | btree | price_trend | — | `CREATE INDEX idx_property_intel_trend ON public.property_intelligence_scores USING btree (price_trend)` |
| `property_intelligence_scores` | `idx_property_intel_value` | btree | value_score | — | `CREATE INDEX idx_property_intel_value ON public.property_intelligence_scores USING btree (value_score DESC)` |
| `property_intelligence_scores` | `property_intelligence_scores_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_intelligence_scores_pkey ON public.property_intelligence_scores USING btree (id)` |
| `property_intelligence_scores` | `property_intelligence_scores_property_id_key` | btree | property_id | ✓ | `CREATE UNIQUE INDEX property_intelligence_scores_property_id_key ON public.property_intelligence_scores USING btree (property_id)` |
| `property_leads` | `idx_property_leads_assigned` | btree | assigned_to | — | `CREATE INDEX idx_property_leads_assigned ON public.property_leads USING btree (assigned_to)` |
| `property_leads` | `idx_property_leads_property` | btree | property_id | — | `CREATE INDEX idx_property_leads_property ON public.property_leads USING btree (property_id)` |
| `property_leads` | `idx_property_leads_status` | btree | status, priority | — | `CREATE INDEX idx_property_leads_status ON public.property_leads USING btree (status, priority)` |
| `property_leads` | `property_leads_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_leads_pkey ON public.property_leads USING btree (id)` |
| `property_price_history` | `idx_property_price_history_changed_by` | btree | changed_by | — | `CREATE INDEX idx_property_price_history_changed_by ON public.property_price_history USING btree (changed_by)` |
| `property_price_history` | `idx_property_price_history_property` | btree | property_id | — | `CREATE INDEX idx_property_price_history_property ON public.property_price_history USING btree (property_id)` |
| `property_price_history` | `property_price_history_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_price_history_pkey ON public.property_price_history USING btree (id)` |
| `property_ranking_criteria` | `idx_ranking_deal_quality` | btree | deal_quality, deal_score | — | `CREATE INDEX idx_ranking_deal_quality ON public.property_ranking_criteria USING btree (deal_quality, deal_score DESC)` |
| `property_ranking_criteria` | `idx_ranking_investment` | btree | investment_rank | — | `CREATE INDEX idx_ranking_investment ON public.property_ranking_criteria USING btree (investment_rank DESC)` |
| `property_ranking_criteria` | `idx_ranking_locality` | btree | overall_rank_in_locality | — | `CREATE INDEX idx_ranking_locality ON public.property_ranking_criteria USING btree (overall_rank_in_locality)` |
| `property_ranking_criteria` | `idx_ranking_property` | btree | property_id | — | `CREATE INDEX idx_ranking_property ON public.property_ranking_criteria USING btree (property_id)` |
| `property_ranking_criteria` | `idx_ranking_value_percentile` | btree | value_percentile | — | `CREATE INDEX idx_ranking_value_percentile ON public.property_ranking_criteria USING btree (value_percentile)` |
| `property_ranking_criteria` | `property_ranking_criteria_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_ranking_criteria_pkey ON public.property_ranking_criteria USING btree (id)` |
| `property_ranking_criteria` | `property_ranking_criteria_property_id_key` | btree | property_id | ✓ | `CREATE UNIQUE INDEX property_ranking_criteria_property_id_key ON public.property_ranking_criteria USING btree (property_id)` |
| `property_repeat_views` | `idx_property_repeat_actions` | btree | property_id | — | `CREATE INDEX idx_property_repeat_actions ON public.property_repeat_views USING btree (property_id) WHERE ((contact_revealed = true) OR (inquiry_sent = true))` |
| `property_repeat_views` | `idx_property_repeat_number` | btree | property_id, user_id, view_number | — | `CREATE INDEX idx_property_repeat_number ON public.property_repeat_views USING btree (property_id, user_id, view_number)` |
| `property_repeat_views` | `idx_property_repeat_property` | btree | property_id | — | `CREATE INDEX idx_property_repeat_property ON public.property_repeat_views USING btree (property_id)` |
| `property_repeat_views` | `idx_property_repeat_user` | btree | user_id | — | `CREATE INDEX idx_property_repeat_user ON public.property_repeat_views USING btree (user_id)` |
| `property_repeat_views` | `property_repeat_views_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_repeat_views_pkey ON public.property_repeat_views USING btree (id)` |
| `property_reports` | `idx_property_reports_property` | btree | property_id | — | `CREATE INDEX idx_property_reports_property ON public.property_reports USING btree (property_id)` |
| `property_reports` | `idx_property_reports_status` | btree | status | — | `CREATE INDEX idx_property_reports_status ON public.property_reports USING btree (status)` |
| `property_reports` | `property_reports_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_reports_pkey ON public.property_reports USING btree (id)` |
| `property_shares` | `idx_property_shares_property` | btree | property_id | — | `CREATE INDEX idx_property_shares_property ON public.property_shares USING btree (property_id)` |
| `property_shares` | `property_shares_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_shares_pkey ON public.property_shares USING btree (id)` |
| `property_valuations` | `idx_valuations_confidence` | btree | confidence_score | — | `CREATE INDEX idx_valuations_confidence ON public.property_valuations USING btree (confidence_score DESC)` |
| `property_valuations` | `idx_valuations_date` | btree | valuation_date | — | `CREATE INDEX idx_valuations_date ON public.property_valuations USING btree (valuation_date DESC)` |
| `property_valuations` | `idx_valuations_method` | btree | valuation_method | — | `CREATE INDEX idx_valuations_method ON public.property_valuations USING btree (valuation_method)` |
| `property_valuations` | `idx_valuations_property` | btree | property_id, valuation_date | — | `CREATE INDEX idx_valuations_property ON public.property_valuations USING btree (property_id, valuation_date DESC)` |
| `property_valuations` | `property_valuations_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_valuations_pkey ON public.property_valuations USING btree (id)` |
| `property_verifications` | `idx_property_verifications_property` | btree | property_id | — | `CREATE INDEX idx_property_verifications_property ON public.property_verifications USING btree (property_id)` |
| `property_verifications` | `idx_property_verifications_status` | btree | verification_type, status | — | `CREATE INDEX idx_property_verifications_status ON public.property_verifications USING btree (status, verification_type)` |
| `property_verifications` | `property_verifications_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_verifications_pkey ON public.property_verifications USING btree (id)` |
| `property_views` | `idx_property_views_date` | btree | viewed_at | — | `CREATE INDEX idx_property_views_date ON public.property_views USING btree (viewed_at DESC)` |
| `property_views` | `idx_property_views_property` | btree | property_id | — | `CREATE INDEX idx_property_views_property ON public.property_views USING btree (property_id)` |
| `property_views` | `idx_property_views_property_session` | btree | property_id, session_id | — | `CREATE INDEX idx_property_views_property_session ON public.property_views USING btree (property_id, session_id)` |
| `property_views` | `property_views_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_views_pkey ON public.property_views USING btree (id)` |
| `property_views` | `unique_property_session` | btree | property_id, session_id | ✓ | `CREATE UNIQUE INDEX unique_property_session ON public.property_views USING btree (property_id, session_id)` |
| `property_visits` | `idx_property_visits_property` | btree | property_id, visit_date | — | `CREATE INDEX idx_property_visits_property ON public.property_visits USING btree (property_id, visit_date)` |
| `property_visits` | `idx_property_visits_visitor` | btree | visitor_id | — | `CREATE INDEX idx_property_visits_visitor ON public.property_visits USING btree (visitor_id)` |
| `property_visits` | `property_visits_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_visits_pkey ON public.property_visits USING btree (id)` |
| `referrals` | `idx_referrals_code` | btree | referral_code | — | `CREATE INDEX idx_referrals_code ON public.referrals USING btree (referral_code)` |
| `referrals` | `idx_referrals_referrer` | btree | referrer_id | — | `CREATE INDEX idx_referrals_referrer ON public.referrals USING btree (referrer_id)` |
| `referrals` | `referrals_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX referrals_pkey ON public.referrals USING btree (id)` |
| `referrals` | `referrals_referral_code_key` | btree | referral_code | ✓ | `CREATE UNIQUE INDEX referrals_referral_code_key ON public.referrals USING btree (referral_code)` |
| `regions` | `idx_regions_code` | btree | code | — | `CREATE INDEX idx_regions_code ON public.regions USING btree (code)` |
| `regions` | `idx_regions_parent` | btree | parent_region_id | — | `CREATE INDEX idx_regions_parent ON public.regions USING btree (parent_region_id)` |
| `regions` | `idx_regions_type` | btree | type | — | `CREATE INDEX idx_regions_type ON public.regions USING btree (type)` |
| `regions` | `regions_code_key` | btree | code | ✓ | `CREATE UNIQUE INDEX regions_code_key ON public.regions USING btree (code)` |
| `regions` | `regions_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX regions_pkey ON public.regions USING btree (id)` |
| `repeat_customer_analytics` | `idx_repeat_churn` | btree | churn_risk_score | — | `CREATE INDEX idx_repeat_churn ON public.repeat_customer_analytics USING btree (churn_risk_score DESC)` |
| `repeat_customer_analytics` | `idx_repeat_customer_user` | btree | user_id | — | `CREATE INDEX idx_repeat_customer_user ON public.repeat_customer_analytics USING btree (user_id)` |
| `repeat_customer_analytics` | `idx_repeat_frequency` | btree | visit_frequency_trend | — | `CREATE INDEX idx_repeat_frequency ON public.repeat_customer_analytics USING btree (visit_frequency_trend)` |
| `repeat_customer_analytics` | `idx_repeat_stage` | btree | conversion_funnel_stage | — | `CREATE INDEX idx_repeat_stage ON public.repeat_customer_analytics USING btree (conversion_funnel_stage)` |
| `repeat_customer_analytics` | `idx_repeat_visits` | btree | visits_last_30_days | — | `CREATE INDEX idx_repeat_visits ON public.repeat_customer_analytics USING btree (visits_last_30_days DESC)` |
| `repeat_customer_analytics` | `repeat_customer_analytics_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX repeat_customer_analytics_pkey ON public.repeat_customer_analytics USING btree (id)` |
| `repeat_customer_analytics` | `repeat_customer_analytics_user_id_key` | btree | user_id | ✓ | `CREATE UNIQUE INDEX repeat_customer_analytics_user_id_key ON public.repeat_customer_analytics USING btree (user_id)` |
| `role_permissions` | `role_permissions_pkey` | btree | role_id, permission_id | ✓ | `CREATE UNIQUE INDEX role_permissions_pkey ON public.role_permissions USING btree (role_id, permission_id)` |
| `roles` | `roles_name_key` | btree | name | ✓ | `CREATE UNIQUE INDEX roles_name_key ON public.roles USING btree (name)` |
| `roles` | `roles_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX roles_pkey ON public.roles USING btree (id)` |
| `saved_searches` | `idx_saved_searches_user` | btree | user_id, is_active | — | `CREATE INDEX idx_saved_searches_user ON public.saved_searches USING btree (user_id, is_active)` |
| `saved_searches` | `saved_searches_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX saved_searches_pkey ON public.saved_searches USING btree (id)` |
| `search_history` | `idx_search_history_user` | btree | user_id | — | `CREATE INDEX idx_search_history_user ON public.search_history USING btree (user_id)` |
| `search_history` | `search_history_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX search_history_pkey ON public.search_history USING btree (id)` |
| `security_flags` | `idx_security_flags_admin_email` | btree | admin_email | — | `CREATE INDEX idx_security_flags_admin_email ON public.security_flags USING btree (admin_email)` |
| `security_flags` | `idx_security_flags_created_at` | btree | created_at | — | `CREATE INDEX idx_security_flags_created_at ON public.security_flags USING btree (created_at DESC)` |
| `security_flags` | `idx_security_flags_status` | btree | status | — | `CREATE INDEX idx_security_flags_status ON public.security_flags USING btree (status)` |
| `security_flags` | `security_flags_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX security_flags_pkey ON public.security_flags USING btree (id)` |
| `subscription_enrollments` | `idx_subscriptions_expires` | btree | expires_at | — | `CREATE INDEX idx_subscriptions_expires ON public.subscription_enrollments USING btree (expires_at) WHERE (status = 'active'::text)` |
| `subscription_enrollments` | `idx_subscriptions_plan` | btree | plan_id | — | `CREATE INDEX idx_subscriptions_plan ON public.subscription_enrollments USING btree (plan_id)` |
| `subscription_enrollments` | `idx_subscriptions_user` | btree | user_id, status | — | `CREATE INDEX idx_subscriptions_user ON public.subscription_enrollments USING btree (user_id, status)` |
| `subscription_enrollments` | `subscription_enrollments_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX subscription_enrollments_pkey ON public.subscription_enrollments USING btree (id)` |
| `subscription_plans` | `idx_subscription_plans_active` | btree | is_active, display_order | — | `CREATE INDEX idx_subscription_plans_active ON public.subscription_plans USING btree (is_active, display_order)` |
| `subscription_plans` | `idx_subscription_plans_code` | btree | plan_code | — | `CREATE INDEX idx_subscription_plans_code ON public.subscription_plans USING btree (plan_code)` |
| `subscription_plans` | `idx_subscription_plans_user_type` | btree | user_type | — | `CREATE INDEX idx_subscription_plans_user_type ON public.subscription_plans USING btree (user_type) WHERE (is_active = true)` |
| `subscription_plans` | `subscription_plans_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX subscription_plans_pkey ON public.subscription_plans USING btree (id)` |
| `subscription_plans` | `subscription_plans_plan_code_key` | btree | plan_code | ✓ | `CREATE UNIQUE INDEX subscription_plans_plan_code_key ON public.subscription_plans USING btree (plan_code)` |
| `transactions` | `idx_transactions_gateway` | btree | gateway_transaction_id | — | `CREATE INDEX idx_transactions_gateway ON public.transactions USING btree (gateway_transaction_id) WHERE (gateway_transaction_id IS NOT NULL)` |
| `transactions` | `idx_transactions_invoice` | btree | invoice_number | — | `CREATE INDEX idx_transactions_invoice ON public.transactions USING btree (invoice_number) WHERE (invoice_generated = true)` |
| `transactions` | `idx_transactions_region` | btree | region_id, created_at | — | `CREATE INDEX idx_transactions_region ON public.transactions USING btree (region_id, created_at DESC)` |
| `transactions` | `idx_transactions_status` | btree | status, created_at | — | `CREATE INDEX idx_transactions_status ON public.transactions USING btree (status, created_at DESC)` |
| `transactions` | `idx_transactions_type` | btree | type, created_at | — | `CREATE INDEX idx_transactions_type ON public.transactions USING btree (type, created_at DESC)` |
| `transactions` | `idx_transactions_user` | btree | user_id, created_at | — | `CREATE INDEX idx_transactions_user ON public.transactions USING btree (user_id, created_at DESC)` |
| `transactions` | `idx_transactions_user_region` | btree | user_id, region_id, created_at | — | `CREATE INDEX idx_transactions_user_region ON public.transactions USING btree (user_id, region_id, created_at DESC)` |
| `transactions` | `transactions_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX transactions_pkey ON public.transactions USING btree (id)` |
| `undervalued_properties` | `idx_undervalued_expires_at` | btree | expires_at | — | `CREATE INDEX idx_undervalued_expires_at ON public.undervalued_properties USING btree (expires_at)` |
| `undervalued_properties` | `idx_undervalued_opportunity` | btree | investment_opportunity_score | — | `CREATE INDEX idx_undervalued_opportunity ON public.undervalued_properties USING btree (investment_opportunity_score DESC)` |
| `undervalued_properties` | `idx_undervalued_percentage` | btree | undervaluation_percentage | — | `CREATE INDEX idx_undervalued_percentage ON public.undervalued_properties USING btree (undervaluation_percentage DESC)` |
| `undervalued_properties` | `idx_undervalued_property` | btree | property_id | — | `CREATE INDEX idx_undervalued_property ON public.undervalued_properties USING btree (property_id)` |
| `undervalued_properties` | `idx_undervalued_rating` | btree | deal_rating | — | `CREATE INDEX idx_undervalued_rating ON public.undervalued_properties USING btree (deal_rating)` |
| `undervalued_properties` | `undervalued_properties_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX undervalued_properties_pkey ON public.undervalued_properties USING btree (id)` |
| `user_engagement_metrics` | `idx_user_engagement_intent` | btree | buying_intent, selling_intent | — | `CREATE INDEX idx_user_engagement_intent ON public.user_engagement_metrics USING btree (buying_intent, selling_intent)` |
| `user_engagement_metrics` | `idx_user_engagement_last_active` | btree | last_activity_at | — | `CREATE INDEX idx_user_engagement_last_active ON public.user_engagement_metrics USING btree (last_activity_at DESC)` |
| `user_engagement_metrics` | `idx_user_engagement_score` | btree | engagement_score, intent_score | — | `CREATE INDEX idx_user_engagement_score ON public.user_engagement_metrics USING btree (engagement_score DESC, intent_score DESC)` |
| `user_engagement_metrics` | `idx_user_engagement_segment` | btree | user_segment | — | `CREATE INDEX idx_user_engagement_segment ON public.user_engagement_metrics USING btree (user_segment)` |
| `user_engagement_metrics` | `idx_user_engagement_user` | btree | user_id | — | `CREATE INDEX idx_user_engagement_user ON public.user_engagement_metrics USING btree (user_id)` |
| `user_engagement_metrics` | `user_engagement_metrics_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX user_engagement_metrics_pkey ON public.user_engagement_metrics USING btree (id)` |
| `user_favorites` | `idx_user_favorites_property` | btree | property_id | — | `CREATE INDEX idx_user_favorites_property ON public.user_favorites USING btree (property_id)` |
| `user_favorites` | `idx_user_favorites_property_user` | btree | user_id, property_id | — | `CREATE INDEX idx_user_favorites_property_user ON public.user_favorites USING btree (property_id, user_id)` |
| `user_favorites` | `idx_user_favorites_user` | btree | user_id | — | `CREATE INDEX idx_user_favorites_user ON public.user_favorites USING btree (user_id)` |
| `user_favorites` | `user_favorites_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX user_favorites_pkey ON public.user_favorites USING btree (id)` |
| `user_favorites` | `user_favorites_user_id_property_id_key` | btree | user_id, property_id | ✓ | `CREATE UNIQUE INDEX user_favorites_user_id_property_id_key ON public.user_favorites USING btree (user_id, property_id)` |
| `user_ratings` | `idx_user_ratings_property` | btree | rated_property_id | — | `CREATE INDEX idx_user_ratings_property ON public.user_ratings USING btree (rated_property_id)` |
| `user_ratings` | `idx_user_ratings_rated_user` | btree | rated_user_id | — | `CREATE INDEX idx_user_ratings_rated_user ON public.user_ratings USING btree (rated_user_id)` |
| `user_ratings` | `user_ratings_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX user_ratings_pkey ON public.user_ratings USING btree (id)` |
| `user_ratings` | `user_ratings_rating_user_id_rated_user_id_rated_property_id_key` | btree | rated_user_id, rated_property_id, rating_user_id | ✓ | `CREATE UNIQUE INDEX user_ratings_rating_user_id_rated_user_id_rated_property_id_key ON public.user_ratings USING btree (rating_user_id, rated_user_id, rated_property_id)` |
| `user_regional_preferences` | `idx_user_prefs_active_regions` | gin | active_regions | — | `CREATE INDEX idx_user_prefs_active_regions ON public.user_regional_preferences USING gin (active_regions)` |
| `user_regional_preferences` | `idx_user_prefs_region` | btree | primary_region_id | — | `CREATE INDEX idx_user_prefs_region ON public.user_regional_preferences USING btree (primary_region_id)` |
| `user_regional_preferences` | `user_regional_preferences_pkey` | btree | user_id | ✓ | `CREATE UNIQUE INDEX user_regional_preferences_pkey ON public.user_regional_preferences USING btree (user_id)` |
| `wallets` | `idx_wallets_balance` | btree | balance | — | `CREATE INDEX idx_wallets_balance ON public.wallets USING btree (balance) WHERE (balance > 0)` |
| `wallets` | `idx_wallets_user_id` | btree | user_id | — | `CREATE INDEX idx_wallets_user_id ON public.wallets USING btree (user_id)` |
| `wallets` | `wallets_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX wallets_pkey ON public.wallets USING btree (id)` |
| `wallets` | `wallets_user_id_key` | btree | user_id | ✓ | `CREATE UNIQUE INDEX wallets_user_id_key ON public.wallets USING btree (user_id)` |

## Performance Recommendations

### ⚠️ Potential Duplicate Indexes

**Table: `coupons`, Columns: code**
- `coupons_code_key` (btree, unique)
- `idx_coupons_code` (btree)

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

**Table: `subscription_plans`, Columns: plan_code**
- `idx_subscription_plans_code` (btree)
- `subscription_plans_plan_code_key` (btree, unique)

**Table: `user_favorites`, Columns: user_id, property_id**
- `idx_user_favorites_property_user` (btree)
- `user_favorites_user_id_property_id_key` (btree, unique)

**Table: `wallets`, Columns: user_id**
- `idx_wallets_user_id` (btree)
- `wallets_user_id_key` (btree, unique)

