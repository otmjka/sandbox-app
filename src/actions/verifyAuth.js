import { receiveLogin } from './loginUser';
import { VERIFY_SUCCESS, VERIFY_REQUEST } from '../actionTypes/auth';

const verifyRequest = () => ({
  type: VERIFY_REQUEST,
});

export const verifySuccess = () => ({
  type: VERIFY_SUCCESS,
});

const verifyAuth = () => Promise.resolve()

export default verifyAuth;
