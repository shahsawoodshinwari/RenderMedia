import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createHead())
app.use(createPinia())

app.mount('#app')
