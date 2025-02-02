import 'maz-ui/styles'
import 'vue-toastification/dist/index.css'
import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import { client } from 'laravel-precognition-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import axiosInstance from './libs/axios'
import RouterMixin from './mixins/router'

client.use(axiosInstance)

const app = createApp(App)

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

app.mixin(RouterMixin)

// install the vue app
app.mount('#app')
