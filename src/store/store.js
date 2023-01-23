import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postCreatorReducer } from 'widgets/postCreator/model';
import { postListReducer } from 'widgets/postList/model';
import { filterPostListReducer } from 'widgets/filterPost/model';
import { sortPostListReducer } from 'widgets/sortPost/model';
import userSlice from 'store/slices/userSlice/userSlice';

const rootReducer = combineReducers({
	user: userSlice,
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
