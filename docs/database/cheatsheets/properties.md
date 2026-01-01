# Properties Table Cheatsheet

## Insert
```sql
INSERT INTO properties (
  title,
  description,
  location,
  price,
  area_sqft,
  bedrooms,
  bathrooms,
  user_id,
  status,
  created_at,
  updated_at
) VALUES (
  'Sample Property',
  'Description here',
  'Location',
  1000000,
  1200,
  2,
  2,
  'user-uuid',
  'draft',
  NOW(),
  NOW()
) RETURNING *;
```

## Query
```sql
-- Basic select
SELECT * FROM properties WHERE status = 'published';

-- With joins
SELECT 
  p.*,
  u.email as owner_email
FROM properties p
JOIN users u ON p.user_id = u.id
WHERE p.deleted_at IS NULL;

-- Pagination
SELECT * FROM properties 
ORDER BY created_at DESC 
LIMIT 20 OFFSET 0;
```

## Update
```sql
UPDATE properties 
SET 
  price = 1100000,
  updated_at = NOW()
WHERE id = 'property-uuid'
RETURNING *;
```

## Delete (Soft Delete)
```sql
UPDATE properties 
SET deleted_at = NOW()
WHERE id = 'property-uuid';
```

## Indexes Available
- `idx_properties_active_published`: status, is_active
- `idx_properties_agency_id`: agency_id
- `idx_properties_agent_id`: agent_id
- `idx_properties_area`: built_up_area
- `idx_properties_bedrooms`: bedrooms
- `idx_properties_builder`: builder_id
- `idx_properties_city_locality`: city, locality
- `idx_properties_city_price_filter`: price, city, status, is_active
- `idx_properties_city_status_active`: city, status, is_active
- `idx_properties_created_at`: created_at
- `idx_properties_featured`: is_featured
- `idx_properties_featured_smart`: status, is_active, is_featured, created_at, featured_until
- `idx_properties_listing_type`: listing_type
- `idx_properties_locality`: locality_id
- `idx_properties_pid`: pid
- `idx_properties_price`: price
- `idx_properties_price_status_active`: price, status, is_active
- `idx_properties_project`: project_id
- `idx_properties_property_type`: property_type
- `idx_properties_search`: property_type, price, city, bedrooms, status
- `idx_properties_status`: status
- `idx_properties_user_id`: user_id
- `idx_properties_user_status`: user_id, status, created_at
- `properties_pid_key`: pid
- `properties_pkey`: id
- `properties_property_code_key`: property_code
- `properties_slug_key`: slug
