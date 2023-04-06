//-----hooks-----//
import useAuthState from './hooks/useAuthState';
import useAuthAlertState from './hooks/useAuthAlertState';

//-----widgets-----//
import Alert from 'widgets/Alert';

//-----сomponents-----//
import AuthSignUp from './сomponents/AuthSignUp';
import AuthSignIn from './сomponents/AuthSignIn';

//-----style-----//
import './Auth.scss';

const Auth = (props) => {
	const { toggleAuth } = props;
	const authState = useAuthState(props);
	const authAlertState = useAuthAlertState();

	if (!toggleAuth) return;

	return (
		<div className="auth" onClick={authState.closeAuth}>
			{!authState.toggleVisibleAuthForm && authAlertState.toggleAlert && (
				<Alert classes="auth__item" alertFields={authAlertState.alertFields} />
			)}
			{authState.typeAuthForm === 'signUp' && (
				<AuthSignUp authState={authState} setAuthAlert={authAlertState} classes="auth__item" />
			)}
			{authState.typeAuthForm === 'signIn' && (
				<AuthSignIn authState={authState} setAuthAlert={authAlertState} classes="auth__item" />
			)}
		</div>
	);
};

export default Auth;
