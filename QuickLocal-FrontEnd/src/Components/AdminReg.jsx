import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import pic from '../Images/login.jpg';
import '../Style/Reg.css'; // Adjust the path if needed
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

function AdminReg() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic if needed
  };

  const handleRegistration = async () => {
    // Name validation: Check if the name contains only letters
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError('Name should not contain numeric or special characters.');
      return;
    }

    // Email validation: Check if the email has a valid format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format.');
      return;
    }

    // Phone validation: Check if the phone contains only numeric digits and is exactly 10 digits
    if (!/^\d+$/.test(phone) || phone.length !== 10) {
      setError('Phone should contain exactly 10 numeric digits.');
      return;
    }

    // Password validation: Check if the password is not empty
    if (!password) {
      setError('Password cannot be empty.');
      return;
    }

    try {
      // Prepare data for the new admin
      const newAdmin = {
        name: name,
        email: email,
        phone: phone,
        password: password,
      };

      // Make a POST request to the backend API using Axios
      const response = await axios.post(
        'http://localhost:9191/admin/register',
        newAdmin,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.status) {
        // Registration successful
        console.log('Admin registration successful');
        navigate('/admin-login');
      } else {
        // Registration failed
        setError('Admin registration failed. Please check your inputs.');
      }
    } catch (error) {
      // Handle other errors
      console.error('Error during registration:', error);
      setError('An error occurred during registration. Please try again later.');
    }
  };

  return (
    <div className="contact3 py-5">
      <NavigationBar/>
      <h1 className="font-weight-light mt-2 text-center">Admin Registration</h1>
      <Container style={{ marginRight: 20, marginTop: 25 }}>
        <Row>
          <Col lg={4}>
            <div className="card-shadow" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
              <img src={pic} className="img-fluid" alt="Registration" style={{ overflow: 'hidden' }} />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="contact-box ml-3">
              <Form className="mt-4" onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}
                <Row>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="mt-2">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Button
                      type="button"
                      onClick={handleRegistration}
                      className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2 mx-auto d-block"
                      style={{ boxShadow: '0 5px 20px rgba(0,0,0,0.2)', marginTop: '25px' }}
                    >
                      <span>SIGN UP</span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export { AdminReg };