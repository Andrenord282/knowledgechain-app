import { useDispatch } from 'react-redux';
import { setLoadedPost, resetQuantitySkipPost, resetPostList } from 'widgets/postList/model';

const useQueryFilterPosts = () => {
	const dispatch = useDispatch();

	return () => {
		dispatch(resetPostList());
		dispatch(resetQuantitySkipPost());
		dispatch(setLoadedPost({ status: false }));
	};
};

export default useQueryFilterPosts;
