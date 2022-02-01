import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'store/slice/auth.slice';
import formsReducer from 'store/slice/forms.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		forms: formsReducer
	}
});

export default store;
