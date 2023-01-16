import useSignInForm from './hooks/useSignInForm';
import useSignIn from './hooks/useSignIn';

import SignInForm from '../SignInForm';
import { AlertLoading } from 'сomponents/Alert';
import { AlertSuccess } from 'сomponents/Alert';
import { AlertError } from 'сomponents/Alert';

const SignIn = (props) => {
	const { classes, handlerSignUp, handlerLockAuthModal, hanlderCloseAuth } = props;
	const form = useSignInForm();
	const signIn = useSignIn(form.email, form.password, handlerLockAuthModal);

	return (
		<>
			{signIn.statusReq === null && (
				<SignInForm
					classes={classes}
					email={form.email}
					password={form.password}
					onChengeEmail={form.onChengeEmail}
					onChengePassword={form.onChengePassword}
					handlerSignUp={handlerSignUp}
					hanlderCloseAuth={hanlderCloseAuth}
					handlerLogIn={signIn.handlerLogIn}
				/>
			)}
			{signIn.statusReq === 'loading' && <AlertLoading {...signIn.alertMessage} />}
			{signIn.statusReq === 'success' && <AlertSuccess {...signIn.alertMessage} />}
			{signIn.statusReq === 'error' && <AlertError {...signIn.alertMessage} />}
		</>
	);
};

export default SignIn;
