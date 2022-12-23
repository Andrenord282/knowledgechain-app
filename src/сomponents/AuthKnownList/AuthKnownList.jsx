import useInheritClasses from 'hooks/useInheritClasses';

import { useDispatch } from 'react-redux';
import { setType } from 'Redux/slices/modalSlice';
import { toggleLoadedUser, toggleAuthUser } from 'Redux/slices/userSlice';
import { toggleActive } from 'Redux/slices/substrateSlice';

import logOut from 'Firebase-services/auth/logOut';

import LinkCustom from 'сomponents/LinkCustom/LinkCustom';
import Button from 'сomponents/Button/Button';

import classNames from 'classnames';
import 'сomponents/AuthKnownList/AuthKnownList.scss';

const AuthKnownList = ({ inheritClasses, visible }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();

	const handlerLogOut = async () => {
		const logOutUser = await logOut();
		if (logOutUser) {
			handlerToggleUserList();
			dispatch(toggleLoadedUser());
			dispatch(toggleAuthUser());
			dispatch(setType('SignIn'));
		}
	};

	const handlerToggleUserList = () => {
		dispatch(toggleActive(false));
	};

	const setVisibleClass = classNames({
		visible: visible,
		'': !visible,
	});

	return (
		<div className={setInheritClasses + ' auth-known-list ' + setVisibleClass}>
			<LinkCustom
				inheritClasses="auth-known-list__btn btn_auth-list-item"
				link={'/profile'}
				handleClick={handlerToggleUserList}>
				<span className="btn__text">Профиль</span>
			</LinkCustom>
			<Button
				inheritClasses="auth-known-list__btn btn_auth-list-item"
				handleClick={handlerLogOut}>
				<span className="btn__text">Выйти</span>
			</Button>
		</div>
	);
};

export default AuthKnownList;
