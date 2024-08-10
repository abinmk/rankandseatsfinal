import React, { useState, useEffect, useCallback, useMemo } from 'react';
import _ from 'lodash';
import GenericTable from './GenericTable';
import { allotmentsColumns, allotmentsFiltersConfig } from './allotmentsConfig';
import './Allotments.scss';
import axiosInstance from '../../../utils/axiosInstance';
import { useOutletContext } from 'react-router-dom';

const Allotments = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);
  const [rankRange, setRankRange] = useState({ min: 0, max: 10000 });
  const [wishlist, setWishlist] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;
  const { exam, counselingType } = useOutletContext(); // Retrieve exam and counselingType from context
  console.log(exam+counselingType+"Exam+counselingType");

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
      try {
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
        setData(response.data.data);
        setPage(response.data.currentPage);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching allotment data:', error);
      } finally {
        setLoading(false);
      }
    }, 500),
    [apiUrl]
  );

  const fetchFilterOptions = useCallback(async () => {
    setFilterLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axiosInstance.get(`${apiUrl}/allotments/filters`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { counselingType }
      });
      setFilterOptions(response.data);
      setRankRange({ min: response.data.rankRange.min, max: response.data.rankRange.max });
    } catch (error) {
      console.error('Error fetching filter options:', error);
    } finally {
      setFilterLoading(false);
    }
  }, [apiUrl, counselingType]);

  const fetchWishlist = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axiosInstance.get(`${apiUrl}/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { examName: exam }
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
      />
    </div>
  );
};

export default Allotments;
