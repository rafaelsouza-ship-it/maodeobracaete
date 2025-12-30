import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vezkdmxdmbpyviwhmfnm.supabase.co';
const supabaseAnonKey = 'sb_publishable_PMadXe5Qu04pnUjXAjkoPg_S7mXvfbb';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
