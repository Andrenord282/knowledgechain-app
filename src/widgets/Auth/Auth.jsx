//-----hooks-----//
import { useEffect } from 'react';
import useAuthSlice from 'hooks/slices/useAuthSlice';
import useAuthRefresh from './hooks/useAuthRefresh';
import useAuthAlertState from './hooks/useAuthAlertState';

//-----widgets-----//
import Alert from 'widgets/Alert';

//-----сomponents-----//
import AuthSignUp from './сomponents/AuthSignUp';
import AuthSignIn from './сomponents/AuthSignIn';

//-----style-----//
import './Auth.scss';
import Layout from 'layouts/Layout';

const Auth = () => {
	const authModel = useAuthSlice();
	const authAlertState = useAuthAlertState();
	const authRefresh = useAuthRefresh();

	useEffect(() => {
		authRefresh();
	}, []);

	return (
		<>
			{authModel.isLoadedAuth && <Layout />}
			{authModel.visibleAuthModal && (
				<div
					className="auth"
					onClick={() => {
						authModel.setToggleAuthModal(false);
					}}>
					{!authModel.toggleVisibleAuthForm && authAlertState.toggleAlert && (
						<Alert classes="auth__item" alertFields={authAlertState.alertFields} />
					)}
					{authModel.typeAuthForm === 'signUp' && (
						<AuthSignUp authModel={authModel} setAuthAlert={authAlertState} classes="auth__item" />
					)}
					{authModel.typeAuthForm === 'signIn' && (
						<AuthSignIn authModel={authModel} setAuthAlert={authAlertState} classes="auth__item" />
					)}
				</div>
			)}
		</>
	);
};

export default Auth;
