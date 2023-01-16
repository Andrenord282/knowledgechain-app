import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoadedPost: false,
	postCursor: -1,
	limit: 10,
	sort: {
		name: 'Дате',
		order: -1,
		value: 'createdAt',
	},
	filters: { authors: [], rating: null, dates: [] },
};

const optionsPostListSlice = createSlice({
	name: 'optionsPostList',
	initialState,
	reducers: {
		setLoadedPost: (state, action) => {
			const { status } = action.payload;
			state.isLoadedPost = status;
		},

		setSortName: (state, action) => {
			const { sortName, sortValue } = action.payload;
			state.sort.name = sortName;
			state.sort.value = sortValue;
		},

		setSortOrder: (state, action) => {
			const { sortOrder } = action.payload;
			state.sort.order = sortOrder;
		},

		addFilterAuthor: (state, action) => {
			const { author } = action.payload;
			state.filters.authors = [...state.filters.authors, author];
		},

		deleteFilterAuthor: (state, action) => {
			const { authorIndex } = action.payload;
			state.filters.authors = state.filters.authors.filter((index) => {
				return index !== +authorIndex;
			});
		},

		setFilterRating: (state, action) => {
			const { rating } = action.payload;
			state.filters.rating = rating;
		},

		addFilterDates: (state, action) => {
			const { dates } = action.payload;
			state.filters.dates = dates;
		},
	},
});

const optionsSelector = (state) => state.optionsPostList;
const sortSelector = (state) => state.optionsPostList.sort;
const authorsSelector = (state) => state.optionsPostList.filters.authors;
const datesSelector = (state) => state.optionsPostList.filters.dates;

export const {
	setLoadedPost,
	setSortName,
	setSortOrder,
	addFilterAuthor,
	deleteFilterAuthor,
	setFilterRating,
	addFilterDates,
} = optionsPostListSlice.actions;
export { optionsSelector, sortSelector, authorsSelector, datesSelector };
export default optionsPostListSlice.reducer;
