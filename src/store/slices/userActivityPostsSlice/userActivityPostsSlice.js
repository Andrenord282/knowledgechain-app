import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	idUser: null,
	postRatings: {},
	viewedPosts: {},
	markedPosts: {},
};

const userActivityPostsSlice = createSlice({
	name: 'userActivityPosts',
	initialState,
	reducers: {
		setUserActivityPosts: (state, action) => {
			const { idUser, postRatings, viewedPosts, markedPosts } = action.payload;
			state.idUser = idUser;
			state.postRatings = postRatings;
			state.viewedPosts = viewedPosts;
			state.markedPosts = markedPosts;
		},

		resetUserActivityPosts: (state) => {
			state.idUser = null;
			state.postRatings = {};
			state.viewedPosts = {};
			state.markedPosts = {};
		},
		addMarkPost: (state, action) => {
			const { data } = action.payload;
			console.log(action.payload);
			state.markedPosts = { ...state.markedPosts, [data.ref]: data };
		},
		removeMarkPost: (state, action) => {
			const { indexPost } = action.payload;
			delete state.markedPosts[indexPost];
		},
	},
});

export const { setUserActivityPosts, resetUserActivityPosts, removeMarkPost, addMarkPost } =
	userActivityPostsSlice.actions;
export default userActivityPostsSlice.reducer;
