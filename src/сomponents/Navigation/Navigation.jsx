//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----style-----//
import './Navigation.scss';

const Navigation = (props) => {
	const { classes, children } = props;
	const inheritClasses = useClasses(classes);
	return (
		<div className={`${inheritClasses} nav`}>
			<div className="nav__container">
				<div className="nav__content">{children}</div>
			</div>
		</div>
	);
};

export default Navigation;
