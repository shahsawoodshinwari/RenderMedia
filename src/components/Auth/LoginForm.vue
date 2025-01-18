<script>
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
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    }
  },
  methods: {
    onSubmit() {
      this.form.submit().then((response) => {
        this.userStore.setUserData(response.data.data)

        this.$router.push({ name: 'home' });
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
      <input v-model="form.email" class="form-control" :class="{ 'is-invalid': form.invalid('email') }"
        placeholder="Email address" />
      <div v-if="form.invalid('email')" class="invalid-feedback">
        {{ form.errors.email }}
      </div>
    </div>

    <!-- Password -->
    <div class="col-12">
      <input v-model="form.password" class="form-control" :class="{ 'is-invalid': form.invalid('password') }"
        placeholder="Password" />
      <div v-if="form.invalid('password')" class="invalid-feedback">
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
