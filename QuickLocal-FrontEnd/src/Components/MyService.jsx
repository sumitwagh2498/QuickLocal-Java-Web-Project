import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import ServiceForm from './ServiceForm';
import NavigationBarOfService from './NavigationBarOfService';

const MyService = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Fetch all services from the server when the component mounts
    axios.get('http://localhost:9191/services/all')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleEdit = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    // Make a DELETE request to the server to delete the service with the given id
    axios.delete(`http://localhost:9191/services/delete/${id}`)
      .then(response => {
        if (response.status === 204) {
          // Service deleted successfully, update the local state
          setServices(prevServices => prevServices.filter(service => service.id !== id));
        }
      })
      .catch(error => console.error('Error deleting service:', error));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Refresh services after closing the modal in case there were updates
    axios.get('http://localhost:9191/services/all')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  };

  const handleSaveChanges = (updatedService) => {
    axios.put(`http://localhost:9191/services/update/${updatedService.id}`, updatedService)
      .then(response => {
        // Handle success if needed
        console.log('Service updated successfully:', response.data);
        // Refresh services after the update
        axios.get('http://localhost:9191/services/all')
          .then(response => setServices(response.data))
          .catch(error => console.error('Error fetching services:', error));
        // Close the modal
        handleCloseModal();
      })
      .catch(error => {
        // Handle error if needed
        console.error('Error updating service:', error);
      });
  };

  return (
    <>
      <NavigationBarOfService />
      <div className="container mt-5">
        <h2>Services List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Service</th>
              <th>Address</th>
              <th>City</th>
              <th>Pin Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.name}</td>
                <td>{service.phone}</td>
                <td>{service.email}</td>
                <td>{service.service}</td>
                <td>{service.address}</td>
                <td>{service.city}</td>
                <td>{service.pinCode}</td>
                <td >
                  <Button variant="warning" size="sm" className="mr-2" onClick={() => handleEdit(service)} style={{marginLeft: '10px'}}>
                    Update
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(service.id)} style={{marginTop: '8px', marginLeft: '10px'}}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Edit Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Pass selectedService to ServiceForm */}
            <ServiceForm serviceData={selectedService} onSaveChanges={handleSaveChanges} onCloseModal={handleCloseModal} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default MyService;
