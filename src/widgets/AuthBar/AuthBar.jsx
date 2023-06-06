//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectLoadedAuth, selectStatusAuth } from 'store/authSlice';

//-----сomponents-----//
import AuthBarSkeleton from './сomponents/AuthBarSkeleton';
import AuthBarUnknown from './сomponents/AuthBarUnknown';
import AuthBarKnown from './сomponents/AuthBarKnown';

//-----style-----//
import './AuthBar.scss';

const AuthBar = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const loadedAuth = useSelector(selectLoadedAuth);
	const statusAuth = useSelector(selectStatusAuth);

	return (
		<div className={inheritClasses + ' auth-bar'}>
			{!loadedAuth && !statusAuth && <AuthBarSkeleton classes="auth-bar__item" />}
			{loadedAuth && !statusAuth && <AuthBarUnknown classes="auth-bar__item" />}
			{statusAuth && <AuthBarKnown classes="auth-bar__item" />}
		</div>
	);
};

export default AuthBar;
