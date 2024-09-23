import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Card, Col, Row, Table, Button, Modal, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosInstance from '../utils/axiosInstance'; // Assuming axiosInstance is pre-configured
import { FaTrash } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from "axios";
import './Dashboard.css';

const apiUrl = import.meta.env.VITE_API_URL;

// Sample data for Cards section
const Cardsdata = [
  { title: "Institutes", text1: "1753", icon1: "fe fe-home", color1: "primary",color2: "success"  },
  { title: "MD/MS Seats", text1: "45866", icon1: "fe fe-book-open", color1: "success", color2: "success",},
  { title: "DNB Seats", text1: "5275", icon1: "fe fe-book", color1: "info", color2: "info", },
  { title: "Diploma Seats", text1: "3890", icon1: "fe fe-award", color1: "warning", color2: "warning", },
  { title: "Govt MD/MS Seats", text1: "25218", icon1: "fe fe-shield", color1: "danger", color2: "danger", },
  { title: "Deemed Seats", text1: "5536", icon1: "fe fe-briefcase", color1: "secondary", color2: "secondary",  },
];

const Sales = () => {
  const [informationAlert, setInformationAlert] = useState("");
  const [alerts, setAlerts] = useState([]);
  const [choiceList, setChoiceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/admin-data/events`);
        setEvents(data.events);
        setFilteredEvents(data.events);
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    };
    fetchEvents();
  }, []);

  const filterEvents = (filterType) => {
    let filteredList = [];
  
    switch (filterType) {
      case "today":
        filteredList = events.filter(event => {
          const eventDate = new Date(event.date).setHours(0, 0, 0, 0);
          const today = new Date().setHours(0, 0, 0, 0);
          return eventDate === today;
        });
        break;
      case "upcoming":
        filteredList = events.filter(event => new Date(event.date) >= new Date());
        break;
      case "past":
        filteredList = events.filter(event => new Date(event.date) < new Date());
        break;
      case "all":
      default:
        filteredList = events;
        break;
    }
  
    // Sort events by date, latest first
    filteredList.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    setFilteredEvents(filteredList);
    setFilter(filterType);
  };

  useEffect(() => {
    filterEvents(filter);
  }, [filter, filterEvents]);

  // Generate the exam name for API calls
  const generateExamName = useCallback(async () => {
    const token = localStorage.getItem('token');
    const response = await axiosInstance.get(`${apiUrl}/users/exams`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;

    if (user && user.selectedExams && user.selectedExams.length > 0) {
      const { exam, counselingType } = user.selectedExams[0];
      const formattedExam = exam.replace(/\s+/g, '_');
      const formattedCounselingType = counselingType.replace(/\s+/g, '_');
      return `EXAM:${formattedExam}_TYPE:${formattedCounselingType}`;
    }
    return null;
  }, []);

  // Fetch the user's choice list
  const fetchChoiceList = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const examName = await generateExamName();
      if (examName) {
        const response = await axiosInstance.get(`${apiUrl}/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setChoiceList(response.data.wishlist.items);
      } else {
        console.error('No exam name found.');
      }
    } catch (error) {
      console.error('Error fetching choice list:', error);
    }
    setLoading(false);
  }, [generateExamName]);

  // Fetch the Information Alert
  useEffect(() => {
    const fetchAlert = async () => {
      try {
        const { data } = await axiosInstance.get(`${apiUrl}/admin-data/get-information-alert`);
        if (data) {
          setInformationAlert(data.text);
        }
      } catch (error) {
        console.error("Error fetching information alert:", error);
      }
    };
    fetchAlert();
  }, []);

  // Fetch the Alerts & Announcements data
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const { data } = await axiosInstance.get(`${apiUrl}/admin-data/get-alerts-announcements`);
        setAlerts(data.alerts);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };
    fetchAlerts();
    fetchChoiceList();
  }, [fetchChoiceList]);

  // Handle deletion from the choice list
  const handleDelete = (allotmentId) => {
    setDeleteItemId(allotmentId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const examName = await generateExamName();
      if (examName) {
        await axiosInstance.post(`${apiUrl}/wishlist/remove`, {
          uuid: deleteItemId,
          examName,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        fetchChoiceList();
        setShowDeleteModal(false);
        setDeleteItemId(null);
      } else {
        console.error('No exam name found.');
      }
    } catch (error) {
      console.error('Error removing from choice list:', error);
    }
  };

  // Handle drag and drop reordering
  const onDragEnd = async (result) => {
    if (!result.destination) return;
    const items = Array.from(choiceList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setChoiceList(items);

    try {
      const token = localStorage.getItem('token');
      const examName = await generateExamName();
      if (examName) {
        await axiosInstance.post(`${apiUrl}/wishlist/updateOrder`, {
          updatedOrder: items.map(item => item.allotmentId),
          examName,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        console.error('No exam name found.');
      }
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return (
    <Fragment>
      <Container fluid>
        <Row className="mb-4">
          {Cardsdata.map((card, i) => (
            <Col key={i} xl={2} lg={4} md={4} sm={6} xs={12} className="mb-3">
              <Card className="custom-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex">
                    <div>
                      <p className="fw-medium mb-1 text-muted">{card.title}</p>
                      <h3 className="mb-0">{card.text1}</h3>
                    </div>
                    <div className={`avatar avatar-md br-4 bg-${card.color1}-transparent ms-auto`}>
                      <i className={card.icon1}></i>
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <span className={`badge bg-${card.color2}-transparent rounded-pill`}>{card.text2}</span>
                    {/* <Link to="#" className="text-muted fs-11 ms-auto text-decoration-underline mt-auto">view more</Link> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          {/* Information Alert Section */}
          <Col xl={6} lg={12} className="mb-4">
  <Card className="custom-card h-100 shadow-sm">
    <Card.Header className="custom-card-header text-start">
      <Card.Title className="custom-card-title"> 📢 Information Alert</Card.Title>
    </Card.Header>
    <Card.Body className="overflow-auto" style={{ maxHeight: "300px" }}>
      <div dangerouslySetInnerHTML={{ __html: informationAlert }} />
    </Card.Body>
  </Card>
</Col>

{/* My Choice Wishlist Section */}
<Col xl={6} lg={12} className="mb-4">
  <Card className="custom-card h-100 shadow-sm">
    <Card.Header className="custom-card-header text-start">
    <Card.Title className="custom-card-title">
  <span className="icon-heart"><i className="fas fa-heart m-1"></i></span>
  My Choice Wishlist
</Card.Title>
    </Card.Header>
    <Card.Body className="overflow-auto" style={{ maxHeight: "300px" }}>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="choices">
            {(provided) => (
              <div
                className="choice-list-table-wrapper"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
          <Table striped bordered hover className="choice-list-table">
  <thead className="thead-dark custom-thead">
    <tr>
      <th className="text-start">Choice</th>
      <th className="text-start">Institute</th>
      <th className="text-start">Course</th>
      <th className="text-start">Category</th>
      <th className="text-start">Delete</th>
    </tr>
  </thead>
  <tbody>
    {choiceList.map((item, index) => (
      <tr
        key={item.allotmentId}
        style={{
          backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff", // Alternate row background color
        }}
      >
        <td className="text-start">{item.allotment.order}</td>
        <td className="text-start">{item.allotment.allottedInstitute}</td>
        <td className="text-start">{item.allotment.course}</td>
        <td className="text-start">{item.allotment.allottedCategory}</td>
        <td className="text-start">
          <Button
            variant="outline-danger"
            className="delete-button"
            onClick={() => handleDelete(item.uuid)}
          >
            <FaTrash />
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </Card.Body>
  </Card>
</Col>

          <Col xl={6} lg={12} className="mb-4">
  <Card className="custom-card h-100 shadow-sm custom-alerts-card">
    <Card.Header className="text-start custom-card-header">
      <Card.Title className="custom-card-title">🚨 Alerts & Announcements</Card.Title>
    </Card.Header>
    <Card.Body className="overflow-auto" style={{ maxHeight: "300px" }}>
      <Table responsive className="table-striped table-hover text-nowrap mb-0">
        <thead className="thead-dark custom-thead">
          <tr>
            <th className="text-start">📅 Date</th>
            <th className="text-start">📝 Counseling Type</th>
            <th className="text-start">🔔 Title</th>
            <th className="text-start">📝 Details</th>
            <th className="text-start">🔗 Call to Action</th>
          </tr>
        </thead>
        <tbody>
          {alerts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((alert, index) => (
              <tr
                key={index}
                className={`custom-alert-row ${index % 2 === 0 ? "even-row" : "odd-row"}`}
              >
                <td className="text-start">{new Date(alert.date).toLocaleDateString()}</td>
                <td className="text-start">{alert.counselingType}</td>
                <td className="text-start">{alert.title}</td>
                <td className="text-start">{alert.details}</td>
                <td className="text-start">
                  <a href={alert.callToAction} target="_blank" rel="noopener noreferrer" className="custom-link">
                    {alert.callToActionText || 'Click Here'}
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
</Col>

<Col xl={6} lg={12} className="mb-4">
  <Card className="custom-card h-100 shadow-sm custom-events-card">
    <Card.Header className="text-start custom-card-header">
      <Card.Title className="custom-card-title">📅 Events</Card.Title>
    </Card.Header>
    <Card.Body className="overflow-auto" style={{ maxHeight: "350px" }}>
      <div className="d-flex justify-content-start mb-3">
        <Button
          variant={filter === "today" ? "primary" : "outline-primary"}
          className="custom-filter-btn"
          onClick={() => filterEvents("today")}
        >
          Today
        </Button>
        <Button
          variant={filter === "upcoming" ? "primary" : "outline-primary"}
          className="ms-2 custom-filter-btn"
          onClick={() => filterEvents("upcoming")}
        >
          Upcoming
        </Button>
        <Button
          variant={filter === "past" ? "primary" : "outline-primary"}
          className="ms-2 custom-filter-btn"
          onClick={() => filterEvents("past")}
        >
          Past
        </Button>
        <Button
          variant={filter === "all" ? "primary" : "outline-primary"}
          className="ms-2 custom-filter-btn"
          onClick={() => filterEvents("all")}
        >
          All
        </Button>
      </div>
      {filteredEvents.length > 0 ? (
        <Table responsive striped bordered hover className="custom-event-table">
          <thead className="custom-thead">
            <tr>
              <th className="text-start">📅 Date</th>
              <th className="text-start">📝 Counseling Type</th>
              <th className="text-start">🔔 Title</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event, index) => (
              <tr
                key={index}
                className={`event-row ${index % 2 === 0 ? "even-row" : "odd-row"}`}
              >
                <td className="text-start">{new Date(event.date).toLocaleDateString()}</td>
                <td className="text-start">{event.counselingType}</td>
                <td className="text-start">{event.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center text-muted">No events available.</p>
      )}
    </Card.Body>
  </Card>
</Col>
        </Row>
      </Container>

      {/* Modal for Delete Confirmation */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'white' }}>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Sales;
