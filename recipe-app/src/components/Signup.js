import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={user.username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={user.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={user.password}
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default SignUp;
