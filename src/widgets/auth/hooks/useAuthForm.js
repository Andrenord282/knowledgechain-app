import { useState } from 'react';

const useAuthForm = (toggleAuth) => {
	const [typeAuth, setTypeAuth] = useState('signIn');
	const [lockAuthModal, setLockAuthModal] = useState(false);

	const handlerSignIn = () => {
		setTypeAuth('signIn');
	};

	const handlerSignUp = () => {
		setTypeAuth('signUp');
	};

	const hanlderCloseAuth = () => {
		if (lockAuthModal) return;
		setTypeAuth('signIn');
		toggleAuth();
	};

	return { typeAuth, handlerSignIn, handlerSignUp, setLockAuthModal, hanlderCloseAuth };
};

export default useAuthForm;
