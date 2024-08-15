import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Table, Container, Button, Modal } from 'react-bootstrap';
import './LastRank.scss';

const apiUrl = import.meta.env.VITE_API_URL;

const LastRank = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const fetchLastRankData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/lastrank`);
      setData(response.data.data || []);
    } catch (error) {
      console.error('Error fetching last rank data:', error);
      setData([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchLastRankData();
  }, [fetchLastRankData]);

  const handleShowModal = (allottedDetails) => {
    setModalData(allottedDetails);
    setShowModal(true);
  };

  const renderRoundDetails = (years) => {
    return Object.keys(years).map((year) => (
      <tr key={year}>
        <td>{year}</td>
        {Object.keys(years[year].rounds).map((round) => (
          <td key={round}>
            <div>Round {round}</div>
            <div>Last Rank: {years[year].rounds[round].lastRank}</div>
            <div>Total Allotted: <Button variant="link" onClick={() => handleShowModal(years[year].rounds[round].allottedDetails)}>{years[year].rounds[round].totalAllotted}</Button></div>
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <Container>
      <h2>Last Rank</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>College Name</th>
            <th>Course Name</th>
            <th>Quota</th>
            <th>Year/Round Details</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.collegeName}</td>
                <td>{item.courseName}</td>
                <td>{item.quota}</td>
                <td>
                  <Table bordered size="sm">
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th colSpan={Object.keys(item.years[Object.keys(item.years)[0]].rounds).length}>Rounds</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderRoundDetails(item.years)}
                    </tbody>
                  </Table>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* Modal for Allotted Data */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Allotted Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Rank</th>
                <th>Allotted Quota</th>
                <th>Allotted Institute</th>
                <th>Course</th>
                <th>Allotted Category</th>
                <th>Candidate Category</th>
              </tr>
            </thead>
            <tbody>
              {modalData.map((detail) => (
                <tr key={detail._id}>
                  <td>{detail.rollNumber}</td>
                  <td>{detail.rank}</td>
                  <td>{detail.allottedQuota}</td>
                  <td>{detail.allottedInstitute}</td>
                  <td>{detail.course}</td>
                  <td>{detail.allottedCategory}</td>
                  <td>{detail.candidateCategory}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default LastRank;
