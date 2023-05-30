export const selectPostParams = (state) => state.editorPost;
export const selectDirty = (state) => state.editorPost.dirty;
export const selectPostSchema = (state) => state.editorPost.postSchema;
export const selectPostSchemaItemValue = (state, index) => state.editorPost.postSchema[index].value;
export const selectPostTopics = (state) => state.editorPost.postTopics;
