//-----modules-----//
import Skeleton from 'react-loading-skeleton';

//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----style-----//
import 'react-loading-skeleton/dist/skeleton.css';
import './AuthBarSkeleton.scss';

const AuthBarSkeleton = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' auth-bar-skeleton'}>
			<Skeleton baseColor="#1e252b" highlightColor="#2c353d" enableAnimation={true} height={34} width={'100%'} />
		</div>
	);
};

export default AuthBarSkeleton;
