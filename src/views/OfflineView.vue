<script>
import Image from '@/assets/No-Internet-Connection.webp'

export default {
  computed: {
    image() {
      return Image;
    },
  },
};
</script>

<template>
  <div class="text-center">
    <img :src="image" class="img-fluid w-50 mb-3" alt="Offline Image">
    <h1>You're offline</h1>
    <p>Please check your internet connection and try again.</p>
  </div>
</template>
