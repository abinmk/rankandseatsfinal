import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axiosInstance from '../utils/axiosInstance';

const apiUrl = import.meta.env.VITE_API_URL;

const EventsUpdate = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosInstance.get(`${apiUrl}/admin-data/events`);
        // Ensure all dates are valid Date objects
        const parsedEvents = data.events.map(event => ({
          ...event,
          date: event.date ? new Date(event.date) : new Date(), // Fallback to current date if invalid
        }));
        setEvents(parsedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleChange = (index, field, value) => {
    const updatedEvents = [...events];
    updatedEvents[index][field] = value;
    setEvents(updatedEvents);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Convert dates to ISO strings before sending to the backend
      const updatedEvents = events.map(event => ({
        ...event,
        date: event.date.toISOString(),
      }));
      await axiosInstance.post(`${apiUrl}/admin-data/events/update`, { events: updatedEvents });
      alert('Events updated successfully!');
    } catch (error) {
      console.error('Error updating events:', error);
    }
  };

  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        date: new Date(),
        title: '',  // Required field
        counselingType: '',  // Required field
      },
    ]);
  };

  return (
    <Container>
      <Card className="custom-card mb-3">
        <Card.Header>
          <Card.Title>Update Events</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleUpdate}>
            {events.map((event, index) => (
              <div key={index}>
                <Row>
                  <Col>
                    <Form.Group controlId={`eventDate-${index}`}>
                      <Form.Label>Date</Form.Label>
                      <DatePicker
                        selected={event.date}
                        onChange={(date) => handleChange(index, 'date', date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId={`eventTitle-${index}`}>
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={event.title}
                        onChange={(e) => handleChange(index, 'title', e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId={`eventCounselingType-${index}`}>
                      <Form.Label>Counseling Type</Form.Label>
                      <Form.Control
                        type="text"
                        value={event.counselingType}
                        onChange={(e) => handleChange(index, 'counselingType', e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
              </div>
            ))}
            <Button variant="primary" type="submit">
              Update Events
            </Button>
            <Button variant="secondary" className="ms-3" onClick={handleAddEvent}>
              Add New Event
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventsUpdate;
