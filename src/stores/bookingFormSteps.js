import { defineStore } from 'pinia'

export const useBookingFormStepsStore = defineStore('bookingFormSteps', {
  state: () => ({
    currentTab: 'CategoryList',
  }),
  actions: {
    setTab(tabName) {
      this.currentTab = tabName
    },
  },
})
