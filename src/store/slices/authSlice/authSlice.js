import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadedAuth: false,
	requestAuth: false,
	statusAuth: false,
	toggleAuthModal: false,
	verifiedUser: false,
	accessToken: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggleIsLoadedAuth: (state, action) => {
			const { toggle } = action.payload;

			state.isLoadedAuth = toggle;
		},

		toggleRequestAuth: (state, action) => {
			const { toggle } = action.payload;

			state.requestAuth = toggle;
		},

		toggleAuthModal: (state, action) => {
			const { toggle } = action.payload;

			state.toggleAuthModal = toggle;
		},

		toggleStatusAuth: (state, action) => {
			const { status } = action.payload;

			state.statusAuth = status;
		},
	},
});

export const { toggleIsLoadedAuth, toggleRequestAuth, toggleAuthModal, toggleStatusAuth } = authSlice.actions;
const authReducer = authSlice.reducer;
export { authReducer };
