//-----hooks-----//
import { useEffect } from 'react';

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectToggleAuthModal, selectLockAuthModal, selectTypeAuth } from 'store/authSlice';

//-----сomponents-----//
import Modal from 'сomponents/Modal';
import AuthSignUp from './сomponents/AuthSignUp';
import AuthSignIn from './сomponents/AuthSignIn';

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
		<Modal isOpen={toggleAuthModal} onClose={handlerCloseAuthModal}>
			{typeAuth === 'signIn' && <AuthSignIn classes="modal__item" />}
			{typeAuth === 'signUp' && <AuthSignUp classes="modal__item" />}
		</Modal>
	);
};

export default Auth;
