import axios from 'axios';

const apiServer = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_SEREVER,
});

export default apiServer;
