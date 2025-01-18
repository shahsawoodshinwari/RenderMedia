import { useUserStore } from '@/stores/userStore'

export default function verifiedGuard(to, from, next) {
  const userStore = useUserStore()
  if (userStore.isUserVerified) {
    next()
  } else {
    next({ name: 'email.verify' })
  }
}
