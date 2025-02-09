import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
import pwaConfig from './src/config/pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      ...pwaConfig,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'build',
  },
})
