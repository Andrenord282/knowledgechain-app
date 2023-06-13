import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loadedUser: false,
	userId: null,
	userName: null,
	email: null,
	userImgUrl: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { userId, userName, email, userImgUrl } = action.payload;
			state.loadedUser = true;
			state.userId = userId;
			state.userName = userName;
			state.email = email;
			state.userImgUrl = userImgUrl;
		},

		resetUser: (state) => {
			state.loadedUser = false;
			state.userId = null;
			state.userName = null;
			state.email = null;
			state.userImgUrl = null;
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
