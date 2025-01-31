// src/stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    first_name: '',
    last_name: '',
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: null,
    verified: false,
    token: '',
    image: '',
  }),

  actions: {
    setUserData(userData) {
      this.id = userData.id
      this.first_name = userData.first_name
      this.last_name = userData.last_name
      this.name = userData.name
      this.email = userData.email
      this.phone = userData.phone
      this.gender = userData.gender
      this.dob = userData.dob
      this.verified = userData.verified
      this.token = userData.token
      this.image = userData.image
    },

    updateVerifiedStatus(verified) {
      this.verified = verified
    },

    getToken() {
      return this.token
    },

    getFullName() {
      return `${this.first_name} ${this.last_name}`
    },

    logout() {
      this.$reset()
    },
  },

  getters: {
    isUserVerified: (state) => state.verified,
    getProfilePicture: (state) => state.image,
  },

  persist: true, // Enable persistence
})
