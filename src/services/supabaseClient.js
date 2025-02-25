import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tdtpcrbbmvrkenslpigw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkdHBjcmJibXZya2Vuc2xwaWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxODgzNzIsImV4cCI6MjA1NTc2NDM3Mn0.FyywRYGdpi_AJ-mkL3NpMk6WTqHcNiaTcHtJ5mhd_RI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
