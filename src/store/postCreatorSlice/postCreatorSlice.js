import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    params: {
        authorId: null,
        authorName: null,
        postId: null,
        postName: null,
    },
    schema: [], // { id: null, type: 'title', value: '' }, { id: null, type: 'text', value: '' },
    topics: [],
};

const postCreatorSlice = createSlice({
    name: 'postCreator',
    initialState,
    reducers: {
        initParams: (state, action) => {
            const { userId, userName } = action.payload;
            const postId = nanoid(5);
            const titleId = nanoid(5);
            const textId = nanoid(5);

            state.params.authorId = userId;
            state.params.authorName = userName;
            state.params.postId = postId;
            state.params.postName = `${userId}-${postId}`;
            state.schema[0] = { id: titleId, type: 'title', value: '' };
            state.schema[1] = { id: textId, type: 'text', value: '' };
        },

        updateSchemaItem: (state, action) => {
            const { schemaItemIndex, data } = action.payload;

            state.schema[schemaItemIndex].value = data;
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
            const postSchema = JSON.parse(JSON.stringify(state.schema));

            if (activationIndex === postSchema.length - 1) {
                state.schema = [...postSchema, newSchemaItem];
            } else {
                const startpostSchema = postSchema.slice(0, activationIndex + 1);
                const endpostSchema = postSchema.slice(activationIndex + 1);
                state.schema = [...startpostSchema, newSchemaItem, ...endpostSchema];
            }
        },

        deleteSchemaItem: (state, action) => {
            const { schemaItemIndex } = action.payload;
            const postSchema = JSON.parse(JSON.stringify(state.schema));
            postSchema.splice(schemaItemIndex, 1);

            state.schema = [...postSchema];
        },
    },
});

export const postCreatorActions = postCreatorSlice.actions;

export const postCreatorReducer = postCreatorSlice.reducer;
