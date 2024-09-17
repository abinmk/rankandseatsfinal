import React, { useState, useEffect,useMemo, useCallback, useContext } from 'react';
import axios from 'axios';
import _ from 'lodash';
import GenericTable from './GenericTable';
import { LastRankColumns, LastRankFiltersConfig } from './lastRankConfig';
import axiosInstance from '../../../utils/axiosInstance';
import { UserContext } from '../../../contexts/UserContext';
import { useOutletContext } from 'react-router-dom';
import './LastRank.scss';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const LastRank = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [showRowModal, setShowRowModal] = useState(false);
  const [previousFilters, setPreviousFilters] = useState(null);

  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  const { user } = useContext(UserContext);
  const [countVal, setCountOf] = useState(0);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [filterCountExceeded, setFilterCountExceed] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  const { exam, counselingType } = useOutletContext(); 

  

  const getFilterParamName = useMemo(() => {
    const filterMapping = {
      stateOptions: 'state',
      quotaOptions: 'quota',
      collegeNameOptions: 'collegeName',
      courseNameOptions: 'courseName',
    };
    return (filterKey) => filterMapping[filterKey] || filterKey;
  }, []);

  const fetchWishlist = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      // console.log(exam);
      const response = await axiosInstance.get(`${apiUrl}/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { examName: exam },
      });
      setWishlist(response.data.wishlist.items);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  }, [apiUrl, exam,counselingType]);

  const buildFilterParams = (filters) => {
    const params = {};
    Object.keys(filters).forEach((filterKey) => {
      const filterValue = filters[filterKey];
      if (typeof filterValue === 'object' && filterValue !== null && !Array.isArray(filterValue)) {
        if (filterValue.min !== undefined) {
          params[`${getFilterParamName(filterKey)}[min]`] = filterValue.min;
        }
        if (filterValue.max !== undefined) {
          params[`${getFilterParamName(filterKey)}[max]`] = filterValue.max;
        }
      } else if (Array.isArray(filterValue) && filterValue.length > 0) {
        params[getFilterParamName(filterKey)] = filterValue;
      } else if (filterValue !== undefined && filterValue !== null && filterValue !== '') {
        params[getFilterParamName(filterKey)] = filterValue;
      }
    });
    return params;
  };

  const fetchData = useCallback(
    _.debounce(async (page, pageSize, filters) => {
      setLoading(true);
      try {
        setCountOf(prevCountVal => prevCountVal + 1);

        if((countVal > 2 && !subscriptionStatus) || ((page > 1 || pageSize > 10) && !subscriptionStatus)) {
          setShowSubscriptionPopup(true);
          setFilterCountExceed(true);
          return;
        }

        const filterParams = buildFilterParams(filters);
        const response = await axiosInstance.get(`${apiUrl}/lastrank`, {
          params: {
            page,
            limit: pageSize,
            ...filterParams
          }
        });

        setData(response.data.data);
        setPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);

        if (response.data.totalPages < response.data.currentPage) {
          setPage(response.data.totalPages);
        }
      } catch (error) {
        console.error('Error fetching college data:', error);
      } finally {
        setLoading(false);
      }
    }, 500),
    [apiUrl, filters, page, pageSize]
  );

  const fetchFilterOptions = useCallback(async () => {
    setFilterLoading(true);
    try {
      const response = await axiosInstance.get(`${apiUrl}/lastrank/filters`);
      setFilterOptions(response.data);
      fetchWishlist();
    } catch (error) {
      console.error('Error fetching filter options:', error);
    } finally {
      setFilterLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    if (JSON.stringify(filters) !== JSON.stringify(previousFilters)) {
      setPage(1); // Reset to page 1
      setPreviousFilters(filters); // Update previous filters
    }
  }, [filters]);

  useEffect(() => {
    fetchData(page, pageSize, filters);
    return () => {
      fetchData.cancel();
    };
  }, [fetchData, filters, page, pageSize]);

  useEffect(() => {
    fetchFilterOptions();
  }, [fetchFilterOptions]);

  const countAppliedFilters = () => {
    let count = 0;
    for (const key in filters) {
      if (Array.isArray(filters[key])) {
        count += filters[key].length;
      } else if (filters[key] && typeof filters[key] === 'object') {
        if (filters[key].min !== undefined || filters[key].max !== undefined) {
          count += 1;
        }
      } else if (filters[key]) {
        count += 1;
      }
    }
    return count;
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

  const handleDetailClick = (year, round, details) => {
    const roundData = details.years[year].rounds[round];
    setSelectedRowData({
      ...details,
      year,
      round,
      roundData,
    });
    setShowRowModal(true);
  };

  const handleModalClose = () => {
    setShowRowModal(false);
  };

  const generateUniqueId = (allotment) => {
    const { collegeName, quota, courseName, allottedCategory } = allotment;
    return `${collegeName.trim().toLowerCase()}_${quota.trim().toLowerCase()}_${courseName.trim().toLowerCase()}_${allottedCategory.trim().toLowerCase()}`;
  };

  const addToWishlist = async (examName, allotment) => {
    try {
      console.log(allotment);
      const updatedAllotment = {
        ...allotment,   // Spread the existing allotment data
        uuid: generateUniqueId(allotment),  // Add the generated UUID
        allottedInstitute:allotment.collegeName,
        allottedCategory:allotment.allottedCategory,
        course:allotment.courseName,
        allottedQuota:allotment.quota,
      };
      allotment = updatedAllotment;
      const response = await axiosInstance.post('/wishlist/add', {
        examName,
        allotment,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchWishlist();
    } catch (error) {
      console.error('Error adding to wishlist:', error.response?.data || error.message);
    }
  };

  const removeFromWishlist = async (uuid) => {
    try {
      await axiosInstance.post(`${apiUrl}/wishlist/remove`, { examName: exam, uuid });
      fetchWishlist();
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div className={`fees-container ${showRowModal ? 'hide-filters' : ''}`}>
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
        disabled={showSubscriptionPopup && countVal > 2}
        showSubscriptionPopup={showSubscriptionPopup}
        setShowSubscriptionPopup={setShowSubscriptionPopup}
        wishlist ={wishlist}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />

      <Modal show={showRowModal} onHide={handleModalClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Allotted Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRowData && (
            <>
              <p>
                <strong>Year:</strong> {selectedRowData.year}
              </p>
              <p>
                <strong>Round:</strong> {selectedRowData.round}
              </p>
              <p>
                <strong>Last Rank:</strong> {selectedRowData.roundData.lastRank}
              </p>
              <p>
                <strong>Total Allotted:</strong> {selectedRowData.roundData.totalAllotted}
              </p>
              <p>
                <strong>Allotted Candidates Details:</strong>
              </p>
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