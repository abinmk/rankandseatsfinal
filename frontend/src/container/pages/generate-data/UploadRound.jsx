import React, { useState } from 'react';
import axios from 'axios';
import "./UploadRound.css";

const UploadRound = () => {
  const [file, setFile] = useState(null);
  const [exam, setExam] = useState('');
  const [examType, setExamType] = useState('');
  const [round, setRound] = useState('');
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;  // Access the environment variable

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onExamChange = (event) => {
    setExam(event.target.value);
  };

  const onExamTypeChange = (event) => {
    setExamType(event.target.value);
  };

  const onRoundChange = (event) => {
    setRound(event.target.value);
  };

  const onYearChange = (event) => {
    setYear(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!file || !exam || !examType || !round || !year) {
      alert('Please fill all fields and select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('examName', `${exam}_${examType}`);
    formData.append('round', round);
    formData.append('year', year);
    setIsLoading(true);

    try {
      await axios.post(`${API_URL}/upload-round`, formData, {
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
          <label className="upload-round-label" htmlFor="exam">Exam</label>
          <select className="upload-round-select" id="exam" name="exam" value={exam} onChange={onExamChange}>
            <option value="">Select Exam</option>
            <option value="NEET_PG">NEET_PG</option>
            <option value="NEET_SS">NEET_SS</option>
            <option value="INI_CET">INI_CET</option>
          </select>
        </div>
        <div className="upload-round-group">
          <label className="upload-round-label" htmlFor="examType">Exam Type</label>
          <select className="upload-round-select" id="examType" name="examType" value={examType} onChange={onExamTypeChange}>
            <option value="">Select Exam Type</option>
            <option value="ALL_INDIA">ALL_INDIA</option>
            <option value="STATE">STATE</option>
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
