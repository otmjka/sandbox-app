const AUTH_FIELD = 'auth'
export default function persistAuthInfo({idToken}: {idToken?: string}) {
  if (!idToken) return localStorage.removeItem(AUTH_FIELD)
  if (typeof window === 'object') {
    const authData = JSON.stringify({ idToken });
    window.localStorage.setItem(AUTH_FIELD, authData);
  }
}
