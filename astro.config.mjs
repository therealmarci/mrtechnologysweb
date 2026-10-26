import { defineConfig } from 'astro/config';

// SITE / BASE_PATH setzt der Deploy-Workflow (GitHub Pages). Mit eigener Domain: BASE_PATH=/
export default defineConfig({
  site: process.env.SITE || 'https://therealmarci.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
