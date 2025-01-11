importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");

// Cache static assets at install
workbox.precaching.precacheAndRoute([
  { url: '/offline', revision: '1.2.2' },
  { url: '/dark-background.webp', revision: '1.0.1' },
  { url: '/auth/verify-otp-banner.webp', revision: '1.0.1' },
  { url: '/no-connection.png', revision: '1.0.1' },
]);

// Cache images with a Cache First strategy
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: '_images-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache images for 30 days
      }),
    ],
  })
);

// Offline Fallback Page
const CACHE = "pwabuilder-page";
const offlineFallbackPage = "/offline";

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))  // Cache offline page
  );
});

// Enable navigation preload if supported
if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

// Fallback to offline page for navigation requests if offline
workbox.routing.registerRoute(
  ({ request }) => request.mode === 'navigate',
  new workbox.strategies.NetworkOnly({
    plugins: [
      new workbox.backgroundSync.BackgroundSyncPlugin('offline-queue', {
        maxRetentionTime: 24 * 60, // Retry for max of 24 Hours
      }),
    ],
  })
);

// Handle push notifications
self.addEventListener('push', (event) => {
  console.log('Received a push message', event);

  // Check if there is any data with the push event
  if (event.data) {
    const data = event.data.json();  // Parse the data as JSON
    const title = data.title || 'Notification Title';
    const options = {
      body: data.message || 'Notification Body Text',
      icon: data.icon || '/android-chrome-512x512.png',
      badge: data.badge || '/favicon-16x16.png',
    };

    // Show notification using the data received from the push event
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  } else {
    // Fallback if there is no data with the push event
    const title = 'Default Title';
    const options = {
      body: 'Default body text',
      icon: '/android-chrome-512x512.png',
    };

    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});

// Cache fallback for document requests (offline)
workbox.routing.setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {
    return caches.match('/offline');
  }
  return Response.error();
});

// Handle skip waiting (optional for fast updates)
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
