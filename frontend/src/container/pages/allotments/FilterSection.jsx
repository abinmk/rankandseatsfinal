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

  const handleFilterChange = (value, checked, filterName) => {
    setFilters(prevFilters => {
      const prevValues = prevFilters[filterName] || [];
      const newValues = checked ? [...prevValues, value] : prevValues.filter(v => v !== value);
      return { ...prevFilters, [filterName]: newValues };
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
            title="Institute"
            options={limitedOptions(getUniqueOptions('allottedInstitute'))}
            filterName="allottedInstitute"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="2"
            title="Institute Type"
            options={limitedOptions(getUniqueOptions('instituteType'))}
            filterName="instituteType"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="3"
            title="University"
            options={limitedOptions(getUniqueOptions('universityName'))}
            filterName="universityName"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="4"
            title="Course"
            options={limitedOptions(getUniqueOptions('course'))}
            filterName="course"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="5"
            title="Course Type"
            options={limitedOptions(getUniqueOptions('courseType'))}
            filterName="courseType"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="6"
            title="Course Category"
            options={limitedOptions(getUniqueOptions('courseCategory'))}
            filterName="courseCategory"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="7"
            title="Degree Type"
            options={limitedOptions(getUniqueOptions('degreeType'))}
            filterName="degreeType"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="8"
            title="Course Fees"
            options={limitedOptions(getUniqueOptions('courseFees'))}
            filterName="courseFees"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="9"
            title="Quota"
            options={limitedOptions(getUniqueOptions('allottedQuota'))}
            filterName="allottedQuota"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="10"
            title="Year"
            options={limitedOptions(getUniqueOptions('year'))}
            filterName="year"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="11"
            title="Round"
            options={limitedOptions(getUniqueOptions('round'))}
            filterName="round"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
          <FilterItem
            eventKey="12"
            title="Category"
            options={limitedOptions(getUniqueOptions('allottedCategory'))}
            filterName="allottedCategory"
            filters={filters}
            handleFilterChange={handleFilterChange}
            handleModalShow={handleModalShow}
          />
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
        <Form.Group controlId="filterBond" className="filter-item">
          <Form.Label className="filter-label">Bond (From - to)</Form.Label>
          <div className="range-inputs">
            <Form.Control
              type="number"
              placeholder="Min"
              value={filters.bondFrom || ''}
              onChange={(e) => handleFilterChange(e, 'bondFrom')}
            />
            <Form.Control
              type="number"
              placeholder="Max"
              value={filters.bondTo || ''}
              onChange={(e) => handleFilterChange(e, 'bondTo')}
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
              onChange={(e) => handleFilterChange(e, 'bondPenaltyFrom')}
            />
            <Form.Control
              type="number"
              placeholder="Max"
              value={filters.bondPenaltyTo || ''}
              onChange={(e) => handleFilterChange(e, 'bondPenaltyTo')}
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
