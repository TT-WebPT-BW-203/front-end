import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NavBar = (props) => {
  const { push } = useHistory();
  const logout = (e) => {
    localStorage.removeItem("token");
    push("/login");
  };

  const hydrateRecipes = () => {
    axiosWithAuth()
      .get(`/api/recipes/user/${props.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    hydrateRecipes();
  }, [props.id]);
  return (
    <div>
      <h1>Secret Family Recipes</h1>

      <Link to="/login">
        <p>Login</p>
      </Link>

      <Link to="/signup">
        <p>Sign Up</p>
      </Link>

      {/* need to hide the signup link when the user is logged in */}

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
