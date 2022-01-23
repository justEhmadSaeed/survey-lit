import { USER_LOGGED, USER_SIGNOUT } from './action-types.constant';

export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGGED:
			return action.payload;

		case USER_SIGNOUT:
			return {};
		default:
			return state;
	}
};
