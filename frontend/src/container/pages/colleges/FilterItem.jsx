import React, { useState, useEffect, useContext } from 'react';
import { Form, Accordion, Button, Modal, Row, Col } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import { debounce } from 'lodash';
import axios from 'axios';
import CustomPopup from '../custom-popup/custom-popup-filter';
import { UserContext } from '../../../contexts/UserContext';

const FilterItem = ({ title, options = {},disabled, filterName, filters, handleFilterChange, handleRangeChange, eventKey, viewMore, appliedFiltersCount, getFilterParamName, loading }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [minValue, setMinValue] = useState(options.min || 0);
  const [maxValue, setMaxValue] = useState(options.max || 10000);
  const filterParamName = getFilterParamName(filterName);
  const { user } = useContext(UserContext);

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
  const handlePopupClose = () => setShowPaymentPopup(false);

  const checkSubscription = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/payment/check-subscription`, { userId: user._id });
      setSubscriptionStatus(response.data.status === 'paid');
      return response.data.status === 'paid';
    } catch (error) {
      console.error('Error checking subscription:', error);
      return false;
    }
  };

  const handlePayment = () => {
    // Redirect to the payment page or trigger the payment process
    window.location.href = '/payment-page'; // Example, replace with actual payment process
  };

  const handleCheckboxChange = async (option, checked) => {
    const isSubscribed = await checkSubscription();
    if (!isSubscribed) {
      setShowPaymentPopup(true);
      return;
    }
    handleFilterChange(option, checked, filterName);
  };

  const clearFilterCategory = async () => {
    const isSubscribed = await checkSubscription();
    if (!isSubscribed) {
      setShowPaymentPopup(true);
      return;
    }
    options.forEach(option => handleFilterChange(option, false, filterName));
  };

  const handleSliderChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  const debouncedHandleRangeChange = debounce((newValue) => {
    handleRangeChange(newValue, filterName);
  }, 300);

  const handleSliderChangeCommitted = async (event, newValue) => {
    const isSubscribed = await checkSubscription();
    if (!isSubscribed) {
      setShowPaymentPopup(true);
      return;
    }
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

  const resetFilter = async () => {
    const isSubscribed = await checkSubscription();
    if (!isSubscribed) {
      setShowPaymentPopup(true);
      return;
    }
    setMinValue(options.min || 0);
    setMaxValue(options.max || 10000);
    handleRangeChange([options.min || 0, options.max || 10000], filterName);
  };

  return (
    <>
       {/* <CustomPopup 
        show={showPaymentPopup} 
        handleClose={handlePopupClose} 
        title="Subscription Required" 
        message="You need to subscribe to access these filters. Please complete your payment to proceed."
        onPay={handlePayment} // Pass the payment handler
        subscriptionStatus={subscriptionStatus} // Pass subscription status
      /> */}
      <Accordion.Item eventKey={eventKey} disabled={disabled}>
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

      {/* Custom Popup for Payment */}
   
    </>
  );
};

export default FilterItem;
