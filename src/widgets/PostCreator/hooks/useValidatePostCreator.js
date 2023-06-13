import { useState } from 'react';

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

const useValidatePostCreator = () => {
	const [validErrorsList, setValidErrorsList] = useState({});
	const [dirty, setDirty] = useState(false);
	const [valid, setValid] = useState(false);

	const validation = (postSchema) => {
		if (!dirty) {
			setDirty(true);
			return;
		}
		let countError = 0;
		postSchema.forEach((schemaItem) => {
			if (schemaItem.type === 'title') {
				switch (true) {
					case schemaItem.value.length === 0:
						setValidErrorsList((prevErrorValidNewPost) => {
							return {
								...prevErrorValidNewPost,
								[schemaItem.id]: errorList.title.emptyText,
							};
						});
						countError++;
						break;
					case schemaItem.value.length < 3:
						setValidErrorsList((prevErrorValidNewPost) => {
							return {
								...prevErrorValidNewPost,
								[schemaItem.id]: errorList.title.lengthText,
							};
						});
						countError++;
						break;

					case schemaItem.value.length >= 3:
						setValidErrorsList((prevErrorValidNewPost) => {
							delete prevErrorValidNewPost[schemaItem.id];
							return {
								...prevErrorValidNewPost,
							};
						});
						break;
				}
			}
			if (schemaItem.type === 'text') {
				switch (true) {
					case schemaItem.value.length === 0:
						setValidErrorsList((prevErrorValidNewPost) => {
							return {
								...prevErrorValidNewPost,
								[schemaItem.id]: errorList.text.emptyText,
							};
						});
						countError++;
						break;
					case schemaItem.value.length < 10:
						setValidErrorsList((prevErrorValidNewPost) => {
							return {
								...prevErrorValidNewPost,
								[schemaItem.id]: errorList.text.lengthText,
							};
						});
						countError++;
						break;

					case schemaItem.value.length >= 3:
						setValidErrorsList((prevErrorValidNewPost) => {
							delete prevErrorValidNewPost[schemaItem.id];
							return {
								...prevErrorValidNewPost,
							};
						});
						break;
				}
			}
		});
		countError === 0 ? setValid(true) : setValid(false);
	};

	return {
		validErrorsList,
		valid,
		validation,
	};
};

export default useValidatePostCreator;
