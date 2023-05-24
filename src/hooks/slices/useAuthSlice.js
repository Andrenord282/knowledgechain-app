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
import { selectIsLoadedAuth, selectRequestAuth, selectStatusAuth, selectToggleAuthModal } from 'store/slices/authSlice';

//-----actions-----//
import { toggleIsLoadedAuth, toggleRequestAuth, toggleAuthModal, toggleStatusAuth } from 'store/slices/authSlice';

//-----models-----//

const useAuthSlice = () => {
	const accessToken = localStorage.getItem('accessToken');
	const { setLocationPage } = useNavigateLocation();
	const dispatch = useDispatch();
	const userSlice = useUserSlice();
	const alert = useAlertState();
	const isLoadedAuth = useSelector(selectIsLoadedAuth);
	const requestAuth = useSelector(selectRequestAuth);
	const statusAuth = useSelector(selectStatusAuth);
	const visibleAuthModal = useSelector(selectToggleAuthModal);

	const [typeAuth, setTypeAuth] = useState('signIn');
	const [visibleAuthForm, setVisibleAuthForm] = useState('visible');
	const [lockAuthModal, setLockAuthModal] = useState(false);

	const handlerToggleStatusAuth = (status) => {
		dispatch(toggleStatusAuth({ status }));
	};

	const handlerToggleIsLoadedAuth = (toggle) => {
		dispatch(toggleIsLoadedAuth({ toggle }));
	};

	const handlerToggleAuthModal = (toggle) => {
		dispatch(toggleAuthModal({ toggle }));
	};

	const handlerToggleLockAuthModal = () => {
		setLockAuthModal((state) => !state);
	};

	const handlerCloseAuthModal = () => {
		if (toggleAuthModal && !lockAuthModal) {
			dispatch(toggleAuthModal({ toggle: false }));
			setTypeAuth('signIn');
		}
	};

	const handlerToggleRequestAuth = (toggle) => {
		dispatch(toggleRequestAuth({ toggle }));
	};

	const handlerAuthFormState = () => {
		switch (true) {
			case typeAuth === 'signIn':
				setTypeAuth('signUp');
				break;
			case typeAuth === 'signUp':
				setTypeAuth('signIn');
				break;
		}
	};

	const handlerAuthSignUp = async (data) => {
		try {
			handlerToggleLockAuthModal(true);
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
					handlerToggleLockAuthModal(false);
					handlerCloseAuthModal();
					setVisibleAuthForm('visible');
					handlerToggleStatusAuth(true);
					handlerToggleIsLoadedAuth(true);
					handlerToggleAuthModal(false);
					if (requestAuth) {
						handlerToggleRequestAuth(false);
						setLocationPage();
					}
					userSlice.handlerWriteSetUser(response.data);
				}, 700);

				return response.data;
			}

			alert.setToggleAlert(false);
			alert.setFields.iconAlert(null);
			alert.setFields.titleAlert(null);
			handlerToggleLockAuthModal(false);
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
			handlerToggleLockAuthModal(true);
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
					handlerToggleLockAuthModal(false);
					handlerCloseAuthModal();
					setVisibleAuthForm('visible');
					handlerToggleStatusAuth(true);
					handlerToggleIsLoadedAuth(true);
					handlerToggleAuthModal(false);
					if (requestAuth) {
						handlerToggleRequestAuth(false);
						setLocationPage();
					}
					userSlice.handlerWriteSetUser(response.data);
				}, 1000);
				return 'success';
			}

			alert.setToggleAlert(false);
			alert.setFields.iconAlert(null);
			alert.setFields.titleAlert(null);
			handlerToggleLockAuthModal(false);
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

	const handlerAuthSignOut = async () => {
		setLocationPage();
		await authService.logOut();
		userSlice.handlerResetUser();
		handlerToggleStatusAuth(false);
	};

	const handlerAuthRefresh = async () => {
		try {
			if (accessToken) {
				const response = await authService.refresh();
				if (response.status === 200) {
					userSlice.handlerWriteSetUser(response.data);
					console.log('обновлен токен');
					handlerToggleStatusAuth(true);
					handlerToggleIsLoadedAuth(true);

					return response.data;
				}
				console.log('не обновлен токен');
				handlerToggleIsLoadedAuth(true);
				throw new errorService(response.data.errorName, response.data.message, response.data.arrErrors);
			}
			handlerToggleIsLoadedAuth(true);
		} catch (error) {
			return {
				errorName: error.name,
				errorMessage: error.message,
			};
		}
	};

	return {
		alert,
		isLoadedAuth,
		requestAuth,
		statusAuth,
		visibleAuthModal,
		typeAuth,
		visibleAuthForm,
		lockAuthModal,
		handlerToggleAuthModal,
		handlerCloseAuthModal,
		handlerToggleRequestAuth,
		handlerAuthFormState,
		hanlderAuthSignIn,
		handlerAuthSignUp,
		handlerAuthSignOut,
		handlerAuthRefresh,
	};
};

export default useAuthSlice;
