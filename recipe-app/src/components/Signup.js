import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../store/actions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SignUp = (props) => {
  console.log("props in the signup: ", props);
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signup(user);
    setUser({
      username: "",
      password: "",
      email: "",
    });
    history.push("/dashboard");
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

export default connect(null, { signup })(SignUp);
