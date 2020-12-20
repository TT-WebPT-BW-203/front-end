import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
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
    axiosWithAuth()
      .post("api/users/login", credentials)
      .then((res) => {
        console.log("success: ", res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/dashboard");
      })
      .catch((err) => console.log(err.message));
    setCredentials({
      username: "",
      password: "",
    });
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
    username: state.username,
    password: state.password,
    loggedIn: state.loggedIn,
  };
};
export default connect(mapStateToProps, {})(Login);
