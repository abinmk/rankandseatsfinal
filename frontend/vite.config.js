import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: process.env.VITE_API_URL, // http://localhost:5001 in development
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    } : undefined,
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
