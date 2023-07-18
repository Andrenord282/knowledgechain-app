//-----modules-----//
import classNames from "classnames";

//-----сomponents-----//
import Skeleton from 'react-loading-skeleton';

//-----style-----//
import 'react-loading-skeleton/dist/skeleton.css';
import './AuthBarSkeleton.scss';

const AuthBarSkeleton = (props) => {
    const { classes } = props;

    return (
        <div className={classNames(classes, 'auth-bar-skeleton')}>
            <Skeleton baseColor="#1e252b" highlightColor="#2c353d" enableAnimation={true} height={30} width={180} />
        </div>
    );
};

export default AuthBarSkeleton;
