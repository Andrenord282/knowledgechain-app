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
				ref={refValue}
				className="input"
				type={type}
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={(e) => handlerChange(e)}
			/>
		</div>
	);
};

export default Input;
