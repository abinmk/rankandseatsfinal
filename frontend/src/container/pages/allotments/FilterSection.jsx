import React, { useState, useEffect } from 'react';
import { Form, Accordion, Button, Spinner } from 'react-bootstrap';
import FilterItem from './FilterItem';
import './FilterSection.scss';

const FilterSection = ({ showFilters, toggleFilters, filters, setFilters, filterOptions, loading, getFilterParamName }) => {
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

  const appliedFiltersCount = (filterName) => {
    const filterParamName = getFilterParamName(filterName);
    return (filters[filterParamName] || []).length;
  };

  const clearAllFilters = () => {
    setFilters({});
  };

  return (
    <div className={`filters-section ${showFilters ? 'show' : 'hide'}`}>
      <div className="filters-header">
        <span>Filters</span>
        <a className="close-btn" onClick={toggleFilters}>
          X
        </a>
      </div>
      <Button variant="link" className="clear-all-btn" onClick={clearAllFilters}>
        Clear All Filters
      </Button>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          {Object.keys(filterOptions).map((filterName, index) => (
            <FilterItem
              key={filterName}
              eventKey={index.toString()}
              title={filterName.charAt(0).toUpperCase() + filterName.slice(1).replace(/([A-Z])/g, ' $1')}
              options={filterOptions[filterName]}
              filterName={filterName}
              filters={filters}
              handleFilterChange={handleFilterChange}
              viewMore={filterOptions[filterName].length > 4}
              appliedFiltersCount={appliedFiltersCount(filterName)}
              clearAllFilters={clearAllFilters}
              getFilterParamName={getFilterParamName}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default FilterSection;
