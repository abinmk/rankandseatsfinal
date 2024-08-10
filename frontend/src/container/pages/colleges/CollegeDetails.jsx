// src/components/CollegeDetail.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const CollegeDetail = () => {
  const { state } = useLocation();
  const college = state?.college; // Access the college data passed via state

  if (!college) return <div>No college data found.</div>;

  return (
    <div className="college-detail-container">
      <h1>{college.collegeName}</h1>
      <p><strong>University:</strong> {college.universityName}</p>
      <p><strong>State:</strong> {college.state}</p>
      <p><strong>Institute Type:</strong> {college.instituteType}</p>
      <p><strong>Year of Establishment:</strong> {college.yearOfEstablishment}</p>
      <p><strong>Total Hospital Beds:</strong> {college.totalHospitalBeds}</p>
      <p><strong>Nearest Railway Station:</strong> {college.nearestRailwayStation}</p>
      <p><strong>Distance from Railway Station:</strong> {college.distanceFromRailwayStation}</p>
      <p><strong>Nearest Airport:</strong> {college.nearestAirport}</p>
      <p><strong>Distance from Airport:</strong> {college.distanceFromAirport}</p>
      <div className="college-map">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${college.lat},${college.lon}`}
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default CollegeDetail;
