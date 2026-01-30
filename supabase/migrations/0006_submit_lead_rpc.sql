CREATE OR REPLACE FUNCTION public.submit_lead(
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  source_page TEXT
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_id UUID;
BEGIN
  IF name IS NULL OR btrim(name) = '' THEN
    RAISE EXCEPTION 'name is required';
  END IF;

  IF email IS NULL OR btrim(email) = '' THEN
    RAISE EXCEPTION 'email is required';
  END IF;

  IF message IS NULL OR btrim(message) = '' THEN
    RAISE EXCEPTION 'message is required';
  END IF;

  INSERT INTO public.leads (name, email, phone, message, source_page)
  VALUES (
    btrim(name),
    btrim(email),
    NULLIF(btrim(phone), ''),
    btrim(message),
    source_page
  )
  RETURNING id INTO new_id;

  RETURN new_id;
END;
$$;

GRANT EXECUTE ON FUNCTION public.submit_lead(TEXT, TEXT, TEXT, TEXT, TEXT) TO anon;
GRANT EXECUTE ON FUNCTION public.submit_lead(TEXT, TEXT, TEXT, TEXT, TEXT) TO authenticated;

