import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadedPost: false,
	postListIsOver: false,
	postCursor: -1,
	quantitySkipPost: 0,
	limit: 10,
	posts: [],
};

const postListSlice = createSlice({
	name: 'postList',
	initialState,
	reducers: {
		setLoadedPost: (state, action) => {
			const { status } = action.payload;
			state.isLoadedPost = status;
		},
		pushPostList: (state, action) => {
			const { posts } = action.payload;
			state.posts = [...state.posts, ...posts];
		},
		resetPostList: (state) => {
			state.posts = [];
		},
		updateQuantitySkipPost: (state) => {
			state.quantitySkipPost = state.quantitySkipPost + state.limit;
		},

		resetQuantitySkipPost: (state) => {
			state.quantitySkipPost = 0;
		},

		setPostListIsOver: (state) => {
			// const { isOver } = action.payload;
			state.postListIsOver = !state.postListIsOver;
		},
	},
});

export const {
	setLoadedPost,
	pushPostList,
	resetPostList,
	updateQuantitySkipPost,
	resetQuantitySkipPost,
	setPostListIsOver,
} = postListSlice.actions;
export default postListSlice.reducer;
