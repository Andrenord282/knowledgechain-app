import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	userId: null,
	author: null,
	postId: null,
	postName: null,
};

const editPostParamsSlice = createSlice({
	name: 'editPostParams',
	initialState,
	reducers: {
		initPostParams: (state, action) => {
			const { userId, userName } = action.payload;
			const postId = nanoid(5);

			state.userId = userId;
			state.author = userName;
			state.postId = postId;
			state.postName = `${userName}-${postId}`;
		},
	},
});

export const editPostParamsActions = editPostParamsSlice.actions;

export const editPostParamsReducer = editPostParamsSlice.reducer;
