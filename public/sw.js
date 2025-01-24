const CACHE_VERSION = 'v1'
const CACHE_NAME = `pwa-cache-${CACHE_VERSION}`
const OFFLINE_PAGE = '/offline.html'

// Pre-cache static assets and offline page
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        cache.addAll([OFFLINE_PAGE, '/favicon.ico', '/robots.txt', '/apple-touch-icon.png']),
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
          return cache.match(OFFLINE_PAGE)
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
