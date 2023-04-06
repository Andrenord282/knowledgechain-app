//-----modules-----//
import authService from 'services/axios/api/authService';
import errorService from 'shared/errorService/errorService';

const useAuthSignUp = () => {
	return async (data, { authState, setAuthAlert }) => {
		try {
			authState.toggleLockAuthModal(true);
			authState.setVisibleAuthForm('');
			setAuthAlert.setToggleAlert(true);
			setAuthAlert.setFields.iconAlert('loading');
			setAuthAlert.setFields.titleAlert('Регистрация...');
			const response = await authService.registration(data);

			if (response.status === 200) {
				setAuthAlert.setFields.iconAlert('success');
				setAuthAlert.setFields.titleAlert('Вы зарегистрировались');
				setTimeout(() => {
					setAuthAlert.setToggleAlert(false);
					setAuthAlert.setFields.iconAlert(null);
					setAuthAlert.setFields.titleAlert(null);
					authState.toggleLockAuthModal(false);
					authState.closeAuth();
					authState.setVisibleAuthForm('visble');
				}, 700);

				return response.data;
			} else {
				setAuthAlert.setToggleAlert(false);
				setAuthAlert.setFields.iconAlert(null);
				setAuthAlert.setFields.titleAlert(null);
				authState.toggleLockAuthModal(false);
				authState.setVisibleAuthForm('visble');
				throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
			}
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
				arrErrors: error.arrErrors,
			};
		}
	};
};

export default useAuthSignUp;
