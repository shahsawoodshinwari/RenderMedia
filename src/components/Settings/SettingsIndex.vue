<script>
import NavLink from './NavLink.vue'
import { useToast } from 'vue-toastification'
import { useUserStore } from '@/stores/userStore';
import { useForm } from 'laravel-precognition-vue';

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
        this.userStore.logout();
        this.$router.push({ name: 'auth.login' })
      })
    },
  },
}
</script>

<template>
  <div class="main rounded px-4 py-3 d-flex align-items-between flex-column gap-3">
    <NavLink to="/foo#1" label="Profile" />
    <NavLink to="/foo#1" label="Change Password" />
    <NavLink to="/foo#1" label="Terms & Conditions" />
    <NavLink to="/foo#1" label="About Us" />
    <NavLink to="/foo#1" label="FAQ" />
    <NavLink to="/foo#1" label="Contact Us" />
    <NavLink @click="logout" label="Logout" />
  </div>
</template>

<style scoped>
.main {
  background-color: #e2e2e23d;
}
</style>
