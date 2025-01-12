import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/auth/',
    component: () => import('../layouts/Guest.vue'),
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import('../views/Auth/Login.vue'),
      },
    ],
  },  {
    path: '/',
    component: () => import('../layouts/App.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
