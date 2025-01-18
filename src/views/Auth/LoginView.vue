<script>
import LoginForm from '@/components/Auth/LoginForm.vue';
import OfficialLog from '@/assets/Render-Media-Official-Logo.png';

export default {
  name: 'LoginView',
  components: {
    LoginForm,
  },
  data() {
    return {
      logo: OfficialLog,
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="text-center mb-4">
      <RouterLink :to="{ name: 'home' }">
        <img :src="logo" class="img-fluid" width="200" alt="Render Media Official Logo">
      </RouterLink>
      <h1 class="text-uppercase fw-bold">login</h1>
      <p class="w-75 mx-auto">Enter with a click Login simplifies your access securely.</p>
    </div>
    <LoginForm />
  </div>
</template>
