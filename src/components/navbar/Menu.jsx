import React from 'react';
import './Menu.css'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../LOGO.png';

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" >
                <Container>

                    <Navbar.Brand href="#home"><img src={logo} className='logo' alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Contact us</Nav.Link>
                        </Nav>
                        <Nav>
                        <NavDropdown title="User" id="collasible-nav-dropdown"> <NavDropdown.Item href="#action/3.2">user settings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">2-step-verfication</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/34">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default Menu;