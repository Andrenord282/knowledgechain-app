import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userStatus: 'init', // 'loaded' || 'init'
    userId: null,
    userName: null,
    userEmail: null,
    userImgUrl: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { userId, userName, email, userImgUrl } = action.payload;
            state.userStatus = 'loaded';
            state.userId = userId;
            state.userName = userName;
            state.userEmail = email;
            state.userImgUrl = userImgUrl;
        },

        resetUser: (state) => {
            state.userStatus = null;
            state.userId = null;
            state.userName = null;
            state.userEmail = null;
            state.userImgUrl = null;
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
