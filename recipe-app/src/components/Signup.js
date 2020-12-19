import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SignUp = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  console.log("user body: ", user);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //post request
    axiosWithAuth()
      .post("https://family-recipes21.herokuapp.com/api/users/register", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
    setUser({
      username: "",
      password: "",
      email: "",
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            // type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            // type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </FormGroup>

        <Button>Sign Up!</Button>
      </Form>
    </div>
  );
};

export default SignUp;
