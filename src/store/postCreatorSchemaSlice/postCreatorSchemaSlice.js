import { createSlice, nanoid } from '@reduxjs/toolkit';

const titleId = nanoid(5);
const textId = nanoid(5);

const initialState = {
	postSchema: [
		{ id: titleId, type: 'title', value: 'Заголовок Заголовок' },
		{ id: textId, type: 'text', value: 'Текст текст текст' },
		{ id: textId, type: 'text', value: 'Текст текст текст' },
		{ id: textId, type: 'text', value: 'Текст текст текст' },
	],
};

const postCreatorSchemaSlice = createSlice({
	name: 'postCreatorSchema',
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
				const startpostSchema = postSchema.slice(0, activationIndex + 1);
				const endpostSchema = postSchema.slice(activationIndex + 1);
				state.postSchema = [...startpostSchema, newSchemaItem, ...endpostSchema];
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

export const postCreatorSchemaActions = postCreatorSchemaSlice.actions;

export const postCreatorSchemaReducer = postCreatorSchemaSlice.reducer;
