import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import { feesColumns, feesFiltersConfig } from './feesConfig';
import './Fees.scss';

const apiUrl = import.meta.env.VITE_API_URL;

const Fees = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);

  // Fetch data with filters and pagination
  const fetchData = useCallback(async (page, pageSize, filters) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/fees`, {
        params: { page, limit: pageSize, ...filters }
      });
      setData(response.data.data);
      setPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching fee data:', error);
    }
    setLoading(false);
  }, []);

  // Fetch data on filters, page, or pageSize change
  useEffect(() => {
    fetchData(page, pageSize, filters);
  }, [fetchData, filters, page, pageSize]);

  // Fetch filter options once on mount
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
    <div className='fees-container'>
    <GenericTable
      data={data}
      columns={feesColumns}
      filtersConfig={feesFiltersConfig}
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
    />
    </div>
  );
};

export default Fees;
