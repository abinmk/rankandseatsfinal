import React, { useState, useEffect } from 'react';
import { Form, Accordion, Button, Modal } from 'react-bootstrap';
import './FilterItem.scss';

const FilterItem = ({ title, options, filterName, filters, handleFilterChange, eventKey, viewMore, appliedFiltersCount }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm('');
  }, [showModal]);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  const handleCheckboxChange = (option, checked) => {
    handleFilterChange(option, checked, filterName);
  };

  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          {title} ({appliedFiltersCount})
        </Accordion.Header>
        <Accordion.Body>
          <Form.Control
            type="text"
            placeholder={`Search ${title}`}
            className="filter-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.slice(0, 4).map(option => (
            <Form.Check
              key={option}
              type="checkbox"
              label={option}
              checked={filters[filterName]?.includes(option)}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            />
          ))}
          {viewMore && (
            <Button variant="link" className="view-more-btn" onClick={handleModalOpen}>
              View More
            </Button>
          )}
        </Accordion.Body>
      </Accordion.Item>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder={`Search ${title}`}
            className="filter-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.map(option => (
            <Form.Check
              key={option}
              type="checkbox"
              label={option}
              checked={filters[filterName]?.includes(option)}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FilterItem;
