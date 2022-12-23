import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from 'Firebase-services/index';

const registration = async (user) => {
	try {
		const { email, login, password } = user;
		const registrationUser = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		if (registrationUser.user) {
			await updateProfile(registrationUser.user, {
				displayName: login,
			});
		}
		return { status: true };
	} catch (error) {
		const errorCode = error.code;
		let errorMessage = error.message;
		console.log(errorCode, errorMessage);
		return { status: false, errorMessage };
	}
};

export default registration;
