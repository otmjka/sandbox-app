import { LOGOUT_SUCCESS } from '../actionTypes/auth';

export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
});

const logoutUser = () => async (dispatch) => Promise.resolve()

export default logoutUser;
