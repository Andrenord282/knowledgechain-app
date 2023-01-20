import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectPostCreator,
	pushEndSchemaItem,
	pushMiddleSchemaItem,
} from '../../../model';

const usePuschSchemaFile = (main, schemItemIndex) => {
	const dispatch = useDispatch();
	const fileReader = new FileReader();
	const rootPath = process.env.REACT_APP_API_SEREVER || 'http://localhost:4000';
	const { author, postId } = useSelector(selectPostCreator);

	const handlerPushSchemaItem = (schemaItem) => {
		main
			? dispatch(pushEndSchemaItem({ schemaItem }))
			: dispatch(
					pushMiddleSchemaItem({ cursorInex: schemItemIndex, schemaItem }),
			  );
	};

	return (e) => {
		e.preventDefault();
		const self = e.target;
		if (self.files && self.files.length) {
			const file = self.files[0];
			fileReader.readAsDataURL(file);
			fileReader.onloadend = () => {
				const schemaItem = {
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
				handlerPushSchemaItem(schemaItem);
			};
		}
	};
};

export default usePuschSchemaFile;
