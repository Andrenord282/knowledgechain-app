//-----modules-----//
import { nanoid } from 'nanoid';
import formService from 'shared/formService';
import postService from 'services/axios/api/postService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import { useEffect } from 'react';
import useAlertState from 'hooks/useAlertState';
import useUserSlice from 'hooks/slices/useUserSlice';
import useNavigateLocation from 'hooks/useNavigateLocation';
import useCheckValidNewPost from 'hooks/useCheckValidNewPost';

//-----redux-----//
import { useDispatch, useSelector } from 'react-redux';

//-----selectors-----//
import { selectEditorNewPost, selectPostSchema } from 'store/slices/editorNewPostSlice';

//-----actions-----//
import {
	setParams,
	updateSchemaTitle,
	updateSchemaText,
	addSchemaItem,
	deleteSchemaItem,
	pushPostTopic,
	deletePostTopic,
} from 'store/slices/editorNewPostSlice';

const useEditorNewPostSlice = () => {
	const postId = nanoid(5);
	const dispatch = useDispatch();
	const { userName, idUser } = useUserSlice();
	const alert = useAlertState();
	const dataNewPost = useSelector(selectEditorNewPost);
	const postSchema = useSelector(selectPostSchema);
	const checkValidNewPost = useCheckValidNewPost(postSchema);
	const handlerNavigate = useNavigateLocation();

	useEffect(() => {
		const handlerSetNewPostParams = () => {
			dispatch(setParams({ userName, idUser, postId, postName: `${userName}-${postId}` }));
		};

		if (userName) {
			handlerSetNewPostParams();
		}
	}, [userName]);

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

	const submitNewPost = async (e) => {
		try {
			e.preventDefault();
			if (checkValidNewPost.isValid) {
				alert.setToggleAlert(true);
				alert.setFields.iconAlert('loading');
				alert.setFields.titleAlert('Отправка поста...');
				const newPost = formService.collectDataNewPost(dataNewPost);
				const response = await postService.createNewPost(newPost);
				console.log(response);
				if (response.status === 200) {
					alert.setFields.iconAlert('success');
					alert.setFields.titleAlert(response.data.message);
					setTimeout(() => {
						alert.setToggleAlert(false);
						alert.setFields.iconAlert(null);
						alert.setFields.titleAlert(null);
						handlerNavigate.setLocationPage();
					}, 700);

					return;
				}
				throw new errorService(response.data.errorName, response.data.message);
			} else {
				checkValidNewPost.setShowError(true);
			}
		} catch (error) {
			console.log(error);
			alert.setFields.iconAlert('error');
			alert.setFields.titleAlert(error.message);
			setTimeout(() => {
				alert.setToggleAlert(false);
				alert.setFields.iconAlert(null);
				alert.setFields.titleAlert(null);
			}, 1000);
		}
	};

	return {
		alert,
		postSchema,
		isValid: checkValidNewPost.isValid,
		showError: checkValidNewPost.showError,
		errorValidListNewPost: checkValidNewPost.errorValidListNewPost,
		setNewPostTitle,
		setNewPostText,
		addNewSchemaItem,
		deleteCurrentSchemaItem,
		updatePostTopics,
		submitNewPost,
	};
};
export default useEditorNewPostSlice;
