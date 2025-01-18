<script>
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
  methods: {
    onSubmit() {
      this.form.submit().then(() => {
        this.$router.push({ name: 'home' })
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
      <input v-model="form.email" @change="form.validate('email')" class="form-control"
        :class="{ 'is-invalid': form.invalid('email') }" placeholder="Email address" />
      <div v-if="form.invalid('email')" class="invalid-feedback">
        {{ form.errors.email }}
      </div>
    </div>

    <!-- Password -->
    <div class="col-12">
      <input v-model="form.password" @change="form.validate('password')" class="form-control"
        :class="{ 'is-invalid': form.invalid('password') }" placeholder="Password" />
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
      <button class="btn btn-primary w-100">
        <span v-if="form.processing">...</span>
        <span v-else>Login</span>
      </button>
    </div>

    <div class="col-12 text-center">
      New Member? <RouterLink :to="{ name: 'auth.register' }">Create Account</RouterLink>
    </div>
  </form>
</template>
