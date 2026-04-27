import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ismetguzelgun.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
