import React, { useState, useEffect } from 'react';
import { Accordion, Form, Button, Modal } from 'react-bootstrap';

const FilterItem = ({ title, options, filterName, filters, handleFilterChange, eventKey }) => {
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

  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body className='sliderFilter' disabled={disabled}>
      {isRangeFilter ? (
        <>
          <Slider
            getAriaLabel={() => 'Range'}
            value={[minValue, maxValue]}
            onChange={handleSliderChange}
            onChangeCommitted={handleSliderChangeCommitted}
            valueLabelDisplay="auto"
            min={options.min}
            max={options.max}
            disabled={loading}
          />
          <Row>
            <Col>
              <Form.Label>Min:</Form.Label>
              <Form.Control
                type="number"
                value={minValue}
                onChange={handleMinInputChange}
                disabled={loading}
              />
            </Col>
            <Col>
              <Form.Label>Max:</Form.Label>
              <Form.Control
                type="number"
                value={maxValue}
                onChange={handleMaxInputChange}
                disabled={loading}
              />
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Form.Control
            type="text"
            placeholder={`Search ${title}`}
            className="filter-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.slice(0, 4).map(option => {
            const checkboxId = `checkbox-${option}`; // Ensure unique ID
            return (
              <Form.Check
              key={option}
              type="checkbox"
              id={checkboxId}
              // Use a container to ensure proper alignment and styling
              className="checkbox-container"
              label={
                <span className={`checkbox-label ${filters[filterParamName]?.includes(option) ? 'checked' : ''}`}>
                  {option}
                </span>
              }
              disabled={disabled}
              checked={filters[filterParamName]?.includes(option)}
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            />
            );
          })}
          <div className="filter-actions">
            {viewMore && (
              <Button variant="link" className="view-more-btn" onClick={handleModalOpen}>
                View More
              </Button>
            )}
            <Button
              disabled={disabled}
              variant="link"
              className="clear-btn"
              onClick={clearFilterCategory}
            >
              Clear
            </Button>
          </div>
        </>
      )}
    </Accordion.Body>
      </Accordion.Item>

      <Modal show={showModal} onHide={handleModalClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: '#223D6E' }}>
      <Modal.Title style={{ color: 'white' }}>{title}</Modal.Title>
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
              onChange={(e) => handleFilterChange(option, e.target.checked, filterName)}
            />
          ))}
          <Button variant="link" className="clear-category-btn" onClick={() => handleFilterChange([], false, filterName)}>
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
