import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Button, Row, Col, Tooltip, OverlayTrigger, Badge, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axiosInstance from '../utils/axiosInstance';
import { FaInfoCircle, FaPlusCircle, FaSave, FaTrash } from 'react-icons/fa';

const apiUrl = import.meta.env.VITE_API_URL;

const AlertsUpdate = () => {
  const [alerts, setAlerts] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const { data } = await axiosInstance.get(`${apiUrl}/admin-data/get-alerts-announcements`);
        const parsedAlerts = data.alerts.map(alert => ({
          ...alert,
          date: new Date(alert.date),
        }));
        setAlerts(parsedAlerts);
      } catch (error) {
        console.error('Error fetching alerts:', error);
        setShowError(true);
      }
    };
    fetchAlerts();
  }, []);

  const handleChange = (index, field, value) => {
    const updatedAlerts = [...alerts];
    updatedAlerts[index][field] = value;
    setAlerts(updatedAlerts);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedAlerts = alerts.map(alert => ({
        ...alert,
        date: alert.date.toISOString(),
      }));
      await axiosInstance.post(`${apiUrl}/admin-data/post-alerts-announcements`, { alerts: updatedAlerts });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error updating alerts:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleAddAlert = () => {
    setAlerts([
      ...alerts,
      {
        date: new Date(),
        counselingType: '',
        title: '',
        details: '',
        callToAction: '',
      },
    ]);
  };

  const handleDeleteAlert = (index) => {
    const updatedAlerts = alerts.filter((_, i) => i !== index);
    setAlerts(updatedAlerts);
  };

  return (
    <Container>
      <Card className="custom-card mb-3">
        <Card.Header className="d-flex align-items-center">
          <FaInfoCircle size={20} className="me-2" />
          <Card.Title>Update Alerts & Announcements</Card.Title>
        </Card.Header>
        <Card.Body>
          {showSuccess && <Alert variant="success">Alerts updated successfully!</Alert>}
          {showError && <Alert variant="danger">There was an error updating the alerts.</Alert>}
          
          <Form onSubmit={handleUpdate}>
            {alerts.map((alert, index) => (
              <div key={index}>
                <Row className="align-items-center">
                  <Col md={2}>
                    <Form.Group controlId={`alertDate-${index}`}>
                      <Form.Label>Date</Form.Label>
                      <DatePicker
                        selected={alert.date}
                        onChange={(date) => handleChange(index, 'date', date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId={`alertCounselingType-${index}`}>
                      <Form.Label>Counseling Type</Form.Label>
                      <Form.Control
                        type="text"
                        value={alert.counselingType}
                        onChange={(e) => handleChange(index, 'counselingType', e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId={`alertTitle-${index}`}>
                      <Form.Label>Title <Badge bg="info">Required</Badge></Form.Label>
                      <Form.Control
                        type="text"
                        value={alert.title}
                        onChange={(e) => handleChange(index, 'title', e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId={`alertDetails-${index}`}>
                      <Form.Label>Details <Badge bg="info">Required</Badge></Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={alert.details}
                        onChange={(e) => handleChange(index, 'details', e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId={`alertCallToAction-${index}`}>
                      <Form.Label>Call to Action <Badge bg="info">Required</Badge></Form.Label>
                      <Form.Control
                        type="text"
                        value={alert.callToAction}
                        onChange={(e) => handleChange(index, 'callToAction', e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={1} className="text-end">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Delete Alert</Tooltip>}
                    >
                      <Button variant="danger" className="mt-4" onClick={() => handleDeleteAlert(index)}>
                        <FaTrash />
                      </Button>
                    </OverlayTrigger>
                  </Col>
                </Row>
                <hr />
              </div>
            ))}
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                <FaSave className="me-2" /> Update Alerts
              </Button>
              <Button variant="secondary" onClick={handleAddAlert}>
                <FaPlusCircle className="me-2" /> Add New Alert
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AlertsUpdate;
