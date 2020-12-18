import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  return (
    //navigation still needs to be done

    // Login Form with Username and Password and submit button.
    <Form>
      <FormGroup>
        <Label for="userName">Username</Label>
        <Input type="text" name="Name" id="userName" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <Label for="userPassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="userPassword"
          placeholder="Password"
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>

    //footer still needs to be done
  );
};

export default Login;
