import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	author: null,
	postId: null,
	postName: null,
	schemePost: [
		{ id: 'title-id-defult', type: 'title', value: '' },
		{
			id: 'text-id-defult',
			type: 'text',
			value: '',
		},
	],
};

const newPostSlice = createSlice({
	name: 'newPost',
	initialState,
	reducers: {
		setAuthor: (state, action) => {
			const { author } = action.payload;
			state.author = author;
		},
		setPostId: (state, action) => {
			const { postId } = action.payload;
			state.postId = postId;
		},
		setPostName: (state, action) => {
			const { postName } = action.payload;
			state.postName = postName;
		},
		updateSchemeTitle: (state, action) => {
			const { title } = action.payload;
			state.schemePost[0].value = title;
		},

		updateSchemeText: (state, action) => {
			const { indexSchemItem, value } = action.payload;
			state.schemePost[indexSchemItem].value = value;
		},

		resetValueSchemeItem: (state, action) => {
			const { indexSchemItem } = action.payload;
			state.schemePost[indexSchemItem].value = '';
		},

		pushMiddleSchemeItem: (state, action) => {
			const { cursorInex, schemeItem } = action.payload;
			const startScheme = state.schemePost.slice(0, cursorInex + 1);
			const endScheme = state.schemePost.slice(cursorInex + 1);
			state.schemePost = [...startScheme, schemeItem, ...endScheme];
		},

		pushEndSchemeItem: (state, action) => {
			const { schemeItem } = action.payload;
			state.schemePost = [...state.schemePost, schemeItem];
		},

		removeAllScheme: (state) => {
			state.author = initialState.author;

			state.schemePost = initialState.schemePost;
		},

		removeSchemeItem: (state, action) => {
			const { idSchemeItem } = action.payload;
			state.schemePost = state.schemePost.filter((schemeItem) => {
				return schemeItem.id !== idSchemeItem;
			});
		},
	},
});

export const {
	setAuthor,
	setPostId,
	setPostName,
	updateSchemeTitle,
	updateSchemeText,
	resetValueSchemeItem,
	pushMiddleSchemeItem,
	pushEndSchemeItem,
	removeAllScheme,
	removeSchemeItem,
} = newPostSlice.actions;
export default newPostSlice.reducer;
