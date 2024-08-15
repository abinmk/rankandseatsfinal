import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GenericTable from './GenericTable';
import FilterSection from './FilterSection';
import './LastRank.scss';

const LastRank = () => {
  const [lastRanks, setLastRanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchLastRanks();
  }, [page, filters]);

  const fetchLastRanks = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/lastrank', {
        params: { page, ...filters },
      });
      setLastRanks(response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching last ranks:', error);
    }
    setLoading(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const columns = [
    { key: 'quota', label: 'Allotted Quota' },
    { key: 'allottedCategory', label: 'Allotted Category' },
    { key: 'state', label: 'State' },
    { key: 'collegeName', label: 'College' },
    { key: 'courseName', label: 'Course' },
    { key: 'years["2023"].rounds["1"].lastRank', label: '2023 R1' },
    { key: 'years["2023"].rounds["2"].lastRank', label: '2023 R2' },
    // Add more columns for rounds and years
  ];

  return (
    <div className="last-rank-page">
      <div className="filters-section">
        <FilterSection filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="last-rank-table-section">
        <GenericTable
          data={lastRanks}
          columns={columns}
          loading={loading}
          onPageChange={handlePageChange}
          currentPage={page}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default LastRank;
