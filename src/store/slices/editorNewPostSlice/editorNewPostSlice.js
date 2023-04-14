import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	idUser: null,
	author: null,
	postId: null,
	postName: null,
	postSchema: [
		{ id: 'title-id-defult', type: 'title', value: '' },
		{
			id: 'text-id-defult',
			type: 'text',
			value: '',
		},
	],
	postThemes: [],
};

const editorNewPostSlice = createSlice({
	name: 'editorNewPost',
	initialState,
	reducers: {
		setParams: (state, action) => {
			const { idUser, userName, postId, postName } = action.payload;

			state.author = userName;
			state.idUser = idUser;
			state.postId = postId;
			state.postName = postName;
		},

		updateSchemaTitle: (state, action) => {
			const { value } = action.payload;

			state.postSchema[0].value = value;
		},

		updateSchemaText: (state, action) => {
			const { index, value } = action.payload;

			state.postSchema[index].value = value;
		},

		addSchemaItem: (state, action) => {
			const { activationIndex, schemaLength, newSchemaItem } = action.payload;

			if (activationIndex === schemaLength - 1) {
				state.postSchema = [...state.postSchema, newSchemaItem];
				return;
			}

			const startPostSchema = state.postSchema.slice(0, activationIndex + 1);
			const endPostSchema = state.postSchema.slice(activationIndex + 1);
			state.postSchema = [...startPostSchema, newSchemaItem, ...endPostSchema];
		},

		deleteSchemaItem: (state, action) => {
			const { deleteSchemaItemId } = action.payload;

			state.postSchema = state.postSchema.filter((postSchemaItem) => {
				return postSchemaItem.id !== deleteSchemaItemId;
			});
		},

		// updatepostSchemaText: (state, action) => {
		// 	const { schemItemIndex, value } = action.payload;
		// 	state.postSchema[schemItemIndex].value = value;
		// },

		pushMiddlepostSchemaItem: (state, action) => {
			const { cursorInex, postSchemaItem } = action.payload;
			const startpostSchema = state.postSchema.slice(0, cursorInex + 1);
			const endpostSchema = state.postSchema.slice(cursorInex + 1);
			state.postSchema = [...startpostSchema, postSchemaItem, ...endpostSchema];
		},

		pushEndpostSchemaItem: (state, action) => {
			const { postSchemaItem } = action.payload;
			state.postSchema = [...state.postSchema, postSchemaItem];
		},

		removeAllpostSchema: (state) => {
			state.author = initialState.author;
			state.postSchema = initialState.postSchema;
		},

		removepostSchemaItem: (state, action) => {
			const { idpostSchemaItem } = action.payload;
			state.postSchema = state.postSchema.filter((postSchemaItem) => {
				return postSchemaItem.id !== idpostSchemaItem;
			});
		},

		pushThemePost: (state, action) => {
			const { theme } = action.payload;
			state.postThemes = [...state.postThemes, theme];
		},

		deleteThemePost: (state, action) => {
			const { themeIndex } = action.payload;
			state.postThemes = state.postThemes.filter((_, index) => {
				return index !== themeIndex;
			});
		},
	},
});

export const {
	setParams,
	updateSchemaTitle,
	updateSchemaText,
	addSchemaItem,
	deleteSchemaItem,

	updatepostSchemaText,
	pushMiddlepostSchemaItem,
	pushEndpostSchemaItem,
	removeAllpostSchema,
	removepostSchemaItem,
	pushThemePost,
	deleteThemePost,
} = editorNewPostSlice.actions;

const editorNewPostReducer = editorNewPostSlice.reducer;
export { editorNewPostReducer };
