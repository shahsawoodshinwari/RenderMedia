import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
  }),

  actions: {
    setCategories(data) {
      this.categories = data
    },

    findCategory(categoryId) {
      return this.categories.find((category) => category.id === categoryId)
    },
  },
})
