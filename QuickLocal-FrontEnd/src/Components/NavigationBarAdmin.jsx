import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { AdminReg } from "./AdminReg";
import { UserReg } from "./UserReg";
// Import styles only if necessary
import styles from "../Style/NavigationBar.css";

export function NavigationBarAdmin() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Replace 'logout' with the actual logout function
    // logout();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav-navbar">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>
            <h4 className="logo"><span className="q">Q</span>QuickLocal</h4>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-text">
            <LinkContainer to="/admin-dashboard">
              {/* Use Link instead of Nav.Link for navigation */}
              <Nav.Link className="tabs">Pending</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service-approved">
              {/* Use Link instead of Nav.Link for navigation */}
              <Nav.Link className="tabs">Approved</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/primemum">
              {/* Use Link instead of Nav.Link for navigation */}
              <Nav.Link className="tabs">Premium</Nav.Link>
            </LinkContainer>
            <Button variant="outline-danger" onClick={handleLogoutClick} style={{marginLeft: '550px'}}>
            Logout
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
