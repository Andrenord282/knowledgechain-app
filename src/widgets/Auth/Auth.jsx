//-----hooks-----//
import { useEffect } from 'react';

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectAuthStatus, selectToggleAuthModal, selectLockAuthModal, selectTypeAuth, } from 'store/authSlice';

//-----сomponents-----//
import Render from "сomponents/Render";
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
    }, [authStatus, authController]);

    const handlerCloseAuthModal = () => {
        authController.closeAuthModal(lockAuthModal);
    };

    return (
        <Modal isOpen={toggleAuthModal} onClose={handlerCloseAuthModal}>
            {typeAuth === 'signIn' && <AuthSignIn classes="modal__item" />}
            {typeAuth === 'signUp' && <Render name='AuthSignIn'><AuthSignUp classes="modal__item" /></Render>}
        </Modal>
    );
};

export default Auth;
