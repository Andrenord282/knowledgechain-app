//-----modules-----//
import authService from 'services/axios/api/authService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import useAuthSlice from 'hooks/slices/useAuthSlice';
import useUserSlice from 'hooks/slices/useUserSlice';

const useAuthRefresh = () => {
	const accessToken = localStorage.getItem('accessToken');
	const authModel = useAuthSlice();
	const userModel = useUserSlice();

	return async () => {
		try {
			if (accessToken) {
				const response = await authService.refresh();
				if (response.status === 200) {
					authModel.setStatusAuthUser(true);
					authModel.setToggleIsLoadedAuth(true);
					userModel.writeSetUser(response.data);
					userModel.setLoadedUser(true);
					console.log('обновлен токен');
					return response.data;
				}
				console.log('не обновлен токен');
				authModel.setToggleIsLoadedAuth(true);
				throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
			}
			authModel.setToggleIsLoadedAuth(true);
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
			};
		}
	};
};

export default useAuthRefresh;
