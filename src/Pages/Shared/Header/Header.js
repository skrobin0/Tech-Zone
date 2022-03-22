import React from "react";
import "animate.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="animate__animated animate__zoomIn" style={{ height: "230px" }} src={logo} alt="" />

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" className="nav-link">Home</Link>
              <Link to="/shop" className="nav-link">Shop-Order</Link>
              <Link to="/review-manage" className="nav-link">Review-Manage</Link>
              <Link to="/inventory" className="nav-link">Inventory</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
