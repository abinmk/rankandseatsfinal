import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import { allotmentsColumns, allotmentsFiltersConfig } from './allotmentsConfig';
import './GenericTable.scss';
import './Allotments.scss';

const Allotments = () => {
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/api/allotments', {
          params: {
            examName: 'NEET_PG_ALL_INDIA',
            year: 2015,
            page,
            limit: 10,
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
    };

    fetchData();
  }, [filters, page]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      setFilterLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/api/allotments/filters', {
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
    />
  );
};

export default Allotments;
