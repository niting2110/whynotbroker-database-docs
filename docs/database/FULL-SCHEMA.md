# WHYNOTBROKER - Full Database Schema
> Auto-generated on: 2025-12-28T06:59:12.161Z
> **Total Tables:** 40
> **PostgreSQL Version:** 17.6

## Overview
This document details the live schema of the production Supabase database. All API backend code must align with the structures and rules defined here.

---

## `admin_audit_logs`

**Statistics:**
- Rows: ~32
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
- Rows: ~17
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
- Rows: ~1
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
- Rows: ~14
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
- Rows: ~2
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
- Rows: ~10
- Columns: 6
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
- Rows: ~0
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
- Rows: ~0
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
- Rows: ~4
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
- Rows: ~5
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

## `messages`

**Statistics:**
- Rows: ~0
- Columns: 18
- Indexes: 3
- Foreign Keys: 3
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

### Constraints

**CHECK:**
- `2200_19104_1_not_null`: N/A
- `2200_19104_2_not_null`: N/A
- `2200_19104_3_not_null`: N/A
- `2200_19104_6_not_null`: N/A
- `messages_appointment_status_check`: CHECK ((appointment_status = ANY (ARRAY['pending'::text, 'confirmed'::text, 'cancelled'::text, 'completed'::text, 'rescheduled'::text])))
- `messages_message_type_check`: CHECK ((message_type = ANY (ARRAY['inquiry'::text, 'response'::text, 'general'::text, 'appointment'::text, 'feedback'::text])))

**FOREIGN KEY:**
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
- Rows: ~8,984
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

## `notifications`

**Statistics:**
- Rows: ~3
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
- Rows: ~12
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

## `pricing_rules`

> Dynamic pricing rules based on action, region, and user type

**Statistics:**
- Rows: ~6
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
- Rows: ~21
- Columns: 31
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

### Constraints

**CHECK:**
- `2200_18686_1_not_null`: N/A
- `profiles_account_status_check`: CHECK ((account_status = ANY (ARRAY['active'::text, 'suspended'::text, 'inactive'::text])))
- `profiles_role_check`: CHECK ((role = ANY (ARRAY['user'::text, 'admin'::text, 'staff'::text])))
- `profiles_user_type_check`: CHECK ((user_type = ANY (ARRAY['buyer'::text, 'seller'::text, 'agent'::text, 'agency'::text, 'admin'::text])))

**FOREIGN KEY:**
- `profiles_id_fkey`: FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE

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

## `promotional_campaigns`

> Marketing campaigns with regional focus

**Statistics:**
- Rows: ~2
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
- Rows: ~9,000
- Columns: 93
- Indexes: 24
- Foreign Keys: 3
- Triggers: 6

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
| `property_type` | `text` | NO | `—` | — |
| `listing_type` | `text` | NO | `'sale'::text` | — |
| `bhk_type` | `text` | YES | `—` | — |
| `ownership_type` | `text` | YES | `—` | — |
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
| `furnishing` | `text` | YES | `—` | — |
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
- `properties_area_unit_check`: CHECK ((area_unit = ANY (ARRAY['sqft'::text, 'sqm'::text, 'acre'::text, 'hectare'::text, 'gunta'::text, 'marla'::text, 'bigha'::text])))
- `properties_availability_schedule_check`: CHECK ((availability_schedule = ANY (ARRAY['everyday'::text, 'weekdays'::text, 'weekends'::text, 'custom'::text])))
- `properties_facing_check`: CHECK ((facing = ANY (ARRAY['north'::text, 'south'::text, 'east'::text, 'west'::text, 'northeast'::text, 'northwest'::text, 'southeast'::text, 'southwest'::text, 'north-east'::text, 'north-west'::text, 'south-east'::text, 'south-west'::text])))
- `properties_floor_type_check`: CHECK ((floor_type = ANY (ARRAY['ground'::text, 'first'::text, 'second'::text, 'third'::text, 'higher'::text, 'penthouse'::text, 'basement'::text])))
- `properties_furnishing_check`: CHECK ((furnishing = ANY (ARRAY['unfurnished'::text, 'semi_furnished'::text, 'fully_furnished'::text])))
- `properties_kitchen_type_check`: CHECK ((kitchen_type = ANY (ARRAY['modular'::text, 'semi_modular'::text, 'open'::text, 'closed'::text])))
- `properties_listing_type_check`: CHECK ((listing_type = ANY (ARRAY['sale'::text, 'rent'::text, 'lease'::text, 'pg'::text, 'hostel'::text, 'flatmate'::text])))
- `properties_moderation_state_check`: CHECK ((moderation_state = ANY (ARRAY['not_submitted'::text, 'pending'::text, 'under_review'::text, 'approved'::text, 'rejected'::text, 'changes_requested'::text])))
- `properties_ownership_type_check`: CHECK ((ownership_type = ANY (ARRAY['freehold'::text, 'leasehold'::text, 'cooperative'::text, 'power_of_attorney'::text, 'joint'::text])))
- `properties_property_age_check`: CHECK ((property_age = ANY (ARRAY['under_construction'::text, '0-1'::text, '1-5'::text, '5-10'::text, '10-20'::text, '20+'::text, 'new_launch'::text])))
- `properties_show_property_by_check`: CHECK ((show_property_by = ANY (ARRAY['owner'::text, 'agent'::text, 'broker'::text, 'builder'::text, 'representative'::text])))
- `property_type_check`: CHECK ((property_type = ANY (ARRAY['apartment'::text, 'house'::text, 'villa'::text, 'commercial'::text, 'land'::text, 'farm'::text, 'pg'::text, 'hostel'::text])))
- `status_check`: CHECK ((status = ANY (ARRAY['draft'::text, 'pending'::text, 'published'::text, 'sold'::text, 'rented'::text])))

