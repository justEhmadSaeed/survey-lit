import { createSlice } from '@reduxjs/toolkit';
import { toggleLocalTheme } from 'utils/theme-handler';

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
			return { ...state, ...action.payload };
		},
		signOutUser: (state) => {
			return { ...state, id: '', name: '', email: '' };
		},
		toggleLoading: (state, action) => {
			return { ...state, loading: action.payload };
		},
		toggleDarkMode: (state, action) => {
			if (action.payload)
				document.documentElement.classList.add('dark');
			else document.documentElement.classList.remove('dark');

			toggleLocalTheme(action.payload);
			return { ...state, darkMode: action.payload };
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
