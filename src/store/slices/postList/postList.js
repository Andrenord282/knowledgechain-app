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
			state.posts = [...posts];
		},
		resetPostList: (state) => {
			state.posts = [];
		},
	},
});

const postListSelector = (state) => state.postList.posts;

export const { pushPostList, resetPostList } = postList.actions;
export { postListSelector };
export default postList.reducer;
