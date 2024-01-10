import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import NavigationBarOfService from './NavigationBarOfService';

const ServiceForm = ({ serviceData, onSaveChanges, onCloseModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        address: '',
        city: '',
        pinCode: '',
      });
    
      useEffect(() => {
        if (serviceData && Object.keys(serviceData).length > 0) {
          setFormData({ ...serviceData });
        }
      }, [serviceData]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const endpoint = serviceData && Object.keys(serviceData).length > 0
            ? `/services/update/${serviceData.id}`
            : '/services/add';
    
          const response = await axios.post(`http://localhost:9191${endpoint}`, formData);
    
          console.log('Service saved successfully:', response.data);
          onSaveChanges(); // Trigger the onSaveChanges function provided by the parent component
          onCloseModal();
        } catch (error) {
          console.error('Error saving service:', error);
        }
      };
      
  return (
    <>
      <NavigationBarOfService />
      <Container>
        <Row className="justify-content-md-center mt-5" style={{ marginBottom: '25px' }}>
          <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
              <Form.Group controlId="formName" style={{ marginBottom: '25px' }}>
                <Form.Label>Name of Provider</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required onChange={handleInputChange} value={formData.name} />
              </Form.Group>

              <Form.Group controlId="formPhone" style={{ marginBottom: '25px' }}>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" name="phone" placeholder="Enter your phone number" required onChange={handleInputChange} value={formData.phone} />
              </Form.Group>

              <Form.Group controlId="formEmail" style={{ marginBottom: '25px' }}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" required onChange={handleInputChange} value={formData.email} />
              </Form.Group>

              <Form.Group controlId="formService" style={{ marginBottom: '25px' }}>
                <Form.Label>Service</Form.Label>
                <Form.Control type="text" name="service" placeholder="Enter the service you provide" required onChange={handleInputChange} value={formData.service} />
              </Form.Group>

              <Form.Group controlId="formAddress" style={{ marginBottom: '25px' }}>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" placeholder="Enter your address" required onChange={handleInputChange} value={formData.address} />
              </Form.Group>

              <Form.Group controlId="formCity" style={{ marginBottom: '25px' }}>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" placeholder="Enter your city" required onChange={handleInputChange} value={formData.city} />
              </Form.Group>

              <Form.Group controlId="formPinCode" style={{ marginBottom: '25px' }}>
                <Form.Label>Pin Code</Form.Label>
                <Form.Control type="text" name="pinCode" placeholder="Enter your PIN code" required onChange={handleInputChange} value={formData.pinCode} />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceForm;
