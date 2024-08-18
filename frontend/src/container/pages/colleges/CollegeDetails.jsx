import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CollegeDetail = () => {
  const { collegeId } = useParams();
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/college/${collegeId}`);
        setCollege(response.data);
      } catch (error) {
        console.error('Error fetching college details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeDetails();
  }, [collegeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!college) {
    return <div>No college details found.</div>;
  }

  return (
    <div>
      <h1>{college.collegeName}</h1>
      <p><strong>Course Name:</strong> {college.courseName}</p>
      <p><strong>Quota:</strong> {college.quota}</p>
      <p><strong>Category:</strong> {college.allottedCategory}</p>
      <p><strong>State:</strong> {college.state}</p>
      <p><strong>University Name:</strong> {college.universityName}</p>
      <p><strong>Institute Type:</strong> {college.instituteType}</p>
      {/* Add other college details here */}
    </div>
  );
};

export default CollegeDetail;
