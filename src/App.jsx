import { Routes, Route } from 'react-router-dom';
import useRefreshAuth from 'hooks/useRefreshAuth';

import DefaultLayout from 'layouts/DefaultLayout';
import Profile from 'pages/Profile/Profile';
import NotFound from 'сomponents/NotFound/NotFound';
import Main from 'pages/Main';
import NewPost from 'pages/NewPost';

function App() {
	useRefreshAuth();

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
