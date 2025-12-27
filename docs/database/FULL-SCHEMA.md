# WHYNOTBROKER - Full Database Schema
> Auto-generated on: 2025-12-27T06:58:58.656Z
> **Total Tables:** 27
> **PostgreSQL Version:** 17.6

## Overview
This document details the live schema of the production Supabase database. All API backend code must align with the structures and rules defined here.

---

## `admin_audit_logs`

**Statistics:**
- Rows: ~18
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
- Rows: ~16
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
- Rows: ~7
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
- Rows: ~7
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
- Rows: ~10
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

## `profiles`

**Statistics:**
- Rows: ~17
- Columns: 31
- Indexes: 3
- Foreign Keys: 0
- Triggers: 1

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

- `update_profiles_updated_at`:
  - When: BEFORE UPDATE
  - Definition:
```sql
  EXECUTE FUNCTION update_updated_at_column()
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

## `role_permissions`

**Statistics:**
- Rows: ~10
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

