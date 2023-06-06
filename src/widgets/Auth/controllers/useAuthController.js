//-----modules-----//
import authService from 'services/axios/api/authService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import useNavigateLocation from 'hooks/useNavigateLocation';

//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { userActions } from 'store/userSlice';
import { authActions } from 'store/authSlice';

const useAuthController = () => {
	const dispatch = useDispatch();
	const { setLocationPage } = useNavigateLocation();

	const openAuthModal = () => {
		dispatch(authActions.setTypeAuth({ typeAuth: 'signIn' }));
		dispatch(authActions.setToggleAuthModal());
	};

	const closeAuthModal = (lockAuthModal) => {
		if (!lockAuthModal) {
			dispatch(authActions.setToggleAuthModal());
		}
	};

	const setAuthFormType = (typeAuth) => {
		dispatch(authActions.setTypeAuth({ typeAuth }));
	};

	const signUp = async (alert, data, requestAuth = false) => {
		try {
			dispatch(authActions.setLockAuthModal({ lock: true }));
			alert.setToggleAlert(true);
			alert.setIconAlert('loading');
			alert.setTitleAlert('Регистрация...');
			const response = await authService.registration(data);

			if (response.status === 200) {
				alert.setIconAlert('success');
				alert.setTitleAlert('Вы зарегистрировались');
				setTimeout(() => {
					alert.setToggleAlert(false);
					alert.setIconAlert(null);
					alert.setTitleAlert(null);
					dispatch(authActions.setLockAuthModal({ lock: false }));
					dispatch(authActions.setToggleStatusAuth({ toggle: true }));
					dispatch(authActions.setToggleLoadedAuth({ toggle: true }));
					dispatch(authActions.setToggleAuthModal());
					if (requestAuth) {
						dispatch(authActions.setToggleRequestAuth({ toggle: false }));
						setLocationPage();
					}
					dispatch(userActions.setUser({ ...response.data }));
				}, 1000);

				return response.data;
			}

			alert.setToggleAlert(false);
			alert.setIconAlert(null);
			alert.setTitleAlert(null);
			dispatch(authActions.setLockAuthModal({ lock: false }));
			throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
				arrErrors: error.arrErrors,
			};
		}
	};

	const signIn = async (alert, data, requestAuth = false) => {
		try {
			dispatch(authActions.setLockAuthModal({ lock: true }));
			alert.setToggleAlert(true);
			alert.setIconAlert('loading');
			alert.setTitleAlert('Авторизация...');
			const response = await authService.logIn(data);

			if (response.status === 200) {
				alert.setIconAlert('success');
				alert.setTitleAlert(`Привет, ${response.data.userName}!`);
				setTimeout(() => {
					alert.setToggleAlert(false);
					alert.setIconAlert(null);
					alert.setTitleAlert(null);
					dispatch(authActions.setLockAuthModal({ lock: false }));
					dispatch(authActions.setToggleStatusAuth({ toggle: true }));
					dispatch(authActions.setToggleLoadedAuth({ toggle: true }));
					dispatch(authActions.setToggleAuthModal());
					if (requestAuth) {
						dispatch(authActions.setToggleRequestAuth({ toggle: false }));
						setLocationPage();
					}
					dispatch(userActions.setUser({ ...response.data }));
				}, 1000);
				return 'success';
			}

			alert.setToggleAlert(false);
			alert.setIconAlert(null);
			alert.setTitleAlert(null);
			dispatch(authActions.setLockAuthModal({ lock: false }));
			throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
				arrErrors: error.arrErrors,
			};
		}
	};

	const signOut = async () => {
		setLocationPage('/');
		dispatch(userActions.resetUser());
		dispatch(authActions.setToggleStatusAuth({ toggle: false }));
		await authService.logOut();
	};

	const refresh = async (accessToken) => {
		try {
			if (accessToken) {
				const response = await authService.refresh();
				if (response.status === 200) {
					console.log('обновлен токен');
					dispatch(authActions.setToggleLoadedAuth({ toggle: true }));
					dispatch(authActions.setToggleStatusAuth({ toggle: true }));
					dispatch(userActions.setUser({ ...response.data }));
					return response.data;
				}
				console.log('не обновлен токен');
				dispatch(authActions.setToggleLoadedAuth({ toggle: true }));
				throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
			}
			dispatch(authActions.setToggleLoadedAuth({ toggle: true }));
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
			};
		}
	};

	return { openAuthModal, closeAuthModal, setAuthFormType, signUp, signIn, signOut, refresh };
};

export { useAuthController };
