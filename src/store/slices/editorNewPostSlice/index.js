//-----slice-----//
export { editorNewPostReducer } from './editorNewPostSlice';

//-----selectors-----//
export { selectEditorNewPost, selectPostSchema, selectPostTopics } from './selectors';

//-----actions-----//
export {
	setParams,
	updateSchemaTitle,
	updateSchemaText,
	addSchemaItem,
	deleteSchemaItem,
	pushPostTopic,
	deletePostTopic,
} from './editorNewPostSlice';
