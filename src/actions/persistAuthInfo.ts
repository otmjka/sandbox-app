export default function persistAuthInfo({idToken}: {idToken: string}) {
  if (typeof window === 'object') {
    const authData = JSON.stringify({ idToken });
    window.localStorage.setItem('auth', authData);
  }
}
