import authGuard from './guards/authGuard'
import guestGuard from './guards/guestGuard'
import verifiedGuard from './guards/verifiedGuard'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/auth/',
    component: () => import('../layouts/GuestLayout.vue'),
    children: [
      {
        path: 'become-freelancer',
        name: 'freelancer.become',
        component: () => import('../views/Auth/BecomeFreelancerView.vue'),
        beforeEnter: [guestGuard],
      },
      {
        path: 'email/verify',
        name: 'email.verify',
        component: () => import('../views/Auth/VerifyView.vue'),
        beforeEnter: [authGuard],
      },
      {
        path: 'login',
        name: 'auth.login',
        component: () => import('../views/Auth/LoginView.vue'),
        beforeEnter: [guestGuard],
      },
      {
        path: 'register',
        name: 'auth.register',
        component: () => import('../views/Auth/RegisterView.vue'),
        beforeEnter: [guestGuard],
      },
    ],
  },
  {
    path: '/',
    component: () => import('../layouts/AppLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        beforeEnter: [authGuard, verifiedGuard],
      },
      {
        path: '/bookings',
        name: 'bookings.index',
        component: () => import('../views/Bookings/BookingList.vue'),
        beforeEnter: [authGuard, verifiedGuard],
        meta: {
          title: 'Bookings',
        },
      },
      {
        path: '/offline',
        name: 'offline',
        component: () => import('../views/OfflineView.vue'),
        meta: {
          title: 'No Internet Conncetion',
        },
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/SettingsView.vue'),
        beforeEnter: [authGuard, verifiedGuard],
        meta: {
          title: 'More',
        },
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
  linkExactActiveClass: 'rounded-circle bg-white text-dark',
})

export default router
