import React from 'react';
import Header from './Header';
import './ContentPageStyles.css';  // Import the shared CSS file

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="content-page container py-5 d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4 text-center">About Us</h1>
          <div className="content text-center">
            <p className="lead">
              After the exams, once you step into the process of NEET counselling, the phase of dilemma begins. Choosing the right branch, college, and even the state can become overwhelming. Until now, there wasn't a single platform that addressed these concerns by consolidating all the necessary information for NEET aspirants in one place.
            </p>
            <p className="lead">
              At Rank and Seats, we understand the challenges you’re facing because we’ve been in your shoes. Years ago, we went through the same uncertainty, struggling to make informed decisions based on fragmented data.
            </p>
            <p className="lead">
              Our mission is to eliminate this confusion. We’ve gathered comprehensive data and insights to present them in a structured, user-friendly manner. Whether it’s understanding your rank, selecting a college, or navigating the intricacies of the counselling process, Rank and Seats is here to make the journey smoother for all aspirants.
            </p>
            <p className="lead mt-4">
              Let us guide you through your NEET counselling journey with the confidence that comes from making informed decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
