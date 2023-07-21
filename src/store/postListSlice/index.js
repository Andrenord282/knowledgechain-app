//-----slice-----//
export { postListReducer } from './postListSlice';

//-----selectors-----//
export {
    selectPostsStatus,
    selectCursor,
    selectLimit,
    selectSort,
    selectFilter,
    selectPosts,
} from './selectors';

//-----actions-----//
export { postListActions } from './postListSlice';
