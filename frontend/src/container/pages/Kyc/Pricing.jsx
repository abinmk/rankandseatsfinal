import React from 'react';
import Header from './Header';
import './ContentPageStyles.css';  // Import the shared CSS file

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="content-page container py-5">
        <h1 className="mb-4 text-center">Pricing</h1>
        <p className="lead text-center mb-5">
          Choose the best plan that suits your needs. Our affordable plan is designed specifically for NEET PG aspirants.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="pricing-card p-4 mb-4 rounded shadow-sm text-center">
              <h3 className="fw-bold">NEET PG Aspirants Plan</h3>
              <p className="price-display my-3">
                ₹999 <small className="text-muted">+ GST / Per Year</small>
              </p>
              <p className="text-muted">
                Get full access to all features tailored for NEET PG aspirants.
              </p>
              <p className="text-muted mt-3">
                <strong>Note:</strong> Once a subscription plan is chosen and payment is made, there will be no refund.
              </p>
              <button className="btn btn-primary mt-4">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
