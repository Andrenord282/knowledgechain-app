import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	posts: [],
};

const postList = createSlice({
	name: 'postList',
	initialState,
	reducers: {
		pushPostList: (state, action) => {
			const { posts } = action.payload;
			state.posts = [...state.posts, ...posts];
		},
		resetPostList: (state) => {
			state.posts = [];
		},
	},
});

export const { pushPostList, resetPostList } = postList.actions;
export default postList.reducer;
