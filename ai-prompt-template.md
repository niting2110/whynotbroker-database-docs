# AI Prompt Template - WHYNOTBROKER Database
> Use this template when asking AI (ChatGPT, Claude, etc.) about the database

## 📋 Copy & Paste This Template
```
I need help with the WHYNOTBROKER real estate database. Here's the schema:

## Database Overview
- Total tables: 14
- Main table: `properties` (92 columns)
- Technology: Supabase (PostgreSQL) + Next.js

## Key Tables
- `appointments`: 18 columns, ~0 rows
- `blog_posts`: 17 columns, ~0 rows
- `messages`: 18 columns, ~0 rows
- `notifications`: 10 columns, ~0 rows
- `profiles`: 31 columns, ~1 rows
- `properties`: 92 columns, ~9000 rows
- `property_amenities`: 7 columns, ~0 rows
- `property_documents`: 12 columns, ~0 rows
- `property_images`: 13 columns, ~3 rows
- `property_price_history`: 7 columns, ~0 rows
- `property_views`: 10 columns, ~21 rows
- `search_history`: 8 columns, ~0 rows
- `user_favorites`: 4 columns, ~3 rows
- `user_ratings`: 17 columns, ~0 rows

## Important Constraints
1. `bhk_type` MUST be lowercase: '1bhk', '2bhk', '3bhk' (NOT '3 BHK')
2. `property_type`: apartment/house/villa/commercial/land
3. `listing_type`: sale/rent/lease
4. `status`: draft/pending/published/sold/rented
5. Prices are in INR (Indian Rupees)

## Sample Data Structure
```json
{
  "pid": "PROP000001",
  "title": "3 BHK Luxury Apartment",
  "price": 10900000,
  "city": "Bangalore",
  "property_type": "apartment",
  "bhk_type": "3bhk",
  "status": "published"
}
```

Now, help me with: [YOUR QUESTION HERE]
```

## 🎯 How to Use
1. Copy the entire template above
2. Paste into your AI chat
3. Replace "[YOUR QUESTION HERE]" with your actual question
4. The AI now understands your database structure and rules

## 💡 Example Questions
- "Write a SQL query to find all properties in Bangalore priced under ₹1 crore"
- "Create a Next.js API endpoint to fetch featured properties"
- "How do I properly insert a new property with all constraints?"
- "Write a migration to add a new column to the properties table"

---
*Template version: 2025-12-13T23:54:17.113Z*