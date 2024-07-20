import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import { allotmentsColumns, allotmentsFiltersConfig } from './allotmentsConfig';
import './Allotments.scss';

const Allotments = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1); // page index should start from 1 for API
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);

  const fetchData = useCallback(async (page, pageSize, filters) => {
    setLoading(true);
    try {
      const response = await axios.get('http://rankseatsbucket.s3-website-ap-southeast-2.amazonaws.com/api/allotments', {
        params: {
          examName: 'NEET_PG_ALL_INDIA',
          year: 2015,
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
  }, []);

  useEffect(() => {
    fetchData(page, pageSize, filters);
  }, [fetchData, filters, page, pageSize]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      setFilterLoading(true);
      try {
        const response = await axios.get('http://rankseatsbucket.s3-website-ap-southeast-2.amazonaws.com/allotments/filters', {
          params: {
            examName: 'NEET_PG',
            year: 2015,
            round: 'ALL_INDIA'
          }
        });
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
      fetchData={fetchData} // Pass fetchData
      pageSize={pageSize} // Pass pageSize
      setPageSize={setPageSize} // Pass setPageSize
    />
  );
};

export default Allotments;
