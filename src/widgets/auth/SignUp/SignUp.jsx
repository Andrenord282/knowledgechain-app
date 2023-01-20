import useSignUpForm from './hooks/useSignUpForm';
import useSignUp from './hooks/useSignUp';

import SignUpForm from '../SignUpForm';
import { AlertLoading } from 'сomponents/Alert';
import { AlertSuccess } from 'сomponents/Alert';
import { AlertError } from 'сomponents/Alert';

const SignUp = (props) => {
	const { classes, handlerSignIn, handlerLockAuthModal, hanlderCloseAuth } = props;
	const form = useSignUpForm();
	const signUp = useSignUp(form.email, form.login, form.password, handlerLockAuthModal);

	return (
		<>
			{signUp.statusReq === null && (
				<SignUpForm
					classes={classes}
					email={form.email}
					login={form.login}
					password={form.password}
					onChengeEmail={form.onChengeEmail}
					onChengelogin={form.onChengelogin}
					onChengePassword={form.onChengePassword}
					hanlderCloseAuth={hanlderCloseAuth}
					handlerSignIn={handlerSignIn}
					handlerRegistation={signUp.handlerRegistation}
				/>
			)}
			{signUp.statusReq === 'loading' && <AlertLoading {...signUp.alertMessage} />}
			{signUp.statusReq === 'success' && <AlertSuccess {...signUp.alertMessage} />}
			{signUp.statusReq === 'error' && <AlertError {...signUp.alertMessage} />}
		</>
	);
};

export default SignUp;
