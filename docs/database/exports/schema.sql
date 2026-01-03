-- WHYNOTBROKER Database Schema
-- Generated: 2026-01-03T06:58:49.554Z
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
  last_login_at timestamp with time zone,
  specialization ARRAY,
  assigned_regions ARRAY,
  assigned_cities ARRAY
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
  city text NOT NULL,
  state text NOT NULL,
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
  updated_at timestamp with time zone DEFAULT now()
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
  created_at timestamp with time zone NOT NULL DEFAULT now()
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
  response_rate numeric
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
  updated_at timestamp with time zone DEFAULT now()
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
  last_viewed_by uuid
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
  uploaded_at timestamp with time zone DEFAULT now()
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
  converted_at timestamp with time zone
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


-- Table: property_repeat_views
CREATE TABLE IF NOT EXISTS property_repeat_views (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL,
  user_id uuid,
  session_id text,
  view_number integer NOT NULL,
  time_since_last_view_hours numeric,
  total_time_on_page_seconds integer,
  scrolled_percentage integer,
  images_viewed integer,
  video_played boolean DEFAULT false,
  floor_plan_viewed boolean DEFAULT false,
  amenities_expanded boolean DEFAULT false,
  location_map_interacted boolean DEFAULT false,
  contact_revealed boolean DEFAULT false,
  favorite_added boolean DEFAULT false,
  inquiry_sent boolean DEFAULT false,
  comparison_added boolean DEFAULT false,
  shared boolean DEFAULT false,
  device_type text,
  referrer_source text,
  viewed_at timestamp with time zone DEFAULT now()
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
  verified_at timestamp with time zone
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


-- Table: repeat_customer_analytics
CREATE TABLE IF NOT EXISTS repeat_customer_analytics (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  total_visits integer DEFAULT 0,
  visits_last_7_days integer DEFAULT 0,
  visits_last_30_days integer DEFAULT 0,
  visits_last_90_days integer DEFAULT 0,
  consecutive_days_active integer DEFAULT 0,
  longest_streak_days integer DEFAULT 0,
  total_unique_properties_viewed integer DEFAULT 0,
  properties_viewed_multiple_times integer DEFAULT 0,
  avg_views_per_property numeric,
  most_viewed_property_id uuid,
  most_viewed_property_count integer DEFAULT 0,
  consistent_search_criteria boolean DEFAULT false,
  search_criteria_changes integer DEFAULT 0,
  location_focus_count integer DEFAULT 0,
  price_range_stability numeric,
  avg_days_between_visits numeric,
  visit_frequency_trend text,
  inquiries_per_property_viewed numeric,
  conversion_funnel_stage text,
  is_repeat_customer boolean DEFAULT false,
  repeat_customer_type text,
  previous_properties_bought integer DEFAULT 0,
  previous_properties_sold integer DEFAULT 0,
  total_transaction_value numeric DEFAULT 0,
  customer_lifetime_value numeric DEFAULT 0,
  churn_risk_score numeric DEFAULT 0,
  reactivation_potential numeric DEFAULT 0,
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
  updated_at timestamp with time zone DEFAULT now(),
  lead_id uuid,
  builder_id uuid,
  project_id uuid
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


-- Table: user_engagement_metrics
CREATE TABLE IF NOT EXISTS user_engagement_metrics (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  total_sessions integer DEFAULT 0,
  total_page_views integer DEFAULT 0,
  total_property_views integer DEFAULT 0,
  unique_properties_viewed integer DEFAULT 0,
  total_searches integer DEFAULT 0,
  saved_searches_count integer DEFAULT 0,
  avg_search_frequency_days numeric,
  avg_session_duration_seconds integer,
  avg_properties_per_session numeric,
  property_detail_views integer DEFAULT 0,
  contact_reveals integer DEFAULT 0,
  favorites_count integer DEFAULT 0,
  inquiries_sent integer DEFAULT 0,
  site_visits_scheduled integer DEFAULT 0,
  comparisons_made integer DEFAULT 0,
  properties_listed integer DEFAULT 0,
  valuation_requests integer DEFAULT 0,
  documents_uploaded integer DEFAULT 0,
  engagement_score numeric DEFAULT 0,
  intent_score numeric DEFAULT 0,
  user_segment text,
  buying_intent text,
  selling_intent text,
  first_activity_at timestamp with time zone,
  last_activity_at timestamp with time zone,
  most_active_day_of_week integer,
  most_active_hour_of_day integer,
  preferred_locations ARRAY,
  preferred_property_types ARRAY,
  preferred_bhk_types ARRAY,
  budget_range_min numeric,
  budget_range_max numeric,
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


