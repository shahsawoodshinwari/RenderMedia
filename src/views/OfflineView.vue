<script>
import Image from '@/assets/No-Internet-Connection.webp'

export default {
  computed: {
    image() {
      return Image
    },
  },
}
</script>

<template>
  <div class="text-center">
    <img :src="image" class="img-fluid w-50 mb-3" :alt="__('offline.title')" />
    <h1>{{ __('offline.title') }}</h1>
    <p>{{ __('offline.description') }}</p>
  </div>
</template>
