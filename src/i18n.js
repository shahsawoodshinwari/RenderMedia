import ar from '@/locales/ar.json'
import en from '@/locales/en.json'
import appConfig from '@/config/app'
import { createI18n } from 'vue-i18n'
import defaultLang from '@/config/locale'

const i18n = createI18n({
  locale: defaultLang,
  fallbackLocale: appConfig.fallback_locale,
  messages: {
    en,
    ar,
  },
})

export default i18n
