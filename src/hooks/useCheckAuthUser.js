import useToggle from './useToggle';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/slices/userSlice';

const useCheckAuthUser = () => {
	const { isAuthUser } = useSelector(selectUser);
	const [toggleAuth, setToggleAuth] = useToggle();

	const handlerCheckAuth = (e) => {
		if (isAuthUser) return;
		e.preventDefault();
		setToggleAuth();
	};

	return { handlerCheckAuth, toggleAuth, setToggleAuth };
};

export default useCheckAuthUser;
