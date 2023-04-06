//-----modules-----//
import Skeleton from 'react-loading-skeleton';

//-----style-----//
import 'react-loading-skeleton/dist/skeleton.css';
import './AuthBarSkeleton.scss';

const AuthBarSkeleton = () => {
	return (
		<div className="auth-bar-skeleton">
			<Skeleton baseColor="#1e252b" highlightColor="#2c353d" enableAnimation={true} height={34} width={'100%'} />
		</div>
	);
};

export default AuthBarSkeleton;
