import React, { Fragment } from "react";
import { Card, Col, Row, Table, Pagination, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Sample data
const Cardsdata = [
  { title: "Institutes2", text1: "1320", icon1: "fe fe-shopping-cart", color1: "primary", color2: "primary", text2: "View More" },
  { title: "MD/MS Seats", text1: "35200", icon1: "fe fe-user-check", color1: "success", color2: "success", text2: "View More" },
  { title: "DNB Seats", text1: "4523", icon1: "fe fe-user-plus", color1: "info", color2: "info", text2: "View More" },
  { title: "Diploma Seats", text1: "2812", icon1: "fe fe-users", color1: "warning", color2: "warning", text2: "View More" },
  { title: "Active Subscribers", text1: "2812", icon1: "fe fe-check-circle", color1: "danger", color2: "danger", text2: "View More" },
];

const eventsData = [
  { date: "09 Sun", events: [
    { time: "09:00 - 12:00", description: "Meeting with client via video conference" },
    { time: "12:00 - 13:00", description: "Lunch with team members" },
    { time: "15:00 - 17:00", description: "Meeting with client Yuhan Sev" },
    { time: "18:15 - 19:00", description: "Create New Registration Page" },
  ]}
];

const Sales = () => {
  return (
    <Fragment>

      <Container fluid>
        <Row className="mb-3">
          {Cardsdata.map((idx, i) => (
            <Col key={i} xl={2} lg={2} md={4} sm={6} xs={12} className="mb-3">
              <Card className="custom-card h-100">
                <Card.Body>
                  <div className="d-flex">
                    <div>
                      <p className="fw-medium mb-1 text-muted">{idx.title}</p>
                      <h3 className="mb-0">{idx.text1}</h3>
                    </div>
                    <div className={`avatar avatar-md br-4 bg-${idx.color1}-transparent ms-auto`}>
                      <i className={idx.icon1}></i>
                    </div>
                  </div>
                  <div className="d-flex mt-2">
                    <span className={`badge bg-${idx.color2}-transparent rounded-pill`}>{idx.text2}</span>
                    <Link to="#" className="text-muted fs-11 ms-auto text-decoration-underline mt-auto">view more</Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {/* Adding an empty column to take up the remaining space */}
          <Col xl={2} lg={3} md={4} sm={6} xs={12} className="mb-3"></Col>
        </Row>
        <Row className="mb-3">
          <Col xl={7} lg={7}>
            <Card className="custom-card mb-3">
              <Card.Header>
                <Card.Title>Information Alert</Card.Title>
              </Card.Header>
              <Card.Body>
                <p>Information alert to show to information cancel</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={5} lg={5}>
            <Card className="custom-card mb-3">
              <Card.Header>
                <Card.Title>My Choice Wishlist</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive className="text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Customer</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#0011</td>
                      <td>07-07-2022</td>
                      <td>Helsinky</td>
                      <td>Delivered</td>
                    </tr>
                    <tr>
                      <td>#0012</td>
                      <td>18-09-2022</td>
                      <td>Brodus</td>
                      <td>Delivered</td>
                    </tr>
                    <tr>
                      <td>#0013</td>
                      <td>19-03-2022</td>
                      <td>Chikka Alen</td>
                      <td>Delivered</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl={7} lg={7}>
            <Card className="custom-card mb-3">
              <Card.Header>
                <Card.Title>Alerts & Announcements</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table responsive className="text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Project Name</th>
                      <th>Start Date</th>
                      <th>Due Date</th>
                      <th>Team Members</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Home Page</td>
                      <td>01 Apr 2023</td>
                      <td>14 Apr 2023</td>
                      <td>
                        <div className="avatar-group">
                          <div className="avatar avatar-xs">
                            <img src="..." alt="..." />
                          </div>
                          <div className="avatar avatar-xs">
                            <img src="..." alt="..." />
                          </div>
                        </div>
                      </td>
                      <td>In Progress</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Landing Design</td>
                      <td>02 Apr 2023</td>
                      <td>20 Apr 2023</td>
                      <td>
                        <div className="avatar-group">
                          <div className="avatar avatar-xs">
                            <img src="..." alt="..." />
                          </div>
                          <div className="avatar avatar-xs">
                            <img src="..." alt="..." />
                          </div>
                        </div>
                      </td>
                      <td>In Progress</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>New Template Design</td>
                      <td>10 Apr 2023</td>
                      <td>29 Apr 2023</td>
                      <td>
                        <div className="avatar-group">
                          <div className="avatar avatar-xs">
                            <img src="..." alt="..." />
                          </div>
                          <div className="avatar avatar-xs">
                            <img src="..." alt="..." />
                          </div>
                        </div>
                      </td>
                      <td>In Progress</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <div>Showing 6 entries</div>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item>{3}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={5} lg={5}>
            <Card className="custom-card mb-3">
              <Card.Header>
                <Card.Title>Events</Card.Title>
              </Card.Header>
              <Card.Body>
                {eventsData.map((eventDay, index) => (
                  <div key={index}>
                    <h5 className="mb-3">{eventDay.date}</h5>
                    <ul className="list-unstyled">
                      {eventDay.events.map((event, i) => (
                        <li key={i} className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <span className="badge bg-primary">{event.time}</span>
                            </div>
                            <div>{event.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Sales;
