//-----router-----//
import { Routes, Route } from 'react-router-dom';

//-----pages-----//
import PageMain from 'pages/PageMain';
import PageEditorPost from 'pages/PageEditorPost';

//-----widgets-----//
import Auth from 'widgets/Auth';
import AuthRequired from 'widgets/AuthRequired';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Auth />}>
				<Route path="/" element={<PageMain />} />
				<Route element={<AuthRequired />}>
					<Route path="/editor-post" element={<PageEditorPost />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
