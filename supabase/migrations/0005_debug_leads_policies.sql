CREATE OR REPLACE FUNCTION public.debug_leads_policies()
RETURNS JSONB
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object(
        'schemaname', schemaname,
        'tablename', tablename,
        'policyname', policyname,
        'permissive', permissive,
        'roles', roles,
        'cmd', cmd,
        'qual', qual,
        'with_check', with_check
      )
    ),
    '[]'::jsonb
  )
  FROM pg_policies
  WHERE schemaname = 'public' AND tablename = 'leads';
$$;

GRANT EXECUTE ON FUNCTION public.debug_leads_policies() TO anon;
GRANT EXECUTE ON FUNCTION public.debug_leads_policies() TO authenticated;

