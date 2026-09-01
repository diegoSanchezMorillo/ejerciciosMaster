import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./src/index.html', import.meta.url)),
        contact: fileURLToPath(new URL('./src/contact.html', import.meta.url)),
        privacy: fileURLToPath(new URL('./src/privacy.html', import.meta.url)),
      },
    },
  },
});