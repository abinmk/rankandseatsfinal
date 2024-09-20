import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyles.css';  // Assuming you have a specific CSS file for the header
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // This includes Popper.js required for dropdowns

const Header = () => {
  return (
    <header className="header py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Rank and Seats" height="50" />
        </Link>
        <nav>
          <ul className="list-unstyled d-flex mb-0">
            <li className="ms-3">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="ms-3">
              <Link to="/about-us" className="nav-link">About Us</Link>
            </li>
            <li className="ms-3">
              <Link to="/contact-us" className="nav-link">Contact Us</Link>
            </li>
            <li className="ms-3">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>
            <li className="ms-3">
              <Link to="/features" className="nav-link">Features</Link>
            </li>
            <li className="ms-3 dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="infoDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Info
              </a>
              <ul className="dropdown-menu" aria-labelledby="infoDropdown">
                <li>
                  <Link to="/privacy-policy" className="dropdown-item">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="dropdown-item">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/cancellation-refund-policy" className="dropdown-item">Cancellation/Refund Policy</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
