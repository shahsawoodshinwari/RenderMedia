// css imports
import 'maz-ui/styles'
import 'vue-toastification/dist/index.css'
import './assets/styles/main.scss'

// library imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import Toast from 'vue-toastification'
import { client } from 'laravel-precognition-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// app imports
import App from './App.vue'
import router from './router'
import en from './locales/en.json'
import ar from './locales/ar.json'
import axiosInstance from './libs/axios'
import RouterMixin from './mixins/router'
import defaultLang from './locales/default'

// register custom axios
client.use(axiosInstance)

const app = createApp(App)

// register pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// register router
app.use(router)

// register state management library
app.use(pinia)

// register android like smooth toasts
app.use(Toast, {
  closeButton: false,
  icon: false,
  hideProgressBar: true,
})

// register translations
const i18n = createI18n({
  locale: defaultLang,
  fallbackLocale: 'en',
  messages: {
    en: en,
    ar: ar,
  },
})
app.use(i18n)

// register global translation helper
app.config.globalProperties.__ = (key) => i18n.global.t(key)

// register global router helpers
app.mixin(RouterMixin)

// install the vue app
app.mount('#app')
