export const selectPostSchema = (state) => Object.values(state.editorPostSchema);
export const selectPostSchemaItem = (state, schemaItemId) => state.editorPostSchema[schemaItemId];
