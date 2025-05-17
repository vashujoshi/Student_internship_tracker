// client/src/api/axiosInstance.js
import axios from 'axios';

const apiBaseUrl ='http://localhost:3000' || process.env.REACT_APP_API_BASE_URL  ;

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');

    if (token) {
      if (config.baseURL === apiBaseUrl || config.url.startsWith('/api')) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
