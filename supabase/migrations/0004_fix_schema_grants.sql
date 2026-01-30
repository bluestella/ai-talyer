GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;

GRANT INSERT ON public.leads TO anon;
GRANT ALL PRIVILEGES ON public.leads TO authenticated;

