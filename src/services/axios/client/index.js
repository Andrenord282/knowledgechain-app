import axios from 'axios';

const DEV_URL = 'http://localhost:4000';

const apiServer = axios.create({
    baseURL: process.env.REACT_APP_API_SEREVER || DEV_URL,
});

apiServer.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                await apiServer.get('auth/refresh', { withCredentials: true });
                return apiServer.request(originalRequest);
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН');
            }
        }
        throw error;
    },
);

export default apiServer;
