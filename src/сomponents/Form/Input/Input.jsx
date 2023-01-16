import useClasses from 'hooks/useClasses';

import './Input.scss';
const Input = ({
	classes,
	name,
	label,
	type,
	value,
	placeholder,
	refValue,
	handlerBlur,
	handlerFocus,
	handlerChange,
}) => {
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses}>
			{label && (
				<label className="label" htmlFor={name}>
					{label}
				</label>
			)}
			<input
				onBlur={handlerBlur ? handlerBlur : null}
				onFocus={handlerFocus ? handlerFocus : null}
				onChange={(e) => handlerChange(e)}
				ref={refValue}
				className="input custom-focus"
				type={type}
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
