import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Accordion, Card } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaUniversity, FaTrain, FaPlane, FaGlobe, FaMapMarkerAlt, FaBed, FaPhone, FaClipboardList, FaCalendar } from 'react-icons/fa';
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
          <p><FaMapMarkerAlt /> <strong>Address:</strong> {college.address}</p>
        </div>
        <div className={styles.mapContainer}>
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerClassName={styles.mapContainer}
              center={position}
              zoom={15}
            >
              <Marker position={position} />
            </GoogleMap>
          </LoadScript>
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
                  <div className="table-responsive">
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
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default CollegeDetail;