# Properties Table Cheatsheet

## Insert
```sql
INSERT INTO properties (
  title, description, price, user_id, 
  status, created_at, updated_at
) VALUES (
  'Sample Property', 'Description', 1000000, 'user-uuid',
  'draft', NOW(), NOW()
) RETURNING *;
```

## Query
```sql
SELECT * FROM properties WHERE status = 'published';
```

## Update
```sql
UPDATE properties
SET price = 1100000, updated_at = NOW()
WHERE id = 'property-uuid'
RETURNING *;
```

## Indexes Available
- `idx_properties_active_published`: status, is_active
- `idx_properties_agency_id`: agency_id
- `idx_properties_agent_id`: agent_id
- `idx_properties_area`: built_up_area
- `idx_properties_bedrooms`: bedrooms
- `idx_properties_builder`: builder_id
- `idx_properties_city_active_created`: created_at, city_id
- `idx_properties_city_locality`: city, locality
- `idx_properties_city_new`: city_id
- `idx_properties_city_price_filter`: price, city, status, is_active
- `idx_properties_city_price_status`: price, status, city_id
- `idx_properties_city_status_active`: city, status, is_active
- `idx_properties_created_at`: created_at
- `idx_properties_district`: district_id
- `idx_properties_featured`: is_featured
- `idx_properties_featured_smart`: status, is_active, is_featured, created_at, featured_until
- `idx_properties_freshness`: data_freshness_score
- `idx_properties_geo_point`: geo_point
- `idx_properties_geo_quality`: geo_quality_score
- `idx_properties_khata`: khata_type
- `idx_properties_last_verified`: last_verified_at
- `idx_properties_last_viewed_by`: last_viewed_by
- `idx_properties_listing_type`: listing_type
- `idx_properties_locality`: locality_id
- `idx_properties_locality_status`: status, locality_id
- `idx_properties_location_accuracy`: location_accuracy_level
- `idx_properties_moderation_state`: moderation_state
- `idx_properties_pid`: pid
- `idx_properties_pincode_fk`: pincode_fk
- `idx_properties_price`: price
- `idx_properties_price_status_active`: price, status, is_active
- `idx_properties_project`: project_id
- `idx_properties_property_type`: property_type
- `idx_properties_search`: property_type, price, city, bedrooms, status
- `idx_properties_search_composite`: property_type, price, status, city_id
- `idx_properties_state_new`: state_id
- `idx_properties_status`: status
- `idx_properties_status_created_at`: status, created_at
- `idx_properties_updated_at`: updated_at
- `idx_properties_user_id`: user_id
- `idx_properties_user_status`: user_id, status, created_at
- `idx_properties_visibility`: visibility_status
- `properties_pid_key`: pid
- `properties_pkey`: id
- `properties_property_code_key`: property_code
- `properties_slug_key`: slug
