//-----components-----//
import HeaderLogo from './components/HeaderLogo';
import AuthBar from './components/AuthBar';


//-----style-----//
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__content">
                    <HeaderLogo classes="header__logo" />
                    <AuthBar classes="header__auth-bar" />
                </div>
            </div>
        </header>
    );
};

export default Header;
