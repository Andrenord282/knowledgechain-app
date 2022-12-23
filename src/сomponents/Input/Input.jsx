import useInheritClasses from 'hooks/useInheritClasses';

const InputBar = ({
	inheritClasses,
	name,
	label,
	type,
	value,
	placeholder,
	handlerChange,
}) => {
	const setInheritClasses = useInheritClasses(inheritClasses);

	return (
		<div className={setInheritClasses}>
			<label className="label" htmlFor={name}>
				{label}
			</label>
			<input
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

export default InputBar;
