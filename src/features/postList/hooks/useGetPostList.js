import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectOptionPost, selectPostList } from 'store/selectors';
import { pushPostList } from 'store/slices/postList/postList';
import { setLoadedPost } from 'store/slices/optionsPostListSlice/optionsPostListSlice';

import postsService from 'services/postsService';

const useGetPostList = () => {
	const dispatch = useDispatch();
	const { isLoadedPost, ...optionsPostList } = useSelector(selectOptionPost);
	const postList = useSelector(selectPostList);

	useEffect(() => {
		const handlerGetPostList = async () => {
			const response = await postsService.getPosts(optionsPostList);
			if (response.status === 200) {
				dispatch(pushPostList({ posts: response.data }));
				dispatch(setLoadedPost({ status: true }));
			}
		};
		if (!isLoadedPost) {
			handlerGetPostList();
		}
	}, [isLoadedPost, optionsPostList, dispatch]);

	return { isLoadedPost, postList };
};

export default useGetPostList;
