import React from "react";
import { Route, } from "react-router-dom";

import Home from "../component/pages/AtHome";
import Login from "../component/pages/Login";

const AuthRoutes: React.FC = () => {
  return (
      <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      </>
  );
};

export default AuthRoutes;