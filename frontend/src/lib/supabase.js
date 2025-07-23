import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
	throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(
	'https://tewcfjygvttojrwovion.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRld2NmanlndnR0b2pyd292aW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNjM1OTgsImV4cCI6MjA2ODgzOTU5OH0.VDGMmuANzgzPI1hMC1jGSnQvWMwqBcmMfniCeWRm-O4'
);

export default supabase;
