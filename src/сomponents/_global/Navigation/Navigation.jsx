import useClasses from 'hooks/useClasses';

import './Navigation.scss';

const Navigation = ({ classes, children }) => {
	const inheritClasses = useClasses(classes);

	return (
		<nav className={inheritClasses + ' nav'}>
			<div className="nav__container">
				<div className="nav__content">{children}</div>
			</div>
		</nav>
	);
};

export default Navigation;
