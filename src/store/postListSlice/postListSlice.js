import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postsStatus: 'init', // 'init, 'loaded', 'reloading', 'updating'
    cursor: 0,
    limit: 10,
    totalCount: null,
    sort: { value: 'ratingCounter', text: 'Рейтинг', order: -1 }, // -1 === desc || 1 === asc
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

            state.cursor += 10;
            state.posts = [...posts];
        },

        setPostTotal: (state, action) => {
            const { totalCount } = action.payload;

            state.totalCount = totalCount;
        },

        updatePosts: (state, action) => {
            const { posts } = action.payload;

            state.cursor += 10;
            state.posts = [...state.posts, ...posts];
        },

        resetPostList: (state) => {
            state.posts = [];
        },

        setSortValue: (state, action) => {
            const { value, text, order } = action.payload;

            state.cursor = 0;
            state.sort = { value, text, order };
        },

        setSortOrder: (state) => {
            if (state.sort.order === -1) {
                state.cursor = 0;
                state.sort.order = 1;
            } else {
                state.cursor = 0;
                state.sort.order = -1;
            }
        },
    },
});

export const postListActions = postListSlice.actions;
export const postListReducer = postListSlice.reducer;
