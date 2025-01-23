<script>
import { useToast } from 'vue-toastification'
import { useBookingStore } from '@/stores/bookingStore'
import NoBookingsFound from '@/assets/no-bookings-found.png'
import { useCategoriesStore } from '@/stores/categoriesStore'
import { useBookingFormStepsStore } from '@/stores/bookingFormSteps'

export default {
  name: 'ShootingType',
  data() {
    return {
      subCategories: [],
      notFound: NoBookingsFound,
      isValid: false,
      payload: {
        sub_category_id: '',
        sub_category_details: '',
      },
      toast: useToast(),
    };
  },
  computed: {
    categoriesStore() {
      return useCategoriesStore();
    },
    bookingStore() {
      return useBookingStore();
    },
    bookingFormSteps() {
      return useBookingFormStepsStore();
    },
    subCategoryDetails() {
      if (!this.selectedSubCategory) return false;

      return this.selectedSubCategory.name.toLowerCase() == 'other';
    },
    selectedSubCategory() {
      return this.subCategories.find(
        (subCategory) => subCategory.id == this.payload.sub_category_id
      );
    },
  },
  mounted() {
    const category = this.categoriesStore.findCategory(this.bookingStore.category_id);
    this.subCategories = category ? category.children : [];
    this.isLoading = false;
  },
  methods: {
    validateForm() {
      if (!this.payload.sub_category_id || (this.subCategoryDetails && !this.payload.sub_category_details)) {
        this.toast.error('Please fill in the required fields.');
        this.isValid = false

        return;
      }

      this.bookingStore.setShootingType(this.payload);
      this.isValid = true;
      this.bookingFormSteps.setTab('FilmingLocation');
    },
  },
};
</script>

<template>
  <div class="text-center mb-3">
    <h1 class="fw-medium mb-3">Select a Shoot Type</h1>
    <p class="mb-0">Are you looking for the key to unlock your</p>
  </div>

  <div v-if="subCategories.length > 0">
    <div class="row gx-3 gy-4">
      <!-- Shoot Type -->
      <div class="col-12">
        <select v-model="payload.sub_category_id" class="form-select">
          <option value="">Select shoot type</option>
          <option :value="item.id" v-for="(item, index) in subCategories" :key="index">
            {{ item.name }}
          </option>
        </select>
      </div>

      <!-- Sub Category Details -->
      <div class="col-12" v-if="subCategoryDetails">
        <input type="text" v-model="payload.sub_category_details" class="form-control"
          placeholder="Please describe the shoot type" />
      </div>

      <!-- Submit -->
      <div class="col-12 text-center">
        <button @click="validateForm" class="btn btn-primary w-50 fw-bold">Next</button>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="d-flex flex-column gap-3 align-items-center justify-content-center  placeholder-glow">
      <div class="placeholder rounded-pill py-4"></div>
    </div>
  </div>
</template>
