import axios from 'axios'

// configure http client globally
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    // 'X-API-Key': import.meta.env.VITE_API_KEY,
    'X-API-Key': `111|JSYo6XREsPhIsvK9ZmYe7JOe5nTopKIO4OM8dMLW44a2e27c`,
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
