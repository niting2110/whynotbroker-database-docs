-- WHYNOTBROKER Database Schema
-- Generated: 2026-04-23T08:06:56.032Z
-- PostgreSQL: 17.6

-- Table: admin_audit_logs
CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_id uuid,
  action character varying(50) NOT NULL,
  entity character varying(50) NOT NULL,
  entity_id character varying(100),
  details text,
  ip_address inet,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  region_id uuid
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
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  leave_type_id uuid,
  is_half_day boolean DEFAULT false,
  half_day_period text,
  emergency_contact text,
  attachment_urls ARRAY DEFAULT '{}'::text[],
  handover_notes text,
  approved_by_id uuid,
  rejection_reason text,
  status_log jsonb DEFAULT '[]'::jsonb
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
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  priority text,
  expires_at timestamp with time zone
  ,PRIMARY KEY (id)
);

-- Table: admin_regions
CREATE TABLE IF NOT EXISTS admin_regions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_id uuid NOT NULL,
  region_id uuid NOT NULL,
  region_type text NOT NULL,
  assigned_by uuid,
  assigned_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: admin_roles
CREATE TABLE IF NOT EXISTS admin_roles (
  admin_id uuid NOT NULL,
  role_id uuid NOT NULL,
  can_publish boolean NOT NULL DEFAULT false
  ,PRIMARY KEY (role_id)
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
  last_login_at timestamp with time zone,
  specialization ARRAY,
  assigned_regions ARRAY,
  assigned_cities ARRAY,
  department text,
  designation text,
  employee_id text,
  joining_date date,
  profile_photo_url text,
  reporting_manager_id uuid,
  profile_data jsonb DEFAULT '{}'::jsonb,
  is_manager boolean DEFAULT false
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

-- Table: broker_aadhaar_verifications
CREATE TABLE IF NOT EXISTS broker_aadhaar_verifications (
  id character varying(64) NOT NULL,
  user_id uuid NOT NULL,
  status character varying(32) NOT NULL DEFAULT 'pending'::character varying,
  masked_aadhaar character varying(32),
  otp_expires_at timestamp with time zone,
  resend_count integer DEFAULT 0,
  name character varying(256),
  dob date,
  gender character(1),
  address text,
  photo_available boolean DEFAULT false,
  verified_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: broker_gps_tracking
CREATE TABLE IF NOT EXISTS broker_gps_tracking (
  id character varying(64) NOT NULL,
  user_id uuid NOT NULL,
  latitude numeric NOT NULL,
  longitude numeric NOT NULL,
  accuracy numeric,
  altitude numeric,
  address text,
  activity_type character varying(64),
  property_id character varying(64),
  within_geofence boolean DEFAULT true,
  distance_from_prop numeric,
  city_match boolean DEFAULT true,
  suspicious_activity boolean DEFAULT false,
  recorded_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: broker_gst_verifications
CREATE TABLE IF NOT EXISTS broker_gst_verifications (
  id character varying(64) NOT NULL,
  user_id uuid NOT NULL,
  status character varying(32) NOT NULL DEFAULT 'pending'::character varying,
  gst_number character varying(15) NOT NULL,
  business_name character varying(512),
  legal_name character varying(512),
  trade_name character varying(512),
  business_name_match boolean DEFAULT false,
  registration_date date,
  gst_status character varying(32) DEFAULT 'active'::character varying,
  taxpayer_type character varying(64),
  state character varying(64),
  state_code character varying(4),
  principal_place_address text,
  verified_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: broker_kyc_documents
CREATE TABLE IF NOT EXISTS broker_kyc_documents (
  id character varying(64) NOT NULL,
  verification_id character varying(64) NOT NULL,
  user_id uuid NOT NULL,
  document_type character varying(32) NOT NULL,
  status character varying(32) NOT NULL DEFAULT 'uploaded'::character varying,
  file_size bigint,
  file_type character varying(64),
  storage_url text,
  thumbnail_url text,
  document_number character varying(128),
  name_matched boolean DEFAULT false,
  tamper_detected boolean DEFAULT false,
  confidence_score numeric DEFAULT 0,
  ocr_extracted boolean DEFAULT false,
  uploaded_at timestamp with time zone NOT NULL DEFAULT now(),
  verified_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: broker_kyc_verifications
CREATE TABLE IF NOT EXISTS broker_kyc_verifications (
  id character varying(64) NOT NULL,
  user_id uuid NOT NULL,
  status character varying(32) NOT NULL DEFAULT 'initiated'::character varying,
  verification_type character varying(32) NOT NULL DEFAULT 'full'::character varying,
  documents_required text,
  verification_level character varying(32) DEFAULT 'none'::character varying,
  verified_by character varying(64),
  risk_score integer DEFAULT 0,
  confidence_level character varying(32),
  started_at timestamp with time zone NOT NULL DEFAULT now(),
  completed_at timestamp with time zone,
  expires_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: broker_pan_verifications
CREATE TABLE IF NOT EXISTS broker_pan_verifications (
  id character varying(64) NOT NULL,
  user_id uuid NOT NULL,
  status character varying(32) NOT NULL DEFAULT 'pending'::character varying,
  pan_number character varying(10) NOT NULL,
  name character varying(256),
  name_match boolean DEFAULT false,
  dob_match boolean DEFAULT false,
  pan_status character varying(32) DEFAULT 'active'::character varying,
  pan_type character varying(32) DEFAULT 'individual'::character varying,
  verified_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: builders
CREATE TABLE IF NOT EXISTS builders (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company_name text NOT NULL,
  registration_number text,
  rera_number text,
  pan_number text,
  gst_number text,
  logo_url text,
  description text,
  established_year integer,
  total_projects integer DEFAULT 0,
  completed_projects integer DEFAULT 0,
  ongoing_projects integer DEFAULT 0,
  total_units_delivered integer DEFAULT 0,
  specialization ARRAY,
  operating_cities ARRAY,
  website_url text,
  contact_email text,
  contact_phone text,
  office_address text,
  rating numeric,
  total_ratings integer DEFAULT 0,
  is_verified boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  normalized_name text,
  dedup_group_id uuid
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

-- Table: cities
CREATE TABLE IF NOT EXISTS cities (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  normalized_name text NOT NULL,
  state_id uuid NOT NULL,
  district_id uuid,
  lat numeric,
  lng numeric,
  geo_point USER-DEFINED,
  place_id text,
  population_estimate integer,
  is_metro boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  city_tier text DEFAULT 'B'::text
  ,PRIMARY KEY (id)
);

-- Table: comm_deferred
CREATE TABLE IF NOT EXISTS comm_deferred (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  recipient_id uuid NOT NULL,
  event_category text NOT NULL,
  payload jsonb NOT NULL,
  risk_score numeric NOT NULL,
  retry_count integer NOT NULL DEFAULT 0,
  retry_at timestamp with time zone NOT NULL,
  ttl_expires_at timestamp with time zone NOT NULL,
  status text NOT NULL DEFAULT 'pending'::text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: commission_events
CREATE TABLE IF NOT EXISTS commission_events (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  transaction_id uuid NOT NULL,
  partner_id uuid,
  user_id uuid NOT NULL,
  property_id uuid,
  loan_amount numeric NOT NULL,
  commission_rate_snap numeric NOT NULL,
  commission_amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending'::text,
  reversal_reason text,
  case_id text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  loan_application_id text,
  disbursal_date date,
  reviewed_by uuid,
  reviewed_at timestamp with time zone,
  review_note text,
  created_by uuid
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

-- Table: districts
CREATE TABLE IF NOT EXISTS districts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  lgd_code character varying(10) NOT NULL,
  state_id uuid NOT NULL,
  name text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: enquiries
CREATE TABLE IF NOT EXISTS enquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_posting_id uuid,
  seeker_profile_id uuid NOT NULL,
  move_in_date date NOT NULL,
  duration_months smallint NOT NULL,
  room_preference text,
  message text,
  status text NOT NULL DEFAULT 'new'::text,
  status_updated_at timestamp with time zone,
  status_updated_by uuid,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: home_loan_consent_log
CREATE TABLE IF NOT EXISTS home_loan_consent_log (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  bank_id text NOT NULL,
  purpose text NOT NULL,
  consent_given_at timestamp with time zone NOT NULL DEFAULT now(),
  consent_withdrawn_at timestamp with time zone,
  ip_address_hash text,
  session_id text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  partner_id uuid
  ,PRIMARY KEY (id)
);

-- Table: hot_properties
CREATE TABLE IF NOT EXISTS hot_properties (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  heat_score numeric NOT NULL DEFAULT 0,
  views_spike_percentage numeric,
  inquiries_spike_percentage numeric,
  favorites_spike_percentage numeric,
  views_per_hour numeric,
  inquiries_per_day numeric,
  unique_viewers_per_day numeric,
  comparing_users_count integer DEFAULT 0,
  saved_by_users_count integer DEFAULT 0,
  sharing_frequency numeric,
  price_recently_reduced boolean DEFAULT false,
  new_listing boolean DEFAULT false,
  limited_availability boolean DEFAULT false,
  hot_reasons ARRAY,
  heat_trend text,
  days_as_hot integer DEFAULT 0,
  peak_heat_score numeric,
  estimated_days_until_sold integer,
  probability_sold_this_week numeric,
  is_currently_hot boolean DEFAULT true,
  became_hot_at timestamp with time zone DEFAULT now(),
  cooled_down_at timestamp with time zone,
  calculated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: leave_balances
CREATE TABLE IF NOT EXISTS leave_balances (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_id uuid,
  leave_type_id uuid,
  year integer NOT NULL,
  total_credits numeric DEFAULT 0,
  used_credits numeric DEFAULT 0
  ,PRIMARY KEY (id)
);

-- Table: leave_types
CREATE TABLE IF NOT EXISTS leave_types (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text NOT NULL,
  color_code text,
  max_days integer DEFAULT 12,
  is_active boolean DEFAULT true
  ,PRIMARY KEY (id)
);

-- Table: lending_partners
CREATE TABLE IF NOT EXISTS lending_partners (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  dsa_reference text,
  is_active boolean NOT NULL DEFAULT false,
  credential_state text NOT NULL DEFAULT 'stub'::text,
  health_check_url text,
  escalation_contact_name text,
  escalation_contact_phone text,
  escalation_contact_email text,
  commission_rate_percent numeric,
  data_processing_agreement_date date,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: listing_boosts
CREATE TABLE IF NOT EXISTS listing_boosts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  listing_id uuid NOT NULL,
  purchased_by uuid NOT NULL,
  boost_type text NOT NULL,
  status text NOT NULL DEFAULT 'pending_payment'::text,
  amount_paid numeric NOT NULL,
  razorpay_order_id text,
  razorpay_payment_id text,
  boost_expires_at timestamp with time zone,
  activated_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: loan_calculations
CREATE TABLE IF NOT EXISTS loan_calculations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  property_id uuid,
  property_price numeric NOT NULL,
  down_payment numeric NOT NULL,
  loan_amount numeric NOT NULL,
  interest_rate numeric NOT NULL,
  tenure_years integer NOT NULL,
  emi_amount numeric NOT NULL,
  total_interest numeric,
  total_amount numeric,
  calculation_data jsonb,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: localities
CREATE TABLE IF NOT EXISTS localities (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  region_id uuid,
  pincode text,
  latitude numeric,
  longitude numeric,
  boundary_geojson jsonb,
  locality_type text,
  tier_rating integer,
  avg_price_per_sqft numeric,
  price_trend_6m numeric,
  price_trend_1y numeric,
  total_properties integer DEFAULT 0,
  available_properties integer DEFAULT 0,
  infrastructure_score numeric,
  connectivity_score numeric,
  safety_score numeric,
  amenities_score numeric,
  is_gated_community boolean DEFAULT false,
  is_verified boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  city_id uuid,
  district_id uuid,
  state_id uuid,
  normalized_name text NOT NULL,
  popularity_score numeric DEFAULT 0,
  source text DEFAULT 'system'::text
  ,PRIMARY KEY (id)
);

-- Table: locality_amenities
CREATE TABLE IF NOT EXISTS locality_amenities (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  locality_id uuid NOT NULL,
  category text NOT NULL,
  name text NOT NULL,
  distance_km numeric NOT NULL,
  rating numeric,
  latitude numeric,
  longitude numeric,
  is_verified boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: location_boundaries
CREATE TABLE IF NOT EXISTS location_boundaries (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  entity_type text NOT NULL,
  entity_id uuid NOT NULL,
  boundary USER-DEFINED NOT NULL,
  source text,
  confidence_score numeric DEFAULT 0.5,
  is_active boolean DEFAULT true,
  min_zoom integer DEFAULT 12,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: location_canonical_map
CREATE TABLE IF NOT EXISTS location_canonical_map (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  raw_name text NOT NULL,
  normalized_name text NOT NULL,
  locality_id uuid,
  city_id uuid,
  confidence_score numeric DEFAULT 0.5,
  usage_count integer DEFAULT 0,
  last_used_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: market_trends
CREATE TABLE IF NOT EXISTS market_trends (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  region_id uuid,
  locality_id uuid,
  property_type text NOT NULL,
  bhk_type text,
  avg_price numeric NOT NULL,
  median_price numeric,
  min_price numeric,
  max_price numeric,
  total_listings integer,
  sold_count integer,
  avg_time_to_sell integer,
  supply_demand_ratio numeric,
  price_change_percentage numeric,
  month_year date NOT NULL,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: mdm_aliases
CREATE TABLE IF NOT EXISTS mdm_aliases (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  canonical_entity_id uuid NOT NULL,
  canonical_entity_type text NOT NULL,
  alias_value text NOT NULL,
  alias_language text DEFAULT 'english'::text,
  city_id uuid,
  district_id uuid,
  state_id uuid,
  alias_type text DEFAULT 'user_input'::text,
  alias_confidence numeric,
  status text DEFAULT 'active'::text,
  retired_reason text,
  retired_at timestamp with time zone,
  canonical_resolution_count integer DEFAULT 0,
  last_used_at timestamp with time zone,
  created_by uuid,
  approved_by uuid,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: mdm_audit_logs
CREATE TABLE IF NOT EXISTS mdm_audit_logs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_id uuid,
  admin_email text,
  action text NOT NULL,
  entity_id uuid,
  entity_type text,
  request_id uuid,
  changes jsonb,
  reason text,
  affected_count integer DEFAULT 0,
  ip_address text,
  user_agent text,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: mdm_curation_requests
CREATE TABLE IF NOT EXISTS mdm_curation_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  request_type text NOT NULL,
  entity_type text NOT NULL,
  submitted_value text NOT NULL,
  submitted_by text,
  submitted_from text,
  submission_context jsonb,
  city_id uuid,
  district_id uuid,
  state_id uuid,
  potential_matches jsonb,
  suggested_canonical_id uuid,
  suggested_canonical_type text,
  match_confidence numeric,
  detection_algorithm text,
  lgd_conflict boolean DEFAULT false,
  lgd_official_name text,
  lgd_code text,
  rera_conflict boolean DEFAULT false,
  rera_official_name text,
  rera_id text,
  geo_conflict boolean DEFAULT false,
  geo_conflict_details jsonb,
  impact_score_snapshot numeric,
  impact_components_snapshot jsonb,
  priority text DEFAULT 'medium'::text,
  sla_deadline timestamp with time zone,
  sla_hours_assigned integer,
  status text DEFAULT 'pending'::text,
  escalated_to_service text,
  escalation_reason text,
  resolved_by text,
  resolved_at timestamp with time zone,
  resolution_action text,
  resolution_notes text,
  created_alias_id uuid,
  merged_into_entity_id uuid,
  merged_into_entity_type text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: mdm_merge_history
CREATE TABLE IF NOT EXISTS mdm_merge_history (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  source_entity_id uuid NOT NULL,
  target_entity_id uuid NOT NULL,
  entity_type text NOT NULL,
  merge_reason text,
  reversal_strategy text NOT NULL,
  affected_properties_count integer DEFAULT 0,
  executed_by uuid,
  executed_at timestamp with time zone DEFAULT now(),
  reversed_at timestamp with time zone,
  reversed_by uuid,
  reversal_notes text
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
  updated_at timestamp with time zone DEFAULT now(),
  lead_id uuid,
  parent_message_id uuid,
  attachments ARRAY
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
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  case_id text
  ,PRIMARY KEY (id)
);

-- Table: notification_preferences
CREATE TABLE IF NOT EXISTS notification_preferences (
  user_id uuid NOT NULL,
  email_enabled boolean DEFAULT true,
  sms_enabled boolean DEFAULT true,
  push_enabled boolean DEFAULT true,
  whatsapp_enabled boolean DEFAULT false,
  new_properties boolean DEFAULT true,
  price_drops boolean DEFAULT true,
  saved_search_matches boolean DEFAULT true,
  property_updates boolean DEFAULT true,
  promotional boolean DEFAULT true,
  newsletter boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (user_id)
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

-- Table: overtime_records
CREATE TABLE IF NOT EXISTS overtime_records (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  admin_id uuid,
  date date NOT NULL,
  hours numeric NOT NULL,
  reason text,
  status text DEFAULT 'pending'::text,
  approved_by uuid,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: permissions
CREATE TABLE IF NOT EXISTS permissions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  domain USER-DEFINED NOT NULL,
  action USER-DEFINED NOT NULL,
  scope USER-DEFINED NOT NULL,
  usage_condition text
  ,PRIMARY KEY (id)
);

-- Table: pg_bed
CREATE TABLE IF NOT EXISTS pg_bed (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_room_id uuid NOT NULL,
  bed_label text,
  is_available boolean NOT NULL DEFAULT true,
  monthly_rent numeric NOT NULL,
  advance_deposit numeric NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  food_charge numeric
  ,PRIMARY KEY (id)
);

-- Table: pg_occupancy
CREATE TABLE IF NOT EXISTS pg_occupancy (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  pg_bed_id uuid NOT NULL,
  pg_tenant_id uuid,
  occupied_from date NOT NULL,
  occupied_until date,
  is_current boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: pg_occupancy_snapshot
CREATE TABLE IF NOT EXISTS pg_occupancy_snapshot (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  snapshot_date date NOT NULL DEFAULT CURRENT_DATE,
  total_beds integer NOT NULL DEFAULT 0,
  occupied_beds integer NOT NULL DEFAULT 0,
  available_beds integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: pg_owner_pnl
CREATE TABLE IF NOT EXISTS pg_owner_pnl (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  snapshot_month date NOT NULL,
  total_beds integer NOT NULL DEFAULT 0,
  occupied_beds integer NOT NULL DEFAULT 0,
  occupancy_rate numeric,
  gross_rent_expected numeric NOT NULL DEFAULT 0,
  gross_rent_received numeric NOT NULL DEFAULT 0,
  collection_rate numeric,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: pg_payment_record
CREATE TABLE IF NOT EXISTS pg_payment_record (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  pg_tenant_id uuid NOT NULL,
  amount numeric NOT NULL,
  payment_type text NOT NULL,
  payment_month date,
  payment_date date NOT NULL DEFAULT CURRENT_DATE,
  payment_method text,
  gateway_txn_id text,
  notes text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  rent_due_date date,
  reminder_d3_sent_at timestamp with time zone,
  reminder_d8_sent_at timestamp with time zone,
  reminder_d15_sent_at timestamp with time zone,
  gst_status text NOT NULL DEFAULT 'taxable'::text
  ,PRIMARY KEY (id)
);

-- Table: pg_police_verification
CREATE TABLE IF NOT EXISTS pg_police_verification (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  pg_tenant_id uuid NOT NULL,
  submitted_at timestamp with time zone NOT NULL DEFAULT now(),
  verified_at timestamp with time zone,
  status text NOT NULL DEFAULT 'pending'::text,
  document_url text,
  notes text
  ,PRIMARY KEY (id)
);

-- Table: pg_posting
CREATE TABLE IF NOT EXISTS pg_posting (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  listing_type USER-DEFINED NOT NULL DEFAULT 'PG'::listing_type,
  title text NOT NULL,
  description text,
  photos jsonb NOT NULL DEFAULT '[]'::jsonb,
  price_per_bed numeric NOT NULL,
  available_beds integer NOT NULL DEFAULT 0,
  available_from date NOT NULL,
  posting_pack text,
  posting_expires_at timestamp with time zone,
  status text NOT NULL DEFAULT 'draft'::text,
  rejection_reason text,
  boost_active boolean NOT NULL DEFAULT false,
  views_count integer NOT NULL DEFAULT 0,
  leads_count integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  last_confirmed_at timestamp with time zone
  ,PRIMARY KEY (id)
);

-- Table: pg_posting_packs
CREATE TABLE IF NOT EXISTS pg_posting_packs (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL,
  postings_remaining integer NOT NULL DEFAULT 0,
  last_pack_type text,
  last_purchased_at timestamp with time zone,
  last_order_id text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: pg_property
CREATE TABLE IF NOT EXISTS pg_property (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL,
  name text NOT NULL,
  address_line text NOT NULL,
  locality text NOT NULL,
  city text NOT NULL DEFAULT 'Bengaluru'::text,
  pincode text,
  latitude numeric,
  longitude numeric,
  gender_preference text NOT NULL DEFAULT 'any'::text,
  property_type text NOT NULL DEFAULT 'pg'::text,
  total_capacity integer NOT NULL DEFAULT 1,
  amenities jsonb NOT NULL DEFAULT '[]'::jsonb,
  house_rules text,
  police_verified boolean NOT NULL DEFAULT false,
  listing_status text NOT NULL DEFAULT 'draft'::text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: pg_receipt
CREATE TABLE IF NOT EXISTS pg_receipt (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_payment_record_id uuid NOT NULL,
  receipt_number text NOT NULL,
  issued_at timestamp with time zone NOT NULL DEFAULT now(),
  pdf_url text,
  payment_period text,
  payment_mode text,
  upi_reference text,
  gst_status text NOT NULL DEFAULT 'taxable'::text,
  owner_display_name text,
  owner_pan_stub text
  ,PRIMARY KEY (id)
);

-- Table: pg_rent_agreement
CREATE TABLE IF NOT EXISTS pg_rent_agreement (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  pg_tenant_id uuid NOT NULL,
  agreement_start date NOT NULL,
  agreement_end date,
  monthly_rent numeric NOT NULL,
  deposit_amount numeric NOT NULL DEFAULT 0,
  notice_period_days integer NOT NULL DEFAULT 30,
  signed_by_owner boolean NOT NULL DEFAULT false,
  signed_by_tenant boolean NOT NULL DEFAULT false,
  signed_at timestamp with time zone,
  document_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: pg_room
CREATE TABLE IF NOT EXISTS pg_room (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  room_number text,
  room_type text NOT NULL DEFAULT 'shared'::text,
  capacity integer NOT NULL DEFAULT 1,
  floor_number integer,
  has_attached_bath boolean NOT NULL DEFAULT false,
  amenities jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: pg_seeker_preferences
CREATE TABLE IF NOT EXISTS pg_seeker_preferences (
  profile_id uuid NOT NULL,
  preferred_city text,
  preferred_localities ARRAY,
  gender_policy text,
  max_budget integer,
  move_in_window text,
  sharing_preference text,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (profile_id)
);

-- Table: pg_tenant
CREATE TABLE IF NOT EXISTS pg_tenant (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_property_id uuid NOT NULL,
  pg_bed_id uuid,
  user_id uuid,
  tenant_name text NOT NULL,
  phone text,
  emergency_contact text,
  id_type text,
  id_verified boolean NOT NULL DEFAULT false,
  move_in_date date NOT NULL,
  move_out_date date,
  status text NOT NULL DEFAULT 'active'::text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  rent_amount numeric,
  rent_due_day integer,
  payment_status text NOT NULL DEFAULT 'pending'::text,
  lease_end_date date,
  whatsapp_opt_in boolean NOT NULL DEFAULT false,
  ndc_url text,
  deposit_photo_url text
  ,PRIMARY KEY (id)
);

-- Table: pg_vacancy_event
CREATE TABLE IF NOT EXISTS pg_vacancy_event (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  pg_bed_id uuid NOT NULL,
  pg_property_id uuid NOT NULL,
  event_type text NOT NULL,
  available_from date NOT NULL,
  monthly_rent numeric,
  notes text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  created_pg_posting_id uuid
  ,PRIMARY KEY (id)
);

-- Table: pincodes
CREATE TABLE IF NOT EXISTS pincodes (
  pincode character(6) NOT NULL,
  city_id uuid NOT NULL,
  district_id uuid,
  state_id uuid NOT NULL,
  lat numeric,
  lng numeric,
  geo_point USER-DEFINED,
  delivery_status text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (pincode)
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
  last_active timestamp with time zone,
  whatsapp_verified boolean DEFAULT false,
  email_verified boolean DEFAULT false,
  phone_verified boolean DEFAULT false,
  kyc_status text DEFAULT 'not_submitted'::text,
  kyc_documents jsonb,
  preferred_localities ARRAY,
  search_preferences jsonb,
  total_inquiries_sent integer DEFAULT 0,
  total_views_received integer DEFAULT 0,
  response_time_hours integer,
  response_rate numeric,
  professional_type text,
  is_rera_registered boolean DEFAULT false,
  rera_registration_number text,
  rera_validity_date date,
  terms_accepted_at timestamp with time zone,
  privacy_consent_version text
  ,PRIMARY KEY (id)
);

-- Table: projects
CREATE TABLE IF NOT EXISTS projects (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  builder_id uuid NOT NULL,
  name text NOT NULL,
  slug text,
  description text,
  project_type text,
  status text,
  rera_number text,
  location text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  locality_id uuid,
  latitude numeric,
  longitude numeric,
  total_units integer,
  available_units integer,
  total_towers integer,
  total_floors integer,
  launch_date date,
  possession_date date,
  price_range_min numeric,
  price_range_max numeric,
  configurations ARRAY,
  area_range_min numeric,
  area_range_max numeric,
  amenities ARRAY,
  images ARRAY,
  brochure_url text,
  video_url text,
  view_count integer DEFAULT 0,
  inquiry_count integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  city_id uuid,
  district_id uuid,
  state_id uuid,
  geo_point USER-DEFINED,
  geo_quality_score numeric DEFAULT 0
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
  moderation_state text NOT NULL DEFAULT 'not_submitted'::text,
  locality_id uuid,
  builder_id uuid,
  project_id uuid,
  corner_plot boolean DEFAULT false,
  width_facing numeric,
  boundary_wall boolean DEFAULT false,
  gated_security boolean DEFAULT false,
  video_url text,
  virtual_tour_url text,
  floor_plan_images ARRAY,
  approved_by_bank boolean DEFAULT false,
  loan_available boolean DEFAULT false,
  possession_status text,
  water_supply text,
  electricity_backup text,
  lift_available boolean DEFAULT false,
  reserved_parking integer DEFAULT 0,
  open_parking integer DEFAULT 0,
  property_facing_road_width numeric,
  govt_approved boolean DEFAULT false,
  clear_title boolean DEFAULT false,
  last_viewed_by uuid,
  city_id uuid,
  district_id uuid,
  state_id uuid,
  pincode_fk character(6),
  geo_point USER-DEFINED,
  geo_quality_score numeric DEFAULT 0,
  data_freshness_score numeric DEFAULT 100,
  last_verified_at timestamp with time zone,
  visibility_status text DEFAULT 'public'::text,
  data_provided_by text,
  data_confidence_level text DEFAULT 'declared'::text,
  location_accuracy_level text DEFAULT 'locality_only'::text,
  site_visit_handler text DEFAULT 'owner'::text,
  visit_notice_hours integer DEFAULT 24,
  loan_bank_name text,
  loan_clearance_status text DEFAULT 'unknown'::text,
  loan_noc_available boolean DEFAULT false,
  property_tax_paid_till date,
  encumbrance_certificate_available boolean DEFAULT false,
  khata_type text,
  boost_active boolean NOT NULL DEFAULT false,
  featured_rank integer NOT NULL DEFAULT 0
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

-- Table: property_comparisons
CREATE TABLE IF NOT EXISTS property_comparisons (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  property_ids ARRAY NOT NULL,
  comparison_data jsonb,
  session_id text,
  created_at timestamp with time zone DEFAULT now()
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
  uploaded_at timestamp with time zone DEFAULT now(),
  media_status text DEFAULT 'attached'::text,
  deleted_at timestamp with time zone
  ,PRIMARY KEY (id)
);

-- Table: property_intelligence_scores
CREATE TABLE IF NOT EXISTS property_intelligence_scores (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  overall_score numeric NOT NULL DEFAULT 0,
  value_score numeric DEFAULT 0,
  demand_score numeric DEFAULT 0,
  quality_score numeric DEFAULT 0,
  location_score numeric DEFAULT 0,
  view_velocity numeric DEFAULT 0,
  inquiry_rate numeric DEFAULT 0,
  favorite_rate numeric DEFAULT 0,
  contact_reveal_rate numeric DEFAULT 0,
  site_visit_conversion_rate numeric DEFAULT 0,
  avg_time_on_listing_seconds integer,
  repeat_view_rate numeric,
  share_count integer DEFAULT 0,
  comparison_count integer DEFAULT 0,
  price_competitiveness numeric,
  price_per_sqft_rank integer,
  price_trend text,
  estimated_market_value numeric,
  value_gap_percentage numeric,
  listing_completeness_score numeric,
  image_quality_score numeric,
  description_quality_score numeric,
  verification_score numeric,
  days_on_market integer DEFAULT 0,
  estimated_days_to_sell integer,
  freshness_score numeric,
  rank_in_locality integer,
  rank_in_city integer,
  similar_properties_count integer,
  better_value_alternatives_count integer,
  is_hot_property boolean DEFAULT false,
  hot_property_reasons ARRAY,
  urgency_score numeric DEFAULT 0,
  investment_score numeric DEFAULT 0,
  roi_potential numeric,
  appreciation_potential text,
  risk_score numeric DEFAULT 0,
  risk_factors ARRAY,
  calculated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: property_leads
CREATE TABLE IF NOT EXISTS property_leads (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  lead_user_id uuid,
  lead_name text,
  lead_phone text NOT NULL,
  lead_email text,
  lead_type text,
  source text,
  status text DEFAULT 'new'::text,
  priority text DEFAULT 'medium'::text,
  assigned_to uuid,
  budget_min numeric,
  budget_max numeric,
  notes text,
  follow_up_date date,
  conversion_probability integer,
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone DEFAULT now(),
  last_contacted_at timestamp with time zone,
  converted_at timestamp with time zone,
  case_id text
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

-- Table: property_ranking_criteria
CREATE TABLE IF NOT EXISTS property_ranking_criteria (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  price_value_rating numeric DEFAULT 5,
  roi_potential_rating numeric DEFAULT 5,
  appreciation_potential_rating numeric DEFAULT 5,
  location_desirability_rating numeric DEFAULT 5,
  connectivity_rating numeric DEFAULT 5,
  infrastructure_rating numeric DEFAULT 5,
  safety_rating numeric DEFAULT 5,
  construction_quality_rating numeric DEFAULT 5,
  maintenance_rating numeric DEFAULT 5,
  amenities_rating numeric DEFAULT 5,
  design_rating numeric DEFAULT 5,
  legal_clarity_rating numeric DEFAULT 5,
  documentation_completeness_rating numeric DEFAULT 5,
  title_clarity_rating numeric DEFAULT 5,
  demand_rating numeric DEFAULT 5,
  liquidity_rating numeric DEFAULT 5,
  competitive_position_rating numeric DEFAULT 5,
  seller_reputation_rating numeric DEFAULT 5,
  response_rate_rating numeric DEFAULT 5,
  negotiation_flexibility_rating numeric DEFAULT 5,
  investment_rank numeric DEFAULT 0,
  first_time_buyer_rank numeric DEFAULT 0,
  family_rank numeric DEFAULT 0,
  senior_citizen_rank numeric DEFAULT 0,
  overall_rank_in_locality integer,
  overall_rank_in_city integer,
  overall_rank_in_price_range integer,
  value_percentile integer,
  demand_percentile integer,
  quality_percentile integer,
  deal_quality text,
  deal_score numeric DEFAULT 0,
  urgency_level text,
  opportunity_type ARRAY,
  calculated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: property_reports
CREATE TABLE IF NOT EXISTS property_reports (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  reported_by uuid,
  report_type text NOT NULL,
  description text NOT NULL,
  evidence_urls ARRAY,
  status text DEFAULT 'pending'::text,
  reviewed_by uuid,
  action_taken text,
  created_at timestamp with time zone DEFAULT now(),
  resolved_at timestamp with time zone
  ,PRIMARY KEY (id)
);

-- Table: property_shares
CREATE TABLE IF NOT EXISTS property_shares (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  shared_by uuid,
  platform text NOT NULL,
  ip_address inet,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: property_valuations
CREATE TABLE IF NOT EXISTS property_valuations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  estimated_value numeric NOT NULL,
  confidence_score numeric,
  valuation_method text,
  min_estimated_value numeric,
  max_estimated_value numeric,
  comparable_properties_used integer,
  comparable_property_ids ARRAY,
  avg_comparable_price numeric,
  base_price_per_sqft numeric,
  location_adjustment_percentage numeric,
  age_adjustment_percentage numeric,
  amenities_adjustment_percentage numeric,
  condition_adjustment_percentage numeric,
  market_trend_adjustment_percentage numeric,
  locality_avg_price_per_sqft numeric,
  locality_price_growth_1y numeric,
  proximity_premium_percentage numeric,
  property_age_years integer,
  maintenance_condition text,
  unique_selling_points ARRAY,
  market_temperature text,
  seasonal_adjustment numeric,
  land_value numeric,
  construction_value numeric,
  depreciation_value numeric,
  appreciation_value numeric,
  model_version text,
  model_accuracy numeric,
  feature_importance jsonb,
  validation_status text,
  validated_by uuid,
  validation_notes text,
  valuation_date date NOT NULL DEFAULT CURRENT_DATE,
  valid_until date,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: property_verifications
CREATE TABLE IF NOT EXISTS property_verifications (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  verification_type text NOT NULL,
  status text DEFAULT 'pending'::text,
  verified_by uuid,
  verification_agency text,
  verification_number text,
  report_url text,
  findings jsonb,
  valid_until timestamp with time zone,
  cost numeric,
  created_at timestamp with time zone DEFAULT now(),
  verified_at timestamp with time zone,
  case_id text
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

-- Table: property_visits
CREATE TABLE IF NOT EXISTS property_visits (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  visitor_id uuid,
  visit_date date NOT NULL,
  visit_time time without time zone,
  visit_type text,
  status text DEFAULT 'scheduled'::text,
  accompanied_by uuid,
  feedback text,
  interest_level text,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: referrals
CREATE TABLE IF NOT EXISTS referrals (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  referrer_id uuid NOT NULL,
  referred_id uuid,
  referral_code text NOT NULL,
  referred_email text,
  referred_phone text,
  status text DEFAULT 'pending'::text,
  reward_type text,
  reward_amount numeric,
  credited_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  converted_at timestamp with time zone
  ,PRIMARY KEY (id)
);

-- Table: refund_request
CREATE TABLE IF NOT EXISTS refund_request (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  transaction_id uuid NOT NULL,
  requested_by uuid NOT NULL,
  amount numeric NOT NULL,
  reason text NOT NULL,
  status text NOT NULL DEFAULT 'pending_approval'::text,
  reviewed_by uuid,
  reviewed_at timestamp with time zone,
  review_note text,
  case_id text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
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

-- Table: registration_consent_log
CREATE TABLE IF NOT EXISTS registration_consent_log (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  consent_given_at timestamp with time zone NOT NULL DEFAULT now(),
  ip_address_hash text NOT NULL,
  tc_version text NOT NULL,
  purpose text NOT NULL DEFAULT 'data_processing_consent'::text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: role_permissions
CREATE TABLE IF NOT EXISTS role_permissions (
  role_id uuid NOT NULL,
  permission_id uuid NOT NULL
  ,PRIMARY KEY (role_id)
);

-- Table: role_platform_access
CREATE TABLE IF NOT EXISTS role_platform_access (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  role_key text NOT NULL,
  designation_match ARRAY,
  platform text NOT NULL,
  access_level text NOT NULL,
  access_config jsonb NOT NULL,
  exec_order smallint DEFAULT 10,
  requires_manual_gate boolean DEFAULT false,
  gate_owner text,
  gate_channel text,
  operation_onboard text DEFAULT 'create'::text,
  operation_offboard text DEFAULT 'deactivate'::text,
  is_active boolean DEFAULT true,
  approved_by text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: roles
CREATE TABLE IF NOT EXISTS roles (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text,
  category text,
  description text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: saved_listings
CREATE TABLE IF NOT EXISTS saved_listings (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL,
  property_id uuid NOT NULL,
  saved_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: saved_searches
CREATE TABLE IF NOT EXISTS saved_searches (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  search_name text NOT NULL,
  filters jsonb NOT NULL,
  notification_enabled boolean DEFAULT true,
  notification_frequency text DEFAULT 'daily'::text,
  last_notified_at timestamp with time zone,
  match_count integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
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

-- Table: spatial_ref_sys
CREATE TABLE IF NOT EXISTS spatial_ref_sys (
  srid integer NOT NULL,
  auth_name character varying(256),
  auth_srid integer,
  srtext character varying(2048),
  proj4text character varying(2048)
  ,PRIMARY KEY (srid)
);

-- Table: states
CREATE TABLE IF NOT EXISTS states (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  lgd_code character varying(5) NOT NULL,
  name text NOT NULL,
  iso_code character varying(8),
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: sub_districts
CREATE TABLE IF NOT EXISTS sub_districts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  lgd_code character varying(10),
  district_id uuid NOT NULL,
  name text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

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
  updated_at timestamp with time zone DEFAULT now(),
  case_id text
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
  updated_at timestamp with time zone DEFAULT now(),
  intro_price_inr numeric,
  intro_price_active boolean NOT NULL DEFAULT false,
  plan_category text,
  tier text,
  discount_percentage numeric DEFAULT NULL::numeric,
  per_listing_cost_inr numeric,
  rera_bonus_inr numeric,
  listing_validity_days integer,
  tier_a_price_inr numeric,
  tier_b_price_inr numeric
  ,PRIMARY KEY (id)
);

-- Table: system_health_metrics
CREATE TABLE IF NOT EXISTS system_health_metrics (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  metric_name text NOT NULL,
  metric_value numeric NOT NULL,
  metric_unit text,
  context jsonb,
  recorded_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: system_settings
CREATE TABLE IF NOT EXISTS system_settings (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  key text NOT NULL,
  value text,
  description text,
  is_active boolean NOT NULL DEFAULT true,
  updated_by uuid,
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: team_broadcasts
CREATE TABLE IF NOT EXISTS team_broadcasts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  from_team text NOT NULL,
  subject text NOT NULL,
  body text NOT NULL,
  priority text NOT NULL DEFAULT 'normal'::text,
  target_teams ARRAY,
  expires_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: team_messages
CREATE TABLE IF NOT EXISTS team_messages (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  from_team text NOT NULL,
  to_team text NOT NULL,
  message text NOT NULL,
  response text,
  responded_at timestamp with time zone,
  status text NOT NULL DEFAULT 'pending'::text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: team_registry
CREATE TABLE IF NOT EXISTS team_registry (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  team_id text NOT NULL,
  team_name text NOT NULL,
  role text NOT NULL,
  capabilities ARRAY,
  status text NOT NULL DEFAULT 'active'::text,
  last_seen_at timestamp with time zone,
  notes text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
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
  updated_at timestamp with time zone DEFAULT now(),
  lead_id uuid,
  builder_id uuid,
  project_id uuid,
  case_id text,
  initiated_by uuid,
  approved_by uuid,
  reviewed_at timestamp with time zone
  ,PRIMARY KEY (id)
);

-- Table: undervalued_properties
CREATE TABLE IF NOT EXISTS undervalued_properties (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  listed_price numeric NOT NULL,
  estimated_market_value numeric NOT NULL,
  undervaluation_amount numeric NOT NULL,
  undervaluation_percentage numeric NOT NULL,
  deal_rating text,
  savings_potential numeric,
  undervaluation_reasons ARRAY,
  confidence_level text,
  comparable_properties_count integer,
  data_quality_score numeric,
  locality_price_trend text,
  time_to_market_correction_days integer,
  competition_level text,
  investment_opportunity_score numeric,
  risk_adjusted_score numeric,
  expected_appreciation_1y_percentage numeric,
  expected_appreciation_3y_percentage numeric,
  discovered_at timestamp with time zone DEFAULT now(),
  algorithm_version text,
  manual_verification_status text,
  verified_by uuid,
  alert_sent boolean DEFAULT false,
  alert_sent_to_users ARRAY,
  expires_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now()
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

-- Table: verification_documents
CREATE TABLE IF NOT EXISTS verification_documents (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  kyc_id uuid,
  document_type text NOT NULL,
  file_path text NOT NULL,
  file_hash text,
  file_size integer,
  mime_type text,
  status text DEFAULT 'pending'::text,
  moderation_notes text,
  moderated_by uuid,
  moderated_at timestamp with time zone,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: verification_gps_tracking
CREATE TABLE IF NOT EXISTS verification_gps_tracking (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  session_id uuid NOT NULL,
  latitude numeric NOT NULL,
  longitude numeric NOT NULL,
  accuracy numeric,
  altitude numeric,
  speed numeric,
  heading numeric,
  timestamp timestamp with time zone NOT NULL,
  location_context text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now()
  ,PRIMARY KEY (id)
);

-- Table: verification_kyc
CREATE TABLE IF NOT EXISTS verification_kyc (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  full_name text NOT NULL,
  date_of_birth date,
  id_number text,
  id_type text,
  country_of_issue text,
  status text DEFAULT 'pending'::text,
  verified_at timestamp with time zone,
  verified_by uuid,
  rejection_reason text,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  case_id text
  ,PRIMARY KEY (id)
);

-- Table: waitlist_entries
CREATE TABLE IF NOT EXISTS waitlist_entries (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  email text NOT NULL,
  tool_slug text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
  ,PRIMARY KEY (id)
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
  updated_at timestamp with time zone DEFAULT now(),
  case_id text
  ,PRIMARY KEY (id)
);

