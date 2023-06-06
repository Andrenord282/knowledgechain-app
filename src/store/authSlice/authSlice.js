import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loadedAuth: false,
	requestAuth: false,
	statusAuth: false,
	toggleAuthModal: false,
	lockAuthModal: false,
	typeAuth: 'signIn',
	verifiedUser: false,
	accessToken: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToggleLoadedAuth: (state, action) => {
			const { toggle } = action.payload;

			state.loadedAuth = toggle;
		},

		setToggleStatusAuth: (state, action) => {
			const { toggle } = action.payload;

			state.statusAuth = toggle;
		},

		setToggleAuthModal: (state, action) => {
			state.toggleAuthModal = !state.toggleAuthModal;
		},

		setLockAuthModal: (state, action) => {
			const { lock } = action.payload;

			state.lockAuthModal = lock;
		},

		setTypeAuth: (state, action) => {
			const { typeAuth } = action.payload;

			state.typeAuth = typeAuth;
		},

		setToggleRequestAuth: (state, action) => {
			const { toggle } = action.payload;

			state.requestAuth = toggle;
		},
	},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
