# WHYNOTBROKER - Full Database Schema
> Auto-generated on: 2026-01-04T07:01:56.921Z
> **Total Tables:** 72
> **PostgreSQL Version:** 17.6

## Overview
This document details the live schema of the production Supabase database. All API backend code must align with the structures and rules defined here.

---

## `admin_audit_logs`

**Statistics:**
- Rows: ~980
- Columns: 8
- Indexes: 3
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `admin_id` | `uuid` | YES | `—` | — |
| `action` | `character varying(50)` | NO | `—` | — |
| `entity` | `character varying(50)` | NO | `—` | — |
| `entity_id` | `character varying(100)` | YES | `—` | — |
| `details` | `text` | YES | `—` | — |
| `ip_address` | `inet` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | NO | `timezone('utc'::text, now())` | — |

### Constraints

**CHECK:**
- `2200_40970_1_not_null`: N/A
- `2200_40970_3_not_null`: N/A
- `2200_40970_4_not_null`: N/A
- `2200_40970_8_not_null`: N/A

**FOREIGN KEY:**
- `admin_audit_logs_admin_id_fkey`: FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `admin_audit_logs_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `admin_audit_logs_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX admin_audit_logs_pkey ON public.admin_audit_logs USING btree (id)` |
| `idx_audit_admin_id` | btree | admin_id | — | — | `CREATE INDEX idx_audit_admin_id ON public.admin_audit_logs USING btree (admin_id)` |
| `idx_audit_created_at` | btree | created_at | — | — | `CREATE INDEX idx_audit_created_at ON public.admin_audit_logs USING btree (created_at DESC)` |

### Foreign Keys

- `admin_audit_logs_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `admin_chat`

**Statistics:**
- Rows: ~0
- Columns: 4
- Indexes: 1
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `admin_id` | `uuid` | YES | `—` | — |
| `message` | `text` | NO | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `timezone('utc'::text, now())` | — |

### Constraints

**CHECK:**
- `2200_42133_1_not_null`: N/A
- `2200_42133_3_not_null`: N/A

**FOREIGN KEY:**
- `admin_chat_admin_id_fkey`: FOREIGN KEY (admin_id) REFERENCES admins(id)

**PRIMARY KEY:**
- `admin_chat_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `admin_chat_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX admin_chat_pkey ON public.admin_chat USING btree (id)` |

### Foreign Keys

- `admin_chat_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `admin_leaves`

**Statistics:**
- Rows: ~0
- Columns: 8
- Indexes: 1
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `admin_id` | `uuid` | YES | `—` | — |
| `start_date` | `date` | NO | `—` | — |
| `end_date` | `date` | NO | `—` | — |
| `reason` | `text` | YES | `—` | — |
| `backup_admin_id` | `uuid` | YES | `—` | — |
| `status` | `text` | YES | `'pending'::text` | — |
| `created_at` | `timestamp with time zone` | YES | `timezone('utc'::text, now())` | — |

### Constraints

**CHECK:**
- `2200_42112_1_not_null`: N/A
- `2200_42112_3_not_null`: N/A
- `2200_42112_4_not_null`: N/A
- `admin_leaves_status_check`: CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text])))

**FOREIGN KEY:**
- `admin_leaves_admin_id_fkey`: FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE
- `admin_leaves_backup_admin_id_fkey`: FOREIGN KEY (backup_admin_id) REFERENCES admins(id)

**PRIMARY KEY:**
- `admin_leaves_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `admin_leaves_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX admin_leaves_pkey ON public.admin_leaves USING btree (id)` |

### Foreign Keys

- `admin_leaves_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `admin_leaves_backup_admin_id_fkey`:
  - Columns: `backup_admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `admin_messages`

**Statistics:**
- Rows: ~0
- Columns: 6
- Indexes: 1
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `sender_id` | `uuid` | NO | `—` | — |
| `receiver_id` | `uuid` | NO | `—` | — |
| `content` | `text` | NO | `—` | — |
| `is_read` | `boolean` | YES | `false` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_42151_1_not_null`: N/A
- `2200_42151_2_not_null`: N/A
- `2200_42151_3_not_null`: N/A
- `2200_42151_4_not_null`: N/A

