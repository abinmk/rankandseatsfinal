import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FilterSection = ({
  showFilters,
  toggleFilters,
  filters,
  setFilters,
  filterOptions,
  loading,
  getFilterParamName,
  clearAllFilters,
}) => {
  const handleChange = (e, filterId) => {
    const value = e.target.value;
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterId]: value,
    }));
  };

  return (
    <div className={`filters-section ${showFilters ? 'show' : 'hide'}`}>
      <div className="filters-header">
        <h5>Filters</h5>
        <Button variant="outline-primary" onClick={clearAllFilters}>
          Clear All
        </Button>
      </div>
      {filterOptions && (
        <Form>
          {Object.keys(filterOptions).map(filterId => (
            <Form.Group controlId={filterId} key={filterId}>
              <Form.Label>{filterOptions[filterId].label}</Form.Label>
              <Form.Control
                as="select"
                value={filters[filterId] || ''}
                onChange={(e) => handleChange(e, filterId)}
              >
                <option value="">All</option>
                {filterOptions[filterId].options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          ))}
        </Form>
      )}
    </div>
  );
};

export default FilterSection;
