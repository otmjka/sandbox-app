import { LOGOUT_SUCCESS } from '../actionTypes/auth';
import persistAuthInfo from './persistAuthInfo'
export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
});

const logoutUser = () => (dispatch) => {
  debugger
  persistAuthInfo({})
  dispatch(receiveLogout())
}

export default logoutUser;
