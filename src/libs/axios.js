import { useUserStore } from '@/stores/userStore'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

// configure http client globally
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'X-API-Key': import.meta.env.VITE_API_KEY,
  },
  withCredentials: false,
})

// configure out going requests
axiosInstance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers.Accept = 'application/json'
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// configure incoming requests
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const toast = useToast()
    const router = useRouter()
    const userStore = useUserStore()

    if (error.response && error.response.status === 401) {
      userStore.logout()

      // Redirect to login route
      toast.error('Session expired. Please login again.')
      router.push({ name: 'auth.login' })

      return Promise.reject(error)
    }
    if (error.response && error.response.status === 422) {
      const message = error.response.data.message || 'Validation error occurred'

      toast.error(message)

      return Promise.reject(error)
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
