import useClasses from 'hooks/useClasses';

import LinkCustom from 'сomponents/_global/LinkCustom/LinkCustom';
import Button from 'сomponents/_global/Button';

import classNames from 'classnames';
import './AuthKnownList.scss';

const AuthKnownList = ({ classes, visible, handlerLogOut }) => {
	const inheritClasses = useClasses(classes);

	const listClass = classNames({
		visible: visible,
		'': !visible,
	});

	return (
		<div className={inheritClasses + ' auth-known-list ' + listClass}>
			<LinkCustom
				classes="auth-known-list__btn btn_list-item"
				link={'/profile'}>
				<span className="btn__text">Профиль</span>
			</LinkCustom>
			<Button
				classes="auth-known-list__btn btn_list-item"
				handleClick={handlerLogOut}>
				<span className="btn__text">Выйти</span>
			</Button>
		</div>
	);
};

export default AuthKnownList;
