import axios from 'axios';

const apiServer = axios.create({
	baseURL: process.env.REACT_APP_API_SEREVER,
});

apiServer.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
	return config;
});

export default apiServer;
