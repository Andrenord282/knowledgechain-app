import { useDispatch } from 'react-redux';
import { toggleAuthUser } from 'store/slices/userSlice/userSlice';
import authService from 'services/authService';

const useLogOut = () => {
	const dispatch = useDispatch();

	return async () => {
		await authService.logOut();
		dispatch(toggleAuthUser());
	};
};

export default useLogOut;
