import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { userReducer } from './userSlice';
import { postCreatorReducer } from './postCreatorSlice/postCreatorSlice';



import { postCreatorSchemaReducer } from './postCreatorSchemaSlice';
import { postCreatorTopicsReducer } from './postCreatorTopicsSlice';
import { postListReducer } from './postListSlice/postListSlice';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
    postCreator: postCreatorReducer,
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
