//-----redux-----//
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

//-----actions-----//
import { editorPostSchemaActions } from 'store/editorPostSchemaSlice';

const useEditorPostSchemaController = () => {
	const dispatch = useDispatch();

	const initSchema = () => {
		const titleId = nanoid(5);
		const textId = nanoid(5);
		const postSchema = {
			[titleId]: { id: titleId, type: 'title', value: '' },
			[textId]: { id: textId, type: 'text', value: '' },
		};

		dispatch(editorPostSchemaActions.initSchema({ postSchema }));
	};

	const updateSchemaItem = (schemaItemId, data) => {
		// if (!dirty) {
		// 	dispatch(editorPostSchemaActions.setToggleDirty({ toggle: true }));
		// }

		dispatch(editorPostSchemaActions.updateSchemaItem({ schemaItemId, data }));
	};

	const сreateSchemaItem = (data, type, idItem) => {
		return {
			id: idItem ? idItem : nanoid(5),
			type: type,
			value: data,
		};
	};

	const addSchemaItem = (postSchema, activationIndex, schemaLength, data = '', type = 'text', idItem = false) => {
		const newSchemaItem = сreateSchemaItem(data, type, idItem);
		let newPostSchema = [];
		if (activationIndex === schemaLength - 1) {
			newPostSchema = [...postSchema, newSchemaItem];
		} else {
			const startPostSchema = postSchema.slice(0, activationIndex + 1);
			const endPostSchema = postSchema.slice(activationIndex + 1);
			newPostSchema = [...startPostSchema, newSchemaItem, ...endPostSchema];
		}
		const postSchemaObject = newPostSchema.reduce((acc, schemaItem) => {
			acc[schemaItem.id] = schemaItem;
			return acc;
		}, {});

		dispatch(editorPostSchemaActions.addSchemaItem({ postSchemaObject }));
	};

	return {
		initSchema,
		updateSchemaItem,
		addSchemaItem,
	};
};

export { useEditorPostSchemaController };
