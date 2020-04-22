import { LOGIN_SUCCESS } from '../actionTypes/auth';

export const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});
// dispatch(receiveLogin(user));
const loginUser = (email, password) => async (dispatch) => Promise.resolve()

export default loginUser;
