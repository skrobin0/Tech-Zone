import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img style={{ height: "230px" }} src={logo} alt="" />

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing" >Shop-Order</Nav.Link>
              <Nav.Link href="#pricing">Review-Manage</Nav.Link>
              <Nav.Link href="#pricing">Inventory</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
