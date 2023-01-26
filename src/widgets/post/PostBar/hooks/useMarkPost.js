import userActivityPostsService from 'services/userActivityPostsService';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserActivityPosts,
	addMarkPost,
	removeMarkPost,
} from 'store/slices/userActivityPostsSlice';
import { selectUser } from 'store/slices/userSlice';

const useMarkPost = () => {
	const dispatch = useDispatch();
	const { markedPosts } = useSelector(selectUserActivityPosts);
	const { idUser } = useSelector(selectUser);
	const handlerMarkPost = async (e) => {
		const self = e.target;
		if (self.closest('.post-bar__marker')) {
			const indexPost = self.closest('[data-index-post]').dataset.indexPost;
			const { data } = await userActivityPostsService.markPost({ idUser, indexPost });
			if (data) dispatch(addMarkPost({ data }));
			if (!data) dispatch(removeMarkPost({ indexPost }));
		}
	};

	return { handlerMarkPost, markedPosts };
};

export default useMarkPost;
