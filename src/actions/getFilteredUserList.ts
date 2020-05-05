import axios from 'axios';
import config from '../config';
import t from 'typy';

import {
  START_FETCH_FILTERED_USER_LIST,
  RECEIVE_FILTERED_USER_LIST,
  FAIL_FETCH_FILTERED_USER_LIST

} from '../actionTypes/users';

import logoutUser from './logoutUser';

// import { UserProfile } from '../types/user';

const baseUrl = config.common.baseUrl;

function startFetchFilteredList() {
  return {
    type: START_FETCH_FILTERED_USER_LIST,
  }
}

function receiveFilteredUserList(users) {
  return {
    type: RECEIVE_FILTERED_USER_LIST,
    payload: users
  }
}

function failFetchFilteredUserList() {
  return {
    type: FAIL_FETCH_FILTERED_USER_LIST,
  }
}

export const getFilteredUserList = (filter) => async (dispatch, getState) => {
  const {
    auth: { idToken }
  } = getState();
  try {

    if (!filter) {
      return Promise.resolve(dispatch(receiveFilteredUserList([])))
    }

    dispatch(startFetchFilteredList())
    const response = await axios.request({
      url: '/api/protected/users/list',
      method: 'POST',
      data: {filter},
      headers: { Authorization: `Bearer ${idToken}` },
      baseURL: `${baseUrl}`
    });
    if (response.status === 200) {
      return dispatch(receiveFilteredUserList(response.data));
    }
    dispatch(failFetchFilteredUserList())
  } catch (err) {
    if (t(err, 'response.status').isDefined) {
      // TODO: handle 401: unauthorized
      // dispatch(logoutUser());
      console.log(t(err, 'response'))
    }
  }
};
