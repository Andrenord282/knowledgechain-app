import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useDispatch } from 'react-redux';
import { setLoadedPost } from 'store/slices/optionsPostListSlice/optionsPostListSlice';

const useUpdatePostList = (postListIsOver) => {
	const dispatch = useDispatch();
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
