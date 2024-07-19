import React from 'react';
import { Form, Accordion } from 'react-bootstrap';

const FilterItem = ({ title, options, filterName, filters, handleFilterChange, eventKey }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        {options.map(option => (
          <Form.Check
            key={option}
            type="checkbox"
            label={option}
            checked={filters[filterName]?.includes(option)}
            onChange={(e) => handleFilterChange(option, e.target.checked, filterName)}
          />
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default FilterItem;
