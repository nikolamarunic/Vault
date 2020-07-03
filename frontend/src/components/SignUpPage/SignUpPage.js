import React, { useState } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import "./SignUpPage.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0 && password === confirmPassword && username.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
          {/* Username */}
        <FormGroup controlId="username" bsSize="large">
          <Form.Label>Username</Form.Label>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>

        {/* Email */}
        <FormGroup controlId="email" bsSize="large">
          <Form.Label>Email</Form.Label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>

        {/* Password */}
        <FormGroup controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>

        {/* Confirm Password */}
        <FormGroup controlId="confirmPass" bsSize="large">
          <Form.Label>Confirm Password</Form.Label>
          <FormControl
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
          />
        </FormGroup>

        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}