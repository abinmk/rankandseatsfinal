import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  Badge,
  Modal,
  FormControl,
  InputGroup,
  Row,
  Col,
  Form,
  Tabs,
  Tab,
  Spinner,
  OverlayTrigger,
  Tooltip,
  Pagination,
} from 'react-bootstrap';
import { FaSync,FaKey, FaSave, FaEdit, FaUserShield, FaUserAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaMoneyBillAlt, FaCheckCircle,FaUsers,FaFilter,
   FaExclamationCircle, FaCalendarAlt } from 'react-icons/fa';
import axiosInstance from '../utils/axiosInstance';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const apiUrl = import.meta.env.VITE_API_URL;

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [adminUsers, setAdminUsers] = useState(0);
  const [paidUsers, setPaidUsers] = useState(0);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [showToast, setShowToast] = useState(false); // This is where you were missing the state.
  const [toastMessage, setToastMessage] = useState(''); // Stores toast message.
  const [changedFields, setChangedFields] = useState([]); // To track changes
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;

  // Filters state
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchMobileNumber, setSearchMobileNumber] = useState('');
  const [filterState, setFilterState] = useState('');
  const [filterPaymentStatus, setFilterPaymentStatus] = useState('');
  const [filterUserType, setFilterUserType] = useState('');
  const [searchCreatedDate, setSearchCreatedDate] = useState('');

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Lakshadweep',
    'Puducherry'
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
      setFilteredUsers(userData);
      setTotalUsers(userData.length);
      setPaidUsers(userData.filter((user) => user.paymentStatus === 'Paid').length);
      setAdminUsers(userData.filter((user) => user.isAdmin === true).length);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const applyFilters = (userData = users) => {
    const filtered = userData.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchName.toLowerCase()) &&
        user.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
        user.mobileNumber.includes(searchMobileNumber) &&
        (filterState ? user.state === filterState : true) &&
        (filterPaymentStatus ? user.paymentStatus.toLowerCase() === filterPaymentStatus.toLowerCase() : true) &&
        (filterUserType ? user.isAdmin.toString() === filterUserType : true) &&
        (searchCreatedDate ? user.createdAt.startsWith(searchCreatedDate) : true)
      );
    });
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    applyFilters();
    setCurrentPage(1);
  }, [searchName, searchEmail, searchMobileNumber, filterState, filterPaymentStatus, filterUserType, searchCreatedDate]);

  const handleUserSelection = (userId) => {
    setSelectedUsers((prevSelected) => {
      if (prevSelected.includes(userId)) {
        return prevSelected.filter((id) => id !== userId);
      }
      return [...prevSelected, userId];
    });
  };

  const handleInputChange = (e, index, field) => {
    const updatedUsers = [...users];
    const userIndex = users.findIndex((u) => u._id === filteredUsers[index]._id);
    updatedUsers[userIndex][field] = e.target.value;

    const fieldKey = `${userIndex}-${field}`;
    if (!changedFields.includes(fieldKey)) {
      setChangedFields([...changedFields, fieldKey]);
    }

    setUsers(updatedUsers);
    applyFilters(updatedUsers);
  };

  const togglePaymentStatus = (index) => {
    const updatedUsers = [...users];
    const userIndex = users.findIndex((u) => u._id === filteredUsers[index]._id);
    updatedUsers[userIndex].paymentStatus = updatedUsers[userIndex].paymentStatus === 'Paid' ? 'unpaid' : 'Paid';

    const fieldKey = `${userIndex}-paymentStatus`;
    if (!changedFields.includes(fieldKey)) {
      setChangedFields([...changedFields, fieldKey]);
    }

    setUsers(updatedUsers);
    applyFilters(updatedUsers);
  };

  const toggleUserType = async (index) => {
    const updatedUsers = [...users];
    const userIndex = users.findIndex((u) => u._id === filteredUsers[index]._id);
    updatedUsers[userIndex].isAdmin = !updatedUsers[userIndex].isAdmin;

    const fieldKey = `${userIndex}-isAdmin`;
    if (!changedFields.includes(fieldKey)) {
      setChangedFields([...changedFields, fieldKey]);
    }

    setUsers(updatedUsers);
    applyFilters(updatedUsers);
  };

  const handleUpdateAll = async () => {
    try {
      const response = await axiosInstance.put(`${apiUrl}/users/bulk-update`, { users });
      if (response.data.success) {
        showToastMessage('All users updated successfully');
        fetchUsers();
        setShowModal(false);
      } else {
        showToastMessage('Failed to update users');
      }
    } catch (error) {
      showToastMessage('Error updating users');
      console.error('Error updating users:', error);
    }
  };

  const handleRefresh = () => {
    fetchUsers();
    showToastMessage('Data refreshed!');
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const clearAllFilters = () => {
    setSearchName('');
    setSearchEmail('');
    setSearchMobileNumber('');
    setFilterState('');
    setFilterPaymentStatus('');
    setFilterUserType('');
    setSearchCreatedDate('');
  };

  const isFieldChanged = (userIndex, field) => {
    return changedFields.includes(`${userIndex}-${field}`);
  };

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} autohide onClose={() => setShowToast(false)}>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Fixed header with filters and buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3 sticky-top bg-white shadow-sm" style={{ padding: '5px 10px', zIndex: 10, top: 0 }}>
  <h3 style={{ margin: 0, fontSize: '1.5rem' }}>User Management</h3> {/* Reduced font size */}
  <div>
    <Button variant="primary" className="me-2" onClick={handleRefresh}>
      <FaSync className="me-1" /> Refresh Data
    </Button>
    <Button variant="warning" onClick={() => setShowModal(true)}>
      <FaSave className="me-1" /> Update All Data
    </Button>
  </div>

  <div className="d-flex justify-content-around align-items-center bg-light p-3 shadow-sm rounded" style={{ gap: '1.5rem' }}>
    <div className="text-center">
      <FaUsers style={{ fontSize: '1.7rem', color: '#007bff' }} /> {/* Reduced icon size */}
      <p className="mb-0 mt-1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Total Users</p> {/* Reduced font size */}
      <p className="mb-0" style={{ fontSize: '0.9rem', color: '#555' }}>{totalUsers}</p>
    </div>
    <div className="text-center">
      <FaFilter style={{ fontSize: '1.7rem', color: '#17a2b8' }} /> {/* Reduced icon size */}
      <p className="mb-0 mt-1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Filtered Users</p>
      <p className="mb-0" style={{ fontSize: '0.9rem', color: '#555' }}>{filteredUsers.length}</p>
    </div>
    <div className="text-center">
      <FaUserShield style={{ fontSize: '1.7rem', color: '#dc3545' }} /> {/* Reduced icon size */}
      <p className="mb-0 mt-1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Admin Users</p>
      <p className="mb-0" style={{ fontSize: '0.9rem', color: '#555' }}>{adminUsers}</p>
    </div>
    <div className="text-center">
      <FaCheckCircle style={{ fontSize: '1.7rem', color: '#28a745' }} /> {/* Reduced icon size */}
      <p className="mb-0 mt-1" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Paid Users</p>
      <p className="mb-0" style={{ fontSize: '0.9rem', color: '#555' }}>{paidUsers}</p>
    </div>
  </div>
