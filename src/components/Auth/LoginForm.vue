<script>
import { useToast } from 'vue-toastification';
import { useUserStore } from '@/stores/userStore';
import { useForm } from 'laravel-precognition-vue';

export default {
  name: 'LoginForm',
  data() {
    return {
      form: useForm('post', '/login', {
        email: '',
        password: '',
      }),
      isPasswordVisible: false,
      toast: useToast(),
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    onSubmit() {
      this.form.submit().then((response) => {
        this.userStore.setUserData(response.data.data)

        this.$router.push({ name: 'home' });
        this.toast.success('Authenticated successfully.');
      })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>
<template>
  <form @submit.prevent="onSubmit" class="row justify-content-center g-3">
    <!-- Email -->
    <div class="col-12">
      <div class="position-relative">
        <input v-model="form.email" class="form-control pe-5" name="email" :class="{ 'is-invalid': form.invalid('email') }"
          placeholder="Email address" />
        <span class="position-absolute top-50 end-px-7 translate-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="grey" class="bi bi-envelope"
            viewBox="0 0 16 16">
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
        </span>
      </div>
      <div v-if="form.invalid('email')" class="text-danger">
        {{ form.errors.email }}
      </div>
    </div>

    <!-- Password -->
    <div class="col-12">
      <div class="position-relative">
        <input v-model="form.password" class="form-control" name="password" :class="{ 'is-invalid': form.invalid('password') }"
          :type="isPasswordVisible ? 'text' : 'password'" placeholder="Password" />
        <!-- Eye (visible password) -->
        <span v-if="!isPasswordVisible" @click="togglePasswordVisibility"
          class="position-absolute top-50 end-px-7 cursor-pointer translate-middle" role="button" tabindex="0"
          aria-label="Show Password">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="grey" class="bi bi-eye"
            viewBox="0 0 16 16">
            <path
              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
          </svg>
        </span>
        <!-- Eye Slash (hidden password) -->
        <span v-else class="position-absolute top-50 end-px-7 cursor-pointer translate-middle" role="button"
          @click="togglePasswordVisibility" tabindex="0" aria-label="Hide Password">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="grey" class="bi bi-eye-slash"
            viewBox="0 0 16 16">
            <path
              d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
            <path
              d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
            <path
              d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
          </svg>
        </span>
      </div>
      <div v-if="form.invalid('password')" class="text-danger">
        {{ form.errors.password }}
      </div>
    </div>

    <!-- Remember me -->
    <div class="col-12">
      <div class="form-check d-flex gap-3 justify-content-end">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Remember Me
        </label>
      </div>
    </div>

    <!-- Login -->
    <div class="col-8">
      <button class="btn btn-primary w-100" :disabled="form.processing">
        <div v-if="form.processing" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span v-else>Login</span>
      </button>
    </div>

    <div class="col-12 text-center">
      New Member? <RouterLink :to="{ name: 'auth.register' }">Create Account</RouterLink>
    </div>
  </form>
</template>
