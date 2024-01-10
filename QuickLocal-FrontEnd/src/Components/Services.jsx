import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { NavigationBarOfUser } from './NavigationBarOfUser';

export function Services() {
  const [services, setServices] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch all services data from the backend when the component mounts
    axios.get('http://localhost:9191/services/all')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const renderCards = () => {
    const dataToRender = searchResults.length > 0 ? searchResults : services;

    return dataToRender.map((service, idx) => (
      <Col key={idx} className="mb-3">
        <Card style={{ width: '16rem', height: 'auto', boxShadow: '0 8px 18px rgba(0,0,0,0.3)', margin: '10px' }} className="mx-auto my-4 card">
          {/* Assuming these fields exist in your ServicesModel */}
          <Card.Body>
            <Card.Title>{service.service}</Card.Title>
            <Card.Text>
              <strong>Name:</strong> {service.name}<br />
              <strong>Phone:</strong> {service.phone}<br />
              <strong>Address:</strong> {service.address}<br />
              <strong>City:</strong> {service.city}<br />
            </Card.Text>
            <Button variant="primary mx-auto" style={{width: '100%'}}>Add</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <>
      <NavigationBarOfUser />
      <Row xs={1} md={3} className="g-4 mx-auto mt-4">
        {renderCards()}
      </Row>
    </>
  );
}
