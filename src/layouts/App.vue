<script>
import NavigationBar from '@/components/NavigationBar/Index.vue';

export default {
  components: {
    NavigationBar,
  },
};
</script>
<template>
  <div class="container d-flex flex-column svh-100 justify-content-center align-items-center">
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <NavigationBar />
  </div>
</template>
