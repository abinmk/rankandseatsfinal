import React, { useState, useEffect } from 'react';
import { Table, Spinner, Button, Badge, Modal, FormControl, InputGroup, Row, Col, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { FaSync, FaSave, FaEdit } from 'react-icons/fa';
import axiosInstance from '../utils/axiosInstance';

const apiUrl = import.meta.env.VITE_API_URL;

const AdminUserList = () => {
  const [users, setUsers] = useState([]); // Holds all users
  const [filteredUsers, setFilteredUsers] = useState([]); // Holds filtered users
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [adminUsers, setAdminUsers] = useState(0);
  const [paidUsers, setPaidUsers] = useState(0);
  const [updating, setUpdating] = useState(false); // For showing spinner during user type updates
  const [selectedUsers, setSelectedUsers] = useState([]); // For selecting multiple users

  // Filters state
  const [searchName, setSearchName] = useState('');
  const [searchMobileNumber, setSearchMobileNumber] = useState('');
  const [filterState, setFilterState] = useState('');
  const [filterPaymentStatus, setFilterPaymentStatus] = useState('');
  const [filterUserType, setFilterUserType] = useState('');
  const [searchCreatedDate, setSearchCreatedDate] = useState('');

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry'
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`${apiUrl}/users/getUserDetails`);
      const userData = response.data;
      setUsers(userData);
      setFilteredUsers(userData); // Initially, set filteredUsers to all users
      setTotalUsers(userData.length);
      setPaidUsers(userData.filter((user) => user.paymentStatus === 'Paid').length);
      setAdminUsers(userData.filter((user) => user.isAdmin === true).length);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e, index, field) => {
    const updatedUsers = [...users];
    const userIndex = users.findIndex((u) => u._id === filteredUsers[index]._id);
    updatedUsers[userIndex][field] = e.target.value;
    setUsers(updatedUsers);
    applyFilters(updatedUsers);
  };

  const togglePaymentStatus = (index) => {
    const updatedUsers = [...users];
    const userIndex = users.findIndex((u) => u._id === filteredUsers[index]._id);
    updatedUsers[userIndex].paymentStatus = updatedUsers[userIndex].paymentStatus === 'Paid' ? 'unpaid' : 'Paid';
    setUsers(updatedUsers);
    applyFilters(updatedUsers);
  };

  // Handle individual user type update
  const toggleUserType = async (value, index) => {
    const updatedUsers = [...users];
    const userIndex = users.findIndex((u) => u._id === filteredUsers[index]._id);
    updatedUsers[userIndex].isAdmin = value;

    try {
      const response = await axiosInstance.put(`${apiUrl}/users/updateUser`, {
        _id: updatedUsers[userIndex]._id,
        isAdmin: value,
      });

      if (response.data.success) {
        setUsers(updatedUsers); // Update local state after backend success
        applyFilters(updatedUsers); // Re-apply filters if necessary
      } else {
        alert('Failed to update user type.');
      }
    } catch (error) {
      console.error('Error updating user type:', error);
    }
  };

  // Handle multi-user type update
  const toggleMultipleUserTypes = (value) => {
    const updatedUsers = users.map((user) => {
      if (selectedUsers.includes(user._id)) {
        return { ...user, isAdmin: value };
      }
      return user;
    });
    setUsers(updatedUsers);
    setSelectedUsers([]); // Clear selection after updating
  };

  const handleUpdateAll = async () => {
    try {
      const response = await axiosInstance.put(`${apiUrl}/users/bulk-update`, { users }); // Update all users, not just filtered ones
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

  // Function to apply filters
  const applyFilters = (userData = users) => {
    const filtered = userData.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchName.toLowerCase()) &&
        user.mobileNumber.includes(searchMobileNumber) &&
        (filterState ? user.state === filterState : true) &&
        (filterPaymentStatus ? user.paymentStatus.toLowerCase() === filterPaymentStatus.toLowerCase() : true) &&
        (filterUserType ? user.isAdmin.toString() === filterUserType : true) &&
        (searchCreatedDate ? user.createdAt.startsWith(searchCreatedDate) : true)
      );
    });
    setFilteredUsers(filtered);
  };

  // Handle user selection for multiple updates
  const handleUserSelection = (userId) => {
    setSelectedUsers((prevSelected) => {
      if (prevSelected.includes(userId)) {
        return prevSelected.filter((id) => id !== userId);
      }
      return [...prevSelected, userId];
    });
  };

  useEffect(() => {
    applyFilters();
  }, [searchName, searchMobileNumber, filterState, filterPaymentStatus, filterUserType, searchCreatedDate]);

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
        <Col md={4}>
          <div className="d-flex justify-content-between bg-light p-3 rounded">
            <span><strong>Total Users:</strong> {totalUsers}</span>
            <span><strong>Admin Users:</strong> {adminUsers}</span>
            <span><strong>Paid Users:</strong> {paidUsers}</span>
          </div>
        </Col>
        <div>
          <Button variant="primary" className="me-2" onClick={handleRefresh}>
            <FaSync className="me-1" /> Refresh Data
          </Button>
          <Button variant="warning" onClick={() => setShowModal(true)}>
            <FaSave className="me-1" /> Update All Data
          </Button>
        </div>
      </div>

      {/* User Statistics */}


      {/* Filters */}
      <Row className="mb-3">
        <Col md={2}>
          <FormControl
            type="text"
            placeholder="Filter by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <FormControl
            type="text"
            placeholder="Filter by Mobile Number"
            value={searchMobileNumber}
            onChange={(e) => setSearchMobileNumber(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Form.Select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
          >
            <option value="">Filter by State</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <FormControl
            type="date"
            placeholder="Filter by Created Date"
            value={searchCreatedDate}
            onChange={(e) => setSearchCreatedDate(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Form.Select
            value={filterPaymentStatus}
            onChange={(e) => setFilterPaymentStatus(e.target.value)}
          >
            <option value="">Filter by Payment Status</option>
            <option value="Paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select
            value={filterUserType}
            onChange={(e) => setFilterUserType(e.target.value)}
          >
            <option value="">Filter by User Type</option>
            <option value="true">Admin</option>
            <option value="false">User</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Bulk User Type Update Options */}
      {selectedUsers.length > 0 && (
        <Row className="mb-4">
          <Col>
            <Button variant="success" onClick={() => toggleMultipleUserTypes(true)}>
              Set Selected as Admin
            </Button>
            <Button variant="secondary" onClick={() => toggleMultipleUserTypes(false)} className="ms-2">
              Set Selected as User
            </Button>
          </Col>
        </Row>
      )}

      {/* Table */}
      <div style={{ overflowX: 'auto', maxHeight: '55vh' }}>
        <Table striped bordered hover responsive className="table-sm">
          <thead className="table-dark">
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Mobile Number</th>
              <th>State</th>
              <th>Counseling</th>
              <th>Payment Status</th>
              <th>Created Date</th>
              <th>Updated Date</th>
              <th>Choice List Created</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    onChange={() => handleUserSelection(user._id)}
                    checked={selectedUsers.includes(user._id)}
                  />
                </td>
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
                <td className="text-center align-middle">
                  <Badge
                    bg={user.isAdmin ? "success" : "primary"}
                    style={{ padding: "0.5rem 1rem", fontSize: "0.9rem", cursor: "default" }}
                    className="user-role-badge"
                  >
                    {user.isAdmin ? "Admin" : "User"}
                  </Badge>
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
                  className="p-2 payment-status-badge"
                  onClick={() => togglePaymentStatus(index)}
                  style={{
                    cursor: 'pointer',
                    padding: '0.6rem 1rem',
                    fontSize: '0.9rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                >
                  {user.paymentStatus === 'Paid' ? (
                    <><i className="fas fa-check-circle me-2"></i>Paid</>
                  ) : (
                    <><i className="fas fa-exclamation-circle me-2"></i>Unpaid</>
                  )}
                </Badge>
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>{new Date(user.updatedAt).toLocaleDateString()}</td>
                <td>{user.selectedExams ? user.wishlist.length : '0'} Counseling Type</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

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