//-----modules-----//
import { nanoid } from 'nanoid';
import formService from 'shared/formService';
import postService from 'services/axios/api/postService';
import searchService from 'services/axios/api/searchService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import { useState, useEffect } from 'react';
import useAlertState from 'hooks/useAlertState';
import useUserSlice from 'hooks/slices/useUserSlice';
import useNavigateLocation from 'hooks/useNavigateLocation';
import useDebouncePromise from 'hooks/useDebouncePromise';

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

const errorList = {
	title: {
		emptyText: 'Заголовок не должен быть пустым',
		lengthText: 'Заголовок не должен быть меньше 3 символов',
	},
	text: {
		emptyText: 'Текстовое поле не должно быть пустым',
		lengthText: 'Текстовое поле должно быть не меньше 3 символов',
	},
};

const useEditorNewPostSlice = () => {
	const dispatch = useDispatch();
	const { userName, idUser } = useUserSlice();
	const alert = useAlertState();
	const dataNewPost = useSelector(selectEditorNewPost);
	const postSchema = useSelector(selectPostSchema);
	const [isDirty, setIsDirty] = useState(false);
	const [showError, setShowError] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [errorValidListNewPost, setErrorValidListNewPost] = useState({});
	const handlerNavigate = useNavigateLocation();
	const debounsSearch = useDebouncePromise(searchService.searchValue, 500);

	useEffect(() => {
		const handlerSetNewPostParams = () => {
			const postId = nanoid(5);
			dispatch(setParams({ idUser, userName, postId, postName: `${userName}-${postId}` }));
		};

		if (userName) {
			handlerSetNewPostParams();
		}
	}, [userName]);

	const ckeckValidNewPost = () => {
		let countError = 0;
		postSchema.forEach((schemaItem) => {
			if (schemaItem.type === 'title') {
				switch (true) {
					case schemaItem.value.length === 0:
						setErrorValidListNewPost((errorValidNewPost) => {
							return {
								...errorValidNewPost,
								[schemaItem.id]: errorList.title.emptyText,
							};
						});
						countError++;
						break;
					case schemaItem.value.length < 3:
						setErrorValidListNewPost((errorValidNewPost) => {
							return {
								...errorValidNewPost,
								[schemaItem.id]: errorList.title.lengthText,
							};
						});
						countError++;
						break;

					case schemaItem.value.length >= 3:
						setErrorValidListNewPost((errorValidNewPost) => {
							return {
								...errorValidNewPost,
								[schemaItem.id]: '',
							};
						});
						break;
				}
			}
			if (schemaItem.type === 'text') {
				switch (true) {
					case schemaItem.value.length === 0:
						setErrorValidListNewPost((errorValidNewPost) => {
							return {
								...errorValidNewPost,
								[schemaItem.id]: errorList.text.emptyText,
							};
						});
						countError++;
						break;
					case schemaItem.value.length < 3:
						setErrorValidListNewPost((errorValidNewPost) => {
							return {
								...errorValidNewPost,
								[schemaItem.id]: errorList.text.lengthText,
							};
						});
						countError++;
						break;

					case schemaItem.value.length >= 3:
						setErrorValidListNewPost((errorValidNewPost) => {
							return {
								...errorValidNewPost,
								[schemaItem.id]: '',
							};
						});
						break;
				}
			}
		});
		countError === 0 ? setIsValid(true) : setIsValid(false);
	};

	// useEffect(() => {
	// 	if (isDirty) {
	// 		ckeckValidNewPost();
	// 	}
	// }, [isDirty, postSchema]);

	const createTemplateSchemaItem = (data, type, idItem) => {
		return {
			id: idItem ? idItem : nanoid(5),
			type: type,
			value: data,
		};
	};

	const setNewPostTitle = (data) => {
		if (!isDirty) {
			setIsDirty(true);
		}
		dispatch(updateSchemaTitle(data));
	};

	const setNewPostText = (data) => {
		if (!isDirty) {
			setIsDirty(true);
		}
		dispatch(updateSchemaText(data));
	};

	const addNewSchemaItem = (activationIndex, schemaLength, data = '', type = 'text', idItem = false) => {
		const newSchemaItem = createTemplateSchemaItem(data, type, idItem);
		dispatch(addSchemaItem({ activationIndex, schemaLength, newSchemaItem }));
	};

	const deleteCurrentSchemaItem = (deleteSchemaItemId) => {
		dispatch(deleteSchemaItem({ deleteSchemaItemId: deleteSchemaItemId }));
	};

	const requestVariantTopic = async (inputValue) => {
		const response = await debounsSearch('topics', { topicName: inputValue });
		if (response.status === 200) {
			return response.data;
		}
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

			if (isValid) {
				alert.setToggleAlert(true);
				alert.setFields.iconAlert('loading');
				alert.setFields.titleAlert('Отправка поста...');
				// const newPost = formService.collectDataNewPost(dataNewPost);
				// const response = await postService.createNewPost(newPost);
				// if (response.status === 200) {
				// 	alert.setFields.iconAlert('success');
				// 	alert.setFields.titleAlert(response.data.message);
				// 	setTimeout(() => {
				// 		alert.setToggleAlert(false);
				// 		alert.setFields.iconAlert(null);
				// 		alert.setFields.titleAlert(null);
				// 		handlerNavigate.setLocationPage();
				// 	}, 700);

				// 	return;
				// }
				// throw new errorService(response.data.errorName, response.data.message);
			} else {
				setShowError(true);
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
		isValid,
		errorValidListNewPost,
		showError,
		setNewPostTitle,
		setNewPostText,
		addNewSchemaItem,
		deleteCurrentSchemaItem,
		requestVariantTopic,
		updatePostTopics,
		submitNewPost,
	};
};
export default useEditorNewPostSlice;
