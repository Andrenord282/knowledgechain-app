import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	authors: [],
	rating: null,
	dates: [],
	themes: [],
};

const filterPostListSlice = createSlice({
	name: 'filterPostList',
	initialState,
	reducers: {
		addFilterAuthor: (state, action) => {
			const { author } = action.payload;
			state.authors = [...state.authors, author];
		},

		deleteFilterAuthor: (state, action) => {
			const { authorIndex } = action.payload;
			state.authors = state.authors.filter((_, index) => {
				return index !== authorIndex;
			});
		},

		addFilterThemes: (state, action) => {
			const { theme } = action.payload;
			state.themes = [...state.themes, theme];
		},

		deleteFilterThemes: (state, action) => {
			const { themeIndex } = action.payload;
			state.themes = state.themes.filter((_, index) => {
				return index !== themeIndex;
			});
		},

		setFilterRating: (state, action) => {
			const { rating } = action.payload;
			state.rating = rating;
		},

		addFilterDates: (state, action) => {
			const { dates } = action.payload;
			state.dates = dates;
		},

		addCustomFilterDates: (state, action) => {
			const { startDate, endDate } = action.payload;
			console.log(startDate, endDate);
			state.dates = [startDate, endDate];
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
} = filterPostListSlice.actions;
export default filterPostListSlice.reducer;
