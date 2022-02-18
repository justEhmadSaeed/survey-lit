import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: true,
	darkMode: false,
	id: '',
	name: ''
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logInUser: (state, action) => {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.email = action.payload.email;
		},
		signOutUser: (state) => {
			state.id = '';
			state.name = '';
			state.email = '';
		},
		toggleLoading: (state, action) => {
			state.loading = action.payload;
		},
		toggleDarkMode: (state, action) => {
			state.darkMode = action.payload;
		}
	}
});

// Actions
export const {
	logInUser,
	signOutUser,
	toggleLoading,
	toggleDarkMode
} = authSlice.actions;

export default authSlice.reducer;
