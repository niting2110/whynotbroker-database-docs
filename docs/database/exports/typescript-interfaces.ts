// WHYNOTBROKER Database Types
// Generated: 2026-05-11T09:56:26.459Z

export interface Database {
  admin_audit_logs: {
    Row: {
      id: string;
      admin_id?: string;
      action: string;
      entity: string;
      entity_id?: string;
      details?: string;
      ip_address?: any;
      created_at: string | Date;
      region_id?: string;
    };
  };

  admin_chat: {
    Row: {
      id: string;
      admin_id?: string;
      message: string;
      created_at?: string | Date;
    };
  };

  admin_leaves: {
    Row: {
      id: string;
      admin_id?: string;
      start_date: string | Date;
      end_date: string | Date;
      reason?: string;
      backup_admin_id?: string;
      status?: string;
      created_at?: string | Date;
      leave_type_id?: string;
      is_half_day?: boolean;
      half_day_period?: string;
      emergency_contact?: string;
      attachment_urls?: any;
      handover_notes?: string;
      approved_by_id?: string;
      rejection_reason?: string;
      status_log?: any;
    };
  };

  admin_messages: {
    Row: {
      id: string;
      sender_id: string;
      receiver_id: string;
      content: string;
      is_read?: boolean;
      created_at?: string | Date;
    };
  };

  admin_notices: {
    Row: {
      id: string;
      title: string;
      content: string;
      is_active?: boolean;
      created_at?: string | Date;
      priority?: string;
      expires_at?: string | Date;
    };
  };

  admin_regions: {
    Row: {
      id: string;
      admin_id: string;
      region_id: string;
      region_type: string;
      assigned_by?: string;
      assigned_at?: string | Date;
    };
  };

  admin_roles: {
    Row: {
      admin_id: string;
      role_id: string;
      can_publish: boolean;
    };
  };

