import axios from 'axios';
import config from '../config'

import {
  START_USER_DATA,
  RECEIVE_USER_DATA,
  FAIL_USER_DATA
} from '../actionTypes/user';

const baseUrl = config.common.baseUrl;

export const setUserData = userData => ({
  type: RECEIVE_USER_DATA,
  userData
});

export const getUserProfile = () => async (dispatch, getState) => {
  const {auth: {idToken}} = getState()

  const userInfo = await axios.request({
    url: '/api/protected/user-info',
    headers: { Authorization: `Bearer ${idToken}` },
    baseURL: `${baseUrl}`
  });

  if (userInfo.status === 200) {
    const userData = { ...userInfo.data['user_info_token'] };
    dispatch(setUserData(userData));
  }
}
