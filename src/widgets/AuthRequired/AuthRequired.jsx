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
		if (authSlice.isLoadedAuth && !authSlice.statusAuth) {
			authSlice.handlerToggleRequestAuth(true);
			authSlice.handlerToggleAuthModal(true);
		}
	}, [authSlice.isLoadedAuth, authSlice.statusAuth]);

	return authSlice.isLoadedAuth && !authSlice.statusAuth && !userSlice.isLoadedUser ? (
		<Navigate to="/" state={{ from: handlerNavigate.location.pathname }} replace />
	) : (
		<Outlet />
	);
};

export default AuthRequired;
