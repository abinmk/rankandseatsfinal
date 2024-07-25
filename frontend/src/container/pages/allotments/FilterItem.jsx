import React, { useState, useEffect } from 'react';
import { Form, Accordion, Button, Modal, Row, Col } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Allotments.scss';

const FilterItem = ({ title, options = [], filterName, filters, handleFilterChange, eventKey, viewMore, appliedFiltersCount, getFilterParamName }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000); // Set the max range here
  const filterParamName = getFilterParamName(filterName);

  useEffect(() => {
    setSearchTerm('');
  }, [showModal]);

  useEffect(() => {
    if (filters[filterParamName]?.min !== undefined) {
      setMinValue(filters[filterParamName].min);
    }
    if (filters[filterParamName]?.max !== undefined) {
      setMaxValue(filters[filterParamName].max);
    }
  }, [filters, filterParamName]);

  const filteredOptions = Array.isArray(options) ? options.filter(option =>
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

  const handleSliderChange = (values) => {
    const [min, max] = values;
    setMinValue(min);
    setMaxValue(max);
    handleFilterChange({ min, max }, true, filterName);
  };

  const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMinValue(value);
    handleFilterChange({ min: value, max: maxValue }, true, filterName);
  };

  const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMaxValue(value);
    handleFilterChange({ min: minValue, max: value }, true, filterName);
  };

  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          {title} ({appliedFiltersCount})
        </Accordion.Header>
        <Accordion.Body>
          {filterName === 'rank' ? (
            <>
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
              <Slider
                range
                min={1}
                max={10000}
                value={[minValue, maxValue]}
                onChange={handleSliderChange}
              />
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
