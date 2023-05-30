import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { authReducer } from './authSlice';
import { editPostParamsReducer } from './editPostParamsSlice';
import { editorPostSchemaReducer } from './editorPostSchemaSlice';
import { postListReducer } from './postListSlice/postListSlice';

const rootReducer = combineReducers({
	user: userReducer,
	auth: authReducer,
	editPostParams: editPostParamsReducer,
	editorPostSchema: editorPostSchemaReducer,
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
