import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Accordion } from 'react-bootstrap';
import FilterItem from './FilterItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilterSection.scss';

const FilterSection = ({ showFilters, toggleFilters, filters, setFilters, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalFilterName, setModalFilterName] = useState('');
  const [filterCount, setFilterCount] = useState(0);

  useEffect(() => {
    updateFilterCount();
  }, [filters]);

  const handleFilterChange = (e, filterName) => {
    const { value, checked, type } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: type === 'checkbox' ? checked : value,
    }));
  };

  const updateFilterCount = () => {
    const count = Object.values(filters).filter(value => value).length;
    setFilterCount(count);
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = (filterName) => {
    setModalFilterName(filterName);
    setShowModal(true);
  };

  const getUniqueOptions = (key) => {
    return Array.from(new Set(data.map(item => item[key])));
  };

  const limitedOptions = (options) => {
    return options.slice(0, 6);
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
    <FilterItem
      eventKey="0"
      title="State"
      options={limitedOptions(getUniqueOptions('state'))}
      filterName="state"
      filters={filters}
      handleFilterChange={handleFilterChange}
      handleModalShow={handleModalShow}
    />
    <FilterItem
      eventKey="1"
      title="Institute (Name)"
      options={limitedOptions(getUniqueOptions('instituteName'))}
      filterName="instituteName"
      filters={filters}
      handleFilterChange={handleFilterChange}
      handleModalShow={handleModalShow}
    />
    {/* Add more existing filters here as needed */}
  </Accordion>
  <Form.Group controlId="filterRank" className="filter-item">
    <Form.Label className="filter-label">Rank</Form.Label>
    <Form.Control
      type="range"
      className="filter-control"
      min="0"
      max="1000"
      value={filters.rank || 0}
      onChange={(e) => handleFilterChange(e, 'rank')}
    />
    <div className="range-inputs">
      <Form.Control
        type="number"
        min="0"
        max="1000"
        value={filters.rank || 0}
        onChange={(e) => handleFilterChange(e, 'rank')}
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
      onChange={(e) => handleFilterChange(e, 'beds')}
    />
    <div className="range-inputs">
      <Form.Control
        type="number"
        min="0"
        max="1000"
        value={filters.beds || 0}
        onChange={(e) => handleFilterChange(e, 'beds')}
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
              options={getUniqueOptions(modalFilterName)}
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
