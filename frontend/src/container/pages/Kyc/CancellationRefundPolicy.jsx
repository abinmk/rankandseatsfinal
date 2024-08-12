import React from 'react';
import Header from './Header';
import './ContentPageStyles.css';  // Import the shared CSS file

const CancellationRefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="content-page container py-5 d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4 text-center">Cancellation & Refund Policy</h1>
          <div className="content text-center">
            <p className="lead">
              All digital product purchases made through Rank and Seats Platform are considered final. As a general rule, cancellation or refund requests by the buyer will NOT be accepted once the confirmation for their order is communicated to the buyer.
            </p>
            <p className="lead">
              Rank and Seats reserves the sole right to decide, at its own discretion, to consider any cancellation/refund request on a case-by-case basis. The company is under no obligation to provide a refund except where it deems appropriate.
            </p>
            <h2 className="mt-4">Cancellation by the Company</h2>
            <p className="lead">
              The Company reserves the right to cancel any order without prior notification to the Buyer, which may be due to a technical fault, at the request of Buyer or Seller, or circumstances beyond the control of the Company, or as required by law. Under such circumstances, the refund of the amount paid will be processed within 14 business days.
            </p>
            <h2 className="mt-4">No Refund Policy</h2>
            <p className="lead">
              Once a subscription plan is chosen and payment is made against the chosen plan, there will be no refund. Users are advised to thoroughly check the subscription plans and exam categories before making a payment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancellationRefundPolicy;
