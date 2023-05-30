import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {};

const editorPostSchemaSlice = createSlice({
	name: 'editorPostSchema',
	initialState,
	reducers: {
		initSchema: (state, action) => {
			const { postSchema } = action.payload;
			return { ...postSchema };
		},

		updateSchemaItem: (state, action) => {
			const { schemaItemId, data } = action.payload;
			state[schemaItemId].value = data;
		},

		addSchemaItem: (state, action) => {
			const { postSchemaObject } = action.payload;
			return { ...postSchemaObject };
		},

		deleteSchemaItem: (state, action) => {
			// const { deleteSchemaItemId } = action.payload;
			// state.postSchema = state.filter((postSchemaItem) => {
			// 	return postSchemaItem.id !== deleteSchemaItemId;
			// });
		},
	},
});

export const editorPostSchemaActions = editorPostSchemaSlice.actions;

export const editorPostSchemaReducer = editorPostSchemaSlice.reducer;
