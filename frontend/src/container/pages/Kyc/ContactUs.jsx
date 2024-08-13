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
  <a href="https://facebook.com/rankandseats" className="text-dark mx-2" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={32} />
  </a>
  <a href="https://youtube.com/rankandseats" className="text-dark mx-2" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
    <FaYoutube size={32} />
  </a>
  <a href="https://telegram.org/rankandseats" className="text-dark mx-2" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
    <FaTelegram size={32} />
  </a>
</div>

            <p className="lead text-center">
            Rankseats Solutions LLP<br />
            C/o Kayalody Arcade,<br />
            Thettamala Road<br/>
            Vellamunda, Wayanad<br/>
            Kerala-670731<br/>
              Contact : +91 80 75 91 92 24
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
