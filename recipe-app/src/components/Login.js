import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    // to test fake api later: >> https://reqres.in/api/

    <Form>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="name"
          id="username"
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
          onChange={handleChange}
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};

export default Login;
