<script>
import axiosInstance from '@/libs/axios';

export default {
  name: 'CategoryIndex',
  data() {
    return {
      categories: [],
      isLoading: true,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    isLastItemOdd(index) {
      return index === this.categories.length - 1 && this.categories.length % 2 !== 0;
    },
    async fetchCategories() {
      try {
        const response = await axiosInstance.get('/categories');
        this.categories = response.data.data;
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
  },
};
</script>

<template>
  <div class="row g-3 justify-content-center">

    <!-- Show skeletons while loading -->
    <template v-if="isLoading">
      <div v-for="n in 4" :key="'skeleton-' + n" class="col-6">
        <div class="placeholder-glow text-center">
          <div class="placeholder col-12 rounded-4 mb-2" style="height: 150px;"></div>
          <div class="placeholder py-2 w-75 mx-auto rounded"></div>
        </div>
      </div>
    </template>

    <!-- Show Categories -->
    <template v-else>
      <div :class="['col-6']" v-for="(item, index) in categories" :key="index">
        <img :src="item.cover" class="img-fluid w-100 rounded-4 mb-1" :alt="item.name" />
        <div class="text-center text-truncated">
          {{ item.name }}
        </div>
      </div>
    </template>
  </div>
</template>
