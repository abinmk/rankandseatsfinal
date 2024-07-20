import React from 'react';
import { Form, Accordion, Button, Spinner } from 'react-bootstrap';
import FilterItem from './FilterItem';
import './Colleges.scss';

const FilterSection = ({ showFilters, toggleFilters, filters, setFilters, filterOptions, loading, getFilterParamName, clearAllFilters }) => {
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

  return (
    <div className={`filters-section ${showFilters ? 'show' : 'hide'}`}>
      <div className="filters-header">
        <span>Filters ({Object.keys(filters).reduce((total, key) => total + filters[key].length, 0)})</span>
        <span className="clear-all-btn" onClick={clearAllFilters}>
          Clear All
        </span>
        <span className="close-btn" onClick={toggleFilters}>
          X
        </span>
      </div>
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
              getFilterParamName={getFilterParamName}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default FilterSection;
