import useClasses from 'hooks/useClasses';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AuthSkeleton = ({ classes }) => {
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' auth-bar auth-bar_skeleton'}>
			<Skeleton
				baseColor="#1e252b"
				highlightColor="#2c353d"
				enableAnimation={true}
				height={34}
				width={'100%'}
			/>
		</div>
	);
};

export default AuthSkeleton;
