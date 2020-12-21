import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../store/actions/index";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = (props) => {
  console.log("props in login: ", props);
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  console.log("credentials: ", credentials);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    props.getUser(credentials);

    setCredentials({
      username: "",
      password: "",
    });
    history.push("/dashboard");
  };

  return (
    <Form onSubmit={login}>
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
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.username,
    password: state.userReducer.password,
    loggedIn: state.userReducer.loggedIn,
  };
};
export default connect(mapStateToProps, { getUser })(Login);