**FOREIGN KEY:**
- `properties_agency_id_fkey`: FOREIGN KEY (agency_id) REFERENCES profiles(id) ON DELETE SET NULL
- `properties_agent_id_fkey`: FOREIGN KEY (agent_id) REFERENCES profiles(id) ON DELETE SET NULL
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
| `idx_properties_city_locality` | btree | city, locality | — | — | `CREATE INDEX idx_properties_city_locality ON public.properties USING btree (city, locality)` |
| `idx_properties_city_price_filter` | btree | price, city, status, is_active | — | — | `CREATE INDEX idx_properties_city_price_filter ON public.properties USING btree (city, price, status, is_active)` |
| `idx_properties_city_status_active` | btree | city, status, is_active | — | — | `CREATE INDEX idx_properties_city_status_active ON public.properties USING btree (city, status, is_active)` |
| `idx_properties_created_at` | btree | created_at | — | — | `CREATE INDEX idx_properties_created_at ON public.properties USING btree (created_at DESC)` |
| `idx_properties_featured` | btree | is_featured | — | — | `CREATE INDEX idx_properties_featured ON public.properties USING btree (is_featured) WHERE (is_featured = true)` |
| `idx_properties_featured_smart` | btree | status, is_active, is_featured, created_at, featured_until | — | — | `CREATE INDEX idx_properties_featured_smart ON public.properties USING btree (is_featured, featured_until DESC NULLS LAST, created_at DESC, status, is_active)` |
| `idx_properties_listing_type` | btree | listing_type | — | — | `CREATE INDEX idx_properties_listing_type ON public.properties USING btree (listing_type)` |
| `idx_properties_pid` | btree | pid | — | — | `CREATE INDEX idx_properties_pid ON public.properties USING btree (pid)` |
| `idx_properties_price` | btree | price | — | — | `CREATE INDEX idx_properties_price ON public.properties USING btree (price)` |
| `idx_properties_price_status_active` | btree | price, status, is_active | — | — | `CREATE INDEX idx_properties_price_status_active ON public.properties USING btree (price, status, is_active)` |
| `idx_properties_property_type` | btree | property_type | — | — | `CREATE INDEX idx_properties_property_type ON public.properties USING btree (property_type)` |
| `idx_properties_search` | btree | property_type, price, city, bedrooms, status | — | — | `CREATE INDEX idx_properties_search ON public.properties USING btree (city, price, bedrooms, property_type, status) WHERE ((status = 'published'::text) AND (is_active = true))` |
| `idx_properties_status` | btree | status | — | — | `CREATE INDEX idx_properties_status ON public.properties USING btree (status)` |
| `idx_properties_user_id` | btree | user_id | — | — | `CREATE INDEX idx_properties_user_id ON public.properties USING btree (user_id)` |
| `idx_properties_user_status` | btree | user_id, status, created_at | — | — | `CREATE INDEX idx_properties_user_status ON public.properties USING btree (user_id, status, created_at DESC)` |
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
- `update_properties_updated_at`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_updated_at_column()
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
- Rows: ~8,980
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

## `property_documents`

**Statistics:**
- Rows: ~0
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
- Rows: ~3
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

## `property_price_history`

**Statistics:**
- Rows: ~0
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

## `property_views`

**Statistics:**
- Rows: ~21
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

## `regions`

> Master table for regional configuration across India

**Statistics:**
- Rows: ~9
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

## `role_permissions`

**Statistics:**
- Rows: ~14
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
- Rows: ~6
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
- Rows: ~4
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

## `transactions`

> All financial transactions with regional GST tracking

**Statistics:**
- Rows: ~0
- Columns: 28
- Indexes: 8
- Foreign Keys: 4
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
- `transactions_coupon_id_fkey`: FOREIGN KEY (coupon_id) REFERENCES coupons(id)
- `transactions_pricing_rule_id_fkey`: FOREIGN KEY (pricing_rule_id) REFERENCES pricing_rules(id)
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

- `transactions_coupon_id_fkey`:
  - Columns: `coupon_id` → `coupons(id)`
  - ON UPDATE: NO ACTION
  - ON DELETE: NO ACTION
- `transactions_pricing_rule_id_fkey`:
  - Columns: `pricing_rule_id` → `pricing_rules(id)`
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

## `user_favorites`

**Statistics:**
- Rows: ~3
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
- Rows: ~21
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

