//-----modules-----//
import { nanoid } from 'nanoid';

//-----hooks-----//
import useUserSlice from './useUserSlice';

//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectEditorNewPost, selectPostSchema } from '../../store/slices/editorNewPostSlice';

//-----actions-----//
import {
	setParams,
	updateSchemaTitle,
	updateSchemaText,
	addSchemaItem,
	deleteSchemaItem,
	pushPostTopic,
	deletePostTopic,
} from '../../store/slices/editorNewPostSlice';

const useEditorNewPostSlice = () => {
	const postId = nanoid(5);
	const { userName, idUser } = useUserSlice();
	const dispatch = useDispatch();
	const dataNewPost = useSelector(selectEditorNewPost);
	const postSchema = useSelector(selectPostSchema);

	const setNewPostParams = () => {
		dispatch(setParams({ userName, idUser, postId, postName: `${userName}-${postId}` }));
	};

	const createTemplateSchemaItem = (data, type, idItem) => {
		return {
			id: idItem ? idItem : nanoid(5),
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

	const addNewSchemaItem = (activationIndex, schemaLength, data = '', type = 'text', idItem = false) => {
		const newSchemaItem = createTemplateSchemaItem(data, type, idItem);
		dispatch(addSchemaItem({ activationIndex, schemaLength, newSchemaItem }));
	};

	const deleteCurrentSchemaItem = (deleteSchemaItemId) => {
		dispatch(deleteSchemaItem({ deleteSchemaItemId: deleteSchemaItemId }));
	};

	const updatePostTopics = (topic, operation) => {
		switch (true) {
			case operation === 'add':
				dispatch(pushPostTopic({ newTopic: topic }));
				break;
			case operation === 'delete':
				dispatch(deletePostTopic({ deleteTopic: topic }));
				break;
		}
	};

	return {
		dataNewPost,
		postSchema,
		setNewPostParams,
		setNewPostTitle,
		setNewPostText,
		addNewSchemaItem,
		deleteCurrentSchemaItem,
		updatePostTopics,
	};
};
export default useEditorNewPostSlice;
