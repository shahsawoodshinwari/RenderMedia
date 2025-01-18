<script>
import RegisterForm from '@/components/Auth/RegisterForm.vue';
import OfficialLog from '@/assets/Render-Media-Official-Logo.png';

export default {
  name: 'RegisterView',
  components: {
    RegisterForm,
  },
  data() {
    return {
      logo: OfficialLog,
    };
  },
};
</script>
<template>
  <div>
    <div class="text-center mb-4">
      <RouterLink :to="{ name: 'home' }">
        <img :src="logo" class="img-fluid" width="200" alt="Render Media Official Logo">
      </RouterLink>
      <h1 class="text-capitalize fw-bold">sign up to find work you</h1>
      <p class="mx-auto">
        Discover your passion and forge a meaningful career path by signing up to find work you love - where your
        aspriations meet opportunity.
      </p>
    </div>
    <RegisterForm />
  </div>
</template>
