import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dirty: false,
	idUser: null,
	author: null,
	postId: null,
	postName: null,
	postSchema: [
		// { id: 'title-id-defult', type: 'title', value: '' }
	],
	postTopics: [],
};

const editorPostSlice = createSlice({
	name: 'editorPost',
	initialState,
	reducers: {
		setToggleDirty: (state, action) => {
			const { toggle } = action.payload;
			debugger;
			state.dirty = toggle;
		},

		setPostParams: (state, action) => {
			const { idUser, userName, postId, postName, postSchema } = action.payload;

			state.idUser = idUser;
			state.author = userName;
			state.postId = postId;
			state.postName = postName;
			state.postSchema = postSchema;
		},

		updateSchemaItem: (state, action) => {
			const { index, data } = action.payload;

			state.postSchema[index].value = data;
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

		pushPostTopic: (state, action) => {
			const { newTopic } = action.payload;

			state.postTopics = [...state.postTopics, newTopic];
		},

		deletePostTopic: (state, action) => {
			const { deleteTopic } = action.payload;

			state.postTopics = state.postTopics.filter((topic) => {
				return topic !== deleteTopic;
			});
		},
	},
});

export const {
	setToggleDirty,
	setPostParams,
	updateSchemaItem,
	updateSchemaText,
	addSchemaItem,
	deleteSchemaItem,
	pushPostTopic,
	deletePostTopic,
} = editorPostSlice.actions;

const editorPostReducer = editorPostSlice.reducer;
export { editorPostReducer };
