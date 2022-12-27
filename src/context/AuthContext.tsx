import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
//import type { Response } from 'axios';
import axios, { AxiosResponse as Response } from 'axios';
// import { useNavigate } from 'react-router-dom';
import { ApiService } from '../apiServices';
import AuthStorage from '../apiServices/auth/service/AuthStorage';

interface User {
  name: string | null;
  email: string | null;
}

const restApi: ApiService = ApiService.getInstance();

export interface AuthContextType {
  user: User;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: Response<any>;
  //login(email: string, password: string): Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<User>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<Response<any> | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  // const navigate = useNavigate();

  // const location = useLocation();

  //   useEffect(() => {
  //     if (error) setError(null);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [location.pathname]);

  useEffect(() => {
    if (AuthStorage.getTocken()) {
      setUser({
        name: 'test',
        email: 'test2@gmail.com',
      });
    }
    setLoadingInitial(false);
  }, []);

  async function login(email: string, password: string) {
    const { data, errorLevel, errorMessage, loaded } = await restApi.loginService.login(
      email,
      password
    );

    if (data) {
      console.log('%c response:', 'color:yellow', data);
      AuthStorage.POST(data);

      console.log('%cgetJwtUser:', 'color:yellow', AuthStorage.getTocken());
      if (AuthStorage.getTocken()) {
        setUser({
          name: 'test',
          email: 'test2@gmail.com',
        });
      }
    }

    // testData
    //   .then((response: any) => {
    //     console.log('%c response:', 'color:yellow', response);
    //     if (response.data) {
    //       console.log('%c:newUser', 'color:yellow');
    //       setUser({
    //         name: 'test',
    //         email: 'test2@gmail.com',
    //       });
    //     }
    //     if (response.error) {
    //     }

    //     // setUser({
    //     //   name: 'test',
    //     //   email: 'test2@gmail.com',
    //     // });
    //     // // navigate('/admin');
    //     // console.log('%cnavi:', 'color:yellow');
    //   })
    //   .catch((newError: any) => setError(newError))
    //   .finally(() => {
    //     setLoading(false);
    //   });

    return true;
  }

  function signUp(email: string, name: string, password: string) {
    // setLoading(true);
    // usersApi
    //   .signUp({ email, name, password })
    //   .then((newUser: any) => {
    //     setUser(newUser);
    //     //  history.push("/");
    //   })
    //   .catch((newError: any) => setError(newError))
    //   .finally(() => setLoading(false));
  }

  function logout() {
    //sessionsApi.logout().then(() => setUser(undefined));
  }

  // Make the provider update only when it should
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signUp,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue as AuthContextType}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
