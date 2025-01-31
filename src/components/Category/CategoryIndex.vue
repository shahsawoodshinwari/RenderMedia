<script>
import { useForm } from 'laravel-precognition-vue'
import MazLazyImg from 'maz-ui/components/MazLazyImg'
import { useBookingStore } from '@/stores/bookingStore'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useBookingFormStepsStore } from '@/stores/bookingFormSteps'

export default {
  name: 'CategoryIndex',

  components: {
    MazLazyImg,
  },

  data() {
    return {
      categories: [],
      isLoading: true,
    }
  },

  computed: {
    categoriesStore() {
      return useCategoriesStore()
    },

    bookingStore() {
      return useBookingStore()
    },

    bookingFormStepsStore() {
      return useBookingFormStepsStore()
    },

    fetchCategoriesForm() {
      return useForm('get', '/categories', {})
    },
  },

  mounted() {
    this.fetchCategories()
  },

  methods: {
    isFullSize(index) {
      return index === this.categories.length - 1 && this.categories.length % 2 !== 0
    },

    fetchCategories() {
      this.fetchCategoriesForm.submit().then(async (response) => {
        this.categories = response.data.data
        this.categoriesStore.setCategories(this.categories)
        this.isLoading = false
      })
    },

    next(categoryId) {
      this.bookingStore.setCategoryId(categoryId)
      this.bookingFormStepsStore.setTab('ShootingType')
    },
  },
}
</script>

<template>
  <div class="text-center mb-3">
    <h1 class="fw-medium mb-3">Are You Looking For ?</h1>
    <p class="mb-0">Are you looking for the key to unlock your next opportunity?</p>
  </div>

  <div class="row g-3 justify-content-center">
    <!-- Show skeletons while loading -->
    <template v-if="isLoading">
      <div v-for="n in 4" :key="'skeleton-' + n" class="col-6">
        <div class="placeholder-glow text-center">
          <div class="placeholder col-12 rounded-4 mb-2" style="height: 150px"></div>
          <div class="placeholder py-2 w-75 mx-auto rounded"></div>
        </div>
      </div>
    </template>

    <!-- Show Categories -->
    <template v-else>
      <div
        :class="[isFullSize(index) ? 'col-12' : 'col-6']"
        @click="next(item.id)"
        v-for="(item, index) in categories"
        :key="index"
      >
        <MazLazyImg
          :src="item.cover"
          img-class="img-fluid w-100 rounded-4 mb-1"
          block
          :alt="item.name"
        />
        <div class="text-center text-truncated">
          {{ item.name }}
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
img {
  min-height: 140px;
}
</style>
