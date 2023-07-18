/* eslint-disable react-hooks/exhaustive-deps */
//-----router-----//
import { Outlet, Navigate } from 'react-router-dom';

//-----hooks-----//
import { useEffect } from 'react';
import useNavigateLocation from 'hooks/useNavigateLocation';

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectAuthStatus } from 'store/authSlice';

const AuthRequired = () => {
    const authStatus = useSelector(selectAuthStatus);
    const handlerNavigate = useNavigateLocation();
    const authController = useAuthController();

    useEffect(() => {
        if (authStatus === 'init' || authStatus === 'unidentifiedUser') {
            authController.setToggleRequestAuth(true);
            authController.openAuthModal();
        }
    }, [authStatus]);

    return authStatus === 'init' || authStatus === 'unidentifiedUser' ? (
        <Navigate to="/" state={{ from: handlerNavigate.location.pathname }} replace />
    ) : (
        <Outlet />
    );
};

export default AuthRequired;
