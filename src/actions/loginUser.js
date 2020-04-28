import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actionTypes/auth';
import persistAuthInfo from './persistAuthInfo';
import config from '../config';

const baseUrl = config.common.baseUrl;

export const loginSuccess = idToken => ({
  type: LOGIN_SUCCESS,
  idToken
});

export const loginFail = errorStatus => {
  persistAuthInfo({});
  return {
    type: LOGIN_FAIL,
    errorStatus
  };
};

const loginUser = (email, password) => async dispatch => {
  let response;
  try {
    response = await axios.request({
      url: `/sessions/create`,
      method: 'post',
      baseURL: `${baseUrl}`,
      headers: { 'Content-Type': 'application/json' },
      data: { email, password }
    });

    if (response.status !== 201) throw new Error({response})

    // status: 201
    const idToken = response.data['id_token'];
    dispatch(loginSuccess(idToken));

    persistAuthInfo({ idToken });
    return;
  } catch (err) {
    // 400: You must send email and password.
    // 401: Invalid email or password.
    dispatch(loginFail(err.response.status));
    return { message: err.response.data };
  }
};

export default loginUser;
