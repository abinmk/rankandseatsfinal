import React, { useState } from 'react';
import axios from 'axios';
import "./UploadCollege.css";

const UploadCollege = () => {
  const [collegeFile, setCollegeFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;  // Access the environment variable

  const onCollegeFileChange = (event) => {
    setCollegeFile(event.target.files[0]);
  };

  const onCollegeSubmit = async (event) => {
    event.preventDefault();
    if (!collegeFile) {
      alert('Please select a college file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', collegeFile);
    setIsLoading(true);

    try {
      await axios.post(`${API_URL}/dataset/upload-college`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('College file uploaded successfully');
      setIsLoading(false);
    } catch (error) {
      alert('Error uploading college file');
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="upload-college-container">
      <form onSubmit={onCollegeSubmit}>
        <div className="upload-college-group">
          <label className="upload-college-label" htmlFor="collegeFile">College File</label>
          <input
            className="upload-college-input"
            type="file"
            id="collegeFile"
            name="collegeFile"
            onChange={onCollegeFileChange}
          />
        </div>
        <button className="upload-college-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload College Details'}
        </button>
      </form>
    </div>
  );
};

export default UploadCollege;
