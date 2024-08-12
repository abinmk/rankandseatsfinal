import React from 'react';
import Header from './Header';
import { FaFacebook, FaYoutube, FaTelegram } from 'react-icons/fa';
import './ContentPageStyles.css';  // Import the shared CSS file

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="content-page container py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1 className="mb-4 text-center">Contact Us</h1>
            <p className="lead text-center">
              Write to us at <a href="mailto:mail@rankandseats.com" className="text-primary">mail@rankandseats.com</a>
            </p>
            <div className="text-center my-4">
              <a href="https://facebook.com" className="text-dark mx-2" aria-label="Facebook"><FaFacebook size={32} /></a>
              <a href="https://youtube.com" className="text-dark mx-2" aria-label="YouTube"><FaYoutube size={32} /></a>
              <a href="https://telegram.org" className="text-dark mx-2" aria-label="Telegram"><FaTelegram size={32} /></a>
            </div>
            <p className="lead text-center">
              Rank and Seats<br />
              1st Floor, KINFRA Techno Industrial Park,<br />
              Malappuram, Kerala – 673634
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
