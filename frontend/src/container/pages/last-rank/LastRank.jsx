import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import { LastRankColumns, LastRankFiltersConfig } from './lastRankConfig';
import './LastRank.scss';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const apiUrl = import.meta.env.VITE_API_URL;

const LastRank = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showRowModal, setShowRowModal] = useState(false);

  // Fetch data with filters and pagination
  const fetchData = useCallback(async (page, pageSize, filters) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/lastrank`, {
        params: {
          page,
          limit: pageSize,
          ...filters
        }
      });
      setData(response.data.data);
      setPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }, []);

  // Fetch data when filters, page, or pageSize changes
  useEffect(() => {
    fetchData(page, pageSize, filters);
  }, [fetchData, filters, page, pageSize]);

  // Fetch filter options once on component mount
  useEffect(() => {
    const fetchFilterOptions = async () => {
      setFilterLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/lastrank/filters`);
        setFilterOptions(response.data);
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
      setFilterLoading(false);
    };

    fetchFilterOptions();
  }, []);

  const handleDetailClick = (year, round, details) => {
    const roundData = details.years[year].rounds[round];
    setSelectedRowData({
      ...details,
      year,
      round,
      roundData
    });
    setShowRowModal(true);
  };

  return (
    <div className="fees-container">
      <GenericTable
        data={data}
        filtersConfig={LastRankFiltersConfig}
        headerTitle="Last Rank"
        filters={filters}
        setFilters={setFilters}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        filterOptions={filterOptions}
        loading={loading}
        filterLoading={filterLoading}
        fetchData={fetchData}
        pageSize={pageSize}
        setPageSize={setPageSize}
        columns={LastRankColumns(data, handleDetailClick)}
      />

      <Modal show={showRowModal} onHide={() => setShowRowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Allotted Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  {selectedRowData && (
    <>
      <p><strong>Year:</strong> {selectedRowData.year}</p>
      <p><strong>Round:</strong> {selectedRowData.round}</p>
      <p><strong>Last Rank:</strong> {selectedRowData.roundData.lastRank}</p>
      <p><strong>Total Allotted:</strong> {selectedRowData.roundData.totalAllotted}</p>
      <p><strong>Details:</strong></p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Rank</th>
            <th>Institute</th>
            <th>Category</th>
            <th>Candidate Category</th>
          </tr>
        </thead>
        <tbody>
          {selectedRowData.roundData.allottedDetails.map((detail, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{detail.rank}</td>
              <td>{detail.allottedInstitute}</td>
              <td>{detail.allottedCategory}</td>
              <td>{detail.candidateCategory}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )}
</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LastRank;
