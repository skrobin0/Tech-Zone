import React from "react";
import "animate.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/Logo.png";
import "./Header.css";
import useAuth from "../../Hook/useAuth";

const Header = () => {
  const { users, logOut } = useAuth();
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
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              
              {users.email && (
                <p className="text-white pt-2">
                  {" "}
                  <i className="far fa-user me-2"></i>
                  {users.displayName} {}{" "}
                </p>
              )}

              {users.email ? (
                <Button style={{marginBottom:'4px'}} className="ms-2 btn btn-success" onClick={logOut}>
                  {" "}
                  Logout{" "}
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
