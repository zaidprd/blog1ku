import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare'; // <-- Tambahkan ini

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // <-- Tambahkan ini
  adapter: cloudflare() // <-- Tambahkan ini
});