import userActivityPostsService from 'services/userActivityPostsService';
import { useDispatch } from 'react-redux';
import { addMarkPost, removeMarkPost } from 'store/slices/userActivityPostsSlice';

const useMarkPost = (idUser) => {
	const dispatch = useDispatch();
	const handlerMarkPost = async (e) => {
		const self = e.target;
		if (self.closest('.post-bar__marker')) {
			const indexPost = self.closest('[data-index-post]').dataset.indexPost;
			const { data } = await userActivityPostsService.markPost({ idUser, indexPost });
			if (data) dispatch(addMarkPost({ data }));
			if (!data) dispatch(removeMarkPost({ indexPost }));
		}
	};

	return { handlerMarkPost };
};

export default useMarkPost;
