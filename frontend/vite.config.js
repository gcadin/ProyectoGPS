import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 443,
    proxy: {
      '/api': {
        target: 'https://146.83.198.35:1273', // Asegúrate de tener https:// y la IP correcta
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    host: '0.0.0.0', // Permite accesos externos, si estás ejecutando Vite en un contenedor o servidor remoto
  }
});
