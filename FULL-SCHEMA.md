# WHYNOTBROKER - Full Database Schema
> Auto-generated on: 2025-12-13T23:54:17.108Z
> **Total Tables:** 14

## Overview
This document details the live schema of the production Supabase database. All API backend code must align with the structures and rules defined here.

---

## Core Tables

### `appointments`
**Rows:** ~0  
**Columns:** 18

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `appointments_buyer_id_fkey`: FOREIGN KEY (buyer_id) REFERENCES profiles(id) ON DELETE CASCADE
- `appointments_cancelled_by_fkey`: FOREIGN KEY (cancelled_by) REFERENCES profiles(id)
- `appointments_meeting_type_check`: CHECK ((meeting_type = ANY (ARRAY['physical'::text, 'virtual'::text, 'phone'::text])))
- `appointments_pkey`: PRIMARY KEY (id)
- `appointments_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `appointments_seller_id_fkey`: FOREIGN KEY (seller_id) REFERENCES profiles(id) ON DELETE CASCADE
- `appointments_status_check`: CHECK ((status = ANY (ARRAY['scheduled'::text, 'confirmed'::text, 'completed'::text, 'cancelled'::text, 'no_show'::text])))

---

### `blog_posts`
**Rows:** ~0  
**Columns:** 17

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `blog_posts_author_id_fkey`: FOREIGN KEY (author_id) REFERENCES profiles(id) ON DELETE SET NULL
- `blog_posts_pid_key`: UNIQUE (pid)
- `blog_posts_pkey`: PRIMARY KEY (id)
- `blog_posts_slug_key`: UNIQUE (slug)
- `blog_posts_status_check`: CHECK ((status = ANY (ARRAY['draft'::text, 'published'::text, 'archived'::text])))

---

### `messages`
**Rows:** ~0  
**Columns:** 18

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `messages_appointment_status_check`: CHECK ((appointment_status = ANY (ARRAY['pending'::text, 'confirmed'::text, 'cancelled'::text, 'completed'::text, 'rescheduled'::text])))
- `messages_message_type_check`: CHECK ((message_type = ANY (ARRAY['inquiry'::text, 'response'::text, 'general'::text, 'appointment'::text, 'feedback'::text])))
- `messages_pkey`: PRIMARY KEY (id)
- `messages_pkey`: PRIMARY KEY (id, inserted_at)
- `messages_pkey`: PRIMARY KEY (id)
- `messages_pkey`: PRIMARY KEY (id, inserted_at)
- `messages_pkey`: PRIMARY KEY (id)
- `messages_pkey`: PRIMARY KEY (id, inserted_at)
- `messages_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE SET NULL
- `messages_receiver_id_fkey`: FOREIGN KEY (receiver_id) REFERENCES profiles(id) ON DELETE CASCADE
- `messages_sender_id_fkey`: FOREIGN KEY (sender_id) REFERENCES profiles(id) ON DELETE CASCADE

---

