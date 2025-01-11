<script>
export default {
  mounted() {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '../assets/404.webp';
    link.as = 'image';
    document.head.appendChild(link);
  },
}
</script>
<template>
  <div class="container text-center py-5">
    <h1 class="display-1 text-danger">404</h1>
    <p class="lead text-muted">Page Not Found</p>

    <img src="../assets/404.webp" class="img-fluid w-75 mb-4 rounded" alt="404 Not Found">

    <p class="text-muted">
      The resource you are looking for could not be found on the server. It might have been removed or moved to another
      location.
    </p>

    <!-- Suggest returning to home -->
    <router-link to="/" class="btn btn-primary">
      Go to Home
    </router-link>
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
