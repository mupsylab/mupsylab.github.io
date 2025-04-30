import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function generateRandomCode(len: number = 4): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id, {  }) {
          if (id.includes('node_modules')) {
            return 'vendor-' + generateRandomCode();
          }
        }
      },
    },
  },
  server: {
    cors: true,
    host: "0.0.0.0",
    hmr: true,
    proxy: {
      "/api/v1": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      '/api/v2': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        followRedirects: true
      },
      "/ws": {
        target: "ws://localhost:8000",
        ws: true,
        rewriteWsOrigin: true
      }
    }
  }
})