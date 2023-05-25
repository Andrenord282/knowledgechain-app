import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loadedAuth: false,
	requestAuth: false,
	statusAuth: false,
	setToggleAuthModal: false,
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

		setToggleRequestAuth: (state, action) => {
			const { toggle } = action.payload;

			state.requestAuth = toggle;
		},

		setToggleAuthModal: (state, action) => {
			const { toggle } = action.payload;

			state.setToggleAuthModal = toggle;
		},

		setToggleStatusAuth: (state, action) => {
			const { status } = action.payload;

			state.statusAuth = status;
		},
	},
});

export const { setToggleLoadedAuth, setToggleRequestAuth, setToggleAuthModal, setToggleStatusAuth } = authSlice.actions;
const authReducer = authSlice.reducer;
export { authReducer };
