import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import { collegeColumns, collegeFiltersConfig } from './collegeConfig';
import './Colleges.scss';

const apiUrl = import.meta.env.VITE_API_URL;

const Colleges = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1); // page index should start from 1 for API
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);

  // Fetch college data with filters, pagination
  const fetchData = useCallback(async (page, pageSize, filters) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/colleges`, {
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
      console.error('Error fetching college data:', error);
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
        const response = await axios.get('http://localhost:5001/api/colleges/filters');
        setFilterOptions(response.data);
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
      setFilterLoading(false);
    };

    fetchFilterOptions();
  }, []);

  return (
    <GenericTable
      data={data}
      columns={collegeColumns}
      filtersConfig={collegeFiltersConfig}
      headerTitle="Institutes"
      filters={filters}
      setFilters={setFilters}
      page={page}
      setPage={setPage}
      totalPages={totalPages}
      filterOptions={filterOptions}
      loading={loading}
      filterLoading={filterLoading}
      fetchData={fetchData} // Pass fetchData
      pageSize={pageSize} // Pass pageSize
      setPageSize={setPageSize} // Pass setPageSize
    />
  );
};

export default Colleges;
