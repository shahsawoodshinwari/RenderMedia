export default {
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  manifest: '/manifest.json',
  workbox: {
    sourcemap: true,
    cleanupOutdatedCaches: true,
    navigateFallback: '/index.html',
    globPatterns: ['**/*.{html,js,css,png,jpg,svg}'],
    runtimeCaching: [
      {
        urlPattern: /^https?.*\.(html|js|css|png|jpg|svg)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'dynamic-content-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60,
          },
        },
      },
    ],
  },
  devOptions: {
    enabled: true,
  },
}
