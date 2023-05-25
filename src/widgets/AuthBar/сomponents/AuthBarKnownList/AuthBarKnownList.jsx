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
	const { classes, toggleList, authSlice } = props;
	const inheritClasses = useClasses(classes);

	const classVisibleList = classNames({
		active: toggleList,
		'': !toggleList,
	});

	return (
		<div className={inheritClasses + ' auth-bar-known-list ' + classVisibleList}>
			<LinkCustom classes="auth-bar-known-list__btn" link={'/profile'}>
				<span className="btn-text">Профиль</span>
			</LinkCustom>
			<Button
				classes="auth-bar-known-list__btn"
				handleClick={() => {
					authSlice.handlerAuthSignOut();
				}}>
				<span className="btn-text">Выйти</span>
			</Button>
		</div>
	);
};

export default AuthBarKnownList;
