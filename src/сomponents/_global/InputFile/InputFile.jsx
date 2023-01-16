import useClasses from 'hooks/useClasses';


import './InputFile.scss';

const InputFile = ({
	classes,
	refValue,
	id,
	handlerOnChange,
	htmlFor,
	children,
}) => {
	const inheritClasses = useClasses(classes);

	return (
		<div className="input-file">
			<input
				ref={refValue}
				type="file"
				id={id}
				className="input-file__input"
				onChange={handlerOnChange}
			/>
			<label
				htmlFor={htmlFor}
				className={inheritClasses + ' input-file__label'}>
				{children}
			</label>
		</div>
	);
};

export default InputFile;
