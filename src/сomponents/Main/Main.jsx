import { useDispatch, useSelector } from 'react-redux';
import { toggleVisible, setType } from 'Redux/slices/modalSlice';

import LinkCustom from 'сomponents/LinkCustom/LinkCustom';
import Navigation from 'сomponents/Navigation/Navigation';
import MainList from 'сomponents/MainList/MainList';
import { ReactComponent as IconPlus } from 'assets/img/svg/icon-plus.svg';

import 'сomponents/Main/Main.scss';

const Main = () => {
	const dispatch = useDispatch();
	const { isAuthUser } = useSelector((state) => state.user);

	const handlerCheckAuth = (e) => {
		if (!isAuthUser) {
			e.preventDefault();
			dispatch(setType('SignIn'));
			dispatch(toggleVisible());
		}
	};

	return (
		<section className="main">
			<div className="main__container container">
				<div className="main__content">
					<Navigation inheritClasses="main__nav">
						<LinkCustom
							inheritClasses="nav__link link_new-post"
							link={'/new-post'}
							handleClick={handlerCheckAuth}>
							<IconPlus className="link__icon" />
						</LinkCustom>
					</Navigation>
					<MainList inheritClasses="main__list" />
				</div>
			</div>
		</section>
	);
};

export default Main;
