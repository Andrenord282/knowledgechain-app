import postCreatorReducer from './postCreatorSlice';

export { postCreatorReducer };
export {
	setParamsPost,
	pushMiddleSchemaItem,
	pushEndSchemaItem,
	updateSchemaText,
	removeSchemaItem,
	pushThemePost,
	deleteThemePost,
	removeAllSchema,
} from './postCreatorSlice';
export { selectPostCreator, selectSchemaPost } from './selectors';
