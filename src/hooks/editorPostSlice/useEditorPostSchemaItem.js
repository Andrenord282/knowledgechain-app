//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectDirty } from 'store/editPostParamsSlice';
import { selectPostSchemaItem } from 'store/editorPostSchemaSlice';

//-----actions-----//
import { editorPostSchemaActions } from 'store/editorPostSchemaSlice';
import { setToggleDirty } from 'store/editPostParamsSlice';

const useEditorPostSchemaItem = (schemaItemId) => {
	const dispatch = useDispatch();
	const dirty = useSelector(selectDirty);
	const schemaItem = useSelector((state) => selectPostSchemaItem(state, schemaItemId));

	const handlerUpdatePostSchemaItem = (schemaItemId, data) => {
		if (!dirty) {
			dispatch(editorPostSchemaActions.setToggleDirty({ toggle: true }));
		}
		dispatch(editorPostSchemaActions.updateSchemaItem({ schemaItemId, data }));
	};

	return {
		schemaItem,
		handlerUpdatePostSchemaItem,
	};
};

export { useEditorPostSchemaItem };
