import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Guest.vue'),
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import('../views/Auth/Login.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
