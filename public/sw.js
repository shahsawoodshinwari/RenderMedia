const CACHE_VERSION = 'v3.0.6'
const CACHE_NAME = `pwa-cache-${CACHE_VERSION}`
const OFFLINE_PAGE = '/offline' // Updated route

// Pre-cache static assets and offline page
const ASSETS_REGEX = /\/assets\/.*\.(js|css|png|jpg|svg|webp|woff2|ttf|json)/gi

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Add static assets to cache
      return cache
        .addAll([
          '/offline.html', // Offline page
          '/favicon.ico',
          '/robots.txt',
          '/apple-touch-icon.png',
        ])
        .then(() => {
          // Fetch and cache assets matching the regex
          return fetchAndCacheMatchingAssets(cache, ASSETS_REGEX)
        })
    }),
  )
  self.skipWaiting() // Force activation of the new service worker
})

// Function to fetch and cache assets matching a regex
function fetchAndCacheMatchingAssets(cache, regex) {
  return fetch('/') // Fetch the root HTML or a sitemap
    .then((response) => response.text())
    .then((html) => {
      // Extract asset URLs from the HTML (or other sources)
      const assetUrls = extractAssetUrls(html, regex)
      return Promise.all(
        assetUrls.map((url) =>
          fetch(url)
            .then((response) => {
              if (response.ok) {
                return cache.put(url, response) // Cache the asset
              }
            })
            .catch((error) => {
              console.error(`Failed to cache ${url}:`, error)
            }),
        ),
      )
    })
}

// Function to extract asset URLs from HTML (or other sources)
function extractAssetUrls(html, regex) {
  const urls = []
  const matches = html.matchAll(regex)
  for (const match of matches) {
    urls.push(match[0])
  }
  return urls
}

// Remove old caches during activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const clients = await self.clients.matchAll({ type: 'window' })
      for (const client of clients) {
        client.postMessage({ type: 'NEW_VERSION_AVAILABLE' })
      }
    })(),
  )
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
  self.clients.claim()
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
      caches
        .open(CACHE_NAME)
        .then(async (cache) => {
          const cachedResponse = await cache.match(request)
          if (cachedResponse) {
            // Return cached version but also fetch fresh data in the background
            fetch(request).then((response) => {
              cache.put(request, response.clone())
            })
            return cachedResponse
          }
          return fetch(request).then((response) => {
            cache.put(request, response.clone())
            return response
          })
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME)
          return cache.match(request)
        }),
    )
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
