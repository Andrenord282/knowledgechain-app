//-----modules-----//
import classNames from "classnames";

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectAuthStatus } from 'store/authSlice';

//-----components-----//
import AuthBarSkeleton from '../AuthBarSkeleton';
import AuthBarUnknown from '../AuthBarUnknown';
import AuthBarKnown from '../AuthBarKnown';

//-----style-----//
import './AuthBar.scss';

const AuthBar = (props) => {
    const { classes } = props;
    const authStatus = useSelector(selectAuthStatus);

    return (
        <div className={classNames(classes, 'auth-bar')}>
            {authStatus === 'init' && <AuthBarSkeleton classes="auth-bar__item" />}
            {authStatus === 'unidentifiedUser' && <AuthBarUnknown classes="auth-bar__item" />}
            {authStatus === 'identifiedUser' && <AuthBarKnown classes="auth-bar__item" />}
        </div>
    );
};

export default AuthBar;
