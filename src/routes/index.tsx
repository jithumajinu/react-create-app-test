import React from "react";
import { Route } from "react-router-dom";

import { useAuth } from "../component/contexts/auth";


import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";




const MainRoutes: React.FC = () => {
  const { signed } = useAuth();

  return (
    
      signed ? <AppRoutes /> : <AuthRoutes />
     
  );
};

export default MainRoutes;