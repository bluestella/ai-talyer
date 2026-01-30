import { createClient, SupabaseClient } from '@supabase/supabase-js'

let cached: SupabaseClient | null | undefined

export function getSupabaseClient() {
  if (cached !== undefined) return cached

  const url = process.env.SUPABASE_URL
  const anonKey = process.env.SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    cached = null
    return cached
  }

  cached = createClient(url, anonKey)
  return cached
}

