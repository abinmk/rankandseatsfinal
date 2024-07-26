import React, { useState, useEffect } from 'react';
import { Form, Accordion, Button, Modal, Row, Col } from 'react-bootstrap';
import Slider from '@mui/material/Slider';

const FilterItem = ({ title, options = {}, filterName, filters, handleFilterChange, handleRangeChange, eventKey, viewMore, appliedFiltersCount, getFilterParamName }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(options.min || 0);
  const [maxValue, setMaxValue] = useState(options.max || 10000);
  const filterParamName = getFilterParamName(filterName);

  useEffect(() => {
    setSearchTerm('');
  }, [showModal]);

  useEffect(() => {
    if (filters[filterParamName]?.min !== undefined) {
      setMinValue(filters[filterParamName].min);
    } else {
      setMinValue(options.min || 0);
    }
    if (filters[filterParamName]?.max !== undefined) {
      setMaxValue(filters[filterParamName].max);
    } else {
      setMaxValue(options.max || 10000);
    }
  }, [filters, filterParamName, options.min, options.max]);

  const isRangeFilter = options && options.min !== undefined && options.max !== undefined;

  const filteredOptions = Array.isArray(options) && typeof options[0] === 'string'
    ? options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  const handleCheckboxChange = (option, checked) => {
    handleFilterChange(option, checked, filterName);
  };

  const clearFilterCategory = () => {
    options.forEach(option => handleFilterChange(option, false, filterName));
  };

  const handleSliderChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
    handleRangeChange(newValue, filterName);
  };

  const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMinValue(value);
    handleRangeChange([value, maxValue], filterName);
  };

  const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMaxValue(value);
    handleRangeChange([minValue, value], filterName);
  };

  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          {title} ({appliedFiltersCount})
        </Accordion.Header>
        <Accordion.Body className='sliderFilter'>
          {isRangeFilter ? (
            <>
              <Slider
                getAriaLabel={() => 'Range'}
                value={[minValue, maxValue]}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                min={options.min}
                max={options.max}
              />
              <Row>
                <Col>
                  <Form.Label>Min:</Form.Label>
                  <Form.Control
                    type="number"
                    value={minValue}
                    onChange={handleMinInputChange}
                  />
                </Col>
                <Col>
                  <Form.Label>Max:</Form.Label>
                  <Form.Control
                    type="number"
                    value={maxValue}
                    onChange={handleMaxInputChange}
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
            </>
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
