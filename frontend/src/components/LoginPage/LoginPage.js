import React, { useState } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import "./LoginPage.css";
import api from '../../util/api';

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let res = await api.handleLogin({ username: username, password: password });
    // console.log(res);
    props.setToken(res);
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <Form.Label>Username</Form.Label>
          <FormControl
            autoFocus
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} onClick={handleSubmit} >
          Login
        </Button>
      </form>
    </div>
  );
}