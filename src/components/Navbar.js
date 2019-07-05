import React from 'react';
import { NavDropdown,Nav,Form,Button,Navbar } from "react-bootstrap";


const Navbars = () => {
  return(
    <Navbar bg="primary" expand="lg"   text="white" style={{ width: '100%' }} >
    <Navbar.Brand href="#home"  className="text-white">Fika Safe</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto ">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <NavDropdown title="Login" id="basic-nav-dropdown">
          <NavDropdown.Item href="#sacco">Sacco</NavDropdown.Item>
          <NavDropdown.Item href="#admin">Admin</NavDropdown.Item>
          <NavDropdown.Divider />   
        </NavDropdown>
      </Nav>
      <Form inline>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success" className="text-white">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
   )
  }
 
export default Navbars




