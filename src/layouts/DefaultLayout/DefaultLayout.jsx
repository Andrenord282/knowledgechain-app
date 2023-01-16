import { Outlet } from 'react-router-dom';
import Header from 'сomponents/Header/Header';

const DefaultLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default DefaultLayout;
