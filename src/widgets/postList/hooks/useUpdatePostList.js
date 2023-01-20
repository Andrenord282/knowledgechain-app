import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useDispatch, useSelector } from 'react-redux';
import { setLoadedPost } from 'store/slices/optionsPostListSlice/optionsPostListSlice';
import { selectOptionPost } from 'store/selectors';

const useUpdatePostList = () => {
	const dispatch = useDispatch();
	const { postListIsOver } = useSelector(selectOptionPost);
	const [triggeriItemLoading, inView] = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	useEffect(() => {
		if (postListIsOver) return;
		const updatePostList = () => {
			dispatch(setLoadedPost({ status: false }));
		};

		if (inView) updatePostList();
	}, [inView, postListIsOver]);

	return { triggeriItemLoading };
};

export default useUpdatePostList;
