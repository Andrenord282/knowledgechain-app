//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { postCreatorParamsActions } from 'store/postCreatorParamsSlice';

const usePostCreatorParamsController = () => {
	const dispatch = useDispatch();

	const initPostParams = (userId, userName) => {
		dispatch(postCreatorParamsActions.initPostParams({ userId, userName }));
	};

	return {
		initPostParams,
	};
};

export { usePostCreatorParamsController };
