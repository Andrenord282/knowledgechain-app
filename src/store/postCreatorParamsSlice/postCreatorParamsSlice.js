import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	userId: null,
	authorName: null,
	postId: null,
	postName: null,
};

const postCreatorParamsSlice = createSlice({
	name: 'postCreatorParams',
	initialState,
	reducers: {
		initPostParams: (state, action) => {
			const { userId, userName } = action.payload;
			const postId = nanoid(5);

			state.userId = userId;
			state.authorName = userName;
			state.postId = `${userId}-${postId}`;
			state.postName = postId;
		},
	},
});

export const postCreatorParamsActions = postCreatorParamsSlice.actions;

export const postCreatorParamsReducer = postCreatorParamsSlice.reducer;
