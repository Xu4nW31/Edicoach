import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Bell } from "react-bootstrap-icons";
import "../css/NavBar.css";

const ClientNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="/client/" className="navTitle">
          EDICOACH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end p-3"
        >
          <Nav className="me-auto">
            <Nav.Link href="/client/" className="navLink">
              Home
            </Nav.Link>
            <NavDropdown
              title="Appointments"
              id="collasible-nav-dropdown"
              className="navLink"
            >
              <NavDropdown.Item href="#">Find a Coach</NavDropdown.Item>
              <NavDropdown.Item href="#">My Bookings</NavDropdown.Item>
              <NavDropdown.Item href="#">Action Plan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="navLink">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#" className="navLink">
              FAQ
            </Nav.Link>
            <Nav.Link href="#" className="navIcon">
              <Bell size={"1.25em"} />
            </Nav.Link>
            <Nav.Link href="#" className="navLink">
              <img
                alt=""
                src="https://st.depositphotos.com/1144472/1532/i/450/depositphotos_15320783-stock-photo-portrait-of-young-woman-at.jpg"
                className="navImg"
              ></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ClientNavBar;
