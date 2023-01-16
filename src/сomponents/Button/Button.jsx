import useClasses from 'hooks/useClasses';

import './Button.scss';

const Button = (props) => {
	const { classes, valueRef, children, handleClick, ...otherProps } = props;
	const inheritClasses = useClasses(classes);

	return (
		<button
			{...otherProps}
			ref={valueRef ? valueRef : null}
			className={inheritClasses + ' btn_reset'}
			onClick={(e) => {
				e.preventDefault();
				handleClick(e);
			}}>
			{children}
		</button>
	);
};

export default Button;
