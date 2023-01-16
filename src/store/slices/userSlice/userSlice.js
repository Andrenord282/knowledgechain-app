import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadedUser: false,
	isAuthUser: false,
	userId: null,
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
			const { userId, userName, email, userImgUrl } = action.payload;
			state.userId = userId;
			state.userName = userName;
			state.email = email;
			state.userImgUrl = userImgUrl;
		},
	},
});

const userSelector = (state) => state.user;

export const { toggleLoadedUser, toggleAuthUser, setUser } = userSlice.actions;
export { userSelector };
export default userSlice.reducer;
