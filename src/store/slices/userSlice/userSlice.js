import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadedUser: false,
	idUser: null,
	userName: null,
	email: null,
	userImgUrl: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { idUser, userName, email, userImgUrl } = action.payload;
			state.idUser = idUser;
			state.userName = userName;
			state.email = email;
			state.userImgUrl = userImgUrl;
		},

		toggleLodaedUser: (state, action) => {
			const { isLoaded } = action.payload;
			state.isLoadedUser = isLoaded;
		},

		resetUser: (state) => {
			state.idUser = null;
			state.userName = null;
			state.email = null;
			state.userImgUrl = null;
		},
	},
});

export const { setUser, toggleLodaedUser, resetUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export { userReducer };
