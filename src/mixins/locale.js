import i18n from '@/i18n'

export default {
  methods: {
    __(key) {
      return i18n.global.t(key)
    },
  },
}
