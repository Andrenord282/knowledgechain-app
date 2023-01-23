import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: 'Дате',
	order: -1,
	value: 'createdAt',
};

const sortPostListSlice = createSlice({
	name: 'sortPostList',
	initialState,
	reducers: {
		setSortName: (state, action) => {
			const { sortName, sortValue } = action.payload;
			state.name = sortName;
			state.value = sortValue;
		},

		setSortOrder: (state, action) => {
			const { sortOrder } = action.payload;
			state.order = sortOrder;
		},
	},
});

export const { setSortName, setSortOrder } = sortPostListSlice.actions;

export default sortPostListSlice.reducer;
