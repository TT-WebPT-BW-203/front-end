import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getUserRecipes } from "../store/actions";
import { logUser } from "../store/actions/index";
import { Button, FormGroup, Label, Input } from "reactstrap";
import Loader from "react-loader-spinner";

const Login = (props) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const goToDashboard = () => {
    history.push("/dashboard");
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    props.logUser(credentials);
    props.getUserRecipes(props.userId);
    setCredentials({
      username: "",
      password: "",
    });

    goToDashboard();
  };

  return (
    <div>
      {props.isLoading === true ? (
        <Loader
          type="ThreeDots"
          color="#000"
          height={100}
          width={100}
          timeout={10000}
        />
      ) : (
        <form onSubmit={login}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              value={credentials.username}
              placeholder="Username"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
          </FormGroup>

          <Button>Submit</Button>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    userId: state.userId,
  };
};
export default connect(mapStateToProps, { logUser, getUserRecipes })(Login);
