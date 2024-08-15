import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import './LastRank.scss';

const apiUrl = import.meta.env.VITE_API_URL;

const LastRank = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const renderRoundDetails = (years) => {
    return Object.keys(years).map((year) => (
      <tr key={year}>
        <td>{year}</td>
        {Object.keys(years[year].rounds).map((round) => (
          <td key={round}>
            <div>Round {round}</div>
            <div>Last Rank: {years[year].rounds[round].lastRank}</div>
            <div>Total Allotted: {years[year].rounds[round].totalAllotted}</div>
            <ul>
              {years[year].rounds[round].allottedDetails.map((detail) => (
                <li key={detail._id}>{detail.rank} - {detail.allottedCategory}</li>
              ))}
            </ul>
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
    </Container>
  );
};

export default LastRank;
