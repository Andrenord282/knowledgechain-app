//-----modules-----//
import classNames from 'classnames';

//-----hooks-----//
import { useState, useRef } from 'react';
import useClasses from 'hooks/useClasses';
import useEventInside from 'hooks/useEventInside';
import useEventOutside from 'hooks/useEventOutside';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import AuthBarKnownList from '../AuthBarKnownList';
import ava from 'assets/img/ava.jpg';

//-----style-----//
import './AuthBarKnown.scss';

const AuthBarKnown = (props) => {
	const { classes, userSlice, authSlice } = props;
	const inheritClasses = useClasses(classes);
	const [toggleList, setToggleList] = useState(false);
	const refBtnAuthBar = useRef(null);

	useEventInside(refBtnAuthBar, () => {
		setToggleList((prevToggleList) => !prevToggleList);
	});

	useEventOutside(refBtnAuthBar, () => {
		setToggleList(false);
	});

	const classActiveIcon = classNames({
		active: toggleList,
		'': !toggleList,
	});

	return (
		<div className={inheritClasses + ' auth-bar-known'} ref={refBtnAuthBar}>
			<div className="auth-bar-known__user-item">
				<img src={ava} alt="Ваша фотография" className="auth-bar-known__user-img" />
				<span className="auth-bar-known__user-name">{userSlice.userName}</span>
				<Icon.Triangle className={'auth-bar-known__user-icon ' + classActiveIcon} />
			</div>
			<AuthBarKnownList classes="auth-bar-known__list" toggleList={toggleList} authSlice={authSlice} />
		</div>
	);
};

export default AuthBarKnown;
