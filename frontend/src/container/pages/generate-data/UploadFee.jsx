import React, { useState } from 'react';
import axios from 'axios';
import './UploadFee.css';

const UploadFee = () => {
  const [file, setFile] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;  // Access the environment variable

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
      await axios.post(`${API_URL}/dataset/upload-fee`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Fee details uploaded successfully');
      setFile(null);
    } catch (error) {
      console.error('Error uploading fee details', error);
      alert('Error uploading fee details');
    }
  };

  return (
    <div className="upload-fee-container">
      <h3>Upload Fee Details</h3>
      <div className="upload-fee-group">
        <label className="upload-fee-label" htmlFor="file">Select File</label>
        <input className="upload-fee-input" type="file" id="file" onChange={onFileChange} />
      </div>
      <button className="upload-fee-button" onClick={onUpload}>Upload</button>
    </div>
  );
};

export default UploadFee;
