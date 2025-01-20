<script>
import { computed } from 'vue'
import ShootingType from '@/components/Bookings/ShootingType.vue'

export default {
  name: 'ShootingTypeView',
  components: {
    ShootingType,
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
  }
};
</script>
<template>
  <div class="text-center mb-3">
    <h1 class="fw-medium mb-3">Select a Shoot Type</h1>
    <p class="mb-0">Are you looking for the key to unlock your</p>
  </div>
  <ShootingType />
</template>
