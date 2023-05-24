//-----hooks-----//
import useClasses from 'hooks/useClasses';

//-----style-----//
import './Button.scss';

const Button = (props) => {
	const { classes, type, children, handleClick, ...otherProps } = props;
	const inheritClasses = useClasses(classes);

	return (
		<button
			type={type ? type : 'button'}
			{...otherProps}
			className={'btn ' + inheritClasses}
			onClick={(e) => {
				if (type !== 'submit') {
					e.preventDefault();
					handleClick(e);
				}
			}}>
			{children}
		</button>
	);
};

export default Button;
