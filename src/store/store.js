import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postCreatorReducer } from 'widgets/postCreator/model';
import { postListReducer } from 'widgets/postList/model';
import { filterPostListReducer } from 'widgets/filterPost/model';
import { sortPostListReducer } from 'widgets/sortPost/model';
import { userReducer } from './slices/userSlice';
import { userActivityPostsReducer } from 'store/slices/userActivityPostsSlice';

const rootReducer = combineReducers({
	user: userReducer,
	userActivityPosts: userActivityPostsReducer,
	postCreator: postCreatorReducer,
	postList: postListReducer,
	filterPostList: filterPostListReducer,
	sortPostList: sortPostListReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export default store;
