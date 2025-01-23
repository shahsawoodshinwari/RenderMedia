<script>
import { computed } from 'vue'

export default {
  name: 'FilmingLocationView',
  data() {
    return {
      payload: {
        lat: null,
        lng: null,
        date: null,
        time: null,
      }
    };
  },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  provide() {
    return {
      category: computed(() => this.category)
    };
  },
};
</script>

<template>
  <div>{{ category }}</div>
</template>
