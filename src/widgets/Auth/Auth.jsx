//-----hooks-----//
import { useEffect } from 'react';

//-----controllers-----//
import { useAuthController } from './controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectToggleAuthModal, selectLockAuthModal, selectTypeAuth } from 'store/authSlice';

//-----pages-----//
import Layout from 'layouts/Layout';

//-----сomponents-----//
import AuthSignUp from './сomponents/AuthSignUp';
import AuthSignIn from './сomponents/AuthSignIn';

//-----style-----//
import './Auth.scss';

const Auth = () => {
	const accessToken = localStorage.getItem('accessToken');
	const toggleAuthModal = useSelector(selectToggleAuthModal);
	const lockAuthModal = useSelector(selectLockAuthModal);
	const typeAuth = useSelector(selectTypeAuth);
	const authController = useAuthController();

	useEffect(() => {
		authController.refresh(accessToken);
	}, []);

	const handlerCloseAuthModal = () => {
		authController.closeAuthModal(lockAuthModal);
	};

	return (
		<>
			<Layout />
			{toggleAuthModal && (
				<div className="auth" onClick={handlerCloseAuthModal}>
					{typeAuth === 'signIn' && <AuthSignIn classes="auth__item" />}
					{typeAuth === 'signUp' && <AuthSignUp classes="auth__item" />}
				</div>
			)}
		</>
	);
};

export default Auth;
