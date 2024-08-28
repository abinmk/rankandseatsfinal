import React, { useState, useEffect } from 'react';
import { Table, Spinner, Button, Badge, Modal, FormControl, InputGroup } from 'react-bootstrap';
import { FaSync, FaSave, FaEdit } from 'react-icons/fa';
import axiosInstance from '../utils/axiosInstance';

const apiUrl = import.meta.env.VITE_API_URL;

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`${apiUrl}/users/getUserDetails`);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e, index, field) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = e.target.value;
    setUsers(updatedUsers);
  };

  const togglePaymentStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].paymentStatus = updatedUsers[index].paymentStatus === 'Paid' ? 'unPaid' : 'Paid';
    setUsers(updatedUsers);
  };

  const handleUpdateAll = async () => {
    try {
      const response = await axiosInstance.put(`${apiUrl}/users/bulk-update`, {
        users,
      });
      if (response.data.success) {
        alert('All users updated successfully');
        fetchUsers(); // Refresh data after update
        setShowModal(false);
      } else {
        alert('Failed to update users');
      }
    } catch (error) {
      console.error('Error updating users:', error);
    }
  };

  const handleRefresh = () => {
    fetchUsers();
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User List</h2>
        <div>
          <Button variant="primary" className="me-2" onClick={handleRefresh}>
            <FaSync className="me-2" /> Refresh Data
          </Button>
          <Button variant="warning" onClick={() => setShowModal(true)}>
            <FaSave className="me-2" /> Update All Data
          </Button>
        </div>
      </div>

      <Table striped bordered hover responsive className="table-sm">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Admin Status</th>
            <th>Mobile Number</th>
            <th>State</th>
            <th>Counseling</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>
                <InputGroup>
                  <InputGroup.Text><FaEdit /></InputGroup.Text>
                  <FormControl
                    value={user.name}
                    onChange={(e) => handleInputChange(e, index, 'name')}
                    className="input-sm"
                  />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroup.Text><FaEdit /></InputGroup.Text>
                  <FormControl
                    value={user.email}
                    onChange={(e) => handleInputChange(e, index, 'email')}
                    className="input-sm"
                  />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroup.Text><FaEdit /></InputGroup.Text>
                  <FormControl
                    value={user.isAdmin}
                    onChange={(e) => handleInputChange(e, index, 'isAdmin')}
                    className="input-sm"
                  />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroup.Text><FaEdit /></InputGroup.Text>
                  <FormControl
                    value={user.mobileNumber}
                    onChange={(e) => handleInputChange(e, index, 'mobileNumber')}
                    className="input-sm"
                  />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroup.Text><FaEdit /></InputGroup.Text>
                  <FormControl
                    value={user.state}
                    onChange={(e) => handleInputChange(e, index, 'state')}
                    className="input-sm"
                  />
                </InputGroup>
              </td>
              <td>
                <InputGroup>
                  <InputGroup.Text><FaEdit /></InputGroup.Text>
                  <FormControl
                    value={user.counseling}
                    onChange={(e) => handleInputChange(e, index, 'counseling')}
                    className="input-sm"
                  />
                </InputGroup>
              </td>
              <td>
                <Badge
                  bg={user.paymentStatus === 'Paid' ? 'success' : 'warning'}
                  className="p-2"
                  onClick={() => togglePaymentStatus(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {user.paymentStatus}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for confirming bulk update */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Update All</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="mb-0">Are you sure you want to update all user data?</p>
          <p>This action cannot be undone.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpdateAll}>
            Update All
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminUserList;