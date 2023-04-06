import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadedUser: true,
	isAuthUser: false,
	idUser: null,
	userName: 'Andre Chuvashevskii',
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
			const { idUser, userName, email, userImgUrl } = action.payload;
			state.idUser = idUser;
			state.userName = userName;
			state.email = email;
			state.userImgUrl = userImgUrl;
		},
		resetUser: (state) => {
			state.idUser = null;
			state.userName = null;
			state.email = null;
			state.userImgUrl = null;
		},
	},
});

export const { toggleLoadedUser, toggleAuthUser, setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
