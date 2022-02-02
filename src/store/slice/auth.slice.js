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
		logInUser: (state, action) => {
			return { ...state, ...action.payload };
		},
		signOutUser: (state) => {
			return { ...state, id: '', name: '', email: '' };
		},
		toggleLoading: (state, action) => {
			return { ...state, loading: action.payload };
		}
	}
});

// Actions
export const { logInUser, signOutUser, toggleLoading } =
	authSlice.actions;

export default authSlice.reducer;
