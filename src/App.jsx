import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setUser, toggleAuthUser, toggleLoadedUser } from 'Redux/slices/userSlice';

import authService from 'services/authService';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'Firebase-services/index.js';

import PageLayout from 'pages/PageLayout/PageLayout';
import Main from 'сomponents/Main/Main';
import NewPost from 'сomponents/NewPost/NewPost';
import Profile from 'сomponents/Profile/Profile';
import NotFound from 'сomponents/NotFound/NotFound';

function App() {
	const dispatch = useDispatch();
	const { isLoadedUser } = useSelector((state) => state.user);

	useEffect(() => {
		if (!isLoadedUser) {
			authService.checkAuth((respons) => {
				const { userName, userImgUrl, email } = respons;
				dispatch(setUser({ userName, userImgUrl, email }));
				dispatch(toggleAuthUser());
				dispatch(toggleLoadedUser());
			});
		
		}
	}, [isLoadedUser]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<PageLayout />}>
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
