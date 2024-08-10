import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
  
      if (error.response.status === 401 && error.response.data.message === 'Invalid token') {
        // Log out the user immediately if the token is invalid
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(error);
      }
  
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        try {
          const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, { refreshToken });
          localStorage.setItem('token', data.token);
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login'; // Redirect to login if refresh fails
        }
      }
      
      return Promise.reject(error);
    }
  );
  

export default axiosInstance;
