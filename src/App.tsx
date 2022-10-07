import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/pages/AtHome';
import Login from './component/pages/Login';
import Error404Page from './pages/authentication/404';
import { DefaultLayout } from './layouts/DefaultLayout';
import DashboardPage from './pages/dashboard';
import './App.css';
//import "./styles/index.less"
//import 'rsuite/dist/rsuite.min.css';

import { AuthProvider } from './contexts/auth';
interface AppProps {
  element: HTMLElement | null;
}

//export const DefaultLayout: FC<DefaultLayoutProps> = props => {

//const App <AppProps>= () => {
function App({ element }: AppProps) {
  return (
    //<BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter basename="">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
