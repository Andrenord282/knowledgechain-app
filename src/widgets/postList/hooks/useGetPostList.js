import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectOptionPost } from 'store/selectors';
import { selectPostList } from 'store/selectors';
import { pushPostList } from 'store/slices/postList/postListSlice';
import {
	setLoadedPost,
	updateQuantitySkipPost,
	setPostListIsOver,
} from 'store/slices/optionsPostListSlice/optionsPostListSlice';

import postsService from 'services/postsService';

const useGetPostList = () => {
	const dispatch = useDispatch();
	const { isLoadedPost, postListIsOver, ...optionsPostList } = useSelector(selectOptionPost);
	const postList = useSelector(selectPostList);

	useEffect(() => {
		const handlerGetPostList = async () => {
			const response = await postsService.getPosts(optionsPostList);
			if (response.status === 200) {
				const { postList, postListIsOver } = response.data;

				dispatch(pushPostList({ posts: postList }));
				dispatch(updateQuantitySkipPost());
				if (postListIsOver) {
					dispatch(setPostListIsOver());
				}
			}
		};

		if (!isLoadedPost) {
			handlerGetPostList();
			dispatch(setLoadedPost({ status: true }));
		}
	}, [isLoadedPost, optionsPostList, dispatch]);

	return { isLoadedPost, postListIsOver, postList };
};

export default useGetPostList;
