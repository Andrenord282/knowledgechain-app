//-----hooks-----//
import { useState } from 'react';

//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import {
	selectRequestAuth,
	selectStatusAuthUser,
	selectToggleAuthModal,
	selectIsLoadedAuth,
} from '../../store/slices/authSlice';

//-----actions-----//
import {
	toggleRequestAuth,
	toggleAuthModal,
	toggleStatusAuthUser,
	toggleIsLoadedAuth,
} from '../../store/slices/authSlice';

const useAuthSlice = () => {
	const dispatch = useDispatch();
	const requestAuth = useSelector(selectRequestAuth);
	const visibleAuthModal = useSelector(selectToggleAuthModal);
	const isLoadedAuth = useSelector(selectIsLoadedAuth);
	const statusAuthUser = useSelector(selectStatusAuthUser);
	const [typeAuthForm, setTypeAuthForm] = useState('signIn');
	const [toggleVisibleAuthForm, setVisibleAuthForm] = useState('visble');
	const [lockAuthModal, setLockAuthModal] = useState(false);

	const setToggleRequestAuth = (toggle) => {
		dispatch(toggleRequestAuth({ toggle: toggle }));
	};

	const setToggleIsLoadedAuth = (toggle) => {
		dispatch(toggleIsLoadedAuth({ toggle: toggle }));
	};

	const setToggleAuthModal = (toggle) => {
		dispatch(toggleAuthModal({ toggle: toggle }));
	};

	const setAuthFormState = () => {
		switch (true) {
			case typeAuthForm === 'signIn':
				setTypeAuthForm('signUp');
				break;
			case typeAuthForm === 'signUp':
				setTypeAuthForm('signIn');
				break;
		}
	};

	const closeAuthModal = () => {
		if (toggleAuthModal && !lockAuthModal) {
			dispatch(toggleAuthModal({ toggle: false }));
			setTypeAuthForm('signIn');
		}
	};

	const toggleLockAuthModal = () => {
		setLockAuthModal((state) => !state);
	};

	const setStatusAuthUser = (status) => {
		dispatch(toggleStatusAuthUser({ status: status }));
	};

	return {
		requestAuth,
		setToggleRequestAuth,
		isLoadedAuth,
		setToggleIsLoadedAuth,
		visibleAuthModal,
		setToggleAuthModal,
		typeAuthForm,
		setAuthFormState,
		toggleVisibleAuthForm,
		setVisibleAuthForm,
		closeAuthModal,
		toggleLockAuthModal,
		setStatusAuthUser,
		statusAuthUser,
	};
};

export default useAuthSlice;
