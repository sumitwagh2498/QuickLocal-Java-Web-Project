import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory, useNavigate } from 'react-router-dom';
import style from '../Style/adminLogin.css'; // Adjust the path if needed
import NavigationBar from './NavigationBar';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform authentication logic here (using email and password)
    // You can use axios or fetch to make a POST request to your backend

    try {
      // Replace the URL with the actual endpoint for admin login
      const response = await fetch('http://localhost:9191/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.status) {
        // Successful login
        console.log('Admin login successful');
        // Redirect to the admin dashboard or another page
        navigate('/admin-dashboard');
      } else {
        // Login failed
        console.error('Admin login failed:', result.statusMessage);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
        <NavigationBar style={{marginBottom: '300px'}}/>
    <div className="login-form custom-login-form" >
      <Form onSubmit={handleSubmit} >
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <p>
          <Link to="/AdminReg" className="text-muted" style={{ fontSize: '12px', color: 'blue' }}>
            Create your account.
          </Link>
        </p>
        <Button type="submit" className="btn btn-primary btn-block">
          Login
        </Button>
      </Form>
    </div>
</>

  );
}
