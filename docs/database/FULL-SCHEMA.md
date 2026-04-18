# WHYNOTBROKER - Full Database Schema
> Auto-generated: 2026-04-18T07:21:31.565Z
> Total Tables: 116
> PostgreSQL: 17.6

---

## `admin_audit_logs`

**Statistics:**
- Rows: ~14,348
- Columns: 9
- Indexes: 8
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `admin_id` | `uuid` | YES | `—` |
| `action` | `character varying(50)` | NO | `—` |
| `entity` | `character varying(50)` | NO | `—` |
| `entity_id` | `character varying(100)` | YES | `—` |
| `details` | `text` | YES | `—` |
| `ip_address` | `inet` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `timezone('utc'::text, now())` |
| `region_id` | `uuid` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admin_audit_logs_pkey` | btree | id | ✓ |
| `idx_admin_audit_logs_action` | btree | action | — |
| `idx_admin_audit_logs_admin_created` | btree | admin_id, created_at | — |
| `idx_admin_audit_logs_admin_id` | btree | admin_id | — |
| `idx_admin_audit_logs_created_at` | btree | created_at | — |
| `idx_admin_audit_logs_region_id` | btree | region_id | — |
| `idx_audit_admin_id` | btree | admin_id | — |
| `idx_audit_created_at` | btree | created_at | — |

### Foreign Keys

- `admin_audit_logs_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `admin_audit_logs_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `admin_chat`

**Statistics:**
- Rows: ~5
- Columns: 4
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `admin_id` | `uuid` | YES | `—` |
| `message` | `text` | NO | `—` |
| `created_at` | `timestamp with time zone` | YES | `timezone('utc'::text, now())` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admin_chat_pkey` | btree | id | ✓ |
| `idx_admin_chat_admin_id` | btree | admin_id | — |

### Foreign Keys

- `admin_chat_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `admin_leaves`

**Statistics:**
- Rows: ~5
- Columns: 17
- Indexes: 5
- Foreign Keys: 4

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `admin_id` | `uuid` | YES | `—` |
| `start_date` | `date` | NO | `—` |
| `end_date` | `date` | NO | `—` |
| `reason` | `text` | YES | `—` |
| `backup_admin_id` | `uuid` | YES | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `created_at` | `timestamp with time zone` | YES | `timezone('utc'::text, now())` |
| `leave_type_id` | `uuid` | YES | `—` |
| `is_half_day` | `boolean` | YES | `false` |
| `half_day_period` | `text` | YES | `—` |
| `emergency_contact` | `text` | YES | `—` |
| `attachment_urls` | `ARRAY` | YES | `'{}'::text[]` |
| `handover_notes` | `text` | YES | `—` |
| `approved_by_id` | `uuid` | YES | `—` |
| `rejection_reason` | `text` | YES | `—` |
| `status_log` | `jsonb` | YES | `'[]'::jsonb` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admin_leaves_pkey` | btree | id | ✓ |
| `idx_admin_leaves_admin_id` | btree | admin_id | — |
| `idx_admin_leaves_approved_by_id` | btree | approved_by_id | — |
| `idx_admin_leaves_backup_admin_id` | btree | backup_admin_id | — |
| `idx_admin_leaves_leave_type_id` | btree | leave_type_id | — |

### Foreign Keys

