//-----modules-----//
import authService from 'services/axios/api/authService';

//-----hooks-----//
import useNavigateLocation from 'hooks/useNavigateLocation';

//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { userActions } from 'store/userSlice';
import { authActions } from 'store/authSlice';

const useAuthController = () => {
	const dispatch = useDispatch();
	const { setLocationPage } = useNavigateLocation();

	const openAuthModal = () => {
		dispatch(authActions.setTypeAuth({ typeAuth: 'signIn' }));
		dispatch(authActions.setToggleAuthModal());
	};

	const signOut = async () => {
		setLocationPage('/');
		dispatch(userActions.resetUser());
		dispatch(authActions.setToggleStatusAuth({ toggle: false }));
		await authService.logOut();
	};

	return { openAuthModal, signOut };
};

export { useAuthController };
