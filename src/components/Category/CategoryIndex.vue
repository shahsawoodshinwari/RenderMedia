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
    <h1 class="fw-medium mb-3">{{ __('categories.title') }}</h1>
    <p class="mb-0">{{ __('categories.description') }}</p>
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
        class="col-6 col-md-4 col-lg-3 col-xxl-2 cursor-pointer"
        @click="next(item.id)"
        v-for="(item, index) in categories"
        :key="index"
      >
        <MazLazyImg
          :src="item.cover"
          img-class="img-fluid w-100 rounded-4 mb-1"
          block
          :alt="__(item.name)"
        />
        <div class="text-center text-truncated">
          {{ __(item.name) }}
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