- `admin_leaves_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `admin_leaves_approved_by_id_fkey`:
  - Columns: `approved_by_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `admin_leaves_backup_admin_id_fkey`:
  - Columns: `backup_admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `admin_leaves_leave_type_id_fkey`:
  - Columns: `leave_type_id` → `leave_types(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `admin_messages`

**Statistics:**
- Rows: ~5
- Columns: 6
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `sender_id` | `uuid` | NO | `—` |
| `receiver_id` | `uuid` | NO | `—` |
| `content` | `text` | NO | `—` |
| `is_read` | `boolean` | YES | `false` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admin_messages_pkey` | btree | id | ✓ |
| `idx_admin_messages_receiver_id` | btree | receiver_id | — |
| `idx_admin_messages_sender_id` | btree | sender_id | — |

### Foreign Keys

- `admin_messages_receiver_id_fkey`:
  - Columns: `receiver_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `admin_messages_sender_id_fkey`:
  - Columns: `sender_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `admin_notices`

**Statistics:**
- Rows: ~6
- Columns: 7
- Indexes: 3
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `title` | `text` | NO | `—` |
| `content` | `text` | NO | `—` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `timezone('utc'::text, now())` |
| `priority` | `text` | YES | `—` |
| `expires_at` | `timestamp with time zone` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admin_notices_pkey` | btree | id | ✓ |
| `idx_admin_notices_active_created` | btree | is_active, created_at | — |
| `idx_admin_notices_admin_active` | btree | created_at | — |

---

## `admin_regions`

**Statistics:**
- Rows: ~5
- Columns: 6
- Indexes: 5
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `admin_id` | `uuid` | NO | `—` |
| `region_id` | `uuid` | NO | `—` |
| `region_type` | `text` | NO | `—` |
| `assigned_by` | `uuid` | YES | `—` |
| `assigned_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admin_regions_admin_id_region_id_key` | btree | admin_id, region_id | ✓ |
| `admin_regions_pkey` | btree | id | ✓ |
| `idx_admin_regions_admin` | btree | admin_id | — |
| `idx_admin_regions_assigned_by` | btree | assigned_by | — |
| `idx_admin_regions_region` | btree | region_id | — |

### Foreign Keys

- `admin_regions_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `admin_regions_assigned_by_fkey`:
  - Columns: `assigned_by` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `admin_regions_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `admin_roles`

**Statistics:**
- Rows: ~251
- Columns: 3
- Indexes: 1
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `admin_id` | `uuid` | NO | `—` |
| `role_id` | `uuid` | NO | `—` |
| `can_publish` | `boolean` | NO | `false` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admin_roles_pkey` | btree | admin_id, role_id | ✓ |

### Foreign Keys

- `admin_roles_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `admin_roles_role_id_fkey`:
  - Columns: `role_id` → `roles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `admin_users`

**Statistics:**
- Rows: ~21
- Columns: 7
- Indexes: 1
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `—` |
| `is_active` | `boolean` | NO | `true` |
| `assigned_count` | `integer` | NO | `0` |
| `total_reviewed` | `integer` | NO | `0` |
| `last_active_at` | `timestamp with time zone` | NO | `now()` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admin_users_pkey` | btree | id | ✓ |

### Foreign Keys

- `admin_users_id_fkey`:
  - Columns: `id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `admins`

**Statistics:**
- Rows: ~455
- Columns: 20
- Indexes: 4
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `email` | `text` | NO | `—` |
| `is_active` | `boolean` | NO | `true` |
| `permissions_version` | `integer` | NO | `1` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `password_hash` | `text` | YES | `—` |
| `full_name` | `text` | YES | `—` |
| `last_login_at` | `timestamp with time zone` | YES | `—` |
| `specialization` | `ARRAY` | YES | `—` |
| `assigned_regions` | `ARRAY` | YES | `—` |
| `assigned_cities` | `ARRAY` | YES | `—` |
| `department` | `text` | YES | `—` |
| `designation` | `text` | YES | `—` |
| `employee_id` | `text` | YES | `—` |
| `joining_date` | `date` | YES | `—` |
| `profile_photo_url` | `text` | YES | `—` |
| `reporting_manager_id` | `uuid` | YES | `—` |
| `profile_data` | `jsonb` | YES | `'{}'::jsonb` |
| `is_manager` | `boolean` | YES | `false` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `admins_email_key` | btree | email | ✓ |
| `admins_pkey` | btree | id | ✓ |
| `admins_user_id_key` | btree | user_id | ✓ |
| `idx_admins_reporting_manager_id` | btree | reporting_manager_id | — |

### Foreign Keys

- `admins_reporting_manager_id_fkey`:
  - Columns: `reporting_manager_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `admins_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `appointments`

**Statistics:**
- Rows: ~18
- Columns: 18
- Indexes: 6
- Foreign Keys: 4

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `buyer_id` | `uuid` | NO | `—` |
| `seller_id` | `uuid` | NO | `—` |
| `appointment_date` | `date` | NO | `—` |
| `appointment_time` | `time without time zone` | NO | `—` |
| `duration_minutes` | `integer` | YES | `60` |
| `status` | `text` | YES | `'scheduled'::text` |
| `meeting_type` | `text` | YES | `'physical'::text` |
| `meeting_link` | `text` | YES | `—` |
| `location` | `text` | YES | `—` |
| `notes` | `text` | YES | `—` |
| `feedback` | `text` | YES | `—` |
| `rating` | `numeric` | YES | `—` |
| `cancelled_by` | `uuid` | YES | `—` |
| `cancellation_reason` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `appointments_pkey` | btree | id | ✓ |
| `idx_appointments_buyer_id` | btree | buyer_id | — |
| `idx_appointments_cancelled_by` | btree | cancelled_by | — |
| `idx_appointments_date_status` | btree | appointment_date, status | — |
| `idx_appointments_property` | btree | property_id | — |
| `idx_appointments_seller_id` | btree | seller_id | — |

### Foreign Keys

- `appointments_buyer_id_fkey`:
  - Columns: `buyer_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `appointments_cancelled_by_fkey`:
  - Columns: `cancelled_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `appointments_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `appointments_seller_id_fkey`:
  - Columns: `seller_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `blog_posts`

**Statistics:**
- Rows: ~119
- Columns: 17
- Indexes: 4
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pid` | `text` | NO | `—` |
| `author_id` | `uuid` | YES | `—` |
| `title` | `text` | NO | `—` |
| `slug` | `text` | NO | `—` |
| `excerpt` | `text` | YES | `—` |
| `content` | `text` | NO | `—` |
| `featured_image` | `text` | YES | `—` |
| `category` | `text` | YES | `—` |
| `tags` | `ARRAY` | YES | `—` |
| `status` | `text` | YES | `'draft'::text` |
| `view_count` | `integer` | YES | `0` |
| `like_count` | `integer` | YES | `0` |
| `comment_count` | `integer` | YES | `0` |
| `published_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `blog_posts_pid_key` | btree | pid | ✓ |
| `blog_posts_pkey` | btree | id | ✓ |
| `blog_posts_slug_key` | btree | slug | ✓ |
| `idx_blog_posts_author_id` | btree | author_id | — |

### Foreign Keys

- `blog_posts_author_id_fkey`:
  - Columns: `author_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `broker_aadhaar_verifications`

**Statistics:**
- Rows: ~0
- Columns: 13
- Indexes: 2
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `character varying(64)` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `status` | `character varying(32)` | NO | `'pending'::character varying` |
| `masked_aadhaar` | `character varying(32)` | YES | `—` |
| `otp_expires_at` | `timestamp with time zone` | YES | `—` |
| `resend_count` | `integer` | YES | `0` |
| `name` | `character varying(256)` | YES | `—` |
| `dob` | `date` | YES | `—` |
| `gender` | `character(1)` | YES | `—` |
| `address` | `text` | YES | `—` |
| `photo_available` | `boolean` | YES | `false` |
| `verified_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `broker_aadhaar_verifications_pkey` | btree | id | ✓ |
| `idx_aadhaar_user_id` | btree | user_id | — |

---

## `broker_gps_tracking`

**Statistics:**
- Rows: ~5
- Columns: 15
- Indexes: 4
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `character varying(64)` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `latitude` | `numeric` | NO | `—` |
| `longitude` | `numeric` | NO | `—` |
| `accuracy` | `numeric` | YES | `—` |
| `altitude` | `numeric` | YES | `—` |
| `address` | `text` | YES | `—` |
| `activity_type` | `character varying(64)` | YES | `—` |
| `property_id` | `character varying(64)` | YES | `—` |
| `within_geofence` | `boolean` | YES | `true` |
| `distance_from_prop` | `numeric` | YES | `—` |
| `city_match` | `boolean` | YES | `true` |
| `suspicious_activity` | `boolean` | YES | `false` |
| `recorded_at` | `timestamp with time zone` | NO | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `broker_gps_tracking_pkey` | btree | id | ✓ |
| `idx_gps_property_id` | btree | property_id | — |
| `idx_gps_recorded_at` | btree | recorded_at | — |
| `idx_gps_user_id` | btree | user_id | — |

---

## `broker_gst_verifications`

**Statistics:**
- Rows: ~5
- Columns: 16
- Indexes: 2
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `character varying(64)` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `status` | `character varying(32)` | NO | `'pending'::character varying` |
| `gst_number` | `character varying(15)` | NO | `—` |
| `business_name` | `character varying(512)` | YES | `—` |
| `legal_name` | `character varying(512)` | YES | `—` |
| `trade_name` | `character varying(512)` | YES | `—` |
| `business_name_match` | `boolean` | YES | `false` |
| `registration_date` | `date` | YES | `—` |
| `gst_status` | `character varying(32)` | YES | `'active'::character varying` |
| `taxpayer_type` | `character varying(64)` | YES | `—` |
| `state` | `character varying(64)` | YES | `—` |
| `state_code` | `character varying(4)` | YES | `—` |
| `principal_place_address` | `text` | YES | `—` |
| `verified_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `broker_gst_verifications_pkey` | btree | id | ✓ |
| `idx_gst_user_id` | btree | user_id | — |

---

## `broker_kyc_documents`

**Statistics:**
- Rows: ~7
- Columns: 18
- Indexes: 3
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `character varying(64)` | NO | `—` |
| `verification_id` | `character varying(64)` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `document_type` | `character varying(32)` | NO | `—` |
| `status` | `character varying(32)` | NO | `'uploaded'::character varying` |
| `file_size` | `bigint` | YES | `—` |
| `file_type` | `character varying(64)` | YES | `—` |
| `storage_url` | `text` | YES | `—` |
| `thumbnail_url` | `text` | YES | `—` |
| `document_number` | `character varying(128)` | YES | `—` |
| `name_matched` | `boolean` | YES | `false` |
| `tamper_detected` | `boolean` | YES | `false` |
| `confidence_score` | `numeric` | YES | `0` |
| `ocr_extracted` | `boolean` | YES | `false` |
| `uploaded_at` | `timestamp with time zone` | NO | `now()` |
| `verified_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `broker_kyc_documents_pkey` | btree | id | ✓ |
| `idx_kyc_docs_user_id` | btree | user_id | — |
| `idx_kyc_docs_verification_id` | btree | verification_id | — |

### Foreign Keys

- `broker_kyc_documents_verification_id_fkey`:
  - Columns: `verification_id` → `broker_kyc_verifications(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `broker_kyc_verifications`

**Statistics:**
- Rows: ~16
- Columns: 14
- Indexes: 3
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `character varying(64)` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `status` | `character varying(32)` | NO | `'initiated'::character varying` |
| `verification_type` | `character varying(32)` | NO | `'full'::character varying` |
| `documents_required` | `text` | YES | `—` |
| `verification_level` | `character varying(32)` | YES | `'none'::character varying` |
| `verified_by` | `character varying(64)` | YES | `—` |
| `risk_score` | `integer` | YES | `0` |
| `confidence_level` | `character varying(32)` | YES | `—` |
| `started_at` | `timestamp with time zone` | NO | `now()` |
| `completed_at` | `timestamp with time zone` | YES | `—` |
| `expires_at` | `timestamp with time zone` | NO | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `broker_kyc_verifications_pkey` | btree | id | ✓ |
| `idx_kyc_status` | btree | status | — |
| `idx_kyc_user_id` | btree | user_id | — |

---

## `broker_pan_verifications`

**Statistics:**
- Rows: ~5
- Columns: 11
- Indexes: 2
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `character varying(64)` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `status` | `character varying(32)` | NO | `'pending'::character varying` |
| `pan_number` | `character varying(10)` | NO | `—` |
| `name` | `character varying(256)` | YES | `—` |
| `name_match` | `boolean` | YES | `false` |
| `dob_match` | `boolean` | YES | `false` |
| `pan_status` | `character varying(32)` | YES | `'active'::character varying` |
| `pan_type` | `character varying(32)` | YES | `'individual'::character varying` |
| `verified_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `broker_pan_verifications_pkey` | btree | id | ✓ |
| `idx_pan_user_id` | btree | user_id | — |

---

## `builders`

**Statistics:**
- Rows: ~50
- Columns: 28
- Indexes: 5
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `company_name` | `text` | NO | `—` |
| `registration_number` | `text` | YES | `—` |
| `rera_number` | `text` | YES | `—` |
| `pan_number` | `text` | YES | `—` |
| `gst_number` | `text` | YES | `—` |
| `logo_url` | `text` | YES | `—` |
| `description` | `text` | YES | `—` |
| `established_year` | `integer` | YES | `—` |
| `total_projects` | `integer` | YES | `0` |
| `completed_projects` | `integer` | YES | `0` |
| `ongoing_projects` | `integer` | YES | `0` |
| `total_units_delivered` | `integer` | YES | `0` |
| `specialization` | `ARRAY` | YES | `—` |
| `operating_cities` | `ARRAY` | YES | `—` |
| `website_url` | `text` | YES | `—` |
| `contact_email` | `text` | YES | `—` |
| `contact_phone` | `text` | YES | `—` |
| `office_address` | `text` | YES | `—` |
| `rating` | `numeric` | YES | `—` |
| `total_ratings` | `integer` | YES | `0` |
| `is_verified` | `boolean` | YES | `false` |
| `is_featured` | `boolean` | YES | `false` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `normalized_name` | `text` | YES | `—` |
| `dedup_group_id` | `uuid` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `builders_pkey` | btree | id | ✓ |
| `idx_builders_dedup_group` | btree | dedup_group_id | — |
| `idx_builders_name` | btree | name | — |
| `idx_builders_normalized` | btree | normalized_name | — |
| `idx_builders_verified` | btree | is_verified | — |

---

## `campaign_participants`

> Track user participation in campaigns

**Statistics:**
- Rows: ~5
- Columns: 9
- Indexes: 6
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `campaign_id` | `uuid` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `region_id` | `uuid` | YES | `—` |
| `credits_awarded` | `integer` | YES | `0` |
| `conditions_met` | `jsonb` | YES | `'{}'::jsonb` |
| `is_completed` | `boolean` | YES | `false` |
| `completed_at` | `timestamp with time zone` | YES | `—` |
| `joined_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `campaign_participants_campaign_id_user_id_key` | btree | campaign_id, user_id | ✓ |
| `campaign_participants_pkey` | btree | id | ✓ |
| `idx_campaign_participants_campaign` | btree | campaign_id | — |
| `idx_campaign_participants_completed` | btree | is_completed | — |
| `idx_campaign_participants_region_id` | btree | region_id | — |
| `idx_campaign_participants_user` | btree | user_id | — |

### Foreign Keys

- `campaign_participants_campaign_id_fkey`:
  - Columns: `campaign_id` → `promotional_campaigns(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `campaign_participants_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `cities`

> Normalized city master with geo coordinates

**Statistics:**
- Rows: ~52
- Columns: 15
- Indexes: 8
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `normalized_name` | `text` | NO | `—` |
| `state_id` | `uuid` | NO | `—` |
| `district_id` | `uuid` | YES | `—` |
| `lat` | `numeric` | YES | `—` |
| `lng` | `numeric` | YES | `—` |
| `geo_point` | `USER-DEFINED` | YES | `—` |
| `place_id` | `text` | YES | `—` |
| `population_estimate` | `integer` | YES | `—` |
| `is_metro` | `boolean` | YES | `false` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `city_tier` | `text` | YES | `'B'::text` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `cities_pkey` | btree | id | ✓ |
| `idx_cities_district` | btree | district_id | — |
| `idx_cities_geo` | gist | geo_point | — |
| `idx_cities_metro` | btree | is_metro | — |
| `idx_cities_name_trgm` | gin | name | — |
| `idx_cities_normalized_name` | btree | normalized_name | — |
| `idx_cities_state` | btree | state_id | — |
| `idx_cities_unique_name_state` | btree | normalized_name, state_id | ✓ |

### Foreign Keys

- `cities_district_id_fkey`:
  - Columns: `district_id` → `districts(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `cities_state_id_fkey`:
  - Columns: `state_id` → `states(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `comm_deferred`

**Statistics:**
- Rows: ~5
- Columns: 11
- Indexes: 2
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `recipient_id` | `uuid` | NO | `—` |
| `event_category` | `text` | NO | `—` |
| `payload` | `jsonb` | NO | `—` |
| `risk_score` | `numeric` | NO | `—` |
| `retry_count` | `integer` | NO | `0` |
| `retry_at` | `timestamp with time zone` | NO | `—` |
| `ttl_expires_at` | `timestamp with time zone` | NO | `—` |
| `status` | `text` | NO | `'pending'::text` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `comm_deferred_pkey` | btree | id | ✓ |
| `comm_deferred_retry_idx` | btree | retry_at | — |

---

## `commission_events`

**Statistics:**
- Rows: ~82
- Columns: 15
- Indexes: 4
- Foreign Keys: 4

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `transaction_id` | `uuid` | NO | `—` |
| `partner_id` | `uuid` | YES | `—` |
| `user_id` | `uuid` | NO | `—` |
| `property_id` | `uuid` | YES | `—` |
| `loan_amount` | `numeric` | NO | `—` |
| `commission_rate_snap` | `numeric` | NO | `—` |
| `commission_amount` | `numeric` | NO | `—` |
| `status` | `text` | NO | `'pending'::text` |
| `reversal_reason` | `text` | YES | `—` |
| `case_id` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |
| `loan_application_id` | `text` | YES | `—` |
| `disbursal_date` | `date` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `commission_events_partner_idx` | btree | partner_id | — |
| `commission_events_pkey` | btree | id | ✓ |
| `commission_events_transaction_idx` | btree | transaction_id | — |
| `idx_commission_events_loan_application_id` | btree | loan_application_id | ✓ |

### Foreign Keys

- `commission_events_partner_id_fkey`:
  - Columns: `partner_id` → `lending_partners(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `commission_events_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `commission_events_transaction_id_fkey`:
  - Columns: `transaction_id` → `transactions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: RESTRICT
- `commission_events_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: RESTRICT

---

## `coupon_usage`

> Track coupon redemptions by users

**Statistics:**
- Rows: ~5
- Columns: 9
- Indexes: 6
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `coupon_id` | `uuid` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `transaction_id` | `uuid` | YES | `—` |
| `discount_applied` | `numeric` | NO | `—` |
| `original_amount` | `numeric` | NO | `—` |
| `final_amount` | `numeric` | NO | `—` |
| `region_id` | `uuid` | YES | `—` |
| `used_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `coupon_usage_coupon_id_user_id_transaction_id_key` | btree | coupon_id, user_id, transaction_id | ✓ |
| `coupon_usage_pkey` | btree | id | ✓ |
| `idx_coupon_usage_coupon` | btree | coupon_id | — |
| `idx_coupon_usage_region_id` | btree | region_id | — |
| `idx_coupon_usage_transaction` | btree | transaction_id | — |
| `idx_coupon_usage_user` | btree | user_id | — |

### Foreign Keys

- `coupon_usage_coupon_id_fkey`:
  - Columns: `coupon_id` → `coupons(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `coupon_usage_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `coupons`

> Discount coupons with regional targeting

**Statistics:**
- Rows: ~5
- Columns: 23
- Indexes: 7
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `code` | `text` | NO | `—` |
| `description` | `text` | YES | `—` |
| `discount_type` | `text` | NO | `—` |
| `discount_value` | `numeric` | NO | `—` |
| `max_discount_amount` | `numeric` | YES | `—` |
| `min_purchase_amount` | `numeric` | YES | `0` |
| `region_ids` | `ARRAY` | YES | `—` |
| `excluded_region_ids` | `ARRAY` | YES | `—` |
| `applicable_to` | `ARRAY` | YES | `ARRAY['credits'::text, 'subscriptions'::text, 'services'::text]` |
| `user_type_restrictions` | `ARRAY` | YES | `—` |
| `new_users_only` | `boolean` | YES | `false` |
| `usage_limit_global` | `integer` | YES | `—` |
| `usage_limit_per_user` | `integer` | YES | `1` |
| `usage_limit_per_region` | `jsonb` | YES | `'{}'::jsonb` |
| `times_used` | `integer` | YES | `0` |
| `valid_from` | `timestamp with time zone` | YES | `now()` |
| `valid_until` | `timestamp with time zone` | YES | `—` |
| `campaign_id` | `uuid` | YES | `—` |
| `attribution_source` | `text` | YES | `—` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `coupons_code_key` | btree | code | ✓ |
| `coupons_pkey` | btree | id | ✓ |
| `idx_coupons_campaign` | btree | campaign_id | — |
| `idx_coupons_code` | btree | code | — |
| `idx_coupons_regions` | gin | region_ids | — |
| `idx_coupons_valid` | btree | valid_from, valid_until | — |
| `idx_coupons_valid_until` | btree | valid_until | — |

### Foreign Keys

- `coupons_campaign_id_fkey`:
  - Columns: `campaign_id` → `promotional_campaigns(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `credit_packages`

> Pre-paid credit packages with regional pricing variations

**Statistics:**
- Rows: ~5
- Columns: 17
- Indexes: 3
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `credits` | `integer` | NO | `—` |
| `base_price` | `numeric` | NO | `—` |
| `bonus_credits` | `integer` | YES | `0` |
| `region_id` | `uuid` | YES | `—` |
| `regional_price` | `numeric` | YES | `—` |
| `is_popular` | `boolean` | YES | `false` |
| `user_type_restriction` | `text` | YES | `—` |
| `validity_days` | `integer` | YES | `—` |
| `display_order` | `integer` | YES | `0` |
| `badge_text` | `text` | YES | `—` |
| `description` | `text` | YES | `—` |
| `features` | `ARRAY` | YES | `—` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `credit_packages_pkey` | btree | id | ✓ |
| `idx_credit_packages_active` | btree | display_order, is_active | — |
| `idx_credit_packages_region` | btree | region_id | — |

### Foreign Keys

- `credit_packages_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `districts`

> Indian districts linked to LGD state codes

**Statistics:**
- Rows: ~7
- Columns: 7
- Indexes: 6
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `lgd_code` | `character varying(10)` | NO | `—` |
| `state_id` | `uuid` | NO | `—` |
| `name` | `text` | NO | `—` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `districts_lgd_code_key` | btree | lgd_code | ✓ |
| `districts_pkey` | btree | id | ✓ |
| `idx_districts_lgd` | btree | lgd_code | — |
| `idx_districts_name` | btree | state_id, name | — |
| `idx_districts_name_trgm` | gin | name | — |
| `idx_districts_state` | btree | state_id | — |

### Foreign Keys

- `districts_state_id_fkey`:
  - Columns: `state_id` → `states(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `enquiries`

**Statistics:**
- Rows: ~218
- Columns: 12
- Indexes: 4
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_posting_id` | `uuid` | YES | `—` |
| `seeker_profile_id` | `uuid` | NO | `—` |
| `move_in_date` | `date` | NO | `—` |
| `duration_months` | `smallint` | NO | `—` |
| `room_preference` | `text` | YES | `—` |
| `message` | `text` | YES | `—` |
| `status` | `text` | NO | `'new'::text` |
| `status_updated_at` | `timestamp with time zone` | YES | `—` |
| `status_updated_by` | `uuid` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `enquiries_pkey` | btree | id | ✓ |
| `enquiries_posting_idx` | btree | pg_posting_id | — |
| `enquiries_seeker_idx` | btree | seeker_profile_id | — |
| `enquiries_status_idx` | btree | status, created_at | — |

### Foreign Keys

- `enquiries_pg_posting_fk`:
  - Columns: `pg_posting_id` → `pg_posting(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `enquiries_seeker_fk`:
  - Columns: `seeker_profile_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `enquiries_status_updated_by_fk`:
  - Columns: `status_updated_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `home_loan_consent_log`

**Statistics:**
- Rows: ~5
- Columns: 10
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `bank_id` | `text` | NO | `—` |
| `purpose` | `text` | NO | `—` |
| `consent_given_at` | `timestamp with time zone` | NO | `now()` |
| `consent_withdrawn_at` | `timestamp with time zone` | YES | `—` |
| `ip_address_hash` | `text` | YES | `—` |
| `session_id` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `partner_id` | `uuid` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `home_loan_consent_log_pkey` | btree | id | ✓ |
| `idx_hlcl_bank_id_given` | btree | bank_id, consent_given_at | — |
| `idx_hlcl_user_id` | btree | user_id, consent_given_at | — |

### Foreign Keys

- `hlcl_partner_id_fk`:
  - Columns: `partner_id` → `lending_partners(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `home_loan_consent_log_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `hot_properties`

> Real-time tracking of trending properties with high demand signals

**Statistics:**
- Rows: ~5
- Columns: 25
- Indexes: 5
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `heat_score` | `numeric` | NO | `0` |
| `views_spike_percentage` | `numeric` | YES | `—` |
| `inquiries_spike_percentage` | `numeric` | YES | `—` |
| `favorites_spike_percentage` | `numeric` | YES | `—` |
| `views_per_hour` | `numeric` | YES | `—` |
| `inquiries_per_day` | `numeric` | YES | `—` |
| `unique_viewers_per_day` | `numeric` | YES | `—` |
| `comparing_users_count` | `integer` | YES | `0` |
| `saved_by_users_count` | `integer` | YES | `0` |
| `sharing_frequency` | `numeric` | YES | `—` |
| `price_recently_reduced` | `boolean` | YES | `false` |
| `new_listing` | `boolean` | YES | `false` |
| `limited_availability` | `boolean` | YES | `false` |
| `hot_reasons` | `ARRAY` | YES | `—` |
| `heat_trend` | `text` | YES | `—` |
| `days_as_hot` | `integer` | YES | `0` |
| `peak_heat_score` | `numeric` | YES | `—` |
| `estimated_days_until_sold` | `integer` | YES | `—` |
| `probability_sold_this_week` | `numeric` | YES | `—` |
| `is_currently_hot` | `boolean` | YES | `true` |
| `became_hot_at` | `timestamp with time zone` | YES | `now()` |
| `cooled_down_at` | `timestamp with time zone` | YES | `—` |
| `calculated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `hot_properties_pkey` | btree | id | ✓ |
| `idx_hot_properties_active` | btree | heat_score, is_currently_hot | — |
| `idx_hot_properties_property` | btree | property_id | — |
| `idx_hot_properties_score` | btree | heat_score | — |
| `idx_hot_properties_trend` | btree | heat_trend | — |

### Foreign Keys

- `hot_properties_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `leave_balances`

**Statistics:**
- Rows: ~53
- Columns: 6
- Indexes: 2
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `admin_id` | `uuid` | YES | `—` |
| `leave_type_id` | `uuid` | YES | `—` |
| `year` | `integer` | NO | `—` |
| `total_credits` | `numeric` | YES | `0` |
| `used_credits` | `numeric` | YES | `0` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `leave_balances_admin_id_leave_type_id_year_key` | btree | admin_id, leave_type_id, year | ✓ |
| `leave_balances_pkey` | btree | id | ✓ |

### Foreign Keys

- `leave_balances_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `leave_balances_leave_type_id_fkey`:
  - Columns: `leave_type_id` → `leave_types(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `leave_types`

**Statistics:**
- Rows: ~5
- Columns: 6
- Indexes: 1
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `code` | `text` | NO | `—` |
| `color_code` | `text` | YES | `—` |
| `max_days` | `integer` | YES | `12` |
| `is_active` | `boolean` | YES | `true` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `leave_types_pkey` | btree | id | ✓ |

---

## `lending_partners`

**Statistics:**
- Rows: ~5
- Columns: 13
- Indexes: 1
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `dsa_reference` | `text` | YES | `—` |
| `is_active` | `boolean` | NO | `false` |
| `credential_state` | `text` | NO | `'stub'::text` |
| `health_check_url` | `text` | YES | `—` |
| `escalation_contact_name` | `text` | YES | `—` |
| `escalation_contact_phone` | `text` | YES | `—` |
| `escalation_contact_email` | `text` | YES | `—` |
| `commission_rate_percent` | `numeric` | YES | `—` |
| `data_processing_agreement_date` | `date` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `lending_partners_pkey` | btree | id | ✓ |

---

## `listing_boosts`

**Statistics:**
- Rows: ~6
- Columns: 12
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `listing_id` | `uuid` | NO | `—` |
| `purchased_by` | `uuid` | NO | `—` |
| `boost_type` | `text` | NO | `—` |
| `status` | `text` | NO | `'pending_payment'::text` |
| `amount_paid` | `numeric` | NO | `—` |
| `razorpay_order_id` | `text` | YES | `—` |
| `razorpay_payment_id` | `text` | YES | `—` |
| `boost_expires_at` | `timestamp with time zone` | YES | `—` |
| `activated_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_listing_boosts_listing_id` | btree | listing_id | — |
| `idx_listing_boosts_status` | btree | status | — |
| `listing_boosts_pkey` | btree | id | ✓ |

### Foreign Keys

- `listing_boosts_listing_id_fkey`:
  - Columns: `listing_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `listing_boosts_purchased_by_fkey`:
  - Columns: `purchased_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `loan_calculations`

**Statistics:**
- Rows: ~5
- Columns: 13
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | YES | `—` |
| `property_id` | `uuid` | YES | `—` |
| `property_price` | `numeric` | NO | `—` |
| `down_payment` | `numeric` | NO | `—` |
| `loan_amount` | `numeric` | NO | `—` |
| `interest_rate` | `numeric` | NO | `—` |
| `tenure_years` | `integer` | NO | `—` |
| `emi_amount` | `numeric` | NO | `—` |
| `total_interest` | `numeric` | YES | `—` |
| `total_amount` | `numeric` | YES | `—` |
| `calculation_data` | `jsonb` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_loan_calculations_property_id` | btree | property_id | — |
| `idx_loan_calculations_user` | btree | user_id | — |
| `loan_calculations_pkey` | btree | id | ✓ |

### Foreign Keys

- `loan_calculations_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `loan_calculations_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `localities`

> Micro-locations within cities (e.g., Koramangala, Indiranagar)

**Statistics:**
- Rows: ~115
- Columns: 28
- Indexes: 10
- Foreign Keys: 4

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `region_id` | `uuid` | YES | `—` |
| `pincode` | `text` | YES | `—` |
| `latitude` | `numeric` | YES | `—` |
| `longitude` | `numeric` | YES | `—` |
| `boundary_geojson` | `jsonb` | YES | `—` |
| `locality_type` | `text` | YES | `—` |
| `tier_rating` | `integer` | YES | `—` |
| `avg_price_per_sqft` | `numeric` | YES | `—` |
| `price_trend_6m` | `numeric` | YES | `—` |
| `price_trend_1y` | `numeric` | YES | `—` |
| `total_properties` | `integer` | YES | `0` |
| `available_properties` | `integer` | YES | `0` |
| `infrastructure_score` | `numeric` | YES | `—` |
| `connectivity_score` | `numeric` | YES | `—` |
| `safety_score` | `numeric` | YES | `—` |
| `amenities_score` | `numeric` | YES | `—` |
| `is_gated_community` | `boolean` | YES | `false` |
| `is_verified` | `boolean` | YES | `false` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `city_id` | `uuid` | YES | `—` |
| `district_id` | `uuid` | YES | `—` |
| `state_id` | `uuid` | YES | `—` |
| `normalized_name` | `text` | NO | `—` |
| `popularity_score` | `numeric` | YES | `0` |
| `source` | `text` | YES | `'system'::text` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_localities_city_new` | btree | city_id | — |
| `idx_localities_district` | btree | district_id | — |
| `idx_localities_name_trgm` | gin | name | — |
| `idx_localities_normalized` | btree | normalized_name | — |
| `idx_localities_pincode` | btree | pincode | — |
| `idx_localities_popularity` | btree | popularity_score | — |
| `idx_localities_region` | btree | region_id | — |
| `idx_localities_state_new` | btree | state_id | — |
| `idx_localities_unique_name_city` | btree | city_id, normalized_name | ✓ |
| `localities_pkey` | btree | id | ✓ |

### Foreign Keys

- `localities_city_id_fkey`:
  - Columns: `city_id` → `cities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `localities_district_id_fkey`:
  - Columns: `district_id` → `districts(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `localities_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `localities_state_id_fkey`:
  - Columns: `state_id` → `states(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `locality_amenities`

**Statistics:**
- Rows: ~20,013
- Columns: 10
- Indexes: 3
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `locality_id` | `uuid` | NO | `—` |
| `category` | `text` | NO | `—` |
| `name` | `text` | NO | `—` |
| `distance_km` | `numeric` | NO | `—` |
| `rating` | `numeric` | YES | `—` |
| `latitude` | `numeric` | YES | `—` |
| `longitude` | `numeric` | YES | `—` |
| `is_verified` | `boolean` | YES | `false` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_locality_amenities_distance` | btree | locality_id, distance_km | — |
| `idx_locality_amenities_locality` | btree | locality_id, category | — |
| `locality_amenities_pkey` | btree | id | ✓ |

### Foreign Keys

- `locality_amenities_locality_id_fkey`:
  - Columns: `locality_id` → `localities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `location_boundaries`

> Polygon boundaries for map highlighting

**Statistics:**
- Rows: ~0
- Columns: 10
- Indexes: 6
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `entity_type` | `text` | NO | `—` |
| `entity_id` | `uuid` | NO | `—` |
| `boundary` | `USER-DEFINED` | NO | `—` |
| `source` | `text` | YES | `—` |
| `confidence_score` | `numeric` | YES | `0.5` |
| `is_active` | `boolean` | YES | `true` |
| `min_zoom` | `integer` | YES | `12` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_location_boundaries_active` | btree | is_active | — |
| `idx_location_boundaries_entity` | btree | entity_type, entity_id | — |
| `idx_location_boundaries_geo` | gist | boundary | — |
| `idx_location_boundaries_unique` | btree | entity_type, entity_id, source | ✓ |
| `idx_location_boundaries_zoom` | btree | min_zoom | — |
| `location_boundaries_pkey` | btree | id | ✓ |

---

## `location_canonical_map`

> Maps user input variations to canonical localities

**Statistics:**
- Rows: ~8
- Columns: 10
- Indexes: 8
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `raw_name` | `text` | NO | `—` |
| `normalized_name` | `text` | NO | `—` |
| `locality_id` | `uuid` | YES | `—` |
| `city_id` | `uuid` | YES | `—` |
| `confidence_score` | `numeric` | YES | `0.5` |
| `usage_count` | `integer` | YES | `0` |
| `last_used_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_location_canonical_city` | btree | city_id | — |
| `idx_location_canonical_confidence` | btree | confidence_score | — |
| `idx_location_canonical_locality` | btree | locality_id | — |
| `idx_location_canonical_normalized` | btree | normalized_name | — |
| `idx_location_canonical_raw` | btree | raw_name | — |
| `idx_location_canonical_raw_trgm` | gin | raw_name | — |
| `idx_location_canonical_usage` | btree | usage_count | — |
| `location_canonical_map_pkey` | btree | id | ✓ |

### Foreign Keys

- `location_canonical_map_city_id_fkey`:
  - Columns: `city_id` → `cities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `location_canonical_map_locality_id_fkey`:
  - Columns: `locality_id` → `localities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `market_trends`

**Statistics:**
- Rows: ~80,000
- Columns: 16
- Indexes: 4
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `region_id` | `uuid` | YES | `—` |
| `locality_id` | `uuid` | YES | `—` |
| `property_type` | `text` | NO | `—` |
| `bhk_type` | `text` | YES | `—` |
| `avg_price` | `numeric` | NO | `—` |
| `median_price` | `numeric` | YES | `—` |
| `min_price` | `numeric` | YES | `—` |
| `max_price` | `numeric` | YES | `—` |
| `total_listings` | `integer` | YES | `—` |
| `sold_count` | `integer` | YES | `—` |
| `avg_time_to_sell` | `integer` | YES | `—` |
| `supply_demand_ratio` | `numeric` | YES | `—` |
| `price_change_percentage` | `numeric` | YES | `—` |
| `month_year` | `date` | NO | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_market_trends_locality` | btree | locality_id, month_year | — |
| `idx_market_trends_region` | btree | region_id, month_year | — |
| `market_trends_pkey` | btree | id | ✓ |
| `market_trends_region_id_locality_id_property_type_bhk_type__key` | btree | region_id, locality_id, property_type, bhk_type, month_year | ✓ |

### Foreign Keys

- `market_trends_locality_id_fkey`:
  - Columns: `locality_id` → `localities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `market_trends_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `mdm_aliases`

> Scope-aware alias mappings preventing cross-city conflicts

**Statistics:**
- Rows: ~10
- Columns: 19
- Indexes: 8
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `canonical_entity_id` | `uuid` | NO | `—` |
| `canonical_entity_type` | `text` | NO | `—` |
| `alias_value` | `text` | NO | `—` |
| `alias_language` | `text` | YES | `'english'::text` |
| `city_id` | `uuid` | YES | `—` |
| `district_id` | `uuid` | YES | `—` |
| `state_id` | `uuid` | YES | `—` |
| `alias_type` | `text` | YES | `'user_input'::text` |
| `alias_confidence` | `numeric` | YES | `—` |
| `status` | `text` | YES | `'active'::text` |
| `retired_reason` | `text` | YES | `—` |
| `retired_at` | `timestamp with time zone` | YES | `—` |
| `canonical_resolution_count` | `integer` | YES | `0` |
| `last_used_at` | `timestamp with time zone` | YES | `—` |
| `created_by` | `uuid` | YES | `—` |
| `approved_by` | `uuid` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_mdm_aliases_canonical` | btree | canonical_entity_id, canonical_entity_type | — |
| `idx_mdm_aliases_status` | btree | status | — |
| `idx_mdm_aliases_usage` | btree | canonical_resolution_count | — |
| `idx_mdm_aliases_value` | btree | alias_value | — |
| `idx_mdm_aliases_value_trgm` | gin | alias_value | — |
| `mdm_aliases_city_unique` | btree | canonical_entity_type, alias_value, alias_language, city_id | ✓ |
| `mdm_aliases_national_unique` | btree | canonical_entity_type, alias_value, alias_language | ✓ |
| `mdm_aliases_pkey` | btree | id | ✓ |

---

## `mdm_audit_logs`

> Complete audit trail for MDM operations

**Statistics:**
- Rows: ~13
- Columns: 13
- Indexes: 4
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `admin_id` | `uuid` | YES | `—` |
| `admin_email` | `text` | YES | `—` |
| `action` | `text` | NO | `—` |
| `entity_id` | `uuid` | YES | `—` |
| `entity_type` | `text` | YES | `—` |
| `request_id` | `uuid` | YES | `—` |
| `changes` | `jsonb` | YES | `—` |
| `reason` | `text` | YES | `—` |
| `affected_count` | `integer` | YES | `0` |
| `ip_address` | `text` | YES | `—` |
| `user_agent` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_mdm_audit_action` | btree | action, created_at | — |
| `idx_mdm_audit_admin` | btree | admin_id, created_at | — |
| `idx_mdm_audit_created` | btree | created_at | — |
| `mdm_audit_logs_pkey` | btree | id | ✓ |

---

## `mdm_curation_requests`

> MDM curation request queue with SLA tracking

**Statistics:**
- Rows: ~6
- Columns: 40
- Indexes: 6
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `request_type` | `text` | NO | `—` |
| `entity_type` | `text` | NO | `—` |
| `submitted_value` | `text` | NO | `—` |
| `submitted_by` | `text` | YES | `—` |
| `submitted_from` | `text` | YES | `—` |
| `submission_context` | `jsonb` | YES | `—` |
| `city_id` | `uuid` | YES | `—` |
| `district_id` | `uuid` | YES | `—` |
| `state_id` | `uuid` | YES | `—` |
| `potential_matches` | `jsonb` | YES | `—` |
| `suggested_canonical_id` | `uuid` | YES | `—` |
| `suggested_canonical_type` | `text` | YES | `—` |
| `match_confidence` | `numeric` | YES | `—` |
| `detection_algorithm` | `text` | YES | `—` |
| `lgd_conflict` | `boolean` | YES | `false` |
| `lgd_official_name` | `text` | YES | `—` |
| `lgd_code` | `text` | YES | `—` |
| `rera_conflict` | `boolean` | YES | `false` |
| `rera_official_name` | `text` | YES | `—` |
| `rera_id` | `text` | YES | `—` |
| `geo_conflict` | `boolean` | YES | `false` |
| `geo_conflict_details` | `jsonb` | YES | `—` |
| `impact_score_snapshot` | `numeric` | YES | `—` |
| `impact_components_snapshot` | `jsonb` | YES | `—` |
| `priority` | `text` | YES | `'medium'::text` |
| `sla_deadline` | `timestamp with time zone` | YES | `—` |
| `sla_hours_assigned` | `integer` | YES | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `escalated_to_service` | `text` | YES | `—` |
| `escalation_reason` | `text` | YES | `—` |
| `resolved_by` | `text` | YES | `—` |
| `resolved_at` | `timestamp with time zone` | YES | `—` |
| `resolution_action` | `text` | YES | `—` |
| `resolution_notes` | `text` | YES | `—` |
| `created_alias_id` | `uuid` | YES | `—` |
| `merged_into_entity_id` | `uuid` | YES | `—` |
| `merged_into_entity_type` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_mdm_requests_entity` | btree | entity_type, status | — |
| `idx_mdm_requests_priority` | btree | priority, sla_deadline | — |
| `idx_mdm_requests_sla` | btree | sla_deadline | — |
| `idx_mdm_requests_status` | btree | status | — |
| `idx_mdm_requests_submitted` | btree | submitted_value | — |
| `mdm_curation_requests_pkey` | btree | id | ✓ |

---

## `mdm_merge_history`

> Merge operation history with reversal tracking

**Statistics:**
- Rows: ~5
- Columns: 12
- Indexes: 3
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `source_entity_id` | `uuid` | NO | `—` |
| `target_entity_id` | `uuid` | NO | `—` |
| `entity_type` | `text` | NO | `—` |
| `merge_reason` | `text` | YES | `—` |
| `reversal_strategy` | `text` | NO | `—` |
| `affected_properties_count` | `integer` | YES | `0` |
| `executed_by` | `uuid` | YES | `—` |
| `executed_at` | `timestamp with time zone` | YES | `now()` |
| `reversed_at` | `timestamp with time zone` | YES | `—` |
| `reversed_by` | `uuid` | YES | `—` |
| `reversal_notes` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_mdm_merge_executed` | btree | executed_at | — |
| `idx_mdm_merge_source` | btree | source_entity_id, entity_type | — |
| `mdm_merge_history_pkey` | btree | id | ✓ |

---

## `messages`

**Statistics:**
- Rows: ~5
- Columns: 21
- Indexes: 5
- Foreign Keys: 5

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `sender_id` | `uuid` | NO | `—` |
| `receiver_id` | `uuid` | NO | `—` |
| `property_id` | `uuid` | YES | `—` |
| `subject` | `text` | YES | `—` |
| `message` | `text` | NO | `—` |
| `message_type` | `text` | YES | `'inquiry'::text` |
| `is_read` | `boolean` | YES | `false` |
| `is_important` | `boolean` | YES | `false` |
| `is_archived` | `boolean` | YES | `false` |
| `read_at` | `timestamp with time zone` | YES | `—` |
| `appointment_date` | `date` | YES | `—` |
| `appointment_time` | `time without time zone` | YES | `—` |
| `appointment_status` | `text` | YES | `—` |
| `ip_address` | `inet` | YES | `—` |
| `user_agent` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `lead_id` | `uuid` | YES | `—` |
| `parent_message_id` | `uuid` | YES | `—` |
| `attachments` | `ARRAY` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_messages_lead_id` | btree | lead_id | — |
| `idx_messages_parent_message_id` | btree | parent_message_id | — |
| `idx_messages_property` | btree | property_id | — |
| `idx_messages_sender_receiver` | btree | sender_id, receiver_id | — |
| `messages_pkey` | btree | id | ✓ |

### Foreign Keys

- `messages_lead_id_fkey`:
  - Columns: `lead_id` → `property_leads(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `messages_parent_message_id_fkey`:
  - Columns: `parent_message_id` → `messages(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `messages_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `messages_receiver_id_fkey`:
  - Columns: `receiver_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `messages_sender_id_fkey`:
  - Columns: `sender_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `moderation_history`

**Statistics:**
- Rows: ~12
- Columns: 11
- Indexes: 6
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `admin_id` | `uuid` | NO | `—` |
| `action` | `text` | NO | `—` |
| `reason` | `text` | YES | `—` |
| `notes` | `text` | YES | `—` |
| `checklist` | `jsonb` | YES | `—` |
| `previous_state` | `text` | YES | `—` |
| `new_state` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `case_id` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_moderation_history_action` | btree | action | — |
| `idx_moderation_history_admin_created_at` | btree | admin_id, created_at | — |
| `idx_moderation_history_admin_id` | btree | admin_id | — |
| `idx_moderation_history_created_at_desc` | btree | created_at | — |
| `idx_moderation_history_property_id` | btree | property_id | — |
| `moderation_history_pkey` | btree | id | ✓ |

### Foreign Keys

- `moderation_history_admin_id_fkey`:
  - Columns: `admin_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `moderation_history_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `notification_preferences`

**Statistics:**
- Rows: ~5
- Columns: 13
- Indexes: 1
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `user_id` | `uuid` | NO | `—` |
| `email_enabled` | `boolean` | YES | `true` |
| `sms_enabled` | `boolean` | YES | `true` |
| `push_enabled` | `boolean` | YES | `true` |
| `whatsapp_enabled` | `boolean` | YES | `false` |
| `new_properties` | `boolean` | YES | `true` |
| `price_drops` | `boolean` | YES | `true` |
| `saved_search_matches` | `boolean` | YES | `true` |
| `property_updates` | `boolean` | YES | `true` |
| `promotional` | `boolean` | YES | `true` |
| `newsletter` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `notification_preferences_pkey` | btree | user_id | ✓ |

### Foreign Keys

- `notification_preferences_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `notifications`

**Statistics:**
- Rows: ~16
- Columns: 10
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `notification_type` | `text` | NO | `—` |
| `title` | `text` | NO | `—` |
| `message` | `text` | NO | `—` |
| `data` | `jsonb` | YES | `—` |
| `is_read` | `boolean` | YES | `false` |
| `is_archived` | `boolean` | YES | `false` |
| `read_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_notifications_user_unread` | btree | user_id, is_read | — |
| `notifications_pkey` | btree | id | ✓ |

### Foreign Keys

- `notifications_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `overtime_records`

**Statistics:**
- Rows: ~5
- Columns: 8
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `admin_id` | `uuid` | YES | `—` |
| `date` | `date` | NO | `—` |
| `hours` | `numeric` | NO | `—` |
| `reason` | `text` | YES | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `approved_by` | `uuid` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_overtime_records_admin_id` | btree | admin_id | — |
| `idx_overtime_records_approved_by` | btree | approved_by | — |
| `overtime_records_pkey` | btree | id | ✓ |

### Foreign Keys

- `overtime_records_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `overtime_records_approved_by_fkey`:
  - Columns: `approved_by` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `permissions`

**Statistics:**
- Rows: ~62
- Columns: 6
- Indexes: 4
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `domain` | `USER-DEFINED` | NO | `—` |
| `action` | `USER-DEFINED` | NO | `—` |
| `scope` | `USER-DEFINED` | NO | `—` |
| `usage_condition` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `permission_unique` | btree | domain, action, scope | ✓ |
| `permissions_id_key` | btree | id | ✓ |
| `permissions_name_key` | btree | name | ✓ |
| `permissions_pkey` | btree | id | ✓ |

---

## `pg_bed`

**Statistics:**
- Rows: ~69
- Columns: 8
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_room_id` | `uuid` | NO | `—` |
| `bed_label` | `text` | YES | `—` |
| `is_available` | `boolean` | NO | `true` |
| `monthly_rent` | `numeric` | NO | `—` |
| `advance_deposit` | `numeric` | NO | `0` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `food_charge` | `numeric` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_bed_pg_room_id` | btree | pg_room_id | — |
| `pg_bed_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_bed_pg_room_id_fkey`:
  - Columns: `pg_room_id` → `pg_room(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_occupancy`

**Statistics:**
- Rows: ~5
- Columns: 8
- Indexes: 4
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `pg_bed_id` | `uuid` | NO | `—` |
| `pg_tenant_id` | `uuid` | YES | `—` |
| `occupied_from` | `date` | NO | `—` |
| `occupied_until` | `date` | YES | `—` |
| `is_current` | `boolean` | NO | `true` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_occupancy_pg_bed_id` | btree | pg_bed_id | — |
| `idx_pg_occupancy_pg_property_id` | btree | pg_property_id | — |
| `idx_pg_occupancy_pg_tenant_id` | btree | pg_tenant_id | — |
| `pg_occupancy_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_occupancy_pg_bed_id_fkey`:
  - Columns: `pg_bed_id` → `pg_bed(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `pg_occupancy_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `pg_occupancy_pg_tenant_id_fkey`:
  - Columns: `pg_tenant_id` → `pg_tenant(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `pg_occupancy_snapshot`

**Statistics:**
- Rows: ~5
- Columns: 7
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `snapshot_date` | `date` | NO | `CURRENT_DATE` |
| `total_beds` | `integer` | NO | `0` |
| `occupied_beds` | `integer` | NO | `0` |
| `available_beds` | `integer` | NO | `0` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `pg_occupancy_snapshot_pkey` | btree | id | ✓ |
| `pg_occupancy_snapshot_unique_date` | btree | pg_property_id, snapshot_date | ✓ |

### Foreign Keys

- `pg_occupancy_snapshot_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_owner_pnl`

**Statistics:**
- Rows: ~5
- Columns: 10
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `snapshot_month` | `date` | NO | `—` |
| `total_beds` | `integer` | NO | `0` |
| `occupied_beds` | `integer` | NO | `0` |
| `occupancy_rate` | `numeric` | YES | `—` |
| `gross_rent_expected` | `numeric` | NO | `0` |
| `gross_rent_received` | `numeric` | NO | `0` |
| `collection_rate` | `numeric` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `pg_owner_pnl_pkey` | btree | id | ✓ |
| `pg_owner_pnl_unique_month` | btree | pg_property_id, snapshot_month | ✓ |

### Foreign Keys

- `pg_owner_pnl_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_payment_record`

**Statistics:**
- Rows: ~7
- Columns: 16
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `pg_tenant_id` | `uuid` | NO | `—` |
| `amount` | `numeric` | NO | `—` |
| `payment_type` | `text` | NO | `—` |
| `payment_month` | `date` | YES | `—` |
| `payment_date` | `date` | NO | `CURRENT_DATE` |
| `payment_method` | `text` | YES | `—` |
| `gateway_txn_id` | `text` | YES | `—` |
| `notes` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `rent_due_date` | `date` | YES | `—` |
| `reminder_d3_sent_at` | `timestamp with time zone` | YES | `—` |
| `reminder_d8_sent_at` | `timestamp with time zone` | YES | `—` |
| `reminder_d15_sent_at` | `timestamp with time zone` | YES | `—` |
| `gst_status` | `text` | NO | `'taxable'::text` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_payment_record_pg_tenant_id` | btree | pg_tenant_id | — |
| `idx_pg_payment_record_property` | btree | pg_property_id, payment_date | — |
| `pg_payment_record_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_payment_record_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `pg_payment_record_pg_tenant_id_fkey`:
  - Columns: `pg_tenant_id` → `pg_tenant(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `pg_police_verification`

**Statistics:**
- Rows: ~5
- Columns: 8
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `pg_tenant_id` | `uuid` | NO | `—` |
| `submitted_at` | `timestamp with time zone` | NO | `now()` |
| `verified_at` | `timestamp with time zone` | YES | `—` |
| `status` | `text` | NO | `'pending'::text` |
| `document_url` | `text` | YES | `—` |
| `notes` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_police_verification_pg_property_id` | btree | pg_property_id | — |
| `idx_pg_police_verification_pg_tenant_id` | btree | pg_tenant_id | — |
| `pg_police_verification_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_police_verification_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `pg_police_verification_pg_tenant_id_fkey`:
  - Columns: `pg_tenant_id` → `pg_tenant(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `pg_posting`

**Statistics:**
- Rows: ~218
- Columns: 19
- Indexes: 3
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `listing_type` | `USER-DEFINED` | NO | `'PG'::listing_type` |
| `title` | `text` | NO | `—` |
| `description` | `text` | YES | `—` |
| `photos` | `jsonb` | NO | `'[]'::jsonb` |
| `price_per_bed` | `numeric` | NO | `—` |
| `available_beds` | `integer` | NO | `0` |
| `available_from` | `date` | NO | `—` |
| `posting_pack` | `text` | YES | `—` |
| `posting_expires_at` | `timestamp with time zone` | YES | `—` |
| `status` | `text` | NO | `'draft'::text` |
| `rejection_reason` | `text` | YES | `—` |
| `boost_active` | `boolean` | NO | `false` |
| `views_count` | `integer` | NO | `0` |
| `leads_count` | `integer` | NO | `0` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |
| `last_confirmed_at` | `timestamp with time zone` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_posting_property` | btree | pg_property_id, status | — |
| `idx_pg_posting_status` | btree | available_from, status | — |
| `pg_posting_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_posting_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_posting_packs`

> E13 posting credit balance for PG owners. One row per profile. postings_remaining decremented atomically on pg_posting creation.

**Statistics:**
- Rows: ~5
- Columns: 8
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `profile_id` | `uuid` | NO | `—` |
| `postings_remaining` | `integer` | NO | `0` |
| `last_pack_type` | `text` | YES | `—` |
| `last_purchased_at` | `timestamp with time zone` | YES | `—` |
| `last_order_id` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `pg_posting_packs_pkey` | btree | id | ✓ |
| `pg_posting_packs_profile_unique` | btree | profile_id | ✓ |

### Foreign Keys

- `pg_posting_packs_profile_id_fkey`:
  - Columns: `profile_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_property`

**Statistics:**
- Rows: ~218
- Columns: 18
- Indexes: 4
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `owner_id` | `uuid` | NO | `—` |
| `name` | `text` | NO | `—` |
| `address_line` | `text` | NO | `—` |
| `locality` | `text` | NO | `—` |
| `city` | `text` | NO | `'Bengaluru'::text` |
| `pincode` | `text` | YES | `—` |
| `latitude` | `numeric` | YES | `—` |
| `longitude` | `numeric` | YES | `—` |
| `gender_preference` | `text` | NO | `'any'::text` |
| `property_type` | `text` | NO | `'pg'::text` |
| `total_capacity` | `integer` | NO | `1` |
| `amenities` | `jsonb` | NO | `'[]'::jsonb` |
| `house_rules` | `text` | YES | `—` |
| `police_verified` | `boolean` | NO | `false` |
| `listing_status` | `text` | NO | `'draft'::text` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_property_locality` | btree | locality, city | — |
| `idx_pg_property_owner` | btree | owner_id | — |
| `idx_pg_property_status` | btree | listing_status | — |
| `pg_property_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_property_owner_id_fkey`:
  - Columns: `owner_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_receipt`

**Statistics:**
- Rows: ~7
- Columns: 11
- Indexes: 3
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_payment_record_id` | `uuid` | NO | `—` |
| `receipt_number` | `text` | NO | `—` |
| `issued_at` | `timestamp with time zone` | NO | `now()` |
| `pdf_url` | `text` | YES | `—` |
| `payment_period` | `text` | YES | `—` |
| `payment_mode` | `text` | YES | `—` |
| `upi_reference` | `text` | YES | `—` |
| `gst_status` | `text` | NO | `'taxable'::text` |
| `owner_display_name` | `text` | YES | `—` |
| `owner_pan_stub` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_receipt_pg_payment_record_id` | btree | pg_payment_record_id | — |
| `pg_receipt_pkey` | btree | id | ✓ |
| `pg_receipt_receipt_number_key` | btree | receipt_number | ✓ |

### Foreign Keys

- `pg_receipt_pg_payment_record_id_fkey`:
  - Columns: `pg_payment_record_id` → `pg_payment_record(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_rent_agreement`

**Statistics:**
- Rows: ~5
- Columns: 13
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `pg_tenant_id` | `uuid` | NO | `—` |
| `agreement_start` | `date` | NO | `—` |
| `agreement_end` | `date` | YES | `—` |
| `monthly_rent` | `numeric` | NO | `—` |
| `deposit_amount` | `numeric` | NO | `0` |
| `notice_period_days` | `integer` | NO | `30` |
| `signed_by_owner` | `boolean` | NO | `false` |
| `signed_by_tenant` | `boolean` | NO | `false` |
| `signed_at` | `timestamp with time zone` | YES | `—` |
| `document_url` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_rent_agreement_pg_property_id` | btree | pg_property_id | — |
| `idx_pg_rent_agreement_pg_tenant_id` | btree | pg_tenant_id | — |
| `pg_rent_agreement_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_rent_agreement_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `pg_rent_agreement_pg_tenant_id_fkey`:
  - Columns: `pg_tenant_id` → `pg_tenant(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `pg_room`

**Statistics:**
- Rows: ~32
- Columns: 9
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `room_number` | `text` | YES | `—` |
| `room_type` | `text` | NO | `'shared'::text` |
| `capacity` | `integer` | NO | `1` |
| `floor_number` | `integer` | YES | `—` |
| `has_attached_bath` | `boolean` | NO | `false` |
| `amenities` | `jsonb` | NO | `'[]'::jsonb` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_room_pg_property_id` | btree | pg_property_id | — |
| `pg_room_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_room_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_seeker_preferences`

**Statistics:**
- Rows: ~5
- Columns: 8
- Indexes: 1
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `profile_id` | `uuid` | NO | `—` |
| `preferred_city` | `text` | YES | `—` |
| `preferred_localities` | `ARRAY` | YES | `—` |
| `gender_policy` | `text` | YES | `—` |
| `max_budget` | `integer` | YES | `—` |
| `move_in_window` | `text` | YES | `—` |
| `sharing_preference` | `text` | YES | `—` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `pg_seeker_preferences_pkey` | btree | profile_id | ✓ |

### Foreign Keys

- `pgsp_profile_fk`:
  - Columns: `profile_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pg_tenant`

**Statistics:**
- Rows: ~5
- Columns: 20
- Indexes: 4
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_property_id` | `uuid` | NO | `—` |
| `pg_bed_id` | `uuid` | YES | `—` |
| `user_id` | `uuid` | YES | `—` |
| `tenant_name` | `text` | NO | `—` |
| `phone` | `text` | YES | `—` |
| `emergency_contact` | `text` | YES | `—` |
| `id_type` | `text` | YES | `—` |
| `id_verified` | `boolean` | NO | `false` |
| `move_in_date` | `date` | NO | `—` |
| `move_out_date` | `date` | YES | `—` |
| `status` | `text` | NO | `'active'::text` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `rent_amount` | `numeric` | YES | `—` |
| `rent_due_day` | `integer` | YES | `—` |
| `payment_status` | `text` | NO | `'pending'::text` |
| `lease_end_date` | `date` | YES | `—` |
| `whatsapp_opt_in` | `boolean` | NO | `false` |
| `ndc_url` | `text` | YES | `—` |
| `deposit_photo_url` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_tenant_pg_bed_id` | btree | pg_bed_id | — |
| `idx_pg_tenant_property` | btree | pg_property_id, status | — |
| `idx_pg_tenant_user_id` | btree | user_id | — |
| `pg_tenant_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_tenant_pg_bed_id_fkey`:
  - Columns: `pg_bed_id` → `pg_bed(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `pg_tenant_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `pg_tenant_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `pg_vacancy_event`

**Statistics:**
- Rows: ~5
- Columns: 9
- Indexes: 3
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pg_bed_id` | `uuid` | NO | `—` |
| `pg_property_id` | `uuid` | NO | `—` |
| `event_type` | `text` | NO | `—` |
| `available_from` | `date` | NO | `—` |
| `monthly_rent` | `numeric` | YES | `—` |
| `notes` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `created_pg_posting_id` | `uuid` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pg_vacancy_event_pg_bed_id` | btree | pg_bed_id | — |
| `idx_pg_vacancy_event_property` | btree | pg_property_id, created_at | — |
| `pg_vacancy_event_pkey` | btree | id | ✓ |

### Foreign Keys

- `pg_vacancy_event_pg_bed_id_fkey`:
  - Columns: `pg_bed_id` → `pg_bed(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `pg_vacancy_event_pg_property_id_fkey`:
  - Columns: `pg_property_id` → `pg_property(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `pgve_created_pg_posting_id_fk`:
  - Columns: `created_pg_posting_id` → `pg_posting(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `pincodes`

> Indian postal codes with geographic links

**Statistics:**
- Rows: ~8
- Columns: 10
- Indexes: 5
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `pincode` | `character(6)` | NO | `—` |
| `city_id` | `uuid` | NO | `—` |
| `district_id` | `uuid` | YES | `—` |
| `state_id` | `uuid` | NO | `—` |
| `lat` | `numeric` | YES | `—` |
| `lng` | `numeric` | YES | `—` |
| `geo_point` | `USER-DEFINED` | YES | `—` |
| `delivery_status` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pincodes_city` | btree | city_id | — |
| `idx_pincodes_district` | btree | district_id | — |
| `idx_pincodes_geo` | gist | geo_point | — |
| `idx_pincodes_state` | btree | state_id | — |
| `pincodes_pkey` | btree | pincode | ✓ |

### Foreign Keys

- `pincodes_city_id_fkey`:
  - Columns: `city_id` → `cities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `pincodes_district_id_fkey`:
  - Columns: `district_id` → `districts(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `pincodes_state_id_fkey`:
  - Columns: `state_id` → `states(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `pricing_rules`

> Dynamic pricing rules based on action, region, and user type

**Statistics:**
- Rows: ~31
- Columns: 14
- Indexes: 4
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `action` | `text` | NO | `—` |
| `credit_cost` | `integer` | NO | `—` |
| `cash_price` | `numeric` | YES | `—` |
| `region_id` | `uuid` | YES | `—` |
| `user_type` | `text` | YES | `—` |
| `discount_percentage` | `numeric` | YES | `0` |
| `surge_pricing_multiplier` | `numeric` | YES | `1.0` |
| `effective_from` | `timestamp with time zone` | YES | `now()` |
| `effective_until` | `timestamp with time zone` | YES | `—` |
| `description` | `text` | YES | `—` |
| `is_active` | `boolean` | YES | `true` |
| `priority` | `integer` | YES | `0` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_pricing_rules_action` | btree | action | — |
| `idx_pricing_rules_effective` | btree | effective_from, effective_until | — |
| `idx_pricing_rules_region_action` | btree | action, region_id, is_active | — |
| `pricing_rules_pkey` | btree | id | ✓ |

### Foreign Keys

- `pricing_rules_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `profiles`

**Statistics:**
- Rows: ~1,650
- Columns: 48
- Indexes: 12
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `—` |
| `username` | `text` | YES | `—` |
| `full_name` | `text` | YES | `—` |
| `email` | `text` | YES | `—` |
| `phone` | `text` | YES | `—` |
| `avatar_url` | `text` | YES | `—` |
| `user_type` | `text` | YES | `'buyer'::text` |
| `role` | `text` | YES | `'user'::text` |
| `bio` | `text` | YES | `—` |
| `company_name` | `text` | YES | `—` |
| `license_number` | `text` | YES | `—` |
| `years_experience` | `integer` | YES | `0` |
| `specialties` | `ARRAY` | YES | `—` |
| `languages` | `ARRAY` | YES | `—` |
| `is_verified` | `boolean` | YES | `false` |
| `is_featured` | `boolean` | YES | `false` |
| `account_status` | `text` | YES | `'active'::text` |
| `website_url` | `text` | YES | `—` |
| `social_links` | `jsonb` | YES | `—` |
| `office_address` | `text` | YES | `—` |
| `office_city` | `text` | YES | `—` |
| `office_state` | `text` | YES | `—` |
| `office_pincode` | `text` | YES | `—` |
| `properties_listed` | `integer` | YES | `0` |
| `properties_sold` | `integer` | YES | `0` |
| `total_ratings` | `integer` | YES | `0` |
| `average_rating` | `numeric` | YES | `0` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `last_login` | `timestamp with time zone` | YES | `—` |
| `last_active` | `timestamp with time zone` | YES | `—` |
| `whatsapp_verified` | `boolean` | YES | `false` |
| `email_verified` | `boolean` | YES | `false` |
| `phone_verified` | `boolean` | YES | `false` |
| `kyc_status` | `text` | YES | `'not_submitted'::text` |
| `kyc_documents` | `jsonb` | YES | `—` |
| `preferred_localities` | `ARRAY` | YES | `—` |
| `search_preferences` | `jsonb` | YES | `—` |
| `total_inquiries_sent` | `integer` | YES | `0` |
| `total_views_received` | `integer` | YES | `0` |
| `response_time_hours` | `integer` | YES | `—` |
| `response_rate` | `numeric` | YES | `—` |
| `professional_type` | `text` | YES | `—` |
| `is_rera_registered` | `boolean` | YES | `false` |
| `rera_registration_number` | `text` | YES | `—` |
| `rera_validity_date` | `date` | YES | `—` |
| `terms_accepted_at` | `timestamp with time zone` | YES | `—` |
| `privacy_consent_version` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_profiles_account_status` | btree | account_status | — |
| `idx_profiles_created_at_desc` | btree | created_at | — |
| `idx_profiles_id_role` | btree | id, role | — |
| `idx_profiles_is_verified` | btree | is_verified | — |
| `idx_profiles_kyc_status` | btree | kyc_status | — |
| `idx_profiles_rera` | btree | rera_registration_number | — |
| `idx_profiles_role` | btree | role | — |
| `idx_profiles_type_verified` | btree | user_type, is_verified | — |
| `idx_profiles_user_type` | btree | user_type | — |
| `profiles_email_key` | btree | email | ✓ |
| `profiles_pkey` | btree | id | ✓ |
| `profiles_username_key` | btree | username | ✓ |

---

## `projects`

**Statistics:**
- Rows: ~5
- Columns: 39
- Indexes: 9
- Foreign Keys: 5

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `builder_id` | `uuid` | NO | `—` |
| `name` | `text` | NO | `—` |
| `slug` | `text` | YES | `—` |
| `description` | `text` | YES | `—` |
| `project_type` | `text` | YES | `—` |
| `status` | `text` | YES | `—` |
| `rera_number` | `text` | YES | `—` |
| `location` | `text` | NO | `—` |
| `city` | `text` | NO | `—` |
| `state` | `text` | NO | `—` |
| `locality_id` | `uuid` | YES | `—` |
| `latitude` | `numeric` | YES | `—` |
| `longitude` | `numeric` | YES | `—` |
| `total_units` | `integer` | YES | `—` |
| `available_units` | `integer` | YES | `—` |
| `total_towers` | `integer` | YES | `—` |
| `total_floors` | `integer` | YES | `—` |
| `launch_date` | `date` | YES | `—` |
| `possession_date` | `date` | YES | `—` |
| `price_range_min` | `numeric` | YES | `—` |
| `price_range_max` | `numeric` | YES | `—` |
| `configurations` | `ARRAY` | YES | `—` |
| `area_range_min` | `numeric` | YES | `—` |
| `area_range_max` | `numeric` | YES | `—` |
| `amenities` | `ARRAY` | YES | `—` |
| `images` | `ARRAY` | YES | `—` |
| `brochure_url` | `text` | YES | `—` |
| `video_url` | `text` | YES | `—` |
| `view_count` | `integer` | YES | `0` |
| `inquiry_count` | `integer` | YES | `0` |
| `is_featured` | `boolean` | YES | `false` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `city_id` | `uuid` | YES | `—` |
| `district_id` | `uuid` | YES | `—` |
| `state_id` | `uuid` | YES | `—` |
| `geo_point` | `USER-DEFINED` | YES | `—` |
| `geo_quality_score` | `numeric` | YES | `0` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_projects_builder` | btree | builder_id | — |
| `idx_projects_city` | btree | status, city | — |
| `idx_projects_city_new` | btree | city_id | — |
| `idx_projects_district` | btree | district_id | — |
| `idx_projects_geo_point` | gist | geo_point | — |
| `idx_projects_locality` | btree | locality_id | — |
| `idx_projects_state` | btree | state_id | — |
| `projects_pkey` | btree | id | ✓ |
| `projects_slug_key` | btree | slug | ✓ |

### Foreign Keys

- `projects_builder_id_fkey`:
  - Columns: `builder_id` → `builders(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `projects_city_id_fkey`:
  - Columns: `city_id` → `cities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `projects_district_id_fkey`:
  - Columns: `district_id` → `districts(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `projects_locality_id_fkey`:
  - Columns: `locality_id` → `localities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `projects_state_id_fkey`:
  - Columns: `state_id` → `states(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `promotional_campaigns`

> Marketing campaigns with regional focus

**Statistics:**
- Rows: ~5
- Columns: 19
- Indexes: 4
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `description` | `text` | YES | `—` |
| `campaign_type` | `text` | YES | `—` |
| `region_ids` | `ARRAY` | YES | `—` |
| `language_preference` | `ARRAY` | YES | `—` |
| `credits_reward` | `integer` | YES | `—` |
| `discount_percentage` | `numeric` | YES | `—` |
| `free_services` | `ARRAY` | YES | `—` |
| `conditions` | `jsonb` | YES | `'{}'::jsonb` |
| `budget_allocated` | `numeric` | YES | `—` |
| `budget_spent` | `numeric` | YES | `0` |
| `participant_limit` | `integer` | YES | `—` |
| `current_participants` | `integer` | YES | `0` |
| `valid_from` | `timestamp with time zone` | YES | `now()` |
| `valid_until` | `timestamp with time zone` | YES | `—` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_campaigns_active` | btree | valid_until, is_active | — |
| `idx_campaigns_regions` | gin | region_ids | — |
| `idx_campaigns_type` | btree | campaign_type | — |
| `promotional_campaigns_pkey` | btree | id | ✓ |

---

## `properties`

**Statistics:**
- Rows: ~35
- Columns: 137
- Indexes: 47
- Foreign Keys: 11

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `pid` | `text` | NO | `—` |
| `user_id` | `uuid` | NO | `—` |
| `agent_id` | `uuid` | YES | `—` |
| `agency_id` | `uuid` | YES | `—` |
| `title` | `text` | NO | `—` |
| `slug` | `text` | YES | `—` |
| `description` | `text` | YES | `—` |
| `property_type` | `text` | NO | `—` |
| `listing_type` | `text` | NO | `'sale'::text` |
| `bhk_type` | `text` | YES | `—` |
| `ownership_type` | `text` | YES | `—` |
| `price` | `numeric` | NO | `—` |
| `price_negotiable` | `boolean` | YES | `false` |
| `maintenance_cost` | `numeric` | YES | `—` |
| `under_loan` | `boolean` | YES | `false` |
| `expected_price` | `numeric` | YES | `—` |
| `price_per_unit_area` | `numeric` | YES | `—` |
| `built_up_area` | `numeric` | YES | `—` |
| `carpet_area` | `numeric` | YES | `—` |
| `plot_area` | `numeric` | YES | `—` |
| `super_built_up_area` | `numeric` | YES | `—` |
| `area_unit` | `text` | NO | `'sqft'::text` |
| `address` | `text` | YES | `—` |
| `landmark` | `text` | YES | `—` |
| `city` | `text` | NO | `—` |
| `locality` | `text` | NO | `—` |
| `state` | `text` | YES | `—` |
| `pincode` | `text` | YES | `—` |
| `country` | `text` | YES | `'India'::text` |
| `latitude` | `numeric` | YES | `—` |
| `longitude` | `numeric` | YES | `—` |
| `google_place_id` | `text` | YES | `—` |
| `bedrooms` | `integer` | YES | `—` |
| `bathrooms` | `integer` | YES | `—` |
| `balcony_count` | `integer` | YES | `0` |
| `total_floors` | `integer` | YES | `—` |
| `floor_number` | `integer` | YES | `—` |
| `floor_type` | `text` | YES | `—` |
| `property_age` | `text` | YES | `—` |
| `year_built` | `integer` | YES | `—` |
| `possession_year` | `integer` | YES | `—` |
| `facing` | `text` | YES | `—` |
| `age_of_construction` | `integer` | YES | `—` |
| `furnishing` | `text` | YES | `—` |
| `kitchen_type` | `text` | YES | `—` |
| `flooring_type` | `text` | YES | `—` |
| `overlooking` | `text` | YES | `—` |
| `rera_registration` | `text` | YES | `—` |
| `khata_certificate` | `boolean` | YES | `false` |
| `allotment_letter` | `boolean` | YES | `false` |
| `sale_deed_certificate` | `boolean` | YES | `false` |
| `property_tax_paid` | `boolean` | YES | `false` |
| `occupancy_certificate` | `boolean` | YES | `false` |
| `lease_years` | `integer` | YES | `—` |
| `available_from` | `date` | YES | `—` |
| `availability_schedule` | `text` | YES | `—` |
| `available_start_time` | `time without time zone` | YES | `—` |
| `available_end_time` | `time without time zone` | YES | `—` |
| `show_property_by` | `text` | YES | `—` |
| `contact_phone` | `text` | NO | `—` |
| `secondary_phone` | `text` | YES | `—` |
| `contact_email` | `text` | YES | `—` |
| `whatsapp_number` | `text` | YES | `—` |
| `property_code` | `text` | YES | `—` |
| `apartment_name` | `text` | YES | `—` |
| `developer_name` | `text` | YES | `—` |
| `project_name` | `text` | YES | `—` |
| `builder_name` | `text` | YES | `—` |
| `status` | `text` | YES | `'draft'::text` |
| `is_active` | `boolean` | YES | `true` |
| `is_featured` | `boolean` | YES | `false` |
| `is_verified` | `boolean` | YES | `false` |
| `is_premium` | `boolean` | YES | `false` |
| `is_urgent` | `boolean` | YES | `false` |
| `is_hot_deal` | `boolean` | YES | `false` |
| `view_count` | `integer` | YES | `0` |
| `favorite_count` | `integer` | YES | `0` |
| `inquiry_count` | `integer` | YES | `0` |
| `phone_views_count` | `integer` | YES | `0` |
| `whatsapp_clicks` | `integer` | YES | `0` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `published_at` | `timestamp with time zone` | YES | `—` |
| `sold_rented_at` | `timestamp with time zone` | YES | `—` |
| `featured_until` | `timestamp with time zone` | YES | `—` |
| `last_viewed` | `timestamp with time zone` | YES | `—` |
| `expiry_date` | `timestamp with time zone` | YES | `—` |
| `meta_title` | `text` | YES | `—` |
| `meta_description` | `text` | YES | `—` |
| `meta_keywords` | `ARRAY` | YES | `—` |
| `tags` | `ARRAY` | YES | `—` |
| `moderation_state` | `text` | NO | `'not_submitted'::text` |
| `locality_id` | `uuid` | YES | `—` |
| `builder_id` | `uuid` | YES | `—` |
| `project_id` | `uuid` | YES | `—` |
| `corner_plot` | `boolean` | YES | `false` |
| `width_facing` | `numeric` | YES | `—` |
| `boundary_wall` | `boolean` | YES | `false` |
| `gated_security` | `boolean` | YES | `false` |
| `video_url` | `text` | YES | `—` |
| `virtual_tour_url` | `text` | YES | `—` |
| `floor_plan_images` | `ARRAY` | YES | `—` |
| `approved_by_bank` | `boolean` | YES | `false` |
| `loan_available` | `boolean` | YES | `false` |
| `possession_status` | `text` | YES | `—` |
| `water_supply` | `text` | YES | `—` |
| `electricity_backup` | `text` | YES | `—` |
| `lift_available` | `boolean` | YES | `false` |
| `reserved_parking` | `integer` | YES | `0` |
| `open_parking` | `integer` | YES | `0` |
| `property_facing_road_width` | `numeric` | YES | `—` |
| `govt_approved` | `boolean` | YES | `false` |
| `clear_title` | `boolean` | YES | `false` |
| `last_viewed_by` | `uuid` | YES | `—` |
| `city_id` | `uuid` | YES | `—` |
| `district_id` | `uuid` | YES | `—` |
| `state_id` | `uuid` | YES | `—` |
| `pincode_fk` | `character(6)` | YES | `—` |
| `geo_point` | `USER-DEFINED` | YES | `—` |
| `geo_quality_score` | `numeric` | YES | `0` |
| `data_freshness_score` | `numeric` | YES | `100` |
| `last_verified_at` | `timestamp with time zone` | YES | `—` |
| `visibility_status` | `text` | YES | `'public'::text` |
| `data_provided_by` | `text` | YES | `—` |
| `data_confidence_level` | `text` | YES | `'declared'::text` |
| `location_accuracy_level` | `text` | YES | `'locality_only'::text` |
| `site_visit_handler` | `text` | YES | `'owner'::text` |
| `visit_notice_hours` | `integer` | YES | `24` |
| `loan_bank_name` | `text` | YES | `—` |
| `loan_clearance_status` | `text` | YES | `'unknown'::text` |
| `loan_noc_available` | `boolean` | YES | `false` |
| `property_tax_paid_till` | `date` | YES | `—` |
| `encumbrance_certificate_available` | `boolean` | YES | `false` |
| `khata_type` | `text` | YES | `—` |
| `boost_active` | `boolean` | NO | `false` |
| `featured_rank` | `integer` | NO | `0` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_properties_active_published` | btree | status, is_active | — |
| `idx_properties_agency_id` | btree | agency_id | — |
| `idx_properties_agent_id` | btree | agent_id | — |
| `idx_properties_area` | btree | built_up_area | — |
| `idx_properties_bedrooms` | btree | bedrooms | — |
| `idx_properties_boost_active` | btree | boost_active | — |
| `idx_properties_builder` | btree | builder_id | — |
| `idx_properties_city_active_created` | btree | created_at, city_id | — |
| `idx_properties_city_locality` | btree | city, locality | — |
| `idx_properties_city_new` | btree | city_id | — |
| `idx_properties_city_price_filter` | btree | price, city, status, is_active | — |
| `idx_properties_city_price_status` | btree | price, status, city_id | — |
| `idx_properties_city_status_active` | btree | city, status, is_active | — |
| `idx_properties_created_at` | btree | created_at | — |
| `idx_properties_district` | btree | district_id | — |
| `idx_properties_featured` | btree | is_featured | — |
| `idx_properties_featured_smart` | btree | status, is_active, is_featured, created_at, featured_until | — |
| `idx_properties_freshness` | btree | data_freshness_score | — |
| `idx_properties_geo_point` | gist | geo_point | — |
| `idx_properties_geo_quality` | btree | geo_quality_score | — |
| `idx_properties_khata` | btree | khata_type | — |
| `idx_properties_last_verified` | btree | last_verified_at | — |
| `idx_properties_last_viewed_by` | btree | last_viewed_by | — |
| `idx_properties_listing_type` | btree | listing_type | — |
| `idx_properties_locality` | btree | locality_id | — |
| `idx_properties_locality_status` | btree | status, locality_id | — |
| `idx_properties_location_accuracy` | btree | location_accuracy_level | — |
| `idx_properties_moderation_state` | btree | moderation_state | — |
| `idx_properties_pid` | btree | pid | — |
| `idx_properties_pincode_fk` | btree | pincode_fk | — |
| `idx_properties_price` | btree | price | — |
| `idx_properties_price_status_active` | btree | price, status, is_active | — |
| `idx_properties_project` | btree | project_id | — |
| `idx_properties_property_type` | btree | property_type | — |
| `idx_properties_search` | btree | property_type, price, city, bedrooms, status | — |
| `idx_properties_search_composite` | btree | property_type, price, status, city_id | — |
| `idx_properties_state_new` | btree | state_id | — |
| `idx_properties_status` | btree | status | — |
| `idx_properties_status_created_at` | btree | status, created_at | — |
| `idx_properties_updated_at` | btree | updated_at | — |
| `idx_properties_user_id` | btree | user_id | — |
| `idx_properties_user_status` | btree | user_id, status, created_at | — |
| `idx_properties_visibility` | btree | visibility_status | — |
| `properties_pid_key` | btree | pid | ✓ |
| `properties_pkey` | btree | id | ✓ |
| `properties_property_code_key` | btree | property_code | ✓ |
| `properties_slug_key` | btree | slug | ✓ |

### Foreign Keys

- `properties_agency_id_fkey`:
  - Columns: `agency_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `properties_agent_id_fkey`:
  - Columns: `agent_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `properties_builder_id_fkey`:
  - Columns: `builder_id` → `builders(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `properties_city_id_fkey`:
  - Columns: `city_id` → `cities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `properties_district_id_fkey`:
  - Columns: `district_id` → `districts(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `properties_last_viewed_by_fkey`:
  - Columns: `last_viewed_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `properties_locality_id_fkey`:
  - Columns: `locality_id` → `localities(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `properties_pincode_fk_fkey`:
  - Columns: `pincode_fk` → `pincodes(pincode)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `properties_project_id_fkey`:
  - Columns: `project_id` → `projects(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `properties_state_id_fkey`:
  - Columns: `state_id` → `states(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `properties_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_amenities`

**Statistics:**
- Rows: ~72
- Columns: 7
- Indexes: 5
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `amenity_category` | `text` | NO | `—` |
| `amenity_name` | `text` | NO | `—` |
| `amenity_value` | `text` | YES | `—` |
| `is_available` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_amenities_category` | btree | amenity_category | — |
| `idx_property_amenities_property` | btree | property_id | — |
| `idx_property_amenities_property_id` | btree | property_id | — |
| `property_amenities_pkey` | btree | id | ✓ |
| `property_amenities_property_id_amenity_name_key` | btree | property_id, amenity_name | ✓ |

### Foreign Keys

- `property_amenities_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_assignments`

**Statistics:**
- Rows: ~5
- Columns: 8
- Indexes: 4
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `admin_id` | `uuid` | NO | `—` |
| `status` | `text` | NO | `—` |
| `is_active` | `boolean` | NO | `true` |
| `assigned_at` | `timestamp with time zone` | NO | `now()` |
| `reviewed_at` | `timestamp with time zone` | YES | `—` |
| `due_at` | `timestamp with time zone` | NO | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_assignments_admin_active` | btree | admin_id | — |
| `idx_assignments_due` | btree | due_at | — |
| `property_assignments_pkey` | btree | id | ✓ |
| `property_assignments_property_id_key` | btree | property_id | ✓ |

### Foreign Keys

- `property_assignments_admin_id_fkey`:
  - Columns: `admin_id` → `admin_users(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `property_assignments_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_comparisons`

**Statistics:**
- Rows: ~5
- Columns: 6
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | YES | `—` |
| `property_ids` | `ARRAY` | NO | `—` |
| `comparison_data` | `jsonb` | YES | `—` |
| `session_id` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_comparisons_user` | btree | user_id | — |
| `property_comparisons_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_comparisons_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_documents`

**Statistics:**
- Rows: ~12
- Columns: 12
- Indexes: 4
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `document_type` | `text` | NO | `—` |
| `document_name` | `text` | NO | `—` |
| `document_url` | `text` | NO | `—` |
| `document_path` | `text` | YES | `—` |
| `is_verified` | `boolean` | YES | `false` |
| `verified_by` | `uuid` | YES | `—` |
| `verified_at` | `timestamp with time zone` | YES | `—` |
| `uploaded_by` | `uuid` | YES | `—` |
| `uploaded_at` | `timestamp with time zone` | YES | `now()` |
| `expiry_date` | `date` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_documents_property_id` | btree | property_id | — |
| `idx_property_documents_uploaded_by` | btree | uploaded_by | — |
| `idx_property_documents_verified_by` | btree | verified_by | — |
| `property_documents_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_documents_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_documents_uploaded_by_fkey`:
  - Columns: `uploaded_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `property_documents_verified_by_fkey`:
  - Columns: `verified_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `property_images`

**Statistics:**
- Rows: ~53
- Columns: 15
- Indexes: 6
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `image_url` | `text` | NO | `—` |
| `image_path` | `text` | YES | `—` |
| `image_name` | `text` | YES | `—` |
| `caption` | `text` | YES | `—` |
| `is_primary` | `boolean` | YES | `false` |
| `display_order` | `integer` | YES | `0` |
| `storage_bucket` | `text` | YES | `'property-images'::text` |
| `file_size` | `integer` | YES | `—` |
| `mime_type` | `text` | YES | `—` |
| `uploaded_by` | `uuid` | YES | `—` |
| `uploaded_at` | `timestamp with time zone` | YES | `now()` |
| `media_status` | `text` | YES | `'attached'::text` |
| `deleted_at` | `timestamp with time zone` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_images_primary` | btree | property_id | — |
| `idx_property_images_property` | btree | property_id | — |
| `idx_property_images_property_id` | btree | property_id | — |
| `idx_property_images_uploaded_by` | btree | uploaded_by | — |
| `property_images_pkey` | btree | id | ✓ |
| `property_images_property_id_image_url_key` | btree | property_id, image_url | ✓ |

### Foreign Keys

- `property_images_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_images_uploaded_by_fkey`:
  - Columns: `uploaded_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `property_intelligence_scores`

> AI-powered property scoring system for ranking and recommendation

**Statistics:**
- Rows: ~5
- Columns: 41
- Indexes: 8
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `overall_score` | `numeric` | NO | `0` |
| `value_score` | `numeric` | YES | `0` |
| `demand_score` | `numeric` | YES | `0` |
| `quality_score` | `numeric` | YES | `0` |
| `location_score` | `numeric` | YES | `0` |
| `view_velocity` | `numeric` | YES | `0` |
| `inquiry_rate` | `numeric` | YES | `0` |
| `favorite_rate` | `numeric` | YES | `0` |
| `contact_reveal_rate` | `numeric` | YES | `0` |
| `site_visit_conversion_rate` | `numeric` | YES | `0` |
| `avg_time_on_listing_seconds` | `integer` | YES | `—` |
| `repeat_view_rate` | `numeric` | YES | `—` |
| `share_count` | `integer` | YES | `0` |
| `comparison_count` | `integer` | YES | `0` |
| `price_competitiveness` | `numeric` | YES | `—` |
| `price_per_sqft_rank` | `integer` | YES | `—` |
| `price_trend` | `text` | YES | `—` |
| `estimated_market_value` | `numeric` | YES | `—` |
| `value_gap_percentage` | `numeric` | YES | `—` |
| `listing_completeness_score` | `numeric` | YES | `—` |
| `image_quality_score` | `numeric` | YES | `—` |
| `description_quality_score` | `numeric` | YES | `—` |
| `verification_score` | `numeric` | YES | `—` |
| `days_on_market` | `integer` | YES | `0` |
| `estimated_days_to_sell` | `integer` | YES | `—` |
| `freshness_score` | `numeric` | YES | `—` |
| `rank_in_locality` | `integer` | YES | `—` |
| `rank_in_city` | `integer` | YES | `—` |
| `similar_properties_count` | `integer` | YES | `—` |
| `better_value_alternatives_count` | `integer` | YES | `—` |
| `is_hot_property` | `boolean` | YES | `false` |
| `hot_property_reasons` | `ARRAY` | YES | `—` |
| `urgency_score` | `numeric` | YES | `0` |
| `investment_score` | `numeric` | YES | `0` |
| `roi_potential` | `numeric` | YES | `—` |
| `appreciation_potential` | `text` | YES | `—` |
| `risk_score` | `numeric` | YES | `0` |
| `risk_factors` | `ARRAY` | YES | `—` |
| `calculated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_intel_demand` | btree | demand_score | — |
| `idx_property_intel_hot` | btree | is_hot_property | — |
| `idx_property_intel_overall` | btree | overall_score | — |
| `idx_property_intel_property` | btree | property_id | — |
| `idx_property_intel_trend` | btree | price_trend | — |
| `idx_property_intel_value` | btree | value_score | — |
| `property_intelligence_scores_pkey` | btree | id | ✓ |
| `property_intelligence_scores_property_id_key` | btree | property_id | ✓ |

### Foreign Keys

- `property_intelligence_scores_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_leads`

**Statistics:**
- Rows: ~5
- Columns: 22
- Indexes: 5
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `lead_user_id` | `uuid` | YES | `—` |
| `lead_name` | `text` | YES | `—` |
| `lead_phone` | `text` | NO | `—` |
| `lead_email` | `text` | YES | `—` |
| `lead_type` | `text` | YES | `—` |
| `source` | `text` | YES | `—` |
| `status` | `text` | YES | `'new'::text` |
| `priority` | `text` | YES | `'medium'::text` |
| `assigned_to` | `uuid` | YES | `—` |
| `budget_min` | `numeric` | YES | `—` |
| `budget_max` | `numeric` | YES | `—` |
| `notes` | `text` | YES | `—` |
| `follow_up_date` | `date` | YES | `—` |
| `conversion_probability` | `integer` | YES | `—` |
| `ip_address` | `inet` | YES | `—` |
| `user_agent` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `last_contacted_at` | `timestamp with time zone` | YES | `—` |
| `converted_at` | `timestamp with time zone` | YES | `—` |
| `case_id` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_leads_assigned` | btree | assigned_to | — |
| `idx_property_leads_lead_user_id` | btree | lead_user_id | — |
| `idx_property_leads_property` | btree | property_id | — |
| `idx_property_leads_status` | btree | status, priority | — |
| `property_leads_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_leads_assigned_to_fkey`:
  - Columns: `assigned_to` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `property_leads_lead_user_id_fkey`:
  - Columns: `lead_user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `property_leads_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_price_history`

**Statistics:**
- Rows: ~5
- Columns: 7
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `old_price` | `numeric` | YES | `—` |
| `new_price` | `numeric` | YES | `—` |
| `change_reason` | `text` | YES | `—` |
| `changed_by` | `uuid` | YES | `—` |
| `changed_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_price_history_changed_by` | btree | changed_by | — |
| `idx_property_price_history_property` | btree | property_id | — |
| `property_price_history_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_price_history_changed_by_fkey`:
  - Columns: `changed_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `property_price_history_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_ranking_criteria`

**Statistics:**
- Rows: ~5
- Columns: 37
- Indexes: 7
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `price_value_rating` | `numeric` | YES | `5` |
| `roi_potential_rating` | `numeric` | YES | `5` |
| `appreciation_potential_rating` | `numeric` | YES | `5` |
| `location_desirability_rating` | `numeric` | YES | `5` |
| `connectivity_rating` | `numeric` | YES | `5` |
| `infrastructure_rating` | `numeric` | YES | `5` |
| `safety_rating` | `numeric` | YES | `5` |
| `construction_quality_rating` | `numeric` | YES | `5` |
| `maintenance_rating` | `numeric` | YES | `5` |
| `amenities_rating` | `numeric` | YES | `5` |
| `design_rating` | `numeric` | YES | `5` |
| `legal_clarity_rating` | `numeric` | YES | `5` |
| `documentation_completeness_rating` | `numeric` | YES | `5` |
| `title_clarity_rating` | `numeric` | YES | `5` |
| `demand_rating` | `numeric` | YES | `5` |
| `liquidity_rating` | `numeric` | YES | `5` |
| `competitive_position_rating` | `numeric` | YES | `5` |
| `seller_reputation_rating` | `numeric` | YES | `5` |
| `response_rate_rating` | `numeric` | YES | `5` |
| `negotiation_flexibility_rating` | `numeric` | YES | `5` |
| `investment_rank` | `numeric` | YES | `0` |
| `first_time_buyer_rank` | `numeric` | YES | `0` |
| `family_rank` | `numeric` | YES | `0` |
| `senior_citizen_rank` | `numeric` | YES | `0` |
| `overall_rank_in_locality` | `integer` | YES | `—` |
| `overall_rank_in_city` | `integer` | YES | `—` |
| `overall_rank_in_price_range` | `integer` | YES | `—` |
| `value_percentile` | `integer` | YES | `—` |
| `demand_percentile` | `integer` | YES | `—` |
| `quality_percentile` | `integer` | YES | `—` |
| `deal_quality` | `text` | YES | `—` |
| `deal_score` | `numeric` | YES | `0` |
| `urgency_level` | `text` | YES | `—` |
| `opportunity_type` | `ARRAY` | YES | `—` |
| `calculated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_ranking_deal_quality` | btree | deal_quality, deal_score | — |
| `idx_ranking_investment` | btree | investment_rank | — |
| `idx_ranking_locality` | btree | overall_rank_in_locality | — |
| `idx_ranking_property` | btree | property_id | — |
| `idx_ranking_value_percentile` | btree | value_percentile | — |
| `property_ranking_criteria_pkey` | btree | id | ✓ |
| `property_ranking_criteria_property_id_key` | btree | property_id | ✓ |

### Foreign Keys

- `property_ranking_criteria_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_reports`

**Statistics:**
- Rows: ~7
- Columns: 11
- Indexes: 5
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `reported_by` | `uuid` | YES | `—` |
| `report_type` | `text` | NO | `—` |
| `description` | `text` | NO | `—` |
| `evidence_urls` | `ARRAY` | YES | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `reviewed_by` | `uuid` | YES | `—` |
| `action_taken` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `resolved_at` | `timestamp with time zone` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_reports_property` | btree | property_id | — |
| `idx_property_reports_reported_by` | btree | reported_by | — |
| `idx_property_reports_reviewed_by` | btree | reviewed_by | — |
| `idx_property_reports_status` | btree | status | — |
| `property_reports_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_reports_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_reports_reported_by_fkey`:
  - Columns: `reported_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `property_reports_reviewed_by_fkey`:
  - Columns: `reviewed_by` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `property_shares`

**Statistics:**
- Rows: ~7
- Columns: 6
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `shared_by` | `uuid` | YES | `—` |
| `platform` | `text` | NO | `—` |
| `ip_address` | `inet` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_shares_property` | btree | property_id | — |
| `idx_property_shares_shared_by` | btree | shared_by | — |
| `property_shares_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_shares_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_shares_shared_by_fkey`:
  - Columns: `shared_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `property_valuations`

> Automated and manual property valuation tracking

**Statistics:**
- Rows: ~5
- Columns: 37
- Indexes: 6
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `estimated_value` | `numeric` | NO | `—` |
| `confidence_score` | `numeric` | YES | `—` |
| `valuation_method` | `text` | YES | `—` |
| `min_estimated_value` | `numeric` | YES | `—` |
| `max_estimated_value` | `numeric` | YES | `—` |
| `comparable_properties_used` | `integer` | YES | `—` |
| `comparable_property_ids` | `ARRAY` | YES | `—` |
| `avg_comparable_price` | `numeric` | YES | `—` |
| `base_price_per_sqft` | `numeric` | YES | `—` |
| `location_adjustment_percentage` | `numeric` | YES | `—` |
| `age_adjustment_percentage` | `numeric` | YES | `—` |
| `amenities_adjustment_percentage` | `numeric` | YES | `—` |
| `condition_adjustment_percentage` | `numeric` | YES | `—` |
| `market_trend_adjustment_percentage` | `numeric` | YES | `—` |
| `locality_avg_price_per_sqft` | `numeric` | YES | `—` |
| `locality_price_growth_1y` | `numeric` | YES | `—` |
| `proximity_premium_percentage` | `numeric` | YES | `—` |
| `property_age_years` | `integer` | YES | `—` |
| `maintenance_condition` | `text` | YES | `—` |
| `unique_selling_points` | `ARRAY` | YES | `—` |
| `market_temperature` | `text` | YES | `—` |
| `seasonal_adjustment` | `numeric` | YES | `—` |
| `land_value` | `numeric` | YES | `—` |
| `construction_value` | `numeric` | YES | `—` |
| `depreciation_value` | `numeric` | YES | `—` |
| `appreciation_value` | `numeric` | YES | `—` |
| `model_version` | `text` | YES | `—` |
| `model_accuracy` | `numeric` | YES | `—` |
| `feature_importance` | `jsonb` | YES | `—` |
| `validation_status` | `text` | YES | `—` |
| `validated_by` | `uuid` | YES | `—` |
| `validation_notes` | `text` | YES | `—` |
| `valuation_date` | `date` | NO | `CURRENT_DATE` |
| `valid_until` | `date` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_valuations_validated_by` | btree | validated_by | — |
| `idx_valuations_confidence` | btree | confidence_score | — |
| `idx_valuations_date` | btree | valuation_date | — |
| `idx_valuations_method` | btree | valuation_method | — |
| `idx_valuations_property` | btree | property_id, valuation_date | — |
| `property_valuations_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_valuations_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_valuations_validated_by_fkey`:
  - Columns: `validated_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `property_verifications`

**Statistics:**
- Rows: ~6
- Columns: 14
- Indexes: 4
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `verification_type` | `text` | NO | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `verified_by` | `uuid` | YES | `—` |
| `verification_agency` | `text` | YES | `—` |
| `verification_number` | `text` | YES | `—` |
| `report_url` | `text` | YES | `—` |
| `findings` | `jsonb` | YES | `—` |
| `valid_until` | `timestamp with time zone` | YES | `—` |
| `cost` | `numeric` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `verified_at` | `timestamp with time zone` | YES | `—` |
| `case_id` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_verifications_property` | btree | property_id | — |
| `idx_property_verifications_status` | btree | verification_type, status | — |
| `idx_property_verifications_verified_by` | btree | verified_by | — |
| `property_verifications_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_verifications_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_verifications_verified_by_fkey`:
  - Columns: `verified_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `property_views`

**Statistics:**
- Rows: ~11
- Columns: 10
- Indexes: 8
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `user_id` | `uuid` | YES | `—` |
| `session_id` | `text` | YES | `—` |
| `ip_address` | `inet` | YES | `—` |
| `user_agent` | `text` | YES | `—` |
| `referrer` | `text` | YES | `—` |
| `view_duration` | `integer` | YES | `—` |
| `is_phone_view` | `boolean` | YES | `false` |
| `viewed_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_views_analytics` | btree | property_id, viewed_at | — |
| `idx_property_views_daily` | btree | property_id, viewed_at | — |
| `idx_property_views_date` | btree | viewed_at | — |
| `idx_property_views_property` | btree | property_id | — |
| `idx_property_views_property_session` | btree | property_id, session_id | — |
| `idx_property_views_user_id_not_null` | btree | user_id | — |
| `property_views_pkey` | btree | id | ✓ |
| `unique_property_session` | btree | property_id, session_id | ✓ |

### Foreign Keys

- `property_views_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_views_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `property_visits`

**Statistics:**
- Rows: ~6
- Columns: 11
- Indexes: 4
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `visitor_id` | `uuid` | YES | `—` |
| `visit_date` | `date` | NO | `—` |
| `visit_time` | `time without time zone` | YES | `—` |
| `visit_type` | `text` | YES | `—` |
| `status` | `text` | YES | `'scheduled'::text` |
| `accompanied_by` | `uuid` | YES | `—` |
| `feedback` | `text` | YES | `—` |
| `interest_level` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_property_visits_accompanied_by` | btree | accompanied_by | — |
| `idx_property_visits_property` | btree | property_id, visit_date | — |
| `idx_property_visits_visitor` | btree | visitor_id | — |
| `property_visits_pkey` | btree | id | ✓ |

### Foreign Keys

- `property_visits_accompanied_by_fkey`:
  - Columns: `accompanied_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `property_visits_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_visits_visitor_id_fkey`:
  - Columns: `visitor_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `referrals`

**Statistics:**
- Rows: ~5
- Columns: 12
- Indexes: 5
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `referrer_id` | `uuid` | NO | `—` |
| `referred_id` | `uuid` | YES | `—` |
| `referral_code` | `text` | NO | `—` |
| `referred_email` | `text` | YES | `—` |
| `referred_phone` | `text` | YES | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `reward_type` | `text` | YES | `—` |
| `reward_amount` | `numeric` | YES | `—` |
| `credited_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `converted_at` | `timestamp with time zone` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_referrals_code` | btree | referral_code | — |
| `idx_referrals_referred_id` | btree | referred_id | — |
| `idx_referrals_referrer` | btree | referrer_id | — |
| `referrals_pkey` | btree | id | ✓ |
| `referrals_referral_code_key` | btree | referral_code | ✓ |

### Foreign Keys

- `referrals_referred_id_fkey`:
  - Columns: `referred_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `referrals_referrer_id_fkey`:
  - Columns: `referrer_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `refund_request`

**Statistics:**
- Rows: ~136
- Columns: 12
- Indexes: 2
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `transaction_id` | `uuid` | NO | `—` |
| `requested_by` | `uuid` | NO | `—` |
| `amount` | `numeric` | NO | `—` |
| `reason` | `text` | NO | `—` |
| `status` | `text` | NO | `'pending_approval'::text` |
| `reviewed_by` | `uuid` | YES | `—` |
| `reviewed_at` | `timestamp with time zone` | YES | `—` |
| `review_note` | `text` | YES | `—` |
| `case_id` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `refund_request_pkey` | btree | id | ✓ |
| `refund_request_transaction_idx` | btree | transaction_id | — |

### Foreign Keys

- `refund_request_requested_by_fkey`:
  - Columns: `requested_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: RESTRICT
- `refund_request_reviewed_by_fkey`:
  - Columns: `reviewed_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `refund_request_transaction_id_fkey`:
  - Columns: `transaction_id` → `transactions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: RESTRICT

---

## `regions`

> Master table for regional configuration across India

**Statistics:**
- Rows: ~132
- Columns: 15
- Indexes: 5
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `code` | `text` | NO | `—` |
| `type` | `text` | NO | `—` |
| `parent_region_id` | `uuid` | YES | `—` |
| `gst_number` | `text` | YES | `—` |
| `gst_rate` | `numeric` | YES | `18.00` |
| `is_active` | `boolean` | YES | `true` |
| `requires_kyc` | `boolean` | YES | `false` |
| `market_tier` | `integer` | YES | `—` |
| `population_estimate` | `integer` | YES | `—` |
| `currency_code` | `text` | YES | `'INR'::text` |
| `timezone` | `text` | YES | `'Asia/Kolkata'::text` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_regions_code` | btree | code | — |
| `idx_regions_parent` | btree | parent_region_id | — |
| `idx_regions_type` | btree | type | — |
| `regions_code_key` | btree | code | ✓ |
| `regions_pkey` | btree | id | ✓ |

### Foreign Keys

- `regions_parent_region_id_fkey`:
  - Columns: `parent_region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `registration_consent_log`

> DPDPA Section 7 immutable consent log. One row per registration consent event. Never DELETE or UPDATE rows — append-only per legal requirement.

**Statistics:**
- Rows: ~6
- Columns: 7
- Indexes: 1
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `consent_given_at` | `timestamp with time zone` | NO | `now()` |
| `ip_address_hash` | `text` | NO | `—` |
| `tc_version` | `text` | NO | `—` |
| `purpose` | `text` | NO | `'data_processing_consent'::text` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `registration_consent_log_pkey` | btree | id | ✓ |

### Foreign Keys

- `registration_consent_log_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `role_permissions`

**Statistics:**
- Rows: ~90
- Columns: 2
- Indexes: 1
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `role_id` | `uuid` | NO | `—` |
| `permission_id` | `uuid` | NO | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `role_permissions_pkey` | btree | role_id, permission_id | ✓ |

### Foreign Keys

- `role_permissions_permission_id_fkey`:
  - Columns: `permission_id` → `permissions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `role_permissions_role_id_fkey`:
  - Columns: `role_id` → `roles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `role_platform_access`

**Statistics:**
- Rows: ~125
- Columns: 16
- Indexes: 3
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `role_key` | `text` | NO | `—` |
| `designation_match` | `ARRAY` | YES | `—` |
| `platform` | `text` | NO | `—` |
| `access_level` | `text` | NO | `—` |
| `access_config` | `jsonb` | NO | `—` |
| `exec_order` | `smallint` | YES | `10` |
| `requires_manual_gate` | `boolean` | YES | `false` |
| `gate_owner` | `text` | YES | `—` |
| `gate_channel` | `text` | YES | `—` |
| `operation_onboard` | `text` | YES | `'create'::text` |
| `operation_offboard` | `text` | YES | `'deactivate'::text` |
| `is_active` | `boolean` | YES | `true` |
| `approved_by` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_rpa_role_key_active` | btree | role_key, is_active | — |
| `role_platform_access_pkey` | btree | id | ✓ |
| `role_platform_access_role_key_platform_key` | btree | role_key, platform | ✓ |

---

## `roles`

**Statistics:**
- Rows: ~39
- Columns: 7
- Indexes: 3
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `slug` | `text` | YES | `—` |
| `category` | `text` | YES | `—` |
| `description` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `roles_name_key` | btree | name | ✓ |
| `roles_pkey` | btree | id | ✓ |
| `roles_slug_key` | btree | slug | ✓ |

---

## `saved_listings`

**Statistics:**
- Rows: ~5
- Columns: 4
- Indexes: 4
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `profile_id` | `uuid` | NO | `—` |
| `property_id` | `uuid` | NO | `—` |
| `saved_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `saved_listings_pkey` | btree | id | ✓ |
| `saved_listings_profile_idx` | btree | profile_id | — |
| `saved_listings_property_idx` | btree | property_id | — |
| `saved_listings_unique` | btree | profile_id, property_id | ✓ |

### Foreign Keys

- `saved_listings_profile_fk`:
  - Columns: `profile_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `saved_listings_property_fk`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `saved_searches`

**Statistics:**
- Rows: ~5
- Columns: 11
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `search_name` | `text` | NO | `—` |
| `filters` | `jsonb` | NO | `—` |
| `notification_enabled` | `boolean` | YES | `true` |
| `notification_frequency` | `text` | YES | `'daily'::text` |
| `last_notified_at` | `timestamp with time zone` | YES | `—` |
| `match_count` | `integer` | YES | `0` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_saved_searches_user` | btree | user_id, is_active | — |
| `saved_searches_pkey` | btree | id | ✓ |

### Foreign Keys

- `saved_searches_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `search_history`

**Statistics:**
- Rows: ~5
- Columns: 8
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | YES | `—` |
| `search_query` | `text` | NO | `—` |
| `filters` | `jsonb` | YES | `—` |
| `results_count` | `integer` | YES | `—` |
| `session_id` | `text` | YES | `—` |
| `ip_address` | `inet` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_search_history_user` | btree | user_id | — |
| `search_history_pkey` | btree | id | ✓ |

### Foreign Keys

- `search_history_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `security_flags`

> Tracks flagged admin activities for security review

**Statistics:**
- Rows: ~5
- Columns: 9
- Indexes: 6
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `admin_email` | `character varying(255)` | NO | `—` |
| `flagged_by` | `uuid` | NO | `—` |
| `reason` | `text` | NO | `—` |
| `status` | `character varying(50)` | NO | `'pending'::character varying` |
| `resolution_notes` | `text` | YES | `—` |
| `resolved_by` | `uuid` | YES | `—` |
| `created_at` | `timestamp without time zone` | NO | `now()` |
| `resolved_at` | `timestamp without time zone` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_security_flags_admin_email` | btree | admin_email | — |
| `idx_security_flags_created_at` | btree | created_at | — |
| `idx_security_flags_flagged_by` | btree | flagged_by | — |
| `idx_security_flags_resolved_by` | btree | resolved_by | — |
| `idx_security_flags_status` | btree | status | — |
| `security_flags_pkey` | btree | id | ✓ |

### Foreign Keys

- `security_flags_flagged_by_fkey`:
  - Columns: `flagged_by` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `security_flags_resolved_by_fkey`:
  - Columns: `resolved_by` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `spatial_ref_sys`

**Statistics:**
- Rows: ~8,500
- Columns: 5
- Indexes: 1
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `srid` | `integer` | NO | `—` |
| `auth_name` | `character varying(256)` | YES | `—` |
| `auth_srid` | `integer` | YES | `—` |
| `srtext` | `character varying(2048)` | YES | `—` |
| `proj4text` | `character varying(2048)` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `spatial_ref_sys_pkey` | btree | srid | ✓ |

---

## `states`

> Indian states with LGD (Local Government Directory) codes

**Statistics:**
- Rows: ~36
- Columns: 7
- Indexes: 6
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `lgd_code` | `character varying(5)` | NO | `—` |
| `name` | `text` | NO | `—` |
| `iso_code` | `character varying(8)` | YES | `—` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_states_active` | btree | is_active | — |
| `idx_states_lgd` | btree | lgd_code | — |
| `idx_states_name` | btree | name | — |
| `states_iso_code_key` | btree | iso_code | ✓ |
| `states_lgd_code_key` | btree | lgd_code | ✓ |
| `states_pkey` | btree | id | ✓ |

---

## `sub_districts`

> Sub-districts/Talukas for granular location hierarchy

**Statistics:**
- Rows: ~7
- Columns: 7
- Indexes: 5
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `lgd_code` | `character varying(10)` | YES | `—` |
| `district_id` | `uuid` | NO | `—` |
| `name` | `text` | NO | `—` |
| `is_active` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_sub_districts_district` | btree | district_id | — |
| `idx_sub_districts_name` | btree | district_id, name | — |
| `idx_sub_districts_name_trgm` | gin | name | — |
| `sub_districts_lgd_code_key` | btree | lgd_code | ✓ |
| `sub_districts_pkey` | btree | id | ✓ |

### Foreign Keys

- `sub_districts_district_id_fkey`:
  - Columns: `district_id` → `districts(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `subscription_enrollments`

**Statistics:**
- Rows: ~20
- Columns: 14
- Indexes: 5
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `plan_id` | `uuid` | NO | `—` |
| `status` | `text` | NO | `'active'::text` |
| `price_paid` | `numeric` | NO | `—` |
| `credits_allocated` | `integer` | NO | `—` |
| `started_at` | `timestamp with time zone` | YES | `now()` |
| `expires_at` | `timestamp with time zone` | NO | `—` |
| `cancelled_at` | `timestamp with time zone` | YES | `—` |
| `auto_renew` | `boolean` | YES | `true` |
| `purchase_transaction_id` | `uuid` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `case_id` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_subscription_enrollments_purchase_transaction_id` | btree | purchase_transaction_id | — |
| `idx_subscriptions_expires` | btree | expires_at | — |
| `idx_subscriptions_plan` | btree | plan_id | — |
| `idx_subscriptions_user` | btree | user_id, status | — |
| `subscription_enrollments_pkey` | btree | id | ✓ |

### Foreign Keys

- `subscription_enrollments_plan_id_fkey`:
  - Columns: `plan_id` → `subscription_plans(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `subscription_enrollments_purchase_transaction_id_fkey`:
  - Columns: `purchase_transaction_id` → `transactions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `subscription_enrollments_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `subscription_plans`

> Recurring subscription plans with regional features

**Statistics:**
- Rows: ~22
- Columns: 29
- Indexes: 6
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `name` | `text` | NO | `—` |
| `description` | `text` | YES | `—` |
| `plan_code` | `text` | NO | `—` |
| `base_price` | `numeric` | NO | `—` |
| `credits_monthly` | `integer` | NO | `—` |
| `duration_days` | `integer` | NO | `30` |
| `region_id` | `uuid` | YES | `—` |
| `regional_price` | `numeric` | YES | `—` |
| `regional_credits` | `integer` | YES | `—` |
| `user_type` | `text` | NO | `—` |
| `min_kyc_level` | `integer` | YES | `0` |
| `features` | `jsonb` | YES | `'{}'::jsonb` |
| `max_active_listings` | `integer` | YES | `—` |
| `contact_views_included` | `integer` | YES | `—` |
| `is_active` | `boolean` | YES | `true` |
| `display_order` | `integer` | YES | `0` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `intro_price_inr` | `numeric` | YES | `—` |
| `intro_price_active` | `boolean` | NO | `false` |
| `plan_category` | `text` | YES | `—` |
| `tier` | `text` | YES | `—` |
| `discount_percentage` | `numeric` | YES | `NULL::numeric` |
| `per_listing_cost_inr` | `numeric` | YES | `—` |
| `rera_bonus_inr` | `numeric` | YES | `—` |
| `listing_validity_days` | `integer` | YES | `—` |
| `tier_a_price_inr` | `numeric` | YES | `—` |
| `tier_b_price_inr` | `numeric` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_subscription_plans_active` | btree | is_active, display_order | — |
| `idx_subscription_plans_code` | btree | plan_code | — |
| `idx_subscription_plans_region_id` | btree | region_id | — |
| `idx_subscription_plans_user_type` | btree | user_type | — |
| `subscription_plans_pkey` | btree | id | ✓ |
| `subscription_plans_plan_code_key` | btree | plan_code | ✓ |

### Foreign Keys

- `subscription_plans_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `system_health_metrics`

**Statistics:**
- Rows: ~2
- Columns: 6
- Indexes: 2
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `metric_name` | `text` | NO | `—` |
| `metric_value` | `numeric` | NO | `—` |
| `metric_unit` | `text` | YES | `—` |
| `context` | `jsonb` | YES | `—` |
| `recorded_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_health_metrics_name` | btree | metric_name, recorded_at | — |
| `system_health_metrics_pkey` | btree | id | ✓ |

---

## `system_settings`

> Platform-wide configuration key-value store. Writable only via Go API (admin_super). Never exposes infra or credential keys.

**Statistics:**
- Rows: ~6
- Columns: 8
- Indexes: 2
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `key` | `text` | NO | `—` |
| `value` | `text` | YES | `—` |
| `description` | `text` | YES | `—` |
| `is_active` | `boolean` | NO | `true` |
| `updated_by` | `uuid` | YES | `—` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `system_settings_key_key` | btree | key | ✓ |
| `system_settings_pkey` | btree | id | ✓ |

### Foreign Keys

- `system_settings_updated_by_fkey`:
  - Columns: `updated_by` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `team_broadcasts`

**Statistics:**
- Rows: ~1
- Columns: 8
- Indexes: 3
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `from_team` | `text` | NO | `—` |
| `subject` | `text` | NO | `—` |
| `body` | `text` | NO | `—` |
| `priority` | `text` | NO | `'normal'::text` |
| `target_teams` | `ARRAY` | YES | `—` |
| `expires_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_broadcasts_created` | btree | created_at | — |
| `idx_broadcasts_priority` | btree | priority, created_at | — |
| `team_broadcasts_pkey` | btree | id | ✓ |

---

## `team_messages`

**Statistics:**
- Rows: ~0
- Columns: 8
- Indexes: 5
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `from_team` | `text` | NO | `—` |
| `to_team` | `text` | NO | `—` |
| `message` | `text` | NO | `—` |
| `response` | `text` | YES | `—` |
| `responded_at` | `timestamp with time zone` | YES | `—` |
| `status` | `text` | NO | `'pending'::text` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_team_messages_from_team` | btree | from_team, created_at | — |
| `idx_team_messages_status` | btree | status | — |
| `idx_team_messages_to_status` | btree | to_team, status | — |
| `idx_team_messages_to_team` | btree | to_team, created_at | — |
| `team_messages_pkey` | btree | id | ✓ |

---

## `team_registry`

**Statistics:**
- Rows: ~1
- Columns: 10
- Indexes: 3
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `team_id` | `text` | NO | `—` |
| `team_name` | `text` | NO | `—` |
| `role` | `text` | NO | `—` |
| `capabilities` | `ARRAY` | YES | `—` |
| `status` | `text` | NO | `'active'::text` |
| `last_seen_at` | `timestamp with time zone` | YES | `—` |
| `notes` | `text` | YES | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |
| `updated_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_team_registry_status` | btree | status | — |
| `team_registry_pkey` | btree | id | ✓ |
| `team_registry_team_id_key` | btree | team_id | ✓ |

---

## `transactions`

> All financial transactions with regional GST tracking

**Statistics:**
- Rows: ~367
- Columns: 35
- Indexes: 19
- Foreign Keys: 9

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `type` | `text` | NO | `—` |
| `amount_cash` | `numeric` | YES | `0` |
| `amount_credits` | `integer` | YES | `0` |
| `region_id` | `uuid` | YES | `—` |
| `pricing_rule_id` | `uuid` | YES | `—` |
| `gst_rate` | `numeric` | YES | `—` |
| `gst_amount` | `numeric` | YES | `—` |
| `gst_number` | `text` | YES | `—` |
| `reference_id` | `uuid` | YES | `—` |
| `reference_type` | `text` | YES | `—` |
| `description` | `text` | NO | `—` |
| `gateway` | `text` | YES | `—` |
| `gateway_transaction_id` | `text` | YES | `—` |
| `gateway_response` | `jsonb` | YES | `—` |
| `coupon_id` | `uuid` | YES | `—` |
| `discount_applied` | `numeric` | YES | `0` |
| `status` | `text` | NO | `'pending'::text` |
| `failure_reason` | `text` | YES | `—` |
| `refunded_at` | `timestamp with time zone` | YES | `—` |
| `invoice_number` | `text` | YES | `—` |
| `invoice_generated` | `boolean` | YES | `false` |
| `ip_address` | `inet` | YES | `—` |
| `user_agent` | `text` | YES | `—` |
| `metadata` | `jsonb` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `lead_id` | `uuid` | YES | `—` |
| `builder_id` | `uuid` | YES | `—` |
| `project_id` | `uuid` | YES | `—` |
| `case_id` | `text` | YES | `—` |
| `initiated_by` | `uuid` | YES | `—` |
| `approved_by` | `uuid` | YES | `—` |
| `reviewed_at` | `timestamp with time zone` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_transactions_approved_by` | btree | approved_by | — |
| `idx_transactions_builder_id` | btree | builder_id | — |
| `idx_transactions_coupon_id` | btree | coupon_id | — |
| `idx_transactions_created_at` | btree | created_at | — |
| `idx_transactions_gateway` | btree | gateway_transaction_id | — |
| `idx_transactions_initiated_by` | btree | initiated_by | — |
| `idx_transactions_invoice` | btree | invoice_number | — |
| `idx_transactions_lead_id` | btree | lead_id | — |
| `idx_transactions_pricing_rule_id` | btree | pricing_rule_id | — |
| `idx_transactions_project_id` | btree | project_id | — |
| `idx_transactions_region` | btree | region_id, created_at | — |
| `idx_transactions_status` | btree | status, created_at | — |
| `idx_transactions_type` | btree | type, created_at | — |
| `idx_transactions_user` | btree | user_id, created_at | — |
| `idx_transactions_user_id` | btree | user_id | — |
| `idx_transactions_user_region` | btree | user_id, region_id, created_at | — |
| `idx_transactions_user_status` | btree | user_id, status, created_at | — |
| `idx_transactions_user_status_created` | btree | user_id, status, created_at | — |
| `transactions_pkey` | btree | id | ✓ |

### Foreign Keys

- `transactions_approved_by_fkey`:
  - Columns: `approved_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_builder_id_fkey`:
  - Columns: `builder_id` → `builders(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_coupon_id_fkey`:
  - Columns: `coupon_id` → `coupons(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_initiated_by_fkey`:
  - Columns: `initiated_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_lead_id_fkey`:
  - Columns: `lead_id` → `property_leads(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_pricing_rule_id_fkey`:
  - Columns: `pricing_rule_id` → `pricing_rules(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_project_id_fkey`:
  - Columns: `project_id` → `projects(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `undervalued_properties`

> Identifies properties with excellent value - priced below market estimates

**Statistics:**
- Rows: ~5
- Columns: 27
- Indexes: 7
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `listed_price` | `numeric` | NO | `—` |
| `estimated_market_value` | `numeric` | NO | `—` |
| `undervaluation_amount` | `numeric` | NO | `—` |
| `undervaluation_percentage` | `numeric` | NO | `—` |
| `deal_rating` | `text` | YES | `—` |
| `savings_potential` | `numeric` | YES | `—` |
| `undervaluation_reasons` | `ARRAY` | YES | `—` |
| `confidence_level` | `text` | YES | `—` |
| `comparable_properties_count` | `integer` | YES | `—` |
| `data_quality_score` | `numeric` | YES | `—` |
| `locality_price_trend` | `text` | YES | `—` |
| `time_to_market_correction_days` | `integer` | YES | `—` |
| `competition_level` | `text` | YES | `—` |
| `investment_opportunity_score` | `numeric` | YES | `—` |
| `risk_adjusted_score` | `numeric` | YES | `—` |
| `expected_appreciation_1y_percentage` | `numeric` | YES | `—` |
| `expected_appreciation_3y_percentage` | `numeric` | YES | `—` |
| `discovered_at` | `timestamp with time zone` | YES | `now()` |
| `algorithm_version` | `text` | YES | `—` |
| `manual_verification_status` | `text` | YES | `—` |
| `verified_by` | `uuid` | YES | `—` |
| `alert_sent` | `boolean` | YES | `false` |
| `alert_sent_to_users` | `ARRAY` | YES | `—` |
| `expires_at` | `timestamp with time zone` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_undervalued_expires_at` | btree | expires_at | — |
| `idx_undervalued_opportunity` | btree | investment_opportunity_score | — |
| `idx_undervalued_percentage` | btree | undervaluation_percentage | — |
| `idx_undervalued_properties_verified_by` | btree | verified_by | — |
| `idx_undervalued_property` | btree | property_id | — |
| `idx_undervalued_rating` | btree | deal_rating | — |
| `undervalued_properties_pkey` | btree | id | ✓ |

### Foreign Keys

- `undervalued_properties_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `undervalued_properties_verified_by_fkey`:
  - Columns: `verified_by` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `user_favorites`

**Statistics:**
- Rows: ~5
- Columns: 4
- Indexes: 5
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `property_id` | `uuid` | NO | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_user_favorites_property` | btree | property_id | — |
| `idx_user_favorites_property_user` | btree | user_id, property_id | — |
| `idx_user_favorites_user` | btree | user_id | — |
| `user_favorites_pkey` | btree | id | ✓ |
| `user_favorites_user_id_property_id_key` | btree | user_id, property_id | ✓ |

### Foreign Keys

- `user_favorites_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `user_favorites_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `user_ratings`

**Statistics:**
- Rows: ~6
- Columns: 17
- Indexes: 4
- Foreign Keys: 3

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `rated_user_id` | `uuid` | NO | `—` |
| `rated_property_id` | `uuid` | YES | `—` |
| `rating_user_id` | `uuid` | NO | `—` |
| `rating` | `numeric` | NO | `—` |
| `review_title` | `text` | YES | `—` |
| `review_text` | `text` | YES | `—` |
| `review_response` | `text` | YES | `—` |
| `rating_type` | `text` | NO | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `is_featured` | `boolean` | YES | `false` |
| `is_verified_purchase` | `boolean` | YES | `false` |
| `helpful_count` | `integer` | YES | `0` |
| `report_count` | `integer` | YES | `0` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `responded_at` | `timestamp with time zone` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_user_ratings_property` | btree | rated_property_id | — |
| `idx_user_ratings_rated_user` | btree | rated_user_id | — |
| `user_ratings_pkey` | btree | id | ✓ |
| `user_ratings_rating_user_id_rated_user_id_rated_property_id_key` | btree | rated_user_id, rated_property_id, rating_user_id | ✓ |

### Foreign Keys

- `user_ratings_rated_property_id_fkey`:
  - Columns: `rated_property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `user_ratings_rated_user_id_fkey`:
  - Columns: `rated_user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `user_ratings_rating_user_id_fkey`:
  - Columns: `rating_user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `user_regional_preferences`

**Statistics:**
- Rows: ~5
- Columns: 8
- Indexes: 3
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `user_id` | `uuid` | NO | `—` |
| `primary_region_id` | `uuid` | YES | `—` |
| `active_regions` | `ARRAY` | YES | `—` |
| `preferred_language` | `text` | YES | `'english'::text` |
| `preferred_currency` | `text` | YES | `'INR'::text` |
| `receive_regional_offers` | `boolean` | YES | `true` |
| `receive_festival_campaigns` | `boolean` | YES | `true` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_user_prefs_active_regions` | gin | active_regions | — |
| `idx_user_prefs_region` | btree | primary_region_id | — |
| `user_regional_preferences_pkey` | btree | user_id | ✓ |

### Foreign Keys

- `user_regional_preferences_primary_region_id_fkey`:
  - Columns: `primary_region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `user_regional_preferences_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `verification_documents`

**Statistics:**
- Rows: ~8
- Columns: 15
- Indexes: 6
- Foreign Keys: 1

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `kyc_id` | `uuid` | YES | `—` |
| `document_type` | `text` | NO | `—` |
| `file_path` | `text` | NO | `—` |
| `file_hash` | `text` | YES | `—` |
| `file_size` | `integer` | YES | `—` |
| `mime_type` | `text` | YES | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `moderation_notes` | `text` | YES | `—` |
| `moderated_by` | `uuid` | YES | `—` |
| `moderated_at` | `timestamp with time zone` | YES | `—` |
| `metadata` | `jsonb` | YES | `'{}'::jsonb` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_verification_documents_document_type` | btree | document_type | — |
| `idx_verification_documents_kyc_id` | btree | kyc_id | — |
| `idx_verification_documents_moderated_by` | btree | moderated_by | — |
| `idx_verification_documents_status` | btree | status | — |
| `idx_verification_documents_user_id` | btree | user_id | — |
| `verification_documents_pkey` | btree | id | ✓ |

### Foreign Keys

- `verification_documents_kyc_id_fkey`:
  - Columns: `kyc_id` → `verification_kyc(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `verification_gps_tracking`

**Statistics:**
- Rows: ~5
- Columns: 13
- Indexes: 5
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `session_id` | `uuid` | NO | `—` |
| `latitude` | `numeric` | NO | `—` |
| `longitude` | `numeric` | NO | `—` |
| `accuracy` | `numeric` | YES | `—` |
| `altitude` | `numeric` | YES | `—` |
| `speed` | `numeric` | YES | `—` |
| `heading` | `numeric` | YES | `—` |
| `timestamp` | `timestamp with time zone` | NO | `—` |
| `location_context` | `text` | YES | `—` |
| `metadata` | `jsonb` | YES | `'{}'::jsonb` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_verification_gps_tracking_location_context` | btree | location_context | — |
| `idx_verification_gps_tracking_session_id` | btree | session_id | — |
| `idx_verification_gps_tracking_timestamp` | btree | timestamp | — |
| `idx_verification_gps_tracking_user_id` | btree | user_id | — |
| `verification_gps_tracking_pkey` | btree | id | ✓ |

---

## `verification_kyc`

**Statistics:**
- Rows: ~5
- Columns: 15
- Indexes: 5
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `full_name` | `text` | NO | `—` |
| `date_of_birth` | `date` | YES | `—` |
| `id_number` | `text` | YES | `—` |
| `id_type` | `text` | YES | `—` |
| `country_of_issue` | `text` | YES | `—` |
| `status` | `text` | YES | `'pending'::text` |
| `verified_at` | `timestamp with time zone` | YES | `—` |
| `verified_by` | `uuid` | YES | `—` |
| `rejection_reason` | `text` | YES | `—` |
| `metadata` | `jsonb` | YES | `'{}'::jsonb` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `case_id` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_verification_kyc_status` | btree | status | — |
| `idx_verification_kyc_user_id` | btree | user_id | — |
| `idx_verification_kyc_verified_at` | btree | verified_at | — |
| `idx_verification_kyc_verified_by` | btree | verified_by | — |
| `verification_kyc_pkey` | btree | id | ✓ |

---

## `waitlist_entries`

**Statistics:**
- Rows: ~5
- Columns: 4
- Indexes: 3
- Foreign Keys: 0

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `email` | `text` | NO | `—` |
| `tool_slug` | `text` | NO | `—` |
| `created_at` | `timestamp with time zone` | NO | `now()` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_waitlist_entries_tool_slug` | btree | tool_slug, created_at | — |
| `waitlist_entries_email_tool_unique` | btree | email, tool_slug | ✓ |
| `waitlist_entries_pkey` | btree | id | ✓ |

---

## `wallets`

> User credit wallets with regional tracking

**Statistics:**
- Rows: ~1,649
- Columns: 11
- Indexes: 5
- Foreign Keys: 2

### Columns

| Column | Type | Nullable | Default |
|--------|------|----------|--------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `balance` | `integer` | NO | `0` |
| `region_specific_credits` | `jsonb` | YES | `'{}'::jsonb` |
| `lifetime_credits_purchased` | `integer` | YES | `0` |
| `lifetime_credits_spent` | `integer` | YES | `0` |
| `lifetime_cash_spent` | `numeric` | YES | `0` |
| `last_transaction_region_id` | `uuid` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |
| `updated_at` | `timestamp with time zone` | YES | `now()` |
| `case_id` | `text` | YES | `—` |

### Indexes

| Name | Type | Columns | Unique |
|------|------|---------|--------|
| `idx_wallets_balance` | btree | balance | — |
| `idx_wallets_last_transaction_region_id` | btree | last_transaction_region_id | — |
| `idx_wallets_user_id` | btree | user_id | — |
| `wallets_pkey` | btree | id | ✓ |
| `wallets_user_id_key` | btree | user_id | ✓ |

### Foreign Keys

- `wallets_last_transaction_region_id_fkey`:
  - Columns: `last_transaction_region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `wallets_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

