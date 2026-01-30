ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated can read leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated can update leads" ON public.leads;

CREATE POLICY "Public can insert leads"
ON public.leads
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Authenticated can read leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated can update leads"
ON public.leads
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

GRANT INSERT ON public.leads TO anon;
GRANT ALL PRIVILEGES ON public.leads TO authenticated;

