import { useState } from 'react';

const useSignUpForm = () => {
	const [email, setEmail] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const onChengeEmail = (e) => {
		setEmail(e.target.value);
	};
	const onChengelogin = (e) => {
		setLogin(e.target.value);
	};
	const onChengePassword = (e) => {
		setPassword(e.target.value);
	};

	return { email, login, password, onChengeEmail, onChengelogin, onChengePassword };
};

export default useSignUpForm;
