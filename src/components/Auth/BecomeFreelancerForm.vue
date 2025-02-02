<script>
import { useForm } from 'laravel-precognition-vue'

export default {
  name: 'BecomeFreelancerForm',
  data() {
    return {
      form: useForm('post', '/become-freelancer', {
        first_name: '',
        last_name: '',
        phone: '',
        speciality: '',
        experience: '',
        portfolio: '',
      }),
      specialitiesForm: useForm('get', '/sub-categories', {}),
      specialities: [],
    }
  },
  mounted() {
    this.specialitiesForm.submit()
      .then((response) => {
        const specialities = response.data.data;
        this.specialities = specialities.filter(
          (speciality) => speciality.name?.toLowerCase() != 'other'
        )
      });
  },
  methods: {
    onSubmit() {
      this.form
        .submit()
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<template>
  <form @submit.prevent="onSubmit" class="row justify-content-center g-3">
    <!-- First name -->
    <div class="col-12">
      <input v-model="form.first_name" name="first_name" @change="form.validate('first_name')" class="form-control"
        :class="{ 'is-invalid': form.invalid('first_name') }" placeholder="First Name" autocomplete="given-name" />
      <div v-if="form.invalid('first_name')" class="invalid-feedback">
        {{ form.errors.first_name }}
      </div>
    </div>

    <!-- Last Name -->
    <div class="col-12">
      <input v-model="form.last_name" name="last_name" @change="form.validate('last_name')" class="form-control"
        :class="{ 'is-invalid': form.invalid('last_name') }" placeholder="Last Name" autocomplete="family-name" />
      <div v-if="form.invalid('last_name')" class="invalid-feedback">
        {{ form.errors.last_name }}
      </div>
    </div>

    <!-- Phone -->
    <div class="col-12">
      <input v-model="form.phone" name="phone" @change="form.validate('phone')" class="form-control"
        :class="{ 'is-invalid': form.invalid('phone') }" placeholder="Phone No" autocomplete="mobile" />
      <div v-if="form.invalid('phone')" class="invalid-feedback">
        {{ form.errors.phone }}
      </div>
    </div>

    <!-- Speciality -->
    <div class="col-12">
      <select v-model="form.speciality" name="speciality" @change="form.validate('speciality')" class="form-select"
        :class="{ 'is-invalid': form.invalid('speciality') }" :disabled="specialitiesForm.processing">
        <option value="">Select Speciality</option>
        <option v-for="speciality in specialities" :key="speciality.id">
          {{ speciality.name }}
        </option>
      </select>
      <div v-if="form.invalid('speciality')" class="invalid-feedback">
        {{ form.errors.speciality }}
      </div>
    </div>

    <!-- Experience -->
    <div class="col-12">
      <input v-model="form.experience" name="experience" @change="form.validate('experience')" class="form-control"
        :class="{ 'is-invalid': form.invalid('experience') }" placeholder="Experience in years" />
      <div v-if="form.invalid('experience')" class="invalid-feedback">
        {{ form.errors.experience }}
      </div>
    </div>

    <!-- Portfolio -->
    <div class="col-12">
      <input type="url" v-model="form.portfolio" name="portfolio" @change="form.validate('portfolio')"
        class="form-control" :class="{ 'is-invalid': form.invalid('portfolio') }" placeholder="Portfolio Link" />
      <div v-if="form.invalid('portfolio')" class="invalid-feedback">
        {{ form.errors.portfolio }}
      </div>
    </div>

    <!-- Submit -->
    <div class="col-8">
      <button class="btn btn-primary w-100" :disabled="form.processing">
        <div v-if="form.processing" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span v-else>SUBMIT</span>
      </button>
    </div>
  </form>
</template>
