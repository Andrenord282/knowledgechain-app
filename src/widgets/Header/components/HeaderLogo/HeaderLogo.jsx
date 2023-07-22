//-----modules-----//
import classNames from "classnames";

//-----components-----//
import * as Icon from 'components/Icon';

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
