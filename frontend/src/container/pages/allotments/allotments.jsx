import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import _ from 'lodash';
import GenericTable from './GenericTable';
import { allotmentsColumns, allotmentsFiltersConfig } from './allotmentsConfig';
import './Allotments.scss';

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

  const apiUrl = import.meta.env.VITE_API_URL;

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
      rank: 'rank'
    };
    return (filterKey) => filterMapping[filterKey] || filterKey;
  }, []);

  const fetchData = useCallback(
    _.debounce(async (page, pageSize, filters) => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/allotments`, {
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
        console.error('Error fetching allotment data:', error);
      }
      setLoading(false);
    }, 500),
    [apiUrl]
  );

  const fetchFilterOptions = useCallback(async () => {
    setFilterLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/allotments/filters`);
      setFilterOptions(response.data);
      setRankRange({ min: response.data.rankRange.min, max: response.data.rankRange.max });
    } catch (error) {
      console.error('Error fetching filter options:', error);
    }
    setFilterLoading(false);
  }, [apiUrl]);

  useEffect(() => {
    fetchData(page, pageSize, filters);
    // Clean up debounce on unmount
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
        appliedFiltersCount={countAppliedFilters()} // Pass applied filters count
      />
    </div>
  );
};

export default Allotments;
