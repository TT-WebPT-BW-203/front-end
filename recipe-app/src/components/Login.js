import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  //uncomment this state when you get yout login endpoint
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  console.log("credentials: ", credentials);
  //eve.holt@reqres.in
  //cityslicka

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
      })
      .catch((err) => console.log(err.message));
    setCredentials({
      username: "",
      password: "",
    });
  };

  // to test fake api later: >> https://reqres.in/api/

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

export default Login;
