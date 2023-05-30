//-----slice-----//
export { postListReducer } from './postListSlice';

//-----selectors-----//
export {
	selectPostListLoaded,
	selectCursorPost,
	selectPostLimit,
	selectSortPost,
	selectFilterPost,
	selectPostList,
} from './selectors';

//-----actions-----//
export { togglePostListLoaded, updatePostList, setCursorPost } from './postListSlice';
