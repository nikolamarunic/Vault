import React, { useState } from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';


export default function LandingPage(props) {
    const [isLogin, setLogin] = useState(true);
    // If it's a login want to show login page, else the sign up page
    let form = isLogin ? <LoginPage setToken = {props.setToken}/> : <SignUpPage setToken = {props.setToken}/>;

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home" style={{color: "white"}}>Welcome to Vault</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={e => setLogin(true)}>Login</Button>
                            <Button variant="secondary" onClick={e => setLogin(false)}>Sign Up</Button>
                        </ButtonGroup>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {form}
        </div>
    );
}