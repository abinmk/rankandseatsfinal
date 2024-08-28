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

    // Handle the 400 response with "Invalid token" message
    if (error.response.status === 401 && error.response.data === 'Invalid token') {
      // Show alert for session expiry
      alert("Session expired. Please log in again.");
      console.log("session expired");

      // Remove tokens from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');

      // Redirect to login after alert is dismissed
      window.location.href = '/login';
      return Promise.reject(error);
    }

    // Handle 401 Unauthorized responses and attempt to refresh the token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, { refreshToken });
        localStorage.setItem('token', data.token);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Show alert for session expiry
        alert("Session expired. Please log in again.");
        alert("Session expired. Please log in again.");
        console.log("session expired");

        // Remove tokens from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');

        // Redirect to login after alert is dismissed
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
