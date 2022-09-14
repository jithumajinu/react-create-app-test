import React from "react";
import { Route, RouteProps } from "react-router-dom";

import Home from "../component/pages/AtHome";
import Login from "../component/pages/Login";
import Dashboard from "../component/pages/Dashboard"

const AppRoutes: React.FC<RouteProps> = () => {
  return (
    <>
      <Route path="/dashboard" element={<Dashboard />} />

      {/* <Route path="*" navigator="/dashboard" /> */}
    </>
  );
};

export default AppRoutes;