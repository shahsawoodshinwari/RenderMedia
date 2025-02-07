<script>
import OfficialLogo from '@/components/OfficialLogo.vue'
import RegisterForm from '@/components/Auth/RegisterForm.vue'

export default {
  name: 'RegisterView',
  components: {
    RegisterForm,
    OfficialLogo,
  },
}
</script>
<template>
  <div class="row justify-content-center g-3 h-100 align-items-center">
    <div class="col-md-6 col-lg-5 col-xl-4">
      <div class="text-center mb-4">
        <OfficialLogo />
        <h1 class="text-capitalize fw-bold">sign up to find work you</h1>
        <p class="mx-auto">
          Discover your passion and forge a meaningful career path by signing up to find work you
          love - where your aspriations meet opportunity.
        </p>
      </div>
      <RegisterForm />
      <div class="text-center py-3" v-if="routeExists('freelancer.become')">
        <RouterLink :to="{ name: 'freelancer.become' }"> Become a Freelancer </RouterLink>
      </div>
    </div>
  </div>
</template>
