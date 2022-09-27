import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	'https://eowqbxpfhnpcpdpdopgj.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvd3FieHBmaG5wY3BkcGRvcGdqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NDIyMTU4MiwiZXhwIjoxOTc5Nzk3NTgyfQ.2DExX0n1jYFhI7YeOTzUVazGlHNZszOjWXkAx34hT5k'
);

export default supabase;
