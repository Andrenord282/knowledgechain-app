import { nanoid } from 'nanoid';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setParamsPost } from '../model';
import { selectUser } from 'store/slices/userSlice';

const usePostCreatorParams = () => {
	const dispatch = useDispatch();
	const { userName, idUser } = useSelector(selectUser);
	const postId = nanoid(5);
	useEffect(() => {
		dispatch(
			setParamsPost({
				userName,
				idUser,
				postId,
				postName: `${userName}-${postId}`,
			}),
		);
	}, []);
};

export default usePostCreatorParams;
