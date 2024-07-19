import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterableTable = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/api/allotments', {
          params: {
            examName: 'NEET_PG',
            year: 2015,
            round: 'ALL_INDIA',
            page: 1,
            limit: 10,
            ...filters
          }
        });
        console.log('Allotment data:', response.data); // Debugging log
        setData(response.data.data);
        setPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching allotment data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [filters, page]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      setFilterLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/api/allotments/filters', {
          params: {
            examName: 'NEET_PG',
            year: 2015,
            round: 'ALL_INDIA'
          }
        });
        console.log('Filter options:', response.data); // Debugging log
        setFilterOptions(response.data);
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
      setFilterLoading(false);
    };

    fetchFilterOptions();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Institute</th>
              <th>Institute Type</th>
              <th>University</th>
              <th>Course</th>
              <th>Course Type</th>
              <th>Degree Type</th>
              <th>Course Fees</th>
              <th>Quota</th>
              <th>Year</th>
              <th>Round</th>
              <th>Category</th>
              <th>Bond</th>
              <th>Bond Penalty</th>
              <th>Beds</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.state}</td>
                <td>{item.allottedInstitute}</td>
                <td>{item.instituteType}</td>
                <td>{item.universityName}</td>
                <td>{item.course}</td>
                <td>{item.courseType}</td>
                <td>{item.degreeType}</td>
                <td>{item.feeAmount}</td>
                <td>{item.allottedQuota}</td>
                <td>{item.year}</td>
                <td>{item.round}</td>
                <td>{item.allottedCategory}</td>
                <td>{item.bondYear}</td>
                <td>{item.bondPenality}</td>
                <td>{item.totalHospitalBeds}</td>
                <td>{item.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FilterableTable;
