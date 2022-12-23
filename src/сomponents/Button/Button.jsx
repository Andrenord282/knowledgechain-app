import useInheritClasses from 'hooks/useInheritClasses';

import classNames from 'classnames';
import 'сomponents/Button/Button.scss';

const Button = ({ inheritClasses, children, handleClick }) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	return (
		<button
			className={setInheritClasses + ' btn_reset'}
			onClick={(e) => {
				e.preventDefault();
				handleClick(e);
			}}>
			{children}
		</button>
	);
};

export default Button;
