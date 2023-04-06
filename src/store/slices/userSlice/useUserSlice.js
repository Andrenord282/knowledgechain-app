//-----redux-----//
import { useDispatch } from 'react-redux';
import { toggleLoadedUser, toggleAuthUser, setUser, resetUser } from './userSlice';

const useUserSlice = () => {
	const dispatch = useDispatch();

	const setToggleLoadedUser = () => {
		dispatch(toggleLoadedUser());
	};

	const setToggleAuthUser = () => {
		dispatch(toggleAuthUser());
	};

	const writeSetUser = (data) => {
		dispatch(setUser(data));
	};

	const setResetUser = () => {
		dispatch(resetUser());
	};

	return {
		setToggleLoadedUser,
		setToggleAuthUser,
		writeSetUser,
		setResetUser,
	};
};

export default useUserSlice;
