import { signOut } from 'firebase/auth';
import { auth } from 'Firebase-services/index';

const logOut = async () => {
	try {
		await signOut(auth);
		return true;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
		return false;
	}
};

export default logOut;
