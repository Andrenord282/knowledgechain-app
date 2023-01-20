import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toggleAuthUser, setUser } from 'store/slices/userSlice/userSlice';

import authService from 'services/authService';

const useSignIn = (email, password, lockAuthModal) => {
	const dispatch = useDispatch();
	const [statusReq, setStatusReq] = useState(null);
	const [alertMessage, setAlertMessage] = useState(null);

	const handlerLogIn = async () => {
		lockAuthModal(true);
		setStatusReq('loading');
		setAlertMessage({ title: 'Авторизация...' });

		const response = await authService.logIn({
			email,
			password,
		});
		if (response.status === 200) {
			setStatusReq('success');
			setAlertMessage({ title: 'Вы авторизованный пользователь' });
			setTimeout(() => {
				dispatch(setUser(response.data));
				dispatch(toggleAuthUser());
				setStatusReq(null);
				lockAuthModal(false);
			}, 300);
		} else if (response.status !== 200) {
			setStatusReq('error');
			setAlertMessage({ title: response.data.message });
			setTimeout(() => {
				setStatusReq(null);
				lockAuthModal(false);
			}, 300);
		}
	};

	return { statusReq, alertMessage, handlerLogIn };
};

export default useSignIn;
