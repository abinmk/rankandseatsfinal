import React, { useState } from 'react';
import './UploadSeats.css';
import axiosInstance from '../utils/axiosInstance';

const UploadAdmittedStudents = () => {
  const [file, setFile] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL; // Access the environment variable
  const [isLoading, setIsLoading] = useState(false);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsLoading(true);
      await axiosInstance.post(`${API_URL}/dataset/upload-admittedstudents`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Admitted Student data uploaded successfully');
      setFile(null);
      setIsLoading(false);
    } catch (error) {
      console.error('Error uploading  Admitted students data', error);
      alert('Error uploading Admitted Students data');
      setIsLoading(false); // Reset loading state in case of error
    }
  };

  return (
    <div className="upload-seats-container">
      <h3>Upload Admitted Students</h3>
      <div className="upload-seats-group">
        <label className="upload-seats-label" htmlFor="file">Select File</label>
        <input
          className="upload-seats-input"
          type="file"
          id="file"
          onChange={onFileChange}
        />
      </div>
      <button className="generate-results-button" type="button" onClick={onUpload} disabled={isLoading}>
        {isLoading ? 'Uploading Admitted students...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadAdmittedStudents;