import { loginSuccess } from './loginUser';

const verifyAuth = () => dispatch => {
  if (typeof window === 'object') {
    const authStr = window.localStorage.getItem('auth');
    const authData = JSON.parse(authStr);
    if (!authData.idToken) return;
    dispatch(loginSuccess(authData.idToken));
  }
};

export default verifyAuth;
