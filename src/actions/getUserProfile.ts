import axios from 'axios';
import config from '../config';
import t from 'typy';

import {
  START_USER_DATA,
  RECEIVE_USER_DATA,
  FAIL_USER_DATA
} from '../actionTypes/user';
import logoutUser from './logoutUser';

import { UserProfile } from '../types/user';

const baseUrl = config.common.baseUrl;

export const startFetchUserProfile = () => ({
  type: START_USER_DATA,
})

export const failFetchUserProfile = () => ({
  type: FAIL_USER_DATA,
})

export const setUserData = userData => ({
  type: RECEIVE_USER_DATA,
  userData
});

export const getUserProfile = () => async (dispatch, getState) => {
  const {
    auth: { idToken, isAuthenticated }
  } = getState();
  try {
    if (!isAuthenticated) return 
    dispatch(startFetchUserProfile())
    const userInfo = await axios.request({
      url: '/api/protected/user-info',
      headers: { Authorization: `Bearer ${idToken}` },
      baseURL: `${baseUrl}`
    });

    if (userInfo.status === 200) {
      const userData: UserProfile = { ...userInfo.data['user_info_token'] };
      dispatch(setUserData(userData));
    }
  } catch (err) {
    if (t(err, 'response.status').isDefined) {
      dispatch(failFetchUserProfile())
      dispatch(logoutUser());
    }
  }
};
