import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  RESET_PASSWORD_SUCCESS,
} from '../../actionTypes/auth';

export default (
  state = {
    loading: false,
    isAuthenticated: false,
    idToken: undefined
  },
  action
) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        idToken: undefined
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: true,
        isAuthenticated: true,
        idToken: action.idToken
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        idToken: undefined
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
};
