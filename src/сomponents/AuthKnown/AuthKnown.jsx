import useInheritClasses from 'hooks/useInheritClasses';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleActive } from 'Redux/slices/substrateSlice';

import Button from 'сomponents/Button/Button';
import { ReactComponent as IconTriangle } from 'assets/img/svg/icons-triangle.svg';
import AuthKnownList from 'сomponents/AuthKnownList/AuthKnownList';

import classNames from 'classnames';
import 'сomponents/AuthKnown/AuthKnown.scss';

const AuthKnown = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.substrate);
	const { userName, photoURL } = useSelector((state) => state.user);
	const [toggleList, setToggleList] = useState(false);

	useEffect(() => {
		if (active !== 'authKnownList') {
			setToggleList(false);
		}
	}, [active]);

	const handlerToggleList = (e) => {
		const self = e.target;
		if (self.closest('.btn_auth-bar')) {
			dispatch(toggleActive('authKnownList'));
			setToggleList(!toggleList);
		}
	};

	const setActiveBtnClass = classNames({
		active: toggleList,
		'': !toggleList,
	});

	return (
		<div className={setInheritClasses + ' auth-bar auth-bar_known'}>
			<span className="auth-bar_known__user-img">
				<img
					src="https://www.meme-arsenal.com/memes/ad4deff43dbfff097ea544c503024a01.jpg"
					alt="Ваша фотография"
					className="auth-bar_known__img"
				/>
			</span>
			<Button
				inheritClasses="auth-bar_known__btn btn_auth-bar"
				handleClick={handlerToggleList}>
				<span className="auth-bar_known__btn-text btn__text">
					{userName}
				</span>
				<IconTriangle
					className={
						'auth-bar_known__btn-icon btn__icon ' + setActiveBtnClass
					}
				/>
			</Button>
			{toggleList && (
				<AuthKnownList
					inheritClasses="auth-bar_known__list"
					visible={toggleList}
				/>
			)}
		</div>
	);
};

export default AuthKnown;
