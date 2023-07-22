import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postsStatus: 'init',
    cursor: 0,
    limit: 10,
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

            state.posts = [...posts];
        },

        updatepPostList: (state, action) => {
            const { postList } = action.payload;

            state.posts = [...state.posts, ...postList];
        },

        resetPostList: (state) => {
            state.posts = [];
        },

        setSortValue: (state, action) => {
            const { value, text, order } = action.payload;

            state.sort = { value, text, order };
        },

        setSortOrder: (state) => {
            if (state.sort.order === -1) {
                state.sort.order = 1;
            } else {
                state.sort.order = -1;
            }
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
