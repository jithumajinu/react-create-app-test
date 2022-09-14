/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext, useContext, useEffect, useState, FC,
} from 'react';
// import Cookies from 'js-cookie';
// import { ApolloError } from '@apollo/client';
// import {
//   useGetUserLazyQuery, GetUserQuery, User, UserType,
// } from '../generated/graphql';
// import {
//   getAccountDomain,
//   getChangeEmailUrl,
//   getIdLoginUrl,
//   getIdLogoutUrl,
//   getIdSignupUrl,
//   getIdTokenCookieName,
// } from '../util/envUtil';

type AuthContextType = {
  currentUser: any;
  signin: (path?: string, openInNewTab?: boolean) => void;
  logout: () => void;
  setAuth: (auth: any) => void;
};

const AuthContext = createContext<AuthContextType>({
  currentUser:              { userType: "guest" },
  signin:                   (path?: string, openInNewTab?: boolean) => {},
  logout:                   () => {},
  setAuth:                  (auth: any) => {}

});

export const useAuth = () => useContext(AuthContext);

export interface AuthProvideProps {
  children: React.ReactNode;
  element: HTMLElement | null;
}

export const AuthProvider: FC<AuthProvideProps> = (props) => {

  const [currentUser, setCurrentUser] = useState<any>({ userType: 'guest' });
  const [loading, setLoading] = useState<Boolean>(true);
  

 //  setCurrentUser(response.user);

 



  const signin = (path: string = '', openInNewTab = false) => {

    console.log('%c signIn:', 'color:yellow' );

  };



  const logout = () => {

    console.log('%c logout:', 'color:yellow' );

  };

  const setAuth = (auth: any) => {

   // setCurrentUser(auth);
   setCurrentUser({ userType: 'event-guest' });
    console.log('%c signIn:', 'color:yellow' );
  
  };

 

  useEffect(() => {

   // setCurrentUser({ userType: 'jithu' });
    setLoading(false);

  }, []);

  const value: AuthContextType = {
    currentUser,
    signin,
    logout,
    setAuth,
  };

  return <AuthContext.Provider value={value}>{!loading && props.children}</AuthContext.Provider>;

};
