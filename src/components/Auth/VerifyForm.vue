<script>
import { useToast } from 'vue-toastification'
import { useUserStore } from '@/stores/userStore'
import { useForm } from 'laravel-precognition-vue'
import MazInputCode from 'maz-ui/components/MazInputCode'

export default {
  name: 'VerifyForm',
  components: {
    MazInputCode,
  },
  data() {
    return {
      form: useForm('post', '/email/verify', {
        code: '',
      }),
      resendCodeForm: useForm('post', '/email/resend', {}),
      toast: useToast(),
    }
  },
  computed: {
    userFullName() {
      const userStore = useUserStore()
      return userStore.getFullName()
    },
    isVerified() {
      const userStore = useUserStore()
      return userStore.isUserVerified
    },
  },
  methods: {
    onSubmit() {
      this.form
        .submit()
        .then(() => {
          // mark the user as verified
          const userStore = useUserStore()
          userStore.updateVerifiedStatus(true)

          // redirect to home screen
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    resendCode() {
      if (this.resendCodeForm.processing) return
      this.resendCodeForm
        .submit()
        .then((response) => {
          this.toast.success(response.data.message)
        })
        .catch((error) => {
          console.log(error.response.data.message)
        })
    },
  },
}
</script>
<template>
  <form @submit.prevent="onSubmit" class="row justify-content-center g-3">
    <!-- Email -->
    <div class="col-12">
      <div class="text-center">
        <MazInputCode v-model="form.code" :error="form.invalid('code')" :codeLength="5" size="xs" />
        <div v-if="form.invalid('code')" class="text-danger">
          {{ form.errors.code }}
        </div>
      </div>
    </div>

    <!-- Login -->
    <div class="col-8">
      <button class="btn btn-primary w-100" :disabled="form.processing">
        <div v-if="form.processing" class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span class="text-uppercase fw-bold" v-else>Continue</span>
      </button>
    </div>

    <div class="col-12 text-center">
      <a type="button" @click="resendCode" :disabled="resendCodeForm.processing" class="btn-card">
        <span>RESEND CODE</span>
        <div
          v-if="resendCodeForm.processing"
          class="spinner-border spinner-border-sm ms-2"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </a>
    </div>
  </form>
</template>
