import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadedUser: true,
	isAuthUser: false,
	userName: null,
	email: null,
	userImgUrl: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		toggleLoadedUser: (state) => {
			state.isLoadedUser = !state.isLoadedUser;
		},
		toggleAuthUser: (state) => {
			state.isAuthUser = !state.isAuthUser;
		},
		setUser: (state, action) => {
			const { userName, email, userImgUrl } = action.payload;
			state.userName = userName;
			state.email = email;
			state.userImgUrl = userImgUrl;
		},
	},
});

export const { toggleLoadedUser, toggleAuthUser, setUser } = userSlice.actions;
export default userSlice.reducer;
