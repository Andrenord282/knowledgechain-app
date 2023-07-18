//-----modules-----//
import classNames from "classnames";

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';

import './HeaderLogo.scss';

const HeaderLogo = (props) => {
    const { classes } = props;

    return (
        <div className={classNames(classes, 'header-logo')}>
            <Icon.LogoHeader className="header-logo__img" />
            <h2 className="header-logo__title">Knowledgechain</h2>
        </div>
    );
};

export default HeaderLogo;
