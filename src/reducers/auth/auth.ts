import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from '../../actionTypes/auth';

export type AuthState = {
  loading: boolean,
  isAuthenticated: boolean,
  idToken?: string,
}

export default (
  state: AuthState = {
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
        loading: false,
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
        loading: false,
        isAuthenticated: false,
        idToken: undefined,
        user: {}
      };
    default:
      return state;
  }
};
