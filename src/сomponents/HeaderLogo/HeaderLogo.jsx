
import { ReactComponent as IconLogo } from 'assets/img/svg/icon-logo.svg';

const HeaderLogo = () => {
	return (
		<div className="header__item-logo">
			<IconLogo className="header__img" />
			<h2 className="header__title">Knowledgechain</h2>
		</div>
	);
};

export default HeaderLogo;
