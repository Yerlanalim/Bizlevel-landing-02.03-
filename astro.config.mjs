// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://bizlevel-landing-02-03-hp0admwjl-yerlanalims-projects.vercel.app',
  base: '/',
  output: 'static'
});