import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GoogleMap, useJsApiLoader, Marker,LoadScript } from '@react-google-maps/api';
import { Accordion, Card } from 'react-bootstrap';
import { FaUniversity, FaTrain, FaPlane, FaGlobe, FaMapMarkerAlt, FaBed, FaPhone, FaClipboardList, FaCalendar } from 'react-icons/fa';
import styles from './CollegeDetail.module.css';
import axiosInstance from '../utils/axiosInstance';


const expandShortUrl = async (shortUrl) => {
  try {
    // API request to unshorten.me
    const response = await axios.get(`https://unshorten.me/json/${encodeURIComponent(shortUrl)}`);
    
    // Check if the response has a resolved URL
    if (response.data && response.data.resolved_url) {
      console.log("Expanded URL:", response.data.resolved_url);
      return response.data.resolved_url;
    } else {
      console.log("No resolved URL found.");
      return null;
    }
  } catch (error) {
    console.error('Error expanding short URL:', error);
    return null;
  }
};

// Function to extract coordinates from Google Maps URL
// Improved extraction logic with better logging
const extractCoordinatesFromUrl = (url) => {
  console.log("Expanded URL: ", url); // Log the expanded URL
  const regex = /@([-0-9.]+),([-0-9.]+),/;
  const match = url.match(regex);
  
  if (match) {
    const lat = parseFloat(match[1]);
    const lng = parseFloat(match[2]);
    console.log("Extracted Coordinates: ", { lat, lng }); // Log the extracted coordinates
    return { lat, lng };
  } else {
    console.log("No coordinates found in the URL.");
    return { lat: 26.9124, lng: 75.7873 }; // Default coordinates
  }
};

const CollegeDetail = () => {
  const { collegeName } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  // Using useJsApiLoader from @react-google-maps/api for optimized loading
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Replace with your actual key
    libraries: ['places'],
  });

  const handleMapClick = () => {
    const googleMapsUrl =  college.locationMapLink;
    window.open(googleMapsUrl, '_blank'); // Open Google Maps in a new tab
  };



  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        const response = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/colleges/${encodeURIComponent(collegeName)}`);
        setCollege(response.data);
        
          const mapLink = response.data.locationMapLink; // Example short URL
          
          // Wait for the expanded URL
          const expandedUrl = await expandShortUrl(mapLink);
          
          if (expandedUrl) {
            // Extract coordinates from the expanded URL
            const coords = extractCoordinatesFromUrl(expandedUrl);
            console.log(coords);
            setPosition(coords);
          }
      } catch (error) {
        console.error('Error fetching college details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeDetails();
  }, [collegeName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!college) {
    return <div>No college details found.</div>;
  }

  return (
    <div className={styles.collegeDetailContainer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.collegeHeader}>
          <div>
            <p className={styles.headerCollegeName}>{college.collegeName}</p>
            <div className={styles.badges}>
              <span className={styles.badgeCustom}>Government Institute</span>
              <span className={styles.badgeCustom}>State: {college.state}</span>
            </div>
          </div>
          <div>
            <p><FaBed /> No. of Beds: <span className={styles.seatsCount}>{college.totalHospitalBeds}</span></p>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className={styles.detailSection}>
        <div className={styles.detailsColumn}>
          <p><FaUniversity /> <strong>University:</strong> {college.universityName}</p>
          <p><FaCalendar /> <strong>Established:</strong> {college.yearOfEstablishment}</p>
          <p><FaClipboardList /> <strong>Total Courses:</strong> <span className={styles.seatsCount}>{college.courses.length}</span></p>
          <p><FaTrain /> <strong>Nearest Railway Station:</strong> {college.nearestRailwayStation} ({college.distanceFromRailwayStation} km)</p>
          <p><FaPlane /> <strong>Nearest Airport:</strong> {college.nearestAirport} ({college.distanceFromAirport} km)</p>
          <p><FaPhone /> <strong>Phone Number:</strong> {college.phoneNumber}</p>
          <p><FaGlobe /> <strong>Website:</strong> <a href={college.website} target="_blank" rel="noopener noreferrer">{college.website}</a></p>
          <p><FaMapMarkerAlt /> <strong>Address:</strong> {college.collegeAddress}</p>
        </div>
        <div className={styles.mapContainer}>
          <GoogleMap
            mapContainerClassName={styles.mapContainer}
            center={position}
            zoom={16}
            onClick={handleMapClick}
          >
            <Marker position={position} />
          </GoogleMap>
        </div>
      </div>

      {/* Courses Section */}
      <div className={styles.coursesSection}>
        <h2>Courses Offered</h2>
        {college.courses && college.courses.length > 0 ? (
          <Accordion defaultActiveKey="0">
            {college.courses.map((course, courseIndex) => (
              <Accordion.Item eventKey={courseIndex.toString()} key={courseIndex}>
                <Accordion.Header>{course.courseName}</Accordion.Header>
                <Accordion.Body>
                <div className={styles.totalSeats}>Total seats : {course.totalSeatsInCourse}</div>
                <br></br>
                  <div className="table-responsive">
                    <table className={`table ${styles.smallFont} table-striped table-bordered`}>
                      <thead className={styles.tableHeader}>
                        <tr>
                          <th>Quota</th>
                          <th>Course Fee</th>
                          <th>Stipend Year 1</th>
                          <th>Stipend Year 2</th>
                          <th>Stipend Year 3</th>
                          <th>Bond Year</th>
                          <th>Bond Penalty</th>
                          <th>Seat Leaving Penalty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {course.quotas.map((quota, quotaIndex) => (
                        <tr key={quotaIndex}>
                        <td>{quota.quota}</td>
                        <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quota.courseFee)}</td>
                        <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quota.stipendYear1)}</td>
                        <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quota.stipendYear2)}</td>
                        <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quota.stipendYear3)}</td>
                        <td>{quota.bondYear} years</td>
                        <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quota.bondPenality)}</td>
                        <td>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quota.seatLeavingPenality)}</td>
                      </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default CollegeDetail;