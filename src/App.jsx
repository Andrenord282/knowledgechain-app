//-----router-----//
import { Routes, Route } from 'react-router-dom';

//-----pages-----//
import Layout from 'layouts/Layout';
import PageMain from 'pages/PageMain';
import PageNewPost from 'pages/PageNewPost';

//-----widgets-----//
import Auth from 'widgets/Auth';
import AuthRequired from 'widgets/AuthRequired';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Auth />}>
				<Route path="/" element={<PageMain />} />
				<Route element={<AuthRequired />}>
					<Route path="/new-post" element={<PageNewPost />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
