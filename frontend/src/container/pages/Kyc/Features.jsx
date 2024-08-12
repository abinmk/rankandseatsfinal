import React from 'react';
import Header from './Header';
import './ContentPageStyles.css'; // Import the shared CSS file

const Features = () => {
  return (
    <>
      <Header />
      <div className="content-page container py-5">
        <h1 className="mb-4 text-center">Our Features</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="feature-box p-4 mb-4 rounded shadow-sm">
              <h3 className="fw-bold">Comprehensive College Database</h3>
              <p>
                Access an extensive database of colleges with detailed information about their courses, facilities, and admission criteria.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box p-4 mb-4 rounded shadow-sm">
              <h3 className="fw-bold">Real-time Seat Allotment Updates</h3>
              <p>
                Stay informed with up-to-the-minute seat allotment updates to help you make timely decisions during the counselling process.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box p-4 mb-4 rounded shadow-sm">
              <h3 className="fw-bold">Advanced Search and Filtering Options</h3>
              <p>
                Easily find colleges and courses that match your preferences using our powerful search and filtering tools.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box p-4 mb-4 rounded shadow-sm">
              <h3 className="fw-bold">Detailed Analytics and Reports</h3>
              <p>
                Gain insights with our detailed analytics and reports, helping you understand trends and make informed choices.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-box p-4 mb-4 rounded shadow-sm">
              <h3 className="fw-bold">User-friendly Interface</h3>
              <p>
                Enjoy a seamless and intuitive user experience designed to make the counselling process as smooth as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
