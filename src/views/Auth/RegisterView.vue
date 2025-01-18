<script>
import RegisterForm from '@/components/Auth/RegisterForm.vue';
import OfficialLogo from '@/components/OfficialLogo.vue';

export default {
  name: 'RegisterView',
  components: {
    RegisterForm,
    OfficialLogo,
  },
};
</script>
<template>
  <div>
    <div class="text-center mb-4">
      <OfficialLogo />
      <h1 class="text-capitalize fw-bold">sign up to find work you</h1>
      <p class="mx-auto">
        Discover your passion and forge a meaningful career path by signing up to find work you love - where your
        aspriations meet opportunity.
      </p>
    </div>
    <RegisterForm />
  </div>
</template>
