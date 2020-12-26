import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { push } = useHistory();
  const logout = (e) => {
    localStorage.removeItem("token");
    push("/login");
  };

  return (
    <div>
      <h1>Secret Family Recipes</h1>

      <Link to="/login">
        <p>Login</p>
      </Link>

      <Link to="/signup">
        <p>Sign Up</p>
      </Link>

      <Link to="/dashboard">
        <p>Your Recipes</p>{" "}
      </Link>
      <p onClick={logout}>Log Out</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.userData.id,
  };
};
export default connect(null, { mapStateToProps })(NavBar);
