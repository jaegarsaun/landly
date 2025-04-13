import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const searchLandlords = async (query: string) => {
  const { data, error } = await supabase
    .from('landlords')
    .select('*')
    .or(`name.ilike.%${query}%`)

  if (error) {
    console.error('Search error:', error)
    return []
  }

  console.log('Search results:', data)
  return data
}