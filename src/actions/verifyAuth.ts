import { loginSuccess } from './loginUser';

const verifyAuth = () => dispatch => {
  if (typeof window === 'object') {
    const authStr: any = window.localStorage.getItem('auth');
    if (!authStr) return
    const authData: PersistAuth = JSON.parse(authStr);
    if (authData && !authData.idToken) return;
    dispatch(loginSuccess(authData.idToken));
  }
};

type LocalStorageItem = string | null

type PersistAuth = {
  idToken: string
}
export default verifyAuth;
