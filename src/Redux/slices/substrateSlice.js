import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	active: false,
	body: false,
};

const substrateSlice = createSlice({
	name: 'substrate',
	initialState,
	reducers: {
		toggleActive: (state, action) => {
			state.active = action.payload;
		},
		toggleBodyFixed: (state) => {
			state.body = !state.body;
		},
	},
});

export const { toggleActive, toggleBodyFixed } = substrateSlice.actions;
export default substrateSlice.reducer;
