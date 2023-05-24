//-----hooks-----//
import { useEffect } from 'react';
import useAuthSlice from 'hooks/slices/useAuthSlice';

//-----pages-----//
import Layout from 'layouts/Layout';

//-----сomponents-----//
import Alert from 'сomponents/Alert';
import AuthSignUp from './сomponents/AuthSignUp';
import AuthSignIn from './сomponents/AuthSignIn';

//-----style-----//
import './Auth.scss';

const Auth = () => {
	const authSlice = useAuthSlice();

	useEffect(() => {
		authSlice.handlerAuthRefresh();
	}, []);

	return (
		<>
			<Layout />
			{authSlice.visibleAuthModal && (
				<div
					className="auth"
					onClick={() => {
						authSlice.handlerCloseAuthModal();
					}}>
					{!authSlice.visibleAuthForm && authSlice.alert.toggleAlert && (
						<Alert classes="auth__item" alertFields={authSlice.alert.alertFields} />
					)}
					{authSlice.typeAuth === 'signUp' && (
						<AuthSignUp authSlice={authSlice} setAuthAlert={authSlice.alert} classes="auth__item" />
					)}
					{authSlice.typeAuth === 'signIn' && (
						<AuthSignIn authSlice={authSlice} setAuthAlert={authSlice.alert} classes="auth__item" />
					)}
				</div>
			)}
		</>
	);
};

export default Auth;
