//-----modules-----//
import authService from 'services/axios/api/authService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import { useState } from 'react';
import useAlertState from 'hooks/useAlertState';
import useNavigateLocation from 'hooks/useNavigateLocation';
import useUserSlice from 'hooks/slices/useUserSlice';

//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectLoadedAuth, selectRequestAuth, selectStatusAuth, selectToggleAuthModal } from 'store/authSlice';

//-----actions-----//
import { authActions } from 'store/authSlice';

//-----models-----//

const useAuthSlice = () => {
	const accessToken = localStorage.getItem('accessToken');
	const { setLocationPage } = useNavigateLocation();
	const dispatch = useDispatch();
	const userSlice = useUserSlice();
	const alert = useAlertState();
	const loadedAuth = useSelector(selectLoadedAuth);
	const requestAuth = useSelector(selectRequestAuth);
	const statusAuth = useSelector(selectStatusAuth);
	const visibleAuthModal = useSelector(selectToggleAuthModal);

	const [visibleAuthForm, setVisibleAuthForm] = useState('visible');
	const [typeAuth, setTypeAuth] = useState('signIn');
	const [lockAuthModal, setLockAuthModal] = useState(false);

	const handlerSetToggleStatusAuth = (status) => {
		dispatch(authActions.setToggleStatusAuth({ status }));
	};

	const handlerSetToggleLoadedAuth = (toggle) => {
		dispatch(authActions.setToggleLoadedAuth({ toggle }));
	};

	const handlerSetToggleAuthModal = (toggle) => {
		dispatch(authActions.setToggleAuthModal({ toggle }));
	};

	const handlerSetToggleLockAuthModal = () => {
		setLockAuthModal((prevToggle) => !prevToggle);
	};

	const handlerSetToggleRequestAuth = (toggle) => {
		dispatch(authActions.setToggleRequestAuth({ toggle }));
	};

	const handlerSetAuthFormState = () => {
		switch (true) {
			case typeAuth === 'signIn':
				setTypeAuth('signUp');
				break;
			case typeAuth === 'signUp':
				setTypeAuth('signIn');
				break;
		}
	};

	const handlerCloseAuthModal = () => {
		if (visibleAuthForm && !lockAuthModal) {
			handlerSetToggleAuthModal(false);
			setTypeAuth('signIn');
		}
	};

	const handlerAuthSignUp = async (data) => {
		try {
			handlerSetToggleLockAuthModal(true);
			setVisibleAuthForm('');
			alert.setToggleAlert(true);
			alert.setFields.iconAlert('loading');
			alert.setFields.titleAlert('Регистрация...');
			const response = await authService.registration(data);

			if (response.status === 200) {
				alert.setFields.iconAlert('success');
				alert.setFields.titleAlert('Вы зарегистрировались');
				setTimeout(() => {
					alert.setToggleAlert(false);
					alert.setFields.iconAlert(null);
					alert.setFields.titleAlert(null);
					handlerSetToggleLockAuthModal(false);
					handlerCloseAuthModal();
					setVisibleAuthForm('visible');
					handlerSetToggleStatusAuth(true);
					handlerSetToggleLoadedAuth(true);
					handlerSetToggleAuthModal(false);
					if (requestAuth) {
						handlerSetToggleRequestAuth(false);
						setLocationPage();
					}
					userSlice.handlerSetUser(response.data);
				}, 1000);

				return response.data;
			}

			alert.setToggleAlert(false);
			alert.setFields.iconAlert(null);
			alert.setFields.titleAlert(null);
			handlerSetToggleLockAuthModal(false);
			setVisibleAuthForm('visible');
			throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
				arrErrors: error.arrErrors,
			};
		}
	};

	const hanlderAuthSignIn = async (data) => {
		try {
			handlerSetToggleLockAuthModal(true);
			setVisibleAuthForm('');
			alert.setToggleAlert(true);
			alert.setFields.iconAlert('loading');
			alert.setFields.titleAlert('Авторизация...');
			const response = await authService.logIn(data);

			if (response.status === 200) {
				alert.setFields.iconAlert('success');
				alert.setFields.titleAlert(`Привет, ${response.data.userName}!`);
				setTimeout(() => {
					alert.setToggleAlert(false);
					alert.setFields.iconAlert(null);
					alert.setFields.titleAlert(null);
					handlerSetToggleLockAuthModal(false);
					handlerCloseAuthModal();
					setVisibleAuthForm('visible');
					handlerSetToggleStatusAuth(true);
					handlerSetToggleLoadedAuth(true);
					handlerSetToggleAuthModal(false);
					if (requestAuth) {
						handlerSetToggleRequestAuth(false);
						setLocationPage();
					}
					userSlice.handlerSetUser(response.data);
				}, 1000);
				return 'success';
			}

			alert.setToggleAlert(false);
			alert.setFields.iconAlert(null);
			alert.setFields.titleAlert(null);
			handlerSetToggleLockAuthModal(false);
			setVisibleAuthForm('visible');
			throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
				arrErrors: error.arrErrors,
			};
		}
	};

	return {
		alert,
		loadedAuth,
		requestAuth,
		visibleAuthModal,
		statusAuth,
		typeAuth,
		visibleAuthForm,
		lockAuthModal,
		handlerSetToggleAuthModal,
		handlerSetToggleRequestAuth,
		handlerSetAuthFormState,
		handlerCloseAuthModal,
		hanlderAuthSignIn,
		handlerAuthSignUp,
	};
};

export default useAuthSlice;
