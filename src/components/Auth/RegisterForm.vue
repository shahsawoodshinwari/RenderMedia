<script>
import { useUserStore } from '@/stores/userStore'
import { useForm } from 'laravel-precognition-vue'

export default {
  name: 'RegisterForm',
  data() {
    return {
      form: useForm('post', '/register', {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
        password: '',
        password_confirmation: '',
        privacy: false,
      }),
      userStore: useUserStore(),
      genders: [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
        { key: 'other', value: 'Other' },
      ],
    }
  },
  methods: {
    onSubmit() {
      this.form
        .submit()
        .then((response) => {
          this.userStore.setUserData(response.data.data)
          this.$router.push({ name: 'home' })
        })
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
      <input
        v-model="form.first_name"
        @input="form.validate('first_name')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('first_name') }"
        placeholder="First Name"
      />
      <div v-if="form.invalid('first_name')" class="invalid-feedback">
        {{ form.errors.first_name }}
      </div>
    </div>

    <!-- Last Name -->
    <div class="col-12">
      <input
        v-model="form.last_name"
        @input="form.validate('last_name')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('last_name') }"
        placeholder="Last Name"
      />
      <div v-if="form.invalid('last_name')" class="invalid-feedback">
        {{ form.errors.last_name }}
      </div>
    </div>

    <!-- Email Address -->
    <div class="col-12">
      <input
        v-model="form.email"
        @input="form.validate('email')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('email') }"
        placeholder="Email"
      />
      <div v-if="form.invalid('email')" class="invalid-feedback">
        {{ form.errors.email }}
      </div>
    </div>

    <!-- Phone -->
    <div class="col-12">
      <input
        v-model="form.phone"
        @input="form.validate('phone')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('phone') }"
        placeholder="Phone No"
      />
      <div v-if="form.invalid('phone')" class="invalid-feedback">
        {{ form.errors.phone }}
      </div>
    </div>

    <!-- Gender -->
    <div class="col-12">
      <select
        v-model="form.gender"
        @change="form.validate('gender')"
        class="form-select"
        :class="{ 'is-invalid': form.invalid('gender') }"
      >
        <option value="">Select Gender</option>
        <option :value="gender.value" v-for="gender in genders" :key="gender.key">
          {{ gender.value }}
        </option>
      </select>
      <div v-if="form.invalid('gender')" class="invalid-feedback">
        {{ form.errors.gender }}
      </div>
    </div>

    <!-- Password -->
    <div class="col-12">
      <input
        type="password"
        v-model="form.password"
        @input="form.validate('password')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('password') }"
        placeholder="Password"
      />
      <div v-if="form.invalid('password')" class="invalid-feedback">
        {{ form.errors.password }}
      </div>
    </div>

    <!-- Password Confirmation -->
    <div class="col-12">
      <input
        type="password"
        v-model="form.password_confirmation"
        @input="form.validate('password_confirmation')"
        class="form-control"
        :class="{ 'is-invalid': form.invalid('password_confirmation') }"
        placeholder="Password Confirmation"
      />
      <div v-if="form.invalid('password_confirmation')" class="invalid-feedback">
        {{ form.errors.password_confirmation }}
      </div>
    </div>

    <!-- Remember me -->
    <div class="col-12">
      <div class="form-check">
        <input
          class="form-check-input"
          :class="{ 'is-invalid': form.invalid('privacy') }"
          v-model="form.privacy"
          @change="form.validate('privacy')"
          type="checkbox"
          value="accepted"
          id="privacy"
        />
        <label class="form-check-label" for="privacy"> I accept terms & conditions </label>
      </div>
    </div>

    <!-- Login -->
    <div class="col-8">
      <button class="btn btn-primary w-100" :disabled="form.processing">
        <div v-if="form.processing" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span v-else>SIGN UP</span>
      </button>
    </div>

    <div class="col-12 text-center">
      Already a Member? <RouterLink :to="{ name: 'auth.login' }">Login</RouterLink>
    </div>
  </form>
</template>
