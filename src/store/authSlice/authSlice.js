import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authStatus: 'init',  // 'init' || 'unidentifiedUser' || 'identifiedUser'
	requestAuth: false,
	toggleAuthModal: false,
	lockAuthModal: false,
	typeAuth: 'signIn',
	accessToken: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
        setAuthStatus: (state, action) => {
			const { status } = action.payload;

			state.authStatus = status;
		},

        setToggleRequestAuth: (state, action) => {
			const { toggle } = action.payload;

			state.requestAuth = toggle;
		},

		setToggleAuthModal: (state, action) => {
			const { toggle } = action.payload;

			state.toggleAuthModal = toggle;
		},

		setLockAuthModal: (state, action) => {
			const { lock } = action.payload;

			state.lockAuthModal = lock;
		},

		setTypeAuth: (state, action) => {
			const { typeAuth } = action.payload;

			state.typeAuth = typeAuth;
		},

        setAccessToken: (state, action) => {
			const { token } = action.payload;

			state.accessToken = token;
		},

	},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
