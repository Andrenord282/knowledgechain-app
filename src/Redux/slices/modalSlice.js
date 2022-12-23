import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	visible: false,
	lock: false,
	body: false,
	type: null,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleVisible: (state) => {
			state.visible = !state.visible;
		},
		toggleLock: (state) => {
			state.lock = !state.lock;
		},
		toggleBodyFixed: (state) => {
			state.body = !state.body;
		},
		setType: (state, action) => {
			state.type = action.payload;
		},
	},
});

export const { toggleVisible, toggleLock, toggleBodyFixed, setType } =
	modalSlice.actions;
export default modalSlice.reducer;
