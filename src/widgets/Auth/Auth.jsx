/* eslint-disable react-hooks/exhaustive-deps */
//-----hooks-----//
import { useEffect } from 'react';

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectAuthStatus, selectToggleAuthModal, selectLockAuthModal, selectTypeAuth, } from 'store/authSlice';

//-----сomponents-----//
import Modal from 'сomponents/Modal';
import AuthSignIn from './сomponents/AuthSignIn';
import AuthSignUp from './сomponents/AuthSignUp';

const Auth = () => {
    const authStatus = useSelector(selectAuthStatus);
    const toggleAuthModal = useSelector(selectToggleAuthModal);
    const lockAuthModal = useSelector(selectLockAuthModal);
    const typeAuth = useSelector(selectTypeAuth);
    const authController = useAuthController();

    useEffect(() => {
        if (authStatus === 'init') {
            authController.refresh();
        }
    }, [authStatus]);

    const handleCloseAuthModal = () => {
        authController.closeAuthModal(lockAuthModal);
    };

    return (
        <Modal isOpen={toggleAuthModal} onClose={handleCloseAuthModal}>
            {typeAuth === 'signIn' && <AuthSignIn classes="modal__item" />}
            {typeAuth === 'signUp' && <AuthSignUp classes="modal__item" />}
        </Modal>
    );
};

export default Auth;
