import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	author: [],
	ratingCounter: null,
	dates: [],
	themesPost: [],
};

const filterPostListSlice = createSlice({
	name: 'filterPostList',
	initialState,
	reducers: {
		addFilterAuthor: (state, action) => {
			const { author } = action.payload;
			state.author = [...state.author, author];
		},

		deleteFilterAuthor: (state, action) => {
			const { authorIndex } = action.payload;
			state.author = state.author.filter((_, index) => {
				return index !== authorIndex;
			});
		},

		addFilterThemes: (state, action) => {
			const { theme } = action.payload;
			state.themesPost = [...state.themesPost, theme];
		},

		deleteFilterThemes: (state, action) => {
			const { themeIndex } = action.payload;
			state.themesPost = state.themesPost.filter((_, index) => {
				return index !== themeIndex;
			});
		},

		setFilterRating: (state, action) => {
			const { rating } = action.payload;
			state.ratingCounter = rating;
		},

		addFilterDates: (state, action) => {
			const { dates } = action.payload;
			state.dates = dates;
		},

		addCustomFilterDates: (state, action) => {
			const { startDate, endDate } = action.payload;
			state.dates = [startDate, endDate];
		},
		resertAllFilters: (state) => {
			state.author = [];
			state.ratingCounter = null;
			state.dates = [];
			state.themesPost = [];
		},
	},
});

export const {
	addFilterAuthor,
	deleteFilterAuthor,
	addFilterThemes,
	deleteFilterThemes,
	setFilterRating,
	addFilterDates,
	addCustomFilterDates,
	resertAllFilters,
} = filterPostListSlice.actions;
export default filterPostListSlice.reducer;
