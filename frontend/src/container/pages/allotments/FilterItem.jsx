import React, { useState, useEffect } from 'react';
import { Form, Accordion, Button, Modal, Row, Col } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import { debounce } from 'lodash';

const FilterItem = ({ title, options = {}, disabled, filterName, filters, handleFilterChange, handleRangeChange, eventKey, viewMore, appliedFiltersCount, getFilterParamName, loading, toggleFilterSection }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(options.min || 0);
  const [maxValue, setMaxValue] = useState(options.max || 10000);
  const filterParamName = getFilterParamName(filterName);

  useEffect(() => {
    setSearchTerm('');
  }, []);

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

  const handleModalClose = () => {
    setShowModal(false);
    toggleFilterSection(true); // Show filter section when modal is closed
  };
  const handleModalOpen = () => {
    setShowModal(true);
    toggleFilterSection(false); // Hide filter section when modal is open
  };

  const handleCheckboxChange = (option, checked) => {
    handleFilterChange(option, checked, filterName);
  };

  const clearFilterCategory = () => {
    options.forEach(option => handleFilterChange(option, false, filterName));
  };

  const handleSliderChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  const debouncedHandleRangeChange = debounce((newValue) => {
    handleRangeChange(newValue, filterName);
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

  const resetFilter = () => {
    setMinValue(options.min || 0);
    setMaxValue(options.max || 10000);
    handleRangeChange([options.min || 0, options.max || 10000], filterName);
  };

  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          {title} ({appliedFiltersCount})
        </Accordion.Header>
     
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

      <Modal show={showModal} onHide={handleModalClose} className='view-more-modal' centered>
  <Modal.Header closeButton style={{ backgroundColor: '#17345c', padding: '15px' }}>
    <Modal.Title style={{ color: 'white', fontWeight: 'bold' }}>{title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form.Control
      disabled={disabled}
      type="text"
      placeholder={`Search ${title} ${searchTerm}`}
      className="filter-search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: '15px', borderRadius: '8px', padding: '12px' }}
    />

    {/* Enhanced list UI */}
    <div className="filter-options-list">
      {filteredOptions.map(option => (
        <div
          key={option}
          className={`filter-option ${filters[filterParamName]?.includes(option) ? 'selected' : ''}`}
          onClick={() => handleCheckboxChange(option, !filters[filterParamName]?.includes(option))}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '10px', borderRadius: '8px', backgroundColor: '#f8f9fa', marginBottom: '8px' }}
        >
          <Form.Check
            disabled={disabled}
            type="checkbox"
            id={`checkbox-${option}`}
            checked={filters[filterParamName]?.includes(option)}
            onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            onClick={(e) => e.stopPropagation()} // Prevent double event when clicking checkbox
          />
          <label
            htmlFor={`checkbox-${option}`}
            onClick={(e) => e.stopPropagation()}
            style={{ marginLeft: '10px', cursor: 'pointer', fontWeight: filters[filterParamName]?.includes(option) ? 'bold' : 'normal', color: filters[filterParamName]?.includes(option) ? '#17345c' : 'black' }}
          >
            {option}
          </label>
        </div>
      ))}
    </div>

    <Button variant="link" disabled={disabled} className="clear-category-btn" onClick={clearFilterCategory}>
      Clear All
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