import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'store/slice/auth.slice';
import loadingReducer from 'store/slice/loading.slice';
import formsReducer from 'store/slice/forms.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		loading: loadingReducer,
		forms: formsReducer
	}
});

export default store;
