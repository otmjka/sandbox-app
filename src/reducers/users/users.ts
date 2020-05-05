import {
  START_FETCH_FILTERED_USER_LIST,
  RECEIVE_FILTERED_USER_LIST,
  FAIL_FETCH_FILTERED_USER_LIST
} from '../../actionTypes/users';

import {UserProfile, UserRecord} from '../../types/user';

export default (
  state: UsersState = {
    loading: false,
    users: undefined,
    errorStatus: undefined,
  },
  action,
) => {
  switch (action.type) {
    case START_FETCH_FILTERED_USER_LIST:
      return {
        ...state,
        loading: true,
        errorStatus: undefined,
      };
    case RECEIVE_FILTERED_USER_LIST:
      return {
        ...state,
        loading: false,
        users: action.payload,
        errorStatus: undefined,
      };
    case FAIL_FETCH_FILTERED_USER_LIST:
      return {
        ...state,
        loading: false,
        users: undefined,
        errorStatus: action.errorStatus
      };
    default:
      return state;
  }
};

export type UsersState = {
  loading: boolean,
  users?: UserRecord,
  errorStatus?: number,
}
