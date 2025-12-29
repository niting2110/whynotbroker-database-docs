# Database Relationships (ER Diagram - Text)

Total Relationships: 66
Generated: 2025-12-29T07:03:46.870Z

```
admin_audit_logs:
  └─→ admins (via: admin_audit_logs_admin_id_fkey)
      columns: admin_id

admin_chat:
  └─→ admins (via: admin_chat_admin_id_fkey)
      columns: admin_id

admin_leaves:
  └─→ admins (via: admin_leaves_admin_id_fkey)
      columns: admin_id
  └─→ admins (via: admin_leaves_backup_admin_id_fkey)
      columns: backup_admin_id

admin_messages:
  └─→ admins (via: admin_messages_receiver_id_fkey)
      columns: receiver_id
  └─→ admins (via: admin_messages_sender_id_fkey)
      columns: sender_id

admin_roles:
  └─→ admins (via: admin_roles_admin_id_fkey)
      columns: admin_id
  └─→ roles (via: admin_roles_role_id_fkey)
      columns: role_id

admin_users:
  └─→ profiles (via: admin_users_id_fkey)
      columns: id

admins:
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

campaign_participants:
  └─→ promotional_campaigns (via: campaign_participants_campaign_id_fkey)
      columns: campaign_id
  └─→ regions (via: campaign_participants_region_id_fkey)
      columns: region_id

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

messages:
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

notifications:
  └─→ profiles (via: notifications_user_id_fkey)
      columns: user_id

pricing_rules:
  └─→ regions (via: pricing_rules_region_id_fkey)
      columns: region_id

properties:
  └─→ profiles (via: properties_agency_id_fkey)
      columns: agency_id
  └─→ profiles (via: properties_agent_id_fkey)
      columns: agent_id
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

property_price_history:
  └─→ profiles (via: property_price_history_changed_by_fkey)
      columns: changed_by
  └─→ properties (via: property_price_history_property_id_fkey)
      columns: property_id

property_views:
  └─→ properties (via: property_views_property_id_fkey)
      columns: property_id
  └─→ profiles (via: property_views_user_id_fkey)
      columns: user_id

regions:
  └─→ regions (via: regions_parent_region_id_fkey)
      columns: parent_region_id

role_permissions:
  └─→ permissions (via: role_permissions_permission_id_fkey)
      columns: permission_id
  └─→ roles (via: role_permissions_role_id_fkey)
      columns: role_id

search_history:
  └─→ profiles (via: search_history_user_id_fkey)
      columns: user_id

security_flags:
  └─→ admins (via: security_flags_flagged_by_fkey)
      columns: flagged_by
  └─→ admins (via: security_flags_resolved_by_fkey)
      columns: resolved_by

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

transactions:
  └─→ coupons (via: transactions_coupon_id_fkey)
      columns: coupon_id
  └─→ pricing_rules (via: transactions_pricing_rule_id_fkey)
      columns: pricing_rule_id
  └─→ regions (via: transactions_region_id_fkey)
      columns: region_id
  └─→ profiles (via: transactions_user_id_fkey)
      columns: user_id

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

wallets:
  └─→ regions (via: wallets_last_transaction_region_id_fkey)
      columns: last_transaction_region_id
  └─→ profiles (via: wallets_user_id_fkey)
      columns: user_id

```
