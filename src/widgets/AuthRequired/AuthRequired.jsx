//-----router-----//
import { Outlet, Navigate } from 'react-router-dom';

//-----hooks-----//
import { useEffect } from 'react';
import useAuthSlice from 'hooks/slices/useAuthSlice';
import useUserSlice from 'hooks/slices/useUserSlice';
import useNavigateLocation from 'hooks/useNavigateLocation';

const AuthRequired = () => {
	const authModel = useAuthSlice();
	const userModel = useUserSlice();
	const handlerNavigate = useNavigateLocation();

	useEffect(() => {
		if (authModel.isLoadedAuth && !authModel.statusAuthUser) {
			authModel.setToggleRequestAuth(true);
			authModel.setToggleAuthModal(true);
		}
	}, [authModel.isLoadedAuth, authModel.statusAuthUser]);

	return authModel.isLoadedAuth && !authModel.statusAuthUser && !userModel.isLoadedUser ? (
		<Navigate to="/" state={{ from: handlerNavigate.location.pathname }} replace />
	) : (
		<Outlet />
	);
};

export default AuthRequired;
