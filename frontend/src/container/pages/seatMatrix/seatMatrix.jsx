import React, { useState, useEffect, useCallback, useMemo,useContext } from 'react';
import _ from 'lodash';
import GenericTable from './GenericTable';
import { allotmentsColumns, allotmentsFiltersConfig,allotmentsColumnsDisabled } from './allotmentsConfig';
import './Allotments.scss';
import axiosInstance from '../../../utils/axiosInstance';
import { useOutletContext } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import CustomPopup from '../custom-popup/custom-popup-filter';
import { UserContext } from '../../../contexts/UserContext';

// Decryption function
const decrypt = (ciphertext) => {
  try {
    const key = CryptoJS.enc.Hex.parse(import.meta.env.VITE_ENCRYPTION_KEY);
    const iv = CryptoJS.enc.Hex.parse(import.meta.env.VITE_IV);

    const bytes = CryptoJS.AES.decrypt(ciphertext, key, { iv: iv });
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedData;
  } catch (error) {
    console.error('Error decrypting data:', error);
    throw error;
  }
};

const SeatMatrix = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [currentFilters, setCurrentFilters] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);
  const [rankRange, setRankRange] = useState({ min: 0, max: 10000 });
  const [wishlist, setWishlist] = useState([]);
  const { user } = useContext(UserContext);
  const [countVal , setCountOf] = useState(0);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [filterCountExceeded, setFilterCountExceed] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  const { exam, counselingType } = useOutletContext(); // Retrieve exam and counselingType from context
  // console.log(exam + counselingType + "Exam+counselingType");

  const getFilterParamName = useMemo(() => {
    const filterMapping = {
      state: 'state',
      institute: 'allottedInstitute',
      instituteType: 'instituteType',
      university: 'universityName',
      course: 'course',
      courseType: 'courseType',
      degreeType: 'degreeType',
      feeAmount: 'feeAmount',
      quota: 'allottedQuota',
      category: 'candidateCategory',
      bondYear: 'bondYear',
      bondPenality: 'bondPenality',
      totalHospitalBeds: 'totalHospitalBeds',
      rank: 'rank',
    };
    return (filterKey) => filterMapping[filterKey] || filterKey;
  }, []);

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
    _.debounce(async (page, pageSize, filters, counselingType) => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const filterParams = buildFilterParams(filters);
  
        // Detect if filters have changed
        const filtersChanged = JSON.stringify(filters) !== JSON.stringify(currentFilters);
        
        if (filtersChanged) {
          setPage(1); // Reset to page 1 on filter change
          setCurrentFilters(filters); // Update the current filters state
          page = 1; // Set page to 1 if filters changed
        }
  
        // Check for subscription limit
        setCountOf((prev) => prev + 1);
        if ((countVal > 2 && !subscriptionStatus) || ((page > 1 || pageSize > 10) && !subscriptionStatus)) {
          setShowSubscriptionPopup(true);
          return;
        }
  
        const response = await axiosInstance.get(`${apiUrl}/seatMatrix`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { page, limit: pageSize, counselingType, ...filterParams },
        });
  
        if (response.data === 'Invalid token.') {
          alert('Session expired. Please log in again.');
          localStorage.removeItem('token');
          window.location.href = '/login';
          return;
        }
  
        const decryptedData = JSON.parse(decrypt(response.data.data));
        setData(decryptedData);
        setPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
  
        if (response.data.totalPages < response.data.currentPage) setPage(1);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert('Session expired. Please log in again.');
          localStorage.removeItem('token');
          window.location.href = '/login';
        } else {
          console.error('Error fetching allotment data:', error);
        }
      } finally {
        setLoading(false);
      }
    }, 500),
    [currentFilters, subscriptionStatus, apiUrl] // Ensure stable dependencies
  );
  
  
  const fetchFilterOptions = useCallback(async () => {
    setFilterLoading(true);
    try {
      const response = await axiosInstance.get(`${apiUrl}/seatMatrix/filters`, {
        params: { counselingType },
      });

      const decryptedString = decrypt(response.data.data);
      const decryptedData = JSON.parse(decryptedString);
      setFilterOptions(decryptedData);
      fetchWishlist();
      setRankRange({ min: decryptedData.rankRange.min, max: decryptedData.rankRange.max });
    } catch (error) {
      console.error('Error fetching filter options:', error);
    } finally {
      setFilterLoading(false);
    }
  }, [apiUrl, counselingType]);

  
  const fetchWishlist = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      // console.log(exam);
      const response = await axiosInstance.get(`${apiUrl}/wishlist/AIND`, {
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

  useEffect(() => {
    fetchData(page, pageSize, filters);
    return () => {
      fetchData.cancel();
    };
  }, [fetchData, filters, page, pageSize]);

  useEffect(() => {
    fetchFilterOptions();
  }, [fetchFilterOptions]);

  const addToWishlist = async (examName, allotment) => {
    try {
      const response = await axiosInstance.post('/wishlist/add-AIND', {
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
      await axiosInstance.post(`${apiUrl}/wishlist/remove-AIND`, { examName: exam, uuid });
      fetchWishlist();
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

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
        if (user && user._id) {  // Ensure user is loaded and has a valid _id
          const response = await axiosInstance.post(`${apiUrl}/payment/check-subscription`, { userId: user._id });
          const isSubscribed = response.data.status === 'paid';
          setSubscriptionStatus(isSubscribed);
        }
      } catch (error) {
        console.error('Error checking subscription:', error);
      }
    };
  
    checkSubscription();
  }, [apiUrl, user]); // Now it only triggers when user is available


  return (
    <div className="allotments-container">
      <GenericTable
        data={data}
        columns={allotmentsColumns}
        filtersConfig={allotmentsFiltersConfig}
        headerTitle="Seat Matrix"
        filters={filters}
        setFilters={setFilters}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        setTotalPages={setTotalPages}
        filterOptions={filterOptions}
        loading={loading}
        filterLoading={filterLoading}
        fetchData={fetchData}
        pageSize={pageSize}
        setPageSize={setPageSize}
        rankRange={rankRange}
        getFilterParamName={getFilterParamName}
        appliedFiltersCount={countAppliedFilters()}
        wishlist={wishlist}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
        disabled = {showSubscriptionPopup && countVal>2}
        showSubscriptionPopup={showSubscriptionPopup}
        setShowSubscriptionPopup={setShowSubscriptionPopup}
      />
    </div>
  );
};

export default SeatMatrix;
