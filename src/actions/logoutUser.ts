import { LOGOUT_SUCCESS } from '../actionTypes/auth';

export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
});

const logoutUser = () => async (dispatch) => {
  debugger
}

export default logoutUser;
