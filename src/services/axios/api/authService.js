import apiServer from 'services/axios/client';

class AuthService {
	registration = async (data) => {
		try {
			const response = await apiServer.post('auth/registration', data, {
				withCredentials: true,
			});
			localStorage.setItem('accessToken', response.data.accessToken);
			
			return response;
		} catch (error) {
			return error.response;
		}
	};

	logIn = async (data) => {
		try {
			const response = await apiServer.post('auth/login', data, {
				withCredentials: true,
			});
			localStorage.setItem('accessToken', response.data.accessToken);
			
			return response;
		} catch (error) {
			return error.response;
		}
	};

	logOut = async () => {
		try {
			await apiServer.get('auth/logout', {
				withCredentials: true,
			});
			localStorage.setItem('accessToken', '');

		} catch (error) {
			return error.response;
		}
	};

	refresh = async () => {
		try {
			const response = await apiServer.get('auth/refresh', {
				withCredentials: true,
			});
			localStorage.setItem('accessToken', response.data.accessToken);
			
			return response;
		} catch (error) {
			return error.response;
		}
	};

	
}

export default new AuthService();
