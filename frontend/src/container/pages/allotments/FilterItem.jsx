import React, { useState } from 'react';
import { Form, Accordion, Button, Modal } from 'react-bootstrap';

const FilterItem = ({ title, options, filterName, filters, handleFilterChange, eventKey }) => {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowMore = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const displayedOptions = options.slice(0, 4);
  const selectedCount = filters[filterName]?.length || 0;

  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title} ({selectedCount})</Accordion.Header>
        <Accordion.Body>
          {displayedOptions.map(option => (
            <Form.Check
              key={option}
              type="checkbox"
              label={option}
              checked={filters[filterName]?.includes(option)}
              onChange={(e) => handleFilterChange(option, e.target.checked, filterName)}
            />
          ))}
          {options.length > 4 && (
            <Button variant="link" className="view-more-btn" onClick={handleShowMore}>
              View More
            </Button>
          )}
        </Accordion.Body>
      </Accordion.Item>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {options.map(option => (
            <Form.Check
              key={option}
              type="checkbox"
              label={option}
              checked={filters[filterName]?.includes(option)}
              onChange={(e) => handleFilterChange(option, e.target.checked, filterName)}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FilterItem;
