import { Link, useMatch } from 'react-router-dom';

import './LinkCustom.scss';

const LinkCustom = ({ classes, link, target = '_self', activeClass = 'active', handleClick, children }) => {
	const match = useMatch(link);
	const setClassesLink = () => {
		if (match) {
			return `link ${classes}  ${activeClass}`;
		} else {
			return `link ${classes} `;
		}
	};

	return (
		<Link
			to={link}
			target={target}
			className={setClassesLink()}
			onClick={(e) => (handleClick ? handleClick(e) : null)}>
			{children}
		</Link>
	);
};

export default LinkCustom;
