-- Database Migration Template
-- File: migrations/YYYYMMDD_description.sql
-- Generated: 2026-05-11T09:56:26.462Z

BEGIN;

-- 1. CREATE TABLE
CREATE TABLE IF NOT EXISTS new_table (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  column1 VARCHAR(255) NOT NULL,
  column2 INTEGER
);

-- 2. ADD COLUMN
ALTER TABLE existing_table
ADD COLUMN IF NOT EXISTS new_column VARCHAR(100);

-- 3. CREATE INDEX
CREATE INDEX IF NOT EXISTS idx_table_column
ON table_name(column_name);

-- 4. ADD FOREIGN KEY
ALTER TABLE new_table
ADD CONSTRAINT fk_new_existing
FOREIGN KEY (existing_id)
REFERENCES existing_table(id)
ON DELETE CASCADE;

-- 5. CREATE TRIGGER
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_table_updated_at
  BEFORE UPDATE ON new_table
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

COMMIT;

-- Verification
SELECT COUNT(*) FROM new_table;
