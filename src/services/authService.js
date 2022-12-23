import apiServer from 'axios';

class AuthService {
	registration = async (data) => {
		const respons = await apiServer.post('https://knowledgechain-server.herokuapp.com/auth/registration', { ...data });
		return respons;
	};
}

export default new AuthService();
