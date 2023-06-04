//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//

import { editPostParamsActions } from 'store/editPostParamsSlice';

const useEditPostParamsController = () => {
	const dispatch = useDispatch();

	const initPostParams = (userId, userName) => {
		dispatch(editPostParamsActions.initPostParams({ userId, userName }));
	};

	return {
		initPostParams,
	};
};

export { useEditPostParamsController };
