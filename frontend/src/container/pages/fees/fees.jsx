import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import { feesColumns, feesFiltersConfig } from './feesConfig';
import './Fees.scss';
import useDebounce from './useDebounce'; // Import the debounce hook

const apiUrl = import.meta.env.VITE_API_URL;

const Fees = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1); // page index should start from 1 for API
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);

  const debouncedFilters = useDebounce(filters, 500);
  const debouncedPage = useDebounce(page, 300);
  const debouncedPageSize = useDebounce(pageSize, 300);

  // Fetch fees data with filters and pagination
  const fetchData = useCallback(async (page, pageSize, filters) => {
    setLoading(true);
    const source = axios.CancelToken.source();

    try {
      const response = await axios.get(`${apiUrl}/fees`, {
        cancelToken: source.token,
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
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        console.error('Error fetching fees data:', error);
      }
    }
    setLoading(false);

    return () => {
      source.cancel('Operation canceled due to new request.');
    };
  }, []);

  // Fetch data when filters, page, or pageSize changes
  useEffect(() => {
    fetchData(debouncedPage, debouncedPageSize, debouncedFilters);
  }, [fetchData, debouncedFilters, debouncedPage, debouncedPageSize]);

  // Fetch filter options once on component mount
  useEffect(() => {
    const fetchFilterOptions = async () => {
      setFilterLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/fees/filters`);
        setFilterOptions(response.data);
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
      setFilterLoading(false);
    };

    fetchFilterOptions();
  }, []);

  return (
    <div className="fees-container">
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
        filterOptions={filterOptions}
        loading={loading}
        filterLoading={filterLoading}
        fetchData={fetchData} // Pass fetchData
        pageSize={pageSize} // Pass pageSize
        setPageSize={setPageSize} // Pass setPageSize
      />
    </div>
  );
};

export default Fees;
