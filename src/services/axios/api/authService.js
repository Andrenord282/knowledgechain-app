import apiServer from 'services/axios/client';

class AuthService {
    logUp = async (data) => {
        try {
            const response = await apiServer.post('auth/logup', data, {
                withCredentials: true,
            });

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

export const authService = new AuthService();

