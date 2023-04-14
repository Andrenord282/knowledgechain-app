//-----modules-----//
import { nanoid } from 'nanoid';

//-----hooks-----//
import useUserSlice from './useUserSlice';

//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectNewPost, selectPostSchema, selectPostThemes } from '../../store/slices/editorNewPostSlice';

//-----actions-----//
import {
	setParams,
	updateSchemaTitle,
	updateSchemaText,
	addSchemaItem,
	deleteSchemaItem,
} from '../../store/slices/editorNewPostSlice';

//-----modules-----//
//-----router-----//
//-----hooks-----//
//-----redux-----//
//-----widgets-----//
//-----сomponents-----//
//-----style-----//

const useEditorNewPostSlice = () => {
	const postId = nanoid(5);
	const { userName, idUser } = useUserSlice();
	const dispatch = useDispatch();
	const postSchema = useSelector(selectPostSchema);

	const setNewPostParams = () => {
		dispatch(setParams({ userName, idUser, postId, postName: `${userName}-${postId}` }));
	};

	const createTemplateSchemaItem = (data, type) => {
		return {
			id: nanoid(5),
			type: type,
			value: data,
		};
	};

	const setNewPostTitle = (data) => {
		dispatch(updateSchemaTitle(data));
	};

	const setNewPostText = (data) => {
		dispatch(updateSchemaText(data));
	};

	const addNewSchemaItem = (activationIndex, schemaLength, data = '', type = 'text') => {
		const newSchemaItem = createTemplateSchemaItem(data, type);
		dispatch(addSchemaItem({ activationIndex, schemaLength, newSchemaItem }));
	};

	const deletCurrentSchemaItem = (deleteSchemaItemId) => {
		dispatch(deleteSchemaItem({ deleteSchemaItemId: deleteSchemaItemId }));
	};

	const renderSchema = () => {};

	return {
		postSchema,
		setNewPostParams,
		setNewPostTitle,
		setNewPostText,
		addNewSchemaItem,
		deletCurrentSchemaItem,
	};
};
export default useEditorNewPostSlice;
