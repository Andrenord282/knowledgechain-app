import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	idUser: null,
	ratingPosts: {},
	viewedPosts: {},
	markedPosts: {},
};

const userActivityPostsSlice = createSlice({
	name: 'userActivityPosts',
	initialState,
	reducers: {
		setUserActivityPosts: (state, action) => {
			const { idUser, ratingPosts, viewedPosts, markedPosts } = action.payload;
			state.idUser = idUser;
			state.ratingPosts = ratingPosts;
			state.viewedPosts = viewedPosts;
			state.markedPosts = markedPosts;
		},

		resetUserActivityPosts: (state) => {
			state.idUser = null;
			state.ratingPosts = {};
			state.viewedPosts = {};
			state.markedPosts = {};
		},

		addMarkPost: (state, action) => {
			const { data } = action.payload;
			state.markedPosts = { ...state.markedPosts, [data.ref]: data };
		},

		removeMarkPost: (state, action) => {
			const { indexPost } = action.payload;
			delete state.markedPosts[indexPost];
		},

		addRatingPost: (state, action) => {
			const { ratingPost } = action.payload;
			state.ratingPosts = { ...state.ratingPosts, [ratingPost.ref]: ratingPost };
		},
		removeRatingPost: (state, action) => {
			const { indexPost } = action.payload;
			delete state.ratingPosts[indexPost];
		},
	},
});

export const {
	setUserActivityPosts,
	resetUserActivityPosts,
	removeMarkPost,
	addMarkPost,
	addRatingPost,
	removeRatingPost,
} = userActivityPostsSlice.actions;
export default userActivityPostsSlice.reducer;
