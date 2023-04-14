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
	const userModel = useUserSlice();
	const authModel = useAuthSlice();

	return (
		<div className={inheritClasses + ' auth-bar'}>
			{!authModel.statusAuthUser && !authModel.isLoadedAuth && <AuthBarSkeleton classes={'auth-bar__item'} />}
			{!authModel.statusAuthUser && authModel.isLoadedAuth && <AuthBarUnknown classes={'auth-bar__item'} />}
			{authModel.statusAuthUser && <AuthBarKnown classes={'auth-bar__item'} userModel={userModel} />}
		</div>
	);
};

export default AuthBar;
