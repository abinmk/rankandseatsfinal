import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Card, Col, Row, Table, Button, Modal, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosInstance from '../utils/axiosInstance'; // Assuming axiosInstance is pre-configured
import { FaTrash } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from "axios";

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

  const filterEvents = useCallback(
    (filterType) => {
      const now = new Date();
      let filtered;
      if (filterType === "today") {
        filtered = events.filter((event) => {
          const eventDate = new Date(event.date);
          return (
            eventDate.getDate() === now.getDate() &&
            eventDate.getMonth() === now.getMonth() &&
            eventDate.getFullYear() === now.getFullYear()
          );
        });
      } else if (filterType === "upcoming") {
        filtered = events.filter((event) => new Date(event.date) > now);
      } else if (filterType === "past") {
        filtered = events.filter((event) => new Date(event.date) < now);
      } else {
        filtered = events;
      }
      setFilteredEvents(filtered);
      setFilter(filterType);
    },
    [events]
  );

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
          allotmentId: deleteItemId,
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
              <Card.Header className="text-start">
                <Card.Title>Information Alert</Card.Title>
              </Card.Header>
              <Card.Body className="overflow-auto" style={{ maxHeight: "300px" }}>
                <div dangerouslySetInnerHTML={{ __html: informationAlert }} />
              </Card.Body>
            </Card>
          </Col>

          {/* My Choice Wishlist Section */}
          <Col xl={6} lg={12} className="mb-4">
            <Card className="custom-card h-100 shadow-sm">
              <Card.Header className="text-start">
                <Card.Title>My Choice Wishlist</Card.Title>
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
                            <thead style={{ backgroundColor: "#f8f9fa" }}>
                              <tr>
                                <th className="text-start">Sl. No.</th>
                                <th className="text-start">Institute</th>
                                <th className="text-start">Course</th>
                                <th className="text-start">Category</th>
                                <th className="text-start">Remove</th>
                              </tr>
                            </thead>
                            <tbody>
                              {choiceList.map((item, index) => (
                                <Draggable
                                  key={item.allotmentId}
                                  draggableId={item.allotmentId}
                                  index={index}
                                >
                                  {(provided) => (
                                    <tr
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        ...provided.draggableProps.style,
                                        backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
                                      }}
                                    >
                                      <td className="text-start">{index + 1}</td>
                                      <td className="text-start">{item.allotment.allottedInstitute}</td>
                                      <td className="text-start">{item.allotment.course}</td>
                                      <td className="text-start">{item.allotment.allottedCategory}</td>
                                      <td className="text-start">
                                        <Button
                                          variant="outline-danger"
                                          className="delete-button"
                                          onClick={() => handleDelete(item.allotmentId)}
                                        >
                                          <FaTrash />
                                        </Button>
                                      </td>
                                    </tr>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
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

          {/* Alerts & Announcements Section */}
          <Col xl={6} lg={12} className="mb-4">
            <Card className="custom-card h-100 shadow-sm">
              <Card.Header className="text-start">
                <Card.Title>Alerts & Announcements</Card.Title>
              </Card.Header>
              <Card.Body className="overflow-auto" style={{ maxHeight: "300px" }}>
                <Table responsive className="table-striped table-hover text-nowrap mb-0">
                  <thead className="thead-dark" style={{ backgroundColor: "#343a40", color: "#fff" }}>
                    <tr>
                      <th className="text-start">Date</th>
                      <th className="text-start">Counseling Type</th>
                      <th className="text-start">Title</th>
                      <th className="text-start">Details</th>
                      <th className="text-start">Call to Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alerts.map((alert, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
                        }}
                      >
                        <td className="text-start">{new Date(alert.date).toLocaleDateString()}</td>
                        <td className="text-start">{alert.counselingType}</td>
                        <td className="text-start">{alert.title}</td>
                        <td className="text-start">{alert.details}</td>
                        <td className="text-start">
                        <a href={alert.callToAction} target="_blank" rel="noopener noreferrer">
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

          {/* Events Section */}
          <Col xl={6} lg={12} className="mb-4">
            <Card className="custom-card h-100 shadow-sm">
              <Card.Header className="text-start">
                <Card.Title>Events</Card.Title>
              </Card.Header>
              <Card.Body className="overflow-auto" style={{ maxHeight: "300px" }}>
                <div className="d-flex justify-content-start mb-3">
                  <Button variant={filter === "today" ? "primary" : "outline-primary"} onClick={() => filterEvents("today")}>
                    Today
                  </Button>
                  <Button variant={filter === "upcoming" ? "primary" : "outline-primary"} className="ms-2" onClick={() => filterEvents("upcoming")}>
                    Upcoming
                  </Button>
                  <Button variant={filter === "past" ? "primary" : "outline-primary"} className="ms-2" onClick={() => filterEvents("past")}>
                    Past
                  </Button>
                  <Button variant={filter === "all" ? "primary" : "outline-primary"} className="ms-2" onClick={() => filterEvents("all")}>
                    All
                  </Button>
                </div>
                {filteredEvents.length > 0 ? (
                  <Table responsive striped bordered hover>
                    <thead style={{ backgroundColor: "red" }}>
                      <tr>
                        <th className="text-start">Date</th>
                        <th className="text-start">Counseling Type</th>
                        <th className="text-start">Title</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEvents.map((event, index) => (
                        <tr
                          key={index}
                          style={{
                            backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#ffffff",
                          }}
                        >
                          <td className="text-start">{new Date(event.date).toLocaleDateString()}</td>
                          <td className="text-start">{event.counselingType}</td>
                          <td className="text-start">{event.title}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p>No events available.</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal for Delete Confirmation */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
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
