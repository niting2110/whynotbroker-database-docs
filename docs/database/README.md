# 🏠 WHYNOTBROKER Database Documentation
> **Live, auto-updated database reference**
> Generated: 2026-01-28T06:49:46.137Z
> Schema Hash: `0cfaac04512a218be010cc6f93b5c7dc`

## 📊 Quick Stats
- **Total Tables:** 80
- **Total Views:** 19
- **Total Materialized Views:** 2
- **Total Columns:** 1299
- **Total Relationships:** 142
- **Total Size:** 76.67 MB
- **PostgreSQL Version:** 17.6
- **Last Updated:** 28/1/2026, 12:19:46 pm IST

## 🚀 Getting Started
1. **New Developer?** → Read [QUICK-START.md](./QUICK-START.md)
2. **Need Full Details?** → Read [FULL-SCHEMA.md](./FULL-SCHEMA.md)
3. **Working with AI?** → Use [ai-prompt-template.md](./ai-prompt-template.md)
4. **Schema Issues?** → Check [validation-report.md](./validation-report.md)

## 📋 Table Summary
| Table | Columns | Rows | Size | Comment |
|-------|---------|------|------|---------|
| `admin_audit_logs` | 8 | ~3,833 | 1.26 MB |  |
| `admin_chat` | 4 | ~0 | 0.02 MB |  |
| `admin_leaves` | 17 | ~0 | 0.02 MB |  |
| `admin_messages` | 6 | ~0 | 0.03 MB |  |
| `admin_notices` | 5 | ~0 | 0.03 MB |  |
| `admin_regions` | 6 | ~2 | 0.08 MB |  |
| `admin_roles` | 2 | ~8 | 0.02 MB |  |
| `admin_users` | 7 | ~5 | 0.73 MB |  |
| `admins` | 20 | ~13 | 0.09 MB |  |
| `appointments` | 18 | ~6 | 0.06 MB |  |
| `blog_posts` | 17 | ~100 | 0.10 MB |  |
| `builders` | 28 | ~50 | 0.13 MB |  |
| `campaign_participants` | 9 | ~0 | 0.05 MB | "Track user participation in ca..." |
| `cities` | 14 | ~52 | 0.20 MB | "Normalized city master with ge..." |
| `coupon_usage` | 9 | ~0 | 0.04 MB | "Track coupon redemptions by us..." |
| `coupons` | 23 | ~0 | 0.13 MB | "Discount coupons with regional..." |
| `credit_packages` | 17 | ~0 | 0.06 MB | "Pre-paid credit packages with ..." |
| `districts` | 7 | ~0 | 0.06 MB | "Indian districts linked to LGD..." |
| `hot_properties` | 25 | ~3 | 0.09 MB | "Real-time tracking of trending..." |
| `leave_balances` | 6 | ~0 | 0.02 MB |  |
| `leave_types` | 6 | ~3 | 0.03 MB |  |
| `loan_calculations` | 13 | ~0 | 0.02 MB |  |
| `localities` | 28 | ~115 | 0.26 MB | "Micro-locations within cities ..." |
| `locality_amenities` | 10 | ~20,013 | 6.53 MB |  |
| `location_boundaries` | 10 | ~0 | 0.05 MB | "Polygon boundaries for map hig..." |
| `location_canonical_map` | 10 | ~8 | 0.15 MB | "Maps user input variations to ..." |
| `market_trends` | 16 | ~80,000 | 43.20 MB |  |
| `mdm_aliases` | 19 | ~0 | 0.08 MB | "Scope-aware alias mappings pre..." |
| `mdm_audit_logs` | 13 | ~0 | 0.04 MB | "Complete audit trail for MDM o..." |
| `mdm_curation_requests` | 40 | ~0 | 0.05 MB | "MDM curation request queue wit..." |
| `mdm_merge_history` | 12 | ~0 | 0.03 MB | "Merge operation history with r..." |
| `messages` | 21 | ~5 | 0.06 MB |  |
| `moderation_history` | 10 | ~5 | 0.37 MB |  |
| `notification_preferences` | 13 | ~0 | 0.01 MB |  |
| `notifications` | 10 | ~16 | 0.05 MB |  |
| `overtime_records` | 8 | ~0 | 0.02 MB |  |
| `permissions` | 6 | ~49 | 0.08 MB |  |
| `pincodes` | 10 | ~0 | 0.05 MB | "Indian postal codes with geogr..." |
| `pricing_rules` | 14 | ~0 | 0.08 MB | "Dynamic pricing rules based on..." |
| `profiles` | 46 | ~14 | 0.16 MB |  |
| `projects` | 39 | ~5 | 0.18 MB |  |
| `promotional_campaigns` | 19 | ~0 | 0.09 MB | "Marketing campaigns with regio..." |
| `properties` | 135 | ~5 | 11.13 MB |  |
| `property_amenities` | 7 | ~0 | 0.10 MB |  |
| `property_assignments` | 8 | ~5 | 1.41 MB |  |
| `property_comparisons` | 6 | ~0 | 0.02 MB |  |
| `property_documents` | 12 | ~12 | 0.08 MB |  |
| `property_images` | 15 | ~8 | 0.11 MB |  |
| `property_intelligence_scores` | 41 | ~0 | 0.07 MB | "AI-powered property scoring sy..." |
| `property_leads` | 21 | ~5 | 0.08 MB |  |
| `property_price_history` | 7 | ~5 | 0.06 MB |  |
| `property_ranking_criteria` | 37 | ~0 | 0.06 MB |  |
| `property_repeat_views` | 21 | ~0 | 0.05 MB |  |
| `property_reports` | 11 | ~0 | 0.03 MB |  |
| `property_shares` | 6 | ~0 | 0.02 MB |  |
| `property_valuations` | 37 | ~3 | 0.09 MB | "Automated and manual property ..." |
| `property_verifications` | 13 | ~0 | 0.03 MB |  |
| `property_views` | 10 | ~11 | 0.13 MB |  |
| `property_visits` | 11 | ~0 | 0.03 MB |  |
| `referrals` | 12 | ~0 | 0.04 MB |  |
| `regions` | 15 | ~132 | 0.14 MB | "Master table for regional conf..." |
| `repeat_customer_analytics` | 31 | ~0 | 0.06 MB |  |
| `role_permissions` | 2 | ~27 | 0.02 MB |  |
| `roles` | 2 | ~8 | 0.05 MB |  |
| `saved_searches` | 11 | ~0 | 0.02 MB |  |
| `search_history` | 8 | ~0 | 0.02 MB |  |
| `security_flags` | 9 | ~0 | 0.04 MB | "Tracks flagged admin activitie..." |
| `spatial_ref_sys` | 5 | ~8,500 | 6.98 MB |  |
| `states` | 7 | ~36 | 0.13 MB | "Indian states with LGD (Local ..." |
| `sub_districts` | 7 | ~0 | 0.05 MB | "Sub-districts/Talukas for gran..." |
| `subscription_enrollments` | 13 | ~0 | 0.04 MB |  |
| `subscription_plans` | 19 | ~0 | 0.09 MB | "Recurring subscription plans w..." |
| `system_health_metrics` | 6 | ~2 | 0.05 MB |  |
| `transactions` | 31 | ~48 | 0.23 MB | "All financial transactions wit..." |
| `undervalued_properties` | 27 | ~0 | 0.05 MB | "Identifies properties with exc..." |
| `user_engagement_metrics` | 36 | ~0 | 0.05 MB | "Tracks detailed user behavior ..." |
| `user_favorites` | 4 | ~0 | 0.09 MB |  |
| `user_ratings` | 17 | ~1 | 0.08 MB |  |
| `user_regional_preferences` | 8 | ~1 | 0.07 MB |  |
| `wallets` | 10 | ~14 | 0.07 MB | "User credit wallets with regio..." |

## 🔌 Extensions
- `pg_cron` (v1.6.4)
- `pg_graphql` (v1.5.11)
- `pg_net` (v0.19.5)
- `pg_stat_statements` (v1.11)
- `pg_trgm` (v1.6)
- `pgcrypto` (v1.3)
- `plpgsql` (v1.0)
- `postgis` (v3.3.7)
- `supabase_vault` (v0.3.1)
- `uuid-ossp` (v1.1)
- `wrappers` (v0.5.6)

