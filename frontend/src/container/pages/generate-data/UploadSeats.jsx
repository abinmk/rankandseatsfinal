import React, { useState } from 'react';
import axios from 'axios';
import './UploadSeats.css';

const UploadSeats = () => {
  const [file, setFile] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL; // Access the environment variable

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
      await axios.post(`${API_URL}/dataset/upload-seats`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Seats data uploaded successfully');
      setFile(null);
    } catch (error) {
      console.error('Error uploading seats data', error);
      alert('Error uploading seats data');
    }
  };

  return (
    <div className="upload-seats-container">
      <h3>Upload Seats Data</h3>
      <div className="upload-seats-group">
        <label className="upload-seats-label" htmlFor="file">Select File</label>
        <input
          className="upload-seats-input"
          type="file"
          id="file"
          onChange={onFileChange}
        />
      </div>
      <button className="upload-seats-button" onClick={onUpload}>
        Upload
      </button>
    </div>
  );
};

export default UploadSeats;
