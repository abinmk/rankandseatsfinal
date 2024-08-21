import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Accordion, Card, Badge } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaUniversity, FaTrain, FaPlane, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './CollegeDetail.module.css';

const CollegeDetail = () => {
  const { collegeName } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/colleges/${encodeURIComponent(collegeName)}`);
        setCollege(response.data);
        
        if (response.data.latitude && response.data.longitude) {
          setPosition({ lat: response.data.latitude, lng: response.data.longitude });
        } else {
          // Fallback coordinates
          setPosition({ lat: 26.9124, lng: 75.7873 });
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
        <div className={styles.leftSection}>
          <div className={styles.collegeHeader}>
            <div className={styles.collegeInfo}>
              <h1>{college.collegeName}</h1>
              <p>{college.state} | Established: {college.yearOfEstablishment}</p>
              <p><FaUniversity /> <strong>No. of Beds:</strong> {college.totalHospitalBeds}</p>
              <p><FaMapMarkerAlt /> <strong>Total Courses:</strong> {college.courses.length}</p>
            </div>
          </div>

          {/* General Information */}
          <div className={styles.generalDetails}>
            <Card className="mb-3">
              <Card.Header as="h5">General Information</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p><FaUniversity /> <strong>University Name:</strong> {college.universityName}</p>
                  <p><FaTrain /> <strong>Nearest Railway Station:</strong> {college.nearestRailwayStation} ({college.distanceFromRailwayStation} km)</p>
                  <p><FaPlane /> <strong>Nearest Airport:</strong> {college.nearestAirport} ({college.distanceFromAirport} km)</p>
                  <p><FaGlobe /> <strong>Website:</strong> <a href={college.website} target="_blank" rel="noopener noreferrer">{college.website}</a></p>
                  <p><strong>Location Map:</strong> <a href={college.locationMapLink} target="_blank" rel="noopener noreferrer">View on Map</a></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className={styles.rightSection}>
          <h2>Location</h2>
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerClassName={styles.mapContainer}
              center={position}
              zoom={15}
              options={{
                disableDefaultUI: true, // Hide default UI buttons
                styles: [
                  {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [{ "visibility": "off" }],
                  },
                ], // Minimalist map style
              }}
            >
              <Marker position={position} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

      {/* Courses Section */}
      <div className={styles.coursesDetails}>
        <h2>Courses Offered <Badge bg="primary">{college.courses.length}</Badge></h2>
        {college.courses && college.courses.length > 0 ? (
          <div className={styles.coursesList}>
            <Accordion defaultActiveKey="0">
              {college.courses.map((course, courseIndex) => (
                <Accordion.Item eventKey={courseIndex.toString()} key={courseIndex} className={styles.courseBox}>
                  <Accordion.Header>{course.courseName}</Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.courseInfo}>
                      <p><strong>Number of Quotas:</strong> {course.quotas.length}</p>
                      <table className={`table ${styles.smallFont} table-striped table-bordered`}>
                        <thead className={styles.tableHeader}>
                          <tr>
                            <th>Quota</th>
                            <th>Course Fee</th>
                            <th>NRI Fee</th>
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
                              <td>₹{quota.courseFee}</td>
                              <td>₹{quota.nriFee}</td>
                              <td>₹{quota.stipendYear1}</td>
                              <td>₹{quota.stipendYear2}</td>
                              <td>₹{quota.stipendYear3}</td>
                              <td>{quota.bondYear} years</td>
                              <td>₹{quota.bondPenality}</td>
                              <td>₹{quota.seatLeavingPenality}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default CollegeDetail;
