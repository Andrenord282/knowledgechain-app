//-----modules-----//
import classNames from "classnames";

//-----hooks-----//

//-----style-----//
import './Navigation.scss';

const Navigation = (props) => {
    const { classes, children } = props;
    
    return (
        <div className={classNames(classes, 'nav')}>
            <div className="nav__container">
                <div className="nav__content">{children}</div>
            </div>
        </div>
    );
};

export default Navigation;
