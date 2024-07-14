import React from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';

const FilterItem = ({ eventKey, title, options, filterName, filters, handleFilterChange, handleModalShow, isModal }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    handleFilterChange(value, checked, filterName);
  };

  return (
    <Accordion.Item eventKey={eventKey} className="filter-item">
      <Accordion.Header className="filter-label">{title}</Accordion.Header>
      <Accordion.Body>
        {!isModal && (
          <Form.Control
            type="text"
            placeholder={`Search ${title}`}
            className="filter-search filter-control"
          />
        )}
        {options.map((option, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={option}
            value={option}
            checked={filters[filterName]?.includes(option) || false}
            onChange={handleCheckboxChange}
          />
        ))}
        {!isModal && (
          <Button variant="link" className="view-more-btn" onClick={() => handleModalShow(filterName)}>
            View more
          </Button>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default FilterItem;
