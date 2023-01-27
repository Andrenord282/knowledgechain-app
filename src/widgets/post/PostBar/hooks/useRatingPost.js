import userActivityPostsService from 'services/userActivityPostsService';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addRatingPost, removeRatingPost } from 'store/slices/userActivityPostsSlice';

const useRatingPost = (idUser, ratingCounter, ratingPosts) => {
	const dispatch = useDispatch();
	const [currentRating, setCurrentRating] = useState(ratingCounter);
	const handlerRatingPost = async (e) => {
		const self = e.target;
		if (self.closest('.post-bar__rating')) {
			const indexPost = self.closest('[data-index-post]').dataset.indexPost;
			const valueRating = self.closest('[data-value-rating]').dataset.valueRating;

			const { data } = await userActivityPostsService.ratingPost({
				idUser,
				indexPost,
				valueRating,
			});
			if (data.ratingPost) {
				dispatch(addRatingPost({ ratingPost: data.ratingPost }));
				setCurrentRating(data.valueCounter.ratingCounter);
			}
			if (data.ratingPost === undefined) {
				dispatch(removeRatingPost({ indexPost }));
				setCurrentRating(data.valueCounter.ratingCounter);
			}
		}
	};

	return { handlerRatingPost, currentRating };
};

export default useRatingPost;
