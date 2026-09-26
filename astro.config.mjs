import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scubro.dev',
  integrations: [sitemap()],
  markdown: {
    // 双主题：日间 github-light，夜间（html.dark）经 global.css 切到 github-dark 配色
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: 'light',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
