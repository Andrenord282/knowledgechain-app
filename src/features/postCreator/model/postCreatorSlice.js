import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	author: null,
	userId: null,
	postId: null,
	postName: null,
	schemaPost: [
		{ id: 'title-id-defult', type: 'title', value: '' },
		{
			id: 'text-id-defult',
			type: 'text',
			value: '',
		},
	],
	themesPost: [],
};

const postCreatorSlice = createSlice({
	name: 'postCreator',
	initialState,
	reducers: {
		setParamsPost: (state, action) => {
			const { userName, userId, postId, postName } = action.payload;
			state.author = userName;
			state.userId = userId;
			state.postId = postId;
			state.postName = postName;
		},

		updateSchemaText: (state, action) => {
			const { schemItemIndex, value } = action.payload;
			state.schemaPost[schemItemIndex].value = value;
		},

		pushMiddleSchemaItem: (state, action) => {
			const { cursorInex, schemaItem } = action.payload;
			const startSchema = state.schemaPost.slice(0, cursorInex + 1);
			const endSchema = state.schemaPost.slice(cursorInex + 1);
			state.schemaPost = [...startSchema, schemaItem, ...endSchema];
		},

		pushEndSchemaItem: (state, action) => {
			const { schemaItem } = action.payload;
			state.schemaPost = [...state.schemaPost, schemaItem];
		},

		removeAllSchema: (state) => {
			state.author = initialState.author;
			state.schemaPost = initialState.schemaPost;
		},

		removeSchemaItem: (state, action) => {
			const { idSchemaItem } = action.payload;
			state.schemaPost = state.schemaPost.filter((schemaItem) => {
				return schemaItem.id !== idSchemaItem;
			});
		},

		pushThemePost: (state, action) => {
			const { theme } = action.payload;
			state.themesPost = [...state.themesPost, theme];
		},

		deleteThemePost: (state, action) => {
			const { themeIndex } = action.payload;
			state.themesPost = state.themesPost.filter((_, index) => {
				return index !== themeIndex;
			});
		},
	},
});

export const {
	setAuthor,
	setParamsPost,
	updateSchemaText,
	pushMiddleSchemaItem,
	pushEndSchemaItem,
	removeAllSchema,
	removeSchemaItem,
	pushThemePost,
	deleteThemePost,
} = postCreatorSlice.actions;

export default postCreatorSlice.reducer;
