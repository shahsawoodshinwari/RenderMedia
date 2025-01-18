<script>
import OfficialLogo from '@/components/OfficialLogo.vue';
import VerifyForm from '@/components/Auth/VerifyForm.vue';

export default {
  name: 'LoginView',
  components: {
    VerifyForm,
    OfficialLogo,
  },
};
</script>
<template>
  <div>
    <div class="text-center mb-4">
      <OfficialLogo />
      <h1 class="text-capitalize fw-bold">verify your email</h1>
      <p class="w-75 mx-auto">We sent a 5-Digit verification code to your register email address.</p>
    </div>
    <VerifyForm />
  </div>
</template>
