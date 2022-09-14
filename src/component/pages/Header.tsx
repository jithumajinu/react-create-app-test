import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import "./styles.css";

const Header: React.FC = () => {
  let navigate = useNavigate();
  const { signed, signOut } = useAuth();

  console.log('%c:signed ', 'color:yellow',signed )

  function handleSignOut() {
    signOut();
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {signed ? (
        <>
          <Link key={1} to="/dashboard"> home </Link> 
          <Link key={2} onClick={handleSignOut} to="/login">    logout </Link>
        </>
      ) : (
        <>
        <Link key={3} to="/login">    Login </Link>
        </>
      )}
    </nav>
  );
};

export default Header;