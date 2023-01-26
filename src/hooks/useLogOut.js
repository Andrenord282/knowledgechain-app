import { useDispatch } from 'react-redux';
import { toggleAuthUser, resetUser } from 'store/slices/userSlice/userSlice';
import { resetUserActivityPosts } from 'store/slices/userActivityPostsSlice/userActivityPostsSlice';
import authService from 'services/authService';

const useLogOut = () => {
	const dispatch = useDispatch();

	return async () => {
		await authService.logOut();
		dispatch(resetUser());
		dispatch(toggleAuthUser());
		dispatch(resetUserActivityPosts());
	};
};

export default useLogOut;
