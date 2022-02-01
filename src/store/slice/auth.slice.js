import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: true,
	id: '',
	name: ''
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		saveUser: (state, action) => {
			return { ...state, ...action.payload };
		},
		toggleLoading: (state, action) => {
			return { ...state, loading: action.payload };
		}
	}
});

// Actions
export const { saveUser, toggleLoading } = authSlice.actions;

export default authSlice.reducer;
