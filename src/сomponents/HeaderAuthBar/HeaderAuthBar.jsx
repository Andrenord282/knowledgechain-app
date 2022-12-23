import { useSelector } from 'react-redux';

import AuthSkeleton from 'сomponents/AuthSkeleton/AuthSkeleton';
import AuthUnknown from 'сomponents/AuthUnknown/AuthUnknown';
import AuthKnown from 'сomponents/AuthKnown/AuthKnown';

const HeaderAuthBar = ({}) => {
	const { isLoadedUser, isAuthUser } = useSelector((state) => state.user);

	return (
		<>
			{!isLoadedUser && (
				<AuthSkeleton inheritClasses="header__item-auth-bar" />
			)}
			{isLoadedUser && !isAuthUser && (
				<AuthUnknown inheritClasses="header__item-auth-bar" />
			)}
			{isLoadedUser && isAuthUser && (
				<AuthKnown inheritClasses="header__item-auth-bar" />
			)}
		</>
	);
};

export default HeaderAuthBar;
