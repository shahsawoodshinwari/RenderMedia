import { useUserStore } from '@/stores/userStore'

export default function guestGuard(to, from, next) {
  const userStore = useUserStore()
  if (userStore.getToken()) {
    next({ name: 'home' })
  } else {
    next()
  }
}
