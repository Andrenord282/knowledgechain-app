//-----hooks-----//
import { useState } from 'react';

const useAuthState = (props) => {
	const { toggleAuth, setToggleAuth } = props;
	const [lockAuthModal, setLockAuthModal] = useState(false);
	const [toggleVisibleAuthForm, setVisibleAuthForm] = useState('visble');
	const [typeAuthForm, setTypeAuthForm] = useState('signIn');

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

	const closeAuth = () => {
		if (toggleAuth && !lockAuthModal) {
			setTypeAuthForm('signIn');
			setToggleAuth();
		}
	};

	const toggleLockAuthModal = () => {
		setLockAuthModal((state) => !state);
	};

	return {
		toggleVisibleAuthForm,
		setVisibleAuthForm,
		typeAuthForm,
		setAuthFormState,
		closeAuth,
		toggleLockAuthModal,
	};
};

export default useAuthState;
