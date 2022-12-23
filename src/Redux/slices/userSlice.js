import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadedUser: false,
	isAuthUser: false,
	displayName: null,
	email: null,
	photoURL: null,
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
			const { displayName, email, photoURL } = action.payload;
			state.displayName = displayName;
			state.email = email;
			state.photoURL = photoURL;
		},
	},
});

export const { toggleLoadedUser, toggleAuthUser, setUser } = userSlice.actions;
export default userSlice.reducer;
