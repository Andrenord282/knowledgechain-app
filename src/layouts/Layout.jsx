//-----router-----//
import { Outlet } from 'react-router-dom';

//-----widgets-----//
import Header from 'widgets/Header';


const Layout = () => {
	return (
		<>
			<Header />
			<main className="App">
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
