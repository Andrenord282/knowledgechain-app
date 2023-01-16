import useToggle from './useToggle';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/selectors';

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
