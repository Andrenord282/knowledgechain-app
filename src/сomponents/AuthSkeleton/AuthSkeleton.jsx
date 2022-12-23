import useInheritClasses from 'hooks/useInheritClasses';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AuthSkeleton = ({ inheritClasses }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	return (
		<div className={setInheritClasses + ' auth-bar auth-bar_skeleton'}>
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
