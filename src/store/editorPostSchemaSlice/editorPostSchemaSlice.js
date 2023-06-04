import { createSlice, nanoid } from '@reduxjs/toolkit';

const titleId = nanoid(5);
const textId = nanoid(5);

const initialState = {
	postSchema: [
		{ id: titleId, type: 'title', value: '' },
		{ id: textId, type: 'text', value: '' },
	],
};

const editorPostSchemaSlice = createSlice({
	name: 'editorPostSchema',
	initialState,
	reducers: {
		updateSchemaItem: (state, action) => {
			const { schemaItemIndex, data } = action.payload;

			state.postSchema[schemaItemIndex].value = data;
		},

		addSchemaItem: (state, action) => {
			const { activationIndex, data, type, idItem } = action.payload;

			const сreateSchemaItem = (data, type, idItem) => {
				return {
					id: idItem ? idItem : nanoid(5),
					type: type,
					value: data,
				};
			};
			const newSchemaItem = сreateSchemaItem(data, type, idItem);
			const postSchema = JSON.parse(JSON.stringify(state.postSchema));

			if (activationIndex === postSchema.length - 1) {
				state.postSchema = [...postSchema, newSchemaItem];
			} else {
				const startPostSchema = postSchema.slice(0, activationIndex + 1);
				const endPostSchema = postSchema.slice(activationIndex + 1);
				state.postSchema = [...startPostSchema, newSchemaItem, ...endPostSchema];
			}
		},

		deleteSchemaItem: (state, action) => {
			const { schemaItemIndex } = action.payload;
			const postSchema = JSON.parse(JSON.stringify(state.postSchema));
			postSchema.splice(schemaItemIndex, 1);

			state.postSchema = [...postSchema];
		},
	},
});

export const editorPostSchemaActions = editorPostSchemaSlice.actions;

export const editorPostSchemaReducer = editorPostSchemaSlice.reducer;
