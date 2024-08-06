import React, { useState, useEffect } from 'react';
import { Accordion, Form, Button, Spinner } from 'react-bootstrap';
import FilterItem from './FilterItem';

const FilterSection = ({ showFilters, toggleFilters, filters, setFilters, filterOptions, clearAllFilters }) => {
  const handleFilterChange = (value, checked, filterName) => {
    const newValues = checked
      ? [...(filters[filterName] || []), value]
      : (filters[filterName] || []).filter((v) => v !== value);
    setFilters(filterName, newValues);
  };

  return (
    <div className={`filters-section ${showFilters ? 'show' : 'hide'}`}>
      <div className="filters-header">
        <span>Filters</span>
        <span className="clear-all-btn" onClick={clearAllFilters}>
          Clear All
        </span>
        <span className="close-btn" onClick={toggleFilters}>
          x
        </span>
      </div>
      {Object.keys(filterOptions).length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          {Object.keys(filterOptions).map((filterName, index) => (
            <FilterItem
              key={filterName}
              eventKey={index.toString()}
              title={filterName.charAt(0).toUpperCase() + filterName.slice(1)}
              options={filterOptions[filterName]}
              filterName={filterName}
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default FilterSection;
