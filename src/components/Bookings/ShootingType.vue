<script>
import { useForm } from 'laravel-precognition-vue'
import { useToast } from 'vue-toastification';
import NoBookingsFound from '@/assets/no-bookings-found.png'

export default {
  name: 'ShootingType',
  inject: {
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      subCategories: [],
      notFound: NoBookingsFound,
      fetchCategoryForm: useForm('get', '/categories', {
        category_id: this.category,
      }),
      isLoading: true,
      isValid: false,
      payload: {
        sub_category_id: '',
        sub_category_details: '',
      },
      toast: useToast(),
    };
  },
  computed: {
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
    this.fetchSubCategories();
  },
  methods: {
    validateForm() {
      if (!this.payload.sub_category_id || (this.subCategoryDetails && !this.payload.sub_category_details)) {
        this.toast.error('Please fill in the required fields.');
        this.isValid = false

        return;
      }

      this.isValid = true;
    },
    fetchSubCategories() {
      this.isLoading = true;
      this.fetchCategoryForm.submit().then(response => {
        this.subCategories = response.data.data.length > 0 ? response.data.data[0].children : [];
        this.isLoading = false;
      });
    }
  },
};
</script>

<template>
  <div v-if="subCategories.length > 0 && !isLoading">
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
        <input type="text" class="form-control" placeholder="Please describe the shoot type" />
      </div>

      <!-- Submit -->
      <div class="col-12 text-center">
        <button v-if="!isValid" @click="validateForm" class="btn btn-primary w-50 fw-bold">Next</button>
        <RouterLink v-else :to="{ name: 'bookings.create.filming-location', params: { category: category } }"
          class="btn btn-primary w-50 fw-bold">Next</RouterLink>
      </div>
    </div>
  </div>
  <div v-else-if="!isLoading">
    <div class="text-center">
      <img :src="notFound" class="img-fluid w-50 mb-3" alt="No bookings found" />
      <div class="fs-4 text-muted">Whoops</div>
      <div class="fs-6 text-secondary w-75 mx-auto">
        It looks like there is something missing from the data. Please refresh and come
        again.
      </div>
    </div>
  </div>
  <div v-else>
    <div class="d-flex flex-column gap-3 placeholder-glow">
      <div class="placeholder rounded-pill py-4"></div>
    </div>
  </div>
</template>
