/* eslint-disable react-hooks/exhaustive-deps */
//-----router-----//
import { Outlet, Navigate } from 'react-router-dom';

//-----hooks-----//
import { useEffect } from 'react';
import { useNavigateLocation } from 'hooks/useNavigateLocation';

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectAuthStatus } from 'store/authSlice';

const AuthRequired = () => {
    const authStatus = useSelector(selectAuthStatus);
    const handleNavigate = useNavigateLocation();
    const authController = useAuthController();

    useEffect(() => {
        if (authStatus === 'unidentifiedUser') {
            authController.setToggleRequestAuth(true);
            authController.openAuthModal();
        }

    }, [authStatus]);

    if (authStatus === 'unidentifiedUser') {
        return <Navigate to="/" state={{ from: handleNavigate.location.pathname }} replace />;
    }

    if (authStatus === 'identifiedUser') {
        return <Outlet />
    }

};

export default AuthRequired;
