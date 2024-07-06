import React from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';
import './FilterSection.scss';  // Ensure this line is included

const FilterItem = ({ eventKey, title, options, filterName, filters, handleFilterChange, handleModalShow, isModal }) => {
  return (
<Accordion.Item eventKey={eventKey} className="filter-item">
  <Accordion.Header className="filter-label">{title}</Accordion.Header>
  <Accordion.Body>
    <Form.Control
      type="text"
      placeholder={`Search ${title}`}
      className="filter-search filter-control"
      onChange={(e) => handleFilterChange(e, filterName)}
    />
    {options.map((option, index) => (
      <Form.Check
        key={index}
        type="checkbox"
        label={option}
        checked={filters[filterName] === option}
        onChange={(e) => handleFilterChange(e, filterName)}
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
