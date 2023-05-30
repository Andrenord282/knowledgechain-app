import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	dirty: false,
	idUser: null,
	author: null,
	postId: null,
	postName: null,
};

const editPostParamsSlice = createSlice({
	name: 'editPostParams',
	initialState,
	reducers: {
		initParams: (state, action) => {
			const { idUser, userName, postId, postName, postSchema } = action.payload;

			state.idUser = idUser;
			state.author = userName;
			state.postId = postId;
			state.postName = postName;
			state.postSchema = postSchema;
		},

		setToggleDirty: (state, action) => {
			const { toggle } = action.payload;

			state.dirty = toggle;
		},
	},
});

export const { initParams, setToggleDirty } = editPostParamsSlice.actions;

const editPostParamsReducer = editPostParamsSlice.reducer;
export { editPostParamsReducer };
