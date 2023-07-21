import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postsStatus: 'init',
    cursor: 0,
    limit: 10,
    sort: { value: 'rating', order: -1 }, // -1 === desc || 1 === asc
    filter: {},
    posts: [],
};

const postListSlice = createSlice({
    name: 'postList',
    initialState,
    reducers: {
        setPostListStatus: (state, action) => {
            const { status } = action.payload;
            state.postsStatus = status;
        },

        initPosts: (state, action) => {
            const { posts } = action.payload;
            state.posts = [...posts];
        },

        updatePostList: (state, action) => {
            const { postList } = action.payload;
            state.posts = [...state.posts, ...postList];
        },

        setCursorPost: (state, action) => {
            const { option } = action.payload;

            if (option === 'reset') {
                state.cursor = 0;
            }
            if (option === 'upCursorPost') {
                state.cursor = state.cursor + state.limit;
            }
        },
    },
});

export const postListActions = postListSlice.actions;
export const postListReducer = postListSlice.reducer;
