CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NULL,
  message TEXT NOT NULL,
  source_page TEXT NULL
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert leads" ON leads;
CREATE POLICY "Public can insert leads"
ON leads
FOR INSERT
TO anon
WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated can read leads" ON leads;
CREATE POLICY "Authenticated can read leads"
ON leads
FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Authenticated can update leads" ON leads;
CREATE POLICY "Authenticated can update leads"
ON leads
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

GRANT INSERT ON leads TO anon;
GRANT ALL PRIVILEGES ON leads TO authenticated;

