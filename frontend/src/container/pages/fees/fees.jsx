import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import { feesColumns, feesFiltersConfig } from './feesConfig';
import './Fees.scss';

const Fees = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);

  const fetchData = useCallback(async (page, pageSize, filters) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5001/api/fees', {
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
      console.error('Error fetching fees data:', error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData(page, pageSize, filters);
  }, [fetchData, filters, page, pageSize]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      setFilterLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/api/fees/filters');
        const fetchedFilterOptions = response.data;
        console.log('Fetched Filter Options:', fetchedFilterOptions); // Debugging line

        const updatedFiltersConfig = feesFiltersConfig.map((filter) => {
          if (filter.type === 'select') {
            return {
              ...filter,
              options: fetchedFilterOptions[filter.id] || [],
            };
          }
          return filter;
        });

        setFilterOptions(updatedFiltersConfig);
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
      columns={feesColumns}
      filtersConfig={filterOptions}
      headerTitle="Fees"
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
  );
};

export default Fees;
