import { nanoid } from 'nanoid';

import useInheritClasses from 'hooks/useInheritClasses';
import { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { pushMiddleSchemeItem, pushEndSchemeItem } from 'Redux/slices/newPostSlice';

import 'сomponents/InputFile/InputFile.scss';

const InputFile = ({
	inheritClasses,
	indexSchemItem,
	main = false,
	id,
	htmlFor,
	children,
}) => {
	const fileReader = new FileReader();
	const setInheritClasses = useInheritClasses(inheritClasses);
	const dispatch = useDispatch();
	const nodeInputFile = useRef(null);

	const handlerPushSchemeItem = (schemeItem) => {
		main
			? dispatch(pushEndSchemeItem({ schemeItem }))
			: dispatch(
					pushMiddleSchemeItem({ cursorInex: indexSchemItem, schemeItem }),
			  );
	};

	const handlerOnChange = (e) => {
		e.preventDefault();
		const self = e.target;
		if (self.files && self.files.length) {
			const file = self.files[0];
			fileReader.readAsDataURL(file);
			fileReader.onloadend = () => {
				const schemeItem = {
					id: nanoid(5),
					type: file.type,
					size: file.size,
					value: null,
					dataUrl: fileReader.result,
				};
				handlerPushSchemeItem(schemeItem);
			};
		}
	};

	return (
		<div className="input-file">
			<input
				ref={nodeInputFile}
				type="file"
				id={id}
				className="input-file__input"
				onChange={handlerOnChange}
			/>
			<label
				htmlFor={htmlFor}
				className={setInheritClasses + ' input-file__label'}>
				{children}
			</label>
		</div>
	);
};

export default InputFile;
