# Database Relationships (ER Diagram - Text)

Total Relationships: 186
Generated: 2026-04-22T08:01:43.007Z

```
admin_audit_logs:
  └─→ admins (via: admin_audit_logs_admin_id_fkey)
      columns: admin_id
  └─→ regions (via: admin_audit_logs_region_id_fkey)
      columns: region_id

admin_chat:
  └─→ admins (via: admin_chat_admin_id_fkey)
      columns: admin_id

admin_leaves:
  └─→ admins (via: admin_leaves_admin_id_fkey)
      columns: admin_id
  └─→ admins (via: admin_leaves_approved_by_id_fkey)
      columns: approved_by_id
  └─→ admins (via: admin_leaves_backup_admin_id_fkey)
      columns: backup_admin_id
  └─→ leave_types (via: admin_leaves_leave_type_id_fkey)
      columns: leave_type_id

admin_messages:
  └─→ admins (via: admin_messages_receiver_id_fkey)
      columns: receiver_id
  └─→ admins (via: admin_messages_sender_id_fkey)
      columns: sender_id

admin_regions:
  └─→ admins (via: admin_regions_admin_id_fkey)
      columns: admin_id
  └─→ admins (via: admin_regions_assigned_by_fkey)
      columns: assigned_by
  └─→ regions (via: admin_regions_region_id_fkey)
      columns: region_id

admin_roles:
  └─→ admins (via: admin_roles_admin_id_fkey)
      columns: admin_id
  └─→ roles (via: admin_roles_role_id_fkey)
      columns: role_id

admin_users:
  └─→ profiles (via: admin_users_id_fkey)
      columns: id

admins:
  └─→ admins (via: admins_reporting_manager_id_fkey)
      columns: reporting_manager_id
  └─→ profiles (via: admins_user_id_fkey)
      columns: user_id

appointments:
  └─→ profiles (via: appointments_buyer_id_fkey)
      columns: buyer_id
  └─→ profiles (via: appointments_cancelled_by_fkey)
      columns: cancelled_by
  └─→ properties (via: appointments_property_id_fkey)
      columns: property_id
  └─→ profiles (via: appointments_seller_id_fkey)
      columns: seller_id

blog_posts:
  └─→ profiles (via: blog_posts_author_id_fkey)
      columns: author_id

broker_kyc_documents:
  └─→ broker_kyc_verifications (via: broker_kyc_documents_verification_id_fkey)
      columns: verification_id

campaign_participants:
  └─→ promotional_campaigns (via: campaign_participants_campaign_id_fkey)
      columns: campaign_id
  └─→ regions (via: campaign_participants_region_id_fkey)
      columns: region_id

cities:
  └─→ districts (via: cities_district_id_fkey)
      columns: district_id
  └─→ states (via: cities_state_id_fkey)
      columns: state_id

commission_events:
  └─→ admins (via: commission_events_created_by_fkey)
      columns: created_by
  └─→ lending_partners (via: commission_events_partner_id_fkey)
      columns: partner_id
  └─→ properties (via: commission_events_property_id_fkey)
      columns: property_id
  └─→ admins (via: commission_events_reviewed_by_fkey)
      columns: reviewed_by
  └─→ transactions (via: commission_events_transaction_id_fkey)
      columns: transaction_id
  └─→ profiles (via: commission_events_user_id_fkey)
      columns: user_id

coupon_usage:
  └─→ coupons (via: coupon_usage_coupon_id_fkey)
      columns: coupon_id
  └─→ regions (via: coupon_usage_region_id_fkey)
      columns: region_id

coupons:
  └─→ promotional_campaigns (via: coupons_campaign_id_fkey)
      columns: campaign_id

credit_packages:
  └─→ regions (via: credit_packages_region_id_fkey)
      columns: region_id

districts:
  └─→ states (via: districts_state_id_fkey)
      columns: state_id

enquiries:
  └─→ pg_posting (via: enquiries_pg_posting_fk)
      columns: pg_posting_id
  └─→ profiles (via: enquiries_seeker_fk)
      columns: seeker_profile_id
  └─→ profiles (via: enquiries_status_updated_by_fk)
      columns: status_updated_by

home_loan_consent_log:
  └─→ lending_partners (via: hlcl_partner_id_fk)
      columns: partner_id
  └─→ profiles (via: home_loan_consent_log_user_id_fkey)
      columns: user_id

hot_properties:
  └─→ properties (via: hot_properties_property_id_fkey)
      columns: property_id

leave_balances:
  └─→ admins (via: leave_balances_admin_id_fkey)
      columns: admin_id
  └─→ leave_types (via: leave_balances_leave_type_id_fkey)
      columns: leave_type_id

listing_boosts:
  └─→ properties (via: listing_boosts_listing_id_fkey)
      columns: listing_id
  └─→ profiles (via: listing_boosts_purchased_by_fkey)
      columns: purchased_by

loan_calculations:
  └─→ properties (via: loan_calculations_property_id_fkey)
      columns: property_id
  └─→ profiles (via: loan_calculations_user_id_fkey)
      columns: user_id

localities:
  └─→ cities (via: localities_city_id_fkey)
      columns: city_id
  └─→ districts (via: localities_district_id_fkey)
      columns: district_id
  └─→ regions (via: localities_region_id_fkey)
      columns: region_id
  └─→ states (via: localities_state_id_fkey)
      columns: state_id

locality_amenities:
  └─→ localities (via: locality_amenities_locality_id_fkey)
      columns: locality_id

location_canonical_map:
  └─→ cities (via: location_canonical_map_city_id_fkey)
      columns: city_id
  └─→ localities (via: location_canonical_map_locality_id_fkey)
      columns: locality_id

market_trends:
  └─→ localities (via: market_trends_locality_id_fkey)
      columns: locality_id
  └─→ regions (via: market_trends_region_id_fkey)
      columns: region_id

messages:
  └─→ property_leads (via: messages_lead_id_fkey)
      columns: lead_id
  └─→ messages (via: messages_parent_message_id_fkey)
      columns: parent_message_id
  └─→ properties (via: messages_property_id_fkey)
      columns: property_id
  └─→ profiles (via: messages_receiver_id_fkey)
      columns: receiver_id
  └─→ profiles (via: messages_sender_id_fkey)
      columns: sender_id

moderation_history:
  └─→ profiles (via: moderation_history_admin_id_fkey)
      columns: admin_id
  └─→ properties (via: moderation_history_property_id_fkey)
      columns: property_id

notification_preferences:
  └─→ profiles (via: notification_preferences_user_id_fkey)
      columns: user_id

notifications:
  └─→ profiles (via: notifications_user_id_fkey)
      columns: user_id

overtime_records:
  └─→ admins (via: overtime_records_admin_id_fkey)
      columns: admin_id
  └─→ admins (via: overtime_records_approved_by_fkey)
      columns: approved_by

pg_bed:
  └─→ pg_room (via: pg_bed_pg_room_id_fkey)
      columns: pg_room_id

pg_occupancy:
  └─→ pg_bed (via: pg_occupancy_pg_bed_id_fkey)
      columns: pg_bed_id
  └─→ pg_property (via: pg_occupancy_pg_property_id_fkey)
      columns: pg_property_id
  └─→ pg_tenant (via: pg_occupancy_pg_tenant_id_fkey)
      columns: pg_tenant_id

pg_occupancy_snapshot:
  └─→ pg_property (via: pg_occupancy_snapshot_pg_property_id_fkey)
      columns: pg_property_id

pg_owner_pnl:
  └─→ pg_property (via: pg_owner_pnl_pg_property_id_fkey)
      columns: pg_property_id

pg_payment_record:
  └─→ pg_property (via: pg_payment_record_pg_property_id_fkey)
      columns: pg_property_id
  └─→ pg_tenant (via: pg_payment_record_pg_tenant_id_fkey)
      columns: pg_tenant_id

pg_police_verification:
  └─→ pg_property (via: pg_police_verification_pg_property_id_fkey)
      columns: pg_property_id
  └─→ pg_tenant (via: pg_police_verification_pg_tenant_id_fkey)
      columns: pg_tenant_id

pg_posting:
  └─→ pg_property (via: pg_posting_pg_property_id_fkey)
      columns: pg_property_id

pg_posting_packs:
  └─→ profiles (via: pg_posting_packs_profile_id_fkey)
      columns: profile_id

pg_property:
  └─→ profiles (via: pg_property_owner_id_fkey)
      columns: owner_id

pg_receipt:
  └─→ pg_payment_record (via: pg_receipt_pg_payment_record_id_fkey)
      columns: pg_payment_record_id

pg_rent_agreement:
  └─→ pg_property (via: pg_rent_agreement_pg_property_id_fkey)
      columns: pg_property_id
  └─→ pg_tenant (via: pg_rent_agreement_pg_tenant_id_fkey)
      columns: pg_tenant_id

pg_room:
  └─→ pg_property (via: pg_room_pg_property_id_fkey)
      columns: pg_property_id

pg_seeker_preferences:
  └─→ profiles (via: pgsp_profile_fk)
      columns: profile_id

pg_tenant:
  └─→ pg_bed (via: pg_tenant_pg_bed_id_fkey)
      columns: pg_bed_id
  └─→ pg_property (via: pg_tenant_pg_property_id_fkey)
      columns: pg_property_id
  └─→ profiles (via: pg_tenant_user_id_fkey)
      columns: user_id

pg_vacancy_event:
  └─→ pg_bed (via: pg_vacancy_event_pg_bed_id_fkey)
      columns: pg_bed_id
  └─→ pg_property (via: pg_vacancy_event_pg_property_id_fkey)
      columns: pg_property_id
  └─→ pg_posting (via: pgve_created_pg_posting_id_fk)
      columns: created_pg_posting_id

pincodes:
  └─→ cities (via: pincodes_city_id_fkey)
      columns: city_id
  └─→ districts (via: pincodes_district_id_fkey)
      columns: district_id
  └─→ states (via: pincodes_state_id_fkey)
      columns: state_id

pricing_rules:
  └─→ regions (via: pricing_rules_region_id_fkey)
      columns: region_id

projects:
  └─→ builders (via: projects_builder_id_fkey)
      columns: builder_id
  └─→ cities (via: projects_city_id_fkey)
      columns: city_id
  └─→ districts (via: projects_district_id_fkey)
      columns: district_id
  └─→ localities (via: projects_locality_id_fkey)
      columns: locality_id
  └─→ states (via: projects_state_id_fkey)
      columns: state_id

properties:
  └─→ profiles (via: properties_agency_id_fkey)
      columns: agency_id
  └─→ profiles (via: properties_agent_id_fkey)
      columns: agent_id
  └─→ builders (via: properties_builder_id_fkey)
      columns: builder_id
  └─→ cities (via: properties_city_id_fkey)
      columns: city_id
  └─→ districts (via: properties_district_id_fkey)
      columns: district_id
  └─→ profiles (via: properties_last_viewed_by_fkey)
      columns: last_viewed_by
  └─→ localities (via: properties_locality_id_fkey)
      columns: locality_id
  └─→ pincodes (via: properties_pincode_fk_fkey)
      columns: pincode_fk
  └─→ projects (via: properties_project_id_fkey)
      columns: project_id
  └─→ states (via: properties_state_id_fkey)
      columns: state_id
  └─→ profiles (via: properties_user_id_fkey)
      columns: user_id

property_amenities:
  └─→ properties (via: property_amenities_property_id_fkey)
      columns: property_id

property_assignments:
  └─→ admin_users (via: property_assignments_admin_id_fkey)
      columns: admin_id
  └─→ properties (via: property_assignments_property_id_fkey)
      columns: property_id

property_comparisons:
  └─→ profiles (via: property_comparisons_user_id_fkey)
      columns: user_id

property_documents:
  └─→ properties (via: property_documents_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_documents_uploaded_by_fkey)
      columns: uploaded_by
  └─→ profiles (via: property_documents_verified_by_fkey)
      columns: verified_by

property_images:
  └─→ properties (via: property_images_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_images_uploaded_by_fkey)
      columns: uploaded_by

property_intelligence_scores:
  └─→ properties (via: property_intelligence_scores_property_id_fkey)
      columns: property_id

property_leads:
  └─→ profiles (via: property_leads_assigned_to_fkey)
      columns: assigned_to
  └─→ profiles (via: property_leads_lead_user_id_fkey)
      columns: lead_user_id
  └─→ properties (via: property_leads_property_id_fkey)
      columns: property_id

property_price_history:
  └─→ profiles (via: property_price_history_changed_by_fkey)
      columns: changed_by
  └─→ properties (via: property_price_history_property_id_fkey)
      columns: property_id

property_ranking_criteria:
  └─→ properties (via: property_ranking_criteria_property_id_fkey)
      columns: property_id

property_reports:
  └─→ properties (via: property_reports_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_reports_reported_by_fkey)
      columns: reported_by
  └─→ admins (via: property_reports_reviewed_by_fkey)
      columns: reviewed_by

property_shares:
  └─→ properties (via: property_shares_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_shares_shared_by_fkey)
      columns: shared_by

property_valuations:
  └─→ properties (via: property_valuations_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_valuations_validated_by_fkey)
      columns: validated_by

property_verifications:
  └─→ properties (via: property_verifications_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_verifications_verified_by_fkey)
      columns: verified_by

property_views:
  └─→ properties (via: property_views_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_views_user_id_fkey)
      columns: user_id

property_visits:
  └─→ profiles (via: property_visits_accompanied_by_fkey)
      columns: accompanied_by
  └─→ properties (via: property_visits_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_visits_visitor_id_fkey)
      columns: visitor_id

referrals:
  └─→ profiles (via: referrals_referred_id_fkey)
      columns: referred_id
  └─→ profiles (via: referrals_referrer_id_fkey)
      columns: referrer_id

refund_request:
  └─→ profiles (via: refund_request_requested_by_fkey)
      columns: requested_by
  └─→ profiles (via: refund_request_reviewed_by_fkey)
      columns: reviewed_by
  └─→ transactions (via: refund_request_transaction_id_fkey)
      columns: transaction_id

regions:
  └─→ regions (via: regions_parent_region_id_fkey)
      columns: parent_region_id

registration_consent_log:
  └─→ profiles (via: registration_consent_log_user_id_fkey)
      columns: user_id

role_permissions:
  └─→ permissions (via: role_permissions_permission_id_fkey)
      columns: permission_id
  └─→ roles (via: role_permissions_role_id_fkey)
      columns: role_id

saved_listings:
  └─→ profiles (via: saved_listings_profile_fk)
      columns: profile_id
  └─→ properties (via: saved_listings_property_fk)
      columns: property_id

saved_searches:
  └─→ profiles (via: saved_searches_user_id_fkey)
      columns: user_id

search_history:
  └─→ profiles (via: search_history_user_id_fkey)
      columns: user_id

security_flags:
  └─→ admins (via: security_flags_flagged_by_fkey)
      columns: flagged_by
  └─→ admins (via: security_flags_resolved_by_fkey)
      columns: resolved_by

sub_districts:
  └─→ districts (via: sub_districts_district_id_fkey)
      columns: district_id

subscription_enrollments:
  └─→ subscription_plans (via: subscription_enrollments_plan_id_fkey)
      columns: plan_id
  └─→ transactions (via: subscription_enrollments_purchase_transaction_id_fkey)
      columns: purchase_transaction_id
  └─→ profiles (via: subscription_enrollments_user_id_fkey)
      columns: user_id

subscription_plans:
  └─→ regions (via: subscription_plans_region_id_fkey)
      columns: region_id

system_settings:
  └─→ admins (via: system_settings_updated_by_fkey)
      columns: updated_by

transactions:
  └─→ profiles (via: transactions_approved_by_fkey)
      columns: approved_by
  └─→ builders (via: transactions_builder_id_fkey)
      columns: builder_id
  └─→ coupons (via: transactions_coupon_id_fkey)
      columns: coupon_id
  └─→ profiles (via: transactions_initiated_by_fkey)
      columns: initiated_by
  └─→ property_leads (via: transactions_lead_id_fkey)
      columns: lead_id
  └─→ pricing_rules (via: transactions_pricing_rule_id_fkey)
      columns: pricing_rule_id
  └─→ projects (via: transactions_project_id_fkey)
      columns: project_id
  └─→ regions (via: transactions_region_id_fkey)
      columns: region_id
  └─→ profiles (via: transactions_user_id_fkey)
      columns: user_id

undervalued_properties:
  └─→ properties (via: undervalued_properties_property_id_fkey)
      columns: property_id
  └─→ profiles (via: undervalued_properties_verified_by_fkey)
      columns: verified_by

user_favorites:
  └─→ properties (via: user_favorites_property_id_fkey)
      columns: property_id
  └─→ profiles (via: user_favorites_user_id_fkey)
      columns: user_id

user_ratings:
  └─→ properties (via: user_ratings_rated_property_id_fkey)
      columns: rated_property_id
  └─→ profiles (via: user_ratings_rated_user_id_fkey)
      columns: rated_user_id
  └─→ profiles (via: user_ratings_rating_user_id_fkey)
      columns: rating_user_id

user_regional_preferences:
  └─→ regions (via: user_regional_preferences_primary_region_id_fkey)
      columns: primary_region_id
  └─→ profiles (via: user_regional_preferences_user_id_fkey)
      columns: user_id

verification_documents:
  └─→ verification_kyc (via: verification_documents_kyc_id_fkey)
      columns: kyc_id

wallets:
  └─→ regions (via: wallets_last_transaction_region_id_fkey)
      columns: last_transaction_region_id
  └─→ profiles (via: wallets_user_id_fkey)
      columns: user_id

```
