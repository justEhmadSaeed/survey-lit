import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const formsSlice = createSlice({
	name: 'forms',
	initialState,
	reducers: {
		addForms: (state, action) => {
			return action.payload;
		}
	}
});

// Actions
export const { addForms } = formsSlice.actions;

export default formsSlice.reducer;
