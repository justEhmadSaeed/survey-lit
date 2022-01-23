import { combineReducers } from 'redux';
import { userReducer } from 'store/auth/reducers.auth';

const rootReducer = combineReducers({
	user: userReducer
});
export default rootReducer;
