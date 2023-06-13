import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { authReducer } from './authSlice';
import { postCreatorParamsReducer } from './postCreatorParamsSlice';
import { postCreatorSchemaReducer } from './postCreatorSchemaSlice';
import { postCreatorTopicsReducer } from './postCreatorTopicsSlice';
import { postListReducer } from './postListSlice/postListSlice';

const rootReducer = combineReducers({
	user: userReducer,
	auth: authReducer,
	postCreatorParams: postCreatorParamsReducer,
	postCreatorSchema: postCreatorSchemaReducer,
	postCreatorTopics: postCreatorTopicsReducer,
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
