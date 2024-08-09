// src/components/UploadCourse.js
import React, { useState } from 'react';
import axios from 'axios';
import "./UploadCourse.css";

const UploadCourse = () => {
  const [courseFile, setCourseFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;  // Access the environment variable

  const onCourseFileChange = (event) => {
    setCourseFile(event.target.files[0]);
  };

  const onCourseSubmit = async (event) => {
    event.preventDefault();
    if (!courseFile) {
      alert('Please select a course file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', courseFile);
    setIsLoading(true);

    try {
      await axios.post(`${API_URL}/dataset/upload-course`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Course file uploaded successfully');
      setIsLoading(false);
    } catch (error) {
      alert('Error uploading course file');
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onCourseSubmit} className="upload-course-container">
        <div className="upload-course-group">
          <label className="upload-course-label" htmlFor="courseFile">Course File</label>
          <input
            className="upload-course-input"
            type="file"
            id="courseFile"
            name="courseFile"
            onChange={onCourseFileChange}
          />
        </div>
        <button className="upload-course-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload Course Details'}
        </button>
      </form>
    </div>
  );
};

export default UploadCourse;
