import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	postListLoaded: false,
	cursorPost: 0,
	postLimit: 10,
	sortPost: { value: 'rating', order: -1 },
	filterPost: {},
	postList: [],
};

const postListSlice = createSlice({
	name: 'postList',
	initialState,
	reducers: {
		togglePostListLoaded: (state, action) => {
			const { toggle } = action.payload;
			state.postListLoaded = toggle;
		},

		updatePostList: (state, action) => {
			const { postList } = action.payload;
			state.postList = [...state.postList, ...postList];
		},

		setCursorPost: (state, action) => {
			const { option } = action.payload;

			if (option === 'reset') {
				state.cursorPost = 0;
			}
			if (option === 'upCursorPost') {
				state.cursorPost = state.cursorPost + state.postLimit;
			}
		},
	},
});

export const { togglePostListLoaded, updatePostList, setCursorPost } = postListSlice.actions;
const postListReducer = postListSlice.reducer;
export { postListReducer };
