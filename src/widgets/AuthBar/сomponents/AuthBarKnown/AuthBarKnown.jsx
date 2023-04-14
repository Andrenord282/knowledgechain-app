//-----hooks-----//
import { useState, useRef } from 'react';
import useClasses from 'hooks/useClasses';
import useEventOutside from 'hooks/useEventOutside';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';
import Button from 'сomponents/Button';
import AuthBarKnownList from '../AuthBarKnownList';
import ava from 'assets/img/ava.jpg';

//-----style-----//
import './AuthBarKnown.scss';

const AuthBarKnown = (props) => {
	const { classes, userModel } = props;
	const inheritClasses = useClasses(classes);
	const [toggleList, setToggleList] = useState(false);
	const refBtnAuthBarKnownList = useRef(null);

	const handlerToggleList = (e) => {
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
				<img
					src={userModel.userImgUrl ? userModel.userImgUrl : ava}
					alt="Ваша фотография"
					className="auth-bar-known__user-img"
				/>
			</span>
			<Button ref={refBtnAuthBarKnownList} classes="auth-bar-known__btn" handleClick={handlerToggleList}>
				<span className="auth-bar-known__btn-text">{userModel.userName}</span>
				<Icon.Triangle className="auth-bar-known__btn-icon" />
			</Button>
			<AuthBarKnownList classes="auth-bar-known__list" toggleList={toggleList} />
		</div>
	);
};

export default AuthBarKnown;
