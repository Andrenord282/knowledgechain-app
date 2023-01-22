import './wdyr';
import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setUser, toggleAuthUser, toggleLoadedUser } from 'store/slices/userSlice/userSlice';

import authService from 'services/authService';

import DefaultLayout from 'layouts/DefaultLayout';
import Profile from 'pages/Profile/Profile';
import NotFound from 'сomponents/NotFound/NotFound';
import Main from 'pages/Main';
import NewPost from 'pages/NewPost';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			authService.checkAuth().then((response) => {
				if (response.status === 200) {
					dispatch(toggleAuthUser());
					dispatch(setUser(response.data));
					dispatch(toggleLoadedUser());
				}
				if (response.status === 400) {
					dispatch(toggleLoadedUser());
				}
			});
		} else {
			dispatch(toggleLoadedUser());
	}
	}, [dispatch]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route index element={<Main />} />
					<Route path="profile" element={<Profile />} />
					<Route path="new-post" element={<NewPost />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
