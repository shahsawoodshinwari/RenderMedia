<script>
import CategoryList from '../components/Category/CategoryIndex.vue'

export default {
  name: 'HomeView',
  components: {
    CategoryList,
  }
}
</script>

<template>
  <div class="text-center mb-3">
    <h1 class="fw-medium mb-3">Are You Looking For ?</h1>
    <p class="mb-0">Are you looking for the key to unlock your next opportunity?</p>
  </div>
  <CategoryList />
</template>
