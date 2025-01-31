<template>
  <RouterView />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.sync.register('sync-bookings')
          .then(() => {
            console.log('Sync registered for bookings!')
          })
          .catch((error) => {
            console.error('Sync registration failed:', error)
          })
      })
    }
  }
}
</script>
