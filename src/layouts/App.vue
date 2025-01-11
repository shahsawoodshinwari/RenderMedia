<script>
import NavigationBar from '@/components/NavigationBar/NavigaionBar.vue';
import TopNavigationBar from '@/components/TopNavigationBar/Index.vue'

export default {
  components: {
    NavigationBar,
    TopNavigationBar,
  },
};
</script>
<template>
  <div class="container d-flex flex-column svh-100 justify-content-center align-items-center">
    <TopNavigationBar />
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <NavigationBar />
  </div>
</template>
