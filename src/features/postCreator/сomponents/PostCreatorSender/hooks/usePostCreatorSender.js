import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { removeAllSchema } from 'features/postCreator/model';

import postsService from 'services/postsService';
import filesService from 'services/filesService';

const usePostCreatorSender = (formData, readyForm, handlerOpenModal, handlerCloseModal) => {
	const dispatch = useDispatch();
	const [statusReq, setStatusReq] = useState(null);
	const [alertMessage, setAlertMessage] = useState(null);
	let navigate = useNavigate();

	const handlerSendPostCreator = async () => {
		handlerOpenModal();
		setStatusReq('loading');
		setAlertMessage({ title: 'Отправка поста...' });

		const responsePost = await postsService.createNewPost(readyForm());
		// const responseFiles = await filesService.uploadsFiles(formData);

		if (responsePost.status === 200) {
			setStatusReq('success');
			setAlertMessage({ title: 'Пост создан' });
			setTimeout(() => {
				setStatusReq(null);
				handlerCloseModal();
				dispatch(removeAllSchema());
				return navigate('/');
			}, 1000);
		} else if (responsePost.status !== 200) {
			setStatusReq('error');
			setAlertMessage({ title: responsePost.data.message });
			setTimeout(() => {
				setStatusReq(null);
				handlerCloseModal();
			}, 2000);
		}
	};

	return { handlerSendPostCreator, statusReq, alertMessage };
};

export default usePostCreatorSender;
