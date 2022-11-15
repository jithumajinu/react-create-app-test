import React, { PropsWithChildren } from 'react';
import { UseAppMethods } from '../hook/UseApp';

export const AppContext = React.createContext<UseAppMethods | null>(null);

export const useAppContext = () => React.useContext(AppContext) as UseAppMethods;

export const AppProvider = ({ children, ...props }: PropsWithChildren<UseAppMethods>) => {
  return <AppContext.Provider value={{ ...props }}>{children}</AppContext.Provider>;
};
