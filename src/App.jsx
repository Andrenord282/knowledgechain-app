//-----router-----//
import { Routes, Route } from 'react-router-dom';

//-----pages-----//
import Layout from 'layouts/Layout';
import PageMain from 'pages/PageMain';
import PagePostCreator from 'pages/PagePostCreator';

//-----widgets-----//
import AuthRequired from 'widgets/AuthRequired';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<PageMain />} />
				<Route element={<AuthRequired />}>
					<Route path="/post-creator" element={<PagePostCreator />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
