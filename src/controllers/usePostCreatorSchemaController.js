//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { postCreatorSchemaActions } from 'store/postCreatorSchemaSlice';

const usePostCreatorSchemaController = () => {
	const dispatch = useDispatch();

	const updateSchemaItem = (schemaItemIndex, data) => {
		dispatch(postCreatorSchemaActions.updateSchemaItem({ schemaItemIndex, data }));
	};

	const addSchemaItem = (activationIndex, data = '', type = 'text', idItem = false) => {
		dispatch(postCreatorSchemaActions.addSchemaItem({ activationIndex, data, type, idItem }));
	};

	const deleteSchemaItem = (schemaItemIndex) => {
		dispatch(postCreatorSchemaActions.deleteSchemaItem({ schemaItemIndex }));
	};

	return {
		updateSchemaItem,
		addSchemaItem,
		deleteSchemaItem,
	};
};

export { usePostCreatorSchemaController };
