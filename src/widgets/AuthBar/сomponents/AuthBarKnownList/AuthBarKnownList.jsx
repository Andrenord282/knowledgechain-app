//-----modules-----//
import classNames from 'classnames';

//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import LinkCustom from 'сomponents/LinkCustom/LinkCustom';
import Button from 'сomponents/Button';

//-----style-----//
import './AuthBarKnownList.scss';

const AuthBarKnownList = (props) => {
	const { classes, toggleList, handlerLogOut } = props;
	const inheritClasses = useClasses(classes);

	const classesStateList = classNames({
		active: toggleList,
		'': !toggleList,
	});

	return (
		<div className={inheritClasses + ' auth-bar-known-list ' + classesStateList}>
			<LinkCustom classes="auth-bar-known-list__btn" link={'/profile'}>
				<span className="auth-bar-known-list__btn-text">Профиль</span>
			</LinkCustom>
			<Button classes="auth-bar-known-list__btn" handleClick={handlerLogOut}>
				<span className="auth-bar-known-list__btn-text">Выйти</span>
			</Button>
		</div>
	);
};

export default AuthBarKnownList;
