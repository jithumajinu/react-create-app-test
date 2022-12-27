import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, RouteProps, Navigate, Outlet } from 'react-router-dom';
import loadable from '@loadable/component';
import DefaultLayout from './components/layout';
import DashboardPage from './pages/dashboard';
import Login from './pages/login';
import About from './pages/about';
import Error404Page from './pages/authentication/404';
import useAuth, { AuthProvider } from './context/AuthContext';

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncRouteProps = RouteProps & { importPath: () => Promise<any> };

// function AsyncRoute({ importPath, ...props }: AsyncRouteProps) {

//   return <Route {...props} element={loadable(importPath)} />;
// }

// const AsyncRoute = ({ importPath, ...props }: AsyncRouteProps) => {
//   return <Route {...props} element={loadable(importPath)} />;
// };

// function AuthenticatedRoute(props: AsyncRouteProps) {
//   const { user } = useAuth();

//   //if (!user) return <Redirect to="/login" />;

//   return <AsyncRoute {...props} />;
// }

const AuthenticatedRoute = (props: AsyncRouteProps) => {
  const { user } = useAuth();
  console.log('%c user:', 'color:yellow', user);
  console.log('%c props:', 'color:yellow', props);
  return <Route path="/test2" element={<About />} />;
  //return <Route {...props} element={loadable(importPath)} />;
};

// export default function Router(): JSX.Element {
//   return (
//     <Switch>
//       <AuthenticatedRoute exact path="/" importPath={() => import('root/pages/HomePage')} />
//       <AsyncRoute exact path="/login" importPath={() => import('root/pages/LoginPage')} />
//       <AsyncRoute exact path="/sign_up" importPath={() => import('root/pages/SignUpPage')} />
//     </Switch>
//   );
// }

const PrivateRoute = () => {
  console.log('%c PrivateRoute:', 'color:yellow');
  const auth = true; // determine if authorized, from context or however you're doing it
  const { user, loading } = useAuth();
  console.log('%cuser:', 'color:yellow', user, loading);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return !loading && user ? <Outlet /> : <Navigate to="/login" />;
};

const Router = () => {
  // const { user, loading } = useAuth();

  // console.log('%c:', 'color:yellow', user, loading);
  return (
    <BrowserRouter basename="">
      <Routes>
        {/* <Route path="/" element={<DefaultLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/home" element={<DashboardPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<DashboardPage />} />
        </Route> */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<DashboardPage />} />
        </Route>
        {/* <AuthenticatedRoute path="/test2" importPath={() => import('./pages/authentication/404')} /> */}
        <Route path="*" element={<Error404Page />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
