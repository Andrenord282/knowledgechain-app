import HeaderLogo from 'сomponents/HeaderLogo/HeaderLogo';
import HeaderAuthBar from 'сomponents/HeaderAuthBar/HeaderAuthBar';

import 'сomponents/Header/Header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__container container">
				<div className="header__content">
					<HeaderLogo />
					<HeaderAuthBar />
				</div>
			</div>
		</header>
	);
};

export default Header;
