<script>
import FilmingLocation from '@/assets/Filming-Location.png';
import FilmingLocationBackground from '@/assets/Filming-Location-Background.png';

export default {
  name: 'FilmingLocation',
  data() {
    return {
      filmingLocation: FilmingLocation,
      filmingLocationBg: FilmingLocationBackground,
    };
  },
};
</script>
<template>
  <img :src="filmingLocationBg" class="img-fluid" alt="Filming Location Bg">
  <div class="text-center mb-3">
    <img :src="filmingLocation" alt="Filming Location" />
  </div>

  <div class="text-center mb-3">
    <h1 class="fw-medium">Filming Location</h1>
  </div>
</template>
