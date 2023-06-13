import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	topicListSelected: ['React', 'Angular', 'Vue'],
};

const postCreatorTopicsSlice = createSlice({
	name: 'postCreatorTopics',
	initialState,
	reducers: {
		addTopic: (state, action) => {
			const { topicName } = action.payload;

			if (!state.topicListSelected.includes(topicName)) {
				state.topicListSelected = [...state.topicListSelected, topicName];
			}
		},

		deleteTopic: (state, action) => {
			const { topicIndex } = action.payload;

			state.topicListSelected = state.topicListSelected.filter((_, index) => index !== topicIndex);
		},
	},
});

export const postCreatorTopicsActions = postCreatorTopicsSlice.actions;

export const postCreatorTopicsReducer = postCreatorTopicsSlice.reducer;
