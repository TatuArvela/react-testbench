import { Auth, Identity } from './types';
import useLocalStorage from './useLocalStorage';

const AUTH_SERVICE = 'http://localhost:3001/authenticate';

const useAuth = (): Auth => {
  const [identity, setIdentity] = useLocalStorage('identity', null);

  const logOut = () => {
    setIdentity(null);
  };

  const authenticate = async (
    username: string,
    password: string
  ): Promise<Identity | null> => {
    return fetch(AUTH_SERVICE, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        const { name, token, error, permissions } = data;
        if (error || !name || !token) {
          return null;
        }
        const identity: Identity = {
          name,
          token,
          permissions: permissions ?? [],
        };
        return identity;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  };

  const logIn = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const identity = await authenticate(username, password);
    if (identity) {
      setIdentity(identity);
      return true;
    }
    return false;
  };

  return {
    identity,
    logIn,
    logOut,
  };
};

export default useAuth;
