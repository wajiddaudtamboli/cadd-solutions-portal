// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://cwllprsxfllipyltkkbm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3bGxwcnN4ZmxsaXB5bHRra2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NzE0NzgsImV4cCI6MjA2NjQ0NzQ3OH0.5-CMuuhqC5vPtCyciGTa1DqajQ7sunbTMzNgj75vq9g";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);