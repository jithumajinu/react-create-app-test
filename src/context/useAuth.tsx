import React, { createContext, useState, useEffect, useContext } from 'react';
import axios, { AxiosResponse } from 'axios';
import getUser from '../apiServices/UserApi';
import { CLAIMS_ROLE } from '../model/consts';
interface User {
  name: string | null;
  email: string | null;
  claims: Record<string, any>;
}
interface AuthContextData {
  user: User | null;
  signed: boolean | null;
  loading: boolean;
  signIn(username: string, password: string): Promise<boolean>;
  canView(area: string): boolean;
  signOut(): Promise<void>;
}
interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  // const [user, setUser] = useState<User | null>(null);
  const [signed, setSigned] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let signed = AuthService.isValid();
    if (signed) {
      let name = AuthService.getFullName();
      let email = AuthService.getUserEmail();
      let claims: Record<string, any> = AuthService.getUserClaims();
      let user: User = { name, email, claims };
      console.log('user-info', JSON.stringify(user));
      setUser(user);
      setSigned(signed);
      setLoading(false);
    } else {
      tryLogin(); // TODO not sure it should be located here...
      setLoading(false);
    }
  }, []);
  // methods //
  function tryLogin() {
    console.info('try login (sso)');
    const ssoUrl = `https/sso`;
    if (ssoUrl) {
      axios
        .get(ssoUrl)
        .then(ssoLogin)
        .catch(error => console.warn(error));
    }
  }
  function ssoLogin(response: AxiosResponse) {
    const headers = response.data;
    const username = headers['x-nom-gcd-uid'];
    const password = headers['x-nom-ldap-token'];
    if (username && password) {
      signIn(username, password);
    }
  }

  //   async function signIn(username: string, password: string) {
  //     const isSignedIn = await AuthService.login({ username, password });
  //     if (isSignedIn) {
  //       let name = AuthService.getFullName();
  //       let email = AuthService.getUserEmail();
  //       let claims: Record<string, any> = AuthService.getUserClaims();
  //       let user: User = { name, email, claims };
  //       setUser(user);
  //       setSigned(true);
  //       return true;
  //     }
  //     return false;
  //   }

  async function signIn(username: string, password: string) {
    const result = await getUser(user);
    setUser(result);
    setSigned(true);
    return result;
  }

  //   async function doLogin(dispatch, user) {
  //     try {
  //       dispatch({ status: 'pending' });

  //       const result = await getUser(user);
  //       dispatch({
  //         status: 'resolved',
  //         user: result,
  //         error: null,
  //       });
  //     } catch (error) {
  //       dispatch({ status: 'rejected', error });
  //     }
  //   }

  async function signOut() {
    await AuthService.logout();
    setUser(null);
    setSigned(false);
  }
  const canView = (area: string) => {
    return AuthService.hasRole(CLAIMS_ROLE.VIEWERS, area);
  };
  return (
    <AuthContext.Provider value={{ signed, loading, user, signIn, signOut, canView }}>
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}
