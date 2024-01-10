import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBarOfService from './NavigationBarOfService';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function UserOrdersOnService() {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    // Fetch user orders data from the backend when the component mounts
    axios.get('http://localhost:9191/user-orders')
      .then(response => setUserOrders(response.data))
      .catch(error => console.error('Error fetching user orders:', error));
  }, []);

  return (
    <>
      <NavigationBarOfService />
      <div className="container mt-4">
        <h1>User Orders</h1>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {userOrders.map((order, idx) => (
              <tr key={idx}>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
