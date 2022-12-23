import useInheritClasses from 'hooks/useInheritClasses';

import 'сomponents/Navigation/Navigation.scss';

const Navigation = ({ inheritClasses, children }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	return (
		<nav className={setInheritClasses + ' nav'}>
			<div className="nav__container">
				<div className="nav__content">{children}</div>
			</div>
		</nav>
	);
};

export default Navigation;
