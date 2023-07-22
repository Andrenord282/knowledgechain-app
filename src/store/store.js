import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { userReducer } from './userSlice';
import { postCreatorReducer } from './postCreatorSlice';
import { postListReducer } from './postListSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    postCreator: postCreatorReducer,
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
