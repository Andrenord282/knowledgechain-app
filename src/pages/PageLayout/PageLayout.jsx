import { Outlet } from 'react-router-dom';
import Header from 'сomponents/Header/Header';
import Modal from 'сomponents/Modal/Modal';
import Substrate from 'сomponents/Substrate/Substrate';

const PageLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Modal />
			<Substrate />
		</>
	);
};

export default PageLayout;
