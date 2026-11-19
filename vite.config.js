import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configured for GitHub Pages deployment under https://anmxlarxra1.github.io/anmol-creative-portfolio/
  base: '/anmol-creative-portfolio/',
  server: {
    port: 3000,
    open: true
  }
});
