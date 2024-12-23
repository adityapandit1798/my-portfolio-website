import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // The correct base path for GitHub Pages
  build: {
    outDir: 'dist', // Output folder for the production build
  },
});
