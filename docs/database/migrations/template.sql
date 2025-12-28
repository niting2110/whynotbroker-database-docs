-- Database Migration Template
-- File: migrations/YYYYMMDD_description.sql
-- Generated: 2025-12-28T06:59:12.183Z

-- Start transaction
BEGIN;

-- 1. CREATE TABLE
CREATE TABLE IF NOT EXISTS new_table (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  -- Add your columns here
  column1 VARCHAR(255) NOT NULL,
  column2 INTEGER,
  column3 BOOLEAN DEFAULT FALSE
);

-- Add comments
COMMENT ON TABLE new_table IS 'Description of the table';
COMMENT ON COLUMN new_table.column1 IS 'Description of column1';

-- 2. ALTER TABLE (Add column)
ALTER TABLE existing_table 
ADD COLUMN IF NOT EXISTS new_column VARCHAR(100);

-- 3. CREATE INDEX
CREATE INDEX IF NOT EXISTS idx_existing_table_column 
ON existing_table(column_name);

-- 4. DROP COLUMN (if needed, usually comment out initially)
-- ALTER TABLE existing_table DROP COLUMN old_column;

-- 5. Data migration (if needed)
INSERT INTO new_table (column1, column2, column3)
SELECT old_column1, old_column2, old_column3
FROM old_table
WHERE condition = true;

-- 6. Add foreign key
ALTER TABLE new_table
ADD CONSTRAINT fk_new_table_existing
FOREIGN KEY (existing_id) 
REFERENCES existing_table(id)
ON DELETE CASCADE;

-- 7. Create or update function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 8. Create trigger
DROP TRIGGER IF EXISTS update_new_table_updated_at ON new_table;
CREATE TRIGGER update_new_table_updated_at
  BEFORE UPDATE ON new_table
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Rollback point (for testing)
-- ROLLBACK;

-- Commit changes
COMMIT;

-- Verification queries (run after migration)
SELECT COUNT(*) as new_table_count FROM new_table;
SELECT column_name, data_type FROM information_schema.columns 
WHERE table_name = 'new_table';

-- Migration Notes:
-- 1. Test in development/staging first
-- 2. Backup database before running in production
-- 3. Run during low-traffic periods
-- 4. Monitor performance after migration
-- 5. Update this documentation after successful migration