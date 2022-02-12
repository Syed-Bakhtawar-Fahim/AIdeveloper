import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import '../App.css';
import '../index.css'
import './AppNavbar.css'

function AppNavbar() {

    let activeClassName = "bold"

    return (
        <React.Fragment>

            <Navbar expand="lg" className="main-navbar">
                <Container>
                    <Link to="/" className="navbar-brand" >AI Developer</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="m-auto nav-font">

                            <Link exact={true} to='/' className="NavUl" >Home</Link>
                            <Link exact={true} to='about' className="NavUl">About</Link>
                            <Link exact={true} to='services' className="NavUl">Services</Link>
                            <Link exact={true} to='contact' className="NavUl">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default AppNavbar;