## ⚙️ Functions
- `_postgis_deprecate(oldname text, newname text, version text)` → void
- `_postgis_index_extent(tbl regclass, col text)` → box2d
- `_postgis_join_selectivity(regclass, text, regclass, text, text DEFAULT '2'::text)` → double precision
- `_postgis_pgsql_version()` → text
- `_postgis_scripts_pgsql_version()` → text
- `_postgis_selectivity(tbl regclass, att_name text, geom geometry, mode text DEFAULT '2'::text)` → double precision
- `_postgis_stats(tbl regclass, att_name text, text DEFAULT '2'::text)` → text
- `_st_3ddfullywithin(geom1 geometry, geom2 geometry, double precision)` → boolean
- `_st_3ddwithin(geom1 geometry, geom2 geometry, double precision)` → boolean
- `_st_3dintersects(geom1 geometry, geom2 geometry)` → boolean
- `_st_asgml(integer, geometry, integer, integer, text, text)` → text
- `_st_asx3d(integer, geometry, integer, integer, text)` → text
- `_st_bestsrid(geography)` → integer
- `_st_bestsrid(geography, geography)` → integer
- `_st_contains(geom1 geometry, geom2 geometry)` → boolean
- `_st_containsproperly(geom1 geometry, geom2 geometry)` → boolean
- `_st_coveredby(geom1 geometry, geom2 geometry)` → boolean
- `_st_coveredby(geog1 geography, geog2 geography)` → boolean
- `_st_covers(geog1 geography, geog2 geography)` → boolean
- `_st_covers(geom1 geometry, geom2 geometry)` → boolean
- `_st_crosses(geom1 geometry, geom2 geometry)` → boolean
- `_st_dfullywithin(geom1 geometry, geom2 geometry, double precision)` → boolean
- `_st_distancetree(geography, geography)` → double precision
- `_st_distancetree(geography, geography, double precision, boolean)` → double precision
- `_st_distanceuncached(geography, geography)` → double precision
- `_st_distanceuncached(geography, geography, double precision, boolean)` → double precision
- `_st_distanceuncached(geography, geography, boolean)` → double precision
- `_st_dwithin(geom1 geometry, geom2 geometry, double precision)` → boolean
- `_st_dwithin(geog1 geography, geog2 geography, tolerance double precision, use_spheroid boolean DEFAULT true)` → boolean
- `_st_dwithinuncached(geography, geography, double precision, boolean)` → boolean
- `_st_dwithinuncached(geography, geography, double precision)` → boolean
- `_st_equals(geom1 geometry, geom2 geometry)` → boolean
- `_st_expand(geography, double precision)` → geography
- `_st_geomfromgml(text, integer)` → geometry
- `_st_intersects(geom1 geometry, geom2 geometry)` → boolean
- `_st_linecrossingdirection(line1 geometry, line2 geometry)` → integer
- `_st_longestline(geom1 geometry, geom2 geometry)` → geometry
- `_st_maxdistance(geom1 geometry, geom2 geometry)` → double precision
- `_st_orderingequals(geom1 geometry, geom2 geometry)` → boolean
- `_st_overlaps(geom1 geometry, geom2 geometry)` → boolean
- `_st_pointoutside(geography)` → geography
- `_st_sortablehash(geom geometry)` → bigint
- `_st_touches(geom1 geometry, geom2 geometry)` → boolean
- `_st_voronoi(g1 geometry, clip geometry DEFAULT NULL::geometry, tolerance double precision DEFAULT 0.0, return_polygons boolean DEFAULT true)` → geometry
- `_st_within(geom1 geometry, geom2 geometry)` → boolean
- `add_credits_to_wallet(p_user_id uuid, p_credits integer, p_transaction_id uuid DEFAULT NULL::uuid)` → boolean
- `addauth(text)` → boolean
- `addgeometrycolumn(catalog_name character varying, schema_name character varying, table_name character varying, column_name character varying, new_srid_in integer, new_type character varying, new_dim integer, use_typmod boolean DEFAULT true)` → text
- `addgeometrycolumn(schema_name character varying, table_name character varying, column_name character varying, new_srid integer, new_type character varying, new_dim integer, use_typmod boolean DEFAULT true)` → text
- `addgeometrycolumn(table_name character varying, column_name character varying, new_srid integer, new_type character varying, new_dim integer, use_typmod boolean DEFAULT true)` → text
- `admin_has_permission(p_permission text)` → boolean
- `assign_property_to_admin(p_property_id uuid)` → uuid
- `audit_admin_role_changes()` → trigger
- `audit_admin_status_change()` → trigger
- `auto_assign_on_pending()` → trigger
- `box(geometry)` → box
- `box(box3d)` → box
- `box2d(box3d)` → box2d
- `box2d(geometry)` → box2d
- `box2d_in(cstring)` → box2d
- `box2d_out(box2d)` → cstring
- `box2df_in(cstring)` → box2df
- `box2df_out(box2df)` → cstring
- `box3d(geometry)` → box3d
- `box3d(box2d)` → box3d
- `box3d_in(cstring)` → box3d
- `box3d_out(box3d)` → cstring
- `box3dtobox(box3d)` → box
- `bulk_moderation_decision(p_property_ids uuid[], p_action text, p_reason text, p_notes text, p_checklist jsonb)` → void
- `bytea(geography)` → bytea
- `bytea(geometry)` → bytea
- `calculate_distance_km(lat1 numeric, lon1 numeric, lat2 numeric, lon2 numeric)` → numeric
- `calculate_gst(p_amount numeric, p_region_id uuid)` → TABLE(gst_rate numeric, gst_amount numeric, total_amount numeric)
- `calculate_price_per_unit()` → trigger
- `calculate_property_intelligence_score(p_property_id uuid)` → numeric
- `calculate_sla_deadline(impact_score numeric)` → timestamp with time zone
- `calculate_user_engagement_score(p_user_id uuid)` → numeric
- `check_geo_quality_health()` → boolean
- `check_property_city_distance()` → trigger
- `checkauth(text, text, text)` → integer
- `checkauth(text, text)` → integer
- `checkauthtrigger()` → trigger
- `contains_2d(geometry, box2df)` → boolean
- `contains_2d(box2df, geometry)` → boolean
- `contains_2d(box2df, box2df)` → boolean
- `create_admin_by_email(p_email text)` → uuid
- `create_wallet_for_new_user()` → trigger
- `deactivate_admin(p_admin_email text)` → void
- `decay_property_freshness()` → integer
- `deduct_credits_from_wallet(p_user_id uuid, p_credits integer, p_transaction_id uuid DEFAULT NULL::uuid)` → boolean
- `disablelongtransactions()` → text
- `dropgeometrycolumn(catalog_name character varying, schema_name character varying, table_name character varying, column_name character varying)` → text
- `dropgeometrycolumn(schema_name character varying, table_name character varying, column_name character varying)` → text
- `dropgeometrycolumn(table_name character varying, column_name character varying)` → text
- `dropgeometrytable(schema_name character varying, table_name character varying)` → text
- `dropgeometrytable(catalog_name character varying, schema_name character varying, table_name character varying)` → text
- `dropgeometrytable(table_name character varying)` → text
- `enablelongtransactions()` → text
- `ensure_primary_image()` → trigger
- `equals(geom1 geometry, geom2 geometry)` → boolean
- `find_canonical_locality(p_raw_name text, p_city_id uuid DEFAULT NULL::uuid)` → TABLE(locality_id uuid, confidence numeric)
- `find_srid(character varying, character varying, character varying)` → integer
- `format_area_display(area numeric, unit text)` → text
- `format_price_display(amount numeric)` → text
- `format_property_location(city text, locality text)` → text
- `generate_pid()` → trigger
- `generate_property_description(prop_num integer)` → text
- `generate_property_title(prop_num integer)` → text
- `geog_brin_inclusion_add_value(internal, internal, internal, internal)` → boolean
- `geography(bytea)` → geography
- `geography(geography, integer, boolean)` → geography
- `geography(geometry)` → geography
- `geography_analyze(internal)` → boolean
- `geography_cmp(geography, geography)` → integer
- `geography_distance_knn(geography, geography)` → double precision
- `geography_eq(geography, geography)` → boolean
- `geography_ge(geography, geography)` → boolean
- `geography_gist_compress(internal)` → internal
- `geography_gist_consistent(internal, geography, integer)` → boolean
- `geography_gist_decompress(internal)` → internal
- `geography_gist_distance(internal, geography, integer)` → double precision
- `geography_gist_penalty(internal, internal, internal)` → internal
- `geography_gist_picksplit(internal, internal)` → internal
- `geography_gist_same(box2d, box2d, internal)` → internal
- `geography_gist_union(bytea, internal)` → internal
- `geography_gt(geography, geography)` → boolean
- `geography_in(cstring, oid, integer)` → geography
- `geography_le(geography, geography)` → boolean
- `geography_lt(geography, geography)` → boolean
- `geography_out(geography)` → cstring
- `geography_overlaps(geography, geography)` → boolean
- `geography_recv(internal, oid, integer)` → geography
- `geography_send(geography)` → bytea
- `geography_spgist_choose_nd(internal, internal)` → void
- `geography_spgist_compress_nd(internal)` → internal
- `geography_spgist_config_nd(internal, internal)` → void
- `geography_spgist_inner_consistent_nd(internal, internal)` → void
- `geography_spgist_leaf_consistent_nd(internal, internal)` → boolean
- `geography_spgist_picksplit_nd(internal, internal)` → void
- `geography_typmod_in(cstring[])` → integer
- `geography_typmod_out(integer)` → cstring
- `geom2d_brin_inclusion_add_value(internal, internal, internal, internal)` → boolean
- `geom3d_brin_inclusion_add_value(internal, internal, internal, internal)` → boolean
- `geom4d_brin_inclusion_add_value(internal, internal, internal, internal)` → boolean
- `geometry(path)` → geometry
- `geometry(bytea)` → geometry
- `geometry(polygon)` → geometry
- `geometry(text)` → geometry
- `geometry(box3d)` → geometry
- `geometry(point)` → geometry
- `geometry(geometry, integer, boolean)` → geometry
- `geometry(box2d)` → geometry
- `geometry(geography)` → geometry
- `geometry_above(geom1 geometry, geom2 geometry)` → boolean
- `geometry_analyze(internal)` → boolean
- `geometry_below(geom1 geometry, geom2 geometry)` → boolean
- `geometry_cmp(geom1 geometry, geom2 geometry)` → integer
- `geometry_contained_3d(geom1 geometry, geom2 geometry)` → boolean
- `geometry_contains(geom1 geometry, geom2 geometry)` → boolean
- `geometry_contains_3d(geom1 geometry, geom2 geometry)` → boolean
- `geometry_contains_nd(geometry, geometry)` → boolean
- `geometry_distance_box(geom1 geometry, geom2 geometry)` → double precision
- `geometry_distance_centroid(geom1 geometry, geom2 geometry)` → double precision
- `geometry_distance_centroid_nd(geometry, geometry)` → double precision
- `geometry_distance_cpa(geometry, geometry)` → double precision
- `geometry_eq(geom1 geometry, geom2 geometry)` → boolean
- `geometry_ge(geom1 geometry, geom2 geometry)` → boolean
- `geometry_gist_compress_2d(internal)` → internal
- `geometry_gist_compress_nd(internal)` → internal
- `geometry_gist_consistent_2d(internal, geometry, integer)` → boolean
- `geometry_gist_consistent_nd(internal, geometry, integer)` → boolean
- `geometry_gist_decompress_2d(internal)` → internal
- `geometry_gist_decompress_nd(internal)` → internal
- `geometry_gist_distance_2d(internal, geometry, integer)` → double precision
- `geometry_gist_distance_nd(internal, geometry, integer)` → double precision
- `geometry_gist_penalty_2d(internal, internal, internal)` → internal
- `geometry_gist_penalty_nd(internal, internal, internal)` → internal
- `geometry_gist_picksplit_2d(internal, internal)` → internal
- `geometry_gist_picksplit_nd(internal, internal)` → internal
- `geometry_gist_same_2d(geom1 geometry, geom2 geometry, internal)` → internal
- `geometry_gist_same_nd(geometry, geometry, internal)` → internal
- `geometry_gist_sortsupport_2d(internal)` → void
- `geometry_gist_union_2d(bytea, internal)` → internal
- `geometry_gist_union_nd(bytea, internal)` → internal
- `geometry_gt(geom1 geometry, geom2 geometry)` → boolean
- `geometry_hash(geometry)` → integer
- `geometry_in(cstring)` → geometry
- `geometry_le(geom1 geometry, geom2 geometry)` → boolean
- `geometry_left(geom1 geometry, geom2 geometry)` → boolean
- `geometry_lt(geom1 geometry, geom2 geometry)` → boolean
- `geometry_out(geometry)` → cstring
- `geometry_overabove(geom1 geometry, geom2 geometry)` → boolean
- `geometry_overbelow(geom1 geometry, geom2 geometry)` → boolean
- `geometry_overlaps(geom1 geometry, geom2 geometry)` → boolean
- `geometry_overlaps_3d(geom1 geometry, geom2 geometry)` → boolean
- `geometry_overlaps_nd(geometry, geometry)` → boolean
- `geometry_overleft(geom1 geometry, geom2 geometry)` → boolean
- `geometry_overright(geom1 geometry, geom2 geometry)` → boolean
- `geometry_recv(internal)` → geometry
- `geometry_right(geom1 geometry, geom2 geometry)` → boolean
- `geometry_same(geom1 geometry, geom2 geometry)` → boolean
- `geometry_same_3d(geom1 geometry, geom2 geometry)` → boolean
- `geometry_same_nd(geometry, geometry)` → boolean
- `geometry_send(geometry)` → bytea
- `geometry_sortsupport(internal)` → void
- `geometry_spgist_choose_2d(internal, internal)` → void
- `geometry_spgist_choose_3d(internal, internal)` → void
- `geometry_spgist_choose_nd(internal, internal)` → void
- `geometry_spgist_compress_2d(internal)` → internal
- `geometry_spgist_compress_3d(internal)` → internal
- `geometry_spgist_compress_nd(internal)` → internal
- `geometry_spgist_config_2d(internal, internal)` → void
- `geometry_spgist_config_3d(internal, internal)` → void
- `geometry_spgist_config_nd(internal, internal)` → void
- `geometry_spgist_inner_consistent_2d(internal, internal)` → void
- `geometry_spgist_inner_consistent_3d(internal, internal)` → void
- `geometry_spgist_inner_consistent_nd(internal, internal)` → void
- `geometry_spgist_leaf_consistent_2d(internal, internal)` → boolean
- `geometry_spgist_leaf_consistent_3d(internal, internal)` → boolean
- `geometry_spgist_leaf_consistent_nd(internal, internal)` → boolean
- `geometry_spgist_picksplit_2d(internal, internal)` → void
- `geometry_spgist_picksplit_3d(internal, internal)` → void
- `geometry_spgist_picksplit_nd(internal, internal)` → void
- `geometry_typmod_in(cstring[])` → integer
- `geometry_typmod_out(integer)` → cstring
- `geometry_within(geom1 geometry, geom2 geometry)` → boolean
- `geometry_within_nd(geometry, geometry)` → boolean
- `geometrytype(geometry)` → text
- `geometrytype(geography)` → text
- `geomfromewkb(bytea)` → geometry
- `geomfromewkt(text)` → geometry
- `get_admin_context(p_user_id uuid)` → TABLE(admin_id uuid, email text, roles text[], permissions text[], permissions_version integer)
- `get_admin_region_filter(p_admin_id uuid)` → TABLE(state_id uuid, city_id uuid, locality_id uuid)
- `get_applicable_coupons(p_user_id uuid, p_region_id uuid)` → TABLE(code text, discount_type text, discount_value numeric, description text, max_discount_amount numeric, min_purchase_amount numeric)
- `get_current_admin_id()` → uuid
- `get_effective_pricing(p_action text, p_region_id uuid, p_user_type text)` → TABLE(credit_cost integer, cash_price numeric, rule_id uuid, description text)
- `get_location_hierarchy(p_locality_id uuid)` → TABLE(locality_name text, city_name text, district_name text, state_name text, full_address text)
- `get_my_permissions()` → TABLE(permission_name text)
- `get_pincode(city text, prop_num integer)` → text
- `get_proj4_from_srid(integer)` → text
- `get_property_city(prop_num integer)` → text
- `get_property_stats(p_property_pid text)` → TABLE(total_views bigint, unique_session_views bigint, total_favorites bigint, unique_user_favorites bigint, last_viewed timestamp with time zone, first_listed timestamp with time zone)
- `get_property_type(prop_num integer)` → text
- `gettransactionid()` → xid
- `gidx_in(cstring)` → gidx
- `gidx_out(gidx)` → cstring
- `gin_extract_query_trgm(text, internal, smallint, internal, internal, internal, internal)` → internal
- `gin_extract_value_trgm(text, internal)` → internal
- `gin_trgm_consistent(internal, smallint, text, integer, internal, internal, internal, internal)` → boolean
- `gin_trgm_triconsistent(internal, smallint, text, integer, internal, internal, internal)` → "char"
- `grant_role_to_admin(p_admin_email text, p_role_name text)` → void
- `gserialized_gist_joinsel_2d(internal, oid, internal, smallint)` → double precision
- `gserialized_gist_joinsel_nd(internal, oid, internal, smallint)` → double precision
- `gserialized_gist_sel_2d(internal, oid, internal, integer)` → double precision
- `gserialized_gist_sel_nd(internal, oid, internal, integer)` → double precision
- `gtrgm_compress(internal)` → internal
- `gtrgm_consistent(internal, text, smallint, oid, internal)` → boolean
- `gtrgm_decompress(internal)` → internal
- `gtrgm_distance(internal, text, smallint, oid, internal)` → double precision
- `gtrgm_in(cstring)` → gtrgm
- `gtrgm_options(internal)` → void
- `gtrgm_out(gtrgm)` → cstring
- `gtrgm_penalty(internal, internal, internal)` → internal
- `gtrgm_picksplit(internal, internal)` → internal
- `gtrgm_same(gtrgm, gtrgm, internal)` → internal
- `gtrgm_union(internal, internal)` → gtrgm
- `handle_new_admin_signup()` → trigger
- `handle_new_user()` → trigger
- `has_permission(p_user_id uuid, p_permission text)` → boolean
- `increment_campaign_participants()` → trigger
- `increment_coupon_usage()` → trigger
- `increment_favorite_count(p_property_id uuid, p_user_id uuid)` → void
- `increment_view_count(p_property_id uuid, p_session_id text DEFAULT NULL::text)` → void
- `increment_view_count_simple(property_id uuid, session_id text)` → void
- `is_admin()` → boolean
- `is_contained_2d(geometry, box2df)` → boolean
- `is_contained_2d(box2df, box2df)` → boolean
- `is_contained_2d(box2df, geometry)` → boolean
- `is_sql_editor()` → boolean
- `json(geometry)` → json
- `jsonb(geometry)` → jsonb
- `lockrow(text, text, text, timestamp without time zone)` → integer
- `lockrow(text, text, text, text, timestamp without time zone)` → integer
- `lockrow(text, text, text, text)` → integer
- `lockrow(text, text, text)` → integer
- `log_admin_creation()` → trigger
- `log_admin_events()` → trigger
- `log_payment_admin_action()` → trigger
- `log_price_change()` → trigger
- `longtransactionsenabled()` → boolean
- `overlaps_2d(box2df, geometry)` → boolean
- `overlaps_2d(geometry, box2df)` → boolean
- `overlaps_2d(box2df, box2df)` → boolean
- `overlaps_geog(gidx, geography)` → boolean
- `overlaps_geog(geography, gidx)` → boolean
- `overlaps_geog(gidx, gidx)` → boolean
- `overlaps_nd(gidx, geometry)` → boolean
- `overlaps_nd(geometry, gidx)` → boolean
- `overlaps_nd(gidx, gidx)` → boolean
- `path(geometry)` → path
- `pgis_asflatgeobuf_finalfn(internal)` → bytea
- `pgis_asflatgeobuf_transfn(internal, anyelement)` → internal
- `pgis_asflatgeobuf_transfn(internal, anyelement, boolean)` → internal
- `pgis_asflatgeobuf_transfn(internal, anyelement, boolean, text)` → internal
- `pgis_asgeobuf_finalfn(internal)` → bytea
- `pgis_asgeobuf_transfn(internal, anyelement)` → internal
- `pgis_asgeobuf_transfn(internal, anyelement, text)` → internal
- `pgis_asmvt_combinefn(internal, internal)` → internal
- `pgis_asmvt_deserialfn(bytea, internal)` → internal
- `pgis_asmvt_finalfn(internal)` → bytea
- `pgis_asmvt_serialfn(internal)` → bytea
- `pgis_asmvt_transfn(internal, anyelement, text, integer)` → internal
- `pgis_asmvt_transfn(internal, anyelement, text, integer, text, text)` → internal
- `pgis_asmvt_transfn(internal, anyelement, text, integer, text)` → internal
- `pgis_asmvt_transfn(internal, anyelement, text)` → internal
- `pgis_asmvt_transfn(internal, anyelement)` → internal
- `pgis_geometry_accum_transfn(internal, geometry, double precision)` → internal
- `pgis_geometry_accum_transfn(internal, geometry, double precision, integer)` → internal
- `pgis_geometry_accum_transfn(internal, geometry)` → internal
- `pgis_geometry_clusterintersecting_finalfn(internal)` → geometry[]
- `pgis_geometry_clusterwithin_finalfn(internal)` → geometry[]
- `pgis_geometry_collect_finalfn(internal)` → geometry
- `pgis_geometry_makeline_finalfn(internal)` → geometry
- `pgis_geometry_polygonize_finalfn(internal)` → geometry
- `pgis_geometry_union_parallel_combinefn(internal, internal)` → internal
- `pgis_geometry_union_parallel_deserialfn(bytea, internal)` → internal
- `pgis_geometry_union_parallel_finalfn(internal)` → geometry
- `pgis_geometry_union_parallel_serialfn(internal)` → bytea
- `pgis_geometry_union_parallel_transfn(internal, geometry)` → internal
- `pgis_geometry_union_parallel_transfn(internal, geometry, double precision)` → internal
- `point(geometry)` → point
- `polygon(geometry)` → polygon
- `populate_geometry_columns(use_typmod boolean DEFAULT true)` → text
- `populate_geometry_columns(tbl_oid oid, use_typmod boolean DEFAULT true)` → integer
- `postgis_addbbox(geometry)` → geometry
- `postgis_cache_bbox()` → trigger
- `postgis_constraint_dims(geomschema text, geomtable text, geomcolumn text)` → integer
- `postgis_constraint_srid(geomschema text, geomtable text, geomcolumn text)` → integer
- `postgis_constraint_type(geomschema text, geomtable text, geomcolumn text)` → character varying
- `postgis_dropbbox(geometry)` → geometry
- `postgis_extensions_upgrade()` → text
- `postgis_full_version()` → text
- `postgis_geos_noop(geometry)` → geometry
- `postgis_geos_version()` → text
- `postgis_getbbox(geometry)` → box2d
- `postgis_hasbbox(geometry)` → boolean
- `postgis_index_supportfn(internal)` → internal
- `postgis_lib_build_date()` → text
- `postgis_lib_revision()` → text
- `postgis_lib_version()` → text
- `postgis_libjson_version()` → text
- `postgis_liblwgeom_version()` → text
- `postgis_libprotobuf_version()` → text
- `postgis_libxml_version()` → text
- `postgis_noop(geometry)` → geometry
- `postgis_proj_version()` → text
- `postgis_scripts_build_date()` → text
- `postgis_scripts_installed()` → text
- `postgis_scripts_released()` → text
- `postgis_svn_version()` → text
- `postgis_transform_geometry(geom geometry, text, text, integer)` → geometry
- `postgis_type_name(geomname character varying, coord_dimension integer, use_new_name boolean DEFAULT true)` → character varying
- `postgis_typmod_dims(integer)` → integer
- `postgis_typmod_srid(integer)` → integer
- `postgis_typmod_type(integer)` → text
- `postgis_version()` → text
- `postgis_wagyu_version()` → text
- `process_credit_purchase(p_user_id uuid, p_package_id uuid, p_region_id uuid, p_coupon_code text DEFAULT NULL::text, p_gateway text DEFAULT 'razorpay'::text, p_gateway_transaction_id text DEFAULT NULL::text)` → uuid
- `reactivate_admin(p_admin_email text)` → void
- `reassign_overdue_properties()` → void
- `remove_favorite_count(p_property_id uuid, p_user_id uuid)` → void
- `revoke_role_from_admin(p_admin_email text, p_role_name text)` → void
- `set_data_provenance()` → trigger
- `set_limit(real)` → real
- `set_location_accuracy()` → trigger
- `show_limit()` → real
- `show_trgm(text)` → text[]
- `similarity(text, text)` → real
- `similarity_dist(text, text)` → real
- `similarity_op(text, text)` → boolean
- `sla_hours_remaining(deadline timestamp with time zone)` → integer
- `spend_credits_for_action(p_user_id uuid, p_action text, p_region_id uuid, p_reference_id uuid DEFAULT NULL::uuid, p_reference_type text DEFAULT NULL::text)` → uuid
- `spheroid_in(cstring)` → spheroid
- `spheroid_out(spheroid)` → cstring
- `st_3dclosestpoint(geom1 geometry, geom2 geometry)` → geometry
- `st_3ddfullywithin(geom1 geometry, geom2 geometry, double precision)` → boolean
- `st_3ddistance(geom1 geometry, geom2 geometry)` → double precision
- `st_3ddwithin(geom1 geometry, geom2 geometry, double precision)` → boolean
- `st_3dintersects(geom1 geometry, geom2 geometry)` → boolean
- `st_3dlength(geometry)` → double precision
- `st_3dlineinterpolatepoint(geometry, double precision)` → geometry
- `st_3dlongestline(geom1 geometry, geom2 geometry)` → geometry
- `st_3dmakebox(geom1 geometry, geom2 geometry)` → box3d
- `st_3dmaxdistance(geom1 geometry, geom2 geometry)` → double precision
- `st_3dperimeter(geometry)` → double precision
- `st_3dshortestline(geom1 geometry, geom2 geometry)` → geometry
- `st_addmeasure(geometry, double precision, double precision)` → geometry
- `st_addpoint(geom1 geometry, geom2 geometry, integer)` → geometry
- `st_addpoint(geom1 geometry, geom2 geometry)` → geometry
- `st_affine(geometry, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision, double precision)` → geometry
- `st_affine(geometry, double precision, double precision, double precision, double precision, double precision, double precision)` → geometry
- `st_angle(line1 geometry, line2 geometry)` → double precision
- `st_angle(pt1 geometry, pt2 geometry, pt3 geometry, pt4 geometry DEFAULT '0101000000000000000000F87F000000000000F87F'::geometry)` → double precision
- `st_area(text)` → double precision
- `st_area(geog geography, use_spheroid boolean DEFAULT true)` → double precision
- `st_area(geometry)` → double precision
- `st_area2d(geometry)` → double precision
- `st_asbinary(geometry)` → bytea
- `st_asbinary(geometry, text)` → bytea
- `st_asbinary(geography)` → bytea
- `st_asbinary(geography, text)` → bytea
- `st_asencodedpolyline(geom geometry, nprecision integer DEFAULT 5)` → text
- `st_asewkb(geometry)` → bytea
- `st_asewkb(geometry, text)` → bytea
- `st_asewkt(geometry)` → text
- `st_asewkt(geography)` → text
- `st_asewkt(geometry, integer)` → text
- `st_asewkt(geography, integer)` → text
- `st_asewkt(text)` → text
- `st_asgeojson(text)` → text
- `st_asgeojson(r record, geom_column text DEFAULT ''::text, maxdecimaldigits integer DEFAULT 9, pretty_bool boolean DEFAULT false)` → text
- `st_asgeojson(geom geometry, maxdecimaldigits integer DEFAULT 9, options integer DEFAULT 8)` → text
- `st_asgeojson(geog geography, maxdecimaldigits integer DEFAULT 9, options integer DEFAULT 0)` → text
- `st_asgml(geog geography, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0, nprefix text DEFAULT 'gml'::text, id text DEFAULT ''::text)` → text
- `st_asgml(geom geometry, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0)` → text
- `st_asgml(version integer, geog geography, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0, nprefix text DEFAULT 'gml'::text, id text DEFAULT ''::text)` → text
- `st_asgml(text)` → text
- `st_asgml(version integer, geom geometry, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0, nprefix text DEFAULT NULL::text, id text DEFAULT NULL::text)` → text
- `st_ashexewkb(geometry)` → text
- `st_ashexewkb(geometry, text)` → text
- `st_askml(geog geography, maxdecimaldigits integer DEFAULT 15, nprefix text DEFAULT ''::text)` → text
- `st_askml(geom geometry, maxdecimaldigits integer DEFAULT 15, nprefix text DEFAULT ''::text)` → text
- `st_askml(text)` → text
- `st_aslatlontext(geom geometry, tmpl text DEFAULT ''::text)` → text
- `st_asmarc21(geom geometry, format text DEFAULT 'hdddmmss'::text)` → text
- `st_asmvtgeom(geom geometry, bounds box2d, extent integer DEFAULT 4096, buffer integer DEFAULT 256, clip_geom boolean DEFAULT true)` → geometry
- `st_assvg(geom geometry, rel integer DEFAULT 0, maxdecimaldigits integer DEFAULT 15)` → text
- `st_assvg(geog geography, rel integer DEFAULT 0, maxdecimaldigits integer DEFAULT 15)` → text
- `st_assvg(text)` → text
- `st_astext(geometry)` → text
- `st_astext(geography)` → text
- `st_astext(text)` → text
- `st_astext(geography, integer)` → text
- `st_astext(geometry, integer)` → text
- `st_astwkb(geom geometry[], ids bigint[], prec integer DEFAULT NULL::integer, prec_z integer DEFAULT NULL::integer, prec_m integer DEFAULT NULL::integer, with_sizes boolean DEFAULT NULL::boolean, with_boxes boolean DEFAULT NULL::boolean)` → bytea
- `st_astwkb(geom geometry, prec integer DEFAULT NULL::integer, prec_z integer DEFAULT NULL::integer, prec_m integer DEFAULT NULL::integer, with_sizes boolean DEFAULT NULL::boolean, with_boxes boolean DEFAULT NULL::boolean)` → bytea
- `st_asx3d(geom geometry, maxdecimaldigits integer DEFAULT 15, options integer DEFAULT 0)` → text
- `st_azimuth(geog1 geography, geog2 geography)` → double precision
- `st_azimuth(geom1 geometry, geom2 geometry)` → double precision
- `st_bdmpolyfromtext(text, integer)` → geometry
- `st_bdpolyfromtext(text, integer)` → geometry
- `st_boundary(geometry)` → geometry
- `st_boundingdiagonal(geom geometry, fits boolean DEFAULT false)` → geometry
- `st_box2dfromgeohash(text, integer DEFAULT NULL::integer)` → box2d
- `st_buffer(geography, double precision)` → geography
- `st_buffer(geom geometry, radius double precision, quadsegs integer)` → geometry
- `st_buffer(text, double precision)` → geometry
- `st_buffer(text, double precision, integer)` → geometry
- `st_buffer(geography, double precision, text)` → geography
- `st_buffer(text, double precision, text)` → geometry
- `st_buffer(geography, double precision, integer)` → geography
- `st_buffer(geom geometry, radius double precision, options text DEFAULT ''::text)` → geometry
- `st_buildarea(geometry)` → geometry
- `st_centroid(geography, use_spheroid boolean DEFAULT true)` → geography
- `st_centroid(geometry)` → geometry
- `st_centroid(text)` → geometry
- `st_chaikinsmoothing(geometry, integer DEFAULT 1, boolean DEFAULT false)` → geometry
- `st_cleangeometry(geometry)` → geometry
- `st_clipbybox2d(geom geometry, box box2d)` → geometry
- `st_closestpoint(geom1 geometry, geom2 geometry)` → geometry
- `st_closestpointofapproach(geometry, geometry)` → double precision
- `st_clusterintersecting(geometry[])` → geometry[]
- `st_clusterwithin(geometry[], double precision)` → geometry[]
- `st_collect(geom1 geometry, geom2 geometry)` → geometry
- `st_collect(geometry[])` → geometry
- `st_collectionextract(geometry)` → geometry
- `st_collectionextract(geometry, integer)` → geometry
- `st_collectionhomogenize(geometry)` → geometry
- `st_combinebbox(box2d, geometry)` → box2d
- `st_combinebbox(box3d, geometry)` → box3d
- `st_combinebbox(box3d, box3d)` → box3d
- `st_concavehull(param_geom geometry, param_pctconvex double precision, param_allow_holes boolean DEFAULT false)` → geometry
- `st_contains(geom1 geometry, geom2 geometry)` → boolean
- `st_containsproperly(geom1 geometry, geom2 geometry)` → boolean
- `st_convexhull(geometry)` → geometry
- `st_coorddim(geometry geometry)` → smallint
- `st_coveredby(text, text)` → boolean
- `st_coveredby(geom1 geometry, geom2 geometry)` → boolean
- `st_coveredby(geog1 geography, geog2 geography)` → boolean
- `st_covers(text, text)` → boolean
- `st_covers(geog1 geography, geog2 geography)` → boolean
- `st_covers(geom1 geometry, geom2 geometry)` → boolean
- `st_cpawithin(geometry, geometry, double precision)` → boolean
- `st_crosses(geom1 geometry, geom2 geometry)` → boolean
- `st_curvetoline(geom geometry, tol double precision DEFAULT 32, toltype integer DEFAULT 0, flags integer DEFAULT 0)` → geometry
- `st_delaunaytriangles(g1 geometry, tolerance double precision DEFAULT 0.0, flags integer DEFAULT 0)` → geometry
- `st_dfullywithin(geom1 geometry, geom2 geometry, double precision)` → boolean
- `st_difference(geom1 geometry, geom2 geometry, gridsize double precision DEFAULT '-1.0'::numeric)` → geometry
- `st_dimension(geometry)` → integer
- `st_disjoint(geom1 geometry, geom2 geometry)` → boolean
- `st_distance(text, text)` → double precision
- `st_distance(geom1 geometry, geom2 geometry)` → double precision
- `st_distance(geog1 geography, geog2 geography, use_spheroid boolean DEFAULT true)` → double precision
- `st_distancecpa(geometry, geometry)` → double precision
- `st_distancesphere(geom1 geometry, geom2 geometry)` → double precision
- `st_distancesphere(geom1 geometry, geom2 geometry, radius double precision)` → double precision
- `st_distancespheroid(geom1 geometry, geom2 geometry)` → double precision
- `st_distancespheroid(geom1 geometry, geom2 geometry, spheroid)` → double precision
- `st_dump(geometry)` → SETOF geometry_dump
- `st_dumppoints(geometry)` → SETOF geometry_dump
- `st_dumprings(geometry)` → SETOF geometry_dump
- `st_dumpsegments(geometry)` → SETOF geometry_dump
- `st_dwithin(geog1 geography, geog2 geography, tolerance double precision, use_spheroid boolean DEFAULT true)` → boolean
- `st_dwithin(geom1 geometry, geom2 geometry, double precision)` → boolean
- `st_dwithin(text, text, double precision)` → boolean
- `st_endpoint(geometry)` → geometry
- `st_envelope(geometry)` → geometry
- `st_equals(geom1 geometry, geom2 geometry)` → boolean
- `st_estimatedextent(text, text, text)` → box2d
- `st_estimatedextent(text, text)` → box2d
- `st_estimatedextent(text, text, text, boolean)` → box2d
- `st_expand(box box2d, dx double precision, dy double precision)` → box2d
- `st_expand(box2d, double precision)` → box2d
- `st_expand(box3d, double precision)` → box3d
- `st_expand(box box3d, dx double precision, dy double precision, dz double precision DEFAULT 0)` → box3d
- `st_expand(geometry, double precision)` → geometry
- `st_expand(geom geometry, dx double precision, dy double precision, dz double precision DEFAULT 0, dm double precision DEFAULT 0)` → geometry
- `st_exteriorring(geometry)` → geometry
- `st_filterbym(geometry, double precision, double precision DEFAULT NULL::double precision, boolean DEFAULT false)` → geometry
- `st_findextent(text, text, text)` → box2d
- `st_findextent(text, text)` → box2d
- `st_flipcoordinates(geometry)` → geometry
- `st_force2d(geometry)` → geometry
- `st_force3d(geom geometry, zvalue double precision DEFAULT 0.0)` → geometry
- `st_force3dm(geom geometry, mvalue double precision DEFAULT 0.0)` → geometry
- `st_force3dz(geom geometry, zvalue double precision DEFAULT 0.0)` → geometry
- `st_force4d(geom geometry, zvalue double precision DEFAULT 0.0, mvalue double precision DEFAULT 0.0)` → geometry
- `st_forcecollection(geometry)` → geometry
- `st_forcecurve(geometry)` → geometry
- `st_forcepolygonccw(geometry)` → geometry
- `st_forcepolygoncw(geometry)` → geometry
- `st_forcerhr(geometry)` → geometry
- `st_forcesfs(geometry)` → geometry
- `st_forcesfs(geometry, version text)` → geometry
- `st_frechetdistance(geom1 geometry, geom2 geometry, double precision DEFAULT '-1'::integer)` → double precision
- `st_fromflatgeobuf(anyelement, bytea)` → SETOF anyelement
- `st_fromflatgeobuftotable(text, text, bytea)` → void
- `st_generatepoints(area geometry, npoints integer)` → geometry
- `st_generatepoints(area geometry, npoints integer, seed integer)` → geometry
- `st_geogfromtext(text)` → geography
- `st_geogfromwkb(bytea)` → geography
- `st_geographyfromtext(text)` → geography
- `st_geohash(geom geometry, maxchars integer DEFAULT 0)` → text
- `st_geohash(geog geography, maxchars integer DEFAULT 0)` → text
- `st_geomcollfromtext(text, integer)` → geometry
- `st_geomcollfromtext(text)` → geometry
- `st_geomcollfromwkb(bytea)` → geometry
- `st_geomcollfromwkb(bytea, integer)` → geometry
- `st_geometricmedian(g geometry, tolerance double precision DEFAULT NULL::double precision, max_iter integer DEFAULT 10000, fail_if_not_converged boolean DEFAULT false)` → geometry
- `st_geometryfromtext(text, integer)` → geometry
- `st_geometryfromtext(text)` → geometry
- `st_geometryn(geometry, integer)` → geometry
- `st_geometrytype(geometry)` → text
- `st_geomfromewkb(bytea)` → geometry
- `st_geomfromewkt(text)` → geometry
- `st_geomfromgeohash(text, integer DEFAULT NULL::integer)` → geometry
- `st_geomfromgeojson(text)` → geometry
- `st_geomfromgeojson(json)` → geometry
- `st_geomfromgeojson(jsonb)` → geometry
- `st_geomfromgml(text)` → geometry
- `st_geomfromgml(text, integer)` → geometry
- `st_geomfromkml(text)` → geometry
- `st_geomfrommarc21(marc21xml text)` → geometry
- `st_geomfromtext(text, integer)` → geometry
- `st_geomfromtext(text)` → geometry
- `st_geomfromtwkb(bytea)` → geometry
- `st_geomfromwkb(bytea, integer)` → geometry
- `st_geomfromwkb(bytea)` → geometry
- `st_gmltosql(text, integer)` → geometry
- `st_gmltosql(text)` → geometry
- `st_hasarc(geometry geometry)` → boolean
- `st_hausdorffdistance(geom1 geometry, geom2 geometry, double precision)` → double precision
- `st_hausdorffdistance(geom1 geometry, geom2 geometry)` → double precision
- `st_hexagon(size double precision, cell_i integer, cell_j integer, origin geometry DEFAULT '010100000000000000000000000000000000000000'::geometry)` → geometry
- `st_hexagongrid(size double precision, bounds geometry, OUT geom geometry, OUT i integer, OUT j integer)` → SETOF record
- `st_interiorringn(geometry, integer)` → geometry
- `st_interpolatepoint(line geometry, point geometry)` → double precision
- `st_intersection(text, text)` → geometry
- `st_intersection(geography, geography)` → geography
- `st_intersection(geom1 geometry, geom2 geometry, gridsize double precision DEFAULT '-1'::integer)` → geometry
- `st_intersects(geog1 geography, geog2 geography)` → boolean
- `st_intersects(geom1 geometry, geom2 geometry)` → boolean
- `st_intersects(text, text)` → boolean
- `st_isclosed(geometry)` → boolean
- `st_iscollection(geometry)` → boolean
- `st_isempty(geometry)` → boolean
- `st_ispolygonccw(geometry)` → boolean
- `st_ispolygoncw(geometry)` → boolean
- `st_isring(geometry)` → boolean
- `st_issimple(geometry)` → boolean
- `st_isvalid(geometry)` → boolean
- `st_isvalid(geometry, integer)` → boolean
- `st_isvaliddetail(geom geometry, flags integer DEFAULT 0)` → valid_detail
- `st_isvalidreason(geometry)` → text
- `st_isvalidreason(geometry, integer)` → text
- `st_isvalidtrajectory(geometry)` → boolean
- `st_length(geometry)` → double precision
- `st_length(geog geography, use_spheroid boolean DEFAULT true)` → double precision
- `st_length(text)` → double precision
- `st_length2d(geometry)` → double precision
- `st_length2dspheroid(geometry, spheroid)` → double precision
- `st_lengthspheroid(geometry, spheroid)` → double precision
- `st_letters(letters text, font json DEFAULT NULL::json)` → geometry
- `st_linecrossingdirection(line1 geometry, line2 geometry)` → integer
- `st_linefromencodedpolyline(txtin text, nprecision integer DEFAULT 5)` → geometry
- `st_linefrommultipoint(geometry)` → geometry
- `st_linefromtext(text, integer)` → geometry
- `st_linefromtext(text)` → geometry
- `st_linefromwkb(bytea, integer)` → geometry
- `st_linefromwkb(bytea)` → geometry
- `st_lineinterpolatepoint(geometry, double precision)` → geometry
- `st_lineinterpolatepoints(geometry, double precision, repeat boolean DEFAULT true)` → geometry
- `st_linelocatepoint(geom1 geometry, geom2 geometry)` → double precision
- `st_linemerge(geometry)` → geometry
- `st_linemerge(geometry, boolean)` → geometry
- `st_linestringfromwkb(bytea)` → geometry
- `st_linestringfromwkb(bytea, integer)` → geometry
- `st_linesubstring(geometry, double precision, double precision)` → geometry
- `st_linetocurve(geometry geometry)` → geometry
- `st_locatealong(geometry geometry, measure double precision, leftrightoffset double precision DEFAULT 0.0)` → geometry
- `st_locatebetween(geometry geometry, frommeasure double precision, tomeasure double precision, leftrightoffset double precision DEFAULT 0.0)` → geometry
- `st_locatebetweenelevations(geometry geometry, fromelevation double precision, toelevation double precision)` → geometry
- `st_longestline(geom1 geometry, geom2 geometry)` → geometry
- `st_m(geometry)` → double precision
- `st_makebox2d(geom1 geometry, geom2 geometry)` → box2d
- `st_makeenvelope(double precision, double precision, double precision, double precision, integer DEFAULT 0)` → geometry
- `st_makeline(geometry[])` → geometry
- `st_makeline(geom1 geometry, geom2 geometry)` → geometry
- `st_makepoint(double precision, double precision, double precision)` → geometry
- `st_makepoint(double precision, double precision, double precision, double precision)` → geometry
- `st_makepoint(double precision, double precision)` → geometry
- `st_makepointm(double precision, double precision, double precision)` → geometry
- `st_makepolygon(geometry)` → geometry
- `st_makepolygon(geometry, geometry[])` → geometry
- `st_makevalid(geometry)` → geometry
- `st_makevalid(geom geometry, params text)` → geometry
- `st_maxdistance(geom1 geometry, geom2 geometry)` → double precision
- `st_maximuminscribedcircle(geometry, OUT center geometry, OUT nearest geometry, OUT radius double precision)` → record
- `st_memsize(geometry)` → integer
- `st_minimumboundingcircle(inputgeom geometry, segs_per_quarter integer DEFAULT 48)` → geometry
- `st_minimumboundingradius(geometry, OUT center geometry, OUT radius double precision)` → record
- `st_minimumclearance(geometry)` → double precision
- `st_minimumclearanceline(geometry)` → geometry
- `st_mlinefromtext(text, integer)` → geometry
- `st_mlinefromtext(text)` → geometry
- `st_mlinefromwkb(bytea, integer)` → geometry
- `st_mlinefromwkb(bytea)` → geometry
- `st_mpointfromtext(text)` → geometry
- `st_mpointfromtext(text, integer)` → geometry
- `st_mpointfromwkb(bytea)` → geometry
- `st_mpointfromwkb(bytea, integer)` → geometry
- `st_mpolyfromtext(text, integer)` → geometry
- `st_mpolyfromtext(text)` → geometry
- `st_mpolyfromwkb(bytea, integer)` → geometry
- `st_mpolyfromwkb(bytea)` → geometry
- `st_multi(geometry)` → geometry
- `st_multilinefromwkb(bytea)` → geometry
- `st_multilinestringfromtext(text)` → geometry
- `st_multilinestringfromtext(text, integer)` → geometry
- `st_multipointfromtext(text)` → geometry
- `st_multipointfromwkb(bytea)` → geometry
- `st_multipointfromwkb(bytea, integer)` → geometry
- `st_multipolyfromwkb(bytea, integer)` → geometry
- `st_multipolyfromwkb(bytea)` → geometry
- `st_multipolygonfromtext(text, integer)` → geometry
- `st_multipolygonfromtext(text)` → geometry
- `st_ndims(geometry)` → smallint
- `st_node(g geometry)` → geometry
- `st_normalize(geom geometry)` → geometry
- `st_npoints(geometry)` → integer
- `st_nrings(geometry)` → integer
- `st_numgeometries(geometry)` → integer
- `st_numinteriorring(geometry)` → integer
- `st_numinteriorrings(geometry)` → integer
- `st_numpatches(geometry)` → integer
- `st_numpoints(geometry)` → integer
- `st_offsetcurve(line geometry, distance double precision, params text DEFAULT ''::text)` → geometry
- `st_orderingequals(geom1 geometry, geom2 geometry)` → boolean
- `st_orientedenvelope(geometry)` → geometry
- `st_overlaps(geom1 geometry, geom2 geometry)` → boolean
- `st_patchn(geometry, integer)` → geometry
- `st_perimeter(geog geography, use_spheroid boolean DEFAULT true)` → double precision
- `st_perimeter(geometry)` → double precision
- `st_perimeter2d(geometry)` → double precision
- `st_point(double precision, double precision)` → geometry
- `st_point(double precision, double precision, srid integer)` → geometry
- `st_pointfromgeohash(text, integer DEFAULT NULL::integer)` → geometry
- `st_pointfromtext(text, integer)` → geometry
- `st_pointfromtext(text)` → geometry
- `st_pointfromwkb(bytea, integer)` → geometry
- `st_pointfromwkb(bytea)` → geometry
- `st_pointinsidecircle(geometry, double precision, double precision, double precision)` → boolean
- `st_pointm(xcoordinate double precision, ycoordinate double precision, mcoordinate double precision, srid integer DEFAULT 0)` → geometry
- `st_pointn(geometry, integer)` → geometry
- `st_pointonsurface(geometry)` → geometry
- `st_points(geometry)` → geometry
- `st_pointz(xcoordinate double precision, ycoordinate double precision, zcoordinate double precision, srid integer DEFAULT 0)` → geometry
- `st_pointzm(xcoordinate double precision, ycoordinate double precision, zcoordinate double precision, mcoordinate double precision, srid integer DEFAULT 0)` → geometry
- `st_polyfromtext(text, integer)` → geometry
- `st_polyfromtext(text)` → geometry
- `st_polyfromwkb(bytea)` → geometry
- `st_polyfromwkb(bytea, integer)` → geometry
- `st_polygon(geometry, integer)` → geometry
- `st_polygonfromtext(text, integer)` → geometry
- `st_polygonfromtext(text)` → geometry
- `st_polygonfromwkb(bytea, integer)` → geometry
- `st_polygonfromwkb(bytea)` → geometry
- `st_polygonize(geometry[])` → geometry
- `st_project(geog geography, distance double precision, azimuth double precision)` → geography
- `st_quantizecoordinates(g geometry, prec_x integer, prec_y integer DEFAULT NULL::integer, prec_z integer DEFAULT NULL::integer, prec_m integer DEFAULT NULL::integer)` → geometry
- `st_reduceprecision(geom geometry, gridsize double precision)` → geometry
- `st_relate(geom1 geometry, geom2 geometry)` → text
- `st_relate(geom1 geometry, geom2 geometry, integer)` → text
- `st_relate(geom1 geometry, geom2 geometry, text)` → boolean
- `st_relatematch(text, text)` → boolean
- `st_removepoint(geometry, integer)` → geometry
- `st_removerepeatedpoints(geom geometry, tolerance double precision DEFAULT 0.0)` → geometry
- `st_reverse(geometry)` → geometry
- `st_rotate(geometry, double precision, geometry)` → geometry
- `st_rotate(geometry, double precision, double precision, double precision)` → geometry
- `st_rotate(geometry, double precision)` → geometry
- `st_rotatex(geometry, double precision)` → geometry
- `st_rotatey(geometry, double precision)` → geometry
- `st_rotatez(geometry, double precision)` → geometry
- `st_scale(geometry, geometry)` → geometry
- `st_scale(geometry, geometry, origin geometry)` → geometry
- `st_scale(geometry, double precision, double precision, double precision)` → geometry
- `st_scale(geometry, double precision, double precision)` → geometry
- `st_scroll(geometry, geometry)` → geometry
- `st_segmentize(geog geography, max_segment_length double precision)` → geography
- `st_segmentize(geometry, double precision)` → geometry
- `st_seteffectivearea(geometry, double precision DEFAULT '-1'::integer, integer DEFAULT 1)` → geometry
- `st_setpoint(geometry, integer, geometry)` → geometry
- `st_setsrid(geom geometry, srid integer)` → geometry
- `st_setsrid(geog geography, srid integer)` → geography
- `st_sharedpaths(geom1 geometry, geom2 geometry)` → geometry
- `st_shiftlongitude(geometry)` → geometry
- `st_shortestline(geom1 geometry, geom2 geometry)` → geometry
- `st_simplify(geometry, double precision, boolean)` → geometry
- `st_simplify(geometry, double precision)` → geometry
- `st_simplifypolygonhull(geom geometry, vertex_fraction double precision, is_outer boolean DEFAULT true)` → geometry
- `st_simplifypreservetopology(geometry, double precision)` → geometry
- `st_simplifyvw(geometry, double precision)` → geometry
- `st_snap(geom1 geometry, geom2 geometry, double precision)` → geometry
- `st_snaptogrid(geometry, double precision, double precision, double precision, double precision)` → geometry
- `st_snaptogrid(geometry, double precision)` → geometry
- `st_snaptogrid(geom1 geometry, geom2 geometry, double precision, double precision, double precision, double precision)` → geometry
- `st_snaptogrid(geometry, double precision, double precision)` → geometry
- `st_split(geom1 geometry, geom2 geometry)` → geometry
- `st_square(size double precision, cell_i integer, cell_j integer, origin geometry DEFAULT '010100000000000000000000000000000000000000'::geometry)` → geometry
- `st_squaregrid(size double precision, bounds geometry, OUT geom geometry, OUT i integer, OUT j integer)` → SETOF record
- `st_srid(geom geometry)` → integer
- `st_srid(geog geography)` → integer
- `st_startpoint(geometry)` → geometry
- `st_subdivide(geom geometry, maxvertices integer DEFAULT 256, gridsize double precision DEFAULT '-1.0'::numeric)` → SETOF geometry
- `st_summary(geometry)` → text
- `st_summary(geography)` → text
- `st_swapordinates(geom geometry, ords cstring)` → geometry
- `st_symdifference(geom1 geometry, geom2 geometry, gridsize double precision DEFAULT '-1.0'::numeric)` → geometry
- `st_symmetricdifference(geom1 geometry, geom2 geometry)` → geometry
- `st_tileenvelope(zoom integer, x integer, y integer, bounds geometry DEFAULT '0102000020110F00000200000093107C45F81B73C193107C45F81B73C193107C45F81B734193107C45F81B7341'::geometry, margin double precision DEFAULT 0.0)` → geometry
- `st_touches(geom1 geometry, geom2 geometry)` → boolean
- `st_transform(geom geometry, to_proj text)` → geometry
- `st_transform(geometry, integer)` → geometry
- `st_transform(geom geometry, from_proj text, to_srid integer)` → geometry
- `st_transform(geom geometry, from_proj text, to_proj text)` → geometry
- `st_translate(geometry, double precision, double precision)` → geometry
- `st_translate(geometry, double precision, double precision, double precision)` → geometry
- `st_transscale(geometry, double precision, double precision, double precision, double precision)` → geometry
- `st_triangulatepolygon(g1 geometry)` → geometry
- `st_unaryunion(geometry, gridsize double precision DEFAULT '-1.0'::numeric)` → geometry
- `st_union(geom1 geometry, geom2 geometry, gridsize double precision)` → geometry
- `st_union(geometry[])` → geometry
- `st_union(geom1 geometry, geom2 geometry)` → geometry
- `st_voronoilines(g1 geometry, tolerance double precision DEFAULT 0.0, extend_to geometry DEFAULT NULL::geometry)` → geometry
- `st_voronoipolygons(g1 geometry, tolerance double precision DEFAULT 0.0, extend_to geometry DEFAULT NULL::geometry)` → geometry
- `st_within(geom1 geometry, geom2 geometry)` → boolean
- `st_wkbtosql(wkb bytea)` → geometry
- `st_wkttosql(text)` → geometry
- `st_wrapx(geom geometry, wrap double precision, move double precision)` → geometry
- `st_x(geometry)` → double precision
- `st_xmax(box3d)` → double precision
- `st_xmin(box3d)` → double precision
- `st_y(geometry)` → double precision
- `st_ymax(box3d)` → double precision
- `st_ymin(box3d)` → double precision
- `st_z(geometry)` → double precision
- `st_zmax(box3d)` → double precision
- `st_zmflag(geometry)` → smallint
- `st_zmin(box3d)` → double precision
- `strict_word_similarity(text, text)` → real
- `strict_word_similarity_commutator_op(text, text)` → boolean
- `strict_word_similarity_dist_commutator_op(text, text)` → real
- `strict_word_similarity_dist_op(text, text)` → real
- `strict_word_similarity_op(text, text)` → boolean
- `submit_moderation_decision(p_property_id uuid, p_action text, p_reason text, p_notes text, p_checklist jsonb)` → void
- `text(geometry)` → text
- `unlockrows(text)` → integer
- `update_builder_project_counts()` → trigger
- `update_canonical_usage()` → trigger
- `update_city_geo_point()` → trigger
- `update_locality_property_counts()` → trigger
- `update_pincode_geo_point()` → trigger
- `update_updated_at()` → trigger
- `update_updated_at_column()` → trigger
- `update_wallet_timestamp()` → trigger
- `updategeometrysrid(character varying, character varying, character varying, integer)` → text
- `updategeometrysrid(catalogn_name character varying, schema_name character varying, table_name character varying, column_name character varying, new_srid_in integer)` → text
- `updategeometrysrid(character varying, character varying, integer)` → text
- `validate_coupon(p_coupon_code text, p_user_id uuid, p_region_id uuid, p_purchase_amount numeric)` → TABLE(is_valid boolean, discount_amount numeric, message text, coupon_id uuid)
- `word_similarity(text, text)` → real
- `word_similarity_commutator_op(text, text)` → boolean
- `word_similarity_dist_commutator_op(text, text)` → real
- `word_similarity_dist_op(text, text)` → real
- `word_similarity_op(text, text)` → boolean

## 🔗 Key Relationships
- `admin_audit_logs` → `admins` (`admin_audit_logs_admin_id_fkey`)
- `admin_chat` → `admins` (`admin_chat_admin_id_fkey`)
- `admin_leaves` → `admins` (`admin_leaves_admin_id_fkey`)
- `admin_leaves` → `admins` (`admin_leaves_approved_by_id_fkey`)
- `admin_leaves` → `admins` (`admin_leaves_backup_admin_id_fkey`)
- `admin_leaves` → `leave_types` (`admin_leaves_leave_type_id_fkey`)
- `admin_messages` → `admins` (`admin_messages_receiver_id_fkey`)
- `admin_messages` → `admins` (`admin_messages_sender_id_fkey`)
- `admin_regions` → `admins` (`admin_regions_admin_id_fkey`)
- `admin_regions` → `admins` (`admin_regions_assigned_by_fkey`)

*...and 132 more (see [relationships.md](./relationships.md))*

---
*Auto-generated by Team11 Schema Documentation System*