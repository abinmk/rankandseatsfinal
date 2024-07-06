// src/components/UploadRound.js
import React, { useState } from 'react';
import axios from 'axios';
import "./UploadRound.css";

const UploadRound = () => {
  const [file, setFile] = useState(null);
  const [examName, setExamName] = useState('');
  const [round, setRound] = useState('');
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onExamNameChange = (event) => {
    setExamName(event.target.value);
  };

  const onRoundChange = (event) => {
    setRound(event.target.value);
  };

  const onYearChange = (event) => {
    setYear(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!file || !examName || !round || !year) {
      alert('Please fill all fields and select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('examName', examName);
    formData.append('round', round);
    formData.append('year', year);
    setIsLoading(true);

    try {
      await axios.post('http://localhost:5001/api/upload-round', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      setIsLoading(false);
    } catch (error) {
      alert('Error uploading file');
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="upload-round-container">
        <div className="upload-round-group">
          <label className="upload-round-label" htmlFor="examName">Exam Name</label>
          <select className="upload-round-select" id="examName" name="examName" value={examName} onChange={onExamNameChange}>
            <option value="">Select Exam</option>
            <option value="NEET_PG_ALL_INDIA">NEET_PG_ALL_INDIA</option>
            <option value="NEET_PG_STATE">NEET_PG_STATE</option>
            <option value="INI_CET">INI_CET</option>
            <option value="NEET_SS">NEET_SS</option>
          </select>
        </div>
        <div className="upload-round-group">
          <label className="upload-round-label" htmlFor="round">Round</label>
          <input className="upload-round-input" type="text" id="round" name="round" value={round} onChange={onRoundChange} />
        </div>
        <div className="upload-round-group">
          <label className="upload-round-label" htmlFor="year">Year</label>
          <select className="upload-round-select" id="year" name="year" value={year} onChange={onYearChange}>
            <option value="">Select Year</option>
            {Array.from({ length: 16 }, (_, i) => 2015 + i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="upload-round-group">
          <input className="upload-round-input" type="file" id="file" name="file" onChange={onFileChange} />
        </div>
        <button className="upload-round-button" type="submit" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default UploadRound;
