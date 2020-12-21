import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { push } = useHistory();
  const logout = (e) => {
    localStorage.removeItem("token");
    push("/login");
  };
  return (
    <div>
      <Link to="/login">
        <p>Login</p>
      </Link>
      {/* need to hide the signup link when the user is logged in */}
      <Link to="/signup">
        <p>Sign Up</p>
      </Link>
      <Link to="/dashboard">
        <p>Your Recipes</p>
      </Link>
      <p onClick={logout}>Log Out</p>
    </div>
  );
};

export default NavBar;
