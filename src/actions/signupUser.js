import axios from 'axios';
import { loginSuccess, loginFail } from './loginUser';
import persistAuthInfo from './persistAuthInfo';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actionTypes/auth';
import config from '../config';

const baseUrl = config.common.baseUrl;

const signupUser = ({ username, email, password }) => async dispatch => {
  let response;
  try {
    response = await axios.request({
      url: `/users`,
      method: 'POST',
      baseURL: `${baseUrl}`,
      headers: { 'Content-Type': 'application/json' },
      data: { username, email, password }
    });
    if (response.status !== 201) throw new Error({ response });

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
export default signupUser;
