import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from '../../actionTypes/auth';

export default (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: true,
    loginError: false,
    logoutError: false,
    isAuthenticated: false,
    user: {},
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
      };
    case VERIFY_SUCCESS:
      return { ...state, isVerifying: false };
    default:
      return state;
  }
};
