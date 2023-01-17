import useObserverScroll from 'hooks/useObserverScroll';
import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setLoadedPost } from 'store/slices/optionsPostListSlice/optionsPostListSlice';
import { selectOptionPost } from 'store/selectors';

const useUpdatePostList = () => {
	const dispatch = useDispatch();
	const { isLoadedPost } = useSelector(selectOptionPost);

	const updatePostList = useCallback(() => {
		dispatch(setLoadedPost({ status: false }));
	});

	const { observeItem } = useObserverScroll([isLoadedPost], updatePostList);

	return { triggerItemUpdate: observeItem };
};

export default useUpdatePostList;
