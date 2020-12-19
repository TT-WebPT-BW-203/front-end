import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      NavBar
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/dashboard">
        <p>Your Recipes</p>
      </Link>
    </div>
  );
};

export default NavBar;
