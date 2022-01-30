import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser: (state, action) => {
			return action.payload;
		}
	}
});

// Actions
export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
