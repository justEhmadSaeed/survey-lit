import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	forms: []
};

export const formsSlice = createSlice({
	name: 'forms',
	initialState,
	reducers: {
		addForms: (state, action) => {
			state.forms = action.payload;
		}
	}
});

// Actions
export const { addForms } = formsSlice.actions;

export default formsSlice.reducer;
