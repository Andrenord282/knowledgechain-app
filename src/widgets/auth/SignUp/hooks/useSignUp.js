import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toggleAuthUser, setUser } from 'store/slices/userSlice/userSlice';

import authService from 'services/authService';

const useSignUp = (email, userName, password, lockAuthModal) => {
	const dispatch = useDispatch();
	const [statusReq, setStatusReq] = useState(null);
	const [alertMessage, setAlertMessage] = useState(null);

	const handlerRegistation = async () => {
		lockAuthModal(true);
		const response = await authService.registration({
			email,
			userName,
			password,
		});
		setStatusReq('loading');
		setAlertMessage({ title: 'Регистрация...' });
		if (response.status === 200) {
			setStatusReq('success');
			setAlertMessage({ title: 'Вы зарегистрировались' });
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

	return { statusReq, alertMessage, handlerRegistation };
};

export default useSignUp;
