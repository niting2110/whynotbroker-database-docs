# Database Relationships (ER Diagram - Text)

Total Relationships: 37
Generated: 2025-12-23T07:02:22.687Z

```
admin_roles:
  └─→ admins (via: admin_roles_admin_id_fkey)
      columns: admin_id
  └─→ roles (via: admin_roles_role_id_fkey)
      columns: role_id

admin_users:
  └─→ profiles (via: admin_users_id_fkey)
      columns: id

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

role_permissions:
  └─→ permissions (via: role_permissions_permission_id_fkey)
      columns: permission_id
  └─→ roles (via: role_permissions_role_id_fkey)
      columns: role_id

search_history:
  └─→ profiles (via: search_history_user_id_fkey)
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

```
