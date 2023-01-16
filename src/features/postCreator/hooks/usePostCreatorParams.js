import { nanoid } from 'nanoid';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setParamsPost } from '../model';
import { selectUser } from 'store/selectors';

const usePostCreatorParams = () => {
	const dispatch = useDispatch();
	const { userName, userId } = useSelector(selectUser);
	const postId = nanoid(5);
	useEffect(() => {
		dispatch(
			setParamsPost({
				userName,
				userId,
				postId,
				postName: `${userName}-${postId}`,
			}),
		);
	}, []);
};

export default usePostCreatorParams;
