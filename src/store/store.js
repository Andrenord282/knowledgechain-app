import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { authReducer } from './slices/authSlice';
import { editorNewPostReducer } from './slices/editorNewPostSlice';
import { postListReducer } from './slices/postListSlice/postListSlice';

const rootReducer = combineReducers({
	user: userReducer,
	auth: authReducer,
	editorNewPost: editorNewPostReducer,
	postList: postListReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export default store;
