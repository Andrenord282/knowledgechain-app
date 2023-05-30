//-----modules-----//
import formService from 'shared/formService';
import postService from 'services/axios/api/postService';
import errorService from 'shared/errorService/errorService';

//-----hooks-----//
import { useState, useEffect } from 'react';
import useAlertState from 'hooks/useAlertState';
import useNavigateLocation from 'hooks/useNavigateLocation';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectDirty, selectPostParams, selectPostSchema } from 'store/editorPostSlice';

//-----actions-----//
import {} from 'store/editorPostSlice';

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

const useEditorPostForm = () => {
	const alert = useAlertState();
	// const dataPost = useSelector(selectPostParams);
	// const postSchema = useSelector(selectPostSchema);
	// const dirty = useSelector(selectDirty);
	// const [showError, setShowError] = useState(false);
	// const [isValid, setIsValid] = useState(false);
	// const [errorValidListNewPost, setErrorValidListNewPost] = useState({});
	// const handlerNavigate = useNavigateLocation();

	const ckeckValidNewPost = () => {
		// let countError = 0;
		// postSchema.forEach((schemaItem) => {
		// 	if (schemaItem.type === 'title') {
		// 		switch (true) {
		// 			case schemaItem.value.length === 0:
		// 				setErrorValidListNewPost((errorValidNewPost) => {
		// 					return {
		// 						...errorValidNewPost,
		// 						[schemaItem.id]: errorList.title.emptyText,
		// 					};
		// 				});
		// 				countError++;
		// 				break;
		// 			case schemaItem.value.length < 3:
		// 				setErrorValidListNewPost((errorValidNewPost) => {
		// 					return {
		// 						...errorValidNewPost,
		// 						[schemaItem.id]: errorList.title.lengthText,
		// 					};
		// 				});
		// 				countError++;
		// 				break;
		// 			case schemaItem.value.length >= 3:
		// 				setErrorValidListNewPost((errorValidNewPost) => {
		// 					return {
		// 						...errorValidNewPost,
		// 						[schemaItem.id]: '',
		// 					};
		// 				});
		// 				break;
		// 		}
		// 	}
		// 	if (schemaItem.type === 'text') {
		// 		switch (true) {
		// 			case schemaItem.value.length === 0:
		// 				setErrorValidListNewPost((errorValidNewPost) => {
		// 					return {
		// 						...errorValidNewPost,
		// 						[schemaItem.id]: errorList.text.emptyText,
		// 					};
		// 				});
		// 				countError++;
		// 				break;
		// 			case schemaItem.value.length < 3:
		// 				setErrorValidListNewPost((errorValidNewPost) => {
		// 					return {
		// 						...errorValidNewPost,
		// 						[schemaItem.id]: errorList.text.lengthText,
		// 					};
		// 				});
		// 				countError++;
		// 				break;
		// 			case schemaItem.value.length >= 3:
		// 				setErrorValidListNewPost((errorValidNewPost) => {
		// 					return {
		// 						...errorValidNewPost,
		// 						[schemaItem.id]: '',
		// 					};
		// 				});
		// 				break;
		// 		}
		// 	}
		// });
		// countError === 0 ? setIsValid(true) : setIsValid(false);
	};

	// useEffect(() => {
	// if (dirty) {
	// 	ckeckValidNewPost();
	// }
	// }, [dirty, postSchema]);

	const submitNewPost = async (e) => {
		// try {
		// 	e.preventDefault();
		// 	if (isValid) {
		// 		alert.setToggleAlert(true);
		// 		alert.setFields.iconAlert('loading');
		// 		alert.setFields.titleAlert('Отправка поста...');
		// 		const newPost = formService.collectdataPost(dataPost);
		// 		const response = await postService.createNewPost(newPost);
		// 		if (response.status === 200) {
		// 			alert.setFields.iconAlert('success');
		// 			alert.setFields.titleAlert(response.data.message);
		// 			setTimeout(() => {
		// 				alert.setToggleAlert(false);
		// 				alert.setFields.iconAlert(null);
		// 				alert.setFields.titleAlert(null);
		// 				handlerNavigate.setLocationPage();
		// 			}, 700);
		// 			return;
		// 		}
		// 		throw new errorService(response.data.errorName, response.data.message);
		// 	} else {
		// 		setShowError(true);
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// 	alert.setFields.iconAlert('error');
		// 	alert.setFields.titleAlert(error.message);
		// 	setTimeout(() => {
		// 		alert.setToggleAlert(false);
		// 		alert.setFields.iconAlert(null);
		// 		alert.setFields.titleAlert(null);
		// 	}, 1000);
		// }
	};

	return {
		alert,
		// postSchema,
		// isValid,
		// errorValidListNewPost,
		// showError,
		submitNewPost,
	};
};
export { useEditorPostForm };
