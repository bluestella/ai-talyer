DROP POLICY IF EXISTS "Public can insert leads" ON leads;

CREATE POLICY "Public can insert leads"
ON leads
FOR INSERT
TO public
WITH CHECK (true);

