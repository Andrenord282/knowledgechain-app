import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadedPost } from 'store/slices/optionsPostListSlice/optionsPostListSlice';
import { selectOptionPost } from 'store/selectors';

const useUpdatePostList = () => {
	const dispatch = useDispatch();
	const { postListIsOver } = useSelector(selectOptionPost);
	const [setNode, isDisplay] = useIntersectionObserver();

	useEffect(() => {
		if (postListIsOver || !isDisplay) return;
		const updatePostList = () => {
			dispatch(setLoadedPost({ status: false }));
		};

		updatePostList();
	}, [isDisplay, postListIsOver]);

	return [setNode, isDisplay];
};

export default useUpdatePostList;
