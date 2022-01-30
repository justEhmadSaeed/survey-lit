import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'store/slice/auth.slice';
import loadingReducer from 'store/slice/loading.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		loading: loadingReducer
	}
});

export default store;
