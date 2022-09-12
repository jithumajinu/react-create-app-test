// <reference path="path/types.d.ts" />
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FaSun from "./assests/images/FaSun.png";
import Home from "./component/pages/AtHome";
import EventPage from "./component/pages/AtEventPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/event" exact>
          <EventPage />
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <h3>react-typescript boilerplate!</h3>
    //   <h5>testing lint stage!!</h5>

    //   <img src={FaSun} alt="FaSun" />
    // </div>
  );
};

export default App;
