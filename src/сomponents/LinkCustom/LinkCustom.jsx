import { Link, useMatch } from 'react-router-dom';
import useClasses from 'hooks/useClasses';

import './LinkCustom.scss';

const LinkCustom = ({
	classes,
	link,
	activeClass = 'active',
	handleClick,
	children,
}) => {
	const inheritClasses = useClasses(classes);
	const match = useMatch(link);
	const setClassesLink = () => {
		if (match) {
			return `${inheritClasses} link ${activeClass}`;
		} else {
			return `${inheritClasses} link`;
		}
	};

	return (
		<Link
			to={link}
			className={setClassesLink()}
			onClick={(e) => (handleClick ? handleClick(e) : null)}>
			{children}
		</Link>
	);
};

export default LinkCustom;
