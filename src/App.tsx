import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import locales from './locales';
import logo from './logo.svg';
import DefaultLayout from './components/layout';
import DashboardPage from './pages/dashboard';
import About from './pages/about';
import Error404Page from './pages/authentication/404';

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/home" element={<DashboardPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
