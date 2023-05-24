import { Link, useMatch } from 'react-router-dom';
import useClasses from 'hooks/useClasses';

import './LinkCustom.scss';

const LinkCustom = ({ classes, link, target = '_self', activeClass = 'active', handleClick, children }) => {
	const inheritClasses = useClasses(classes);
	const match = useMatch(link);
	const setClassesLink = () => {
		if (match) {
			return `link ${inheritClasses}  ${activeClass}`;
		} else {
			return `link ${inheritClasses} `;
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
