import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'dist' // Pastikan output di dist
	},
	optimizeDeps: {
		include: ['@supabase/supabase-js']
	},
	resolve: {
		alias: {
			'node:buffer': 'buffer', // Untuk kompatibilitas browser
			'node:stream': 'stream-browserify'
		}
	}
});