**FOREIGN KEY:**
- `admin_messages_receiver_id_fkey`: FOREIGN KEY (receiver_id) REFERENCES admins(id) ON DELETE CASCADE
- `admin_messages_sender_id_fkey`: FOREIGN KEY (sender_id) REFERENCES admins(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `admin_messages_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `admin_messages_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX admin_messages_pkey ON public.admin_messages USING btree (id)` |

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
- Rows: ~0
- Columns: 5
- Indexes: 1
- Foreign Keys: 0
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `title` | `text` | NO | `—` | — |
| `content` | `text` | NO | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `timezone('utc'::text, now())` | — |

### Constraints

**CHECK:**
- `2200_42102_1_not_null`: N/A
- `2200_42102_2_not_null`: N/A
- `2200_42102_3_not_null`: N/A

**PRIMARY KEY:**
- `admin_notices_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `admin_notices_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX admin_notices_pkey ON public.admin_notices USING btree (id)` |

---

## `admin_roles`

**Statistics:**
- Rows: ~8
- Columns: 2
- Indexes: 1
- Foreign Keys: 2
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `admin_id` | `uuid` | NO | `—` | — |
| `role_id` | `uuid` | NO | `—` | — |

### Constraints

**CHECK:**
- `2200_39751_1_not_null`: N/A
- `2200_39751_2_not_null`: N/A

**FOREIGN KEY:**
- `admin_roles_admin_id_fkey`: FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE
- `admin_roles_role_id_fkey`: FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `admin_roles_pkey`: PRIMARY KEY (admin_id, role_id)
- `admin_roles_pkey`: PRIMARY KEY (admin_id, role_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `admin_roles_pkey` | btree | admin_id, role_id | ✓ | ✓ | `CREATE UNIQUE INDEX admin_roles_pkey ON public.admin_roles USING btree (admin_id, role_id)` |

### Foreign Keys

- `admin_roles_admin_id_fkey`:
  - Columns: `admin_id` → `admins(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `admin_roles_role_id_fkey`:
  - Columns: `role_id` → `roles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

### Triggers

- `on_role_assigned_log`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION log_admin_events()
```

---

## `admin_users`

**Statistics:**
- Rows: ~5
- Columns: 7
- Indexes: 1
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `—` | — |
| `is_active` | `boolean` | NO | `true` | — |
| `assigned_count` | `integer` | NO | `0` | — |
| `total_reviewed` | `integer` | NO | `0` | — |
| `last_active_at` | `timestamp with time zone` | NO | `now()` | — |
| `created_at` | `timestamp with time zone` | NO | `now()` | — |
| `updated_at` | `timestamp with time zone` | NO | `now()` | — |

### Constraints

**CHECK:**
- `2200_29892_1_not_null`: N/A
- `2200_29892_2_not_null`: N/A
- `2200_29892_3_not_null`: N/A
- `2200_29892_4_not_null`: N/A
- `2200_29892_5_not_null`: N/A
- `2200_29892_6_not_null`: N/A
- `2200_29892_7_not_null`: N/A

**FOREIGN KEY:**
- `admin_users_id_fkey`: FOREIGN KEY (id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `admin_users_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `admin_users_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX admin_users_pkey ON public.admin_users USING btree (id)` |

### Foreign Keys

- `admin_users_id_fkey`:
  - Columns: `id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `admins`

**Statistics:**
- Rows: ~13
- Columns: 12
- Indexes: 3
- Foreign Keys: 1
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `email` | `text` | NO | `—` | — |
| `is_active` | `boolean` | NO | `true` | — |
| `permissions_version` | `integer` | NO | `1` | — |
| `created_at` | `timestamp with time zone` | NO | `now()` | — |
| `password_hash` | `text` | YES | `—` | — |
| `full_name` | `text` | YES | `—` | — |
| `last_login_at` | `timestamp with time zone` | YES | `—` | — |
| `specialization` | `ARRAY` | YES | `—` | — |
| `assigned_regions` | `ARRAY` | YES | `—` | — |
| `assigned_cities` | `ARRAY` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_39693_1_not_null`: N/A
- `2200_39693_2_not_null`: N/A
- `2200_39693_3_not_null`: N/A
- `2200_39693_4_not_null`: N/A
- `2200_39693_5_not_null`: N/A
- `2200_39693_6_not_null`: N/A

**FOREIGN KEY:**
- `admins_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `admins_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `admins_email_key`: UNIQUE (email)
- `admins_user_id_key`: UNIQUE (user_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `admins_email_key` | btree | email | ✓ | — | `CREATE UNIQUE INDEX admins_email_key ON public.admins USING btree (email)` |
| `admins_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX admins_pkey ON public.admins USING btree (id)` |
| `admins_user_id_key` | btree | user_id | ✓ | — | `CREATE UNIQUE INDEX admins_user_id_key ON public.admins USING btree (user_id)` |

### Foreign Keys

- `admins_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

### Triggers

- `on_admin_created_log`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION log_admin_events()
```

---

## `appointments`

**Statistics:**
- Rows: ~5
- Columns: 18
- Indexes: 3
- Foreign Keys: 4
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `buyer_id` | `uuid` | NO | `—` | — |
| `seller_id` | `uuid` | NO | `—` | — |
| `appointment_date` | `date` | NO | `—` | — |
| `appointment_time` | `time without time zone` | NO | `—` | — |
| `duration_minutes` | `integer` | YES | `60` | — |
| `status` | `text` | YES | `'scheduled'::text` | — |
| `meeting_type` | `text` | YES | `'physical'::text` | — |
| `meeting_link` | `text` | YES | `—` | — |
| `location` | `text` | YES | `—` | — |
| `notes` | `text` | YES | `—` | — |
| `feedback` | `text` | YES | `—` | — |
| `rating` | `numeric` | YES | `—` | — |
| `cancelled_by` | `uuid` | YES | `—` | — |
| `cancellation_reason` | `text` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_19236_1_not_null`: N/A
- `2200_19236_2_not_null`: N/A
- `2200_19236_3_not_null`: N/A
- `2200_19236_4_not_null`: N/A
- `2200_19236_5_not_null`: N/A
- `2200_19236_6_not_null`: N/A
- `appointments_meeting_type_check`: CHECK ((meeting_type = ANY (ARRAY['physical'::text, 'virtual'::text, 'phone'::text])))
- `appointments_status_check`: CHECK ((status = ANY (ARRAY['scheduled'::text, 'confirmed'::text, 'completed'::text, 'cancelled'::text, 'no_show'::text])))

**FOREIGN KEY:**
- `appointments_buyer_id_fkey`: FOREIGN KEY (buyer_id) REFERENCES profiles(id) ON DELETE CASCADE
- `appointments_cancelled_by_fkey`: FOREIGN KEY (cancelled_by) REFERENCES profiles(id)
- `appointments_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `appointments_seller_id_fkey`: FOREIGN KEY (seller_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `appointments_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `appointments_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX appointments_pkey ON public.appointments USING btree (id)` |
| `idx_appointments_date_status` | btree | appointment_date, status | — | — | `CREATE INDEX idx_appointments_date_status ON public.appointments USING btree (appointment_date, status)` |
| `idx_appointments_property` | btree | property_id | — | — | `CREATE INDEX idx_appointments_property ON public.appointments USING btree (property_id)` |

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

### Triggers

- `update_appointments_updated_at`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_updated_at_column()
```

---

## `blog_posts`

**Statistics:**
- Rows: ~100
- Columns: 17
- Indexes: 3
- Foreign Keys: 1
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `pid` | `text` | NO | `—` | — |
| `author_id` | `uuid` | YES | `—` | — |
| `title` | `text` | NO | `—` | — |
| `slug` | `text` | NO | `—` | — |
| `excerpt` | `text` | YES | `—` | — |
| `content` | `text` | NO | `—` | — |
| `featured_image` | `text` | YES | `—` | — |
| `category` | `text` | YES | `—` | — |
| `tags` | `ARRAY` | YES | `—` | — |
| `status` | `text` | YES | `'draft'::text` | — |
| `view_count` | `integer` | YES | `0` | — |
| `like_count` | `integer` | YES | `0` | — |
| `comment_count` | `integer` | YES | `0` | — |
| `published_at` | `timestamp with time zone` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_19292_1_not_null`: N/A
- `2200_19292_2_not_null`: N/A
- `2200_19292_4_not_null`: N/A
- `2200_19292_5_not_null`: N/A
- `2200_19292_7_not_null`: N/A
- `blog_posts_status_check`: CHECK ((status = ANY (ARRAY['draft'::text, 'published'::text, 'archived'::text])))

**FOREIGN KEY:**
- `blog_posts_author_id_fkey`: FOREIGN KEY (author_id) REFERENCES profiles(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `blog_posts_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `blog_posts_pid_key`: UNIQUE (pid)
- `blog_posts_slug_key`: UNIQUE (slug)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `blog_posts_pid_key` | btree | pid | ✓ | — | `CREATE UNIQUE INDEX blog_posts_pid_key ON public.blog_posts USING btree (pid)` |
| `blog_posts_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX blog_posts_pkey ON public.blog_posts USING btree (id)` |
| `blog_posts_slug_key` | btree | slug | ✓ | — | `CREATE UNIQUE INDEX blog_posts_slug_key ON public.blog_posts USING btree (slug)` |

### Foreign Keys

- `blog_posts_author_id_fkey`:
  - Columns: `author_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

### Triggers

- `update_blog_posts_updated_at`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_updated_at_column()
```

---

## `builders`

**Statistics:**
- Rows: ~50
- Columns: 28
- Indexes: 5
- Foreign Keys: 0
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |
| `company_name` | `text` | NO | `—` | — |
| `registration_number` | `text` | YES | `—` | — |
| `rera_number` | `text` | YES | `—` | — |
| `pan_number` | `text` | YES | `—` | — |
| `gst_number` | `text` | YES | `—` | — |
| `logo_url` | `text` | YES | `—` | — |
| `description` | `text` | YES | `—` | — |
| `established_year` | `integer` | YES | `—` | — |
| `total_projects` | `integer` | YES | `0` | — |
| `completed_projects` | `integer` | YES | `0` | — |
| `ongoing_projects` | `integer` | YES | `0` | — |
| `total_units_delivered` | `integer` | YES | `0` | — |
| `specialization` | `ARRAY` | YES | `—` | — |
| `operating_cities` | `ARRAY` | YES | `—` | — |
| `website_url` | `text` | YES | `—` | — |
| `contact_email` | `text` | YES | `—` | — |
| `contact_phone` | `text` | YES | `—` | — |
| `office_address` | `text` | YES | `—` | — |
| `rating` | `numeric` | YES | `—` | — |
| `total_ratings` | `integer` | YES | `0` | — |
| `is_verified` | `boolean` | YES | `false` | — |
| `is_featured` | `boolean` | YES | `false` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |
| `normalized_name` | `text` | YES | `—` | — |
| `dedup_group_id` | `uuid` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_50816_1_not_null`: N/A
- `2200_50816_2_not_null`: N/A
- `2200_50816_3_not_null`: N/A

**PRIMARY KEY:**
- `builders_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `builders_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX builders_pkey ON public.builders USING btree (id)` |
| `idx_builders_dedup_group` | btree | dedup_group_id | — | — | `CREATE INDEX idx_builders_dedup_group ON public.builders USING btree (dedup_group_id)` |
| `idx_builders_name` | btree | name | — | — | `CREATE INDEX idx_builders_name ON public.builders USING btree (name)` |
| `idx_builders_normalized` | btree | normalized_name | — | — | `CREATE INDEX idx_builders_normalized ON public.builders USING btree (normalized_name)` |
| `idx_builders_verified` | btree | is_verified | — | — | `CREATE INDEX idx_builders_verified ON public.builders USING btree (is_verified)` |

---

## `campaign_participants`

> Track user participation in campaigns

**Statistics:**
- Rows: ~0
- Columns: 9
- Indexes: 5
- Foreign Keys: 2
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `campaign_id` | `uuid` | NO | `—` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `region_id` | `uuid` | YES | `—` | — |
| `credits_awarded` | `integer` | YES | `0` | — |
| `conditions_met` | `jsonb` | YES | `'{}'::jsonb` | — |
| `is_completed` | `boolean` | YES | `false` | — |
| `completed_at` | `timestamp with time zone` | YES | `—` | — |
| `joined_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45863_1_not_null`: N/A
- `2200_45863_2_not_null`: N/A
- `2200_45863_3_not_null`: N/A

**FOREIGN KEY:**
- `campaign_participants_campaign_id_fkey`: FOREIGN KEY (campaign_id) REFERENCES promotional_campaigns(id) ON DELETE CASCADE
- `campaign_participants_region_id_fkey`: FOREIGN KEY (region_id) REFERENCES regions(id)

**PRIMARY KEY:**
- `campaign_participants_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `campaign_participants_campaign_id_user_id_key`: UNIQUE (campaign_id, user_id)
- `campaign_participants_campaign_id_user_id_key`: UNIQUE (campaign_id, user_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `campaign_participants_campaign_id_user_id_key` | btree | campaign_id, user_id | ✓ | — | `CREATE UNIQUE INDEX campaign_participants_campaign_id_user_id_key ON public.campaign_participants USING btree (campaign_id, user_id)` |
| `campaign_participants_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX campaign_participants_pkey ON public.campaign_participants USING btree (id)` |
| `idx_campaign_participants_campaign` | btree | campaign_id | — | — | `CREATE INDEX idx_campaign_participants_campaign ON public.campaign_participants USING btree (campaign_id)` |
| `idx_campaign_participants_completed` | btree | is_completed | — | — | `CREATE INDEX idx_campaign_participants_completed ON public.campaign_participants USING btree (is_completed)` |
| `idx_campaign_participants_user` | btree | user_id | — | — | `CREATE INDEX idx_campaign_participants_user ON public.campaign_participants USING btree (user_id)` |

### Foreign Keys

- `campaign_participants_campaign_id_fkey`:
  - Columns: `campaign_id` → `promotional_campaigns(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `campaign_participants_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

### Triggers

- `trigger_increment_campaign_participants`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION increment_campaign_participants()
```

---

## `cities`

> Normalized city master with geo coordinates

**Statistics:**
- Rows: ~52
- Columns: 14
- Indexes: 8
- Foreign Keys: 2
- Triggers: 2

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |
| `normalized_name` | `text` | NO | `—` | "Lowercase, trimmed name for deduplication" |
| `state_id` | `uuid` | NO | `—` | — |
| `district_id` | `uuid` | YES | `—` | — |
| `lat` | `numeric` | YES | `—` | — |
| `lng` | `numeric` | YES | `—` | — |
| `geo_point` | `USER-DEFINED` | YES | `—` | — |
| `place_id` | `text` | YES | `—` | — |
| `population_estimate` | `integer` | YES | `—` | — |
| `is_metro` | `boolean` | YES | `false` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_56157_1_not_null`: N/A
- `2200_56157_2_not_null`: N/A
- `2200_56157_3_not_null`: N/A
- `2200_56157_4_not_null`: N/A
- `normalized_name_format`: CHECK ((normalized_name = lower(TRIM(BOTH FROM normalized_name))))
- `valid_india_bounds`: CHECK (((lat IS NULL) OR ((lat >= 6.0) AND (lat <= 37.0))))
- `valid_india_lng`: CHECK (((lng IS NULL) OR ((lng >= 68.0) AND (lng <= 98.0))))

**FOREIGN KEY:**
- `cities_district_id_fkey`: FOREIGN KEY (district_id) REFERENCES districts(id) ON DELETE SET NULL
- `cities_state_id_fkey`: FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `cities_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `cities_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX cities_pkey ON public.cities USING btree (id)` |
| `idx_cities_district` | btree | district_id | — | — | `CREATE INDEX idx_cities_district ON public.cities USING btree (district_id)` |
| `idx_cities_geo` | gist | geo_point | — | — | `CREATE INDEX idx_cities_geo ON public.cities USING gist (geo_point)` |
| `idx_cities_metro` | btree | is_metro | — | — | `CREATE INDEX idx_cities_metro ON public.cities USING btree (is_metro) WHERE (is_metro = true)` |
| `idx_cities_name_trgm` | gin | name | — | — | `CREATE INDEX idx_cities_name_trgm ON public.cities USING gin (name gin_trgm_ops)` |
| `idx_cities_normalized_name` | btree | normalized_name | — | — | `CREATE INDEX idx_cities_normalized_name ON public.cities USING btree (normalized_name)` |
| `idx_cities_state` | btree | state_id | — | — | `CREATE INDEX idx_cities_state ON public.cities USING btree (state_id)` |
| `idx_cities_unique_name_state` | btree | normalized_name, state_id | ✓ | — | `CREATE UNIQUE INDEX idx_cities_unique_name_state ON public.cities USING btree (normalized_name, state_id)` |

### Foreign Keys

- `cities_district_id_fkey`:
  - Columns: `district_id` → `districts(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL
- `cities_state_id_fkey`:
  - Columns: `state_id` → `states(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

### Triggers

- `sync_city_geo_point`:
  - When: BEFORE INSERT
  - Definition:
```sql
  EXECUTE FUNCTION update_city_geo_point()
```
- `sync_city_geo_point`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_city_geo_point()
```

---

## `coupon_usage`

> Track coupon redemptions by users

**Statistics:**
- Rows: ~0
- Columns: 9
- Indexes: 5
- Foreign Keys: 2
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `coupon_id` | `uuid` | NO | `—` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `transaction_id` | `uuid` | YES | `—` | — |
| `discount_applied` | `numeric` | NO | `—` | — |
| `original_amount` | `numeric` | NO | `—` | — |
| `final_amount` | `numeric` | NO | `—` | — |
| `region_id` | `uuid` | YES | `—` | — |
| `used_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45839_1_not_null`: N/A
- `2200_45839_2_not_null`: N/A
- `2200_45839_3_not_null`: N/A
- `2200_45839_5_not_null`: N/A
- `2200_45839_6_not_null`: N/A
- `2200_45839_7_not_null`: N/A

**FOREIGN KEY:**
- `coupon_usage_coupon_id_fkey`: FOREIGN KEY (coupon_id) REFERENCES coupons(id) ON DELETE CASCADE
- `coupon_usage_region_id_fkey`: FOREIGN KEY (region_id) REFERENCES regions(id)

**PRIMARY KEY:**
- `coupon_usage_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `coupon_usage_coupon_id_user_id_transaction_id_key`: UNIQUE (coupon_id, user_id, transaction_id)
- `coupon_usage_coupon_id_user_id_transaction_id_key`: UNIQUE (coupon_id, user_id, transaction_id)
- `coupon_usage_coupon_id_user_id_transaction_id_key`: UNIQUE (coupon_id, user_id, transaction_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `coupon_usage_coupon_id_user_id_transaction_id_key` | btree | coupon_id, user_id, transaction_id | ✓ | — | `CREATE UNIQUE INDEX coupon_usage_coupon_id_user_id_transaction_id_key ON public.coupon_usage USING btree (coupon_id, user_id, transaction_id)` |
| `coupon_usage_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX coupon_usage_pkey ON public.coupon_usage USING btree (id)` |
| `idx_coupon_usage_coupon` | btree | coupon_id | — | — | `CREATE INDEX idx_coupon_usage_coupon ON public.coupon_usage USING btree (coupon_id)` |
| `idx_coupon_usage_transaction` | btree | transaction_id | — | — | `CREATE INDEX idx_coupon_usage_transaction ON public.coupon_usage USING btree (transaction_id)` |
| `idx_coupon_usage_user` | btree | user_id | — | — | `CREATE INDEX idx_coupon_usage_user ON public.coupon_usage USING btree (user_id)` |

### Foreign Keys

- `coupon_usage_coupon_id_fkey`:
  - Columns: `coupon_id` → `coupons(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `coupon_usage_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

### Triggers

- `trigger_increment_coupon_usage`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION increment_coupon_usage()
```

---

## `coupons`

> Discount coupons with regional targeting

**Statistics:**
- Rows: ~0
- Columns: 23
- Indexes: 6
- Foreign Keys: 1
- Triggers: 3

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `code` | `text` | NO | `—` | — |
| `description` | `text` | YES | `—` | — |
| `discount_type` | `text` | NO | `—` | — |
| `discount_value` | `numeric` | NO | `—` | — |
| `max_discount_amount` | `numeric` | YES | `—` | — |
| `min_purchase_amount` | `numeric` | YES | `0` | — |
| `region_ids` | `ARRAY` | YES | `—` | — |
| `excluded_region_ids` | `ARRAY` | YES | `—` | — |
| `applicable_to` | `ARRAY` | YES | `ARRAY['credits'::text, 'subscriptions'::text, 'services'::text]` | — |
| `user_type_restrictions` | `ARRAY` | YES | `—` | — |
| `new_users_only` | `boolean` | YES | `false` | — |
| `usage_limit_global` | `integer` | YES | `—` | — |
| `usage_limit_per_user` | `integer` | YES | `1` | — |
| `usage_limit_per_region` | `jsonb` | YES | `'{}'::jsonb` | — |
| `times_used` | `integer` | YES | `0` | — |
| `valid_from` | `timestamp with time zone` | YES | `now()` | — |
| `valid_until` | `timestamp with time zone` | YES | `—` | — |
| `campaign_id` | `uuid` | YES | `—` | — |
| `attribution_source` | `text` | YES | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45802_1_not_null`: N/A
- `2200_45802_2_not_null`: N/A
- `2200_45802_4_not_null`: N/A
- `2200_45802_5_not_null`: N/A
- `coupons_discount_type_check`: CHECK ((discount_type = ANY (ARRAY['percentage'::text, 'fixed_amount'::text, 'credits'::text, 'free_service'::text])))

**FOREIGN KEY:**
- `coupons_campaign_id_fkey`: FOREIGN KEY (campaign_id) REFERENCES promotional_campaigns(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `coupons_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `coupons_code_key`: UNIQUE (code)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `coupons_code_key` | btree | code | ✓ | — | `CREATE UNIQUE INDEX coupons_code_key ON public.coupons USING btree (code)` |
| `coupons_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX coupons_pkey ON public.coupons USING btree (id)` |
| `idx_coupons_campaign` | btree | campaign_id | — | — | `CREATE INDEX idx_coupons_campaign ON public.coupons USING btree (campaign_id)` |
| `idx_coupons_code` | btree | code | — | — | `CREATE INDEX idx_coupons_code ON public.coupons USING btree (code) WHERE (is_active = true)` |
| `idx_coupons_regions` | gin | region_ids | — | — | `CREATE INDEX idx_coupons_regions ON public.coupons USING gin (region_ids)` |
| `idx_coupons_valid` | btree | valid_from, valid_until | — | — | `CREATE INDEX idx_coupons_valid ON public.coupons USING btree (valid_from, valid_until) WHERE (is_active = true)` |

### Foreign Keys

- `coupons_campaign_id_fkey`:
  - Columns: `campaign_id` → `promotional_campaigns(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

### Triggers

- `audit_coupons`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_coupons`:
  - When: AFTER DELETE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_coupons`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```

---

## `credit_packages`

> Pre-paid credit packages with regional pricing variations

**Statistics:**
- Rows: ~0
- Columns: 17
- Indexes: 3
- Foreign Keys: 1
- Triggers: 3

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |
| `credits` | `integer` | NO | `—` | — |
| `base_price` | `numeric` | NO | `—` | — |
| `bonus_credits` | `integer` | YES | `0` | — |
| `region_id` | `uuid` | YES | `—` | — |
| `regional_price` | `numeric` | YES | `—` | — |
| `is_popular` | `boolean` | YES | `false` | — |
| `user_type_restriction` | `text` | YES | `—` | — |
| `validity_days` | `integer` | YES | `—` | — |
| `display_order` | `integer` | YES | `0` | — |
| `badge_text` | `text` | YES | `—` | — |
| `description` | `text` | YES | `—` | — |
| `features` | `ARRAY` | YES | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45731_1_not_null`: N/A
- `2200_45731_2_not_null`: N/A
- `2200_45731_3_not_null`: N/A
- `2200_45731_4_not_null`: N/A

**FOREIGN KEY:**
- `credit_packages_region_id_fkey`: FOREIGN KEY (region_id) REFERENCES regions(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `credit_packages_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `credit_packages_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX credit_packages_pkey ON public.credit_packages USING btree (id)` |
| `idx_credit_packages_active` | btree | display_order, is_active | — | — | `CREATE INDEX idx_credit_packages_active ON public.credit_packages USING btree (is_active, display_order)` |
| `idx_credit_packages_region` | btree | region_id | — | — | `CREATE INDEX idx_credit_packages_region ON public.credit_packages USING btree (region_id) WHERE (is_active = true)` |

### Foreign Keys

- `credit_packages_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

### Triggers

- `audit_credit_packages`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_credit_packages`:
  - When: AFTER DELETE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_credit_packages`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```

---

## `districts`

> Indian districts linked to LGD state codes

**Statistics:**
- Rows: ~0
- Columns: 7
- Indexes: 6
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `lgd_code` | `character varying(10)` | NO | `—` | — |
| `state_id` | `uuid` | NO | `—` | — |
| `name` | `text` | NO | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_56113_1_not_null`: N/A
- `2200_56113_2_not_null`: N/A
- `2200_56113_3_not_null`: N/A
- `2200_56113_4_not_null`: N/A
- `valid_district_lgd`: CHECK (((lgd_code)::text ~ '^[0-9]{3,10}$'::text))

**FOREIGN KEY:**
- `districts_state_id_fkey`: FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `districts_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `districts_lgd_code_key`: UNIQUE (lgd_code)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `districts_lgd_code_key` | btree | lgd_code | ✓ | — | `CREATE UNIQUE INDEX districts_lgd_code_key ON public.districts USING btree (lgd_code)` |
| `districts_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX districts_pkey ON public.districts USING btree (id)` |
| `idx_districts_lgd` | btree | lgd_code | — | — | `CREATE INDEX idx_districts_lgd ON public.districts USING btree (lgd_code)` |
| `idx_districts_name` | btree | state_id, name | — | — | `CREATE INDEX idx_districts_name ON public.districts USING btree (state_id, name)` |
| `idx_districts_name_trgm` | gin | name | — | — | `CREATE INDEX idx_districts_name_trgm ON public.districts USING gin (name gin_trgm_ops)` |
| `idx_districts_state` | btree | state_id | — | — | `CREATE INDEX idx_districts_state ON public.districts USING btree (state_id)` |

### Foreign Keys

- `districts_state_id_fkey`:
  - Columns: `state_id` → `states(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `hot_properties`

> Real-time tracking of trending properties with high demand signals

**Statistics:**
- Rows: ~3
- Columns: 25
- Indexes: 5
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `heat_score` | `numeric` | NO | `0` | — |
| `views_spike_percentage` | `numeric` | YES | `—` | — |
| `inquiries_spike_percentage` | `numeric` | YES | `—` | — |
| `favorites_spike_percentage` | `numeric` | YES | `—` | — |
| `views_per_hour` | `numeric` | YES | `—` | — |
| `inquiries_per_day` | `numeric` | YES | `—` | — |
| `unique_viewers_per_day` | `numeric` | YES | `—` | — |
| `comparing_users_count` | `integer` | YES | `0` | — |
| `saved_by_users_count` | `integer` | YES | `0` | — |
| `sharing_frequency` | `numeric` | YES | `—` | — |
| `price_recently_reduced` | `boolean` | YES | `false` | — |
| `new_listing` | `boolean` | YES | `false` | — |
| `limited_availability` | `boolean` | YES | `false` | — |
| `hot_reasons` | `ARRAY` | YES | `—` | — |
| `heat_trend` | `text` | YES | `—` | — |
| `days_as_hot` | `integer` | YES | `0` | — |
| `peak_heat_score` | `numeric` | YES | `—` | — |
| `estimated_days_until_sold` | `integer` | YES | `—` | — |
| `probability_sold_this_week` | `numeric` | YES | `—` | — |
| `is_currently_hot` | `boolean` | YES | `true` | — |
| `became_hot_at` | `timestamp with time zone` | YES | `now()` | — |
| `cooled_down_at` | `timestamp with time zone` | YES | `—` | — |
| `calculated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_51346_1_not_null`: N/A
- `2200_51346_2_not_null`: N/A
- `2200_51346_3_not_null`: N/A
- `hot_properties_heat_trend_check`: CHECK ((heat_trend = ANY (ARRAY['rising'::text, 'peak'::text, 'cooling'::text, 'stable'::text])))

**FOREIGN KEY:**
- `hot_properties_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `hot_properties_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `hot_properties_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX hot_properties_pkey ON public.hot_properties USING btree (id)` |
| `idx_hot_properties_active` | btree | heat_score, is_currently_hot | — | — | `CREATE INDEX idx_hot_properties_active ON public.hot_properties USING btree (is_currently_hot, heat_score DESC)` |
| `idx_hot_properties_property` | btree | property_id | — | — | `CREATE INDEX idx_hot_properties_property ON public.hot_properties USING btree (property_id)` |
| `idx_hot_properties_score` | btree | heat_score | — | — | `CREATE INDEX idx_hot_properties_score ON public.hot_properties USING btree (heat_score DESC) WHERE (is_currently_hot = true)` |
| `idx_hot_properties_trend` | btree | heat_trend | — | — | `CREATE INDEX idx_hot_properties_trend ON public.hot_properties USING btree (heat_trend)` |

### Foreign Keys

- `hot_properties_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `loan_calculations`

**Statistics:**
- Rows: ~0
- Columns: 13
- Indexes: 2
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | YES | `—` | — |
| `property_id` | `uuid` | YES | `—` | — |
| `property_price` | `numeric` | NO | `—` | — |
| `down_payment` | `numeric` | NO | `—` | — |
| `loan_amount` | `numeric` | NO | `—` | — |
| `interest_rate` | `numeric` | NO | `—` | — |
| `tenure_years` | `integer` | NO | `—` | — |
| `emi_amount` | `numeric` | NO | `—` | — |
| `total_interest` | `numeric` | YES | `—` | — |
| `total_amount` | `numeric` | YES | `—` | — |
| `calculation_data` | `jsonb` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_50934_1_not_null`: N/A
- `2200_50934_4_not_null`: N/A
- `2200_50934_5_not_null`: N/A
- `2200_50934_6_not_null`: N/A
- `2200_50934_7_not_null`: N/A
- `2200_50934_8_not_null`: N/A
- `2200_50934_9_not_null`: N/A

**FOREIGN KEY:**
- `loan_calculations_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE SET NULL
- `loan_calculations_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `loan_calculations_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_loan_calculations_user` | btree | user_id | — | — | `CREATE INDEX idx_loan_calculations_user ON public.loan_calculations USING btree (user_id)` |
| `loan_calculations_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX loan_calculations_pkey ON public.loan_calculations USING btree (id)` |

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
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |
| `region_id` | `uuid` | YES | `—` | — |
| `pincode` | `text` | YES | `—` | — |
| `latitude` | `numeric` | YES | `—` | — |
| `longitude` | `numeric` | YES | `—` | — |
| `boundary_geojson` | `jsonb` | YES | `—` | — |
| `locality_type` | `text` | YES | `—` | — |
| `tier_rating` | `integer` | YES | `—` | — |
| `avg_price_per_sqft` | `numeric` | YES | `—` | — |
| `price_trend_6m` | `numeric` | YES | `—` | — |
| `price_trend_1y` | `numeric` | YES | `—` | — |
| `total_properties` | `integer` | YES | `0` | — |
| `available_properties` | `integer` | YES | `0` | — |
| `infrastructure_score` | `numeric` | YES | `—` | — |
| `connectivity_score` | `numeric` | YES | `—` | — |
| `safety_score` | `numeric` | YES | `—` | — |
| `amenities_score` | `numeric` | YES | `—` | — |
| `is_gated_community` | `boolean` | YES | `false` | — |
| `is_verified` | `boolean` | YES | `false` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |
| `city_id` | `uuid` | YES | `—` | — |
| `district_id` | `uuid` | YES | `—` | — |
| `state_id` | `uuid` | YES | `—` | — |
| `normalized_name` | `text` | NO | `—` | — |
| `popularity_score` | `numeric` | YES | `0` | "Derived from property count + search frequency" |
| `source` | `text` | YES | `'system'::text` | — |

### Constraints

**CHECK:**
- `2200_50622_1_not_null`: N/A
- `2200_50622_28_not_null`: N/A
- `2200_50622_2_not_null`: N/A
- `localities_locality_type_check`: CHECK ((locality_type = ANY (ARRAY['residential'::text, 'commercial'::text, 'mixed'::text, 'industrial'::text])))
- `localities_source_check`: CHECK ((source = ANY (ARRAY['system'::text, 'user'::text, 'builder'::text, 'admin'::text])))
- `localities_tier_rating_check`: CHECK (((tier_rating >= 1) AND (tier_rating <= 5)))
- `normalized_name_format`: CHECK ((normalized_name = lower(TRIM(BOTH FROM normalized_name))))

**FOREIGN KEY:**
- `localities_city_id_fkey`: FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
- `localities_district_id_fkey`: FOREIGN KEY (district_id) REFERENCES districts(id) ON DELETE SET NULL
- `localities_region_id_fkey`: FOREIGN KEY (region_id) REFERENCES regions(id)
- `localities_state_id_fkey`: FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `localities_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_localities_city_new` | btree | city_id | — | — | `CREATE INDEX idx_localities_city_new ON public.localities USING btree (city_id)` |
| `idx_localities_district` | btree | district_id | — | — | `CREATE INDEX idx_localities_district ON public.localities USING btree (district_id)` |
| `idx_localities_name_trgm` | gin | name | — | — | `CREATE INDEX idx_localities_name_trgm ON public.localities USING gin (name gin_trgm_ops)` |
| `idx_localities_normalized` | btree | normalized_name | — | — | `CREATE INDEX idx_localities_normalized ON public.localities USING btree (normalized_name)` |
| `idx_localities_pincode` | btree | pincode | — | — | `CREATE INDEX idx_localities_pincode ON public.localities USING btree (pincode)` |
| `idx_localities_popularity` | btree | popularity_score | — | — | `CREATE INDEX idx_localities_popularity ON public.localities USING btree (popularity_score DESC)` |
| `idx_localities_region` | btree | region_id | — | — | `CREATE INDEX idx_localities_region ON public.localities USING btree (region_id)` |
| `idx_localities_state_new` | btree | state_id | — | — | `CREATE INDEX idx_localities_state_new ON public.localities USING btree (state_id)` |
| `idx_localities_unique_name_city` | btree | city_id, normalized_name | ✓ | — | `CREATE UNIQUE INDEX idx_localities_unique_name_city ON public.localities USING btree (normalized_name, city_id)` |
| `localities_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX localities_pkey ON public.localities USING btree (id)` |

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
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `locality_id` | `uuid` | NO | `—` | — |
| `category` | `text` | NO | `—` | — |
| `name` | `text` | NO | `—` | — |
| `distance_km` | `numeric` | NO | `—` | — |
| `rating` | `numeric` | YES | `—` | — |
| `latitude` | `numeric` | YES | `—` | — |
| `longitude` | `numeric` | YES | `—` | — |
| `is_verified` | `boolean` | YES | `false` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_50646_1_not_null`: N/A
- `2200_50646_2_not_null`: N/A
- `2200_50646_3_not_null`: N/A
- `2200_50646_4_not_null`: N/A
- `2200_50646_5_not_null`: N/A
- `locality_amenities_category_check`: CHECK ((category = ANY (ARRAY['school'::text, 'hospital'::text, 'shopping'::text, 'restaurant'::text, 'bank'::text, 'atm'::text, 'metro_station'::text, 'bus_stop'::text, 'railway_station'::text, 'airport'::text, 'park'::text, 'gym'::text, 'temple'::text, 'mosque'::text, 'church'::text, 'mall'::text, 'police_station'::text, 'fire_station'::text, 'post_office'::text, 'government_office'::text])))

**FOREIGN KEY:**
- `locality_amenities_locality_id_fkey`: FOREIGN KEY (locality_id) REFERENCES localities(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `locality_amenities_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_locality_amenities_distance` | btree | locality_id, distance_km | — | — | `CREATE INDEX idx_locality_amenities_distance ON public.locality_amenities USING btree (locality_id, distance_km)` |
| `idx_locality_amenities_locality` | btree | locality_id, category | — | — | `CREATE INDEX idx_locality_amenities_locality ON public.locality_amenities USING btree (locality_id, category)` |
| `locality_amenities_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX locality_amenities_pkey ON public.locality_amenities USING btree (id)` |

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
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `entity_type` | `text` | NO | `—` | — |
| `entity_id` | `uuid` | NO | `—` | — |
| `boundary` | `USER-DEFINED` | NO | `—` | — |
| `source` | `text` | YES | `—` | — |
| `confidence_score` | `numeric` | YES | `0.5` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `min_zoom` | `integer` | YES | `12` | "Minimum map zoom level to render boundary" |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_56291_1_not_null`: N/A
- `2200_56291_2_not_null`: N/A
- `2200_56291_3_not_null`: N/A
- `2200_56291_4_not_null`: N/A
- `confidence_range`: CHECK (((confidence_score >= (0)::numeric) AND (confidence_score <= (1)::numeric)))
- `location_boundaries_entity_type_check`: CHECK ((entity_type = ANY (ARRAY['city'::text, 'locality'::text, 'project'::text, 'district'::text])))
- `location_boundaries_source_check`: CHECK ((source = ANY (ARRAY['osm'::text, 'manual'::text, 'google'::text, 'govt'::text])))
- `valid_zoom`: CHECK (((min_zoom >= 1) AND (min_zoom <= 20)))

**PRIMARY KEY:**
- `location_boundaries_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_location_boundaries_active` | btree | is_active | — | — | `CREATE INDEX idx_location_boundaries_active ON public.location_boundaries USING btree (is_active) WHERE (is_active = true)` |
| `idx_location_boundaries_entity` | btree | entity_type, entity_id | — | — | `CREATE INDEX idx_location_boundaries_entity ON public.location_boundaries USING btree (entity_type, entity_id)` |
| `idx_location_boundaries_geo` | gist | boundary | — | — | `CREATE INDEX idx_location_boundaries_geo ON public.location_boundaries USING gist (boundary)` |
| `idx_location_boundaries_unique` | btree | entity_type, entity_id, source | ✓ | — | `CREATE UNIQUE INDEX idx_location_boundaries_unique ON public.location_boundaries USING btree (entity_type, entity_id, source) WHERE (is_active = true)` |
| `idx_location_boundaries_zoom` | btree | min_zoom | — | — | `CREATE INDEX idx_location_boundaries_zoom ON public.location_boundaries USING btree (min_zoom)` |
| `location_boundaries_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX location_boundaries_pkey ON public.location_boundaries USING btree (id)` |

---

## `location_canonical_map`

> Maps user input variations to canonical localities

**Statistics:**
- Rows: ~8
- Columns: 10
- Indexes: 8
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `raw_name` | `text` | NO | `—` | — |
| `normalized_name` | `text` | NO | `—` | — |
| `locality_id` | `uuid` | YES | `—` | — |
| `city_id` | `uuid` | YES | `—` | — |
| `confidence_score` | `numeric` | YES | `0.5` | "ML confidence in mapping (0-1)" |
| `usage_count` | `integer` | YES | `0` | — |
| `last_used_at` | `timestamp with time zone` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_56259_1_not_null`: N/A
- `2200_56259_2_not_null`: N/A
- `2200_56259_3_not_null`: N/A
- `confidence_range`: CHECK (((confidence_score >= (0)::numeric) AND (confidence_score <= (1)::numeric)))
- `usage_count_positive`: CHECK ((usage_count >= 0))

**FOREIGN KEY:**
- `location_canonical_map_city_id_fkey`: FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
- `location_canonical_map_locality_id_fkey`: FOREIGN KEY (locality_id) REFERENCES localities(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `location_canonical_map_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_location_canonical_city` | btree | city_id | — | — | `CREATE INDEX idx_location_canonical_city ON public.location_canonical_map USING btree (city_id)` |
| `idx_location_canonical_confidence` | btree | confidence_score | — | — | `CREATE INDEX idx_location_canonical_confidence ON public.location_canonical_map USING btree (confidence_score DESC)` |
| `idx_location_canonical_locality` | btree | locality_id | — | — | `CREATE INDEX idx_location_canonical_locality ON public.location_canonical_map USING btree (locality_id)` |
| `idx_location_canonical_normalized` | btree | normalized_name | — | — | `CREATE INDEX idx_location_canonical_normalized ON public.location_canonical_map USING btree (normalized_name)` |
| `idx_location_canonical_raw` | btree | raw_name | — | — | `CREATE INDEX idx_location_canonical_raw ON public.location_canonical_map USING btree (raw_name)` |
| `idx_location_canonical_raw_trgm` | gin | raw_name | — | — | `CREATE INDEX idx_location_canonical_raw_trgm ON public.location_canonical_map USING gin (raw_name gin_trgm_ops)` |
| `idx_location_canonical_usage` | btree | usage_count | — | — | `CREATE INDEX idx_location_canonical_usage ON public.location_canonical_map USING btree (usage_count DESC)` |
| `location_canonical_map_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX location_canonical_map_pkey ON public.location_canonical_map USING btree (id)` |

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
- Rows: ~100,000
- Columns: 16
- Indexes: 4
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `region_id` | `uuid` | YES | `—` | — |
| `locality_id` | `uuid` | YES | `—` | — |
| `property_type` | `text` | NO | `—` | — |
| `bhk_type` | `text` | YES | `—` | — |
| `avg_price` | `numeric` | NO | `—` | — |
| `median_price` | `numeric` | YES | `—` | — |
| `min_price` | `numeric` | YES | `—` | — |
| `max_price` | `numeric` | YES | `—` | — |
| `total_listings` | `integer` | YES | `—` | — |
| `sold_count` | `integer` | YES | `—` | — |
| `avg_time_to_sell` | `integer` | YES | `—` | — |
| `supply_demand_ratio` | `numeric` | YES | `—` | — |
| `price_change_percentage` | `numeric` | YES | `—` | — |
| `month_year` | `date` | NO | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_50764_15_not_null`: N/A
- `2200_50764_1_not_null`: N/A
- `2200_50764_4_not_null`: N/A
- `2200_50764_6_not_null`: N/A

**FOREIGN KEY:**
- `market_trends_locality_id_fkey`: FOREIGN KEY (locality_id) REFERENCES localities(id)
- `market_trends_region_id_fkey`: FOREIGN KEY (region_id) REFERENCES regions(id)

**PRIMARY KEY:**
- `market_trends_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `market_trends_region_id_locality_id_property_type_bhk_type__key`: UNIQUE (region_id, locality_id, property_type, bhk_type, month_year)
- `market_trends_region_id_locality_id_property_type_bhk_type__key`: UNIQUE (region_id, locality_id, property_type, bhk_type, month_year)
- `market_trends_region_id_locality_id_property_type_bhk_type__key`: UNIQUE (region_id, locality_id, property_type, bhk_type, month_year)
- `market_trends_region_id_locality_id_property_type_bhk_type__key`: UNIQUE (region_id, locality_id, property_type, bhk_type, month_year)
- `market_trends_region_id_locality_id_property_type_bhk_type__key`: UNIQUE (region_id, locality_id, property_type, bhk_type, month_year)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_market_trends_locality` | btree | locality_id, month_year | — | — | `CREATE INDEX idx_market_trends_locality ON public.market_trends USING btree (locality_id, month_year)` |
| `idx_market_trends_region` | btree | region_id, month_year | — | — | `CREATE INDEX idx_market_trends_region ON public.market_trends USING btree (region_id, month_year)` |
| `market_trends_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX market_trends_pkey ON public.market_trends USING btree (id)` |
| `market_trends_region_id_locality_id_property_type_bhk_type__key` | btree | region_id, locality_id, property_type, bhk_type, month_year | ✓ | — | `CREATE UNIQUE INDEX market_trends_region_id_locality_id_property_type_bhk_type__key ON public.market_trends USING btree (region_id, locality_id, property_type, bhk_type, month_year)` |

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

## `messages`

**Statistics:**
- Rows: ~5
- Columns: 21
- Indexes: 3
- Foreign Keys: 5
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `sender_id` | `uuid` | NO | `—` | — |
| `receiver_id` | `uuid` | NO | `—` | — |
| `property_id` | `uuid` | YES | `—` | — |
| `subject` | `text` | YES | `—` | — |
| `message` | `text` | NO | `—` | — |
| `message_type` | `text` | YES | `'inquiry'::text` | — |
| `is_read` | `boolean` | YES | `false` | — |
| `is_important` | `boolean` | YES | `false` | — |
| `is_archived` | `boolean` | YES | `false` | — |
| `read_at` | `timestamp with time zone` | YES | `—` | — |
| `appointment_date` | `date` | YES | `—` | — |
| `appointment_time` | `time without time zone` | YES | `—` | — |
| `appointment_status` | `text` | YES | `—` | — |
| `ip_address` | `inet` | YES | `—` | — |
| `user_agent` | `text` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |
| `lead_id` | `uuid` | YES | `—` | — |
| `parent_message_id` | `uuid` | YES | `—` | — |
| `attachments` | `ARRAY` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_19104_1_not_null`: N/A
- `2200_19104_2_not_null`: N/A
- `2200_19104_3_not_null`: N/A
- `2200_19104_6_not_null`: N/A
- `messages_appointment_status_check`: CHECK ((appointment_status = ANY (ARRAY['pending'::text, 'confirmed'::text, 'cancelled'::text, 'completed'::text, 'rescheduled'::text])))
- `messages_message_type_check`: CHECK ((message_type = ANY (ARRAY['inquiry'::text, 'response'::text, 'general'::text, 'appointment'::text, 'feedback'::text])))

**FOREIGN KEY:**
- `messages_lead_id_fkey`: FOREIGN KEY (lead_id) REFERENCES property_leads(id)
- `messages_parent_message_id_fkey`: FOREIGN KEY (parent_message_id) REFERENCES messages(id)
- `messages_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE SET NULL
- `messages_receiver_id_fkey`: FOREIGN KEY (receiver_id) REFERENCES profiles(id) ON DELETE CASCADE
- `messages_sender_id_fkey`: FOREIGN KEY (sender_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `messages_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_messages_property` | btree | property_id | — | — | `CREATE INDEX idx_messages_property ON public.messages USING btree (property_id)` |
| `idx_messages_sender_receiver` | btree | sender_id, receiver_id | — | — | `CREATE INDEX idx_messages_sender_receiver ON public.messages USING btree (sender_id, receiver_id)` |
| `messages_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX messages_pkey ON public.messages USING btree (id)` |

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

### Triggers

- `update_messages_updated_at`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_updated_at_column()
```

---

## `moderation_history`

**Statistics:**
- Rows: ~5
- Columns: 10
- Indexes: 1
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `admin_id` | `uuid` | NO | `—` | — |
| `action` | `text` | NO | `—` | — |
| `reason` | `text` | YES | `—` | — |
| `notes` | `text` | YES | `—` | — |
| `checklist` | `jsonb` | YES | `—` | — |
| `previous_state` | `text` | YES | `—` | — |
| `new_state` | `text` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | NO | `now()` | — |

### Constraints

**CHECK:**
- `2200_30054_10_not_null`: N/A
- `2200_30054_1_not_null`: N/A
- `2200_30054_2_not_null`: N/A
- `2200_30054_3_not_null`: N/A
- `2200_30054_4_not_null`: N/A
- `moderation_history_action_check`: CHECK ((action = ANY (ARRAY['approved'::text, 'rejected'::text, 'requested_changes'::text])))

**FOREIGN KEY:**
- `moderation_history_admin_id_fkey`: FOREIGN KEY (admin_id) REFERENCES profiles(id)
- `moderation_history_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id)

**PRIMARY KEY:**
- `moderation_history_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `moderation_history_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX moderation_history_pkey ON public.moderation_history USING btree (id)` |

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
- Rows: ~0
- Columns: 13
- Indexes: 1
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `user_id` | `uuid` | NO | `—` | — |
| `email_enabled` | `boolean` | YES | `true` | — |
| `sms_enabled` | `boolean` | YES | `true` | — |
| `push_enabled` | `boolean` | YES | `true` | — |
| `whatsapp_enabled` | `boolean` | YES | `false` | — |
| `new_properties` | `boolean` | YES | `true` | — |
| `price_drops` | `boolean` | YES | `true` | — |
| `saved_search_matches` | `boolean` | YES | `true` | — |
| `property_updates` | `boolean` | YES | `true` | — |
| `promotional` | `boolean` | YES | `true` | — |
| `newsletter` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_50865_1_not_null`: N/A

**FOREIGN KEY:**
- `notification_preferences_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `notification_preferences_pkey`: PRIMARY KEY (user_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `notification_preferences_pkey` | btree | user_id | ✓ | ✓ | `CREATE UNIQUE INDEX notification_preferences_pkey ON public.notification_preferences USING btree (user_id)` |

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
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `notification_type` | `text` | NO | `—` | — |
| `title` | `text` | NO | `—` | — |
| `message` | `text` | NO | `—` | — |
| `data` | `jsonb` | YES | `—` | — |
| `is_read` | `boolean` | YES | `false` | — |
| `is_archived` | `boolean` | YES | `false` | — |
| `read_at` | `timestamp with time zone` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_19196_1_not_null`: N/A
- `2200_19196_2_not_null`: N/A
- `2200_19196_3_not_null`: N/A
- `2200_19196_4_not_null`: N/A
- `2200_19196_5_not_null`: N/A
- `notifications_notification_type_check`: CHECK ((notification_type = ANY (ARRAY['message'::text, 'inquiry'::text, 'rating'::text, 'property_view'::text, 'favorite'::text, 'appointment'::text, 'system'::text, 'marketing'::text, 'alert'::text])))

**FOREIGN KEY:**
- `notifications_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `notifications_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_notifications_user_unread` | btree | user_id, is_read | — | — | `CREATE INDEX idx_notifications_user_unread ON public.notifications USING btree (user_id, is_read) WHERE (is_read = false)` |
| `notifications_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX notifications_pkey ON public.notifications USING btree (id)` |

### Foreign Keys

- `notifications_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `permissions`

**Statistics:**
- Rows: ~11
- Columns: 5
- Indexes: 3
- Foreign Keys: 0
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |
| `domain` | `USER-DEFINED` | NO | `—` | — |
| `action` | `USER-DEFINED` | NO | `—` | — |
| `scope` | `USER-DEFINED` | NO | `—` | — |

### Constraints

**CHECK:**
- `2200_39723_1_not_null`: N/A
- `2200_39723_2_not_null`: N/A
- `2200_39723_3_not_null`: N/A
- `2200_39723_4_not_null`: N/A
- `2200_39723_5_not_null`: N/A
- `permission_format`: CHECK ((name = (((((domain)::text || '.'::text) || (action)::text) || ':'::text) || (scope)::text)))

**PRIMARY KEY:**
- `permissions_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `permission_unique`: UNIQUE (domain, action, scope)
- `permission_unique`: UNIQUE (domain, action, scope)
- `permission_unique`: UNIQUE (domain, action, scope)
- `permissions_name_key`: UNIQUE (name)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `permission_unique` | btree | domain, action, scope | ✓ | — | `CREATE UNIQUE INDEX permission_unique ON public.permissions USING btree (domain, action, scope)` |
| `permissions_name_key` | btree | name | ✓ | — | `CREATE UNIQUE INDEX permissions_name_key ON public.permissions USING btree (name)` |
| `permissions_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX permissions_pkey ON public.permissions USING btree (id)` |

---

## `pincodes`

> Indian postal codes with geographic links

**Statistics:**
- Rows: ~0
- Columns: 10
- Indexes: 5
- Foreign Keys: 3
- Triggers: 2

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `pincode` | `character(6)` | NO | `—` | — |
| `city_id` | `uuid` | NO | `—` | — |
| `district_id` | `uuid` | YES | `—` | — |
| `state_id` | `uuid` | NO | `—` | — |
| `lat` | `numeric` | YES | `—` | — |
| `lng` | `numeric` | YES | `—` | — |
| `geo_point` | `USER-DEFINED` | YES | `—` | — |
| `delivery_status` | `text` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_56191_1_not_null`: N/A
- `2200_56191_2_not_null`: N/A
- `2200_56191_4_not_null`: N/A
- `pincodes_delivery_status_check`: CHECK ((delivery_status = ANY (ARRAY['delivery'::text, 'non_delivery'::text])))
- `valid_pincode`: CHECK ((pincode ~ '^[1-9][0-9]{5}$'::text))
- `valid_pincode_india_bounds`: CHECK (((lat IS NULL) OR ((lat >= 6.0) AND (lat <= 37.0))))

**FOREIGN KEY:**
- `pincodes_city_id_fkey`: FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE
- `pincodes_district_id_fkey`: FOREIGN KEY (district_id) REFERENCES districts(id) ON DELETE SET NULL
- `pincodes_state_id_fkey`: FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `pincodes_pkey`: PRIMARY KEY (pincode)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_pincodes_city` | btree | city_id | — | — | `CREATE INDEX idx_pincodes_city ON public.pincodes USING btree (city_id)` |
| `idx_pincodes_district` | btree | district_id | — | — | `CREATE INDEX idx_pincodes_district ON public.pincodes USING btree (district_id)` |
| `idx_pincodes_geo` | gist | geo_point | — | — | `CREATE INDEX idx_pincodes_geo ON public.pincodes USING gist (geo_point)` |
| `idx_pincodes_state` | btree | state_id | — | — | `CREATE INDEX idx_pincodes_state ON public.pincodes USING btree (state_id)` |
| `pincodes_pkey` | btree | pincode | ✓ | ✓ | `CREATE UNIQUE INDEX pincodes_pkey ON public.pincodes USING btree (pincode)` |

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

### Triggers

- `sync_pincode_geo_point`:
  - When: BEFORE INSERT
  - Definition:
```sql
  EXECUTE FUNCTION update_pincode_geo_point()
```
- `sync_pincode_geo_point`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_pincode_geo_point()
```

---

## `pricing_rules`

> Dynamic pricing rules based on action, region, and user type

**Statistics:**
- Rows: ~0
- Columns: 14
- Indexes: 4
- Foreign Keys: 1
- Triggers: 3

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `action` | `text` | NO | `—` | — |
| `credit_cost` | `integer` | NO | `—` | — |
| `cash_price` | `numeric` | YES | `—` | — |
| `region_id` | `uuid` | YES | `—` | — |
| `user_type` | `text` | YES | `—` | — |
| `discount_percentage` | `numeric` | YES | `0` | — |
| `surge_pricing_multiplier` | `numeric` | YES | `1.0` | — |
| `effective_from` | `timestamp with time zone` | YES | `now()` | — |
| `effective_until` | `timestamp with time zone` | YES | `—` | — |
| `description` | `text` | YES | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `priority` | `integer` | YES | `0` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45707_1_not_null`: N/A
- `2200_45707_2_not_null`: N/A
- `2200_45707_3_not_null`: N/A
- `pricing_rules_user_type_check`: CHECK ((user_type = ANY (ARRAY['buyer'::text, 'seller'::text, 'agent'::text, 'agency'::text, 'all'::text])))

**FOREIGN KEY:**
- `pricing_rules_region_id_fkey`: FOREIGN KEY (region_id) REFERENCES regions(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `pricing_rules_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_pricing_rules_action` | btree | action | — | — | `CREATE INDEX idx_pricing_rules_action ON public.pricing_rules USING btree (action) WHERE (is_active = true)` |
| `idx_pricing_rules_effective` | btree | effective_from, effective_until | — | — | `CREATE INDEX idx_pricing_rules_effective ON public.pricing_rules USING btree (effective_from, effective_until)` |
| `idx_pricing_rules_region_action` | btree | action, region_id, is_active | — | — | `CREATE INDEX idx_pricing_rules_region_action ON public.pricing_rules USING btree (region_id, action, is_active)` |
| `pricing_rules_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX pricing_rules_pkey ON public.pricing_rules USING btree (id)` |

### Foreign Keys

- `pricing_rules_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

### Triggers

- `audit_pricing_rules`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_pricing_rules`:
  - When: AFTER DELETE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_pricing_rules`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```

---

## `profiles`

**Statistics:**
- Rows: ~14
- Columns: 42
- Indexes: 3
- Foreign Keys: 0
- Triggers: 2

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `—` | — |
| `username` | `text` | YES | `—` | — |
| `full_name` | `text` | YES | `—` | — |
| `email` | `text` | YES | `—` | — |
| `phone` | `text` | YES | `—` | — |
| `avatar_url` | `text` | YES | `—` | — |
| `user_type` | `text` | YES | `'buyer'::text` | — |
| `role` | `text` | YES | `'user'::text` | — |
| `bio` | `text` | YES | `—` | — |
| `company_name` | `text` | YES | `—` | — |
| `license_number` | `text` | YES | `—` | — |
| `years_experience` | `integer` | YES | `0` | — |
| `specialties` | `ARRAY` | YES | `—` | — |
| `languages` | `ARRAY` | YES | `—` | — |
| `is_verified` | `boolean` | YES | `false` | — |
| `is_featured` | `boolean` | YES | `false` | — |
| `account_status` | `text` | YES | `'active'::text` | — |
| `website_url` | `text` | YES | `—` | — |
| `social_links` | `jsonb` | YES | `—` | — |
| `office_address` | `text` | YES | `—` | — |
| `office_city` | `text` | YES | `—` | — |
| `office_state` | `text` | YES | `—` | — |
| `office_pincode` | `text` | YES | `—` | — |
| `properties_listed` | `integer` | YES | `0` | — |
| `properties_sold` | `integer` | YES | `0` | — |
| `total_ratings` | `integer` | YES | `0` | — |
| `average_rating` | `numeric` | YES | `0` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |
| `last_login` | `timestamp with time zone` | YES | `—` | — |
| `last_active` | `timestamp with time zone` | YES | `—` | — |
| `whatsapp_verified` | `boolean` | YES | `false` | — |
| `email_verified` | `boolean` | YES | `false` | — |
| `phone_verified` | `boolean` | YES | `false` | — |
| `kyc_status` | `text` | YES | `'not_submitted'::text` | — |
| `kyc_documents` | `jsonb` | YES | `—` | — |
| `preferred_localities` | `ARRAY` | YES | `—` | — |
| `search_preferences` | `jsonb` | YES | `—` | — |
| `total_inquiries_sent` | `integer` | YES | `0` | — |
| `total_views_received` | `integer` | YES | `0` | — |
| `response_time_hours` | `integer` | YES | `—` | — |
| `response_rate` | `numeric` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_18686_1_not_null`: N/A
- `profiles_account_status_check`: CHECK ((account_status = ANY (ARRAY['active'::text, 'suspended'::text, 'inactive'::text])))
- `profiles_kyc_status_check`: CHECK ((kyc_status = ANY (ARRAY['not_submitted'::text, 'pending'::text, 'verified'::text, 'rejected'::text])))
- `profiles_role_check`: CHECK ((role = ANY (ARRAY['user'::text, 'admin'::text, 'staff'::text])))
- `profiles_user_type_check`: CHECK ((user_type = ANY (ARRAY['buyer'::text, 'seller'::text, 'agent'::text, 'agency'::text, 'admin'::text])))

**PRIMARY KEY:**
- `profiles_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `profiles_email_key`: UNIQUE (email)
- `profiles_username_key`: UNIQUE (username)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `profiles_email_key` | btree | email | ✓ | — | `CREATE UNIQUE INDEX profiles_email_key ON public.profiles USING btree (email)` |
| `profiles_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (id)` |
| `profiles_username_key` | btree | username | ✓ | — | `CREATE UNIQUE INDEX profiles_username_key ON public.profiles USING btree (username)` |

### Triggers

- `trigger_create_wallet`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION create_wallet_for_new_user()
```
- `update_profiles_updated_at`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_updated_at_column()
```

---

## `projects`

**Statistics:**
- Rows: ~5
- Columns: 39
- Indexes: 9
- Foreign Keys: 5
- Triggers: 2

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `builder_id` | `uuid` | NO | `—` | — |
| `name` | `text` | NO | `—` | — |
| `slug` | `text` | YES | `—` | — |
| `description` | `text` | YES | `—` | — |
| `project_type` | `text` | YES | `—` | — |
| `status` | `text` | YES | `—` | — |
| `rera_number` | `text` | YES | `—` | — |
| `location` | `text` | NO | `—` | — |
| `city` | `text` | NO | `—` | — |
| `state` | `text` | NO | `—` | — |
| `locality_id` | `uuid` | YES | `—` | — |
| `latitude` | `numeric` | YES | `—` | — |
| `longitude` | `numeric` | YES | `—` | — |
| `total_units` | `integer` | YES | `—` | — |
| `available_units` | `integer` | YES | `—` | — |
| `total_towers` | `integer` | YES | `—` | — |
| `total_floors` | `integer` | YES | `—` | — |
| `launch_date` | `date` | YES | `—` | — |
| `possession_date` | `date` | YES | `—` | — |
| `price_range_min` | `numeric` | YES | `—` | — |
| `price_range_max` | `numeric` | YES | `—` | — |
| `configurations` | `ARRAY` | YES | `—` | — |
| `area_range_min` | `numeric` | YES | `—` | — |
| `area_range_max` | `numeric` | YES | `—` | — |
| `amenities` | `ARRAY` | YES | `—` | — |
| `images` | `ARRAY` | YES | `—` | — |
| `brochure_url` | `text` | YES | `—` | — |
| `video_url` | `text` | YES | `—` | — |
| `view_count` | `integer` | YES | `0` | — |
| `inquiry_count` | `integer` | YES | `0` | — |
| `is_featured` | `boolean` | YES | `false` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |
| `city_id` | `uuid` | YES | `—` | — |
| `district_id` | `uuid` | YES | `—` | — |
| `state_id` | `uuid` | YES | `—` | — |
| `geo_point` | `USER-DEFINED` | YES | `—` | — |
| `geo_quality_score` | `numeric` | YES | `0` | — |

### Constraints

**CHECK:**
- `2200_50835_10_not_null`: N/A
- `2200_50835_11_not_null`: N/A
- `2200_50835_1_not_null`: N/A
- `2200_50835_2_not_null`: N/A
- `2200_50835_3_not_null`: N/A
- `2200_50835_9_not_null`: N/A
- `projects_project_type_check`: CHECK ((project_type = ANY (ARRAY['residential'::text, 'commercial'::text, 'mixed'::text])))
- `projects_status_check`: CHECK ((status = ANY (ARRAY['upcoming'::text, 'under_construction'::text, 'ready_to_move'::text, 'completed'::text])))

**FOREIGN KEY:**
- `projects_builder_id_fkey`: FOREIGN KEY (builder_id) REFERENCES builders(id) ON DELETE CASCADE
- `projects_city_id_fkey`: FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE SET NULL
- `projects_district_id_fkey`: FOREIGN KEY (district_id) REFERENCES districts(id) ON DELETE SET NULL
- `projects_locality_id_fkey`: FOREIGN KEY (locality_id) REFERENCES localities(id)
- `projects_state_id_fkey`: FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `projects_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `projects_slug_key`: UNIQUE (slug)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_projects_builder` | btree | builder_id | — | — | `CREATE INDEX idx_projects_builder ON public.projects USING btree (builder_id)` |
| `idx_projects_city` | btree | status, city | — | — | `CREATE INDEX idx_projects_city ON public.projects USING btree (city, status)` |
| `idx_projects_city_new` | btree | city_id | — | — | `CREATE INDEX idx_projects_city_new ON public.projects USING btree (city_id)` |
| `idx_projects_district` | btree | district_id | — | — | `CREATE INDEX idx_projects_district ON public.projects USING btree (district_id)` |
| `idx_projects_geo_point` | gist | geo_point | — | — | `CREATE INDEX idx_projects_geo_point ON public.projects USING gist (geo_point)` |
| `idx_projects_locality` | btree | locality_id | — | — | `CREATE INDEX idx_projects_locality ON public.projects USING btree (locality_id)` |
| `idx_projects_state` | btree | state_id | — | — | `CREATE INDEX idx_projects_state ON public.projects USING btree (state_id)` |
| `projects_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX projects_pkey ON public.projects USING btree (id)` |
| `projects_slug_key` | btree | slug | ✓ | — | `CREATE UNIQUE INDEX projects_slug_key ON public.projects USING btree (slug)` |

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

### Triggers

- `trigger_update_builder_counts`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION update_builder_project_counts()
```
- `trigger_update_builder_counts`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_builder_project_counts()
```

---

## `promotional_campaigns`

> Marketing campaigns with regional focus

**Statistics:**
- Rows: ~0
- Columns: 19
- Indexes: 4
- Foreign Keys: 0
- Triggers: 3

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |
| `description` | `text` | YES | `—` | — |
| `campaign_type` | `text` | YES | `—` | — |
| `region_ids` | `ARRAY` | YES | `—` | — |
| `language_preference` | `ARRAY` | YES | `—` | — |
| `credits_reward` | `integer` | YES | `—` | — |
| `discount_percentage` | `numeric` | YES | `—` | — |
| `free_services` | `ARRAY` | YES | `—` | — |
| `conditions` | `jsonb` | YES | `'{}'::jsonb` | — |
| `budget_allocated` | `numeric` | YES | `—` | — |
| `budget_spent` | `numeric` | YES | `0` | — |
| `participant_limit` | `integer` | YES | `—` | — |
| `current_participants` | `integer` | YES | `0` | — |
| `valid_from` | `timestamp with time zone` | YES | `now()` | — |
| `valid_until` | `timestamp with time zone` | YES | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45781_1_not_null`: N/A
- `2200_45781_2_not_null`: N/A
- `promotional_campaigns_campaign_type_check`: CHECK ((campaign_type = ANY (ARRAY['launch'::text, 'festival'::text, 'reactivation'::text, 'referral'::text, 'partnership'::text])))

**PRIMARY KEY:**
- `promotional_campaigns_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_campaigns_active` | btree | valid_until, is_active | — | — | `CREATE INDEX idx_campaigns_active ON public.promotional_campaigns USING btree (is_active, valid_until)` |
| `idx_campaigns_regions` | gin | region_ids | — | — | `CREATE INDEX idx_campaigns_regions ON public.promotional_campaigns USING gin (region_ids)` |
| `idx_campaigns_type` | btree | campaign_type | — | — | `CREATE INDEX idx_campaigns_type ON public.promotional_campaigns USING btree (campaign_type) WHERE (is_active = true)` |
| `promotional_campaigns_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX promotional_campaigns_pkey ON public.promotional_campaigns USING btree (id)` |

### Triggers

- `audit_promotional_campaigns`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_promotional_campaigns`:
  - When: AFTER DELETE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_promotional_campaigns`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```

---

## `properties`

**Statistics:**
- Rows: ~5
- Columns: 124
- Indexes: 37
- Foreign Keys: 11
- Triggers: 11

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `pid` | `text` | NO | `—` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `agent_id` | `uuid` | YES | `—` | — |
| `agency_id` | `uuid` | YES | `—` | — |
| `title` | `text` | NO | `—` | — |
| `slug` | `text` | YES | `—` | — |
| `description` | `text` | YES | `—` | — |
| `property_type` | `text` | NO | `—` | "Standard Property Types:
• apartment - Apartment/Flat in complex
• house - Independent House
• villa - Luxury Villa
• commercial - Office/Shop/Commercial
• land - Plot/Land
• farm - Farmhouse/Agricultural
• pg - Paying Guest
• hostel - Hostel" |
| `listing_type` | `text` | NO | `'sale'::text` | "Transaction Types:
• sale - For Sale
• rent - For Rent
• lease - Long-term Lease
• pg - PG Accommodation
• hostel - Hostel
• flatmate - Roommate needed" |
| `bhk_type` | `text` | YES | `—` | "BHK Configurations (format: Xbhk):
• 1rk - 1 Room Kitchen (Studio)
• 1bhk - 1 Bedroom Hall Kitchen
• 2bhk - 2 BHK
• 3bhk - 3 BHK
• 4bhk - 4 BHK
• 5bhk - 5+ BHK" |
| `ownership_type` | `text` | YES | `—` | "Ownership Types:
• freehold - Full ownership
• leasehold - Leased from authority
• cooperative - Co-op society
• power_of_attorney - POA basis
• joint - Joint ownership" |
| `price` | `numeric` | NO | `—` | — |
| `price_negotiable` | `boolean` | YES | `false` | — |
| `maintenance_cost` | `numeric` | YES | `—` | — |
| `under_loan` | `boolean` | YES | `false` | — |
| `expected_price` | `numeric` | YES | `—` | — |
| `price_per_unit_area` | `numeric` | YES | `—` | — |
| `built_up_area` | `numeric` | YES | `—` | — |
| `carpet_area` | `numeric` | YES | `—` | — |
| `plot_area` | `numeric` | YES | `—` | — |
| `super_built_up_area` | `numeric` | YES | `—` | — |
| `area_unit` | `text` | NO | `'sqft'::text` | — |
| `address` | `text` | YES | `—` | — |
| `landmark` | `text` | YES | `—` | — |
| `city` | `text` | NO | `—` | — |
| `locality` | `text` | NO | `—` | — |
| `state` | `text` | YES | `—` | — |
| `pincode` | `text` | YES | `—` | — |
| `country` | `text` | YES | `'India'::text` | — |
| `latitude` | `numeric` | YES | `—` | — |
| `longitude` | `numeric` | YES | `—` | — |
| `google_place_id` | `text` | YES | `—` | — |
| `bedrooms` | `integer` | YES | `—` | — |
| `bathrooms` | `integer` | YES | `—` | — |
| `balcony_count` | `integer` | YES | `0` | — |
| `total_floors` | `integer` | YES | `—` | — |
| `floor_number` | `integer` | YES | `—` | — |
| `floor_type` | `text` | YES | `—` | — |
| `property_age` | `text` | YES | `—` | — |
| `year_built` | `integer` | YES | `—` | — |
| `possession_year` | `integer` | YES | `—` | — |
| `facing` | `text` | YES | `—` | — |
| `age_of_construction` | `integer` | YES | `—` | — |
| `furnishing` | `text` | YES | `—` | "Furnishing Status:
• unfurnished - No furniture
• semi_furnished - Basic furniture
• fully_furnished - Fully equipped" |
| `kitchen_type` | `text` | YES | `—` | — |
| `flooring_type` | `text` | YES | `—` | — |
| `overlooking` | `text` | YES | `—` | — |
| `rera_registration` | `text` | YES | `—` | — |
| `khata_certificate` | `boolean` | YES | `false` | — |
| `allotment_letter` | `boolean` | YES | `false` | — |
| `sale_deed_certificate` | `boolean` | YES | `false` | — |
| `property_tax_paid` | `boolean` | YES | `false` | — |
| `occupancy_certificate` | `boolean` | YES | `false` | — |
| `lease_years` | `integer` | YES | `—` | — |
| `available_from` | `date` | YES | `—` | — |
| `availability_schedule` | `text` | YES | `—` | — |
| `available_start_time` | `time without time zone` | YES | `—` | — |
| `available_end_time` | `time without time zone` | YES | `—` | — |
| `show_property_by` | `text` | YES | `—` | — |
| `contact_phone` | `text` | NO | `—` | — |
| `secondary_phone` | `text` | YES | `—` | — |
| `contact_email` | `text` | YES | `—` | — |
| `whatsapp_number` | `text` | YES | `—` | — |
| `property_code` | `text` | YES | `—` | — |
| `apartment_name` | `text` | YES | `—` | — |
| `developer_name` | `text` | YES | `—` | — |
| `project_name` | `text` | YES | `—` | — |
| `builder_name` | `text` | YES | `—` | — |
| `status` | `text` | YES | `'draft'::text` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `is_featured` | `boolean` | YES | `false` | — |
| `is_verified` | `boolean` | YES | `false` | — |
| `is_premium` | `boolean` | YES | `false` | — |
| `is_urgent` | `boolean` | YES | `false` | — |
| `is_hot_deal` | `boolean` | YES | `false` | — |
| `view_count` | `integer` | YES | `0` | — |
| `favorite_count` | `integer` | YES | `0` | — |
| `inquiry_count` | `integer` | YES | `0` | — |
| `phone_views_count` | `integer` | YES | `0` | — |
| `whatsapp_clicks` | `integer` | YES | `0` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |
| `published_at` | `timestamp with time zone` | YES | `—` | — |
| `sold_rented_at` | `timestamp with time zone` | YES | `—` | — |
| `featured_until` | `timestamp with time zone` | YES | `—` | — |
| `last_viewed` | `timestamp with time zone` | YES | `—` | — |
| `expiry_date` | `timestamp with time zone` | YES | `—` | — |
| `meta_title` | `text` | YES | `—` | — |
| `meta_description` | `text` | YES | `—` | — |
| `meta_keywords` | `ARRAY` | YES | `—` | — |
| `tags` | `ARRAY` | YES | `—` | — |
| `moderation_state` | `text` | NO | `'not_submitted'::text` | — |
| `locality_id` | `uuid` | YES | `—` | — |
| `builder_id` | `uuid` | YES | `—` | — |
| `project_id` | `uuid` | YES | `—` | — |
| `corner_plot` | `boolean` | YES | `false` | — |
| `width_facing` | `numeric` | YES | `—` | — |
| `boundary_wall` | `boolean` | YES | `false` | — |
| `gated_security` | `boolean` | YES | `false` | — |
| `video_url` | `text` | YES | `—` | — |
| `virtual_tour_url` | `text` | YES | `—` | — |
| `floor_plan_images` | `ARRAY` | YES | `—` | — |
| `approved_by_bank` | `boolean` | YES | `false` | — |
| `loan_available` | `boolean` | YES | `false` | — |
| `possession_status` | `text` | YES | `—` | — |
| `water_supply` | `text` | YES | `—` | — |
| `electricity_backup` | `text` | YES | `—` | — |
| `lift_available` | `boolean` | YES | `false` | — |
| `reserved_parking` | `integer` | YES | `0` | — |
| `open_parking` | `integer` | YES | `0` | — |
| `property_facing_road_width` | `numeric` | YES | `—` | — |
| `govt_approved` | `boolean` | YES | `false` | — |
| `clear_title` | `boolean` | YES | `false` | — |
| `last_viewed_by` | `uuid` | YES | `—` | — |
| `city_id` | `uuid` | YES | `—` | — |
| `district_id` | `uuid` | YES | `—` | — |
| `state_id` | `uuid` | YES | `—` | — |
| `pincode_fk` | `character(6)` | YES | `—` | — |
| `geo_point` | `USER-DEFINED` | YES | `—` | — |
| `geo_quality_score` | `numeric` | YES | `0` | "Quality of geocoding: 100=verified, 70=auto, 40=pincode-only, 0=none" |
| `data_freshness_score` | `numeric` | YES | `100` | "Decay score: 100=today, decreases daily" |
| `last_verified_at` | `timestamp with time zone` | YES | `—` | — |
| `visibility_status` | `text` | YES | `'public'::text` | "Property visibility state in search results" |

### Constraints

**CHECK:**
- `2200_18738_10_not_null`: N/A
- `2200_18738_13_not_null`: N/A
- `2200_18738_1_not_null`: N/A
- `2200_18738_23_not_null`: N/A
- `2200_18738_26_not_null`: N/A
- `2200_18738_27_not_null`: N/A
- `2200_18738_2_not_null`: N/A
- `2200_18738_3_not_null`: N/A
- `2200_18738_61_not_null`: N/A
- `2200_18738_6_not_null`: N/A
- `2200_18738_93_not_null`: N/A
- `2200_18738_9_not_null`: N/A
- `bhk_type_numeric_check`: CHECK (((bhk_type IS NULL) OR (bhk_type ~ '^[0-9]+bhk$'::text)))
- `freshness_score_range`: CHECK (((data_freshness_score >= (0)::numeric) AND (data_freshness_score <= (100)::numeric)))
- `geo_quality_score_range`: CHECK (((geo_quality_score >= (0)::numeric) AND (geo_quality_score <= (100)::numeric)))
- `properties_area_unit_check`: CHECK ((area_unit = ANY (ARRAY['sqft'::text, 'sqm'::text, 'acre'::text, 'hectare'::text, 'gunta'::text, 'marla'::text, 'bigha'::text])))
- `properties_availability_schedule_check`: CHECK ((availability_schedule = ANY (ARRAY['everyday'::text, 'weekdays'::text, 'weekends'::text, 'custom'::text])))
- `properties_electricity_backup_check`: CHECK ((electricity_backup = ANY (ARRAY['none'::text, 'partial'::text, 'full'::text, 'solar'::text])))
- `properties_facing_check`: CHECK ((facing = ANY (ARRAY['north'::text, 'south'::text, 'east'::text, 'west'::text, 'northeast'::text, 'northwest'::text, 'southeast'::text, 'southwest'::text, 'north-east'::text, 'north-west'::text, 'south-east'::text, 'south-west'::text])))
- `properties_floor_type_check`: CHECK ((floor_type = ANY (ARRAY['ground'::text, 'first'::text, 'second'::text, 'third'::text, 'higher'::text, 'penthouse'::text, 'basement'::text])))
- `properties_furnishing_check`: CHECK ((furnishing = ANY (ARRAY['unfurnished'::text, 'semi_furnished'::text, 'fully_furnished'::text])))
- `properties_kitchen_type_check`: CHECK ((kitchen_type = ANY (ARRAY['modular'::text, 'semi_modular'::text, 'open'::text, 'closed'::text])))
- `properties_listing_type_check`: CHECK ((listing_type = ANY (ARRAY['sale'::text, 'rent'::text, 'lease'::text, 'pg'::text, 'hostel'::text, 'flatmate'::text])))
- `properties_moderation_state_check`: CHECK ((moderation_state = ANY (ARRAY['not_submitted'::text, 'pending'::text, 'under_review'::text, 'approved'::text, 'rejected'::text, 'changes_requested'::text])))
- `properties_ownership_type_check`: CHECK ((ownership_type = ANY (ARRAY['freehold'::text, 'leasehold'::text, 'cooperative'::text, 'power_of_attorney'::text, 'joint'::text])))
- `properties_possession_status_check`: CHECK ((possession_status = ANY (ARRAY['immediate'::text, 'within_3months'::text, 'within_6months'::text, 'under_construction'::text])))
- `properties_property_age_check`: CHECK ((property_age = ANY (ARRAY['under_construction'::text, '0-1'::text, '1-5'::text, '5-10'::text, '10-20'::text, '20+'::text, 'new_launch'::text])))
- `properties_show_property_by_check`: CHECK ((show_property_by = ANY (ARRAY['owner'::text, 'agent'::text, 'broker'::text, 'builder'::text, 'representative'::text])))
- `properties_visibility_status_check`: CHECK ((visibility_status = ANY (ARRAY['public'::text, 'hidden_by_user'::text, 'hidden_by_admin'::text, 'expired'::text, 'flagged'::text, 'legal_hold'::text])))
- `properties_water_supply_check`: CHECK ((water_supply = ANY (ARRAY['municipal'::text, 'borewell'::text, 'both'::text])))
- `property_type_check`: CHECK ((property_type = ANY (ARRAY['apartment'::text, 'house'::text, 'villa'::text, 'commercial'::text, 'land'::text, 'farm'::text, 'pg'::text, 'hostel'::text])))
- `status_check`: CHECK ((status = ANY (ARRAY['draft'::text, 'pending'::text, 'published'::text, 'sold'::text, 'rented'::text])))
- `valid_property_india_bounds`: CHECK (((latitude IS NULL) OR ((latitude >= 6.0) AND (latitude <= 37.0))))

**FOREIGN KEY:**
- `properties_agency_id_fkey`: FOREIGN KEY (agency_id) REFERENCES profiles(id) ON DELETE SET NULL
- `properties_agent_id_fkey`: FOREIGN KEY (agent_id) REFERENCES profiles(id) ON DELETE SET NULL
- `properties_builder_id_fkey`: FOREIGN KEY (builder_id) REFERENCES builders(id)
- `properties_city_id_fkey`: FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE SET NULL
- `properties_district_id_fkey`: FOREIGN KEY (district_id) REFERENCES districts(id) ON DELETE SET NULL
- `properties_last_viewed_by_fkey`: FOREIGN KEY (last_viewed_by) REFERENCES profiles(id)
- `properties_locality_id_fkey`: FOREIGN KEY (locality_id) REFERENCES localities(id)
- `properties_pincode_fk_fkey`: FOREIGN KEY (pincode_fk) REFERENCES pincodes(pincode) ON DELETE SET NULL
- `properties_project_id_fkey`: FOREIGN KEY (project_id) REFERENCES projects(id)
- `properties_state_id_fkey`: FOREIGN KEY (state_id) REFERENCES states(id) ON DELETE SET NULL
- `properties_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `properties_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `properties_pid_key`: UNIQUE (pid)
- `properties_property_code_key`: UNIQUE (property_code)
- `properties_slug_key`: UNIQUE (slug)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_properties_active_published` | btree | status, is_active | — | — | `CREATE INDEX idx_properties_active_published ON public.properties USING btree (is_active, status) WHERE ((is_active = true) AND (status = 'published'::text))` |
| `idx_properties_agency_id` | btree | agency_id | — | — | `CREATE INDEX idx_properties_agency_id ON public.properties USING btree (agency_id)` |
| `idx_properties_agent_id` | btree | agent_id | — | — | `CREATE INDEX idx_properties_agent_id ON public.properties USING btree (agent_id)` |
| `idx_properties_area` | btree | built_up_area | — | — | `CREATE INDEX idx_properties_area ON public.properties USING btree (built_up_area)` |
| `idx_properties_bedrooms` | btree | bedrooms | — | — | `CREATE INDEX idx_properties_bedrooms ON public.properties USING btree (bedrooms)` |
| `idx_properties_builder` | btree | builder_id | — | — | `CREATE INDEX idx_properties_builder ON public.properties USING btree (builder_id)` |
| `idx_properties_city_active_created` | btree | created_at, city_id | — | — | `CREATE INDEX idx_properties_city_active_created ON public.properties USING btree (city_id, created_at DESC) WHERE (visibility_status = 'public'::text)` |
| `idx_properties_city_locality` | btree | city, locality | — | — | `CREATE INDEX idx_properties_city_locality ON public.properties USING btree (city, locality)` |
| `idx_properties_city_new` | btree | city_id | — | — | `CREATE INDEX idx_properties_city_new ON public.properties USING btree (city_id)` |
| `idx_properties_city_price_filter` | btree | price, city, status, is_active | — | — | `CREATE INDEX idx_properties_city_price_filter ON public.properties USING btree (city, price, status, is_active)` |
| `idx_properties_city_status_active` | btree | city, status, is_active | — | — | `CREATE INDEX idx_properties_city_status_active ON public.properties USING btree (city, status, is_active)` |
| `idx_properties_created_at` | btree | created_at | — | — | `CREATE INDEX idx_properties_created_at ON public.properties USING btree (created_at DESC)` |
| `idx_properties_district` | btree | district_id | — | — | `CREATE INDEX idx_properties_district ON public.properties USING btree (district_id)` |
| `idx_properties_featured` | btree | is_featured | — | — | `CREATE INDEX idx_properties_featured ON public.properties USING btree (is_featured) WHERE (is_featured = true)` |
| `idx_properties_featured_smart` | btree | status, is_active, is_featured, created_at, featured_until | — | — | `CREATE INDEX idx_properties_featured_smart ON public.properties USING btree (is_featured, featured_until DESC NULLS LAST, created_at DESC, status, is_active)` |
| `idx_properties_freshness` | btree | data_freshness_score | — | — | `CREATE INDEX idx_properties_freshness ON public.properties USING btree (data_freshness_score DESC)` |
| `idx_properties_geo_point` | gist | geo_point | — | — | `CREATE INDEX idx_properties_geo_point ON public.properties USING gist (geo_point)` |
| `idx_properties_geo_quality` | btree | geo_quality_score | — | — | `CREATE INDEX idx_properties_geo_quality ON public.properties USING btree (geo_quality_score DESC)` |
| `idx_properties_last_verified` | btree | last_verified_at | — | — | `CREATE INDEX idx_properties_last_verified ON public.properties USING btree (last_verified_at DESC NULLS LAST)` |
| `idx_properties_listing_type` | btree | listing_type | — | — | `CREATE INDEX idx_properties_listing_type ON public.properties USING btree (listing_type)` |
| `idx_properties_locality` | btree | locality_id | — | — | `CREATE INDEX idx_properties_locality ON public.properties USING btree (locality_id)` |
| `idx_properties_pid` | btree | pid | — | — | `CREATE INDEX idx_properties_pid ON public.properties USING btree (pid)` |
| `idx_properties_pincode_fk` | btree | pincode_fk | — | — | `CREATE INDEX idx_properties_pincode_fk ON public.properties USING btree (pincode_fk)` |
| `idx_properties_price` | btree | price | — | — | `CREATE INDEX idx_properties_price ON public.properties USING btree (price)` |
| `idx_properties_price_status_active` | btree | price, status, is_active | — | — | `CREATE INDEX idx_properties_price_status_active ON public.properties USING btree (price, status, is_active)` |
| `idx_properties_project` | btree | project_id | — | — | `CREATE INDEX idx_properties_project ON public.properties USING btree (project_id)` |
| `idx_properties_property_type` | btree | property_type | — | — | `CREATE INDEX idx_properties_property_type ON public.properties USING btree (property_type)` |
| `idx_properties_search` | btree | property_type, price, city, bedrooms, status | — | — | `CREATE INDEX idx_properties_search ON public.properties USING btree (city, price, bedrooms, property_type, status) WHERE ((status = 'published'::text) AND (is_active = true))` |
| `idx_properties_state_new` | btree | state_id | — | — | `CREATE INDEX idx_properties_state_new ON public.properties USING btree (state_id)` |
| `idx_properties_status` | btree | status | — | — | `CREATE INDEX idx_properties_status ON public.properties USING btree (status)` |
| `idx_properties_user_id` | btree | user_id | — | — | `CREATE INDEX idx_properties_user_id ON public.properties USING btree (user_id)` |
| `idx_properties_user_status` | btree | user_id, status, created_at | — | — | `CREATE INDEX idx_properties_user_status ON public.properties USING btree (user_id, status, created_at DESC)` |
| `idx_properties_visibility` | btree | visibility_status | — | — | `CREATE INDEX idx_properties_visibility ON public.properties USING btree (visibility_status) WHERE (visibility_status = 'public'::text)` |
| `properties_pid_key` | btree | pid | ✓ | — | `CREATE UNIQUE INDEX properties_pid_key ON public.properties USING btree (pid)` |
| `properties_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX properties_pkey ON public.properties USING btree (id)` |
| `properties_property_code_key` | btree | property_code | ✓ | — | `CREATE UNIQUE INDEX properties_property_code_key ON public.properties USING btree (property_code)` |
| `properties_slug_key` | btree | slug | ✓ | — | `CREATE UNIQUE INDEX properties_slug_key ON public.properties USING btree (slug)` |

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

### Triggers

- `calculate_property_price_per_unit`:
  - When: BEFORE INSERT
  - Definition:
```sql
  EXECUTE FUNCTION calculate_price_per_unit()
```
- `calculate_property_price_per_unit`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION calculate_price_per_unit()
```
- `generate_property_pid`:
  - When: BEFORE INSERT
  - Definition:
```sql
  EXECUTE FUNCTION generate_pid()
```
- `trigger_auto_assign`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION auto_assign_on_pending()
```
- `trigger_log_price_change`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION log_price_change()
```
- `trigger_update_locality_counts`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION update_locality_property_counts()
```
- `trigger_update_locality_counts`:
  - When: AFTER DELETE
  - Definition:
```sql
  EXECUTE FUNCTION update_locality_property_counts()
```
- `trigger_update_locality_counts`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_locality_property_counts()
```
- `update_properties_updated_at`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_updated_at_column()
```
- `validate_property_city_distance`:
  - When: BEFORE INSERT
  - Definition:
```sql
  EXECUTE FUNCTION check_property_city_distance()
```
- `validate_property_city_distance`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION check_property_city_distance()
```

---

## `property_amenities`

**Statistics:**
- Rows: ~0
- Columns: 7
- Indexes: 5
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `amenity_category` | `text` | NO | `—` | — |
| `amenity_name` | `text` | NO | `—` | — |
| `amenity_value` | `text` | YES | `—` | — |
| `is_available` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_18828_1_not_null`: N/A
- `2200_18828_2_not_null`: N/A
- `2200_18828_3_not_null`: N/A
- `2200_18828_4_not_null`: N/A
- `property_amenities_amenity_category_check`: CHECK ((amenity_category = ANY (ARRAY['basic'::text, 'safety'::text, 'lifestyle'::text, 'green'::text, 'additional'::text, 'society'::text])))

**FOREIGN KEY:**
- `property_amenities_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `property_amenities_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `property_amenities_property_id_amenity_name_key`: UNIQUE (property_id, amenity_name)
- `property_amenities_property_id_amenity_name_key`: UNIQUE (property_id, amenity_name)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_amenities_category` | btree | amenity_category | — | — | `CREATE INDEX idx_property_amenities_category ON public.property_amenities USING btree (amenity_category)` |
| `idx_property_amenities_property` | btree | property_id | — | — | `CREATE INDEX idx_property_amenities_property ON public.property_amenities USING btree (property_id)` |
| `idx_property_amenities_property_id` | btree | property_id | — | — | `CREATE INDEX idx_property_amenities_property_id ON public.property_amenities USING btree (property_id)` |
| `property_amenities_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_amenities_pkey ON public.property_amenities USING btree (id)` |
| `property_amenities_property_id_amenity_name_key` | btree | property_id, amenity_name | ✓ | — | `CREATE UNIQUE INDEX property_amenities_property_id_amenity_name_key ON public.property_amenities USING btree (property_id, amenity_name)` |

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
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `admin_id` | `uuid` | NO | `—` | — |
| `status` | `text` | NO | `—` | — |
| `is_active` | `boolean` | NO | `true` | — |
| `assigned_at` | `timestamp with time zone` | NO | `now()` | — |
| `reviewed_at` | `timestamp with time zone` | YES | `—` | — |
| `due_at` | `timestamp with time zone` | NO | `—` | — |

### Constraints

**CHECK:**
- `2200_29948_1_not_null`: N/A
- `2200_29948_2_not_null`: N/A
- `2200_29948_3_not_null`: N/A
- `2200_29948_4_not_null`: N/A
- `2200_29948_5_not_null`: N/A
- `2200_29948_6_not_null`: N/A
- `2200_29948_8_not_null`: N/A
- `property_assignments_status_check`: CHECK ((status = ANY (ARRAY['assigned'::text, 'reviewing'::text, 'completed'::text])))

**FOREIGN KEY:**
- `property_assignments_admin_id_fkey`: FOREIGN KEY (admin_id) REFERENCES admin_users(id)
- `property_assignments_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `property_assignments_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `property_assignments_property_id_key`: UNIQUE (property_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_assignments_admin_active` | btree | admin_id | — | — | `CREATE INDEX idx_assignments_admin_active ON public.property_assignments USING btree (admin_id) WHERE (is_active = true)` |
| `idx_assignments_due` | btree | due_at | — | — | `CREATE INDEX idx_assignments_due ON public.property_assignments USING btree (due_at)` |
| `property_assignments_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_assignments_pkey ON public.property_assignments USING btree (id)` |
| `property_assignments_property_id_key` | btree | property_id | ✓ | — | `CREATE UNIQUE INDEX property_assignments_property_id_key ON public.property_assignments USING btree (property_id)` |

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
- Rows: ~0
- Columns: 6
- Indexes: 2
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | YES | `—` | — |
| `property_ids` | `ARRAY` | NO | `—` | — |
| `comparison_data` | `jsonb` | YES | `—` | — |
| `session_id` | `text` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_50697_1_not_null`: N/A
- `2200_50697_3_not_null`: N/A

**FOREIGN KEY:**
- `property_comparisons_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `property_comparisons_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_comparisons_user` | btree | user_id | — | — | `CREATE INDEX idx_property_comparisons_user ON public.property_comparisons USING btree (user_id)` |
| `property_comparisons_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_comparisons_pkey ON public.property_comparisons USING btree (id)` |

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
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `document_type` | `text` | NO | `—` | — |
| `document_name` | `text` | NO | `—` | — |
| `document_url` | `text` | NO | `—` | — |
| `document_path` | `text` | YES | `—` | — |
| `is_verified` | `boolean` | YES | `false` | — |
| `verified_by` | `uuid` | YES | `—` | — |
| `verified_at` | `timestamp with time zone` | YES | `—` | — |
| `uploaded_by` | `uuid` | YES | `—` | — |
| `uploaded_at` | `timestamp with time zone` | YES | `now()` | — |
| `expiry_date` | `date` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_18912_1_not_null`: N/A
- `2200_18912_2_not_null`: N/A
- `2200_18912_3_not_null`: N/A
- `2200_18912_4_not_null`: N/A
- `2200_18912_5_not_null`: N/A
- `property_documents_document_type_check`: CHECK ((document_type = ANY (ARRAY['khata'::text, 'sale_deed'::text, 'allotment'::text, 'tax_receipt'::text, 'occupancy'::text, 'rera'::text, 'approval'::text, 'lease_deed'::text, 'encumbrance'::text, 'other'::text])))

**FOREIGN KEY:**
- `property_documents_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_documents_uploaded_by_fkey`: FOREIGN KEY (uploaded_by) REFERENCES profiles(id) ON DELETE SET NULL
- `property_documents_verified_by_fkey`: FOREIGN KEY (verified_by) REFERENCES profiles(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `property_documents_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_documents_property_id` | btree | property_id | — | — | `CREATE INDEX idx_property_documents_property_id ON public.property_documents USING btree (property_id)` |
| `idx_property_documents_uploaded_by` | btree | uploaded_by | — | — | `CREATE INDEX idx_property_documents_uploaded_by ON public.property_documents USING btree (uploaded_by)` |
| `idx_property_documents_verified_by` | btree | verified_by | — | — | `CREATE INDEX idx_property_documents_verified_by ON public.property_documents USING btree (verified_by)` |
| `property_documents_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_documents_pkey ON public.property_documents USING btree (id)` |

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
- Rows: ~8
- Columns: 13
- Indexes: 6
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `image_url` | `text` | NO | `—` | — |
| `image_path` | `text` | YES | `—` | — |
| `image_name` | `text` | YES | `—` | — |
| `caption` | `text` | YES | `—` | — |
| `is_primary` | `boolean` | YES | `false` | — |
| `display_order` | `integer` | YES | `0` | — |
| `storage_bucket` | `text` | YES | `'property-images'::text` | — |
| `file_size` | `integer` | YES | `—` | — |
| `mime_type` | `text` | YES | `—` | — |
| `uploaded_by` | `uuid` | YES | `—` | — |
| `uploaded_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_18866_1_not_null`: N/A
- `2200_18866_2_not_null`: N/A
- `2200_18866_3_not_null`: N/A

**FOREIGN KEY:**
- `property_images_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_images_uploaded_by_fkey`: FOREIGN KEY (uploaded_by) REFERENCES profiles(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `property_images_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `property_images_property_id_image_url_key`: UNIQUE (property_id, image_url)
- `property_images_property_id_image_url_key`: UNIQUE (property_id, image_url)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_images_primary` | btree | property_id | — | — | `CREATE INDEX idx_property_images_primary ON public.property_images USING btree (property_id) WHERE (is_primary = true)` |
| `idx_property_images_property` | btree | property_id | — | — | `CREATE INDEX idx_property_images_property ON public.property_images USING btree (property_id)` |
| `idx_property_images_property_id` | btree | property_id | — | — | `CREATE INDEX idx_property_images_property_id ON public.property_images USING btree (property_id)` |
| `idx_property_images_uploaded_by` | btree | uploaded_by | — | — | `CREATE INDEX idx_property_images_uploaded_by ON public.property_images USING btree (uploaded_by)` |
| `property_images_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_images_pkey ON public.property_images USING btree (id)` |
| `property_images_property_id_image_url_key` | btree | property_id, image_url | ✓ | — | `CREATE UNIQUE INDEX property_images_property_id_image_url_key ON public.property_images USING btree (property_id, image_url)` |

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
- Rows: ~0
- Columns: 41
- Indexes: 8
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `overall_score` | `numeric` | NO | `0` | — |
| `value_score` | `numeric` | YES | `0` | — |
| `demand_score` | `numeric` | YES | `0` | — |
| `quality_score` | `numeric` | YES | `0` | — |
| `location_score` | `numeric` | YES | `0` | — |
| `view_velocity` | `numeric` | YES | `0` | — |
| `inquiry_rate` | `numeric` | YES | `0` | — |
| `favorite_rate` | `numeric` | YES | `0` | — |
| `contact_reveal_rate` | `numeric` | YES | `0` | — |
| `site_visit_conversion_rate` | `numeric` | YES | `0` | — |
| `avg_time_on_listing_seconds` | `integer` | YES | `—` | — |
| `repeat_view_rate` | `numeric` | YES | `—` | — |
| `share_count` | `integer` | YES | `0` | — |
| `comparison_count` | `integer` | YES | `0` | — |
| `price_competitiveness` | `numeric` | YES | `—` | — |
| `price_per_sqft_rank` | `integer` | YES | `—` | — |
| `price_trend` | `text` | YES | `—` | — |
| `estimated_market_value` | `numeric` | YES | `—` | — |
| `value_gap_percentage` | `numeric` | YES | `—` | — |
| `listing_completeness_score` | `numeric` | YES | `—` | — |
| `image_quality_score` | `numeric` | YES | `—` | — |
| `description_quality_score` | `numeric` | YES | `—` | — |
| `verification_score` | `numeric` | YES | `—` | — |
| `days_on_market` | `integer` | YES | `0` | — |
| `estimated_days_to_sell` | `integer` | YES | `—` | — |
| `freshness_score` | `numeric` | YES | `—` | — |
| `rank_in_locality` | `integer` | YES | `—` | — |
| `rank_in_city` | `integer` | YES | `—` | — |
| `similar_properties_count` | `integer` | YES | `—` | — |
| `better_value_alternatives_count` | `integer` | YES | `—` | — |
| `is_hot_property` | `boolean` | YES | `false` | — |
| `hot_property_reasons` | `ARRAY` | YES | `—` | — |
| `urgency_score` | `numeric` | YES | `0` | — |
| `investment_score` | `numeric` | YES | `0` | — |
| `roi_potential` | `numeric` | YES | `—` | — |
| `appreciation_potential` | `text` | YES | `—` | — |
| `risk_score` | `numeric` | YES | `0` | — |
| `risk_factors` | `ARRAY` | YES | `—` | — |
| `calculated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_51151_1_not_null`: N/A
- `2200_51151_2_not_null`: N/A
- `2200_51151_3_not_null`: N/A
- `property_intelligence_scores_appreciation_potential_check`: CHECK ((appreciation_potential = ANY (ARRAY['low'::text, 'medium'::text, 'high'::text, 'very_high'::text])))
- `property_intelligence_scores_price_trend_check`: CHECK ((price_trend = ANY (ARRAY['overpriced'::text, 'fair'::text, 'underpriced'::text, 'great_deal'::text])))

**FOREIGN KEY:**
- `property_intelligence_scores_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `property_intelligence_scores_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `property_intelligence_scores_property_id_key`: UNIQUE (property_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_intel_demand` | btree | demand_score | — | — | `CREATE INDEX idx_property_intel_demand ON public.property_intelligence_scores USING btree (demand_score DESC)` |
| `idx_property_intel_hot` | btree | is_hot_property | — | — | `CREATE INDEX idx_property_intel_hot ON public.property_intelligence_scores USING btree (is_hot_property) WHERE (is_hot_property = true)` |
| `idx_property_intel_overall` | btree | overall_score | — | — | `CREATE INDEX idx_property_intel_overall ON public.property_intelligence_scores USING btree (overall_score DESC)` |
| `idx_property_intel_property` | btree | property_id | — | — | `CREATE INDEX idx_property_intel_property ON public.property_intelligence_scores USING btree (property_id)` |
| `idx_property_intel_trend` | btree | price_trend | — | — | `CREATE INDEX idx_property_intel_trend ON public.property_intelligence_scores USING btree (price_trend)` |
| `idx_property_intel_value` | btree | value_score | — | — | `CREATE INDEX idx_property_intel_value ON public.property_intelligence_scores USING btree (value_score DESC)` |
| `property_intelligence_scores_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_intelligence_scores_pkey ON public.property_intelligence_scores USING btree (id)` |
| `property_intelligence_scores_property_id_key` | btree | property_id | ✓ | — | `CREATE UNIQUE INDEX property_intelligence_scores_property_id_key ON public.property_intelligence_scores USING btree (property_id)` |

### Foreign Keys

- `property_intelligence_scores_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_leads`

**Statistics:**
- Rows: ~5
- Columns: 21
- Indexes: 4
- Foreign Keys: 3
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `lead_user_id` | `uuid` | YES | `—` | — |
| `lead_name` | `text` | YES | `—` | — |
| `lead_phone` | `text` | NO | `—` | — |
| `lead_email` | `text` | YES | `—` | — |
| `lead_type` | `text` | YES | `—` | — |
| `source` | `text` | YES | `—` | — |
| `status` | `text` | YES | `'new'::text` | — |
| `priority` | `text` | YES | `'medium'::text` | — |
| `assigned_to` | `uuid` | YES | `—` | — |
| `budget_min` | `numeric` | YES | `—` | — |
| `budget_max` | `numeric` | YES | `—` | — |
| `notes` | `text` | YES | `—` | — |
| `follow_up_date` | `date` | YES | `—` | — |
| `conversion_probability` | `integer` | YES | `—` | — |
| `ip_address` | `inet` | YES | `—` | — |
| `user_agent` | `text` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `last_contacted_at` | `timestamp with time zone` | YES | `—` | — |
| `converted_at` | `timestamp with time zone` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_50664_1_not_null`: N/A
- `2200_50664_2_not_null`: N/A
- `2200_50664_5_not_null`: N/A
- `property_leads_conversion_probability_check`: CHECK (((conversion_probability >= 0) AND (conversion_probability <= 100)))
- `property_leads_lead_type_check`: CHECK ((lead_type = ANY (ARRAY['site_visit'::text, 'call_request'::text, 'email_inquiry'::text, 'whatsapp'::text, 'contact_view'::text])))
- `property_leads_priority_check`: CHECK ((priority = ANY (ARRAY['low'::text, 'medium'::text, 'high'::text, 'urgent'::text])))
- `property_leads_status_check`: CHECK ((status = ANY (ARRAY['new'::text, 'contacted'::text, 'qualified'::text, 'negotiating'::text, 'converted'::text, 'lost'::text])))

**FOREIGN KEY:**
- `property_leads_assigned_to_fkey`: FOREIGN KEY (assigned_to) REFERENCES profiles(id)
- `property_leads_lead_user_id_fkey`: FOREIGN KEY (lead_user_id) REFERENCES profiles(id) ON DELETE SET NULL
- `property_leads_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `property_leads_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_leads_assigned` | btree | assigned_to | — | — | `CREATE INDEX idx_property_leads_assigned ON public.property_leads USING btree (assigned_to)` |
| `idx_property_leads_property` | btree | property_id | — | — | `CREATE INDEX idx_property_leads_property ON public.property_leads USING btree (property_id)` |
| `idx_property_leads_status` | btree | status, priority | — | — | `CREATE INDEX idx_property_leads_status ON public.property_leads USING btree (status, priority)` |
| `property_leads_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_leads_pkey ON public.property_leads USING btree (id)` |

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
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `old_price` | `numeric` | YES | `—` | — |
| `new_price` | `numeric` | YES | `—` | — |
| `change_reason` | `text` | YES | `—` | — |
| `changed_by` | `uuid` | YES | `—` | — |
| `changed_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_19338_1_not_null`: N/A
- `2200_19338_2_not_null`: N/A

**FOREIGN KEY:**
- `property_price_history_changed_by_fkey`: FOREIGN KEY (changed_by) REFERENCES profiles(id) ON DELETE SET NULL
- `property_price_history_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `property_price_history_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_price_history_changed_by` | btree | changed_by | — | — | `CREATE INDEX idx_property_price_history_changed_by ON public.property_price_history USING btree (changed_by)` |
| `idx_property_price_history_property` | btree | property_id | — | — | `CREATE INDEX idx_property_price_history_property ON public.property_price_history USING btree (property_id)` |
| `property_price_history_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_price_history_pkey ON public.property_price_history USING btree (id)` |

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
- Rows: ~0
- Columns: 37
- Indexes: 7
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `price_value_rating` | `numeric` | YES | `5` | — |
| `roi_potential_rating` | `numeric` | YES | `5` | — |
| `appreciation_potential_rating` | `numeric` | YES | `5` | — |
| `location_desirability_rating` | `numeric` | YES | `5` | — |
| `connectivity_rating` | `numeric` | YES | `5` | — |
| `infrastructure_rating` | `numeric` | YES | `5` | — |
| `safety_rating` | `numeric` | YES | `5` | — |
| `construction_quality_rating` | `numeric` | YES | `5` | — |
| `maintenance_rating` | `numeric` | YES | `5` | — |
| `amenities_rating` | `numeric` | YES | `5` | — |
| `design_rating` | `numeric` | YES | `5` | — |
| `legal_clarity_rating` | `numeric` | YES | `5` | — |
| `documentation_completeness_rating` | `numeric` | YES | `5` | — |
| `title_clarity_rating` | `numeric` | YES | `5` | — |
| `demand_rating` | `numeric` | YES | `5` | — |
| `liquidity_rating` | `numeric` | YES | `5` | — |
| `competitive_position_rating` | `numeric` | YES | `5` | — |
| `seller_reputation_rating` | `numeric` | YES | `5` | — |
| `response_rate_rating` | `numeric` | YES | `5` | — |
| `negotiation_flexibility_rating` | `numeric` | YES | `5` | — |
| `investment_rank` | `numeric` | YES | `0` | — |
| `first_time_buyer_rank` | `numeric` | YES | `0` | — |
| `family_rank` | `numeric` | YES | `0` | — |
| `senior_citizen_rank` | `numeric` | YES | `0` | — |
| `overall_rank_in_locality` | `integer` | YES | `—` | — |
| `overall_rank_in_city` | `integer` | YES | `—` | — |
| `overall_rank_in_price_range` | `integer` | YES | `—` | — |
| `value_percentile` | `integer` | YES | `—` | — |
| `demand_percentile` | `integer` | YES | `—` | — |
| `quality_percentile` | `integer` | YES | `—` | — |
| `deal_quality` | `text` | YES | `—` | — |
| `deal_score` | `numeric` | YES | `0` | — |
| `urgency_level` | `text` | YES | `—` | — |
| `opportunity_type` | `ARRAY` | YES | `—` | — |
| `calculated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_51298_1_not_null`: N/A
- `2200_51298_2_not_null`: N/A
- `property_ranking_criteria_deal_quality_check`: CHECK ((deal_quality = ANY (ARRAY['excellent_deal'::text, 'good_deal'::text, 'fair_deal'::text, 'overpriced'::text, 'poor_deal'::text])))
- `property_ranking_criteria_urgency_level_check`: CHECK ((urgency_level = ANY (ARRAY['low'::text, 'medium'::text, 'high'::text, 'critical'::text])))

**FOREIGN KEY:**
- `property_ranking_criteria_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `property_ranking_criteria_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `property_ranking_criteria_property_id_key`: UNIQUE (property_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_ranking_deal_quality` | btree | deal_quality, deal_score | — | — | `CREATE INDEX idx_ranking_deal_quality ON public.property_ranking_criteria USING btree (deal_quality, deal_score DESC)` |
| `idx_ranking_investment` | btree | investment_rank | — | — | `CREATE INDEX idx_ranking_investment ON public.property_ranking_criteria USING btree (investment_rank DESC)` |
| `idx_ranking_locality` | btree | overall_rank_in_locality | — | — | `CREATE INDEX idx_ranking_locality ON public.property_ranking_criteria USING btree (overall_rank_in_locality)` |
| `idx_ranking_property` | btree | property_id | — | — | `CREATE INDEX idx_ranking_property ON public.property_ranking_criteria USING btree (property_id)` |
| `idx_ranking_value_percentile` | btree | value_percentile | — | — | `CREATE INDEX idx_ranking_value_percentile ON public.property_ranking_criteria USING btree (value_percentile)` |
| `property_ranking_criteria_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_ranking_criteria_pkey ON public.property_ranking_criteria USING btree (id)` |
| `property_ranking_criteria_property_id_key` | btree | property_id | ✓ | — | `CREATE UNIQUE INDEX property_ranking_criteria_property_id_key ON public.property_ranking_criteria USING btree (property_id)` |

### Foreign Keys

- `property_ranking_criteria_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `property_repeat_views`

**Statistics:**
- Rows: ~0
- Columns: 21
- Indexes: 5
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `user_id` | `uuid` | YES | `—` | — |
| `session_id` | `text` | YES | `—` | — |
| `view_number` | `integer` | NO | `—` | — |
| `time_since_last_view_hours` | `numeric` | YES | `—` | — |
| `total_time_on_page_seconds` | `integer` | YES | `—` | — |
| `scrolled_percentage` | `integer` | YES | `—` | — |
| `images_viewed` | `integer` | YES | `—` | — |
| `video_played` | `boolean` | YES | `false` | — |
| `floor_plan_viewed` | `boolean` | YES | `false` | — |
| `amenities_expanded` | `boolean` | YES | `false` | — |
| `location_map_interacted` | `boolean` | YES | `false` | — |
| `contact_revealed` | `boolean` | YES | `false` | — |
| `favorite_added` | `boolean` | YES | `false` | — |
| `inquiry_sent` | `boolean` | YES | `false` | — |
| `comparison_added` | `boolean` | YES | `false` | — |
| `shared` | `boolean` | YES | `false` | — |
| `device_type` | `text` | YES | `—` | — |
| `referrer_source` | `text` | YES | `—` | — |
| `viewed_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_51118_1_not_null`: N/A
- `2200_51118_2_not_null`: N/A
- `2200_51118_5_not_null`: N/A
- `property_repeat_views_device_type_check`: CHECK ((device_type = ANY (ARRAY['mobile'::text, 'tablet'::text, 'desktop'::text])))

**FOREIGN KEY:**
- `property_repeat_views_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_repeat_views_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `property_repeat_views_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_repeat_actions` | btree | property_id | — | — | `CREATE INDEX idx_property_repeat_actions ON public.property_repeat_views USING btree (property_id) WHERE ((contact_revealed = true) OR (inquiry_sent = true))` |
| `idx_property_repeat_number` | btree | property_id, user_id, view_number | — | — | `CREATE INDEX idx_property_repeat_number ON public.property_repeat_views USING btree (property_id, user_id, view_number)` |
| `idx_property_repeat_property` | btree | property_id | — | — | `CREATE INDEX idx_property_repeat_property ON public.property_repeat_views USING btree (property_id)` |
| `idx_property_repeat_user` | btree | user_id | — | — | `CREATE INDEX idx_property_repeat_user ON public.property_repeat_views USING btree (user_id)` |
| `property_repeat_views_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_repeat_views_pkey ON public.property_repeat_views USING btree (id)` |

### Foreign Keys

- `property_repeat_views_property_id_fkey`:
  - Columns: `property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE
- `property_repeat_views_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

---

## `property_reports`

**Statistics:**
- Rows: ~0
- Columns: 11
- Indexes: 3
- Foreign Keys: 3
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `reported_by` | `uuid` | YES | `—` | — |
| `report_type` | `text` | NO | `—` | — |
| `description` | `text` | NO | `—` | — |
| `evidence_urls` | `ARRAY` | YES | `—` | — |
| `status` | `text` | YES | `'pending'::text` | — |
| `reviewed_by` | `uuid` | YES | `—` | — |
| `action_taken` | `text` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `resolved_at` | `timestamp with time zone` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_50787_1_not_null`: N/A
- `2200_50787_2_not_null`: N/A
- `2200_50787_4_not_null`: N/A
- `2200_50787_5_not_null`: N/A
- `property_reports_report_type_check`: CHECK ((report_type = ANY (ARRAY['fake_listing'::text, 'wrong_information'::text, 'inappropriate_content'::text, 'duplicate_listing'::text, 'spam'::text, 'fraud'::text, 'sold_property'::text, 'other'::text])))
- `property_reports_status_check`: CHECK ((status = ANY (ARRAY['pending'::text, 'investigating'::text, 'resolved'::text, 'dismissed'::text])))

**FOREIGN KEY:**
- `property_reports_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_reports_reported_by_fkey`: FOREIGN KEY (reported_by) REFERENCES profiles(id) ON DELETE SET NULL
- `property_reports_reviewed_by_fkey`: FOREIGN KEY (reviewed_by) REFERENCES admins(id)

**PRIMARY KEY:**
- `property_reports_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_reports_property` | btree | property_id | — | — | `CREATE INDEX idx_property_reports_property ON public.property_reports USING btree (property_id)` |
| `idx_property_reports_status` | btree | status | — | — | `CREATE INDEX idx_property_reports_status ON public.property_reports USING btree (status)` |
| `property_reports_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_reports_pkey ON public.property_reports USING btree (id)` |

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
- Rows: ~0
- Columns: 6
- Indexes: 2
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `shared_by` | `uuid` | YES | `—` | — |
| `platform` | `text` | NO | `—` | — |
| `ip_address` | `inet` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_50887_1_not_null`: N/A
- `2200_50887_2_not_null`: N/A
- `2200_50887_4_not_null`: N/A
- `property_shares_platform_check`: CHECK ((platform = ANY (ARRAY['whatsapp'::text, 'facebook'::text, 'twitter'::text, 'linkedin'::text, 'email'::text, 'copy_link'::text, 'sms'::text])))

**FOREIGN KEY:**
- `property_shares_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_shares_shared_by_fkey`: FOREIGN KEY (shared_by) REFERENCES profiles(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `property_shares_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_shares_property` | btree | property_id | — | — | `CREATE INDEX idx_property_shares_property ON public.property_shares USING btree (property_id)` |
| `property_shares_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_shares_pkey ON public.property_shares USING btree (id)` |

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
- Rows: ~3
- Columns: 37
- Indexes: 5
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `estimated_value` | `numeric` | NO | `—` | — |
| `confidence_score` | `numeric` | YES | `—` | — |
| `valuation_method` | `text` | YES | `—` | — |
| `min_estimated_value` | `numeric` | YES | `—` | — |
| `max_estimated_value` | `numeric` | YES | `—` | — |
| `comparable_properties_used` | `integer` | YES | `—` | — |
| `comparable_property_ids` | `ARRAY` | YES | `—` | — |
| `avg_comparable_price` | `numeric` | YES | `—` | — |
| `base_price_per_sqft` | `numeric` | YES | `—` | — |
| `location_adjustment_percentage` | `numeric` | YES | `—` | — |
| `age_adjustment_percentage` | `numeric` | YES | `—` | — |
| `amenities_adjustment_percentage` | `numeric` | YES | `—` | — |
| `condition_adjustment_percentage` | `numeric` | YES | `—` | — |
| `market_trend_adjustment_percentage` | `numeric` | YES | `—` | — |
| `locality_avg_price_per_sqft` | `numeric` | YES | `—` | — |
| `locality_price_growth_1y` | `numeric` | YES | `—` | — |
| `proximity_premium_percentage` | `numeric` | YES | `—` | — |
| `property_age_years` | `integer` | YES | `—` | — |
| `maintenance_condition` | `text` | YES | `—` | — |
| `unique_selling_points` | `ARRAY` | YES | `—` | — |
| `market_temperature` | `text` | YES | `—` | — |
| `seasonal_adjustment` | `numeric` | YES | `—` | — |
| `land_value` | `numeric` | YES | `—` | — |
| `construction_value` | `numeric` | YES | `—` | — |
| `depreciation_value` | `numeric` | YES | `—` | — |
| `appreciation_value` | `numeric` | YES | `—` | — |
| `model_version` | `text` | YES | `—` | — |
| `model_accuracy` | `numeric` | YES | `—` | — |
| `feature_importance` | `jsonb` | YES | `—` | — |
| `validation_status` | `text` | YES | `—` | — |
| `validated_by` | `uuid` | YES | `—` | — |
| `validation_notes` | `text` | YES | `—` | — |
| `valuation_date` | `date` | NO | `CURRENT_DATE` | — |
| `valid_until` | `date` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_51193_1_not_null`: N/A
- `2200_51193_2_not_null`: N/A
- `2200_51193_35_not_null`: N/A
- `2200_51193_3_not_null`: N/A
- `property_valuations_maintenance_condition_check`: CHECK ((maintenance_condition = ANY (ARRAY['excellent'::text, 'good'::text, 'average'::text, 'needs_work'::text, 'poor'::text])))
- `property_valuations_market_temperature_check`: CHECK ((market_temperature = ANY (ARRAY['buyer_market'::text, 'balanced'::text, 'seller_market'::text, 'hot_market'::text])))
- `property_valuations_validation_status_check`: CHECK ((validation_status = ANY (ARRAY['pending'::text, 'validated'::text, 'disputed'::text, 'updated'::text])))
- `property_valuations_valuation_method_check`: CHECK ((valuation_method = ANY (ARRAY['automated_ml'::text, 'comparative_market_analysis'::text, 'manual_assessment'::text, 'hybrid'::text, 'professional_appraisal'::text])))

**FOREIGN KEY:**
- `property_valuations_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_valuations_validated_by_fkey`: FOREIGN KEY (validated_by) REFERENCES profiles(id)

**PRIMARY KEY:**
- `property_valuations_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_valuations_confidence` | btree | confidence_score | — | — | `CREATE INDEX idx_valuations_confidence ON public.property_valuations USING btree (confidence_score DESC)` |
| `idx_valuations_date` | btree | valuation_date | — | — | `CREATE INDEX idx_valuations_date ON public.property_valuations USING btree (valuation_date DESC)` |
| `idx_valuations_method` | btree | valuation_method | — | — | `CREATE INDEX idx_valuations_method ON public.property_valuations USING btree (valuation_method)` |
| `idx_valuations_property` | btree | property_id, valuation_date | — | — | `CREATE INDEX idx_valuations_property ON public.property_valuations USING btree (property_id, valuation_date DESC)` |
| `property_valuations_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_valuations_pkey ON public.property_valuations USING btree (id)` |

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
- Rows: ~0
- Columns: 13
- Indexes: 3
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `verification_type` | `text` | NO | `—` | — |
| `status` | `text` | YES | `'pending'::text` | — |
| `verified_by` | `uuid` | YES | `—` | — |
| `verification_agency` | `text` | YES | `—` | — |
| `verification_number` | `text` | YES | `—` | — |
| `report_url` | `text` | YES | `—` | — |
| `findings` | `jsonb` | YES | `—` | — |
| `valid_until` | `timestamp with time zone` | YES | `—` | — |
| `cost` | `numeric` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `verified_at` | `timestamp with time zone` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_50598_1_not_null`: N/A
- `2200_50598_2_not_null`: N/A
- `2200_50598_3_not_null`: N/A
- `property_verifications_status_check`: CHECK ((status = ANY (ARRAY['pending'::text, 'in_progress'::text, 'verified'::text, 'rejected'::text, 'expired'::text])))
- `property_verifications_verification_type_check`: CHECK ((verification_type = ANY (ARRAY['title_verification'::text, 'legal_clearance'::text, 'encumbrance_check'::text, 'property_tax_verification'::text, 'building_approval'::text, 'structural_audit'::text, 'valuation_report'::text, 'tenant_verification'::text, 'site_inspection'::text])))

**FOREIGN KEY:**
- `property_verifications_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_verifications_verified_by_fkey`: FOREIGN KEY (verified_by) REFERENCES profiles(id)

**PRIMARY KEY:**
- `property_verifications_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_verifications_property` | btree | property_id | — | — | `CREATE INDEX idx_property_verifications_property ON public.property_verifications USING btree (property_id)` |
| `idx_property_verifications_status` | btree | verification_type, status | — | — | `CREATE INDEX idx_property_verifications_status ON public.property_verifications USING btree (status, verification_type)` |
| `property_verifications_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_verifications_pkey ON public.property_verifications USING btree (id)` |

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
- Rows: ~10
- Columns: 10
- Indexes: 5
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `user_id` | `uuid` | YES | `—` | — |
| `session_id` | `text` | YES | `—` | — |
| `ip_address` | `inet` | YES | `—` | — |
| `user_agent` | `text` | YES | `—` | — |
| `referrer` | `text` | YES | `—` | — |
| `view_duration` | `integer` | YES | `—` | — |
| `is_phone_view` | `boolean` | YES | `false` | — |
| `viewed_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_19002_1_not_null`: N/A
- `2200_19002_2_not_null`: N/A

**FOREIGN KEY:**
- `property_views_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_views_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `property_views_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `unique_property_session`: UNIQUE (property_id, session_id)
- `unique_property_session`: UNIQUE (property_id, session_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_views_date` | btree | viewed_at | — | — | `CREATE INDEX idx_property_views_date ON public.property_views USING btree (viewed_at DESC)` |
| `idx_property_views_property` | btree | property_id | — | — | `CREATE INDEX idx_property_views_property ON public.property_views USING btree (property_id)` |
| `idx_property_views_property_session` | btree | property_id, session_id | — | — | `CREATE INDEX idx_property_views_property_session ON public.property_views USING btree (property_id, session_id)` |
| `property_views_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_views_pkey ON public.property_views USING btree (id)` |
| `unique_property_session` | btree | property_id, session_id | ✓ | — | `CREATE UNIQUE INDEX unique_property_session ON public.property_views USING btree (property_id, session_id)` |

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
- Rows: ~0
- Columns: 11
- Indexes: 3
- Foreign Keys: 3
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `visitor_id` | `uuid` | YES | `—` | — |
| `visit_date` | `date` | NO | `—` | — |
| `visit_time` | `time without time zone` | YES | `—` | — |
| `visit_type` | `text` | YES | `—` | — |
| `status` | `text` | YES | `'scheduled'::text` | — |
| `accompanied_by` | `uuid` | YES | `—` | — |
| `feedback` | `text` | YES | `—` | — |
| `interest_level` | `text` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_50733_1_not_null`: N/A
- `2200_50733_2_not_null`: N/A
- `2200_50733_4_not_null`: N/A
- `property_visits_interest_level_check`: CHECK ((interest_level = ANY (ARRAY['low'::text, 'medium'::text, 'high'::text, 'very_high'::text])))
- `property_visits_status_check`: CHECK ((status = ANY (ARRAY['scheduled'::text, 'completed'::text, 'cancelled'::text, 'no_show'::text])))
- `property_visits_visit_type_check`: CHECK ((visit_type = ANY (ARRAY['scheduled'::text, 'walk_in'::text, 'virtual'::text])))

**FOREIGN KEY:**
- `property_visits_accompanied_by_fkey`: FOREIGN KEY (accompanied_by) REFERENCES profiles(id)
- `property_visits_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_visits_visitor_id_fkey`: FOREIGN KEY (visitor_id) REFERENCES profiles(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `property_visits_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_property_visits_property` | btree | property_id, visit_date | — | — | `CREATE INDEX idx_property_visits_property ON public.property_visits USING btree (property_id, visit_date)` |
| `idx_property_visits_visitor` | btree | visitor_id | — | — | `CREATE INDEX idx_property_visits_visitor ON public.property_visits USING btree (visitor_id)` |
| `property_visits_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX property_visits_pkey ON public.property_visits USING btree (id)` |

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
- Rows: ~0
- Columns: 12
- Indexes: 4
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `referrer_id` | `uuid` | NO | `—` | — |
| `referred_id` | `uuid` | YES | `—` | — |
| `referral_code` | `text` | NO | `—` | — |
| `referred_email` | `text` | YES | `—` | — |
| `referred_phone` | `text` | YES | `—` | — |
| `status` | `text` | YES | `'pending'::text` | — |
| `reward_type` | `text` | YES | `—` | — |
| `reward_amount` | `numeric` | YES | `—` | — |
| `credited_at` | `timestamp with time zone` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `converted_at` | `timestamp with time zone` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_50908_1_not_null`: N/A
- `2200_50908_2_not_null`: N/A
- `2200_50908_4_not_null`: N/A
- `referrals_reward_type_check`: CHECK ((reward_type = ANY (ARRAY['credits'::text, 'cash'::text, 'discount'::text])))
- `referrals_status_check`: CHECK ((status = ANY (ARRAY['pending'::text, 'registered'::text, 'converted'::text, 'expired'::text])))

**FOREIGN KEY:**
- `referrals_referred_id_fkey`: FOREIGN KEY (referred_id) REFERENCES profiles(id) ON DELETE SET NULL
- `referrals_referrer_id_fkey`: FOREIGN KEY (referrer_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `referrals_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `referrals_referral_code_key`: UNIQUE (referral_code)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_referrals_code` | btree | referral_code | — | — | `CREATE INDEX idx_referrals_code ON public.referrals USING btree (referral_code)` |
| `idx_referrals_referrer` | btree | referrer_id | — | — | `CREATE INDEX idx_referrals_referrer ON public.referrals USING btree (referrer_id)` |
| `referrals_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX referrals_pkey ON public.referrals USING btree (id)` |
| `referrals_referral_code_key` | btree | referral_code | ✓ | — | `CREATE UNIQUE INDEX referrals_referral_code_key ON public.referrals USING btree (referral_code)` |

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

## `regions`

> Master table for regional configuration across India

**Statistics:**
- Rows: ~107
- Columns: 15
- Indexes: 5
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |
| `code` | `text` | NO | `—` | — |
| `type` | `text` | NO | `—` | — |
| `parent_region_id` | `uuid` | YES | `—` | — |
| `gst_number` | `text` | YES | `—` | — |
| `gst_rate` | `numeric` | YES | `18.00` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `requires_kyc` | `boolean` | YES | `false` | — |
| `market_tier` | `integer` | YES | `—` | — |
| `population_estimate` | `integer` | YES | `—` | — |
| `currency_code` | `text` | YES | `'INR'::text` | — |
| `timezone` | `text` | YES | `'Asia/Kolkata'::text` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45678_1_not_null`: N/A
- `2200_45678_2_not_null`: N/A
- `2200_45678_3_not_null`: N/A
- `2200_45678_4_not_null`: N/A
- `regions_market_tier_check`: CHECK ((market_tier = ANY (ARRAY[1, 2, 3])))
- `regions_type_check`: CHECK ((type = ANY (ARRAY['state'::text, 'city'::text, 'metro'::text, 'tier2'::text, 'tier3'::text])))

**FOREIGN KEY:**
- `regions_parent_region_id_fkey`: FOREIGN KEY (parent_region_id) REFERENCES regions(id)

**PRIMARY KEY:**
- `regions_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `regions_code_key`: UNIQUE (code)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_regions_code` | btree | code | — | — | `CREATE INDEX idx_regions_code ON public.regions USING btree (code)` |
| `idx_regions_parent` | btree | parent_region_id | — | — | `CREATE INDEX idx_regions_parent ON public.regions USING btree (parent_region_id)` |
| `idx_regions_type` | btree | type | — | — | `CREATE INDEX idx_regions_type ON public.regions USING btree (type)` |
| `regions_code_key` | btree | code | ✓ | — | `CREATE UNIQUE INDEX regions_code_key ON public.regions USING btree (code)` |
| `regions_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX regions_pkey ON public.regions USING btree (id)` |

### Foreign Keys

- `regions_parent_region_id_fkey`:
  - Columns: `parent_region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION

---

## `repeat_customer_analytics`

**Statistics:**
- Rows: ~0
- Columns: 31
- Indexes: 7
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `total_visits` | `integer` | YES | `0` | — |
| `visits_last_7_days` | `integer` | YES | `0` | — |
| `visits_last_30_days` | `integer` | YES | `0` | — |
| `visits_last_90_days` | `integer` | YES | `0` | — |
| `consecutive_days_active` | `integer` | YES | `0` | — |
| `longest_streak_days` | `integer` | YES | `0` | — |
| `total_unique_properties_viewed` | `integer` | YES | `0` | — |
| `properties_viewed_multiple_times` | `integer` | YES | `0` | — |
| `avg_views_per_property` | `numeric` | YES | `—` | — |
| `most_viewed_property_id` | `uuid` | YES | `—` | — |
| `most_viewed_property_count` | `integer` | YES | `0` | — |
| `consistent_search_criteria` | `boolean` | YES | `false` | — |
| `search_criteria_changes` | `integer` | YES | `0` | — |
| `location_focus_count` | `integer` | YES | `0` | — |
| `price_range_stability` | `numeric` | YES | `—` | — |
| `avg_days_between_visits` | `numeric` | YES | `—` | — |
| `visit_frequency_trend` | `text` | YES | `—` | — |
| `inquiries_per_property_viewed` | `numeric` | YES | `—` | — |
| `conversion_funnel_stage` | `text` | YES | `—` | — |
| `is_repeat_customer` | `boolean` | YES | `false` | — |
| `repeat_customer_type` | `text` | YES | `—` | — |
| `previous_properties_bought` | `integer` | YES | `0` | — |
| `previous_properties_sold` | `integer` | YES | `0` | — |
| `total_transaction_value` | `numeric` | YES | `0` | — |
| `customer_lifetime_value` | `numeric` | YES | `0` | — |
| `churn_risk_score` | `numeric` | YES | `0` | — |
| `reactivation_potential` | `numeric` | YES | `0` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_51069_1_not_null`: N/A
- `2200_51069_2_not_null`: N/A
- `repeat_customer_analytics_conversion_funnel_stage_check`: CHECK ((conversion_funnel_stage = ANY (ARRAY['awareness'::text, 'consideration'::text, 'decision'::text, 'action'::text, 'converted'::text])))
- `repeat_customer_analytics_repeat_customer_type_check`: CHECK ((repeat_customer_type = ANY (ARRAY['investor'::text, 'upgrader'::text, 'downgrader'::text, 'flipper'::text, 'multiple_property_owner'::text])))
- `repeat_customer_analytics_visit_frequency_trend_check`: CHECK ((visit_frequency_trend = ANY (ARRAY['increasing'::text, 'stable'::text, 'decreasing'::text, 'sporadic'::text])))

**FOREIGN KEY:**
- `repeat_customer_analytics_most_viewed_property_id_fkey`: FOREIGN KEY (most_viewed_property_id) REFERENCES properties(id)
- `repeat_customer_analytics_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `repeat_customer_analytics_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `repeat_customer_analytics_user_id_key`: UNIQUE (user_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_repeat_churn` | btree | churn_risk_score | — | — | `CREATE INDEX idx_repeat_churn ON public.repeat_customer_analytics USING btree (churn_risk_score DESC)` |
| `idx_repeat_customer_user` | btree | user_id | — | — | `CREATE INDEX idx_repeat_customer_user ON public.repeat_customer_analytics USING btree (user_id)` |
| `idx_repeat_frequency` | btree | visit_frequency_trend | — | — | `CREATE INDEX idx_repeat_frequency ON public.repeat_customer_analytics USING btree (visit_frequency_trend)` |
| `idx_repeat_stage` | btree | conversion_funnel_stage | — | — | `CREATE INDEX idx_repeat_stage ON public.repeat_customer_analytics USING btree (conversion_funnel_stage)` |
| `idx_repeat_visits` | btree | visits_last_30_days | — | — | `CREATE INDEX idx_repeat_visits ON public.repeat_customer_analytics USING btree (visits_last_30_days DESC)` |
| `repeat_customer_analytics_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX repeat_customer_analytics_pkey ON public.repeat_customer_analytics USING btree (id)` |
| `repeat_customer_analytics_user_id_key` | btree | user_id | ✓ | — | `CREATE UNIQUE INDEX repeat_customer_analytics_user_id_key ON public.repeat_customer_analytics USING btree (user_id)` |

### Foreign Keys

- `repeat_customer_analytics_most_viewed_property_id_fkey`:
  - Columns: `most_viewed_property_id` → `properties(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `repeat_customer_analytics_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `role_permissions`

**Statistics:**
- Rows: ~27
- Columns: 2
- Indexes: 1
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `role_id` | `uuid` | NO | `—` | — |
| `permission_id` | `uuid` | NO | `—` | — |

### Constraints

**CHECK:**
- `2200_39736_1_not_null`: N/A
- `2200_39736_2_not_null`: N/A

**FOREIGN KEY:**
- `role_permissions_permission_id_fkey`: FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
- `role_permissions_role_id_fkey`: FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `role_permissions_pkey`: PRIMARY KEY (role_id, permission_id)
- `role_permissions_pkey`: PRIMARY KEY (role_id, permission_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `role_permissions_pkey` | btree | role_id, permission_id | ✓ | ✓ | `CREATE UNIQUE INDEX role_permissions_pkey ON public.role_permissions USING btree (role_id, permission_id)` |

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

## `roles`

**Statistics:**
- Rows: ~8
- Columns: 2
- Indexes: 2
- Foreign Keys: 0
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |

### Constraints

**CHECK:**
- `2200_39713_1_not_null`: N/A
- `2200_39713_2_not_null`: N/A

**PRIMARY KEY:**
- `roles_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `roles_name_key`: UNIQUE (name)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `roles_name_key` | btree | name | ✓ | — | `CREATE UNIQUE INDEX roles_name_key ON public.roles USING btree (name)` |
| `roles_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX roles_pkey ON public.roles USING btree (id)` |

---

## `saved_searches`

**Statistics:**
- Rows: ~0
- Columns: 11
- Indexes: 2
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `search_name` | `text` | NO | `—` | — |
| `filters` | `jsonb` | NO | `—` | — |
| `notification_enabled` | `boolean` | YES | `true` | — |
| `notification_frequency` | `text` | YES | `'daily'::text` | — |
| `last_notified_at` | `timestamp with time zone` | YES | `—` | — |
| `match_count` | `integer` | YES | `0` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_50712_1_not_null`: N/A
- `2200_50712_2_not_null`: N/A
- `2200_50712_3_not_null`: N/A
- `2200_50712_4_not_null`: N/A
- `saved_searches_notification_frequency_check`: CHECK ((notification_frequency = ANY (ARRAY['instant'::text, 'daily'::text, 'weekly'::text])))

**FOREIGN KEY:**
- `saved_searches_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `saved_searches_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_saved_searches_user` | btree | user_id, is_active | — | — | `CREATE INDEX idx_saved_searches_user ON public.saved_searches USING btree (user_id, is_active)` |
| `saved_searches_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX saved_searches_pkey ON public.saved_searches USING btree (id)` |

### Foreign Keys

- `saved_searches_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `search_history`

**Statistics:**
- Rows: ~0
- Columns: 8
- Indexes: 2
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | YES | `—` | — |
| `search_query` | `text` | NO | `—` | — |
| `filters` | `jsonb` | YES | `—` | — |
| `results_count` | `integer` | YES | `—` | — |
| `session_id` | `text` | YES | `—` | — |
| `ip_address` | `inet` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_19159_1_not_null`: N/A
- `2200_19159_3_not_null`: N/A

**FOREIGN KEY:**
- `search_history_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `search_history_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_search_history_user` | btree | user_id | — | — | `CREATE INDEX idx_search_history_user ON public.search_history USING btree (user_id)` |
| `search_history_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX search_history_pkey ON public.search_history USING btree (id)` |

### Foreign Keys

- `search_history_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `security_flags`

> Tracks flagged admin activities for security review

**Statistics:**
- Rows: ~0
- Columns: 9
- Indexes: 4
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `admin_email` | `character varying(255)` | NO | `—` | — |
| `flagged_by` | `uuid` | NO | `—` | — |
| `reason` | `text` | NO | `—` | — |
| `status` | `character varying(50)` | NO | `'pending'::character varying` | "Status: pending (awaiting review), reviewed (action taken), dismissed (false positive)" |
| `resolution_notes` | `text` | YES | `—` | — |
| `resolved_by` | `uuid` | YES | `—` | — |
| `created_at` | `timestamp without time zone` | NO | `now()` | — |
| `resolved_at` | `timestamp without time zone` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_46122_1_not_null`: N/A
- `2200_46122_2_not_null`: N/A
- `2200_46122_3_not_null`: N/A
- `2200_46122_4_not_null`: N/A
- `2200_46122_5_not_null`: N/A
- `2200_46122_8_not_null`: N/A
- `valid_status`: CHECK (((status)::text = ANY ((ARRAY['pending'::character varying, 'reviewed'::character varying, 'dismissed'::character varying])::text[])))

**FOREIGN KEY:**
- `security_flags_flagged_by_fkey`: FOREIGN KEY (flagged_by) REFERENCES admins(id)
- `security_flags_resolved_by_fkey`: FOREIGN KEY (resolved_by) REFERENCES admins(id)

**PRIMARY KEY:**
- `security_flags_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_security_flags_admin_email` | btree | admin_email | — | — | `CREATE INDEX idx_security_flags_admin_email ON public.security_flags USING btree (admin_email)` |
| `idx_security_flags_created_at` | btree | created_at | — | — | `CREATE INDEX idx_security_flags_created_at ON public.security_flags USING btree (created_at DESC)` |
| `idx_security_flags_status` | btree | status | — | — | `CREATE INDEX idx_security_flags_status ON public.security_flags USING btree (status)` |
| `security_flags_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX security_flags_pkey ON public.security_flags USING btree (id)` |

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
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `srid` | `integer` | NO | `—` | — |
| `auth_name` | `character varying(256)` | YES | `—` | — |
| `auth_srid` | `integer` | YES | `—` | — |
| `srtext` | `character varying(2048)` | YES | `—` | — |
| `proj4text` | `character varying(2048)` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_55281_1_not_null`: N/A
- `spatial_ref_sys_srid_check`: CHECK (((srid > 0) AND (srid <= 998999)))

**PRIMARY KEY:**
- `spatial_ref_sys_pkey`: PRIMARY KEY (srid)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `spatial_ref_sys_pkey` | btree | srid | ✓ | ✓ | `CREATE UNIQUE INDEX spatial_ref_sys_pkey ON public.spatial_ref_sys USING btree (srid)` |

---

## `states`

> Indian states with LGD (Local Government Directory) codes

**Statistics:**
- Rows: ~36
- Columns: 7
- Indexes: 6
- Foreign Keys: 0
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `lgd_code` | `character varying(5)` | NO | `—` | "Official LGD state code from govt.in" |
| `name` | `text` | NO | `—` | — |
| `iso_code` | `character varying(8)` | YES | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_56093_1_not_null`: N/A
- `2200_56093_2_not_null`: N/A
- `2200_56093_3_not_null`: N/A
- `valid_iso_code`: CHECK (((iso_code)::text ~ '^IN-[A-Z]{2}$'::text))
- `valid_lgd_code`: CHECK (((lgd_code)::text ~ '^[0-9]{2,5}$'::text))

**PRIMARY KEY:**
- `states_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `states_iso_code_key`: UNIQUE (iso_code)
- `states_lgd_code_key`: UNIQUE (lgd_code)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_states_active` | btree | is_active | — | — | `CREATE INDEX idx_states_active ON public.states USING btree (is_active) WHERE (is_active = true)` |
| `idx_states_lgd` | btree | lgd_code | — | — | `CREATE INDEX idx_states_lgd ON public.states USING btree (lgd_code)` |
| `idx_states_name` | btree | name | — | — | `CREATE INDEX idx_states_name ON public.states USING btree (name)` |
| `states_iso_code_key` | btree | iso_code | ✓ | — | `CREATE UNIQUE INDEX states_iso_code_key ON public.states USING btree (iso_code)` |
| `states_lgd_code_key` | btree | lgd_code | ✓ | — | `CREATE UNIQUE INDEX states_lgd_code_key ON public.states USING btree (lgd_code)` |
| `states_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX states_pkey ON public.states USING btree (id)` |

---

## `sub_districts`

> Sub-districts/Talukas for granular location hierarchy

**Statistics:**
- Rows: ~0
- Columns: 7
- Indexes: 5
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `lgd_code` | `character varying(10)` | YES | `—` | — |
| `district_id` | `uuid` | NO | `—` | — |
| `name` | `text` | NO | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_56136_1_not_null`: N/A
- `2200_56136_3_not_null`: N/A
- `2200_56136_4_not_null`: N/A

**FOREIGN KEY:**
- `sub_districts_district_id_fkey`: FOREIGN KEY (district_id) REFERENCES districts(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `sub_districts_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `sub_districts_lgd_code_key`: UNIQUE (lgd_code)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_sub_districts_district` | btree | district_id | — | — | `CREATE INDEX idx_sub_districts_district ON public.sub_districts USING btree (district_id)` |
| `idx_sub_districts_name` | btree | district_id, name | — | — | `CREATE INDEX idx_sub_districts_name ON public.sub_districts USING btree (district_id, name)` |
| `idx_sub_districts_name_trgm` | gin | name | — | — | `CREATE INDEX idx_sub_districts_name_trgm ON public.sub_districts USING gin (name gin_trgm_ops)` |
| `sub_districts_lgd_code_key` | btree | lgd_code | ✓ | — | `CREATE UNIQUE INDEX sub_districts_lgd_code_key ON public.sub_districts USING btree (lgd_code)` |
| `sub_districts_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX sub_districts_pkey ON public.sub_districts USING btree (id)` |

### Foreign Keys

- `sub_districts_district_id_fkey`:
  - Columns: `district_id` → `districts(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `subscription_enrollments`

**Statistics:**
- Rows: ~0
- Columns: 13
- Indexes: 4
- Foreign Keys: 3
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `plan_id` | `uuid` | NO | `—` | — |
| `status` | `text` | NO | `'active'::text` | — |
| `price_paid` | `numeric` | NO | `—` | — |
| `credits_allocated` | `integer` | NO | `—` | — |
| `started_at` | `timestamp with time zone` | YES | `now()` | — |
| `expires_at` | `timestamp with time zone` | NO | `—` | — |
| `cancelled_at` | `timestamp with time zone` | YES | `—` | — |
| `auto_renew` | `boolean` | YES | `true` | — |
| `purchase_transaction_id` | `uuid` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_46003_1_not_null`: N/A
- `2200_46003_2_not_null`: N/A
- `2200_46003_3_not_null`: N/A
- `2200_46003_4_not_null`: N/A
- `2200_46003_5_not_null`: N/A
- `2200_46003_6_not_null`: N/A
- `2200_46003_8_not_null`: N/A
- `subscription_enrollments_status_check`: CHECK ((status = ANY (ARRAY['active'::text, 'paused'::text, 'cancelled'::text, 'expired'::text])))

**FOREIGN KEY:**
- `subscription_enrollments_plan_id_fkey`: FOREIGN KEY (plan_id) REFERENCES subscription_plans(id)
- `subscription_enrollments_purchase_transaction_id_fkey`: FOREIGN KEY (purchase_transaction_id) REFERENCES transactions(id)
- `subscription_enrollments_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `subscription_enrollments_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_subscriptions_expires` | btree | expires_at | — | — | `CREATE INDEX idx_subscriptions_expires ON public.subscription_enrollments USING btree (expires_at) WHERE (status = 'active'::text)` |
| `idx_subscriptions_plan` | btree | plan_id | — | — | `CREATE INDEX idx_subscriptions_plan ON public.subscription_enrollments USING btree (plan_id)` |
| `idx_subscriptions_user` | btree | user_id, status | — | — | `CREATE INDEX idx_subscriptions_user ON public.subscription_enrollments USING btree (user_id, status)` |
| `subscription_enrollments_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX subscription_enrollments_pkey ON public.subscription_enrollments USING btree (id)` |

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
- Rows: ~0
- Columns: 19
- Indexes: 5
- Foreign Keys: 1
- Triggers: 3

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `name` | `text` | NO | `—` | — |
| `description` | `text` | YES | `—` | — |
| `plan_code` | `text` | NO | `—` | — |
| `base_price` | `numeric` | NO | `—` | — |
| `credits_monthly` | `integer` | NO | `—` | — |
| `duration_days` | `integer` | NO | `30` | — |
| `region_id` | `uuid` | YES | `—` | — |
| `regional_price` | `numeric` | YES | `—` | — |
| `regional_credits` | `integer` | YES | `—` | — |
| `user_type` | `text` | NO | `—` | — |
| `min_kyc_level` | `integer` | YES | `0` | — |
| `features` | `jsonb` | YES | `'{}'::jsonb` | — |
| `max_active_listings` | `integer` | YES | `—` | — |
| `contact_views_included` | `integer` | YES | `—` | — |
| `is_active` | `boolean` | YES | `true` | — |
| `display_order` | `integer` | YES | `0` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45753_11_not_null`: N/A
- `2200_45753_1_not_null`: N/A
- `2200_45753_2_not_null`: N/A
- `2200_45753_4_not_null`: N/A
- `2200_45753_5_not_null`: N/A
- `2200_45753_6_not_null`: N/A
- `2200_45753_7_not_null`: N/A
- `subscription_plans_user_type_check`: CHECK ((user_type = ANY (ARRAY['buyer'::text, 'seller'::text, 'agent'::text, 'agency'::text])))

**FOREIGN KEY:**
- `subscription_plans_region_id_fkey`: FOREIGN KEY (region_id) REFERENCES regions(id) ON DELETE SET NULL

**PRIMARY KEY:**
- `subscription_plans_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `subscription_plans_plan_code_key`: UNIQUE (plan_code)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_subscription_plans_active` | btree | is_active, display_order | — | — | `CREATE INDEX idx_subscription_plans_active ON public.subscription_plans USING btree (is_active, display_order)` |
| `idx_subscription_plans_code` | btree | plan_code | — | — | `CREATE INDEX idx_subscription_plans_code ON public.subscription_plans USING btree (plan_code)` |
| `idx_subscription_plans_user_type` | btree | user_type | — | — | `CREATE INDEX idx_subscription_plans_user_type ON public.subscription_plans USING btree (user_type) WHERE (is_active = true)` |
| `subscription_plans_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX subscription_plans_pkey ON public.subscription_plans USING btree (id)` |
| `subscription_plans_plan_code_key` | btree | plan_code | ✓ | — | `CREATE UNIQUE INDEX subscription_plans_plan_code_key ON public.subscription_plans USING btree (plan_code)` |

### Foreign Keys

- `subscription_plans_region_id_fkey`:
  - Columns: `region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: SET NULL

### Triggers

- `audit_subscription_plans`:
  - When: AFTER INSERT
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_subscription_plans`:
  - When: AFTER DELETE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `audit_subscription_plans`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```

---

## `system_health_metrics`

**Statistics:**
- Rows: ~2
- Columns: 6
- Indexes: 2
- Foreign Keys: 0
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `metric_name` | `text` | NO | `—` | — |
| `metric_value` | `numeric` | NO | `—` | — |
| `metric_unit` | `text` | YES | `—` | — |
| `context` | `jsonb` | YES | `—` | — |
| `recorded_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_56402_1_not_null`: N/A
- `2200_56402_2_not_null`: N/A
- `2200_56402_3_not_null`: N/A

**PRIMARY KEY:**
- `system_health_metrics_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_health_metrics_name` | btree | metric_name, recorded_at | — | — | `CREATE INDEX idx_health_metrics_name ON public.system_health_metrics USING btree (metric_name, recorded_at DESC)` |
| `system_health_metrics_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX system_health_metrics_pkey ON public.system_health_metrics USING btree (id)` |

---

## `transactions`

> All financial transactions with regional GST tracking

**Statistics:**
- Rows: ~60
- Columns: 31
- Indexes: 8
- Foreign Keys: 7
- Triggers: 2

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `type` | `text` | NO | `—` | — |
| `amount_cash` | `numeric` | YES | `0` | — |
| `amount_credits` | `integer` | YES | `0` | — |
| `region_id` | `uuid` | YES | `—` | — |
| `pricing_rule_id` | `uuid` | YES | `—` | — |
| `gst_rate` | `numeric` | YES | `—` | — |
| `gst_amount` | `numeric` | YES | `—` | — |
| `gst_number` | `text` | YES | `—` | — |
| `reference_id` | `uuid` | YES | `—` | — |
| `reference_type` | `text` | YES | `—` | — |
| `description` | `text` | NO | `—` | — |
| `gateway` | `text` | YES | `—` | — |
| `gateway_transaction_id` | `text` | YES | `—` | — |
| `gateway_response` | `jsonb` | YES | `—` | — |
| `coupon_id` | `uuid` | YES | `—` | — |
| `discount_applied` | `numeric` | YES | `0` | — |
| `status` | `text` | NO | `'pending'::text` | — |
| `failure_reason` | `text` | YES | `—` | — |
| `refunded_at` | `timestamp with time zone` | YES | `—` | — |
| `invoice_number` | `text` | YES | `—` | — |
| `invoice_generated` | `boolean` | YES | `false` | — |
| `ip_address` | `inet` | YES | `—` | — |
| `user_agent` | `text` | YES | `—` | — |
| `metadata` | `jsonb` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |
| `lead_id` | `uuid` | YES | `—` | — |
| `builder_id` | `uuid` | YES | `—` | — |
| `project_id` | `uuid` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_45932_13_not_null`: N/A
- `2200_45932_19_not_null`: N/A
- `2200_45932_1_not_null`: N/A
- `2200_45932_2_not_null`: N/A
- `2200_45932_3_not_null`: N/A
- `transactions_gateway_check`: CHECK ((gateway = ANY (ARRAY['razorpay'::text, 'stripe'::text, 'paytm'::text, 'phonepe'::text, 'upi'::text, 'manual'::text, 'wallet'::text])))
- `transactions_status_check`: CHECK ((status = ANY (ARRAY['pending'::text, 'processing'::text, 'succeeded'::text, 'failed'::text, 'refunded'::text])))
- `transactions_type_check`: CHECK ((type = ANY (ARRAY['credit_purchase'::text, 'subscription_purchase'::text, 'subscription_renewal'::text, 'property_listing_fee'::text, 'contact_view_owner'::text, 'contact_view_buyer'::text, 'property_boost'::text, 'featured_listing'::text, 'verification_service'::text, 'legal_service'::text, 'refund'::text, 'admin_adjustment'::text, 'referral_bonus'::text, 'promotional_credit'::text, 'regional_campaign_reward'::text])))

**FOREIGN KEY:**
- `transactions_builder_id_fkey`: FOREIGN KEY (builder_id) REFERENCES builders(id)
- `transactions_coupon_id_fkey`: FOREIGN KEY (coupon_id) REFERENCES coupons(id)
- `transactions_lead_id_fkey`: FOREIGN KEY (lead_id) REFERENCES property_leads(id)
- `transactions_pricing_rule_id_fkey`: FOREIGN KEY (pricing_rule_id) REFERENCES pricing_rules(id)
- `transactions_project_id_fkey`: FOREIGN KEY (project_id) REFERENCES projects(id)
- `transactions_region_id_fkey`: FOREIGN KEY (region_id) REFERENCES regions(id)
- `transactions_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `transactions_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_transactions_gateway` | btree | gateway_transaction_id | — | — | `CREATE INDEX idx_transactions_gateway ON public.transactions USING btree (gateway_transaction_id) WHERE (gateway_transaction_id IS NOT NULL)` |
| `idx_transactions_invoice` | btree | invoice_number | — | — | `CREATE INDEX idx_transactions_invoice ON public.transactions USING btree (invoice_number) WHERE (invoice_generated = true)` |
| `idx_transactions_region` | btree | region_id, created_at | — | — | `CREATE INDEX idx_transactions_region ON public.transactions USING btree (region_id, created_at DESC)` |
| `idx_transactions_status` | btree | status, created_at | — | — | `CREATE INDEX idx_transactions_status ON public.transactions USING btree (status, created_at DESC)` |
| `idx_transactions_type` | btree | type, created_at | — | — | `CREATE INDEX idx_transactions_type ON public.transactions USING btree (type, created_at DESC)` |
| `idx_transactions_user` | btree | user_id, created_at | — | — | `CREATE INDEX idx_transactions_user ON public.transactions USING btree (user_id, created_at DESC)` |
| `idx_transactions_user_region` | btree | user_id, region_id, created_at | — | — | `CREATE INDEX idx_transactions_user_region ON public.transactions USING btree (user_id, region_id, created_at DESC)` |
| `transactions_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX transactions_pkey ON public.transactions USING btree (id)` |

### Foreign Keys

- `transactions_builder_id_fkey`:
  - Columns: `builder_id` → `builders(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_coupon_id_fkey`:
  - Columns: `coupon_id` → `coupons(id)`
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

### Triggers

- `audit_transactions_update`:
  - When: AFTER UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION log_payment_admin_action()
```
- `trigger_update_transaction_timestamp`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_wallet_timestamp()
```

---

## `undervalued_properties`

> Identifies properties with excellent value - priced below market estimates

**Statistics:**
- Rows: ~0
- Columns: 27
- Indexes: 6
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `listed_price` | `numeric` | NO | `—` | — |
| `estimated_market_value` | `numeric` | NO | `—` | — |
| `undervaluation_amount` | `numeric` | NO | `—` | — |
| `undervaluation_percentage` | `numeric` | NO | `—` | — |
| `deal_rating` | `text` | YES | `—` | — |
| `savings_potential` | `numeric` | YES | `—` | — |
| `undervaluation_reasons` | `ARRAY` | YES | `—` | — |
| `confidence_level` | `text` | YES | `—` | — |
| `comparable_properties_count` | `integer` | YES | `—` | — |
| `data_quality_score` | `numeric` | YES | `—` | — |
| `locality_price_trend` | `text` | YES | `—` | — |
| `time_to_market_correction_days` | `integer` | YES | `—` | — |
| `competition_level` | `text` | YES | `—` | — |
| `investment_opportunity_score` | `numeric` | YES | `—` | — |
| `risk_adjusted_score` | `numeric` | YES | `—` | — |
| `expected_appreciation_1y_percentage` | `numeric` | YES | `—` | — |
| `expected_appreciation_3y_percentage` | `numeric` | YES | `—` | — |
| `discovered_at` | `timestamp with time zone` | YES | `now()` | — |
| `algorithm_version` | `text` | YES | `—` | — |
| `manual_verification_status` | `text` | YES | `—` | — |
| `verified_by` | `uuid` | YES | `—` | — |
| `alert_sent` | `boolean` | YES | `false` | — |
| `alert_sent_to_users` | `ARRAY` | YES | `—` | — |
| `expires_at` | `timestamp with time zone` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_51419_1_not_null`: N/A
- `2200_51419_2_not_null`: N/A
- `2200_51419_3_not_null`: N/A
- `2200_51419_4_not_null`: N/A
- `2200_51419_5_not_null`: N/A
- `2200_51419_6_not_null`: N/A
- `undervalued_properties_competition_level_check`: CHECK ((competition_level = ANY (ARRAY['low'::text, 'medium'::text, 'high'::text])))
- `undervalued_properties_confidence_level_check`: CHECK ((confidence_level = ANY (ARRAY['low'::text, 'medium'::text, 'high'::text, 'very_high'::text])))
- `undervalued_properties_deal_rating_check`: CHECK ((deal_rating = ANY (ARRAY['hidden_gem'::text, 'excellent_value'::text, 'good_value'::text, 'fair_value'::text])))
- `undervalued_properties_manual_verification_status_check`: CHECK ((manual_verification_status = ANY (ARRAY['pending'::text, 'verified'::text, 'rejected'::text, 'expired'::text])))

**FOREIGN KEY:**
- `undervalued_properties_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `undervalued_properties_verified_by_fkey`: FOREIGN KEY (verified_by) REFERENCES profiles(id)

**PRIMARY KEY:**
- `undervalued_properties_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_undervalued_expires_at` | btree | expires_at | — | — | `CREATE INDEX idx_undervalued_expires_at ON public.undervalued_properties USING btree (expires_at)` |
| `idx_undervalued_opportunity` | btree | investment_opportunity_score | — | — | `CREATE INDEX idx_undervalued_opportunity ON public.undervalued_properties USING btree (investment_opportunity_score DESC)` |
| `idx_undervalued_percentage` | btree | undervaluation_percentage | — | — | `CREATE INDEX idx_undervalued_percentage ON public.undervalued_properties USING btree (undervaluation_percentage DESC)` |
| `idx_undervalued_property` | btree | property_id | — | — | `CREATE INDEX idx_undervalued_property ON public.undervalued_properties USING btree (property_id)` |
| `idx_undervalued_rating` | btree | deal_rating | — | — | `CREATE INDEX idx_undervalued_rating ON public.undervalued_properties USING btree (deal_rating)` |
| `undervalued_properties_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX undervalued_properties_pkey ON public.undervalued_properties USING btree (id)` |

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

## `user_engagement_metrics`

> Tracks detailed user behavior and engagement patterns for identifying repeat customers and high-intent users

**Statistics:**
- Rows: ~0
- Columns: 36
- Indexes: 6
- Foreign Keys: 1
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `total_sessions` | `integer` | YES | `0` | — |
| `total_page_views` | `integer` | YES | `0` | — |
| `total_property_views` | `integer` | YES | `0` | — |
| `unique_properties_viewed` | `integer` | YES | `0` | — |
| `total_searches` | `integer` | YES | `0` | — |
| `saved_searches_count` | `integer` | YES | `0` | — |
| `avg_search_frequency_days` | `numeric` | YES | `—` | — |
| `avg_session_duration_seconds` | `integer` | YES | `—` | — |
| `avg_properties_per_session` | `numeric` | YES | `—` | — |
| `property_detail_views` | `integer` | YES | `0` | — |
| `contact_reveals` | `integer` | YES | `0` | — |
| `favorites_count` | `integer` | YES | `0` | — |
| `inquiries_sent` | `integer` | YES | `0` | — |
| `site_visits_scheduled` | `integer` | YES | `0` | — |
| `comparisons_made` | `integer` | YES | `0` | — |
| `properties_listed` | `integer` | YES | `0` | — |
| `valuation_requests` | `integer` | YES | `0` | — |
| `documents_uploaded` | `integer` | YES | `0` | — |
| `engagement_score` | `numeric` | YES | `0` | — |
| `intent_score` | `numeric` | YES | `0` | — |
| `user_segment` | `text` | YES | `—` | — |
| `buying_intent` | `text` | YES | `—` | — |
| `selling_intent` | `text` | YES | `—` | — |
| `first_activity_at` | `timestamp with time zone` | YES | `—` | — |
| `last_activity_at` | `timestamp with time zone` | YES | `—` | — |
| `most_active_day_of_week` | `integer` | YES | `—` | — |
| `most_active_hour_of_day` | `integer` | YES | `—` | — |
| `preferred_locations` | `ARRAY` | YES | `—` | — |
| `preferred_property_types` | `ARRAY` | YES | `—` | — |
| `preferred_bhk_types` | `ARRAY` | YES | `—` | — |
| `budget_range_min` | `numeric` | YES | `—` | — |
| `budget_range_max` | `numeric` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_51029_1_not_null`: N/A
- `2200_51029_2_not_null`: N/A
- `user_engagement_metrics_buying_intent_check`: CHECK ((buying_intent = ANY (ARRAY['none'::text, 'low'::text, 'medium'::text, 'high'::text, 'very_high'::text])))
- `user_engagement_metrics_selling_intent_check`: CHECK ((selling_intent = ANY (ARRAY['none'::text, 'low'::text, 'medium'::text, 'high'::text, 'very_high'::text])))
- `user_engagement_metrics_user_segment_check`: CHECK ((user_segment = ANY (ARRAY['cold_lead'::text, 'warm_lead'::text, 'hot_lead'::text, 'super_hot'::text, 'active_buyer'::text, 'active_seller'::text, 'investor'::text, 'dormant'::text])))

**FOREIGN KEY:**
- `user_engagement_metrics_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `user_engagement_metrics_pkey`: PRIMARY KEY (id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_user_engagement_intent` | btree | buying_intent, selling_intent | — | — | `CREATE INDEX idx_user_engagement_intent ON public.user_engagement_metrics USING btree (buying_intent, selling_intent)` |
| `idx_user_engagement_last_active` | btree | last_activity_at | — | — | `CREATE INDEX idx_user_engagement_last_active ON public.user_engagement_metrics USING btree (last_activity_at DESC)` |
| `idx_user_engagement_score` | btree | engagement_score, intent_score | — | — | `CREATE INDEX idx_user_engagement_score ON public.user_engagement_metrics USING btree (engagement_score DESC, intent_score DESC)` |
| `idx_user_engagement_segment` | btree | user_segment | — | — | `CREATE INDEX idx_user_engagement_segment ON public.user_engagement_metrics USING btree (user_segment)` |
| `idx_user_engagement_user` | btree | user_id | — | — | `CREATE INDEX idx_user_engagement_user ON public.user_engagement_metrics USING btree (user_id)` |
| `user_engagement_metrics_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX user_engagement_metrics_pkey ON public.user_engagement_metrics USING btree (id)` |

### Foreign Keys

- `user_engagement_metrics_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

---

## `user_favorites`

**Statistics:**
- Rows: ~0
- Columns: 4
- Indexes: 5
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `property_id` | `uuid` | NO | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_18960_1_not_null`: N/A
- `2200_18960_2_not_null`: N/A
- `2200_18960_3_not_null`: N/A

**FOREIGN KEY:**
- `user_favorites_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `user_favorites_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `user_favorites_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `user_favorites_user_id_property_id_key`: UNIQUE (user_id, property_id)
- `user_favorites_user_id_property_id_key`: UNIQUE (user_id, property_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_user_favorites_property` | btree | property_id | — | — | `CREATE INDEX idx_user_favorites_property ON public.user_favorites USING btree (property_id)` |
| `idx_user_favorites_property_user` | btree | user_id, property_id | — | — | `CREATE INDEX idx_user_favorites_property_user ON public.user_favorites USING btree (property_id, user_id)` |
| `idx_user_favorites_user` | btree | user_id | — | — | `CREATE INDEX idx_user_favorites_user ON public.user_favorites USING btree (user_id)` |
| `user_favorites_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX user_favorites_pkey ON public.user_favorites USING btree (id)` |
| `user_favorites_user_id_property_id_key` | btree | user_id, property_id | ✓ | — | `CREATE UNIQUE INDEX user_favorites_user_id_property_id_key ON public.user_favorites USING btree (user_id, property_id)` |

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
- Rows: ~0
- Columns: 17
- Indexes: 4
- Foreign Keys: 3
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `rated_user_id` | `uuid` | NO | `—` | — |
| `rated_property_id` | `uuid` | YES | `—` | — |
| `rating_user_id` | `uuid` | NO | `—` | — |
| `rating` | `numeric` | NO | `—` | — |
| `review_title` | `text` | YES | `—` | — |
| `review_text` | `text` | YES | `—` | — |
| `review_response` | `text` | YES | `—` | — |
| `rating_type` | `text` | NO | `—` | — |
| `status` | `text` | YES | `'pending'::text` | — |
| `is_featured` | `boolean` | YES | `false` | — |
| `is_verified_purchase` | `boolean` | YES | `false` | — |
| `helpful_count` | `integer` | YES | `0` | — |
| `report_count` | `integer` | YES | `0` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |
| `responded_at` | `timestamp with time zone` | YES | `—` | — |

### Constraints

**CHECK:**
- `2200_19046_1_not_null`: N/A
- `2200_19046_2_not_null`: N/A
- `2200_19046_4_not_null`: N/A
- `2200_19046_5_not_null`: N/A
- `2200_19046_9_not_null`: N/A
- `user_ratings_rating_check`: CHECK (((rating >= (1)::numeric) AND (rating <= (5)::numeric)))
- `user_ratings_rating_type_check`: CHECK ((rating_type = ANY (ARRAY['buyer_to_seller'::text, 'seller_to_buyer'::text, 'agent_rating'::text, 'property_rating'::text, 'agency_rating'::text])))
- `user_ratings_status_check`: CHECK ((status = ANY (ARRAY['pending'::text, 'published'::text, 'hidden'::text, 'reported'::text])))

**FOREIGN KEY:**
- `user_ratings_rated_property_id_fkey`: FOREIGN KEY (rated_property_id) REFERENCES properties(id) ON DELETE SET NULL
- `user_ratings_rated_user_id_fkey`: FOREIGN KEY (rated_user_id) REFERENCES profiles(id) ON DELETE CASCADE
- `user_ratings_rating_user_id_fkey`: FOREIGN KEY (rating_user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `user_ratings_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `user_ratings_rating_user_id_rated_user_id_rated_property_id_key`: UNIQUE (rating_user_id, rated_user_id, rated_property_id)
- `user_ratings_rating_user_id_rated_user_id_rated_property_id_key`: UNIQUE (rating_user_id, rated_user_id, rated_property_id)
- `user_ratings_rating_user_id_rated_user_id_rated_property_id_key`: UNIQUE (rating_user_id, rated_user_id, rated_property_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_user_ratings_property` | btree | rated_property_id | — | — | `CREATE INDEX idx_user_ratings_property ON public.user_ratings USING btree (rated_property_id)` |
| `idx_user_ratings_rated_user` | btree | rated_user_id | — | — | `CREATE INDEX idx_user_ratings_rated_user ON public.user_ratings USING btree (rated_user_id)` |
| `user_ratings_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX user_ratings_pkey ON public.user_ratings USING btree (id)` |
| `user_ratings_rating_user_id_rated_user_id_rated_property_id_key` | btree | rated_user_id, rated_property_id, rating_user_id | ✓ | — | `CREATE UNIQUE INDEX user_ratings_rating_user_id_rated_user_id_rated_property_id_key ON public.user_ratings USING btree (rating_user_id, rated_user_id, rated_property_id)` |

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

### Triggers

- `update_user_ratings_updated_at`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_updated_at_column()
```

---

## `user_regional_preferences`

**Statistics:**
- Rows: ~0
- Columns: 8
- Indexes: 3
- Foreign Keys: 2
- Triggers: 0

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `user_id` | `uuid` | NO | `—` | — |
| `primary_region_id` | `uuid` | YES | `—` | — |
| `active_regions` | `ARRAY` | YES | `—` | — |
| `preferred_language` | `text` | YES | `'english'::text` | — |
| `preferred_currency` | `text` | YES | `'INR'::text` | — |
| `receive_regional_offers` | `boolean` | YES | `true` | — |
| `receive_festival_campaigns` | `boolean` | YES | `true` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45978_1_not_null`: N/A

**FOREIGN KEY:**
- `user_regional_preferences_primary_region_id_fkey`: FOREIGN KEY (primary_region_id) REFERENCES regions(id)
- `user_regional_preferences_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `user_regional_preferences_pkey`: PRIMARY KEY (user_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_user_prefs_active_regions` | gin | active_regions | — | — | `CREATE INDEX idx_user_prefs_active_regions ON public.user_regional_preferences USING gin (active_regions)` |
| `idx_user_prefs_region` | btree | primary_region_id | — | — | `CREATE INDEX idx_user_prefs_region ON public.user_regional_preferences USING btree (primary_region_id)` |
| `user_regional_preferences_pkey` | btree | user_id | ✓ | ✓ | `CREATE UNIQUE INDEX user_regional_preferences_pkey ON public.user_regional_preferences USING btree (user_id)` |

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

## `wallets`

> User credit wallets with regional tracking

**Statistics:**
- Rows: ~14
- Columns: 10
- Indexes: 4
- Foreign Keys: 2
- Triggers: 1

### Columns

| Column | Type | Nullable | Default | Comment |
|--------|------|----------|---------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` | — |
| `user_id` | `uuid` | NO | `—` | — |
| `balance` | `integer` | NO | `0` | — |
| `region_specific_credits` | `jsonb` | YES | `'{}'::jsonb` | — |
| `lifetime_credits_purchased` | `integer` | YES | `0` | — |
| `lifetime_credits_spent` | `integer` | YES | `0` | — |
| `lifetime_cash_spent` | `numeric` | YES | `0` | — |
| `last_transaction_region_id` | `uuid` | YES | `—` | — |
| `created_at` | `timestamp with time zone` | YES | `now()` | — |
| `updated_at` | `timestamp with time zone` | YES | `now()` | — |

### Constraints

**CHECK:**
- `2200_45900_1_not_null`: N/A
- `2200_45900_2_not_null`: N/A
- `2200_45900_3_not_null`: N/A
- `wallets_balance_check`: CHECK ((balance >= 0))

**FOREIGN KEY:**
- `wallets_last_transaction_region_id_fkey`: FOREIGN KEY (last_transaction_region_id) REFERENCES regions(id)
- `wallets_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

**PRIMARY KEY:**
- `wallets_pkey`: PRIMARY KEY (id)

**UNIQUE:**
- `wallets_user_id_key`: UNIQUE (user_id)

### Indexes

| Name | Type | Columns | Unique | Primary | Definition |
|------|------|---------|--------|---------|------------|
| `idx_wallets_balance` | btree | balance | — | — | `CREATE INDEX idx_wallets_balance ON public.wallets USING btree (balance) WHERE (balance > 0)` |
| `idx_wallets_user_id` | btree | user_id | — | — | `CREATE INDEX idx_wallets_user_id ON public.wallets USING btree (user_id)` |
| `wallets_pkey` | btree | id | ✓ | ✓ | `CREATE UNIQUE INDEX wallets_pkey ON public.wallets USING btree (id)` |
| `wallets_user_id_key` | btree | user_id | ✓ | — | `CREATE UNIQUE INDEX wallets_user_id_key ON public.wallets USING btree (user_id)` |

### Foreign Keys

- `wallets_last_transaction_region_id_fkey`:
  - Columns: `last_transaction_region_id` → `regions(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `wallets_user_id_fkey`:
  - Columns: `user_id` → `profiles(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: CASCADE

### Triggers

- `trigger_update_wallet_timestamp`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_wallet_timestamp()
```

---

