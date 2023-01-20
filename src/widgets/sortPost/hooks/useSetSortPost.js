import { useDispatch, useSelector } from 'react-redux';
import { selectSort } from 'store/selectors';
import {
	setLoadedPost,
	setSortName,
	setSortOrder,
	resetQuantitySkipPost,
} from 'store/slices/optionsPostListSlice/optionsPostListSlice';
import { resetPostList } from 'store/slices/postList/postList';

const useSetSortPost = () => {
	const dispatch = useDispatch();

	const { name, order } = useSelector(selectSort);

	const handlerSetSortName = (e) => {
		const self = e.target;
		if (self.closest('[data-sort-name]')) {
			const sortName = self.closest('[data-sort-name]').textContent;
			const sortValue = self.closest('[data-sort-name]').dataset.sortName;
			dispatch(setSortName({ sortName, sortValue }));
			dispatch(resetPostList());
			dispatch(resetQuantitySkipPost());
			dispatch(setLoadedPost({ status: false }));
		}
	};

	const handlerSetSortOrder = () => {
		order === 1
			? dispatch(setSortOrder({ sortOrder: -1 }))
			: dispatch(setSortOrder({ sortOrder: 1 }));
		dispatch(resetPostList());
		dispatch(resetQuantitySkipPost());
		dispatch(setLoadedPost({ status: false }));
	};

	return { name, order, handlerSetSortName, handlerSetSortOrder };
};

export default useSetSortPost;
