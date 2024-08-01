import React, { useState, useEffect } from 'react';
import { Form, Accordion, Button, Modal } from 'react-bootstrap';

const FilterItem = ({ title, options, filterName, filters, handleFilterChange, eventKey, viewMore, appliedFiltersCount, getFilterParamName }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const filterParamName = getFilterParamName(filterName);

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

  const clearFilterCategory = () => {
    options.forEach(option => handleFilterChange(option, false, filterName));
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
              checked={filters[filterParamName]?.includes(option)}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            />
          ))}
          <div className="filter-actions">
            {viewMore && (
              <Button variant="link" className="view-more-btn" onClick={handleModalOpen}>
                View More
              </Button>
            )}
            <Button variant="link" className="clear-btn" onClick={clearFilterCategory}>
              Clear
            </Button>
          </div>
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
              checked={filters[filterParamName]?.includes(option)}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            />
          ))}
          <Button variant="link" className="clear-category-btn" onClick={clearFilterCategory}>
            Clear
          </Button>
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
