import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		toggleLoading: (state, action) => {
			return action.payload;
		}
	}
});

// Actions
export const { toggleLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
