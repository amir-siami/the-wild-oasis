import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ubpnvozodrarwvksjbag.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVicG52b3pvZHJhcnd2a3NqYmFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5NjkzNTksImV4cCI6MjAzMDU0NTM1OX0.pfeJG-6-Mbr1A62jP5n1HKUZ-_R3KUzUb_iDqNLw6jM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
