//-----modules-----//
import classNames from 'classnames';

//-----hooks-----//
import { useState, useRef } from 'react';
import useClasses from 'hooks/useClasses';
import useEventInside from 'hooks/useEventInside';
import useEventOutside from 'hooks/useEventOutside';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectUserName, selectUserImgUrl } from 'store/userSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import ava from 'assets/img/ava.jpg';
import AuthBarKnownList from '../AuthBarKnownList';

//-----style-----//
import './AuthBarKnown.scss';

const AuthBarKnown = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const authBarKnowRef = useRef(null);
	const userName = useSelector(selectUserName);
	const userImg = useSelector(selectUserImgUrl);
	const [toggleList, setToggleList] = useState(false);

	useEventInside(authBarKnowRef, () => {
		setToggleList((prevToggleList) => !prevToggleList);
	});

	useEventOutside(authBarKnowRef, () => {
		setToggleList(false);
	});

	const classActiveIcon = classNames({
		active: toggleList,
		'': !toggleList,
	});

	return (
		<div className={`${inheritClasses} auth-bar-known`} ref={authBarKnowRef}>
			<div className="auth-bar-known__user-item">
				<img src={ava} alt="Ваша фотография" className="auth-bar-known__user-img" />
				<span className="auth-bar-known__user-name">{userName}</span>
				<Icon.Triangle className={'auth-bar-known__user-icon ' + classActiveIcon} />
			</div>
			{toggleList && <AuthBarKnownList classes="auth-bar-known__list" />}
		</div>
	);
};

export default AuthBarKnown;
