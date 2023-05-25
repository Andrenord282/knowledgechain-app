//-----hooks-----//
import useClasses from 'hooks/useClasses';
import useUserSlice from 'hooks/slices/useUserSlice';
import useAuthSlice from 'hooks/slices/useAuthSlice';

//-----сomponents-----//
import AuthBarSkeleton from './сomponents/AuthBarSkeleton';
import AuthBarUnknown from './сomponents/AuthBarUnknown';
import AuthBarKnown from './сomponents/AuthBarKnown';

//-----style-----//
import './AuthBar.scss';

const AuthBar = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);
	const userSlice = useUserSlice();
	const authSlice = useAuthSlice();

	return (
		<div className={inheritClasses + ' auth-bar'}>
			{!authSlice.statusAuth && !authSlice.loadedAuth && <AuthBarSkeleton classes="auth-bar__item" />}
			{!authSlice.statusAuth && authSlice.loadedAuth && <AuthBarUnknown classes="auth-bar__item" />}
			{authSlice.statusAuth && (
				<AuthBarKnown classes="auth-bar__item" userSlice={userSlice} authSlice={authSlice} />
			)}
		</div>
	);
};

export default AuthBar;
