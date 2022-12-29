import { nanoid } from 'nanoid';

import useInheritClasses from 'hooks/useInheritClasses';
import { useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
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
	const { author, postId } = useSelector((state) => state.newPost);
	const rootPath = process.env.REACT_APP_API_SEREVER || 'http://localhost:4000';

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
					dataUrl: fileReader.result,
					file,
					get name() {
						return this.file.name.replace(/.+?./, `${this.id}.`);
					},
					get value() {
						return `${rootPath}/images/posts-images/${author}-${postId}/${this.name}`;
					},
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
