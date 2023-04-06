//-----hooks-----//
import { useState, useRef } from 'react';
import useClasses from 'hooks/useClasses';
import useEventOutside from 'hooks/useEventOutside';

//-----redux-----//
import { useSelector } from 'react-redux';
import { selectUser } from 'store/slices/userSlice';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import AuthBarKnownList from '../AuthBarKnownList';
import ava from 'assets/img/ava.jpg';

//-----style-----//
import './AuthBarKnown.scss';

const AuthBarKnown = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const { userImgUrl, userName } = useSelector(selectUser);
	const [toggleList, setToggleList] = useState(false);
	const refBtnAuthBarKnownList = useRef(null);

	const onToggleList = (e) => {
		const self = e.target;
		if (self.closest('.auth-bar-known__btn')) {
			setToggleList(!toggleList);
		}
	};

	useEventOutside(refBtnAuthBarKnownList, () => {
		setToggleList(false);
	});

	return (
		<div className={inheritClasses + ' auth-bar-known'}>
			<span className="auth-bar-known__user-item">
				<img src={userImgUrl ? userImgUrl : ava} alt="Ваша фотография" className="auth-bar-known__user-img" />
			</span>
			<Button ref={refBtnAuthBarKnownList} classes="auth-bar-known__btn" handleClick={onToggleList}>
				<span className="auth-bar-known__btn-text">{userName}</span>
				<Icon.Triangle className="auth-bar-known__btn-icon" />
			</Button>
			<AuthBarKnownList classes="auth-bar-known__list" toggleList={toggleList} />
		</div>
	);
};

export default AuthBarKnown;
