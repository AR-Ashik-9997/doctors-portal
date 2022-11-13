import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Doctors Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>              
              <Nav.Link as={Link} to="appointment">Appointment</Nav.Link>              
              <Nav.Link as={Link} to="reviews">Reviews</Nav.Link>              
              <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>              
              <Link to="sign-in" className="ms-2"><Button variant="outline-dark" className="primary-color">Login</Button></Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
