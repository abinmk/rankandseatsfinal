import React, { useState, useEffect, useCallback, useContext, useMemo } from 'react';
import axios from 'axios';
import _ from 'lodash';
import GenericTable from './GenericTable';
import { feesColumns, feesFiltersConfig } from './feesConfig';
import './Fees.scss';
import axiosInstance from '../../../utils/axiosInstance';
import { UserContext } from '../../../contexts/UserContext';

const Colleges = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);

  const { user } = useContext(UserContext);
  const [countVal, setCountOf] = useState(0);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [filterCountExceeded, setFilterCountExceed] = useState(false);
  const [previousFilters, setPreviousFilters] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getFilterParamName = useMemo(() => {
    const filterMapping = {
      state: 'state',
      institute: 'collegeName',
      instituteType: 'instituteType',
      university: 'universityName',
      yearOfEstablishment: 'yearOfEstablishment',
      totalHospitalBedsRange: 'totalHospitalBeds',
      totalSeatsInCollegeRange: 'totalSeatsInCollege'
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
  

  useEffect(() => {
    if (JSON.stringify(filters) !== JSON.stringify(previousFilters)) {
      setPage(1); // Reset to page 1
      setPreviousFilters(filters); // Update previous filters
    }
  }, [filters]);

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
        const response = await axiosInstance.get(`${apiUrl}/fees`, {
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
      const response = await axiosInstance.get(`${apiUrl}/fees/filters`);
      setFilterOptions(response.data);
    } catch (error) {
      console.error('Error fetching filter options:', error);
    } finally {
      setFilterLoading(false);
    }
  }, [apiUrl]);

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

  return (
    <div className="colleges-container">
      <GenericTable
        data={data}
        columns={feesColumns}
        filtersConfig={feesFiltersConfig}
        headerTitle="Fees"
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
        getFilterParamName={getFilterParamName}
        appliedFiltersCount={countAppliedFilters()}
        disabled={showSubscriptionPopup && countVal > 2}
        showSubscriptionPopup={showSubscriptionPopup}
        setShowSubscriptionPopup={setShowSubscriptionPopup}
      />
    </div>
  );
};

export default Colleges;
