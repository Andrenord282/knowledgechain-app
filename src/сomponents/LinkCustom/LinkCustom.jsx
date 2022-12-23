import { Link, useMatch } from 'react-router-dom';
import useInheritClasses from 'hooks/useInheritClasses';

import 'сomponents/LinkCustom/LinkCustom.scss';

const LinkCustom = ({
	inheritClasses,
	link,
	activeClass = 'active',
	handleClick,
	children,
}) => {
	const setInheritClasses = useInheritClasses(inheritClasses);
	const match = useMatch(link);
	const setClassesLink = () => {
		if (match) {
			return `${setInheritClasses} link ${activeClass}`;
		} else {
			return `${setInheritClasses} link`;
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
