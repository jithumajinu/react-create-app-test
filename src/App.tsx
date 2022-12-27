import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import locales from './locales';
import logo from './logo.svg';
import 'react-data-grid/lib/styles.css';
import { useApp } from './hook/UseApp';
import { AppProvider } from './context/AppContext';
import useAuth, { AuthProvider } from './context/AuthContext';
import Router from './Router';

function App() {
  const useAppMethods = useApp();
  const { setAuthUser } = useAppMethods;

  useEffect(() => {
    setAuthUser({ name: 'jithu' });
  }, [setAuthUser]);

  return (
    <AppProvider {...useAppMethods}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
