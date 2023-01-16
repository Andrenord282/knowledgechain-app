import useClasses from 'hooks/useClasses';

import './InputRange.scss';
const InputRange = ({
	classes,
	name,
	label,
	value,
	refValue,
	min,
	max,
	step,
	handlerChange,
}) => {
	const inheritClasses = useClasses(classes);

	return (
		<div className={inheritClasses + ' input-range'}>
			{label && (
				<label className="input-range__label" htmlFor={name}>
					{label}
				</label>
			)}
			<input
				ref={refValue}
				className="input-range__input"
				type="range"
				id={name}
				name={name}
				min={min}
				max={max}
				value={value}
				step={step}
				onChange={(e) => handlerChange(e)}
			/>
		</div>
	);
};

export default InputRange;
