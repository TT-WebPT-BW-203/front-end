import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SignUp = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="fullName">Full Name</Label>
          <Input
            type="text"
            name="fName"
            id="fullName"
            placeholder="Full Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userName">Username</Label>
          <Input type="text" name="Name" id="userName" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input type="email" name="email" id="userEmail" placeholder="Email" />
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
    </div>
  );
};

export default SignUp;
