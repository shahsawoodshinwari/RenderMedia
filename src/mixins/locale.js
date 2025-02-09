import i18n from '@/i18n'

export default {
  computed: {
    locale() {
      return i18n.global.locale
    },
  },
  methods: {
    __(key) {
      return i18n.global.t(key)
    },
  },
}