  admin_users: {
    Row: {
      id: string;
      is_active: boolean;
      assigned_count: number;
      total_reviewed: number;
      last_active_at: string | Date;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  admins: {
    Row: {
      id: string;
      user_id: string;
      email: string;
      is_active: boolean;
      permissions_version: number;
      created_at: string | Date;
      password_hash?: string;
      full_name?: string;
      last_login_at?: string | Date;
      specialization?: any;
      assigned_regions?: any;
      assigned_cities?: any;
      department?: string;
      designation?: string;
      employee_id?: string;
      joining_date?: string | Date;
      profile_photo_url?: string;
      reporting_manager_id?: string;
      profile_data?: any;
      is_manager?: boolean;
    };
  };

  appointments: {
    Row: {
      id: string;
      property_id: string;
      buyer_id: string;
      seller_id: string;
      appointment_date: string | Date;
      appointment_time: any;
      duration_minutes?: number;
      status?: string;
      meeting_type?: string;
      meeting_link?: string;
      location?: string;
      notes?: string;
      feedback?: string;
      rating?: number;
      cancelled_by?: string;
      cancellation_reason?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  blog_posts: {
    Row: {
      id: string;
      pid: string;
      author_id?: string;
      title: string;
      slug: string;
      excerpt?: string;
      content: string;
      featured_image?: string;
      category?: string;
      tags?: any;
      status?: string;
      view_count?: number;
      like_count?: number;
      comment_count?: number;
      published_at?: string | Date;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  broker_aadhaar_verifications: {
    Row: {
      id: string;
      user_id: string;
      status: string;
      masked_aadhaar?: string;
      otp_expires_at?: string | Date;
      resend_count?: number;
      name?: string;
      dob?: string | Date;
      gender?: string;
      address?: string;
      photo_available?: boolean;
      verified_at?: string | Date;
      created_at: string | Date;
    };
  };

  broker_gps_tracking: {
    Row: {
      id: string;
      user_id: string;
      latitude: number;
      longitude: number;
      accuracy?: number;
      altitude?: number;
      address?: string;
      activity_type?: string;
      property_id?: string;
      within_geofence?: boolean;
      distance_from_prop?: number;
      city_match?: boolean;
      suspicious_activity?: boolean;
      recorded_at: string | Date;
      created_at: string | Date;
    };
  };

  broker_gst_verifications: {
    Row: {
      id: string;
      user_id: string;
      status: string;
      gst_number: string;
      business_name?: string;
      legal_name?: string;
      trade_name?: string;
      business_name_match?: boolean;
      registration_date?: string | Date;
      gst_status?: string;
      taxpayer_type?: string;
      state?: string;
      state_code?: string;
      principal_place_address?: string;
      verified_at?: string | Date;
      created_at: string | Date;
    };
  };

  broker_kyc_documents: {
    Row: {
      id: string;
      verification_id: string;
      user_id: string;
      document_type: string;
      status: string;
      file_size?: number;
      file_type?: string;
      storage_url?: string;
      thumbnail_url?: string;
      document_number?: string;
      name_matched?: boolean;
      tamper_detected?: boolean;
      confidence_score?: number;
      ocr_extracted?: boolean;
      uploaded_at: string | Date;
      verified_at?: string | Date;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  broker_kyc_verifications: {
    Row: {
      id: string;
      user_id: string;
      status: string;
      verification_type: string;
      documents_required?: string;
      verification_level?: string;
      verified_by?: string;
      risk_score?: number;
      confidence_level?: string;
      started_at: string | Date;
      completed_at?: string | Date;
      expires_at: string | Date;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  broker_pan_verifications: {
    Row: {
      id: string;
      user_id: string;
      status: string;
      pan_number: string;
      name?: string;
      name_match?: boolean;
      dob_match?: boolean;
      pan_status?: string;
      pan_type?: string;
      verified_at?: string | Date;
      created_at: string | Date;
    };
  };

  builders: {
    Row: {
      id: string;
      name: string;
      company_name: string;
      registration_number?: string;
      rera_number?: string;
      pan_number?: string;
      gst_number?: string;
      logo_url?: string;
      description?: string;
      established_year?: number;
      total_projects?: number;
      completed_projects?: number;
      ongoing_projects?: number;
      total_units_delivered?: number;
      specialization?: any;
      operating_cities?: any;
      website_url?: string;
      contact_email?: string;
      contact_phone?: string;
      office_address?: string;
      rating?: number;
      total_ratings?: number;
      is_verified?: boolean;
      is_featured?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
      normalized_name?: string;
      dedup_group_id?: string;
    };
  };

  campaign_participants: {
    Row: {
      id: string;
      campaign_id: string;
      user_id: string;
      region_id?: string;
      credits_awarded?: number;
      conditions_met?: any;
      is_completed?: boolean;
      completed_at?: string | Date;
      joined_at?: string | Date;
    };
  };

  cities: {
    Row: {
      id: string;
      name: string;
      normalized_name: string;
      state_id: string;
      district_id?: string;
      lat?: number;
      lng?: number;
      geo_point?: any;
      place_id?: string;
      population_estimate?: number;
      is_metro?: boolean;
      is_active?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
      city_tier?: string;
    };
  };

  comm_deferred: {
    Row: {
      id: string;
      recipient_id: string;
      event_category: string;
      payload: any;
      risk_score: number;
      retry_count: number;
      retry_at: string | Date;
      ttl_expires_at: string | Date;
      status: string;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  commission_events: {
    Row: {
      id: string;
      transaction_id: string;
      partner_id?: string;
      user_id: string;
      property_id?: string;
      loan_amount: number;
      commission_rate_snap: number;
      commission_amount: number;
      status: string;
      reversal_reason?: string;
      case_id?: string;
      created_at: string | Date;
      updated_at: string | Date;
      loan_application_id?: string;
      disbursal_date?: string | Date;
      reviewed_by?: string;
      reviewed_at?: string | Date;
      review_note?: string;
      created_by?: string;
    };
  };

  coupon_usage: {
    Row: {
      id: string;
      coupon_id: string;
      user_id: string;
      transaction_id?: string;
      discount_applied: number;
      original_amount: number;
      final_amount: number;
      region_id?: string;
      used_at?: string | Date;
    };
  };

  coupons: {
    Row: {
      id: string;
      code: string;
      description?: string;
      discount_type: string;
      discount_value: number;
      max_discount_amount?: number;
      min_purchase_amount?: number;
      region_ids?: any;
      excluded_region_ids?: any;
      applicable_to?: any;
      user_type_restrictions?: any;
      new_users_only?: boolean;
      usage_limit_global?: number;
      usage_limit_per_user?: number;
      usage_limit_per_region?: any;
      times_used?: number;
      valid_from?: string | Date;
      valid_until?: string | Date;
      campaign_id?: string;
      attribution_source?: string;
      is_active?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  credit_packages: {
    Row: {
      id: string;
      name: string;
      credits: number;
      base_price: number;
      bonus_credits?: number;
      region_id?: string;
      regional_price?: number;
      is_popular?: boolean;
      user_type_restriction?: string;
      validity_days?: number;
      display_order?: number;
      badge_text?: string;
      description?: string;
      features?: any;
      is_active?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  districts: {
    Row: {
      id: string;
      lgd_code: string;
      state_id: string;
      name: string;
      is_active?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  enquiries: {
    Row: {
      id: string;
      pg_posting_id?: string;
      seeker_profile_id: string;
      move_in_date: string | Date;
      duration_months: number;
      room_preference?: string;
      message?: string;
      status: string;
      status_updated_at?: string | Date;
      status_updated_by?: string;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  home_loan_consent_log: {
    Row: {
      id: string;
      user_id: string;
      bank_id: string;
      purpose: string;
      consent_given_at: string | Date;
      consent_withdrawn_at?: string | Date;
      ip_address_hash?: string;
      session_id?: string;
      created_at: string | Date;
      partner_id?: string;
    };
  };

  hot_properties: {
    Row: {
      id: string;
      property_id: string;
      heat_score: number;
      views_spike_percentage?: number;
      inquiries_spike_percentage?: number;
      favorites_spike_percentage?: number;
      views_per_hour?: number;
      inquiries_per_day?: number;
      unique_viewers_per_day?: number;
      comparing_users_count?: number;
      saved_by_users_count?: number;
      sharing_frequency?: number;
      price_recently_reduced?: boolean;
      new_listing?: boolean;
      limited_availability?: boolean;
      hot_reasons?: any;
      heat_trend?: string;
      days_as_hot?: number;
      peak_heat_score?: number;
      estimated_days_until_sold?: number;
      probability_sold_this_week?: number;
      is_currently_hot?: boolean;
      became_hot_at?: string | Date;
      cooled_down_at?: string | Date;
      calculated_at?: string | Date;
    };
  };

  leave_balances: {
    Row: {
      id: string;
      admin_id?: string;
      leave_type_id?: string;
      year: number;
      total_credits?: number;
      used_credits?: number;
    };
  };

  leave_types: {
    Row: {
      id: string;
      name: string;
      code: string;
      color_code?: string;
      max_days?: number;
      is_active?: boolean;
    };
  };

  lending_partners: {
    Row: {
      id: string;
      name: string;
      dsa_reference?: string;
      is_active: boolean;
      credential_state: string;
      health_check_url?: string;
      escalation_contact_name?: string;
      escalation_contact_phone?: string;
      escalation_contact_email?: string;
      commission_rate_percent?: number;
      data_processing_agreement_date?: string | Date;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  listing_boosts: {
    Row: {
      id: string;
      listing_id: string;
      purchased_by: string;
      boost_type: string;
      status: string;
      amount_paid: number;
      razorpay_order_id?: string;
      razorpay_payment_id?: string;
      boost_expires_at?: string | Date;
      activated_at?: string | Date;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  loan_calculations: {
    Row: {
      id: string;
      user_id?: string;
      property_id?: string;
      property_price: number;
      down_payment: number;
      loan_amount: number;
      interest_rate: number;
      tenure_years: number;
      emi_amount: number;
      total_interest?: number;
      total_amount?: number;
      calculation_data?: any;
      created_at?: string | Date;
    };
  };

  localities: {
    Row: {
      id: string;
      name: string;
      region_id?: string;
      pincode?: string;
      latitude?: number;
      longitude?: number;
      boundary_geojson?: any;
      locality_type?: string;
      tier_rating?: number;
      avg_price_per_sqft?: number;
      price_trend_6m?: number;
      price_trend_1y?: number;
      total_properties?: number;
      available_properties?: number;
      infrastructure_score?: number;
      connectivity_score?: number;
      safety_score?: number;
      amenities_score?: number;
      is_gated_community?: boolean;
      is_verified?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
      city_id?: string;
      district_id?: string;
      state_id?: string;
      normalized_name: string;
      popularity_score?: number;
      source?: string;
    };
  };

  locality_amenities: {
    Row: {
      id: string;
      locality_id: string;
      category: string;
      name: string;
      distance_km: number;
      rating?: number;
      latitude?: number;
      longitude?: number;
      is_verified?: boolean;
      created_at?: string | Date;
    };
  };

  location_boundaries: {
    Row: {
      id: string;
      entity_type: string;
      entity_id: string;
      boundary: any;
      source?: string;
      confidence_score?: number;
      is_active?: boolean;
      min_zoom?: number;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  location_canonical_map: {
    Row: {
      id: string;
      raw_name: string;
      normalized_name: string;
      locality_id?: string;
      city_id?: string;
      confidence_score?: number;
      usage_count?: number;
      last_used_at?: string | Date;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  market_trends: {
    Row: {
      id: string;
      region_id?: string;
      locality_id?: string;
      property_type: string;
      bhk_type?: string;
      avg_price: number;
      median_price?: number;
      min_price?: number;
      max_price?: number;
      total_listings?: number;
      sold_count?: number;
      avg_time_to_sell?: number;
      supply_demand_ratio?: number;
      price_change_percentage?: number;
      month_year: string | Date;
      created_at?: string | Date;
    };
  };

  mdm_aliases: {
    Row: {
      id: string;
      canonical_entity_id: string;
      canonical_entity_type: string;
      alias_value: string;
      alias_language?: string;
      city_id?: string;
      district_id?: string;
      state_id?: string;
      alias_type?: string;
      alias_confidence?: number;
      status?: string;
      retired_reason?: string;
      retired_at?: string | Date;
      canonical_resolution_count?: number;
      last_used_at?: string | Date;
      created_by?: string;
      approved_by?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  mdm_audit_logs: {
    Row: {
      id: string;
      admin_id?: string;
      admin_email?: string;
      action: string;
      entity_id?: string;
      entity_type?: string;
      request_id?: string;
      changes?: any;
      reason?: string;
      affected_count?: number;
      ip_address?: string;
      user_agent?: string;
      created_at?: string | Date;
    };
  };

  mdm_curation_requests: {
    Row: {
      id: string;
      request_type: string;
      entity_type: string;
      submitted_value: string;
      submitted_by?: string;
      submitted_from?: string;
      submission_context?: any;
      city_id?: string;
      district_id?: string;
      state_id?: string;
      potential_matches?: any;
      suggested_canonical_id?: string;
      suggested_canonical_type?: string;
      match_confidence?: number;
      detection_algorithm?: string;
      lgd_conflict?: boolean;
      lgd_official_name?: string;
      lgd_code?: string;
      rera_conflict?: boolean;
      rera_official_name?: string;
      rera_id?: string;
      geo_conflict?: boolean;
      geo_conflict_details?: any;
      impact_score_snapshot?: number;
      impact_components_snapshot?: any;
      priority?: string;
      sla_deadline?: string | Date;
      sla_hours_assigned?: number;
      status?: string;
      escalated_to_service?: string;
      escalation_reason?: string;
      resolved_by?: string;
      resolved_at?: string | Date;
      resolution_action?: string;
      resolution_notes?: string;
      created_alias_id?: string;
      merged_into_entity_id?: string;
      merged_into_entity_type?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  mdm_merge_history: {
    Row: {
      id: string;
      source_entity_id: string;
      target_entity_id: string;
      entity_type: string;
      merge_reason?: string;
      reversal_strategy: string;
      affected_properties_count?: number;
      executed_by?: string;
      executed_at?: string | Date;
      reversed_at?: string | Date;
      reversed_by?: string;
      reversal_notes?: string;
    };
  };

  messages: {
    Row: {
      id: string;
      sender_id: string;
      receiver_id: string;
      property_id?: string;
      subject?: string;
      message: string;
      message_type?: string;
      is_read?: boolean;
      is_important?: boolean;
      is_archived?: boolean;
      read_at?: string | Date;
      appointment_date?: string | Date;
      appointment_time?: any;
      appointment_status?: string;
      ip_address?: any;
      user_agent?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
      lead_id?: string;
      parent_message_id?: string;
      attachments?: any;
    };
  };

  moderation_history: {
    Row: {
      id: string;
      property_id: string;
      admin_id: string;
      action: string;
      reason?: string;
      notes?: string;
      checklist?: any;
      previous_state?: string;
      new_state?: string;
      created_at: string | Date;
      case_id?: string;
    };
  };

  notification_preferences: {
    Row: {
      user_id: string;
      email_enabled?: boolean;
      sms_enabled?: boolean;
      push_enabled?: boolean;
      whatsapp_enabled?: boolean;
      new_properties?: boolean;
      price_drops?: boolean;
      saved_search_matches?: boolean;
      property_updates?: boolean;
      promotional?: boolean;
      newsletter?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  notifications: {
    Row: {
      id: string;
      user_id: string;
      notification_type: string;
      title: string;
      message: string;
      data?: any;
      is_read?: boolean;
      is_archived?: boolean;
      read_at?: string | Date;
      created_at?: string | Date;
    };
  };

  overtime_records: {
    Row: {
      id: string;
      admin_id?: string;
      date: string | Date;
      hours: number;
      reason?: string;
      status?: string;
      approved_by?: string;
      created_at?: string | Date;
    };
  };

  permissions: {
    Row: {
      id: string;
      name: string;
      domain: any;
      action: any;
      scope: any;
      usage_condition?: string;
    };
  };

  pg_bed: {
    Row: {
      id: string;
      pg_room_id: string;
      bed_label?: string;
      is_available: boolean;
      monthly_rent: number;
      advance_deposit: number;
      created_at: string | Date;
      food_charge?: number;
    };
  };

  pg_occupancy: {
    Row: {
      id: string;
      pg_property_id: string;
      pg_bed_id: string;
      pg_tenant_id?: string;
      occupied_from: string | Date;
      occupied_until?: string | Date;
      is_current: boolean;
      created_at: string | Date;
    };
  };

  pg_occupancy_snapshot: {
    Row: {
      id: string;
      pg_property_id: string;
      snapshot_date: string | Date;
      total_beds: number;
      occupied_beds: number;
      available_beds: number;
      created_at: string | Date;
    };
  };

  pg_owner_pnl: {
    Row: {
      id: string;
      pg_property_id: string;
      snapshot_month: string | Date;
      total_beds: number;
      occupied_beds: number;
      occupancy_rate?: number;
      gross_rent_expected: number;
      gross_rent_received: number;
      collection_rate?: number;
      created_at: string | Date;
    };
  };

  pg_payment_record: {
    Row: {
      id: string;
      pg_property_id: string;
      pg_tenant_id: string;
      amount: number;
      payment_type: string;
      payment_month?: string | Date;
      payment_date: string | Date;
      payment_method?: string;
      gateway_txn_id?: string;
      notes?: string;
      created_at: string | Date;
      rent_due_date?: string | Date;
      reminder_d3_sent_at?: string | Date;
      reminder_d8_sent_at?: string | Date;
      reminder_d15_sent_at?: string | Date;
      gst_status: string;
    };
  };

  pg_police_verification: {
    Row: {
      id: string;
      pg_property_id: string;
      pg_tenant_id: string;
      submitted_at: string | Date;
      verified_at?: string | Date;
      status: string;
      document_url?: string;
      notes?: string;
    };
  };

  pg_posting: {
    Row: {
      id: string;
      pg_property_id: string;
      listing_type: any;
      title: string;
      description?: string;
      photos: any;
      price_per_bed: number;
      available_beds: number;
      available_from: string | Date;
      posting_pack?: string;
      posting_expires_at?: string | Date;
      status: string;
      rejection_reason?: string;
      boost_active: boolean;
      views_count: number;
      leads_count: number;
      created_at: string | Date;
      updated_at: string | Date;
      last_confirmed_at?: string | Date;
    };
  };

  pg_posting_packs: {
    Row: {
      id: string;
      profile_id: string;
      postings_remaining: number;
      last_pack_type?: string;
      last_purchased_at?: string | Date;
      last_order_id?: string;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  pg_property: {
    Row: {
      id: string;
      owner_id: string;
      name: string;
      address_line: string;
      locality: string;
      city: string;
      pincode?: string;
      latitude?: number;
      longitude?: number;
      gender_preference: string;
      property_type: string;
      total_capacity: number;
      amenities: any;
      house_rules?: string;
      police_verified: boolean;
      listing_status: string;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  pg_receipt: {
    Row: {
      id: string;
      pg_payment_record_id: string;
      receipt_number: string;
      issued_at: string | Date;
      pdf_url?: string;
      payment_period?: string;
      payment_mode?: string;
      upi_reference?: string;
      gst_status: string;
      owner_display_name?: string;
      owner_pan_stub?: string;
    };
  };

  pg_rent_agreement: {
    Row: {
      id: string;
      pg_property_id: string;
      pg_tenant_id: string;
      agreement_start: string | Date;
      agreement_end?: string | Date;
      monthly_rent: number;
      deposit_amount: number;
      notice_period_days: number;
      signed_by_owner: boolean;
      signed_by_tenant: boolean;
      signed_at?: string | Date;
      document_url?: string;
      created_at: string | Date;
    };
  };

  pg_room: {
    Row: {
      id: string;
      pg_property_id: string;
      room_number?: string;
      room_type: string;
      capacity: number;
      floor_number?: number;
      has_attached_bath: boolean;
      amenities: any;
      created_at: string | Date;
    };
  };

  pg_seeker_preferences: {
    Row: {
      profile_id: string;
      preferred_city?: string;
      preferred_localities?: any;
      gender_policy?: string;
      max_budget?: number;
      move_in_window?: string;
      sharing_preference?: string;
      updated_at: string | Date;
    };
  };

  pg_tenant: {
    Row: {
      id: string;
      pg_property_id: string;
      pg_bed_id?: string;
      user_id?: string;
      tenant_name: string;
      phone?: string;
      emergency_contact?: string;
      id_type?: string;
      id_verified: boolean;
      move_in_date: string | Date;
      move_out_date?: string | Date;
      status: string;
      created_at: string | Date;
      rent_amount?: number;
      rent_due_day?: number;
      payment_status: string;
      lease_end_date?: string | Date;
      whatsapp_opt_in: boolean;
      ndc_url?: string;
      deposit_photo_url?: string;
    };
  };

  pg_vacancy_event: {
    Row: {
      id: string;
      pg_bed_id: string;
      pg_property_id: string;
      event_type: string;
      available_from: string | Date;
      monthly_rent?: number;
      notes?: string;
      created_at: string | Date;
      created_pg_posting_id?: string;
    };
  };

  pincodes: {
    Row: {
      pincode: string;
      city_id: string;
      district_id?: string;
      state_id: string;
      lat?: number;
      lng?: number;
      geo_point?: any;
      delivery_status?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  pricing_rules: {
    Row: {
      id: string;
      action: string;
      credit_cost: number;
      cash_price?: number;
      region_id?: string;
      user_type?: string;
      discount_percentage?: number;
      surge_pricing_multiplier?: number;
      effective_from?: string | Date;
      effective_until?: string | Date;
      description?: string;
      is_active?: boolean;
      priority?: number;
      created_at?: string | Date;
    };
  };

  profiles: {
    Row: {
      id: string;
      username?: string;
      full_name?: string;
      email?: string;
      phone?: string;
      avatar_url?: string;
      user_type?: string;
      role?: string;
      bio?: string;
      company_name?: string;
      license_number?: string;
      years_experience?: number;
      specialties?: any;
      languages?: any;
      is_verified?: boolean;
      is_featured?: boolean;
      account_status?: string;
      website_url?: string;
      social_links?: any;
      office_address?: string;
      office_city?: string;
      office_state?: string;
      office_pincode?: string;
      properties_listed?: number;
      properties_sold?: number;
      total_ratings?: number;
      average_rating?: number;
      created_at?: string | Date;
      updated_at?: string | Date;
      last_login?: string | Date;
      last_active?: string | Date;
      whatsapp_verified?: boolean;
      email_verified?: boolean;
      phone_verified?: boolean;
      kyc_status?: string;
      kyc_documents?: any;
      preferred_localities?: any;
      search_preferences?: any;
      total_inquiries_sent?: number;
      total_views_received?: number;
      response_time_hours?: number;
      response_rate?: number;
      professional_type?: string;
      is_rera_registered?: boolean;
      rera_registration_number?: string;
      rera_validity_date?: string | Date;
      terms_accepted_at?: string | Date;
      privacy_consent_version?: string;
    };
  };

  projects: {
    Row: {
      id: string;
      builder_id: string;
      name: string;
      slug?: string;
      description?: string;
      project_type?: string;
      status?: string;
      rera_number?: string;
      location: string;
      city: string;
      state: string;
      locality_id?: string;
      latitude?: number;
      longitude?: number;
      total_units?: number;
      available_units?: number;
      total_towers?: number;
      total_floors?: number;
      launch_date?: string | Date;
      possession_date?: string | Date;
      price_range_min?: number;
      price_range_max?: number;
      configurations?: any;
      area_range_min?: number;
      area_range_max?: number;
      amenities?: any;
      images?: any;
      brochure_url?: string;
      video_url?: string;
      view_count?: number;
      inquiry_count?: number;
      is_featured?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
      city_id?: string;
      district_id?: string;
      state_id?: string;
      geo_point?: any;
      geo_quality_score?: number;
    };
  };

  promotional_campaigns: {
    Row: {
      id: string;
      name: string;
      description?: string;
      campaign_type?: string;
      region_ids?: any;
      language_preference?: any;
      credits_reward?: number;
      discount_percentage?: number;
      free_services?: any;
      conditions?: any;
      budget_allocated?: number;
      budget_spent?: number;
      participant_limit?: number;
      current_participants?: number;
      valid_from?: string | Date;
      valid_until?: string | Date;
      is_active?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  properties: {
    Row: {
      id: string;
      pid: string;
      user_id: string;
      agent_id?: string;
      agency_id?: string;
      title: string;
      slug?: string;
      description?: string;
      property_type: string;
      listing_type: string;
      bhk_type?: string;
      ownership_type?: string;
      price: number;
      price_negotiable?: boolean;
      maintenance_cost?: number;
      under_loan?: boolean;
      expected_price?: number;
      price_per_unit_area?: number;
      built_up_area?: number;
      carpet_area?: number;
      plot_area?: number;
      super_built_up_area?: number;
      area_unit: string;
      address?: string;
      landmark?: string;
      city: string;
      locality: string;
      state?: string;
      pincode?: string;
      country?: string;
      latitude?: number;
      longitude?: number;
      google_place_id?: string;
      bedrooms?: number;
      bathrooms?: number;
      balcony_count?: number;
      total_floors?: number;
      floor_number?: number;
      floor_type?: string;
      property_age?: string;
      year_built?: number;
      possession_year?: number;
      facing?: string;
      age_of_construction?: number;
      furnishing?: string;
      kitchen_type?: string;
      flooring_type?: string;
      overlooking?: string;
      rera_registration?: string;
      khata_certificate?: boolean;
      allotment_letter?: boolean;
      sale_deed_certificate?: boolean;
      property_tax_paid?: boolean;
      occupancy_certificate?: boolean;
      lease_years?: number;
      available_from?: string | Date;
      availability_schedule?: string;
      available_start_time?: any;
      available_end_time?: any;
      show_property_by?: string;
      contact_phone: string;
      secondary_phone?: string;
      contact_email?: string;
      whatsapp_number?: string;
      property_code?: string;
      apartment_name?: string;
      developer_name?: string;
      project_name?: string;
      builder_name?: string;
      status?: string;
      is_active?: boolean;
      is_featured?: boolean;
      is_verified?: boolean;
      is_premium?: boolean;
      is_urgent?: boolean;
      is_hot_deal?: boolean;
      view_count?: number;
      favorite_count?: number;
      inquiry_count?: number;
      phone_views_count?: number;
      whatsapp_clicks?: number;
      created_at?: string | Date;
      updated_at?: string | Date;
      published_at?: string | Date;
      sold_rented_at?: string | Date;
      featured_until?: string | Date;
      last_viewed?: string | Date;
      expiry_date?: string | Date;
      meta_title?: string;
      meta_description?: string;
      meta_keywords?: any;
      tags?: any;
      moderation_state: string;
      locality_id?: string;
      builder_id?: string;
      project_id?: string;
      corner_plot?: boolean;
      width_facing?: number;
      boundary_wall?: boolean;
      gated_security?: boolean;
      video_url?: string;
      virtual_tour_url?: string;
      floor_plan_images?: any;
      approved_by_bank?: boolean;
      loan_available?: boolean;
      possession_status?: string;
      water_supply?: string;
      electricity_backup?: string;
      lift_available?: boolean;
      reserved_parking?: number;
      open_parking?: number;
      property_facing_road_width?: number;
      govt_approved?: boolean;
      clear_title?: boolean;
      last_viewed_by?: string;
      city_id?: string;
      district_id?: string;
      state_id?: string;
      pincode_fk?: string;
      geo_point?: any;
      geo_quality_score?: number;
      data_freshness_score?: number;
      last_verified_at?: string | Date;
      visibility_status?: string;
      data_provided_by?: string;
      data_confidence_level?: string;
      location_accuracy_level?: string;
      site_visit_handler?: string;
      visit_notice_hours?: number;
      loan_bank_name?: string;
      loan_clearance_status?: string;
      loan_noc_available?: boolean;
      property_tax_paid_till?: string | Date;
      encumbrance_certificate_available?: boolean;
      khata_type?: string;
      boost_active: boolean;
      featured_rank: number;
    };
  };

  property_amenities: {
    Row: {
      id: string;
      property_id: string;
      amenity_category: string;
      amenity_name: string;
      amenity_value?: string;
      is_available?: boolean;
      created_at?: string | Date;
    };
  };

  property_assignments: {
    Row: {
      id: string;
      property_id: string;
      admin_id: string;
      status: string;
      is_active: boolean;
      assigned_at: string | Date;
      reviewed_at?: string | Date;
      due_at: string | Date;
    };
  };

  property_comparisons: {
    Row: {
      id: string;
      user_id?: string;
      property_ids: any;
      comparison_data?: any;
      session_id?: string;
      created_at?: string | Date;
    };
  };

  property_documents: {
    Row: {
      id: string;
      property_id: string;
      document_type: string;
      document_name: string;
      document_url: string;
      document_path?: string;
      is_verified?: boolean;
      verified_by?: string;
      verified_at?: string | Date;
      uploaded_by?: string;
      uploaded_at?: string | Date;
      expiry_date?: string | Date;
    };
  };

  property_images: {
    Row: {
      id: string;
      property_id: string;
      image_url: string;
      image_path?: string;
      image_name?: string;
      caption?: string;
      is_primary?: boolean;
      display_order?: number;
      storage_bucket?: string;
      file_size?: number;
      mime_type?: string;
      uploaded_by?: string;
      uploaded_at?: string | Date;
      media_status?: string;
      deleted_at?: string | Date;
    };
  };

  property_intelligence_scores: {
    Row: {
      id: string;
      property_id: string;
      overall_score: number;
      value_score?: number;
      demand_score?: number;
      quality_score?: number;
      location_score?: number;
      view_velocity?: number;
      inquiry_rate?: number;
      favorite_rate?: number;
      contact_reveal_rate?: number;
      site_visit_conversion_rate?: number;
      avg_time_on_listing_seconds?: number;
      repeat_view_rate?: number;
      share_count?: number;
      comparison_count?: number;
      price_competitiveness?: number;
      price_per_sqft_rank?: number;
      price_trend?: string;
      estimated_market_value?: number;
      value_gap_percentage?: number;
      listing_completeness_score?: number;
      image_quality_score?: number;
      description_quality_score?: number;
      verification_score?: number;
      days_on_market?: number;
      estimated_days_to_sell?: number;
      freshness_score?: number;
      rank_in_locality?: number;
      rank_in_city?: number;
      similar_properties_count?: number;
      better_value_alternatives_count?: number;
      is_hot_property?: boolean;
      hot_property_reasons?: any;
      urgency_score?: number;
      investment_score?: number;
      roi_potential?: number;
      appreciation_potential?: string;
      risk_score?: number;
      risk_factors?: any;
      calculated_at?: string | Date;
    };
  };

  property_leads: {
    Row: {
      id: string;
      property_id: string;
      lead_user_id?: string;
      lead_name?: string;
      lead_phone: string;
      lead_email?: string;
      lead_type?: string;
      source?: string;
      status?: string;
      priority?: string;
      assigned_to?: string;
      budget_min?: number;
      budget_max?: number;
      notes?: string;
      follow_up_date?: string | Date;
      conversion_probability?: number;
      ip_address?: any;
      user_agent?: string;
      created_at?: string | Date;
      last_contacted_at?: string | Date;
      converted_at?: string | Date;
      case_id?: string;
    };
  };

  property_price_history: {
    Row: {
      id: string;
      property_id: string;
      old_price?: number;
      new_price?: number;
      change_reason?: string;
      changed_by?: string;
      changed_at?: string | Date;
    };
  };

  property_ranking_criteria: {
    Row: {
      id: string;
      property_id: string;
      price_value_rating?: number;
      roi_potential_rating?: number;
      appreciation_potential_rating?: number;
      location_desirability_rating?: number;
      connectivity_rating?: number;
      infrastructure_rating?: number;
      safety_rating?: number;
      construction_quality_rating?: number;
      maintenance_rating?: number;
      amenities_rating?: number;
      design_rating?: number;
      legal_clarity_rating?: number;
      documentation_completeness_rating?: number;
      title_clarity_rating?: number;
      demand_rating?: number;
      liquidity_rating?: number;
      competitive_position_rating?: number;
      seller_reputation_rating?: number;
      response_rate_rating?: number;
      negotiation_flexibility_rating?: number;
      investment_rank?: number;
      first_time_buyer_rank?: number;
      family_rank?: number;
      senior_citizen_rank?: number;
      overall_rank_in_locality?: number;
      overall_rank_in_city?: number;
      overall_rank_in_price_range?: number;
      value_percentile?: number;
      demand_percentile?: number;
      quality_percentile?: number;
      deal_quality?: string;
      deal_score?: number;
      urgency_level?: string;
      opportunity_type?: any;
      calculated_at?: string | Date;
    };
  };

  property_reports: {
    Row: {
      id: string;
      property_id: string;
      reported_by?: string;
      report_type: string;
      description: string;
      evidence_urls?: any;
      status?: string;
      reviewed_by?: string;
      action_taken?: string;
      created_at?: string | Date;
      resolved_at?: string | Date;
    };
  };

  property_shares: {
    Row: {
      id: string;
      property_id: string;
      shared_by?: string;
      platform: string;
      ip_address?: any;
      created_at?: string | Date;
    };
  };

  property_valuations: {
    Row: {
      id: string;
      property_id: string;
      estimated_value: number;
      confidence_score?: number;
      valuation_method?: string;
      min_estimated_value?: number;
      max_estimated_value?: number;
      comparable_properties_used?: number;
      comparable_property_ids?: any;
      avg_comparable_price?: number;
      base_price_per_sqft?: number;
      location_adjustment_percentage?: number;
      age_adjustment_percentage?: number;
      amenities_adjustment_percentage?: number;
      condition_adjustment_percentage?: number;
      market_trend_adjustment_percentage?: number;
      locality_avg_price_per_sqft?: number;
      locality_price_growth_1y?: number;
      proximity_premium_percentage?: number;
      property_age_years?: number;
      maintenance_condition?: string;
      unique_selling_points?: any;
      market_temperature?: string;
      seasonal_adjustment?: number;
      land_value?: number;
      construction_value?: number;
      depreciation_value?: number;
      appreciation_value?: number;
      model_version?: string;
      model_accuracy?: number;
      feature_importance?: any;
      validation_status?: string;
      validated_by?: string;
      validation_notes?: string;
      valuation_date: string | Date;
      valid_until?: string | Date;
      created_at?: string | Date;
    };
  };

  property_verifications: {
    Row: {
      id: string;
      property_id: string;
      verification_type: string;
      status?: string;
      verified_by?: string;
      verification_agency?: string;
      verification_number?: string;
      report_url?: string;
      findings?: any;
      valid_until?: string | Date;
      cost?: number;
      created_at?: string | Date;
      verified_at?: string | Date;
      case_id?: string;
    };
  };

  property_views: {
    Row: {
      id: string;
      property_id: string;
      user_id?: string;
      session_id?: string;
      ip_address?: any;
      user_agent?: string;
      referrer?: string;
      view_duration?: number;
      is_phone_view?: boolean;
      viewed_at?: string | Date;
    };
  };

  property_visits: {
    Row: {
      id: string;
      property_id: string;
      visitor_id?: string;
      visit_date: string | Date;
      visit_time?: any;
      visit_type?: string;
      status?: string;
      accompanied_by?: string;
      feedback?: string;
      interest_level?: string;
      created_at?: string | Date;
    };
  };

  referrals: {
    Row: {
      id: string;
      referrer_id: string;
      referred_id?: string;
      referral_code: string;
      referred_email?: string;
      referred_phone?: string;
      status?: string;
      reward_type?: string;
      reward_amount?: number;
      credited_at?: string | Date;
      created_at?: string | Date;
      converted_at?: string | Date;
    };
  };

  refund_request: {
    Row: {
      id: string;
      transaction_id: string;
      requested_by: string;
      amount: number;
      reason: string;
      status: string;
      reviewed_by?: string;
      reviewed_at?: string | Date;
      review_note?: string;
      case_id?: string;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  regions: {
    Row: {
      id: string;
      name: string;
      code: string;
      type: string;
      parent_region_id?: string;
      gst_number?: string;
      gst_rate?: number;
      is_active?: boolean;
      requires_kyc?: boolean;
      market_tier?: number;
      population_estimate?: number;
      currency_code?: string;
      timezone?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  registration_consent_log: {
    Row: {
      id: string;
      user_id: string;
      consent_given_at: string | Date;
      ip_address_hash: string;
      tc_version: string;
      purpose: string;
      created_at: string | Date;
    };
  };

  role_permissions: {
    Row: {
      role_id: string;
      permission_id: string;
    };
  };

  role_platform_access: {
    Row: {
      id: string;
      role_key: string;
      designation_match?: any;
      platform: string;
      access_level: string;
      access_config: any;
      exec_order?: number;
      requires_manual_gate?: boolean;
      gate_owner?: string;
      gate_channel?: string;
      operation_onboard?: string;
      operation_offboard?: string;
      is_active?: boolean;
      approved_by?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  roles: {
    Row: {
      id: string;
      name: string;
      slug?: string;
      category?: string;
      description?: string;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  saved_listings: {
    Row: {
      id: string;
      profile_id: string;
      property_id: string;
      saved_at: string | Date;
    };
  };

  saved_searches: {
    Row: {
      id: string;
      user_id: string;
      search_name: string;
      filters: any;
      notification_enabled?: boolean;
      notification_frequency?: string;
      last_notified_at?: string | Date;
      match_count?: number;
      is_active?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  search_history: {
    Row: {
      id: string;
      user_id?: string;
      search_query: string;
      filters?: any;
      results_count?: number;
      session_id?: string;
      ip_address?: any;
      created_at?: string | Date;
    };
  };

  security_flags: {
    Row: {
      id: string;
      admin_email: string;
      flagged_by: string;
      reason: string;
      status: string;
      resolution_notes?: string;
      resolved_by?: string;
      created_at: string | Date;
      resolved_at?: string | Date;
    };
  };

  spatial_ref_sys: {
    Row: {
      srid: number;
      auth_name?: string;
      auth_srid?: number;
      srtext?: string;
      proj4text?: string;
    };
  };

  states: {
    Row: {
      id: string;
      lgd_code: string;
      name: string;
      iso_code?: string;
      is_active?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  sub_districts: {
    Row: {
      id: string;
      lgd_code?: string;
      district_id: string;
      name: string;
      is_active?: boolean;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  subscription_enrollments: {
    Row: {
      id: string;
      user_id: string;
      plan_id: string;
      status: string;
      price_paid: number;
      credits_allocated: number;
      started_at?: string | Date;
      expires_at: string | Date;
      cancelled_at?: string | Date;
      auto_renew?: boolean;
      purchase_transaction_id?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
      case_id?: string;
    };
  };

  subscription_plans: {
    Row: {
      id: string;
      name: string;
      description?: string;
      plan_code: string;
      base_price: number;
      credits_monthly: number;
      duration_days: number;
      region_id?: string;
      regional_price?: number;
      regional_credits?: number;
      user_type: string;
      min_kyc_level?: number;
      features?: any;
      max_active_listings?: number;
      contact_views_included?: number;
      is_active?: boolean;
      display_order?: number;
      created_at?: string | Date;
      updated_at?: string | Date;
      intro_price_inr?: number;
      intro_price_active: boolean;
      plan_category?: string;
      tier?: string;
      discount_percentage?: number;
      per_listing_cost_inr?: number;
      rera_bonus_inr?: number;
      listing_validity_days?: number;
      tier_a_price_inr?: number;
      tier_b_price_inr?: number;
    };
  };

  support_tickets: {
    Row: {
      id: string;
      ticket_ref: string;
      subject: string;
      body: string;
      status: string;
      priority: string;
      category: string;
      created_by?: string;
      assigned_to?: string;
      resolution_note?: string;
      change_log: any;
      resolved_at?: string | Date;
      first_response_at?: string | Date;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  system_health_metrics: {
    Row: {
      id: string;
      metric_name: string;
      metric_value: number;
      metric_unit?: string;
      context?: any;
      recorded_at?: string | Date;
    };
  };

  system_settings: {
    Row: {
      id: string;
      key: string;
      value?: string;
      description?: string;
      is_active: boolean;
      updated_by?: string;
      updated_at: string | Date;
      created_at: string | Date;
    };
  };

  team_broadcasts: {
    Row: {
      id: string;
      from_team: string;
      subject: string;
      body: string;
      priority: string;
      target_teams?: any;
      expires_at?: string | Date;
      created_at: string | Date;
    };
  };

  team_messages: {
    Row: {
      id: string;
      from_team: string;
      to_team: string;
      message: string;
      response?: string;
      responded_at?: string | Date;
      status: string;
      created_at: string | Date;
    };
  };

  team_registry: {
    Row: {
      id: string;
      team_id: string;
      team_name: string;
      role: string;
      capabilities?: any;
      status: string;
      last_seen_at?: string | Date;
      notes?: string;
      created_at: string | Date;
      updated_at: string | Date;
    };
  };

  transactions: {
    Row: {
      id: string;
      user_id: string;
      type: string;
      amount_cash?: number;
      amount_credits?: number;
      region_id?: string;
      pricing_rule_id?: string;
      gst_rate?: number;
      gst_amount?: number;
      gst_number?: string;
      reference_id?: string;
      reference_type?: string;
      description: string;
      gateway?: string;
      gateway_transaction_id?: string;
      gateway_response?: any;
      coupon_id?: string;
      discount_applied?: number;
      status: string;
      failure_reason?: string;
      refunded_at?: string | Date;
      invoice_number?: string;
      invoice_generated?: boolean;
      ip_address?: any;
      user_agent?: string;
      metadata?: any;
      created_at?: string | Date;
      updated_at?: string | Date;
      lead_id?: string;
      builder_id?: string;
      project_id?: string;
      case_id?: string;
      initiated_by?: string;
      approved_by?: string;
      reviewed_at?: string | Date;
    };
  };

  undervalued_properties: {
    Row: {
      id: string;
      property_id: string;
      listed_price: number;
      estimated_market_value: number;
      undervaluation_amount: number;
      undervaluation_percentage: number;
      deal_rating?: string;
      savings_potential?: number;
      undervaluation_reasons?: any;
      confidence_level?: string;
      comparable_properties_count?: number;
      data_quality_score?: number;
      locality_price_trend?: string;
      time_to_market_correction_days?: number;
      competition_level?: string;
      investment_opportunity_score?: number;
      risk_adjusted_score?: number;
      expected_appreciation_1y_percentage?: number;
      expected_appreciation_3y_percentage?: number;
      discovered_at?: string | Date;
      algorithm_version?: string;
      manual_verification_status?: string;
      verified_by?: string;
      alert_sent?: boolean;
      alert_sent_to_users?: any;
      expires_at?: string | Date;
      created_at?: string | Date;
    };
  };

  user_favorites: {
    Row: {
      id: string;
      user_id: string;
      property_id: string;
      created_at?: string | Date;
    };
  };

  user_ratings: {
    Row: {
      id: string;
      rated_user_id: string;
      rated_property_id?: string;
      rating_user_id: string;
      rating: number;
      review_title?: string;
      review_text?: string;
      review_response?: string;
      rating_type: string;
      status?: string;
      is_featured?: boolean;
      is_verified_purchase?: boolean;
      helpful_count?: number;
      report_count?: number;
      created_at?: string | Date;
      updated_at?: string | Date;
      responded_at?: string | Date;
    };
  };

  user_regional_preferences: {
    Row: {
      user_id: string;
      primary_region_id?: string;
      active_regions?: any;
      preferred_language?: string;
      preferred_currency?: string;
      receive_regional_offers?: boolean;
      receive_festival_campaigns?: boolean;
      updated_at?: string | Date;
    };
  };

  verification_documents: {
    Row: {
      id: string;
      user_id: string;
      kyc_id?: string;
      document_type: string;
      file_path: string;
      file_hash?: string;
      file_size?: number;
      mime_type?: string;
      status?: string;
      moderation_notes?: string;
      moderated_by?: string;
      moderated_at?: string | Date;
      metadata?: any;
      created_at?: string | Date;
      updated_at?: string | Date;
    };
  };

  verification_gps_tracking: {
    Row: {
      id: string;
      user_id: string;
      session_id: string;
      latitude: number;
      longitude: number;
      accuracy?: number;
      altitude?: number;
      speed?: number;
      heading?: number;
      timestamp: string | Date;
      location_context?: string;
      metadata?: any;
      created_at?: string | Date;
    };
  };

  verification_kyc: {
    Row: {
      id: string;
      user_id: string;
      full_name: string;
      date_of_birth?: string | Date;
      id_number?: string;
      id_type?: string;
      country_of_issue?: string;
      status?: string;
      verified_at?: string | Date;
      verified_by?: string;
      rejection_reason?: string;
      metadata?: any;
      created_at?: string | Date;
      updated_at?: string | Date;
      case_id?: string;
    };
  };

  waitlist_entries: {
    Row: {
      id: string;
      email: string;
      tool_slug: string;
      created_at: string | Date;
    };
  };

  wallets: {
    Row: {
      id: string;
      user_id: string;
      balance: number;
      region_specific_credits?: any;
      lifetime_credits_purchased?: number;
      lifetime_credits_spent?: number;
      lifetime_cash_spent?: number;
      last_transaction_region_id?: string;
      created_at?: string | Date;
      updated_at?: string | Date;
      case_id?: string;
    };
  };

}
