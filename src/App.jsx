import { Routes, Route } from 'react-router-dom';

import DefaultLayout from 'layouts/DefaultLayout';
import Main from 'pages/Main';

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route index element={<Main />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
