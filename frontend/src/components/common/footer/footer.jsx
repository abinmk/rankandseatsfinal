import React, { Fragment } from "react";
import "./footer.scss"; // Import the custom CSS file for additional styling

const Footer = ({ bg }) => {
  const bgClass = bg === "dark" ? "bg-dark" : "bg-light"; // Determine the background class based on the bg prop
  const footerClass = bg === "dark" ? "footer-dark" : "footer-light";
  return (
    <Fragment>
      <footer className={`${footerClass} mt-auto py-3 ${bgClass}`}>
        <div className="container d-flex flex-column align-items-center">
          <span className="text-muted small">
            &copy; <span id="year">2024</span> <span className="highlighted-text">Rank & Seats</span>. All Rights Reserved.
          </span>
          <span className="text-muted small">
            Designed by <a href="https://www.sysbitech.com/" target="_blank" rel="noopener noreferrer" className="designer-link">Sysbreeze</a>
          </span>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;