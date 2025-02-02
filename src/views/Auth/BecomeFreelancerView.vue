<script>
import BecomeFreelancerForm from '@/components/Auth/BecomeFreelancerForm.vue'
import OfficialLogo from '@/components/OfficialLogo.vue'

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
      <h1 class="text-uppercase fw-bold">login</h1>
      <p class="w-75 mx-auto">Enter with a click Login simplifies your access securely.</p>
    </div>
    <BecomeFreelancerForm />
  </div>
</template>
