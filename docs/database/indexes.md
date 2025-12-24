# Index Performance Report

Generated: 2025-12-24T17:09:29.541Z
Total Indexes: 95

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
| `messages` | `idx_messages_property` | btree | property_id | — | `CREATE INDEX idx_messages_property ON public.messages USING btree (property_id)` |
| `messages` | `idx_messages_sender_receiver` | btree | sender_id, receiver_id | — | `CREATE INDEX idx_messages_sender_receiver ON public.messages USING btree (sender_id, receiver_id)` |
| `messages` | `messages_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX messages_pkey ON public.messages USING btree (id)` |
| `moderation_history` | `moderation_history_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX moderation_history_pkey ON public.moderation_history USING btree (id)` |
| `notifications` | `idx_notifications_user_unread` | btree | user_id, is_read | — | `CREATE INDEX idx_notifications_user_unread ON public.notifications USING btree (user_id, is_read) WHERE (is_read = false)` |
| `notifications` | `notifications_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX notifications_pkey ON public.notifications USING btree (id)` |
| `permissions` | `permission_unique` | btree | domain, action, scope | ✓ | `CREATE UNIQUE INDEX permission_unique ON public.permissions USING btree (domain, action, scope)` |
| `permissions` | `permissions_name_key` | btree | name | ✓ | `CREATE UNIQUE INDEX permissions_name_key ON public.permissions USING btree (name)` |
| `permissions` | `permissions_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX permissions_pkey ON public.permissions USING btree (id)` |
| `profiles` | `profiles_email_key` | btree | email | ✓ | `CREATE UNIQUE INDEX profiles_email_key ON public.profiles USING btree (email)` |
| `profiles` | `profiles_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id)` |
| `profiles` | `profiles_username_key` | btree | username | ✓ | `CREATE UNIQUE INDEX profiles_username_key ON public.profiles USING btree (username)` |
| `properties` | `idx_properties_active_published` | btree | status, is_active | — | `CREATE INDEX idx_properties_active_published ON public.properties USING btree (is_active, status) WHERE ((is_active = true) AND (status = 'published'::text))` |
| `properties` | `idx_properties_agency_id` | btree | agency_id | — | `CREATE INDEX idx_properties_agency_id ON public.properties USING btree (agency_id)` |
| `properties` | `idx_properties_agent_id` | btree | agent_id | — | `CREATE INDEX idx_properties_agent_id ON public.properties USING btree (agent_id)` |
| `properties` | `idx_properties_area` | btree | built_up_area | — | `CREATE INDEX idx_properties_area ON public.properties USING btree (built_up_area)` |
| `properties` | `idx_properties_bedrooms` | btree | bedrooms | — | `CREATE INDEX idx_properties_bedrooms ON public.properties USING btree (bedrooms)` |
| `properties` | `idx_properties_city_locality` | btree | city, locality | — | `CREATE INDEX idx_properties_city_locality ON public.properties USING btree (city, locality)` |
| `properties` | `idx_properties_city_price_filter` | btree | price, city, status, is_active | — | `CREATE INDEX idx_properties_city_price_filter ON public.properties USING btree (city, price, status, is_active)` |
| `properties` | `idx_properties_city_status_active` | btree | city, status, is_active | — | `CREATE INDEX idx_properties_city_status_active ON public.properties USING btree (city, status, is_active)` |
| `properties` | `idx_properties_created_at` | btree | created_at | — | `CREATE INDEX idx_properties_created_at ON public.properties USING btree (created_at DESC)` |
| `properties` | `idx_properties_featured` | btree | is_featured | — | `CREATE INDEX idx_properties_featured ON public.properties USING btree (is_featured) WHERE (is_featured = true)` |
| `properties` | `idx_properties_featured_smart` | btree | status, is_active, is_featured, created_at, featured_until | — | `CREATE INDEX idx_properties_featured_smart ON public.properties USING btree (is_featured, featured_until DESC NULLS LAST, created_at DESC, status, is_active)` |
| `properties` | `idx_properties_listing_type` | btree | listing_type | — | `CREATE INDEX idx_properties_listing_type ON public.properties USING btree (listing_type)` |
| `properties` | `idx_properties_pid` | btree | pid | — | `CREATE INDEX idx_properties_pid ON public.properties USING btree (pid)` |
| `properties` | `idx_properties_price` | btree | price | — | `CREATE INDEX idx_properties_price ON public.properties USING btree (price)` |
| `properties` | `idx_properties_price_status_active` | btree | price, status, is_active | — | `CREATE INDEX idx_properties_price_status_active ON public.properties USING btree (price, status, is_active)` |
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
| `property_price_history` | `idx_property_price_history_changed_by` | btree | changed_by | — | `CREATE INDEX idx_property_price_history_changed_by ON public.property_price_history USING btree (changed_by)` |
| `property_price_history` | `idx_property_price_history_property` | btree | property_id | — | `CREATE INDEX idx_property_price_history_property ON public.property_price_history USING btree (property_id)` |
| `property_price_history` | `property_price_history_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_price_history_pkey ON public.property_price_history USING btree (id)` |
| `property_views` | `idx_property_views_date` | btree | viewed_at | — | `CREATE INDEX idx_property_views_date ON public.property_views USING btree (viewed_at DESC)` |
| `property_views` | `idx_property_views_property` | btree | property_id | — | `CREATE INDEX idx_property_views_property ON public.property_views USING btree (property_id)` |
| `property_views` | `idx_property_views_property_session` | btree | property_id, session_id | — | `CREATE INDEX idx_property_views_property_session ON public.property_views USING btree (property_id, session_id)` |
| `property_views` | `property_views_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX property_views_pkey ON public.property_views USING btree (id)` |
| `property_views` | `unique_property_session` | btree | property_id, session_id | ✓ | `CREATE UNIQUE INDEX unique_property_session ON public.property_views USING btree (property_id, session_id)` |
| `role_permissions` | `role_permissions_pkey` | btree | role_id, permission_id | ✓ | `CREATE UNIQUE INDEX role_permissions_pkey ON public.role_permissions USING btree (role_id, permission_id)` |
| `roles` | `roles_name_key` | btree | name | ✓ | `CREATE UNIQUE INDEX roles_name_key ON public.roles USING btree (name)` |
| `roles` | `roles_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX roles_pkey ON public.roles USING btree (id)` |
| `search_history` | `idx_search_history_user` | btree | user_id | — | `CREATE INDEX idx_search_history_user ON public.search_history USING btree (user_id)` |
| `search_history` | `search_history_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX search_history_pkey ON public.search_history USING btree (id)` |
| `user_favorites` | `idx_user_favorites_property` | btree | property_id | — | `CREATE INDEX idx_user_favorites_property ON public.user_favorites USING btree (property_id)` |
| `user_favorites` | `idx_user_favorites_property_user` | btree | user_id, property_id | — | `CREATE INDEX idx_user_favorites_property_user ON public.user_favorites USING btree (property_id, user_id)` |
| `user_favorites` | `idx_user_favorites_user` | btree | user_id | — | `CREATE INDEX idx_user_favorites_user ON public.user_favorites USING btree (user_id)` |
| `user_favorites` | `user_favorites_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX user_favorites_pkey ON public.user_favorites USING btree (id)` |
| `user_favorites` | `user_favorites_user_id_property_id_key` | btree | user_id, property_id | ✓ | `CREATE UNIQUE INDEX user_favorites_user_id_property_id_key ON public.user_favorites USING btree (user_id, property_id)` |
| `user_ratings` | `idx_user_ratings_property` | btree | rated_property_id | — | `CREATE INDEX idx_user_ratings_property ON public.user_ratings USING btree (rated_property_id)` |
| `user_ratings` | `idx_user_ratings_rated_user` | btree | rated_user_id | — | `CREATE INDEX idx_user_ratings_rated_user ON public.user_ratings USING btree (rated_user_id)` |
| `user_ratings` | `user_ratings_pkey` | btree | id | ✓ | `CREATE UNIQUE INDEX user_ratings_pkey ON public.user_ratings USING btree (id)` |
| `user_ratings` | `user_ratings_rating_user_id_rated_user_id_rated_property_id_key` | btree | rated_user_id, rated_property_id, rating_user_id | ✓ | `CREATE UNIQUE INDEX user_ratings_rating_user_id_rated_user_id_rated_property_id_key ON public.user_ratings USING btree (rating_user_id, rated_user_id, rated_property_id)` |

## Performance Recommendations

### ⚠️ Potential Duplicate Indexes

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

**Table: `property_views`, Columns: property_id, session_id**
- `idx_property_views_property_session` (btree)
- `unique_property_session` (btree, unique)

**Table: `user_favorites`, Columns: user_id, property_id**
- `idx_user_favorites_property_user` (btree)
- `user_favorites_user_id_property_id_key` (btree, unique)

