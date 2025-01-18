import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { client } from 'laravel-precognition-vue'

import App from './App.vue'
import router from './router'
import axiosInstance from './libs/axios'

client.use(axiosInstance)

const app = createApp(App)

app.use(router)
app.use(createHead())
app.use(createPinia())

app.mount('#app')
