<script>
import Image from '@/assets/404.webp'

export default {
  computed: {
    image() {
      return Image
    },
  },
}
</script>
<template>
  <div class="container text-center py-5">
    <h1 class="display-1 text-danger">404</h1>
    <p class="lead text-muted">
      {{ __('not_found.title') }}
    </p>

    <img :src="image" class="img-fluid w-75 mb-4 rounded" :alt="__('not_found.title')" />

    <p class="text-muted">
      {{ __('not_found.description') }}
    </p>

    <!-- Suggest returning to home -->
    <RouterLink to="/" class="btn btn-primary">
      {{ __('not_found.go_back') }}
    </RouterLink>
  </div>
</template>

<style scoped>
h1 {
  font-size: 8rem;
  font-weight: bold;
}

.text-muted {
  color: #6c757d;
}

.btn {
  margin-top: 20px;
}

img {
  filter: hue-rotate(327deg);
  background-color: #ffebcd24;
}
</style>
