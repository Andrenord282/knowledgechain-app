//-----сomponents-----//
import * as Icon from 'сomponents/Icon';

const HeaderLogo = () => {
	return (
		<div className="header__logo">
			<Icon.LogoHeader className="header__logo-img" />
			<h2 className="header__logo-title">Knowledgechain</h2>
		</div>
	);
};

export default HeaderLogo;
