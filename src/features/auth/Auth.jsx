import useAuthForm from './hooks/useAuthForm';

import SignIn from './SignIn';
import SignUp from './SignUp';
import './Auth.scss';

const Auth = (props) => {
	const { toggleAuth, setToggleAuth } = props;
	const authForm = useAuthForm(setToggleAuth);

	if (!toggleAuth) return;

	return (
		<div className="auth" onClick={authForm.hanlderCloseAuth}>
			{authForm.typeAuth === 'signIn' && (
				<SignIn
					handlerSignUp={authForm.handlerSignUp}
					hanlderCloseAuth={authForm.hanlderCloseAuth}
					handlerLockAuthModal={authForm.setLockAuthModal}
					classes="auth__form"
				/>
			)}
			{authForm.typeAuth === 'signUp' && (
				<SignUp
					handlerSignIn={authForm.handlerSignIn}
					hanlderCloseAuth={authForm.hanlderCloseAuth}
					handlerLockAuthModal={authForm.setLockAuthModal}
					classes="auth__form"
				/>
			)}
		</div>
	);
};

export default Auth;
