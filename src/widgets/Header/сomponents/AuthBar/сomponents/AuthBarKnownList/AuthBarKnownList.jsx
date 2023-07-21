//-----modules-----//
import classNames from 'classnames';

//-----hooks-----//
import { useRef } from 'react';
import { useTabNavigateElementList } from 'hooks/useTabNavigateElementList';

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----сomponents-----//
import LinkCustom from 'сomponents/LinkCustom/LinkCustom';
import Button from 'сomponents/Button';

//-----style-----//
import './AuthBarKnownList.scss';

const AuthBarKnownList = (props) => {
    const { classes, setAuthBarKnownList } = props;
    const authBarKnownListRef = useRef(null);
    const authController = useAuthController();

    useTabNavigateElementList(authBarKnownListRef, null, () => {
        setAuthBarKnownList(false);
    });

    const hanldeSignOut = () => {
        authController.signOut();
    };

    return (
        <div className={classNames(classes, 'auth-bar-known-list')}
            ref={authBarKnownListRef}>
            <LinkCustom classes="btn auth-bar-known-list__btn"
                link={'/profile'}>
                <span className="btn-text">Профиль</span>
            </LinkCustom>
            <Button classes="auth-bar-known-list__btn"
                handleClick={hanldeSignOut}>
                <span className="btn-text">Выйти</span>
            </Button>
        </div>
    );
};

export default AuthBarKnownList;