</div>

      {/* Sticky filter section */}
      <div className="sticky-top bg-white" style={{ zIndex: 9, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '5px', top: '60px' }}>
  <Row className="py-2">
    {/* Name filter */}
    <Col md={2} className="mb-2">
      <FormControl
        type="text"
        placeholder="Name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        className="shadow-sm"
        style={{
          borderRadius: '6px',
          padding: '8px',
          fontSize: '0.85rem', // Reduced font size
        }}
      />
    </Col>

    {/* Email filter */}
    <Col md={2} className="mb-2">
      <FormControl
        type="text"
        placeholder="Email"
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
        className="shadow-sm"
        style={{
          borderRadius: '6px',
          padding: '8px',
          fontSize: '0.85rem',
        }}
      />
    </Col>

    {/* Mobile Number filter */}
    <Col md={2} className="mb-2">
      <FormControl
        type="text"
        placeholder="Mobile"
        value={searchMobileNumber}
        onChange={(e) => setSearchMobileNumber(e.target.value)}
        className="shadow-sm"
        style={{
          borderRadius: '6px',
          padding: '8px',
          fontSize: '0.85rem',
        }}
      />
    </Col>

    {/* State filter */}
    <Col md={2} className="mb-2">
      <Form.Select
        value={filterState}
        onChange={(e) => setFilterState(e.target.value)}
        className="shadow-sm"
        style={{
          borderRadius: '6px',
          padding: '8px',
          fontSize: '0.85rem',
        }}
      >
        <option value="">State</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </Form.Select>
    </Col>

    {/* Date filter */}
    <Col md={2} className="mb-2">
      <FormControl
        type="date"
        placeholder="Created Date"
        value={searchCreatedDate}
        onChange={(e) => setSearchCreatedDate(e.target.value)}
        className="shadow-sm"
        style={{
          borderRadius: '6px',
          padding: '8px',
          fontSize: '0.85rem',
        }}
      />
    </Col>

    {/* Payment Status filter */}
    <Col md={2} className="mb-2">
      <Form.Select
        value={filterPaymentStatus}
        onChange={(e) => setFilterPaymentStatus(e.target.value)}
        className="shadow-sm"
        style={{
          borderRadius: '6px',
          padding: '8px',
          fontSize: '0.85rem',
        }}
      >
        <option value="">Payment Status</option>
        <option value="paid">Paid</option>
        <option value="unpaid">Unpaid</option>
      </Form.Select>
    </Col>

    {/* User Type filter */}
    <Col md={2} className="mb-2">
      <Form.Select
        value={filterUserType}
        onChange={(e) => setFilterUserType(e.target.value)}
        className="shadow-sm"
        style={{
          borderRadius: '6px',
          padding: '8px',
          fontSize: '0.85rem',
        }}
      >
        <option value="">User Type</option>
        <option value="true">Admin</option>
        <option value="false">User</option>
      </Form.Select>
    </Col>

    {/* Clear Filters Button */}
    <Col md={2} className="d-flex align-items-center">
      <Button
        variant="outline-secondary"
        onClick={clearAllFilters}
        className="shadow-sm"
        style={{
          borderRadius: '6px',
          padding: '6px 10px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      >
        Clear Filters
      </Button>
    </Col>
  </Row>
</div>

      {/* User Cards and Pagination in a Scrollable Area */}
      <div style={{ overflowY: 'scroll', height: 'calc(100vh - 350px)', padding: '5px' }}>
        <UserCards
          users={currentUsers}
          handleUserSelection={handleUserSelection}
          selectedUsers={selectedUsers}
          toggleUserType={toggleUserType}
          togglePaymentStatus={togglePaymentStatus}
          handleInputChange={handleInputChange}
        />
      </div>

      {/* Footer with Pagination and Summary */}
      <div className="fixed-bottom bg-white py-3 shadow-sm" style={{ zIndex: 10 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
      <Pagination className="mb-1 ms-auto"> {/* Added ms-auto for left margin */}
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map((_, idx) => (
          <Pagination.Item
            key={idx + 1}
            active={currentPage === idx + 1}
            onClick={() => paginate(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
        {/* <div className="text-center mt-2">
          <small>&copy; 2024 Rank And Seats. All Rights Reserved.</small>
        </div> */}
      </div>

      {/* Modal for Confirming Bulk Update */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Update All</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Are you sure you want to update all user data?</p>
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

const UserCards = ({ users, handleUserSelection, selectedUsers, toggleUserType, togglePaymentStatus, handleInputChange }) => {
  if (users.length === 0) {
    return <p className="mt-4">No users found.</p>;
  }

  return (
    <Row className="mt-3">
      {users.map((user, index) => (
        <Col key={user._id} md={6} lg={3} className="mb-3">
          <Card
            className="shadow-sm h-100 user-card"
            style={{
              minHeight: '220px', // Reduced the minimum height
              maxWidth: '380px', // Reduced max width for a compact layout
              margin: 'auto',
              border: '1px solid #e0e0e0', // Subtle border for clean design
              borderRadius: '10px', // Slightly smaller rounded corners
              padding: '5px',
              backgroundColor: '#fff', // White background for contrast
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <Card.Body className="d-flex flex-column p-2">
              <div className="d-flex justify-content-center mb-1">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{user.isAdmin ? 'Admin User' : 'Regular User'}</Tooltip>}
                >
                  <Badge
                    style={{
                      cursor: 'pointer',
                      fontSize: '0.75rem', // Slightly smaller font size
                      padding: '0.3rem 1rem',
                      borderRadius: '12px',
                      marginBottom:'5px',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.1rem',
                      backgroundColor: user.isAdmin ? '#ff4d4d' : '#007bff', // Red for Admin, Blue for User
                      color: '#ffffff',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={() => toggleUserType(index)}
                  >
                    {user.isAdmin ? (
                      <>
                        <FaUserShield style={{ fontSize: '1.1rem' }} /> Admin
                      </>
                    ) : (
                      <>
                        <FaUserAlt style={{ fontSize: '1.1rem' }} /> User
                      </>
                    )}
                  </Badge>
                </OverlayTrigger>
              </div>

              <Card.Title className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.85rem', fontWeight: '500' }}>
                <InputGroup size="sm">
                  <InputGroup.Text>
                    <FaEdit />
                  </InputGroup.Text>
                  <FormControl
                    value={user.name}
                    onChange={(e) => handleInputChange(e, index, 'name')}
                    style={{
                      backgroundColor: '#f1f1f1',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      borderRadius: '6px',
                    }}
                  />
                </InputGroup>
              </Card.Title>

              <Card.Subtitle className="mb-1 text-muted" style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                <InputGroup size="sm">
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                  <FormControl
                    value={user.email}
                    onChange={(e) => handleInputChange(e, index, 'email')}
                    style={{
                      backgroundColor: '#f1f1f1',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      borderRadius: '6px',
                    }}
                  />
                </InputGroup>
              </Card.Subtitle>

              <Card.Text as="div" className="flex-grow-1">
                <p style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                  {/* <strong><FaPhoneAlt /> Mobile:</strong> */}
                  <InputGroup size="sm" className="mt-2">
                    <InputGroup.Text>
                      <FaEdit />
                    </InputGroup.Text>
                    <FormControl
                      value={user.mobileNumber}
                      onChange={(e) => handleInputChange(e, index, 'mobileNumber')}
                      style={{
                        backgroundColor: '#f1f1f1',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        borderRadius: '6px',
                      }}
                    />
                  </InputGroup>
                </p>

                <p style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                  <strong><FaKey /> OTP : </strong>{user.otp}
                  </p>

                <p style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                  {/* <strong><FaMapMarkerAlt /> State:</strong> */}
                  <InputGroup size="sm" className="mt-2">
                    <InputGroup.Text>
                      <FaEdit />
                    </InputGroup.Text>
                    <FormControl
                      value={user.state}
                      onChange={(e) => handleInputChange(e, index, 'state')}
                      style={{
                        backgroundColor: '#f1f1f1',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        borderRadius: '6px',
                      }}
                    />
                  </InputGroup>
                </p>

                <p style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                  <strong><FaMoneyBillAlt /> Payment Status:</strong>{' '}
                  <Badge
                    bg={user.paymentStatus.toLowerCase() === 'paid' ? 'success' : 'warning'}
                    onClick={() => togglePaymentStatus(index)}
                    style={{
                      cursor: 'pointer',
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      borderRadius: '8px',
                    }}
                  >
                    {user.paymentStatus.toLowerCase() === 'paid' ? (
                      <>
                        <FaCheckCircle className="me-1" /> Paid
                      </>
                    ) : (
                      <>
                        <FaExclamationCircle className="me-1" /> Unpaid
                      </>
                    )}
                  </Badge>
                </p>

                <p style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                  <strong><FaCalendarAlt /> Created:</strong> {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <p style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                  <strong><FaCalendarAlt /> Updated:</strong> {new Date(user.updatedAt).toLocaleDateString()}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AdminUserList;