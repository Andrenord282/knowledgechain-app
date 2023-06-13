//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----сomponents-----//
import * as Icon from 'сomponents/Icon';

import './HeaderLogo.scss';

const HeaderLogo = (props) => {
	const { classes } = props;
	const inheritClasses = useClasses(classes);

	return (
		<div className={`${inheritClasses} header-logo`}>
			<Icon.LogoHeader className="header-logo__img" />
			<h2 className="header-logo__title">Knowledgechain</h2>
		</div>
	);
};

export default HeaderLogo;
