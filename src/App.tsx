// <reference path="path/types.d.ts" />
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import FaSun from "./assests/images/FaSun.png";
import Home from "./component/pages/AtHome";
import Login from "./component/pages/Login";
import Dashboard from "./component/pages/Dashboard";
import "./App.css";
import { DefaultLayout } from "./component/DefaultLayout";
//import { AuthProvider } from "./component/contexts/AuthContext";
import {AuthProvider} from "./component/contexts/auth";
// import MainRoutes from "./routes";
import { useAuth } from "./component/contexts/auth";
interface AppProps {
  element: HTMLElement | null;
}


function AppRoute() {

  console.log('%c: AppRoute', 'color:yellow' )
  return (
<Route path="/" element={<Home />} />
  );

};

function AuthRoute() {
  console.log('%c: AuthRoute', 'color:yellow' )
  return (
<Route path="/login" element={<Login />}/>
  );

};

function App({ element }: AppProps) {

  const { signed } = useAuth();
  return (
    <BrowserRouter>
    <AuthProvider>
    <DefaultLayout>
      <Routes>
        {/* <MainRoutes/> */}
      {/* {signed ? AppRoute() :  AuthRoute()} */}

       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>  
    
      </DefaultLayout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
