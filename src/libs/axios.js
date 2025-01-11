import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.APP_URL,
  headers: {
    "X-API-Key": import.meta.env.API_KEY,
  },
});

// Example: Adding an Authorization token dynamically if needed
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // Adjust token retrieval as needed
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
