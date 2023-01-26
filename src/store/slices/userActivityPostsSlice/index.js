import userActivityPostsReducer from './userActivityPostsSlice';

export { userActivityPostsReducer };
export {
	setUserActivityPosts,
	resetUserActivityPosts,
	removeMarkPost,
	addMarkPost,
} from './userActivityPostsSlice';
export { selectUserActivityPosts } from './selectors';
