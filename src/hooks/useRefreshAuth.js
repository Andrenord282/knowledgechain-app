import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setUser, toggleAuthUser, toggleLoadedUser } from 'store/slices/userSlice';
import { setUserActivityPosts } from 'store/slices/userActivityPostsSlice';

import authService from 'services/authService';
import userActivityPostsService from 'services/userActivityPostsService';

const useRefreshAuth = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const handlerRefreshAuth = async () => {
			if (localStorage.getItem('accessToken')) {
				const checkAuth = await authService.checkAuth();
				if (checkAuth.status === 200) {
					const userActivityPosts = await userActivityPostsService.getUserActivityPosts({
						idUser: checkAuth.data.idUser,
					});
					dispatch(setUserActivityPosts(userActivityPosts.data));
					dispatch(toggleAuthUser());
					dispatch(setUser(checkAuth.data));
					dispatch(toggleLoadedUser());
				}
				if (checkAuth.status === 400) {
					dispatch(toggleLoadedUser());
				}
			} else {
				dispatch(toggleLoadedUser());
			}
		};
		handlerRefreshAuth();
	}, [dispatch]);
};

export default useRefreshAuth;
