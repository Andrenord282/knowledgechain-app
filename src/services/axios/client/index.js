import axios from 'axios';

// http://localhost:4000

const DEV_URL = 'https://knowledgechain-server.herokuapp.com';

const apiServer = axios.create({
	baseURL: process.env.REACT_APP_API_SEREVER || DEV_URL,
});

export default apiServer;
