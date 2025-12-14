# Insert Property - Cheatsheet

## Basic Insert
```sql
INSERT INTO properties (
    pid, title, price, city, property_type,
    listing_type, bhk_type, contact_phone,
    user_id, status
) VALUES (
    'PROP' || LPAD(nextval('property_seq')::text, 6, '0'),
    '3 BHK Luxury Apartment in Bangalore',
    10900000,
    'Bangalore',
    'apartment',
    'sale',
    '3bhk',  -- MUST be lowercase
    '9876543210',
    '11111111-1111-1111-1111-111111111111', -- user_id from auth.users
    'draft'
);
```

## Required Fields
- `pid`: Auto-generated format 'PROP000001'
- `title`: Property title (max 200 chars)
- `price`: Numeric, in INR
- `city`: Text
- `property_type`: apartment/house/villa/commercial/land
- `listing_type`: sale/rent/lease
- `contact_phone`: 10-digit Indian number
- `user_id': Must exist in auth.users

## Common Mistakes
❌ `bhk_type='3 BHK'` → ✅ `bhk_type='3bhk'`
❌ `price='1 crore'` → ✅ `price=10000000`
❌ Missing `user_id` → Must link to auth.users