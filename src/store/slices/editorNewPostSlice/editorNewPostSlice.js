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
	postTopics: [],
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
	setParams,
	updateSchemaTitle,
	updateSchemaText,
	addSchemaItem,
	deleteSchemaItem,
	pushPostTopic,
	deletePostTopic,
} = editorNewPostSlice.actions;

const editorNewPostReducer = editorNewPostSlice.reducer;
export { editorNewPostReducer };
