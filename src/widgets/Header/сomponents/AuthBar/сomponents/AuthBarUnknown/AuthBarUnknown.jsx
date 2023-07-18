//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { useAuthController } from 'controllers';

//-----сomponents-----//
import Button from 'сomponents/Button';

//-----style-----//
import './AuthBarUnknown.scss';

const AuthBarUnknown = (props) => {
    const { classes } = props;
    const authController = useAuthController();

    const hanlderOpenAuthModal = () => {
        authController.openAuthModal();
    };

    return (
        <div className={classNames(classes, 'auth-bar-unknown')}>
            <Button classes="btn auth-bar-unknown__btn" handleClick={hanlderOpenAuthModal}>
                <span className="btn-text">Войти</span>
            </Button>
        </div>
    );
};

export default AuthBarUnknown;
