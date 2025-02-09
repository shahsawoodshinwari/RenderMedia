<script>
import OfflineIndicator from '@/components/OfflineIndicator.vue'
import TopNavigationBar from '@/components/TopNavigationBar.vue'
import NavigationBar from '@/components/NavigationBar/NavigationBar.vue'

export default {
  components: {
    NavigationBar,
    TopNavigationBar,
    OfflineIndicator,
  },
}
</script>
<template>
  <div
    class="container-fluid col-md-6 col-lg-5 col-xl-4 px-0 d-flex flex-column svh-100 align-items-center"
  >
    <OfflineIndicator />
    <TopNavigationBar />
    <main class="flex-grow-1 container px-3">
      <RouterView />
    </main>
    <NavigationBar />
  </div>
</template>

<style>
.bg-theme {
  background-color: #001f3f;
}

body {
  background-color: #001f3f;
  background-image: url('../assets/background-icons.svg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
