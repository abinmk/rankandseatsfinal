import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Accordion } from 'react-bootstrap';
import FilterItem from './FilterItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilterSection.scss';

const FilterSection = ({ showFilters, toggleFilters, filters, setFilters, filterOptions, getFilterParamName }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalFilterName, setModalFilterName] = useState('');
  const [filterCount, setFilterCount] = useState(0);

  useEffect(() => {
    updateFilterCount();
  }, [filters]);

  const handleFilterChange = (value, checked, filterName) => {
    const filterParamName = getFilterParamName(filterName);
    setFilters(prevFilters => {
      const prevValues = prevFilters[filterParamName] || [];
      const newValues = checked ? [...prevValues, value] : prevValues.filter(v => v !== value);
      return { ...prevFilters, [filterParamName]: newValues };
    });
  };

  const updateFilterCount = () => {
    const count = Object.values(filters).flat().filter(value => value).length;
    setFilterCount(count);
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = (filterName) => {
    setModalFilterName(filterName);
    setShowModal(true);
  };

  return (
    <div className={`filters-section ${showFilters ? 'show' : 'hide'}`}>
      <div className="filters-header">
        <span>Filters ({filterCount} applied)</span>
        <a className="close-btn" onClick={toggleFilters}>
          X
        </a>
      </div>
      <Form>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          {Object.keys(filterOptions).map((filterName, index) => (
            <FilterItem
              key={filterName}
              eventKey={index.toString()}
              title={filterName.charAt(0).toUpperCase() + filterName.slice(1).replace(/([A-Z])/g, ' $1')}
              options={filterOptions[filterName]} // Show all options
              filterName={filterName}
              filters={filters}
              handleFilterChange={handleFilterChange}
              handleModalShow={handleModalShow}
            />
          ))}
        </Accordion>
        <Form.Group controlId="filterRank" className="filter-item">
          <Form.Label className="filter-label">Rank</Form.Label>
          <Form.Control
            type="range"
            className="filter-control"
            min="0"
            max="1000"
            value={filters.rank || 0}
            onChange={(e) => handleFilterChange(e.target.value, true, 'rank')}
          />
          <div className="range-inputs">
            <Form.Control
              type="number"
              min="0"
              max="1000"
              value={filters.rank || 0}
              onChange={(e) => handleFilterChange(e.target.value, true, 'rank')}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="filterBond" className="filter-item">
          <Form.Label className="filter-label">Bond (From - to)</Form.Label>
          <div className="range-inputs">
            <Form.Control
              type="number"
              placeholder="Min"
              value={filters.bondFrom || ''}
              onChange={(e) => handleFilterChange(e.target.value, true, 'bondFrom')}
            />
            <Form.Control
              type="number"
              placeholder="Max"
              value={filters.bondTo || ''}
              onChange={(e) => handleFilterChange(e.target.value, true, 'bondTo')}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="filterBondPenalty" className="filter-item">
          <Form.Label className="filter-label">Bond Penalty (From - to)</Form.Label>
          <div className="range-inputs">
            <Form.Control
              type="number"
              placeholder="Min"
              value={filters.bondPenaltyFrom || ''}
              onChange={(e) => handleFilterChange(e.target.value, true, 'bondPenaltyFrom')}
            />
            <Form.Control
              type="number"
              placeholder="Max"
              value={filters.bondPenaltyTo || ''}
              onChange={(e) => handleFilterChange(e.target.value, true, 'bondPenaltyTo')}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="filterBeds" className="filter-item">
          <Form.Label className="filter-label">Beds (No. of hospital beds)</Form.Label>
          <Form.Control
            type="range"
            className="filter-control"
            min="0"
            max="1000"
            value={filters.beds || 0}
            onChange={(e) => handleFilterChange(e.target.value, true, 'beds')}
          />
          <div className="range-inputs">
            <Form.Control
              type="number"
              min="0"
              max="1000"
              value={filters.beds || 0}
              onChange={(e) => handleFilterChange(e.target.value, true, 'beds')}
            />
          </div>
        </Form.Group>
      </Form>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalFilterName && (
            <FilterItem
              title={modalFilterName}
              options={filterOptions[modalFilterName]}
              filterName={modalFilterName}
              filters={filters}
              handleFilterChange={handleFilterChange}
              isModal={true}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FilterSection;
