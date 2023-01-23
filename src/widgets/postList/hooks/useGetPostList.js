import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectSort } from 'widgets/sortPost/model';
import { selectFilters } from 'widgets/filterPost/model';
import {
	selectPostList,
	pushPostList,
	setLoadedPost,
	updateQuantitySkipPost,
	setPostListIsOver,
} from '../model';

import postsService from 'services/postsService';

const useGetPostList = () => {
	const dispatch = useDispatch();
	const sort = useSelector(selectSort);
	const filters = useSelector(selectFilters);
	const { isLoadedPost, limit, quantitySkipPost, postListIsOver, posts } =
		useSelector(selectPostList);
		
	const optionQuery = { limit, quantitySkipPost, sort, filters };
	useEffect(() => {
		const handlerGetPostList = async () => {
			const response = await postsService.getPosts(optionQuery);
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
	}, [isLoadedPost, dispatch]);

	return { isLoadedPost, postListIsOver, posts };
};

export default useGetPostList;
