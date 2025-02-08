<script>
import NavLink from './NavLink.vue'
import { useToast } from 'vue-toastification'
import { useUserStore } from '@/stores/userStore'
import { useForm } from 'laravel-precognition-vue'

export default {
  name: 'SettingsIndex',
  components: {
    NavLink,
  },
  data() {
    return {
      logoutForm: useForm('post', '/logout', {}),
      toast: useToast(),
    }
  },
  computed: {
    userStore() {
      return useUserStore()
    },
  },
  methods: {
    logout() {
      this.logoutForm.submit().then(() => {
        this.userStore.logout()
        this.$router.push({ name: 'auth.login' })
      })
    },
  },
}
</script>

<template>
  <div class="main rounded px-4 py-3 d-flex align-items-between flex-column gap-3">
    <NavLink to="/foo#1" :label="__('settings.profile')" />
    <NavLink to="/foo#1" :label="__('settings.change_password')" />
    <NavLink to="/foo#1" :label="__('settings.terms_and_conditions')" />
    <NavLink to="/foo#1" :label="__('settings.about_us')" />
    <NavLink to="/foo#1" :label="__('settings.faq')" />
    <NavLink to="/foo#1" :label="__('settings.contact_us')" />
    <NavLink @click="logout" :label="__('buttons.logout')" />
  </div>
</template>

<style scoped>
.main {
  background-color: #e2e2e23d;
}
</style>
