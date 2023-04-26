//-----hooks-----//
import { useState, useEffect } from 'react';

const errorList = {
	title: {
		emptyText: 'Заголовок не должен быть пустым',
		lengthText: 'Заголовок не должен быть меньше 3 символов',
	},
	text: {
		emptyText: 'Текстовое поле не должно быть пустым',
		lengthText: 'Текстовое поле должно быть не меньше 10 символов',
	},
};

const useCheckValidNewPost = (postSchema) => {
	const [showError, setShowError] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [errorValidListNewPost, setErrorValidListNewPost] = useState({});

	useEffect(() => {
		setErrorValidListNewPost({});
		ckeckValidNewPost();
	}, [postSchema]);

	useEffect(() => {
		handlerSetValidNewPost();
	}, [errorValidListNewPost]);

	const ckeckValidNewPost = () => {
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
						break;
					case schemaItem.value.length < 3:
						setErrorValidListNewPost((errorValidNewPost) => {
							return {
								...errorValidNewPost,
								[schemaItem.id]: errorList.title.lengthText,
							};
						});
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
						break;
					case schemaItem.value.length < 10:
						setErrorValidListNewPost((errorValidNewPost) => {
							return {
								...errorValidNewPost,
								[schemaItem.id]: errorList.text.lengthText,
							};
						});
						break;

					case schemaItem.value.length >= 10:
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
	};

	const handlerSetValidNewPost = () => {
		let countError = 0;
		for (let error in errorValidListNewPost) {
			if (errorValidListNewPost[error].length > 0) {
				countError++;
			}
		}
		countError === 0 ? setIsValid(true) : setIsValid(false);
	};

	return { isValid, errorValidListNewPost, showError, setShowError };
};

export default useCheckValidNewPost;
