// WHYNOTBROKER Database Types
// Generated: 2025-12-31T07:01:49.165Z
// Auto-generated - DO NOT EDIT manually

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
    };
    Insert: {
      action: string;
      entity: string;
    };
    Update: {
      admin_id?: string;
      action?: string;
      entity?: string;
      entity_id?: string;
      details?: string;
      ip_address?: any;
    };
  };

  admin_chat: {
    Row: {
      id: string;
      admin_id?: string;
      message: string;
      created_at?: string | Date;
    };
    Insert: {
      message: string;
    };
    Update: {
      admin_id?: string;
      message?: string;
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
    };
    Insert: {
      start_date: any;
      end_date: any;
    };
    Update: {
      admin_id?: string;
      start_date?: any;
      end_date?: any;
      reason?: string;
      backup_admin_id?: string;
      status?: string;
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
    Insert: {
      content: string;
    };
    Update: {
      sender_id?: string;
      receiver_id?: string;
      content?: string;
      is_read?: boolean;
    };
  };

  admin_notices: {
    Row: {
      id: string;
      title: string;
      content: string;
      is_active?: boolean;
      created_at?: string | Date;
    };
    Insert: {
      title: string;
      content: string;
    };
    Update: {
      title?: string;
      content?: string;
      is_active?: boolean;
    };
  };

  admin_roles: {
    Row: {
      admin_id: string;
      role_id: string;
    };
    Insert: {
    };
    Update: {
      admin_id?: string;
      role_id?: string;
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
    Insert: {
    };
    Update: {
      is_active?: boolean;
      assigned_count?: number;
      total_reviewed?: number;
      last_active_at?: any;
      updated_at?: any;
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
    };
    Insert: {
      email: string;
    };
    Update: {
      user_id?: string;
      email?: string;
      is_active?: boolean;
      permissions_version?: number;
      password_hash?: string;
      full_name?: string;
      last_login_at?: any;
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
    Insert: {
      appointment_date: any;
      appointment_time: any;
    };
    Update: {
      property_id?: string;
      buyer_id?: string;
      seller_id?: string;
      appointment_date?: any;
      appointment_time?: any;
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
      updated_at?: any;
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
    Insert: {
      title: string;
      slug: string;
      content: string;
    };
    Update: {
      pid?: string;
      author_id?: string;
      title?: string;
      slug?: string;
      excerpt?: string;
      content?: string;
      featured_image?: string;
      category?: string;
      tags?: any;
      status?: string;
      view_count?: number;
      like_count?: number;
      comment_count?: number;
      published_at?: any;
      updated_at?: any;
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
    Insert: {
    };
    Update: {
      campaign_id?: string;
      user_id?: string;
      region_id?: string;
      credits_awarded?: number;
      conditions_met?: any;
      is_completed?: boolean;
      completed_at?: any;
      joined_at?: any;
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
    Insert: {
      discount_applied: number;
      original_amount: number;
      final_amount: number;
    };
    Update: {
      coupon_id?: string;
      user_id?: string;
      transaction_id?: string;
      discount_applied?: number;
      original_amount?: number;
      final_amount?: number;
      region_id?: string;
      used_at?: any;
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
    Insert: {
      code: string;
      discount_type: string;
      discount_value: number;
    };
    Update: {
      code?: string;
      description?: string;
      discount_type?: string;
      discount_value?: number;
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
      valid_from?: any;
      valid_until?: any;
      campaign_id?: string;
      attribution_source?: string;
      is_active?: boolean;
      updated_at?: any;
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
    Insert: {
      name: string;
      credits: number;
      base_price: number;
    };
    Update: {
      name?: string;
      credits?: number;
      base_price?: number;
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
      updated_at?: any;
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
    };
    Insert: {
      message: string;
    };
    Update: {
      sender_id?: string;
      receiver_id?: string;
      property_id?: string;
      subject?: string;
      message?: string;
      message_type?: string;
      is_read?: boolean;
      is_important?: boolean;
      is_archived?: boolean;
      read_at?: any;
      appointment_date?: any;
      appointment_time?: any;
      appointment_status?: string;
      ip_address?: any;
      user_agent?: string;
      updated_at?: any;
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
    };
    Insert: {
      action: string;
    };
    Update: {
      property_id?: string;
      admin_id?: string;
      action?: string;
      reason?: string;
      notes?: string;
      checklist?: any;
      previous_state?: string;
      new_state?: string;
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
    Insert: {
      notification_type: string;
      title: string;
      message: string;
    };
    Update: {
      user_id?: string;
      notification_type?: string;
      title?: string;
      message?: string;
      data?: any;
      is_read?: boolean;
      is_archived?: boolean;
      read_at?: any;
    };
  };

  permissions: {
    Row: {
      id: string;
      name: string;
      domain: any;
      action: any;
      scope: any;
    };
    Insert: {
      name: string;
      domain: any;
      action: any;
      scope: any;
    };
    Update: {
      name?: string;
      domain?: any;
      action?: any;
      scope?: any;
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
    Insert: {
      action: string;
      credit_cost: number;
    };
    Update: {
      action?: string;
      credit_cost?: number;
      cash_price?: number;
      region_id?: string;
      user_type?: string;
      discount_percentage?: number;
      surge_pricing_multiplier?: number;
      effective_from?: any;
      effective_until?: any;
      description?: string;
      is_active?: boolean;
      priority?: number;
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
    };
    Insert: {
    };
    Update: {
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
      updated_at?: any;
      last_login?: any;
      last_active?: any;
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
    Insert: {
      name: string;
    };
    Update: {
      name?: string;
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
      valid_from?: any;
      valid_until?: any;
      is_active?: boolean;
      updated_at?: any;
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
    };
    Insert: {
      title: string;
      property_type: string;
      price: number;
      city: string;
      locality: string;
      contact_phone: string;
    };
    Update: {
      pid?: string;
      user_id?: string;
      agent_id?: string;
      agency_id?: string;
      title?: string;
      slug?: string;
      description?: string;
      property_type?: string;
      listing_type?: string;
      bhk_type?: string;
      ownership_type?: string;
      price?: number;
      price_negotiable?: boolean;
      maintenance_cost?: number;
      under_loan?: boolean;
      expected_price?: number;
      price_per_unit_area?: number;
      built_up_area?: number;
      carpet_area?: number;
      plot_area?: number;
      super_built_up_area?: number;
      area_unit?: string;
      address?: string;
      landmark?: string;
      city?: string;
      locality?: string;
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
      available_from?: any;
      availability_schedule?: string;
      available_start_time?: any;
      available_end_time?: any;
      show_property_by?: string;
      contact_phone?: string;
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
      updated_at?: any;
      published_at?: any;
      sold_rented_at?: any;
      featured_until?: any;
      last_viewed?: any;
      expiry_date?: any;
      meta_title?: string;
      meta_description?: string;
      meta_keywords?: any;
      tags?: any;
      moderation_state?: string;
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
    Insert: {
      amenity_category: string;
      amenity_name: string;
    };
    Update: {
      property_id?: string;
      amenity_category?: string;
      amenity_name?: string;
      amenity_value?: string;
      is_available?: boolean;
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
    Insert: {
      status: string;
      due_at: any;
    };
    Update: {
      property_id?: string;
      admin_id?: string;
      status?: string;
      is_active?: boolean;
      assigned_at?: any;
      reviewed_at?: any;
      due_at?: any;
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
    Insert: {
      document_type: string;
      document_name: string;
      document_url: string;
    };
    Update: {
      property_id?: string;
      document_type?: string;
      document_name?: string;
      document_url?: string;
      document_path?: string;
      is_verified?: boolean;
      verified_by?: string;
      verified_at?: any;
      uploaded_by?: string;
      uploaded_at?: any;
      expiry_date?: any;
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
    };
    Insert: {
      image_url: string;
    };
    Update: {
      property_id?: string;
      image_url?: string;
      image_path?: string;
      image_name?: string;
      caption?: string;
      is_primary?: boolean;
      display_order?: number;
      storage_bucket?: string;
      file_size?: number;
      mime_type?: string;
      uploaded_by?: string;
      uploaded_at?: any;
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
    Insert: {
    };
    Update: {
      property_id?: string;
      old_price?: number;
      new_price?: number;
      change_reason?: string;
      changed_by?: string;
      changed_at?: any;
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
    Insert: {
    };
    Update: {
      property_id?: string;
      user_id?: string;
      session_id?: string;
      ip_address?: any;
      user_agent?: string;
      referrer?: string;
      view_duration?: number;
      is_phone_view?: boolean;
      viewed_at?: any;
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
    Insert: {
      name: string;
      code: string;
      type: string;
    };
    Update: {
      name?: string;
      code?: string;
      type?: string;
      parent_region_id?: string;
      gst_number?: string;
      gst_rate?: number;
      is_active?: boolean;
      requires_kyc?: boolean;
      market_tier?: number;
      population_estimate?: number;
      currency_code?: string;
      timezone?: string;
      updated_at?: any;
    };
  };

  role_permissions: {
    Row: {
      role_id: string;
      permission_id: string;
    };
    Insert: {
    };
    Update: {
      role_id?: string;
      permission_id?: string;
    };
  };

  roles: {
    Row: {
      id: string;
      name: string;
    };
    Insert: {
      name: string;
    };
    Update: {
      name?: string;
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
    Insert: {
      search_query: string;
    };
    Update: {
      user_id?: string;
      search_query?: string;
      filters?: any;
      results_count?: number;
      session_id?: string;
      ip_address?: any;
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
    Insert: {
      admin_email: string;
      flagged_by: string;
      reason: string;
    };
    Update: {
      admin_email?: string;
      flagged_by?: string;
      reason?: string;
      status?: string;
      resolution_notes?: string;
      resolved_by?: string;
      resolved_at?: any;
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
    };
    Insert: {
      credits_allocated: number;
      expires_at: any;
    };
    Update: {
      user_id?: string;
      plan_id?: string;
      status?: string;
      price_paid?: number;
      credits_allocated?: number;
      started_at?: any;
      expires_at?: any;
      cancelled_at?: any;
      auto_renew?: boolean;
      purchase_transaction_id?: string;
      updated_at?: any;
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
    };
    Insert: {
      name: string;
      plan_code: string;
      base_price: number;
      credits_monthly: number;
      user_type: string;
    };
    Update: {
      name?: string;
      description?: string;
      plan_code?: string;
      base_price?: number;
      credits_monthly?: number;
      duration_days?: number;
      region_id?: string;
      regional_price?: number;
      regional_credits?: number;
      user_type?: string;
      min_kyc_level?: number;
      features?: any;
      max_active_listings?: number;
      contact_views_included?: number;
      is_active?: boolean;
      display_order?: number;
      updated_at?: any;
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
    };
    Insert: {
      type: string;
      description: string;
    };
    Update: {
      user_id?: string;
      type?: string;
      amount_cash?: number;
      amount_credits?: number;
      region_id?: string;
      pricing_rule_id?: string;
      gst_rate?: number;
      gst_amount?: number;
      gst_number?: string;
      reference_id?: string;
      reference_type?: string;
      description?: string;
      gateway?: string;
      gateway_transaction_id?: string;
      gateway_response?: any;
      coupon_id?: string;
      discount_applied?: number;
      status?: string;
      failure_reason?: string;
      refunded_at?: any;
      invoice_number?: string;
      invoice_generated?: boolean;
      ip_address?: any;
      user_agent?: string;
      metadata?: any;
      updated_at?: any;
    };
  };

  user_favorites: {
    Row: {
      id: string;
      user_id: string;
      property_id: string;
      created_at?: string | Date;
    };
    Insert: {
    };
    Update: {
      user_id?: string;
      property_id?: string;
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
    Insert: {
      rating: number;
      rating_type: string;
    };
    Update: {
      rated_user_id?: string;
      rated_property_id?: string;
      rating_user_id?: string;
      rating?: number;
      review_title?: string;
      review_text?: string;
      review_response?: string;
      rating_type?: string;
      status?: string;
      is_featured?: boolean;
      is_verified_purchase?: boolean;
      helpful_count?: number;
      report_count?: number;
      updated_at?: any;
      responded_at?: any;
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
    Insert: {
    };
    Update: {
      user_id?: string;
      primary_region_id?: string;
      active_regions?: any;
      preferred_language?: string;
      preferred_currency?: string;
      receive_regional_offers?: boolean;
      receive_festival_campaigns?: boolean;
      updated_at?: any;
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
    };
    Insert: {
    };
    Update: {
      user_id?: string;
      balance?: number;
      region_specific_credits?: any;
      lifetime_credits_purchased?: number;
      lifetime_credits_spent?: number;
      lifetime_cash_spent?: number;
      last_transaction_region_id?: string;
      updated_at?: any;
    };
  };

}
