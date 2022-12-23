import apiServer from 'axios';

class AuthService {
	registration = async (data) => {
		try {
			const respons = await apiServer.post('/auth/registration', { ...data });

			localStorage.setItem('accessToken', respons.data.accessToken);

			return respons.data;
		} catch (error) {
			console.error(error);
		}
	};

	logIn = async (data) => {
		try {
			const respons = await apiServer.post('/auth/login', { ...data });
			localStorage.setItem('accessToken', respons.data.accessToken);
			return respons.data;
		} catch (error) {}
	};

	checkAuth = async (callback) => {
		try {
			if (localStorage.getItem('accessToken')) {
				const respons = await apiServer.get('/auth/refresh');
				console.log(respons);
				localStorage.setItem('accessToken', respons.data.accessToken);
				if (callback) {
					callback(respons.data);
				} else {
					return respons.data;
				}
			} else {
				return false;
			}
		} catch (error) {}
	};
}

export default new AuthService();
