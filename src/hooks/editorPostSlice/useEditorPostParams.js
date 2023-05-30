//-----redux-----//
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

//-----actions-----//
import { initParams } from 'store/editPostParamsSlice';

const useEditorPostParams = () => {
	const dispatch = useDispatch();

	const handlerInitPostParams = (userName, idUser) => {
		const postId = nanoid(5);
		const params = {
			idUser,
			userName,
			postId,
			postName: `${userName}-${postId}`,
		};

		dispatch(initParams(params));
	};

	return {
		handlerInitPostParams,
	};
};

export { useEditorPostParams };
