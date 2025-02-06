<script>
import LoginForm from '@/components/Auth/LoginForm.vue'
import OfficialLogo from '@/components/OfficialLogo.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm,
    OfficialLogo,
  },
}
</script>
<template>
  <div class="row justify-content-center g-3 h-100 align-items-center">
    <div class="col-md-6 col-lg-5 col-xl-4">
      <div class="text-center mb-4">
        <OfficialLogo />
        <h1 class="text-uppercase fw-bold">login</h1>
        <p class="w-75 mx-auto">Enter with a click Login simplifies your access securely.</p>
      </div>
      <LoginForm />
      <div class="text-center mt-3" v-if="routeExists('auth.register')">
        New Member? <RouterLink :to="{ name: 'auth.register' }">Create Account</RouterLink>
      </div>
      <div class="text-center py-3" v-if="routeExists('freelancer.become')">
        <RouterLink :to="{ name: 'freelancer.become' }"> Become a Freelancer </RouterLink>
      </div>
    </div>
  </div>
</template>
