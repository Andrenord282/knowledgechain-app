import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'Firebase-services/index';

const logIn = async (user) => {
	try {
		const { email, password } = user;
		const logInUser = await signInWithEmailAndPassword(auth, email, password);
		if (logInUser.user) {
			return { status: true };
		}
	} catch (error) {
		const errorCode = error.code;
		let errorMessage = null;
		switch (true) {
			case errorCode === 'auth/user-not-found':
				errorMessage = 'Пользователь не найден';
				return { status: false, errorMessage };
			case errorCode === 'auth/wrong-password':
				errorMessage = 'Неверный пароль';
				return { status: false, errorMessage };
			default:
				break;
		}
	}
};

export default logIn;
