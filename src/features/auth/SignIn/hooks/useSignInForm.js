import { useState } from 'react';

const useSignInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChengeEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChengePassword = (e) => {
		setPassword(e.target.value);
	};

	return { email, password, onChengeEmail, onChengePassword };
};

export default useSignInForm;