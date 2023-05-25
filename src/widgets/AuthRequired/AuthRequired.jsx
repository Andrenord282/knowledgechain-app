//-----router-----//
import { Outlet, Navigate } from 'react-router-dom';

//-----hooks-----//
import { useEffect } from 'react';
import useAuthSlice from 'hooks/slices/useAuthSlice';
import useUserSlice from 'hooks/slices/useUserSlice';
import useNavigateLocation from 'hooks/useNavigateLocation';

const AuthRequired = () => {
	const authSlice = useAuthSlice();
	const userSlice = useUserSlice();
	const handlerNavigate = useNavigateLocation();

	useEffect(() => {
		if (authSlice.loadedAuth && !authSlice.statusAuth) {
			authSlice.handlerSetToggleRequestAuth(true);
			authSlice.handlerSetToggleAuthModal(true);
		}
	}, [authSlice.loadedAuth, authSlice.statusAuth]);

	return authSlice.loadedAuth && !authSlice.statusAuth && !userSlice.loadedUser ? (
		<Navigate to="/" state={{ from: handlerNavigate.location.pathname }} replace />
	) : (
		<Outlet />
	);
};

export default AuthRequired;
