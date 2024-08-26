import React, { useState, useEffect } from 'react';
import { Form, Accordion, Spinner } from 'react-bootstrap';
import FilterItem from './FilterItem';

const FilterSection = ({ showFilters,disabled, toggleFilters, filters, setFilters, filterOptions, loading, getFilterParamName, clearAllFilters }) => {
  const handleFilterChange = (value, checked, filterName) => {
    const filterParamName = getFilterParamName(filterName);
    setFilters((prevFilters) => {
      const prevValues = prevFilters[filterParamName] || [];
      const newValues = checked
        ? [...prevValues, value]
        : prevValues.filter((v) => v !== value);
      return { ...prevFilters, [filterParamName]: newValues };
    });
  };

  const handleRangeChange = (value, filterName) => {
    const filterParamName = getFilterParamName(filterName);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterParamName]: { min: value[0], max: value[1] }
    }));
  };

  const appliedFiltersCount = (filterName) => {
    const filterParamName = getFilterParamName(filterName);
    if (filters[filterParamName]?.min !== undefined && filters[filterParamName]?.max !== undefined) {
      return 1; // Treat the entire range as a single filter
    }
    return (filters[filterParamName] || []).length;
  };

  return (
    <div className={`filters-section ${showFilters ? 'show' : 'hide'}`}>
      <div className="filters-header">
        <span>Filters ({Object.keys(filters).reduce((total, key) => total + appliedFiltersCount(key), 0)})</span>
        <span className="clear-all-btn" disabled={disabled} onClick={clearAllFilters}>
          Clear All
        </span>
        <span className="close-btn" onClick={toggleFilters}>
          x
        </span>
      </div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          {Object.keys(filterOptions).map((filterName, index) => (
            <FilterItem
            disabled={disabled}
              key={filterName}
              eventKey={index.toString()}
              title={filterName.charAt(0).toUpperCase() + filterName.slice(1).replace(/([A-Z])/g, ' $1')}
              options={filterOptions[filterName]}
              filterName={filterName}
              filters={filters}
              handleFilterChange={handleFilterChange}
              handleRangeChange={handleRangeChange}
              viewMore={Array.isArray(filterOptions[filterName]) && filterOptions[filterName].length > 4}
              appliedFiltersCount={appliedFiltersCount(filterName)}
              getFilterParamName={getFilterParamName}
              loading={loading} // Pass the loading state
            />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default FilterSection;