### `notifications`
**Rows:** ~0  
**Columns:** 10

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `notifications_notification_type_check`: CHECK ((notification_type = ANY (ARRAY['message'::text, 'inquiry'::text, 'rating'::text, 'property_view'::text, 'favorite'::text, 'appointment'::text, 'system'::text, 'marketing'::text, 'alert'::text])))
- `notifications_pkey`: PRIMARY KEY (id)
- `notifications_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

---

### `profiles`
**Rows:** ~1  
**Columns:** 31

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `profiles_account_status_check`: CHECK ((account_status = ANY (ARRAY['active'::text, 'suspended'::text, 'inactive'::text])))
- `profiles_email_key`: UNIQUE (email)
- `profiles_id_fkey`: FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
- `profiles_pkey`: PRIMARY KEY (id)
- `profiles_role_check`: CHECK ((role = ANY (ARRAY['user'::text, 'agent'::text, 'broker'::text, 'admin'::text])))
- `profiles_user_type_check`: CHECK ((user_type = ANY (ARRAY['buyer'::text, 'seller'::text, 'agent'::text, 'agency'::text, 'admin'::text])))
- `profiles_username_key`: UNIQUE (username)

---

### `properties`
**Rows:** ~9,000  
**Columns:** 92

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `properties_agency_id_fkey`: FOREIGN KEY (agency_id) REFERENCES profiles(id) ON DELETE SET NULL
- `properties_agent_id_fkey`: FOREIGN KEY (agent_id) REFERENCES profiles(id) ON DELETE SET NULL
- `properties_area_unit_check`: CHECK ((area_unit = ANY (ARRAY['sqft'::text, 'sqm'::text, 'acre'::text, 'hectare'::text, 'gunta'::text, 'marla'::text, 'bigha'::text])))
- `properties_availability_schedule_check`: CHECK ((availability_schedule = ANY (ARRAY['everyday'::text, 'weekdays'::text, 'weekends'::text, 'custom'::text])))
- `properties_bhk_type_check`: CHECK ((bhk_type = ANY (ARRAY['studio'::text, '1bhk'::text, '2bhk'::text, '3bhk'::text, '4bhk'::text, '4plusbhk'::text, '5bhk'::text, '6bhk'::text])))
- `properties_facing_check`: CHECK ((facing = ANY (ARRAY['north'::text, 'south'::text, 'east'::text, 'west'::text, 'northeast'::text, 'northwest'::text, 'southeast'::text, 'southwest'::text, 'north-east'::text, 'north-west'::text, 'south-east'::text, 'south-west'::text])))
- `properties_floor_type_check`: CHECK ((floor_type = ANY (ARRAY['ground'::text, 'first'::text, 'second'::text, 'third'::text, 'higher'::text, 'penthouse'::text, 'basement'::text])))
- `properties_furnishing_check`: CHECK ((furnishing = ANY (ARRAY['unfurnished'::text, 'semi_furnished'::text, 'fully_furnished'::text])))
- `properties_kitchen_type_check`: CHECK ((kitchen_type = ANY (ARRAY['modular'::text, 'semi_modular'::text, 'open'::text, 'closed'::text])))
- `properties_listing_type_check`: CHECK ((listing_type = ANY (ARRAY['sale'::text, 'rent'::text, 'lease'::text, 'pg'::text, 'hostel'::text, 'flatmate'::text])))
- `properties_ownership_type_check`: CHECK ((ownership_type = ANY (ARRAY['freehold'::text, 'leasehold'::text, 'cooperative'::text, 'power_of_attorney'::text, 'joint'::text])))
- `properties_pid_key`: UNIQUE (pid)
- `properties_pkey`: PRIMARY KEY (id)
- `properties_property_age_check`: CHECK ((property_age = ANY (ARRAY['under_construction'::text, '0-1'::text, '1-5'::text, '5-10'::text, '10-20'::text, '20+'::text, 'new_launch'::text])))
- `properties_property_code_key`: UNIQUE (property_code)
- `properties_property_type_check`: CHECK ((property_type = ANY (ARRAY['apartment'::text, 'house'::text, 'villa'::text, 'condo'::text, 'townhouse'::text, 'commercial'::text, 'land'::text, 'plot'::text, 'farm'::text, 'industrial'::text, 'pg'::text, 'hostel'::text])))
- `properties_show_property_by_check`: CHECK ((show_property_by = ANY (ARRAY['owner'::text, 'agent'::text, 'broker'::text, 'builder'::text, 'representative'::text])))
- `properties_slug_key`: UNIQUE (slug)
- `properties_status_check`: CHECK ((status = ANY (ARRAY['draft'::text, 'pending'::text, 'published'::text, 'sold'::text, 'rented'::text, 'archived'::text, 'expired'::text])))
- `properties_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

---

### `property_amenities`
**Rows:** ~0  
**Columns:** 7

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `amenity_category` | `text` | NO | `—` |
| `amenity_name` | `text` | NO | `—` |
| `amenity_value` | `text` | YES | `—` |
| `is_available` | `boolean` | YES | `true` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

