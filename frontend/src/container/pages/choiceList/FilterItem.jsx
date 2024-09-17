import React, { useState, useEffect } from 'react';
import { Accordion, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import { debounce } from 'lodash';

const FilterItem = ({ title, options, filterName, filters, handleFilterChange, eventKey }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const isRangeFilter = options && options.min !== undefined && options.max !== undefined;

  useEffect(() => {
    setSearchTerm('');
  }, [showModal]);

  useEffect(() => {
    if (options) {
      setMinValue(options.min || 0);
      setMaxValue(options.max || 10000);
    }
  }, [options]);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  const handleSliderChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  const debouncedHandleRangeChange = debounce((newValue) => {
    handleFilterChange(newValue, filterName);
  }, 300);

  const handleSliderChangeCommitted = (event, newValue) => {
    debouncedHandleRangeChange(newValue);
  };

  const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMinValue(value);
    debouncedHandleRangeChange([value, maxValue]);
  };

  const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMaxValue(value);
    debouncedHandleRangeChange([minValue, value]);
  };

  const clearFilterCategory = () => {
    options.forEach(option => handleFilterChange(option, false, filterName));
  };

  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          {title} ({filters[filterName]?.length || 0})
        </Accordion.Header>
        <Accordion.Body className='filter-container'>
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
                disabled={false}
              />
              <Row>
                <Col>
                  <Form.Label>Min:</Form.Label>
                  <Form.Control
                    type="number"
                    value={minValue}
                    onChange={handleMinInputChange}
                    disabled={false}
                  />
                </Col>
                <Col>
                  <Form.Label>Max:</Form.Label>
                  <Form.Control
                    type="number"
                    value={maxValue}
                    onChange={handleMaxInputChange}
                    disabled={false}
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
              {filteredOptions.slice(0, 4).map(option => (
                <div className="checkbox-container" key={option}>
                  <Form.Check
                    type="checkbox"
                    id={`checkbox-${option}`}
                    className="d-inline"
                    checked={filters[filterName]?.includes(option)}
                    onChange={(e) => handleFilterChange(option, e.target.checked, filterName)}
                  />
                  <label htmlFor={`checkbox-${option}`} className={`checkbox-label ${filters[filterName]?.includes(option) ? 'checked' : ''}`}>
                    {option}
                  </label>
                </div>
              ))}
              {options.length > 4 && (
                <Button variant="link" className="view-more-btn" onClick={handleModalOpen}>
                  View More
                </Button>
              )}
              <Button
                variant="link"
                className="clear-btn"
                onClick={clearFilterCategory}
              >
                Clear
              </Button>
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
            <div className="checkbox-container" key={option}>
              <Form.Check
                type="checkbox"
                id={`modal-checkbox-${option}`}
                className="d-inline"
                checked={filters[filterName]?.includes(option)}
                onChange={(e) => handleFilterChange(option, e.target.checked, filterName)}
              />
              <label htmlFor={`modal-checkbox-${option}`} className={`checkbox-label ${filters[filterName]?.includes(option) ? 'checked' : ''}`}>
                {option}
              </label>
            </div>
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