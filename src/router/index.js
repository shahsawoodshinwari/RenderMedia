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
      {
        path: 'email/verify',
        name: 'email.verify',
        component: () => import('../views/Auth/VerifyView.vue'),
        beforeEnter: [authGuard],
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
        path: '/bookings/shoot-type',
        name: 'bookings.create.shoot-type',
        component: () => import('../views/Bookings/ShootingTypeView.vue'),
        beforeEnter: [authGuard, verifiedGuard],
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
