-- WHYNOTBROKER Database Schema
-- Generated: 2025-12-31T07:01:49.152Z
-- PostgreSQL Version: 17.6

-- Table: admin_audit_logs
CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_id uuid,
  action character varying(50) NOT NULL,
  entity character varying(50) NOT NULL,
  entity_id character varying(100),
  details text,
  ip_address inet,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now())
  ,PRIMARY KEY (id)
);


-- Table: admin_chat
CREATE TABLE IF NOT EXISTS admin_chat (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_id uuid,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
  ,PRIMARY KEY (id)
);


-- Table: admin_leaves
CREATE TABLE IF NOT EXISTS admin_leaves (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_id uuid,
  start_date date NOT NULL,
  end_date date NOT NULL,
  reason text,
  backup_admin_id uuid,
  status text DEFAULT 'pending'::text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
  ,PRIMARY KEY (id)
);


-- Table: admin_messages
CREATE TABLE IF NOT EXISTS admin_messages (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  sender_id uuid NOT NULL,
  receiver_id uuid NOT NULL,
  content text NOT NULL,
  is_read boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: admin_notices
CREATE TABLE IF NOT EXISTS admin_notices (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
  ,PRIMARY KEY (id)
);


-- Table: admin_roles
CREATE TABLE IF NOT EXISTS admin_roles (
  admin_id uuid NOT NULL,
  role_id uuid NOT NULL
  ,PRIMARY KEY (admin_id)
);


-- Table: admin_users
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  assigned_count integer NOT NULL DEFAULT 0,
  total_reviewed integer NOT NULL DEFAULT 0,
  last_active_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: admins
CREATE TABLE IF NOT EXISTS admins (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  email text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  permissions_version integer NOT NULL DEFAULT 1,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  password_hash text,
  full_name text,
  last_login_at timestamp with time zone
  ,PRIMARY KEY (id)
);


-- Table: appointments
CREATE TABLE IF NOT EXISTS appointments (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  buyer_id uuid NOT NULL,
  seller_id uuid NOT NULL,
  appointment_date date NOT NULL,
  appointment_time time without time zone NOT NULL,
  duration_minutes integer DEFAULT 60,
  status text DEFAULT 'scheduled'::text,
  meeting_type text DEFAULT 'physical'::text,
  meeting_link text,
  location text,
  notes text,
  feedback text,
  rating numeric,
  cancelled_by uuid,
  cancellation_reason text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: blog_posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pid text NOT NULL,
  author_id uuid,
  title text NOT NULL,
  slug text NOT NULL,
  excerpt text,
  content text NOT NULL,
  featured_image text,
  category text,
  tags ARRAY,
  status text DEFAULT 'draft'::text,
  view_count integer DEFAULT 0,
  like_count integer DEFAULT 0,
  comment_count integer DEFAULT 0,
  published_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: campaign_participants
CREATE TABLE IF NOT EXISTS campaign_participants (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  campaign_id uuid NOT NULL,
  user_id uuid NOT NULL,
  region_id uuid,
  credits_awarded integer DEFAULT 0,
  conditions_met jsonb DEFAULT '{}'::jsonb,
  is_completed boolean DEFAULT false,
  completed_at timestamp with time zone,
  joined_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: coupon_usage
CREATE TABLE IF NOT EXISTS coupon_usage (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  coupon_id uuid NOT NULL,
  user_id uuid NOT NULL,
  transaction_id uuid,
  discount_applied numeric NOT NULL,
  original_amount numeric NOT NULL,
  final_amount numeric NOT NULL,
  region_id uuid,
  used_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: coupons
CREATE TABLE IF NOT EXISTS coupons (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  code text NOT NULL,
  description text,
  discount_type text NOT NULL,
  discount_value numeric NOT NULL,
  max_discount_amount numeric,
  min_purchase_amount numeric DEFAULT 0,
  region_ids ARRAY,
  excluded_region_ids ARRAY,
  applicable_to ARRAY DEFAULT ARRAY['credits'::text, 'subscriptions'::text, 'services'::text],
  user_type_restrictions ARRAY,
  new_users_only boolean DEFAULT false,
  usage_limit_global integer,
  usage_limit_per_user integer DEFAULT 1,
  usage_limit_per_region jsonb DEFAULT '{}'::jsonb,
  times_used integer DEFAULT 0,
  valid_from timestamp with time zone DEFAULT now(),
  valid_until timestamp with time zone,
  campaign_id uuid,
  attribution_source text,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: credit_packages
CREATE TABLE IF NOT EXISTS credit_packages (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  credits integer NOT NULL,
  base_price numeric NOT NULL,
  bonus_credits integer DEFAULT 0,
  region_id uuid,
  regional_price numeric,
  is_popular boolean DEFAULT false,
  user_type_restriction text,
  validity_days integer,
  display_order integer DEFAULT 0,
  badge_text text,
  description text,
  features ARRAY,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: messages
CREATE TABLE IF NOT EXISTS messages (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  sender_id uuid NOT NULL,
  receiver_id uuid NOT NULL,
  property_id uuid,
  subject text,
  message text NOT NULL,
  message_type text DEFAULT 'inquiry'::text,
  is_read boolean DEFAULT false,
  is_important boolean DEFAULT false,
  is_archived boolean DEFAULT false,
  read_at timestamp with time zone,
  appointment_date date,
  appointment_time time without time zone,
  appointment_status text,
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: moderation_history
CREATE TABLE IF NOT EXISTS moderation_history (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  admin_id uuid NOT NULL,
  action text NOT NULL,
  reason text,
  notes text,
  checklist jsonb,
  previous_state text,
  new_state text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: notifications
CREATE TABLE IF NOT EXISTS notifications (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  notification_type text NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  data jsonb,
  is_read boolean DEFAULT false,
  is_archived boolean DEFAULT false,
  read_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: permissions
CREATE TABLE IF NOT EXISTS permissions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  domain USER-DEFINED NOT NULL,
  action USER-DEFINED NOT NULL,
  scope USER-DEFINED NOT NULL
  ,PRIMARY KEY (id)
);


-- Table: pricing_rules
CREATE TABLE IF NOT EXISTS pricing_rules (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  action text NOT NULL,
  credit_cost integer NOT NULL,
  cash_price numeric,
  region_id uuid,
  user_type text,
  discount_percentage numeric DEFAULT 0,
  surge_pricing_multiplier numeric DEFAULT 1.0,
  effective_from timestamp with time zone DEFAULT now(),
  effective_until timestamp with time zone,
  description text,
  is_active boolean DEFAULT true,
  priority integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: profiles
CREATE TABLE IF NOT EXISTS profiles (
  id uuid NOT NULL,
  username text,
  full_name text,
  email text,
  phone text,
  avatar_url text,
  user_type text DEFAULT 'buyer'::text,
  role text DEFAULT 'user'::text,
  bio text,
  company_name text,
  license_number text,
  years_experience integer DEFAULT 0,
  specialties ARRAY,
  languages ARRAY,
  is_verified boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  account_status text DEFAULT 'active'::text,
  website_url text,
  social_links jsonb,
  office_address text,
  office_city text,
  office_state text,
  office_pincode text,
  properties_listed integer DEFAULT 0,
  properties_sold integer DEFAULT 0,
  total_ratings integer DEFAULT 0,
  average_rating numeric DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  last_login timestamp with time zone,
  last_active timestamp with time zone
  ,PRIMARY KEY (id)
);


-- Table: promotional_campaigns
CREATE TABLE IF NOT EXISTS promotional_campaigns (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  campaign_type text,
  region_ids ARRAY,
  language_preference ARRAY,
  credits_reward integer,
  discount_percentage numeric,
  free_services ARRAY,
  conditions jsonb DEFAULT '{}'::jsonb,
  budget_allocated numeric,
  budget_spent numeric DEFAULT 0,
  participant_limit integer,
  current_participants integer DEFAULT 0,
  valid_from timestamp with time zone DEFAULT now(),
  valid_until timestamp with time zone,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: properties
CREATE TABLE IF NOT EXISTS properties (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pid text NOT NULL,
  user_id uuid NOT NULL,
  agent_id uuid,
  agency_id uuid,
  title text NOT NULL,
  slug text,
  description text,
  property_type text NOT NULL,
  listing_type text NOT NULL DEFAULT 'sale'::text,
  bhk_type text,
  ownership_type text,
  price numeric NOT NULL,
  price_negotiable boolean DEFAULT false,
  maintenance_cost numeric,
  under_loan boolean DEFAULT false,
  expected_price numeric,
  price_per_unit_area numeric,
  built_up_area numeric,
  carpet_area numeric,
  plot_area numeric,
  super_built_up_area numeric,
  area_unit text NOT NULL DEFAULT 'sqft'::text,
  address text,
  landmark text,
  city text NOT NULL,
  locality text NOT NULL,
  state text,
  pincode text,
  country text DEFAULT 'India'::text,
  latitude numeric,
  longitude numeric,
  google_place_id text,
  bedrooms integer,
  bathrooms integer,
  balcony_count integer DEFAULT 0,
  total_floors integer,
  floor_number integer,
  floor_type text,
  property_age text,
  year_built integer,
  possession_year integer,
  facing text,
  age_of_construction integer,
  furnishing text,
  kitchen_type text,
  flooring_type text,
  overlooking text,
  rera_registration text,
  khata_certificate boolean DEFAULT false,
  allotment_letter boolean DEFAULT false,
  sale_deed_certificate boolean DEFAULT false,
  property_tax_paid boolean DEFAULT false,
  occupancy_certificate boolean DEFAULT false,
  lease_years integer,
  available_from date,
  availability_schedule text,
  available_start_time time without time zone,
  available_end_time time without time zone,
  show_property_by text,
  contact_phone text NOT NULL,
  secondary_phone text,
  contact_email text,
  whatsapp_number text,
  property_code text,
  apartment_name text,
  developer_name text,
  project_name text,
  builder_name text,
  status text DEFAULT 'draft'::text,
  is_active boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  is_verified boolean DEFAULT false,
  is_premium boolean DEFAULT false,
  is_urgent boolean DEFAULT false,
  is_hot_deal boolean DEFAULT false,
  view_count integer DEFAULT 0,
  favorite_count integer DEFAULT 0,
  inquiry_count integer DEFAULT 0,
  phone_views_count integer DEFAULT 0,
  whatsapp_clicks integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  published_at timestamp with time zone,
  sold_rented_at timestamp with time zone,
  featured_until timestamp with time zone,
  last_viewed timestamp with time zone,
  expiry_date timestamp with time zone,
  meta_title text,
  meta_description text,
  meta_keywords ARRAY,
  tags ARRAY,
  moderation_state text NOT NULL DEFAULT 'not_submitted'::text
  ,PRIMARY KEY (id)
);


-- Table: property_amenities
CREATE TABLE IF NOT EXISTS property_amenities (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  amenity_category text NOT NULL,
  amenity_name text NOT NULL,
  amenity_value text,
  is_available boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: property_assignments
CREATE TABLE IF NOT EXISTS property_assignments (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  admin_id uuid NOT NULL,
  status text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  assigned_at timestamp with time zone NOT NULL DEFAULT now(),
  reviewed_at timestamp with time zone,
  due_at timestamp with time zone NOT NULL
  ,PRIMARY KEY (id)
);


-- Table: property_documents
CREATE TABLE IF NOT EXISTS property_documents (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  document_type text NOT NULL,
  document_name text NOT NULL,
  document_url text NOT NULL,
  document_path text,
  is_verified boolean DEFAULT false,
  verified_by uuid,
  verified_at timestamp with time zone,
  uploaded_by uuid,
  uploaded_at timestamp with time zone DEFAULT now(),
  expiry_date date
  ,PRIMARY KEY (id)
);


-- Table: property_images
CREATE TABLE IF NOT EXISTS property_images (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  image_url text NOT NULL,
  image_path text,
  image_name text,
  caption text,
  is_primary boolean DEFAULT false,
  display_order integer DEFAULT 0,
  storage_bucket text DEFAULT 'property-images'::text,
  file_size integer,
  mime_type text,
  uploaded_by uuid,
  uploaded_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: property_price_history
CREATE TABLE IF NOT EXISTS property_price_history (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  old_price numeric,
  new_price numeric,
  change_reason text,
  changed_by uuid,
  changed_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: property_views
CREATE TABLE IF NOT EXISTS property_views (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  user_id uuid,
  session_id text,
  ip_address inet,
  user_agent text,
  referrer text,
  view_duration integer,
  is_phone_view boolean DEFAULT false,
  viewed_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: regions
CREATE TABLE IF NOT EXISTS regions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text NOT NULL,
  type text NOT NULL,
  parent_region_id uuid,
  gst_number text,
  gst_rate numeric DEFAULT 18.00,
  is_active boolean DEFAULT true,
  requires_kyc boolean DEFAULT false,
  market_tier integer,
  population_estimate integer,
  currency_code text DEFAULT 'INR'::text,
  timezone text DEFAULT 'Asia/Kolkata'::text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: role_permissions
CREATE TABLE IF NOT EXISTS role_permissions (
  role_id uuid NOT NULL,
  permission_id uuid NOT NULL
  ,PRIMARY KEY (role_id)
);


-- Table: roles
CREATE TABLE IF NOT EXISTS roles (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL
  ,PRIMARY KEY (id)
);


-- Table: search_history
CREATE TABLE IF NOT EXISTS search_history (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  search_query text NOT NULL,
  filters jsonb,
  results_count integer,
  session_id text,
  ip_address inet,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: security_flags
CREATE TABLE IF NOT EXISTS security_flags (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_email character varying(255) NOT NULL,
  flagged_by uuid NOT NULL,
  reason text NOT NULL,
  status character varying(50) NOT NULL DEFAULT 'pending'::character varying,
  resolution_notes text,
  resolved_by uuid,
  created_at timestamp without time zone NOT NULL DEFAULT now(),
  resolved_at timestamp without time zone
  ,PRIMARY KEY (id)
);

COMMENT ON COLUMN security_flags.status IS 'Status: pending (awaiting review), reviewed (action taken), dismissed (false positive)';

-- Table: subscription_enrollments
CREATE TABLE IF NOT EXISTS subscription_enrollments (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  plan_id uuid NOT NULL,
  status text NOT NULL DEFAULT 'active'::text,
  price_paid numeric NOT NULL,
  credits_allocated integer NOT NULL,
  started_at timestamp with time zone DEFAULT now(),
  expires_at timestamp with time zone NOT NULL,
  cancelled_at timestamp with time zone,
  auto_renew boolean DEFAULT true,
  purchase_transaction_id uuid,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: subscription_plans
CREATE TABLE IF NOT EXISTS subscription_plans (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  plan_code text NOT NULL,
  base_price numeric NOT NULL,
  credits_monthly integer NOT NULL,
  duration_days integer NOT NULL DEFAULT 30,
  region_id uuid,
  regional_price numeric,
  regional_credits integer,
  user_type text NOT NULL,
  min_kyc_level integer DEFAULT 0,
  features jsonb DEFAULT '{}'::jsonb,
  max_active_listings integer,
  contact_views_included integer,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: transactions
CREATE TABLE IF NOT EXISTS transactions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  type text NOT NULL,
  amount_cash numeric DEFAULT 0,
  amount_credits integer DEFAULT 0,
  region_id uuid,
  pricing_rule_id uuid,
  gst_rate numeric,
  gst_amount numeric,
  gst_number text,
  reference_id uuid,
  reference_type text,
  description text NOT NULL,
  gateway text,
  gateway_transaction_id text,
  gateway_response jsonb,
  coupon_id uuid,
  discount_applied numeric DEFAULT 0,
  status text NOT NULL DEFAULT 'pending'::text,
  failure_reason text,
  refunded_at timestamp with time zone,
  invoice_number text,
  invoice_generated boolean DEFAULT false,
  ip_address inet,
  user_agent text,
  metadata jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: user_favorites
CREATE TABLE IF NOT EXISTS user_favorites (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  property_id uuid NOT NULL,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


-- Table: user_ratings
CREATE TABLE IF NOT EXISTS user_ratings (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  rated_user_id uuid NOT NULL,
  rated_property_id uuid,
  rating_user_id uuid NOT NULL,
  rating numeric NOT NULL,
  review_title text,
  review_text text,
  review_response text,
  rating_type text NOT NULL,
  status text DEFAULT 'pending'::text,
  is_featured boolean DEFAULT false,
  is_verified_purchase boolean DEFAULT false,
  helpful_count integer DEFAULT 0,
  report_count integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  responded_at timestamp with time zone
  ,PRIMARY KEY (id)
);


-- Table: user_regional_preferences
CREATE TABLE IF NOT EXISTS user_regional_preferences (
  user_id uuid NOT NULL,
  primary_region_id uuid,
  active_regions ARRAY,
  preferred_language text DEFAULT 'english'::text,
  preferred_currency text DEFAULT 'INR'::text,
  receive_regional_offers boolean DEFAULT true,
  receive_festival_campaigns boolean DEFAULT true,
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (user_id)
);


-- Table: wallets
CREATE TABLE IF NOT EXISTS wallets (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  balance integer NOT NULL DEFAULT 0,
  region_specific_credits jsonb DEFAULT '{}'::jsonb,
  lifetime_credits_purchased integer DEFAULT 0,
  lifetime_credits_spent integer DEFAULT 0,
  lifetime_cash_spent numeric DEFAULT 0,
  last_transaction_region_id uuid,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);


