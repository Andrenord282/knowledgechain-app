import useInheritClasses from 'hooks/useInheritClasses';

import { useDispatch } from 'react-redux';
import { toggleVisible, setType } from 'Redux/slices/modalSlice';

import Button from 'сomponents/Button/Button';
import 'сomponents/AuthUnknown/AuthUnknown.scss';

const AuthUnknown = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();

	const handlerToggleModal = (e) => {
		const self = e.target;
		if (self.closest('.auth-bar_unknown')) {
			dispatch(setType('SignIn'));
			dispatch(toggleVisible());
		}
	};

	return (
		<div className={setInheritClasses + ' auth-bar auth-bar_unknown'}>
			<Button
				inheritClasses="auth-bar_unknown__btn btn_default"
				handleClick={handlerToggleModal}>
				<span className="auth-bar_unknown__btn-text btn__text">Войти</span>
			</Button>
		</div>
	);
};

export default AuthUnknown;
