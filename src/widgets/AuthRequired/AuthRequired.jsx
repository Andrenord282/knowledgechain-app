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
import { selectLoadedAuth, selectStatusAuth } from 'store/authSlice';

const AuthRequired = () => {
	const loadedAuth = useSelector(selectLoadedAuth);
	const statusAuth = useSelector(selectStatusAuth);
	const handlerNavigate = useNavigateLocation();
	const authController = useAuthController();

	useEffect(() => {
		if (loadedAuth && !statusAuth) {
			authController.setToggleRequestAuth(true);
			authController.openAuthModal();
		}
	}, [loadedAuth, statusAuth]);

	return loadedAuth && !statusAuth ? (
		<Navigate to="/" state={{ from: handlerNavigate.location.pathname }} replace />
	) : (
		<Outlet />
	);
};

export default AuthRequired;
