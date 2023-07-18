//-----modules-----//
import classNames from 'classnames';

//-----hooks-----//
import { useRef } from 'react';
import useNavigateElements from 'hooks/useNavigateElements';

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----сomponents-----//
import LinkCustom from 'сomponents/LinkCustom/LinkCustom';
import Button from 'сomponents/Button';

//-----style-----//
import './AuthBarKnownList.scss';

const AuthBarKnownList = (props) => {
    const { classes, setAuthBarKnownList } = props;
    const authBarKnowLastBtnRef = useRef(null);
    const authController = useAuthController();


    useNavigateElements(authBarKnowLastBtnRef, () => {
        setAuthBarKnownList(false);
    }, 'blur');

    const hanldeSignOut = () => {
        authController.signOut();
    };

    return (
        <div className={classNames(classes, 'auth-bar-known-list')}>
            <LinkCustom classes="btn auth-bar-known-list__btn"
                link={'/profile'}>
                <span className="btn-text">Профиль</span>
            </LinkCustom>
            <Button classes="auth-bar-known-list__btn"
                ref={authBarKnowLastBtnRef}
                handleClick={hanldeSignOut}>
                <span className="btn-text">Выйти</span>
            </Button>
        </div>
    );
};

export default AuthBarKnownList;
