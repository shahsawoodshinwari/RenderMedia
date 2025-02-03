<script>
import OfficialLogo from '@/components/OfficialLogo.vue'
import BecomeFreelancerForm from '@/components/Auth/BecomeFreelancerForm.vue'

export default {
  name: 'BecomeFreelancerView',
  components: {
    BecomeFreelancerForm,
    OfficialLogo,
  },
}
</script>
<template>
  <div>
    <div class="text-center mb-4">
      <OfficialLogo />
      <h1 class="text-uppercase fw-bold">Singup to Find Your Work</h1>
      <p class="w-75 mx-auto">Discover your passion and forge a meaningful career path by siging up to find work you
        love &dash; where your aspirations meet opportunity.</p>
    </div>
    <BecomeFreelancerForm />
  </div>
</template>
