//-----router-----//
import { Outlet } from 'react-router-dom';

//-----widgets-----//
import Header from 'widgets/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;
