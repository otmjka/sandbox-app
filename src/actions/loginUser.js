import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actionTypes/auth';
import config from '../config'

import {
  START_USER_DATA,
  RECEIVE_USER_DATA,
  FAIL_USER_DATA
} from '../actionTypes/user';

export const loginSuccess = idToken => ({
  type: LOGIN_SUCCESS,
  idToken
});

export const loginFail = errorStatus => ({
  type: LOGIN_FAIL,
  errorStatus
});

export const setUserData = userData => ({
  type: RECEIVE_USER_DATA,
  userData
});

const baseUrl = config.common.baseUrl;
// dispatch(receiveLogin(user));
const loginUser = (email, password) => async dispatch => {
  const response = await axios.request({
    url: `/sessions/create`,
    method: 'post',
    baseURL: `${baseUrl}`,
    headers: { 'Content-Type': 'application/json' },
    data: { email, password }
  });

  // 400: You must send email and password.
  // 401: Invalid email or password.
  if (response.status !== 201) {
    return dispatch(loginFail(response.status));
  }

  // status: 201
  const idToken = response.data['id_token'];
  dispatch(loginSuccess(idToken))

  if (typeof window === 'object') {
    const authData = JSON.stringify({idToken})
    window.localStorage.setItem('auth', authData)
  }

  const userInfo = await axios.request({
    url: '/api/protected/user-info',
    headers: { Authorization: `Bearer ${idToken}` },
    baseURL: `${baseUrl}`
  });

  if (userInfo.status === 200) {
    const userData = { ...userInfo.data['user_info_token'] };
    dispatch(setUserData(userData));
  }
};

export default loginUser;
