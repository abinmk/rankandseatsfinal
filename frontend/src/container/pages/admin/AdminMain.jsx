import React, { useState, useContext } from 'react';
import { Container, Row, Modal, Col, Card, Dropdown, Button, Tooltip, OverlayTrigger, Navbar, Nav } from 'react-bootstrap';
import { FaUpload, FaUsers, FaBell, FaInfoCircle, FaCalendarAlt, FaRegChartBar, FaArrowLeft, FaUserCircle } from 'react-icons/fa';
import Upload from '../generate-data/Upload';
import AdminInformationAlert from './AdminInformationAlert';
import AdminAlertsAnnouncements from './AdminAlertsAnnouncements';
import EventsUpdate from './EventsUpdate';
import CardsUpdate from './CardsUpdate';
import AdminUsers from './UserDetails';
import { UserContext } from "../../../contexts/UserContext";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showConfirmModal, setConfirmModal] = useState(false);
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    setConfirmModal(false);
    // Redirect to the home page after logout
    navigate('/home');
  };

  const cancelLogout = () => {
    // Close the modal without logging out
    setConfirmModal(false);
  };

  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">{text}</Tooltip>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'admin-upload':
        return <Upload />;
      case 'admin-info':
        return <AdminInformationAlert />;
      case 'admin-alert':
        return <AdminAlertsAnnouncements />;
      case 'admin-events':
        return <EventsUpdate />;
      case 'admin-cards':
        return <CardsUpdate />;
      case 'admin-users':
        return <AdminUsers />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header with Logo and User Details */}
      <Navbar bg="light" expand="lg" className="shadow-sm py-3">
        <Container fluid>
        <Navbar.Brand href="#">
        <img
  alt="Company Logo"
  src="/logo.png" // Change to the actual logo path
  height="40" // Set the desired height
  width="auto" // Auto width to maintain aspect ratio
  className="d-inline-block align-top"
  style={{ marginRight: '10px', height: '45px', width: 'auto' }} // Inline styles as a fallback
/>
  </Navbar.Brand>
          <Nav className="ms-auto">
            {user && (
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <FaUserCircle className="me-2" size={24} />
                  {user.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setConfirmModal(true)}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Conditionally render the heading */}
      {!activeSection && (
        <h1
          className="text-center mt-3 mb-4"
          style={{
            fontWeight: '200', // Lighter weight for a clean look
            fontSize: '2.5rem',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Admin Dashboard
        </h1>
      )}

      <Container fluid className="mt-3 flex-grow-1">
        {/* Conditional rendering of sections */}
        {activeSection ? (
          <div>
            <Button variant="link" className="mb-3 text-decoration-none" onClick={() => setActiveSection(null)}>
              <FaArrowLeft /> Back to Dashboard
            </Button>
            <div>{renderContent()}</div>
          </div>
        ) : (
          <Row className="g-4"> {/* Spacing between cards */}
            <Col xl={4} lg={6} sm={12}>
              <Card className="h-100 shadow-sm admin-card" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Upload Data')}>
                    <FaUpload size={50} className="text-primary mb-3 hover-icon" />
                  </OverlayTrigger>
                  <Card.Title>Upload Data</Card.Title>
                  <Card.Text>
                    Access the upload section to add new data to the system.
                  </Card.Text>
                  <Button variant="primary" onClick={() => setActiveSection('admin-upload')}>
                    Go to Upload
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} sm={12}>
              <Card className="h-100 shadow-sm admin-card" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Manage Information Alerts')}>
                    <FaInfoCircle size={50} className="text-success mb-3 hover-icon" />
                  </OverlayTrigger>
                  <Card.Title>Admin Information Alert</Card.Title>
                  <Card.Text>
                    Manage and update information alerts for users.
                  </Card.Text>
                  <Button variant="success" onClick={() => setActiveSection('admin-info')}>
                    Manage Information Alerts
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} sm={12}>
              <Card className="h-100 shadow-sm admin-card" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Manage Alerts & Announcements')}>
                    <FaBell size={50} className="text-warning mb-3 hover-icon" />
                  </OverlayTrigger>
                  <Card.Title>Admin Alerts & Announcements</Card.Title>
                  <Card.Text>
                    Manage alerts and announcements for the platform.
                  </Card.Text>
                  <Button variant="warning" onClick={() => setActiveSection('admin-alert')}>
                    Manage Alerts & Announcements
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} sm={12}>
              <Card className="h-100 shadow-sm admin-card" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Manage Events')}>
                    <FaCalendarAlt size={50} className="text-info mb-3 hover-icon" />
                  </OverlayTrigger>
                  <Card.Title>Admin Events</Card.Title>
                  <Card.Text>
                    Manage and update upcoming events.
                  </Card.Text>
                  <Button variant="info" onClick={() => setActiveSection('admin-events')}>
                    Manage Events
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} sm={12}>
              <Card className="h-100 shadow-sm admin-card" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Update Dashboard Cards')}>
                    <FaRegChartBar size={50} className="text-secondary mb-3 hover-icon" />
                  </OverlayTrigger>
                  <Card.Title>Admin Cards</Card.Title>
                  <Card.Text>
                    Update the card information displayed on the dashboard.
                  </Card.Text>
                  <Button variant="secondary" onClick={() => setActiveSection('admin-cards')}>
                    Update Cards
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} sm={12}>
              <Card className="h-100 shadow-sm admin-card" style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}>
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Manage Users')}>
                    <FaUsers size={50} className="text-dark mb-3 hover-icon" />
                  </OverlayTrigger>
                  <Card.Title>Manage Users</Card.Title>
                  <Card.Text>
                    View and manage user accounts.
                  </Card.Text>
                  <Button variant="dark" onClick={() => setActiveSection('admin-users')}>
                    Manage Users
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>

      {/* Logout Confirmation Modal */}
      <Modal show={showConfirmModal} onHide={cancelLogout}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelLogout}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Footer Section */}
      <footer className="text-center mt-auto py-3 bg-light">
        <Container>
          <span className="text-muted">© {new Date().getFullYear()} Rank And Seats. All rights reserved.</span>
        </Container>
      </footer>
    </div>
  );
};

export default AdminDashboard;