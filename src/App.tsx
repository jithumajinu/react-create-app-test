// <reference path="path/types.d.ts" />
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import FaSun from "./assests/images/FaSun.png";
import Home from "./component/pages/AtHome";
import EventPage from "./component/pages/AtEventPage";
import "./App.css";
import { DefaultLayout } from "./component/DefaultLayout";

const App = () => {
  return (
    <BrowserRouter>
    <DefaultLayout>
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
