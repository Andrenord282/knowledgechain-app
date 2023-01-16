import useClasses from 'hooks/useClasses';
import { useRef, useState } from 'react';
import useEventOutside from 'hooks/useEventOutside';

import * as Icon from 'сomponents/_global/Icon';
import Button from 'сomponents/Button';
import AuthKnownList from './AuthKnownList';
import classNames from 'classnames';
import './AuthKnown.scss';
import 'сomponents/Button/btn_auth-bar.scss';

const AuthKnown = ({ classes, userImgUrl, userName, handlerLogOut }) => {
	const inheritClasses = useClasses(classes);
	const btnMenuRef = useRef(null);
	const [toggleList, setToggleList] = useState(false);
	
	useEventOutside(btnMenuRef, () => {
		setToggleList(false);
	});

	const handlerToggleList = (e) => {
		const self = e.target;
		if (self.closest('.btn_auth-bar')) {
			setToggleList(!toggleList);
		}
	};

	const menuBtnClass = classNames({
		active: toggleList,
		'': !toggleList,
	});

	return (
		<div className={inheritClasses + ' auth-bar auth-bar_known'}>
			<span className="auth-bar_known__user-img">
				<img src={userImgUrl} alt="Ваша фотография" className="auth-bar_known__img" />
			</span>
			<Button
				valueRef={btnMenuRef}
				classes="auth-bar_known__btn btn_auth-bar"
				handleClick={handlerToggleList}>
				<span className="btn__text">{userName}</span>
				<Icon.Triangle className={'btn__icon ' + menuBtnClass} />
			</Button>
			{toggleList && (
				<AuthKnownList
					classes="auth-bar_known__list"
					visible={toggleList}
					handlerLogOut={handlerLogOut}
				/>
			)}
		</div>
	);
};

export default AuthKnown;
