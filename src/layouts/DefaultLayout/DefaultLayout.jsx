import { Outlet } from 'react-router-dom';
import Header from 'widgets/Header';

const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default DefaultLayout;
