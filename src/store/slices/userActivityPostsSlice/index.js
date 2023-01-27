import userActivityPostsReducer from './userActivityPostsSlice';

export { userActivityPostsReducer };
export {
	setUserActivityPosts,
	resetUserActivityPosts,
	removeMarkPost,
	addMarkPost,
	addRatingPost,
	removeRatingPost,
} from './userActivityPostsSlice';
export { selectUserActivityPosts } from './selectors';
