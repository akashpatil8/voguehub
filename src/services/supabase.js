import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jzdyoiwvkpfixjllhfyg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6ZHlvaXd2a3BmaXhqbGxoZnlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNDE1MDYsImV4cCI6MjAyNjYxNzUwNn0.LZoSZ-azzNuJwYLSuRFrVCkQ5uZgo_Ciy9HA0V5rfxQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
