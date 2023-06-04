//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { editorPostSchemaActions } from 'store/editorPostSchemaSlice';

const useEditorPostSchemaController = () => {
	const dispatch = useDispatch();

	const updateSchemaItem = (schemaItemIndex, data) => {
		dispatch(editorPostSchemaActions.updateSchemaItem({ schemaItemIndex, data }));
	};

	const addSchemaItem = (activationIndex, data = '', type = 'text', idItem = false) => {
		dispatch(editorPostSchemaActions.addSchemaItem({ activationIndex, data, type, idItem }));
	};

	const deleteSchemaItem = (schemaItemIndex) => {
		dispatch(editorPostSchemaActions.deleteSchemaItem({ schemaItemIndex }));
	};

	return {
		updateSchemaItem,
		addSchemaItem,
		deleteSchemaItem,
	};
};

export { useEditorPostSchemaController };
