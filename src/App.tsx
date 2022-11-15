import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import locales from './locales';
import logo from './logo.svg';
import DefaultLayout from './components/layout';
import DashboardPage from './pages/dashboard';
import About from './pages/about';
import Error404Page from './pages/authentication/404';
import { AuthProvider } from './context/useAuth';

import { useApp } from './hook/UseApp';
import { AppProvider } from './context/AppContext';

function App() {
  const useAppMethods = useApp();
  const { setAuthUser } = useAppMethods;

  useEffect(() => {
    setAuthUser({ name: 'jithu' });
  }, [setAuthUser]);

  return (
    <AppProvider {...useAppMethods}>
      <BrowserRouter basename="">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="/home" element={<DashboardPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<DashboardPage />} />
            </Route>
            <Route path="*" element={<Error404Page />} />
            <Route path="login" element={<Error404Page />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
