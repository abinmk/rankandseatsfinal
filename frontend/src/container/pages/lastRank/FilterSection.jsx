import React, { useState } from 'react';
import FilterItem from './FilterItem';
import './LastRank.scss';

const FilterSection = ({ filters }) => {
  const [appliedFilters, setAppliedFilters] = useState({});

  const handleFilterChange = (key, value) => {
    setAppliedFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="filter-section">
      {filters.map((filter) => (
        <FilterItem key={filter.key} filter={filter} onChange={handleFilterChange} />
      ))}
    </div>
  );
};

export default FilterSection;
