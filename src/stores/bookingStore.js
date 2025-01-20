// src/stores/userStore.js
import { defineStore } from 'pinia'

export const useBookingStore = defineStore('bookings', {
  state: () => ({
    category_id: '',
    sub_category_id: '',
    lat: null,
    lng: null,
    date: null,
    time: null,
    member_first_name: '',
    member_last_name: '',
    member_email: '',
    member_phone: '',
    shooting_type: '',
    additional_notes: '',
    sub_category_details: '',
  }),

  actions: {
    setShootingType({ sub_category_id, sub_category_details }) {
      this.sub_category_id = sub_category_id
      this.sub_category_details = sub_category_details
    },

    setFilmingLocation({ lat, lng, date, time }) {
      this.lat = lat
      this.lng = lng
      this.date = date
      this.time = time
    },

    setAdditionalDetails({ first_name, last_name, email, phone, additional_notes }) {
      this.member_first_name = first_name
      this.member_last_name = last_name
      this.member_email = email
      this.member_phone = phone
      this.additional_notes = additional_notes
    },

    resetStore() {
      this.$reset()
    },
  },
})
