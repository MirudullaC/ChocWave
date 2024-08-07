import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../Css/Navbar.css";

function NavbarComponent() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg" className="mb-4 px-3">
        <Navbar.Brand href="/">Adezon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavbarComponent;
