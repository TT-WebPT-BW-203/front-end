import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { StyledNavBar, H1, NavBarLinks, NavLinks } from "../styles";

const NavBar = (props) => {
  console.log("props in the navbar", props);
  const { push } = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    push("/login");
  };

  return (
    <StyledNavBar>
      <H1>Secret Family Recipes</H1>

      <NavLinks>
        <Link to="/login">
          <NavBarLinks>Login</NavBarLinks>
        </Link>

        <Link to="/signup">
          <NavBarLinks>Sign Up</NavBarLinks>
        </Link>

        <Link to="/dashboard">
          <NavBarLinks>Your Recipes</NavBarLinks>{" "}
        </Link>
        <NavBarLinks onClick={logout}>Log Out</NavBarLinks>
      </NavLinks>
    </StyledNavBar>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.userId,
    username: state.username,
    loggedIn: state.loggedIn,
  };
};
export default connect(mapStateToProps, {})(NavBar);
