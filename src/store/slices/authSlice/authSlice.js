import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	requestAuth: false,
	isLoadedAuth: false,
	statusAuthUser: false,
	toggleAuthModal: false,
	verifiedUser: false,
	accessToken: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggleRequestAuth: (state, action) => {
			const { toggle } = action.payload;
			state.requestAuth = toggle;
		},

		toggleAuthModal: (state, action) => {
			const { toggle } = action.payload;
			state.toggleAuthModal = toggle;
		},

		toggleStatusAuthUser: (state, action) => {
			const { status } = action.payload;
			state.statusAuthUser = status;
		},

		toggleIsLoadedAuth: (state, action) => {
			const { toggle } = action.payload;
			state.isLoadedAuth = toggle;
		},
	},
});

export const { toggleRequestAuth, toggleAuthModal, toggleStatusAuthUser, toggleIsLoadedAuth } = authSlice.actions;
const authReducer = authSlice.reducer;
export { authReducer };
