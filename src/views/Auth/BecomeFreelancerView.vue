<script>
import OfficialLogo from '@/components/OfficialLogo.vue'
import successImage from '@/assets/Become-Freelancer-Success.png'
import BecomeFreelancerForm from '@/components/Auth/BecomeFreelancerForm.vue'

export default {
  name: 'BecomeFreelancerView',
  components: {
    OfficialLogo,
    BecomeFreelancerForm,
  },
  data() {
    return {
      message: 'Thanks for your interest. Our team will get in touch with you shortly.',
      successImage: successImage,
    }
  },
  methods: {
    freelancerCreated(data) {
      this.message = data.message
    },
  },
}
</script>
<template>
  <div class="row justify-content-center g-3 h-100 align-items-center">
    <div class="col-md-6 col-lg-5 col-xl-4">
      <template v-if="!message">
        <div class="text-center mb-4">
          <OfficialLogo />
          <h1 class="text-uppercase fw-bold">Singup to Find Your Work</h1>
          <p class="w-75 mx-auto">
            Discover your passion and forge a meaningful career path by siging up to find work you
            love &dash; where your aspirations meet opportunity.
          </p>
        </div>
        <BecomeFreelancerForm @become-freelancer-success="freelancerCreated" />
      </template>
      <template v-else>
        <div class="text-center">
          <img :src="successImage" class="img-fluid mb-3 w-75" alt="Become Freelancer Success" />
          <h1>Registration Successful</h1>
          <div class="lead mb-3">
            {{ message }}
          </div>
          <hr />
          <div class="text-start">
            <h4>What's Next?</h4>
            <ul class="list-unstyled hanging-list">
              <li class="mb-2">📧 Check your email for any updates.</li>
              <li class="mb-2">🕒 Wait for 2-3 business days for your account to be activated.</li>
            </ul>
            <div class="text-center col-8 mx-auto">
              <a href="https://renderrmedia.com" class="btn btn-primary w-100" target="_blank">
                Go to Dashboard
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.hanging-list li {
  text-indent: -1.5em;
  padding-left: 1.5em;
  margin-bottom: 0.5em;
}
</style>