**Constraints:**
- `property_amenities_amenity_category_check`: CHECK ((amenity_category = ANY (ARRAY['basic'::text, 'safety'::text, 'lifestyle'::text, 'green'::text, 'additional'::text, 'society'::text])))
- `property_amenities_pkey`: PRIMARY KEY (id)
- `property_amenities_property_id_amenity_name_key`: UNIQUE (property_id, amenity_name)
- `property_amenities_property_id_amenity_name_key`: UNIQUE (property_id, amenity_name)
- `property_amenities_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

---

### `property_documents`
**Rows:** ~0  
**Columns:** 12

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `property_documents_document_type_check`: CHECK ((document_type = ANY (ARRAY['khata'::text, 'sale_deed'::text, 'allotment'::text, 'tax_receipt'::text, 'occupancy'::text, 'rera'::text, 'approval'::text, 'lease_deed'::text, 'encumbrance'::text, 'other'::text])))
- `property_documents_pkey`: PRIMARY KEY (id)
- `property_documents_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_documents_uploaded_by_fkey`: FOREIGN KEY (uploaded_by) REFERENCES profiles(id) ON DELETE SET NULL
- `property_documents_verified_by_fkey`: FOREIGN KEY (verified_by) REFERENCES profiles(id) ON DELETE SET NULL

---

### `property_images`
**Rows:** ~3  
**Columns:** 13

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `property_images_pkey`: PRIMARY KEY (id)
- `property_images_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_images_property_id_image_url_key`: UNIQUE (property_id, image_url)
- `property_images_property_id_image_url_key`: UNIQUE (property_id, image_url)
- `property_images_uploaded_by_fkey`: FOREIGN KEY (uploaded_by) REFERENCES profiles(id) ON DELETE SET NULL

---

### `property_price_history`
**Rows:** ~0  
**Columns:** 7

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `property_id` | `uuid` | NO | `—` |
| `old_price` | `numeric` | YES | `—` |
| `new_price` | `numeric` | YES | `—` |
| `change_reason` | `text` | YES | `—` |
| `changed_by` | `uuid` | YES | `—` |
| `changed_at` | `timestamp with time zone` | YES | `now()` |

**Constraints:**
- `property_price_history_changed_by_fkey`: FOREIGN KEY (changed_by) REFERENCES profiles(id) ON DELETE SET NULL
- `property_price_history_pkey`: PRIMARY KEY (id)
- `property_price_history_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE

---

### `property_views`
**Rows:** ~21  
**Columns:** 10

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `property_views_pkey`: PRIMARY KEY (id)
- `property_views_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `property_views_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE SET NULL
- `unique_property_session`: UNIQUE (property_id, session_id)
- `unique_property_session`: UNIQUE (property_id, session_id)

---

### `search_history`
**Rows:** ~0  
**Columns:** 8

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | YES | `—` |
| `search_query` | `text` | NO | `—` |
| `filters` | `jsonb` | YES | `—` |
| `results_count` | `integer` | YES | `—` |
| `session_id` | `text` | YES | `—` |
| `ip_address` | `inet` | YES | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

**Constraints:**
- `search_history_pkey`: PRIMARY KEY (id)
- `search_history_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE

---

### `user_favorites`
**Rows:** ~3  
**Columns:** 4

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | `uuid` | NO | `gen_random_uuid()` |
| `user_id` | `uuid` | NO | `—` |
| `property_id` | `uuid` | NO | `—` |
| `created_at` | `timestamp with time zone` | YES | `now()` |

**Constraints:**
- `user_favorites_pkey`: PRIMARY KEY (id)
- `user_favorites_property_id_fkey`: FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
- `user_favorites_user_id_fkey`: FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE
- `user_favorites_user_id_property_id_key`: UNIQUE (user_id, property_id)
- `user_favorites_user_id_property_id_key`: UNIQUE (user_id, property_id)

---

### `user_ratings`
**Rows:** ~0  
**Columns:** 17

| Column | Type | Nullable | Default |
|--------|------|----------|---------|
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

**Constraints:**
- `user_ratings_pkey`: PRIMARY KEY (id)
- `user_ratings_rated_property_id_fkey`: FOREIGN KEY (rated_property_id) REFERENCES properties(id) ON DELETE SET NULL
- `user_ratings_rated_user_id_fkey`: FOREIGN KEY (rated_user_id) REFERENCES profiles(id) ON DELETE CASCADE
- `user_ratings_rating_check`: CHECK (((rating >= (1)::numeric) AND (rating <= (5)::numeric)))
- `user_ratings_rating_type_check`: CHECK ((rating_type = ANY (ARRAY['buyer_to_seller'::text, 'seller_to_buyer'::text, 'agent_rating'::text, 'property_rating'::text, 'agency_rating'::text])))
- `user_ratings_rating_user_id_fkey`: FOREIGN KEY (rating_user_id) REFERENCES profiles(id) ON DELETE CASCADE
- `user_ratings_rating_user_id_rated_user_id_rated_property_id_key`: UNIQUE (rating_user_id, rated_user_id, rated_property_id)
- `user_ratings_rating_user_id_rated_user_id_rated_property_id_key`: UNIQUE (rating_user_id, rated_user_id, rated_property_id)
- `user_ratings_rating_user_id_rated_user_id_rated_property_id_key`: UNIQUE (rating_user_id, rated_user_id, rated_property_id)
- `user_ratings_status_check`: CHECK ((status = ANY (ARRAY['pending'::text, 'published'::text, 'hidden'::text, 'reported'::text])))

---

