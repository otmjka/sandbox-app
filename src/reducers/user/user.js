import {
  START_USER_DATA,
  RECEIVE_USER_DATA,
  FAIL_USER_DATA
} from '../../actionTypes/user';

export default (
  state = {
    loaded: false,
    loading: false,
    userData: undefined,
    errorStatus: undefined,
  },
  action,
) => {
  switch (action.type) {
    case START_USER_DATA:
      return {
        ...state,
        loaded: false,
        loading: true,
        errorStatus: undefined,
      };
    case RECEIVE_USER_DATA:
      return {
        ...state,
        loaded: true,
        loading: false,
        userData: action.userData,
        errorStatus: undefined,
      };
    case FAIL_USER_DATA:
      return {
        ...state,
        loaded: false,
        loading: false,
        errorStatus: action.errorStatus
      };
    default:
      return state;
  }
};
