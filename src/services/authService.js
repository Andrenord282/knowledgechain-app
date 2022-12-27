import apiServer from 'axios';

class AuthService {
	registration = async (data) => {
		try {
			const response = await apiServer.post(
				'https://knowledgechain-server.herokuapp.com/auth/registration',
				{ ...data },
				{ withCredentials: true },
			);
			localStorage.setItem('accessToken', response.data.accessToken);
			return response;
		} catch (error) {
			return error.response;
		}
	};

	logIn = async (data) => {
		try {
			const response = await apiServer.post(
				'https://knowledgechain-server.herokuapp.com/auth/login',
				{ ...data },
				{ withCredentials: true },
			);
			localStorage.setItem('accessToken', response.data.accessToken);
			return response;
		} catch (error) {
			return error.response;
		}
	};

	logOut = async () => {
		try {
			await apiServer.get(
				'https://knowledgechain-server.herokuapp.com/auth/logout',
				{
					withCredentials: true,
				},
			);
			localStorage.setItem('accessToken', '');
		} catch (error) {
			console.error(error);
		}
	};

	checkAuth = async () => {
		try {
			const response = await apiServer.get(
				'https://knowledgechain-server.herokuapp.com/auth/refresh',
				{
					withCredentials: true,
				},
			);
			localStorage.setItem('accessToken', response.data.accessToken);

			return response;
		} catch (error) {
			return error.response;
		}
	};
}

export default new AuthService();
