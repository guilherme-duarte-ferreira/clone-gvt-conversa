// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://cwxwmbvydkusjgfgjcvh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3eHdtYnZ5ZGt1c2pnZmdqY3ZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5NTA0MzUsImV4cCI6MjA0MzUyNjQzNX0.SHcPblRCteY-aozvKU7Lqn3-JX45XD0S6FN2NO9ieRk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);