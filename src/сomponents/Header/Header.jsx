import useLogOut from 'hooks/useLogOut';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/selectors';

import HeaderLogo from './HeaderLogo';
import AuthSkeleton from './AuthSkeleton';
import AuthUnknown from './AuthUnknown';
import AuthKnown from './AuthKnown';
import './Header.scss';

const Header = () => {
	const { isLoadedUser, isAuthUser, userImgUrl, userName } = useSelector(selectUser);
	const handlerLogOut = useLogOut();

	return (
		<header className="header">
			<div className="header__container container">
				<div className="header__content">
					<HeaderLogo />
					{isLoadedUser && !isAuthUser && <AuthUnknown classes="header__item-auth-bar" />}
					{!isLoadedUser && <AuthSkeleton classes="header__item-auth-bar" />}
					{isLoadedUser && isAuthUser && (
						<AuthKnown
							classes="header__item-auth-bar"
							userImgUrl={userImgUrl}
							userName={userName}
							handlerLogOut={handlerLogOut}
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
