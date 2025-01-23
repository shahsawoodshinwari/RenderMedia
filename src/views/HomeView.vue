<script>
import metaData from '@/meta/home'
import { useHead } from '@vueuse/head';
import ShootingType from '@/components/Bookings/ShootingType.vue';
import CategoryList from '../components/Category/CategoryIndex.vue'
import { useBookingFormStepsStore } from '@/stores/bookingFormSteps';
import FilmingLocation from '@/components/Bookings/FilmingLocation.vue';

export default {
  name: 'HomeView',
  components: {
    CategoryList,
    ShootingType,
    FilmingLocation,
  },
  data() {
    return {
      currentTab: 'CategoryList',
    };
  },
  computed: {
    bookingFormSteps() {
      return useBookingFormStepsStore();
    },
  },
  methods: {
    metaData() {
      useHead(metaData);
    },
  },
}
</script>

<template>
  <Component :is="bookingFormSteps.currentTab" />
</template>
