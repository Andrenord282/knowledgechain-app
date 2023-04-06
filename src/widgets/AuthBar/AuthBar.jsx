//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----redux-----//
import { useSelector } from 'react-redux';
import { selectUser } from 'store/slices/userSlice';

//-----сomponents-----//
import AuthBarSkeleton from './сomponents/AuthBarSkeleton';
import AuthBarUnknown from './сomponents/AuthBarUnknown';
import AuthBarKnown from './сomponents/AuthBarKnown';

//-----style-----//
import './AuthBar.scss';

const AuthBar = ({ classes }) => {
	const inheritClasses = useClasses(classes);
	const { isLoadedUser, isAuthUser } = useSelector(selectUser);

	return (
		<div className={inheritClasses + ' auth-bar'}>
			{!isLoadedUser && <AuthBarSkeleton classes={'auth-bar__item'} />}
			{isLoadedUser && !isAuthUser && <AuthBarUnknown classes={'auth-bar__item'} />}
			{isLoadedUser && isAuthUser && <AuthBarKnown classes={'auth-bar__item'} />}
		</div>
	);
};

export default AuthBar;
