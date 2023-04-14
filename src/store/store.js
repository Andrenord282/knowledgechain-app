import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { authReducer } from './slices/authSlice';
import { editorNewPostReducer } from './slices/editorNewPostSlice';

const rootReducer = combineReducers({
	user: userReducer,
	auth: authReducer,
	editorNewPost: editorNewPostReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export default store;
