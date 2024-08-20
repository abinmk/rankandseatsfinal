import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Tooltip, OverlayTrigger, Navbar } from 'react-bootstrap';
import { FaUpload, FaBell, FaInfoCircle, FaCalendarAlt, FaRegChartBar, FaArrowLeft } from 'react-icons/fa';
import Upload from '../generate-data/Upload';
import AdminInformationAlert from './AdminInformationAlert';
import AdminAlertsAnnouncements from './AdminAlertsAnnouncements';
import EventsUpdate from './EventsUpdate';
import CardsUpdate from './CardsUpdate';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);

  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">
      {text}
    </Tooltip>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'upload':
        return <Upload />;
      case 'admin-info':
        return <AdminInformationAlert />;
      case 'admin-alert':
        return <AdminAlertsAnnouncements />;
      case 'admin-events':
        return <EventsUpdate />;
      case 'admin-cards':
        return <CardsUpdate />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header Section
      <Navbar bg="light" variant="dark" className="mb-4">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt="Logo"
              src="./logo.png"
              className="d-inline-block align-top"
            />{' '}
            Admin Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <h1>Admin Panel</h1>

      <Container fluid className="mt-4">
        {activeSection ? (
          <div>
            <Button variant="link" className="mb-3" onClick={() => setActiveSection(null)}>
              <FaArrowLeft /> Back to Dashboard
            </Button>
            <div>{renderContent()}</div>
          </div>
        ) : (
          <Row>
            <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm admin-card">
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Upload Data')}>
                    <FaUpload size={50} className="text-primary mb-3" />
                  </OverlayTrigger>
                  <Card.Title>Upload Data</Card.Title>
                  <Card.Text>
                    Access the upload section to add new data to the system.
                  </Card.Text>
                  <Button variant="primary" onClick={() => setActiveSection('upload')}>Go to Upload</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm admin-card">
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Manage Information Alerts')}>
                    <FaInfoCircle size={50} className="text-success mb-3" />
                  </OverlayTrigger>
                  <Card.Title>Admin Information Alert</Card.Title>
                  <Card.Text>
                    Manage and update information alerts for users.
                  </Card.Text>
                  <Button variant="success" onClick={() => setActiveSection('admin-info')}>Manage Information Alerts</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm admin-card">
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Manage Alerts & Announcements')}>
                    <FaBell size={50} className="text-warning mb-3" />
                  </OverlayTrigger>
                  <Card.Title>Admin Alerts & Announcements</Card.Title>
                  <Card.Text>
                    Manage alerts and announcements for the platform.
                  </Card.Text>
                  <Button variant="warning" onClick={() => setActiveSection('admin-alert')}>Manage Alerts & Announcements</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm admin-card">
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Manage Events')}>
                    <FaCalendarAlt size={50} className="text-info mb-3" />
                  </OverlayTrigger>
                  <Card.Title>Admin Events</Card.Title>
                  <Card.Text>
                    Manage and update upcoming events.
                  </Card.Text>
                  <Button variant="info" onClick={() => setActiveSection('admin-events')}>Manage Events</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4} lg={6} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm admin-card">
                <Card.Body className="text-center">
                  <OverlayTrigger placement="top" overlay={renderTooltip('Update Dashboard Cards')}>
                    <FaRegChartBar size={50} className="text-secondary mb-3" />
                  </OverlayTrigger>
                  <Card.Title>Admin Cards</Card.Title>
                  <Card.Text>
                    Update the card information displayed on the dashboard.
                  </Card.Text>
                  <Button variant="secondary" onClick={() => setActiveSection('admin-cards')}>Update Cards</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>

      {/* Footer Section */}
      <footer className="text-center mt-4">
        <Container>
          <span className="text-muted">© {new Date().getFullYear()} Rank And Seats . All rights reserved.</span>
        </Container>
      </footer>
    </div>
  );
};

export default AdminDashboard;
