import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postCreatorReducer } from 'features/postCreator/model';
import postListSlice from './slices/postList/postList';
import optionsPostListSlice from './slices/optionsPostListSlice/optionsPostListSlice';
import userSlice from 'store/slices/userSlice/userSlice';

const rootReducer = combineReducers({
	user: userSlice,
	postCreator: postCreatorReducer,
	postList: postListSlice,
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
