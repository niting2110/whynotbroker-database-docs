# Schema Validation Report

Generated: 2025-12-24T07:02:14.049Z
Total Issues: 54
Warnings: 38
Recommendations: 16

## ⚠️ Warnings

| Severity | Table | Issue |
|----------|-------|-------|
| MEDIUM | `admin_audit_logs` | Foreign key admin_audit_logs_admin_id_fkey has no covering index |
| MEDIUM | `admin_roles` | Foreign key admin_roles_admin_id_fkey has no covering index |
| MEDIUM | `admin_roles` | Foreign key admin_roles_role_id_fkey has no covering index |
| MEDIUM | `admin_users` | Foreign key admin_users_id_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_buyer_id_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_cancelled_by_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_property_id_fkey has no covering index |
| MEDIUM | `appointments` | Foreign key appointments_seller_id_fkey has no covering index |
| MEDIUM | `blog_posts` | Foreign key blog_posts_author_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_property_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_receiver_id_fkey has no covering index |
| MEDIUM | `messages` | Foreign key messages_sender_id_fkey has no covering index |
| MEDIUM | `moderation_history` | Foreign key moderation_history_admin_id_fkey has no covering index |
| MEDIUM | `moderation_history` | Foreign key moderation_history_property_id_fkey has no covering index |
| MEDIUM | `notifications` | Foreign key notifications_user_id_fkey has no covering index |
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
| MEDIUM | `role_permissions` | Foreign key role_permissions_permission_id_fkey has no covering index |
| MEDIUM | `role_permissions` | Foreign key role_permissions_role_id_fkey has no covering index |
| MEDIUM | `search_history` | Foreign key search_history_user_id_fkey has no covering index |
| MEDIUM | `user_favorites` | Foreign key user_favorites_property_id_fkey has no covering index |
| MEDIUM | `user_favorites` | Foreign key user_favorites_user_id_fkey has no covering index |
| MEDIUM | `user_ratings` | Foreign key user_ratings_rated_property_id_fkey has no covering index |
| MEDIUM | `user_ratings` | Foreign key user_ratings_rated_user_id_fkey has no covering index |
| MEDIUM | `user_ratings` | Foreign key user_ratings_rating_user_id_fkey has no covering index |

## 💡 Recommendations

| Table | Recommendation |
|-------|----------------|
| `admin_audit_logs` | Table missing timestamp columns (created_at, updated_at) |
| `admin_roles` | Table missing timestamp columns (created_at, updated_at) |
| `admins` | Table missing timestamp columns (created_at, updated_at) |
| `moderation_history` | Table missing timestamp columns (created_at, updated_at) |
| `notifications` | Table missing timestamp columns (created_at, updated_at) |
| `permissions` | Table missing timestamp columns (created_at, updated_at) |
| `property_amenities` | Table missing timestamp columns (created_at, updated_at) |
| `property_assignments` | Table missing timestamp columns (created_at, updated_at) |
| `property_documents` | Table missing timestamp columns (created_at, updated_at) |
| `property_images` | Table missing timestamp columns (created_at, updated_at) |
| `property_price_history` | Table missing timestamp columns (created_at, updated_at) |
| `property_views` | Table missing timestamp columns (created_at, updated_at) |
| `role_permissions` | Table missing timestamp columns (created_at, updated_at) |
| `roles` | Table missing timestamp columns (created_at, updated_at) |
| `search_history` | Table missing timestamp columns (created_at, updated_at) |
| `user_favorites` | Table missing timestamp columns (created_at, updated_at) |
