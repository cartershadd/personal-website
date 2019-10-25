import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="*" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Personal Website of Carter Shadden</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer exact to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to='/about'>
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/projects">
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to='/artgallery'>
                                <Nav.Link>Art Gallery</Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to='/contact'>
                                <Nav.Link>Contact Me</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;