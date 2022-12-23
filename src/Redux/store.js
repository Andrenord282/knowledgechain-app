import { configureStore, combineReducers } from '@reduxjs/toolkit';
import modalReducer from 'Redux/slices/modalSlice';
import newPostSlice from 'Redux/slices/newPostSlice';
import substrateSlice from 'Redux/slices/substrateSlice';
import userSlice from 'Redux/slices/userSlice';

const rootReducer = combineReducers({
	modal: modalReducer,
	user: userSlice,
	substrate: substrateSlice,
	newPost: newPostSlice,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export default store;
