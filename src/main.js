// css imports
import 'maz-ui/styles'
import 'vue-toastification/dist/index.css'
import './assets/styles/main.scss'

// library imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import { client } from 'laravel-precognition-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// app imports
import i18n from './i18n'
import App from './App.vue'
import router from './router'
import axiosInstance from './libs/axios'
import toastConfig from './config/toast'
import LocaleMixin from './mixins/locale'
import RouterMixin from './mixins/router'

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

// register i18n
app.use(i18n)

// register global translation helper
app.config.globalProperties.__ = (key) => i18n.global.t(key)

// register android like smooth toasts
app.use(Toast, toastConfig)

// register custom mixins
app.mixin(RouterMixin)
app.mixin(LocaleMixin)

// register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data.type === 'NEW_VERSION_AVAILABLE') {
      if (confirm('A new version is available. Refresh now?')) {
        window.location.reload()
      }
    }
  })
}

// install the vue app
app.mount('#app')
