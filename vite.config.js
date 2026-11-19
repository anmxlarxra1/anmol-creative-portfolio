import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using relative base path makes it directly compatible with GitHub Pages subfolder deployment!
  base: './',
  server: {
    port: 3000,
    open: true
  }
});
