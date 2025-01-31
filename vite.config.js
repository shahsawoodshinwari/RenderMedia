import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: './public/manifest.json',
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{html,js,css,png,jpg,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https?.*\.(html|js|css|png|jpg|svg)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'dynamic-content-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
              },
            },
          },
          {
            urlPattern: /\/bookings/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'bookings-cache',
              expiration: {
                maxEntries: 10, // Cache up to 10 responses
              },
            },
          },
        ],
        backgroundSync: {
          name: 'bookings-sync-queue',
          options: {
            maxRetentionTime: 24 * 60, // Retry for 24 hours if offline
          },
          queues: [
            {
              name: 'bookings-sync-queue',
              urlPattern: /\/bookings/,
              method: 'GET',
            },
          ],
        },
      },
      devOptions: {
        enabled: false,
      },
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
