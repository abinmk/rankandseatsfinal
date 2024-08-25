import React, { useState,useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import { LastRankColumns, LastRankFiltersConfig } from './lastRankConfig';
import axiosInstance from '../../../utils/axiosInstance';
import { UserContext } from '../../../contexts/UserContext';
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

  const { user } = useContext(UserContext);
  const [countVal , setCountOf] = useState(0);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [filterCountExceeded, setFilterCountExceed] = useState(false);

  const fetchData = useCallback(async (page, pageSize, filters) => {
    setLoading(true);
    try {
      const adjustedFilters = {};

      setCountOf(prevCountVal => {
        const newCount = prevCountVal + 1;
        return newCount;
      });
      if((countVal>2 && subscriptionStatus==false) || page>1)
      {
        setShowSubscriptionPopup(true);
        setFilterCountExceed(true);
        return;
      }

      for (const key in filters) {
        if (filters[key]) {
          let field = key;
          if (key === 'stateOptions') field = 'state';
          if (key === 'quotaOptions') field = 'quota';
          if (key === 'collegeNameOptions') field = 'collegeName';
          if (key === 'courseNameOptions') field = 'courseName';

          adjustedFilters[field] = filters[key];
        }
      }

      const response = await axiosInstance.get(`${apiUrl}/lastrank`, {
        params: {
          page,
          limit: pageSize,
          ...adjustedFilters
        }
      });

      console.log('API Response:', response.data);
      setData(response.data.data); // Correctly update the data
      setPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }, [filters,page]);

  useEffect(() => {
    fetchData(page, pageSize, filters);
  }, [fetchData, filters, page, pageSize]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      setFilterLoading(true);
      try {
        const response = await axiosInstance.get(`${apiUrl}/lastrank/filters`);
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

  const handleModalClose = () => {
    setShowRowModal(false);
    setDataClose
  };

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await axiosInstance.post(`${apiUrl}/payment/check-subscription`, { userId: user._id });
        const isSubscribed = response.data.status === 'paid';
        setSubscriptionStatus(isSubscribed);
      } catch (error) {
        console.error('Error checking subscription:', error);
      }
    };
  
    checkSubscription();
  }, [apiUrl]);

  return (
    <div className={`fees-container ${showRowModal ? "hide-filters" : ""}`}>
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
        isModalOpen={showRowModal}
        disabled = {showSubscriptionPopup && countVal>2}
        showSubscriptionPopup={showSubscriptionPopup}
        setShowSubscriptionPopup={setShowSubscriptionPopup}
      />

      <Modal show={showRowModal} onHide={handleModalClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Allotted Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRowData && (
            <>
              <p><strong>Year:</strong> {selectedRowData.year}</p>
              <p><strong>Round:</strong> {selectedRowData.round}</p>
              {/* <p><strong>Course:</strong> {selectedRowData.roundData.course}</p> */}
              <p><strong>Last Rank:</strong> {selectedRowData.roundData.lastRank}</p>
              <p><strong>Total Allotted:</strong> {selectedRowData.roundData.totalAllotted}</p>
              <p><strong>Allotted Candidates Details:</strong></p>
              <div className="custom-table">
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Sl No.</th>
                      <th>Roll Number</th>
                      <th>Rank</th>
                      <th>Institute</th>
                      <th>Course</th>
                      <th>Allotted Quota</th>
                      <th>Allotted Category</th>
                      <th>Candidate Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedRowData.roundData.allottedDetails.map((detail, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{detail.rollNumber}</td>
                        <td>{detail.rank}</td>
                        <td>{detail.allottedInstitute}</td>
                        <td>{detail.course}</td>
                        <td>{detail.allottedQuota}</td>
                        <td>{detail.allottedCategory}</td>
                        <td>{detail.candidateCategory}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LastRank;
