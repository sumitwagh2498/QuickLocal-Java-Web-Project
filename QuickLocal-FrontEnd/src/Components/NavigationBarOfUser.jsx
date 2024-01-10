import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Form, FormControl, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export function NavigationBarOfUser() {
  const navigate = useNavigate();
  const [serviceSearchTerm, setServiceSearchTerm] = useState('');
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleLogoutClick = () => {
    navigate("/");
  };

  const handleServiceSearch = (event) => {
    event.preventDefault();
    console.log('Searching for service:', serviceSearchTerm);
    axios.get(`http://localhost:9191/services/search?service=${serviceSearchTerm}`)
      .then(response => {
        console.log('Search results:', response.data);
        setSearchResults(response.data);
      })
      .catch(error => console.error('Error searching for service:', error));
  };

  const handleCitySearch = (event) => {
    event.preventDefault();
    console.log('Searching for city:', citySearchTerm);
    axios.get(`http://localhost:9191/services/search?city=${citySearchTerm}`)
      .then(response => {
        console.log('Search results:', response.data);
        setSearchResults(response.data);
      })
      .catch(error => console.error('Error searching for city:', error));
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
            <LinkContainer to="/user-dashboard">
              <Nav.Link className="tabs">Services</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <Row className="align-items-center">
              <Col xs={8} md={4}>
                <FormControl
                  type="text"
                  placeholder="Search Services"
                  value={serviceSearchTerm}
                  onChange={(e) => setServiceSearchTerm(e.target.value)}
                />
              </Col>
              <Col xs={4} md={2}>
                <Button variant="outline-success" type="submit" onClick={handleServiceSearch}>Search</Button>
              </Col>
              <Col xs={8} md={4}>
                <FormControl
                  type="text"
                  placeholder="Search City"
                  value={citySearchTerm}
                  onChange={(e) => setCitySearchTerm(e.target.value)}
                />
              </Col>
              <Col xs={4} md={2}>
                <Button variant="outline-success" type="submit" onClick={handleCitySearch}>Search</Button>
              </Col>
            </Row>
          </Form>
          <Button variant="outline-danger" onClick={handleLogoutClick} style={{ marginLeft: '5px' }}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
