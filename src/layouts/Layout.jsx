//-----router-----//
import { Outlet } from 'react-router-dom';

//-----widgets-----//
import Header from 'widgets/Header';
import Auth from 'widgets/Auth';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Auth />
		</>
	);
};

export default Layout;
