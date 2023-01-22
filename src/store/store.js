import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postCreatorReducer } from 'widgets/postCreator/model';
import postListSlice from './slices/postList/postListSlice';
import { filterPostListReducer } from 'widgets/filterPost/model';
import optionsPostListSlice from './slices/optionsPostListSlice/optionsPostListSlice';
import userSlice from 'store/slices/userSlice/userSlice';

const rootReducer = combineReducers({
	user: userSlice,
	postCreator: postCreatorReducer,
	postList: postListSlice,
	filterPostList: filterPostListReducer,
	optionsPostList: optionsPostListSlice,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export default store;
