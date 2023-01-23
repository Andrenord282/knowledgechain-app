import postListReducer from './postListSlice';

export { postListReducer };
export {
	setLoadedPost,
	pushPostList,
	resetPostList,
	updateQuantitySkipPost,
	resetQuantitySkipPost,
	setPostListIsOver,
} from './postListSlice';
export { selectPostList } from './selectors';
