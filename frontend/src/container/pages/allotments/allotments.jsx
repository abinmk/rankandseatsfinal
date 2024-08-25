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

const Allotments = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
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
  console.log(exam + counselingType + "Exam+counselingType");

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

  const fetchData = useCallback(
    _.debounce(async (page, pageSize, filters, counselingType) => {
      setLoading(true);
      console.log("page=="+page);
      try {
        setCountOf(prevCountVal => {
          const newCount = prevCountVal + 1;
          return newCount;
        });
        if((countVal>2 && subscriptionStatus==false) || (page>1 && subscriptionStatus==false))
        {
          setShowSubscriptionPopup(true);
          setFilterCountExceed(true);
          return;
        }

        const token = localStorage.getItem('token');
        const response = await axiosInstance.get(`${apiUrl}/allotments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page,
            limit: pageSize,
            counselingType,
            ...filters,
          },
        });
    
        
        // Check if the response indicates an invalid token
        if (response.data === 'Invalid token.') {
          alert('Session expired. Please log in again.');
          localStorage.removeItem('token'); // Remove token from localStorage
          window.location.href = '/login'; // Redirect to login page
          return; // Stop further execution
        }
  
        // Decrypt the data
        const decryptedData = JSON.parse(decrypt(response.data.data));
          setData(decryptedData);
          setPage(response.data.currentPage);
          setTotalPages(response.data.totalPages);
  
      }
     catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle token expiration
          alert('Session expired. Please log in again.');
          localStorage.removeItem('token'); // Remove token from localStorage
          window.location.href = '/login'; // Redirect to login page
        } else {
          console.error('Error fetching allotment data:', error);
        }
      } finally {
        setLoading(false);
      }
    }, 500),
    [apiUrl,filters,page]
  );
  
  
  const fetchFilterOptions = useCallback(async () => {
    setFilterLoading(true);
    try {
      const response = await axiosInstance.get(`${apiUrl}/allotments/filters`, {
        params: { counselingType },
      });
  
      console.log('Encrypted data:', response.data);
      const decryptedString = decrypt(response.data.data);
      console.log('Decrypted data (string):', decryptedString);
      const decryptedData = JSON.parse(decryptedString);
      console.log('Decrypted data (JSON):', decryptedData);
  
      // Set the filter options and rank range from the decrypted data
      setFilterOptions(decryptedData);
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
      console.log(exam);
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
  }, [apiUrl, exam]);

  useEffect(() => {
    fetchData(page, pageSize, filters, counselingType);
    fetchWishlist();
  }, [fetchData, fetchWishlist, filters, page, pageSize, counselingType, exam]);

  useEffect(() => {
    fetchFilterOptions();
  }, [fetchFilterOptions, counselingType]);

  const addToWishlist = async (examName, allotment) => {
    try {
      const response = await axiosInstance.post('/wishlist/add', {
        examName,
        allotment,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      console.log('Wishlist updated:', response.data);
      fetchWishlist();
    } catch (error) {
      console.error('Error adding to wishlist:', error.response?.data || error.message);
    }
  };

  const removeFromWishlist = async (allotmentId) => {
    try {
      await axiosInstance.post(`${apiUrl}/wishlist/remove`, { examName: exam, allotmentId });
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
      const response = await axiosInstance.post(`${apiUrl}/payment/check-subscription`, { userId: user._id });
      const isSubscribed = response.data.status === 'paid';
      setSubscriptionStatus(isSubscribed);
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };

  checkSubscription();
}, [apiUrl,filters]);


  return (
    <div className="allotments-container">
      <GenericTable
        data={data}
        columns={allotmentsColumns}
        filtersConfig={allotmentsFiltersConfig}
        headerTitle="Allotments"
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

export default Allotments;
