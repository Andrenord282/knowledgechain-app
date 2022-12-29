import axios from 'axios';

const DEV_URL = 'http://localhost:4000';

const apiServer = axios.create({
	baseURL: process.env.REACT_APP_API_SEREVER || DEV_URL,
});

export default apiServer;
