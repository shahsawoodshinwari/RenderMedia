const CACHE_VERSION = 'v2'
const CACHE_NAME = `pwa-cache-${CACHE_VERSION}`
const OFFLINE_PAGE = '/offline' // Updated route

// Pre-cache static assets and offline page
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        OFFLINE_PAGE, // Change to the new route
        '/favicon.ico',
        '/robots.txt',
        '/apple-touch-icon.png',
      ]),
    ),
  )
  self.skipWaiting() // Force activation of the new service worker
})

// Remove old caches during activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache)
          }
        }),
      ),
    ),
  )
  self.clients.claim() // Take control of the pages immediately
})

// Intercept fetch requests
self.addEventListener('fetch', (event) => {
  const { request } = event

  // HTML Pages: NetworkFirst strategy
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clonedResponse = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clonedResponse)
          })
          return response
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME)
          return cache.match(OFFLINE_PAGE) // Serve the offline route
        }),
    )
    return
  }

  // Static Assets: CacheFirst strategy
  if (['style', 'script', 'image', 'font'].includes(request.destination)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }
        return fetch(request).then((response) => {
          const clonedResponse = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clonedResponse)
          })
          return response
        })
      }),
    )
    return
  }

  // API Calls: Cache the bookings data and serve it offline
  if (request.url.includes('/bookings')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }
        return fetch(request)
          .then((response) => {
            const clonedResponse = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clonedResponse)
            })
            return response
          })
          .catch(async () => {
            const cache = await caches.open(CACHE_NAME)
            return cache.match(request) // Fallback to cached version when offline
          })
      }),
    )
    return
  }

  // Default: NetworkFirst strategy
  event.respondWith(
    fetch(request)
      .then((response) => {
        const clonedResponse = response.clone()
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, clonedResponse)
        })
        return response
      })
      .catch(async () => {
        const cache = await caches.open(CACHE_NAME)
        return cache.match(request)
      }),
  )
})

// Background Sync for Downloading Data when App is Closed or Offline
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-bookings') {
    event.waitUntil(
      fetch('/bookings')
        .then((response) => response.json())
        .then((data) => {
          // Do something with the bookings data here
          // For example, update the cache or send the data to the server
          caches.open(CACHE_NAME).then((cache) => {
            cache.put('/bookings', new Response(JSON.stringify(data)))
          })
        })
        .catch((error) => {
          console.error('Background Sync failed:', error)
        }),
    )
  }
})
