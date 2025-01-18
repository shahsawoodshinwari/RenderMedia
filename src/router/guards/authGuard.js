import { useUserStore } from '@/stores/userStore'

export default function authGuard(to, from, next) {
  const userStore = useUserStore()

  if (userStore.getToken()) {
    next()
  } else {
    next({ name: 'auth.login' })
  }
}
