//-----modules-----//
import authService from 'services/axios/api/authService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import useUserSlice from 'hooks/slices/useUserSlice';
import useNavigateLocation from 'hooks/useNavigateLocation';

const useAuthSignIn = () => {
	const userModel = useUserSlice();
	const { setLocationPage } = useNavigateLocation();

	return async (data, { authModel, setAuthAlert }) => {
		try {
			authModel.toggleLockAuthModal(true);
			authModel.setVisibleAuthForm('');
			setAuthAlert.setToggleAlert(true);
			setAuthAlert.setFields.iconAlert('loading');
			setAuthAlert.setFields.titleAlert('Авторизация...');
			const response = await authService.logIn(data);

			if (response.status === 200) {
				setAuthAlert.setFields.iconAlert('success');
				setAuthAlert.setFields.titleAlert(`Привет, ${response.data.userName}!`);
				setTimeout(() => {
					setAuthAlert.setToggleAlert(false);
					setAuthAlert.setFields.iconAlert(null);
					setAuthAlert.setFields.titleAlert(null);
					authModel.toggleLockAuthModal(false);
					authModel.closeAuthModal();
					authModel.setVisibleAuthForm('visble');
					authModel.setStatusAuthUser(true);
					authModel.setToggleIsLoadedAuth(true);
					authModel.setToggleAuthModal(false);
					if (authModel.requestAuth) {
						authModel.setToggleRequestAuth(false);
						setLocationPage();
					}
					userModel.writeSetUser(response.data);
					userModel.setLoadedUser(true);
				}, 1000);
				return 'success';
			}

			setAuthAlert.setToggleAlert(false);
			setAuthAlert.setFields.iconAlert(null);
			setAuthAlert.setFields.titleAlert(null);
			authModel.toggleLockAuthModal(false);
			authModel.setVisibleAuthForm('visble');
			throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
				arrErrors: error.arrErrors,
			};
		}
	};
};

export default useAuthSignIn;
