import React, { useState } from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";

import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';

export default function LandingPage() {
    const [isLogin, setLogin] = useState(true);
    // If it's a login want to show login page, else the sign up page
    let form = isLogin ? <LoginPage /> : <SignUpPage />;

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Welcome to Vault</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link href="#link">Sign Up</Nav.Link> */}
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