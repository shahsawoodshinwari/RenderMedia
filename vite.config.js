import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pwaConfig from './src/config/pwa'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
// import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      ...pwaConfig,
    }),
    // vueDevTools(),
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
