import axios from 'axios'

// configure http client globally
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    // 'X-API-Key': import.meta.env.VITE_API_KEY,
    'X-API-Key': `eyJpdiI6IjBxZEdST1BscWlVdVRnNWZXT05TM2c9PSIsInZhbHVlIjoiMXJMdzZmMEg4dGZaNjdUTm1mYVZpUzNBdDdjT0NWUW5wd1JIVU9DbzlFbz0iLCJtYWMiOiJiYWVlYTU1NTc3Mjg2ZmYwYmMwNDY1ZWRmYzQ4ZTY1NGIyNDkzNTVkNDBmMzBmZjhhMWY0MDJhNTc2MmUwM2JkIiwidGFnIjoiIn0=`,
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer 111|JSYo6XREsPhIsvK9ZmYe7JOe5nTopKIO4OM8dMLW44a2e27c`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default axiosInstance
